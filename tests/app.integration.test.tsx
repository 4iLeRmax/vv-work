import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";
import { submitApplication } from "../src/api/mockApi";

jest.mock("../src/api/mockApi", () => ({
  fetchPartners: jest
    .fn()
    .mockResolvedValue(
      jest.requireActual("../src/data/partners.data").partners,
    ),
  fetchPartnerBySlug: jest
    .fn()
    .mockImplementation(async (slug: string) =>
      jest
        .requireActual("../src/data/partners.data")
        .partners.find((partner: { slug: string }) => partner.slug === slug),
    ),
  fetchJobsByPartnerSlug: jest
    .fn()
    .mockImplementation(async (slug: string) =>
      jest
        .requireActual("../src/data/jobs.data")
        .jobs.filter(
          (job: { partnerSlug: string }) => job.partnerSlug === slug,
        ),
    ),
  fetchAllJobs: jest
    .fn()
    .mockResolvedValue(jest.requireActual("../src/data/jobs.data").jobs),
  submitApplication: jest.fn().mockResolvedValue({ success: true }),
}));

import { partners } from "../src/data/partners.data";
import { jobs } from "../src/data/jobs.data";
import { waitFor } from "@testing-library/react";

describe("application routing", () => {
  it("renders all major Home page content", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByPlaceholderText("Посада або ключове слово"),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Місто або країна")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Знайти" })).toBeInTheDocument();

    for (const text of [
      "Будівництво",
      "Виробництво",
      "Логістика",
      "IT",
      "Водії",
      "Створіть профіль",
      "Оберіть вакансію",
      "Починайте працювати",
      "Простий шлях до роботи в Європі",
      "Що кажуть люди",
      "Олександр Коваленко",
      "Потрібні працівники?",
    ]) {
      expect(screen.getAllByText(text).length).toBeGreaterThan(0);
    }

    for (const text of [
      "Bosch",
      "Lidl",
      "DHL",
      "Skanska",
      "Wolt",
      "94%",
      "4.8/5",
      "1,200+",
      "12хв",
    ]) {
      expect(screen.getByText(text)).toBeInTheDocument();
    }

    expect(
      await screen.findByText("Свіжі пропозиції роботи"),
    ).toBeInTheDocument();
  });

  it("renders the home route and switches recommended job categories", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByText("Будуй кар'єру та бізнес у Європі з VV Work"),
    ).toBeInTheDocument();
    expect(screen.getAllByText("Категорії вакансій").length).toBeGreaterThan(0);
    expect(
      await screen.findByText("Свіжі пропозиції роботи"),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "IT" }));
    expect(screen.getByRole("button", { name: "IT" })).toHaveClass(
      "bg-brand-accent",
    );
  });

  it("opens and closes the mobile navigation", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    const menuButton = screen.getByRole("button", { name: "Відкрити меню" });
    await user.click(menuButton);
    const closeMenuButton = screen.getByRole("button", {
      name: "Закрити меню",
    });
    expect(closeMenuButton).toHaveAttribute("aria-expanded", "true");
    const mobileMenu = closeMenuButton.parentElement;
    expect(
      within(mobileMenu as HTMLElement).getByText("Знайти працівника"),
    ).toBeInTheDocument();

    await user.click(
      within(mobileMenu as HTMLElement).getByText("Знайти працівника"),
    );
    expect(
      screen.getByRole("button", { name: "Відкрити меню" }),
    ).toBeInTheDocument();
  });

  it("loads partners and opens a partner detail page", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/partners"]}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText(partners[0].name)).toBeInTheDocument();
    await user.click(screen.getAllByRole("link", { name: /Детальніше/i })[0]);

    expect(await screen.findByText(partners[0].about)).toBeInTheDocument();
    expect(screen.getByText("Вакансії компанії")).toBeInTheDocument();
  });

  it("renders every partner card with its core content", async () => {
    render(
      <MemoryRouter initialEntries={["/partners"]}>
        <App />
      </MemoryRouter>,
    );

    for (const partner of partners) {
      expect(await screen.findByText(partner.name)).toBeInTheDocument();
      expect(screen.getByText(partner.description)).toBeInTheDocument();
      expect(
        screen.getByText(
          `${partner.location.country}, ${partner.location.city}`,
        ),
      ).toBeInTheDocument();
      for (const perk of partner.perks) {
        expect(screen.getAllByText(perk).length).toBeGreaterThan(0);
      }
    }
  });

  it("renders the contacts route", () => {
    render(
      <MemoryRouter initialEntries={["/contacts"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText("Напишіть нам")).toBeInTheDocument();
    expect(screen.getByLabelText("Електронна пошта")).toBeInTheDocument();
    for (const text of [
      "Загальні контакти",
      "Гаряча лінія",
      "+380 99 999 9999",
      "support@vvwork.eu",
      "Пн–Пт: 09:00 - 18:00 (за київським часом)",
      "Київ, Україна",
      "вул. Хрещатик, 15, офіс 402",
      "kyiv@vvwork.eu",
      "Варшава, Польща",
      "Al. Jerozolimskie 85, 02-001",
      "warsaw@vvwork.eu",
      "Ваше ім'я",
      "Телефон",
      "Тема звернення",
      "Повідомлення",
    ]) {
      expect(
        screen.getAllByText(text, { exact: false }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("renders all partner detail content and vacancies", async () => {
    const partnerJobs = jobs.filter(
      (job) => job.partnerSlug === partners[0].slug,
    );
    render(
      <MemoryRouter initialEntries={[`/partners/${partners[0].slug}`]}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText(partners[0].about)).toBeInTheDocument();
    expect(
      screen.getByText(partners[0].website.replace("https://", "")),
    ).toBeInTheDocument();
    for (const perk of partners[0].perks) {
      expect(screen.getAllByText(perk).length).toBeGreaterThan(0);
    }
    for (const job of partnerJobs) {
      expect(screen.getByText(job.title)).toBeInTheDocument();
      for (const requirement of job.requirements) {
        expect(screen.getAllByText(requirement).length).toBeGreaterThan(0);
      }
      for (const benefit of job.benefits) {
        expect(screen.getAllByText(benefit).length).toBeGreaterThan(0);
      }
    }
  });

  it("filters vacancies by title and industry", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={[`/partners/${partners[0].slug}`]}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText("Муляр")).toBeInTheDocument();
    const search = screen.getByPlaceholderText("Пошук за назвою вакансії...");

    await user.type(search, "Штукатур");

    expect(await screen.findByText("Штукатур-маляр")).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.queryByText("Муляр")).not.toBeInTheDocument(),
    );

    await user.click(screen.getByRole("button", { name: "Усі" }));
    await user.click(screen.getByRole("button", { name: "IT" }));

    expect(
      await screen.findByText("За вашим пошуком не знайдено результатів"),
    ).toBeInTheDocument();
  });

  it("validates and submits an application from a vacancy card", async () => {
    const user = userEvent.setup();
    render(
      <>
        <MemoryRouter initialEntries={[`/partners/${partners[0].slug}`]}>
          <App />
        </MemoryRouter>
        <div id="modals" />
      </>,
    );

    await screen.findByText("Муляр");
    await user.click(
      screen.getAllByRole("button", { name: "Відгукнутися" })[0],
    );
    await user.click(
      screen.getByRole("button", { name: "Надіслати повідомлення" }),
    );

    expect(await screen.findByText("Ім'я обов'язкове")).toBeInTheDocument();

    await user.type(screen.getByLabelText("Ваше ім'я *"), "Олена");
    await user.type(screen.getByLabelText("Телефон *"), "+380671234567");
    await user.type(screen.getByLabelText("Повідомлення"), "Хочу відгукнутися");
    await user.click(
      screen.getByRole("button", { name: "Надіслати повідомлення" }),
    );

    expect(
      await screen.findByText(/Вашу заявку успішно надіслано/),
    ).toBeInTheDocument();
    expect(submitApplication).toHaveBeenCalledWith({
      name: "Олена",
      phone: "+380671234567",
      message: "Хочу відгукнутися",
    });
  });
});
