import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RetryBlock from "../src/UI/retry-block";
import {
  DialogOverlay,
  DialogPortal,
  DialogWrapper,
  RootDialog,
} from "../src/UI/dialog";
import ApplyForJob from "../src/components/partner-detail-page/partner-vacancies/apply-for-job";
import { submitApplication } from "../src/api/mockApi";

jest.mock("../src/api/mockApi", () => ({
  submitApplication: jest.fn(),
}));

describe("edge-case UI states", () => {
  afterEach(() => {
    document.querySelectorAll("#modals").forEach((host) => host.remove());
  });

  it("renders retry and loading states and invokes retry", async () => {
    const retry = jest.fn();
    const { rerender } = render(<RetryBlock onRetry={retry} />);

    await userEvent.click(
      screen.getByRole("button", { name: "Спробувати знову" }),
    );
    expect(retry).toHaveBeenCalledTimes(1);

    rerender(
      <RetryBlock
        onRetry={retry}
        isLoading
        title="Loading"
        message="Please wait"
      />,
    );
    expect(
      screen.getByRole("button", { name: "Завантаження..." }),
    ).toBeDisabled();
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("supports dialog portals, escape, and overlay close", () => {
    const handleClose = jest.fn();
    const { unmount } = render(
      <RootDialog handleClose={handleClose}>
        <DialogWrapper>
          <DialogOverlay handleClose={handleClose} />
        </DialogWrapper>
      </RootDialog>,
    );

    fireEvent.keyDown(window, { key: "Escape" });
    fireEvent.click(document.querySelector(".backdrop-blur-xs") as HTMLElement);
    expect(handleClose).toHaveBeenCalledTimes(2);
    unmount();

    const { container } = render(<DialogPortal>content</DialogPortal>);
    expect(container).toBeEmptyDOMElement();
    const modalHost = document.createElement("div");
    modalHost.id = "modals";
    document.body.appendChild(modalHost);
    render(<DialogPortal>content</DialogPortal>);
    expect(modalHost).toHaveTextContent("content");
  });

  it("shows the application retry state when submission fails", async () => {
    const user = userEvent.setup();
    jest.mocked(submitApplication).mockRejectedValueOnce(new Error("offline"));
    const modalHost = document.createElement("div");
    modalHost.id = "modals";
    document.body.appendChild(modalHost);
    render(<ApplyForJob />);

    await user.click(screen.getByRole("button", { name: "Відгукнутися" }));
    await user.type(screen.getByLabelText("Ваше ім'я *"), "Олена");
    await user.type(screen.getByLabelText("Телефон *"), "+380671234567");
    await user.click(
      screen.getByRole("button", { name: "Надіслати повідомлення" }),
    );

    expect(await screen.findByText("Щось пішло не так")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Спробувати знову" }));
    expect(screen.getByLabelText("Ваше ім'я *")).toHaveValue("");
  });

  it("handles an unsuccessful application response and closes the modal", async () => {
    const user = userEvent.setup();
    jest
      .mocked(submitApplication)
      .mockResolvedValueOnce({ success: false } as never);
    const modalHost = document.createElement("div");
    modalHost.id = "modals";
    document.body.appendChild(modalHost);
    render(<ApplyForJob />);

    await user.click(screen.getByRole("button", { name: "Відгукнутися" }));
    await user.type(screen.getByLabelText("Ваше ім'я *"), "Олена");
    await user.type(screen.getByLabelText("Телефон *"), "+380671234567");
    await user.click(
      screen.getByRole("button", { name: "Надіслати повідомлення" }),
    );
    expect(await screen.findByText("Щось пішло не так")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Спробувати знову" }));
    fireEvent.click(
      document.querySelector(".absolute.top-10.right-10") as HTMLElement,
    );
    expect(
      screen.getByRole("button", { name: "Відгукнутися" }),
    ).toBeInTheDocument();
  });
});
