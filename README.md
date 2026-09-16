# React + TypeScript + Vite

## Мої рішення

- **Структура Головної сторінки.** Розбив сторінку на послідовні секції: пошук, популярні напрямки, категорії, актуальні вакансії, пояснення процесу та соціальний доказ. Так користувач спочатку виконує основну дію, а потім отримує додаткову інформацію й довіру до сервісу.
- **Швидкий пошук вакансій.** Додав пошук за назвою та фільтр за індустрією. Значення фільтрів синхронізуються з URL, пошук має debounce, тому список не перераховується на кожен символ і посиланням можна поділитися з уже вибраними параметрами.
- **Стейт-менеджмент без Redux/Zustand.** Глобального стану, який вимагав би окремого стора, у застосунку немає. Локальний UI-стан зберігається в компонентах, а асинхронні дані ізольовані в query-хуках із єдиними станами loading/error/retry.
- **Зайві ре-рендери у списках.** Фільтрація винесена в `useMemo`, обробники зміни параметрів стабілізовані через `useCallback`, а елементи списків мають стабільні `key`. Це зменшує кількість повторних обчислень під час пошуку та перемикання категорій.
- **Зміни в брифі.** Додав окремі сторінки партнерів, детальну сторінку компанії з вакансіями, контакти, форму відгуку, accessibility-перевірки та unit/integration-тести.

## Запуск

```bash
npm install
npm run dev
```

Основні маршрути: `/`, `/partners`, `/partners/:slug`, `/contacts`

## Архітектура

- `pages/` містить композицію сторінок, `components/` — перевикористовувані UI-блоки, `UI/` — базові примітиви.
- `hooks/` інкапсулює завантаження даних, retry/error-стани та URL-синхронізовану фільтрацію вакансій.
- `api/mockApi.ts` імітує затримку 300–800 мс та помилки запитів у 20% випадків.

## Тести

```bash
npm test
npm run test:coverage
```

Тести покривають debounce-фільтрацію, валідацію заявки, retry-логіку, маршрути та контент усіх сторінок. Окремий axe-набір перевіряє Home, Partners, Contacts, Partner Detail і модальну форму заявки.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
