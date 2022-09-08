import React, { useEffect } from "react";
import SocialMedia from "../components/SocialMedia";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col align-center">
      <h1>Nous joindre</h1>
      <SocialMedia />
    </main>
  );
}

export default Contact;
