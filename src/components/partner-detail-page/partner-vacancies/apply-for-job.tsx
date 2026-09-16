import { useState } from "react";
import BaseModal from "../../../UI/base-modal";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  applyForJobScheme,
  type TApplyForJobScheme,
} from "../../../lib/schemes/apply-for-job-scheme";
import { submitApplication } from "../../../api/mockApi";
import clsx from "clsx";
import { Check, LoaderCircle } from "lucide-react";
import RetryBlock from "../../../UI/retry-block";

export default function ApplyForJob() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(applyForJobScheme),
  });

  const handleToggle = () => setIsOpen((p) => !p);

  const handleClose = () => {
    setIsOpen(false);
    setIsSuccess(false);
    setIsError(false);
    reset();
  };

  const handleRetry = () => {
    setIsError(false);
    setIsSuccess(false);
    reset();
  };

  const onSubmit: SubmitHandler<TApplyForJobScheme> = async (data) => {
    setIsError(false);

    try {
      const response = await submitApplication(data);

      if (response && response.success) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    }
  };

  const success = (
    <div className="w-full max-w-120 shrink-0 bg-white border border-bor-primary rounded-xl p-6 min-[768px]:p-10">
      <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
        <div className="text-2xl font-bold text-green-500 flex items-center gap-2">
          <Check size={20} />
          <h1>Успіх !</h1>
        </div>
        <p className="text-brand-secondary text-sm">
          Вашу заявку успішно надіслано. Ми зв'яжемося з вами найближчим часом!
        </p>
        <button
          onClick={handleClose}
          className="mt-4 px-6 py-2 bg-brand-primary text-white rounded-lg"
        >
          Закрити
        </button>
      </div>
    </div>
  );

  const content = (
    <div className="w-full max-w-120 shrink-0 bg-white border border-bor-primary rounded-xl p-6 min-[768px]:p-10">
      <h2 className="text-brand-primary text-2xl">Напишіть нам</h2>
      <p className="text-brand-secondary text-sm">
        Заповніть форму, і ми відповімо вам якнайшвидше.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-5 mt-8"
      >
        <div className="w-full flex flex-col items-start gap-1">
          <label
            htmlFor="input-name"
            className="text-brand-secondary text-sm font-semibold"
          >
            Ваше ім'я *
          </label>
          <input
            type="text"
            id="input-name"
            {...register("name")}
            placeholder="Введіть ваше ім'я"
            className="w-full p-4 border border-bor-primary rounded-lg"
          />
          {errors.name ? (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          ) : null}
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label
            htmlFor="input-phone"
            className="text-brand-secondary text-sm font-semibold"
          >
            Телефон *
          </label>
          <input
            type="text"
            id="input-phone"
            {...register("phone")}
            placeholder="+380"
            className="w-full p-4 border border-bor-primary rounded-lg"
          />
          {errors.phone ? (
            <span className="text-red-500 text-xs">{errors.phone.message}</span>
          ) : null}
        </div>

        <div className="w-full flex flex-col items-start gap-1">
          <label
            htmlFor="input-message"
            className="text-brand-secondary text-sm font-semibold"
          >
            Повідомлення
          </label>
          <textarea
            id="input-message"
            {...register("message")}
            placeholder="Опишіть ваше питання детальніше..."
            className="w-full p-4 border border-bor-primary rounded-lg"
          />
          {errors.message ? (
            <span className="text-red-500 text-xs">
              {errors.message.message}
            </span>
          ) : null}
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className={clsx(
            "w-full flex items-center justify-center h-14 rounded-xl text-white",
            {
              "bg-brand-accent": !isSubmitting,
              "bg-brand-accent/40": isSubmitting,
            },
          )}
        >
          {isSubmitting ? (
            <LoaderCircle size={20} className="animate-spin" />
          ) : (
            "Надіслати повідомлення"
          )}
        </button>
      </form>
    </div>
  );

  return (
    <>
      <button
        onClick={handleToggle}
        className="px-7 py-3 rounded-md bg-brand-primary text-white"
      >
        Відгукнутися
      </button>
      {isOpen ? (
        <BaseModal onClose={handleClose}>
          {isSuccess ? success : null}
          {isError ? <RetryBlock onRetry={handleRetry} /> : null}
          {!isSuccess && !isError ? content : null}
        </BaseModal>
      ) : null}
    </>
  );
}
