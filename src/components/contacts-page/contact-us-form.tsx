import React from "react";

export default function ContactUsForm() {
  return (
    <>
      <div className="w-120 shrink-0 bg-primary border border-bor-primary rounded-xl p-10">
        <h2 className="text-brand-primary text-2xl">Напишіть нам</h2>
        <p className="text-brand-secondary text-sm">
          Заповніть форму, і ми відповімо вам якнайшвидше.
        </p>
        <form action="" className="flex flex-col items-start gap-5 mt-8">
          <div className="w-full flex flex-col items-start gap-1">
            <label
              htmlFor="input-name"
              className="text-brand-secondary text-sm font-semibold"
            >
              Ваше ім'я
            </label>
            <input
              type="text"
              id="input-name"
              name="name"
              placeholder="Введіть ваше ім'я"
              className="w-full p-4 border border-bor-primary rounded-lg"
            />
          </div>
          <div className="w-full flex flex-col items-start gap-1">
            <label
              htmlFor="input-email"
              className="text-brand-secondary text-sm font-semibold"
            >
              Електронна пошта
            </label>
            <input
              type="email"
              id="input-email"
              name="email"
              placeholder="example@mail.com"
              className="w-full p-4 border border-bor-primary rounded-lg"
            />
          </div>
          <div className="w-full flex flex-col items-start gap-1">
            <label
              htmlFor="input-phone"
              className="text-brand-secondary text-sm font-semibold"
            >
              Телефон
            </label>
            <input
              type="text"
              id="input-phone"
              name="phone"
              placeholder="+380"
              className="w-full p-4 border border-bor-primary rounded-lg"
            />
          </div>
          <div className="w-full flex flex-col items-start gap-1">
            <label
              htmlFor="input-title"
              className="text-brand-secondary text-sm font-semibold"
            >
              Тема звернення
            </label>
            <input
              type="text"
              id="input-title"
              name="title"
              placeholder="Оберіть тему або вкажіть коротко"
              className="w-full p-4 border border-bor-primary rounded-lg"
            />
          </div>
          <div className="w-full flex flex-col items-start gap-1">
            <label
              htmlFor="input-description"
              className="text-brand-secondary text-sm font-semibold"
            >
              Повідомлення
            </label>
            <textarea
              id="input-description"
              name="description"
              placeholder="Опишіть ваше питання детальніше..."
              className="w-full p-4 border border-bor-primary rounded-lg"
            />
          </div>
          <button
            type="button"
            className="w-full p-4 rounded-xl bg-brand-accent text-white"
          >
            Надіслати повідомлення
          </button>
        </form>
      </div>
    </>
  );
}
