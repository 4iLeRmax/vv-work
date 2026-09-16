import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import { partners } from "../src/data/partners.data";

expect.extend(toHaveNoViolations);

type MockPartner = { slug: string };
type MockJob = { partnerSlug: string };

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
        .partners.find((partner: MockPartner) => partner.slug === slug),
    ),
  fetchJobsByPartnerSlug: jest
    .fn()
    .mockImplementation(async (slug: string) =>
      jest
        .requireActual("../src/data/jobs.data")
        .jobs.filter((job: MockJob) => job.partnerSlug === slug),
    ),
  fetchAllJobs: jest
    .fn()
    .mockResolvedValue(jest.requireActual("../src/data/jobs.data").jobs),
  submitApplication: jest.fn().mockResolvedValue({ success: true }),
}));

describe("accessibility", () => {
  it("has no axe violations on the Home page", async () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    await screen.findByText("Свіжі пропозиції роботи");
    expect(await axe(container)).toHaveNoViolations();
  });

  it("has no axe violations on the Partners page", async () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/partners"]}>
        <App />
      </MemoryRouter>,
    );

    await screen.findByText(partners[0].name);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("has no axe violations on the Contacts page", async () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/contacts"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText("Напишіть нам")).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("has no axe violations on the Partner Detail page", async () => {
    const { container } = render(
      <MemoryRouter initialEntries={[`/partners/${partners[0].slug}`]}>
        <App />
      </MemoryRouter>,
    );

    await screen.findByText("Вакансії компанії");
    expect(await axe(container)).toHaveNoViolations();
  });

  it("has no axe violations when the application modal is open", async () => {
    const user = userEvent.setup();
    const modalHost = document.createElement("div");
    modalHost.id = "modals";
    document.body.appendChild(modalHost);
    const { container } = render(
      <MemoryRouter initialEntries={[`/partners/${partners[0].slug}`]}>
        <App />
      </MemoryRouter>,
    );

    await screen.findByText("Муляр");
    await user.click(
      screen.getAllByRole("button", { name: "Відгукнутися" })[0],
    );
    expect(screen.getByLabelText("Ваше ім'я *")).toBeInTheDocument();
    expect(await axe(document.body)).toHaveNoViolations();
    expect(container).toBeInTheDocument();
  });
});
