import React from "react";
import ContactOffice from "./ContactOffice";
import ContactUs from "./ContactUs";

function ContactPage({ handleIntercom }) {
  return (
    <>
      <ContactUs handleIntercom={handleIntercom} />
      <ContactOffice />
    </>
  );
}

export default ContactPage;
