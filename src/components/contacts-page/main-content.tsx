import React from "react";
import ContactsInfo from "./contacts-info";
import Container from "../../UI/container";
import ContactUsForm from "./contact-us-form";

export default function MainContent() {
  return (
    <>
      <section className="pt-30 pb-20">
        <Container>
          <div className="flex items-start gap-12">
            <ContactsInfo />
            <ContactUsForm />
          </div>
        </Container>
      </section>
    </>
  );
}
