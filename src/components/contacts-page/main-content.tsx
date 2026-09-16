import ContactsInfo from "./contacts-info";
import Container from "../../UI/container";
import ContactUsForm from "./contact-us-form";

export default function MainContent() {
  return (
    <>
      <section className="pt-16 pb-12 min-[768px]:pt-20 min-[768px]:pb-16 min-[1440px]:pt-30 min-[1440px]:pb-20">
        <Container>
          <div className="flex flex-col min-[768px]:flex-row items-start gap-8 min-[1440px]:gap-12">
            <ContactsInfo />
            <ContactUsForm />
          </div>
        </Container>
      </section>
    </>
  );
}
