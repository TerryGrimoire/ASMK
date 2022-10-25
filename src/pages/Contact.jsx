import React, { useEffect } from "react";
import Helmet from "react-helmet";
import SocialMedia from "../components/SocialMedia";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col align-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Atas Sintir Met Kask | Contact</title>
        <link
          rel="canonical"
          href="https://atas-sintir-met-kask.netlify.app/Contact"
        />
      </Helmet>
      <h1>Nous joindre</h1>
      <SocialMedia />
    </main>
  );
}

export default Contact;
