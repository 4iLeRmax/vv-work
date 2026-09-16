import z from "zod";

const ukrainianPhoneRegex = /^(?:\+380|380|0)\d{9}$/;

const nameScheme = z
  .string()
  .min(2, "Ім'я має містити щонайменше 2 символи")
  .max(128, "Ім'я не повинно перевищувати 128 символів");

const phoneScheme = z.preprocess(
  (val) => (typeof val === "string" ? val.replace(/[\s()-]/g, "") : val),
  z
    .string()
    .min(1, "Номер телефону обов'язковий")
    .regex(
      ukrainianPhoneRegex,
      "Введіть дійсний український номер телефону (наприклад, +380 67 999 9999 або 067 999 9999)",
    ),
);

const messageScheme = z
  .string()
  .max(500, "Повідомлення не повинно перевищувати 500 символів")
  .optional();

export const applyForJobScheme = z.object({
  name: nameScheme,
  phone: phoneScheme,
  message: messageScheme,
});

export type TApplyForJobScheme = z.infer<typeof applyForJobScheme>;
