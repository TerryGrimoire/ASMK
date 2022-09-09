import React from "react";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <main>
      <h1>Atas Sintir Met Kask</h1>

      <section className="home-section">
        <div className="container2">
          <img src={logo} alt="logo" className="logo-main" />
          <img src={logo} alt="logo" className="logo-main" />
          <img src={logo} alt="logo" className="logo-main" />
          <img src={logo} alt="logo" className="logo-main" />
        </div>
        <div>
          <p>
            A mi - chemin entre documentaire et journal de bord, Atas Sintir Met
            Kask (ASMK pour les intimes) est mon cahier de retour à la Réunion
            natale. Il vous invite à poser avec moi un regard nouveau sur la
            Réunion d’aujourd’hui et à aller à la rencontre de celles et ceux
            qui feront la Réunion de demain.
          </p>
        </div>
      </section>

      <article className="center flex-col">
        <h2 className="center">Chloé Baillif</h2>

        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQG30SH9AqPxUw/profile-displayphoto-shrink_800_800/0/1650870486604?e=1668038400&v=beta&t=fV7fZSf7tx9G9zamre1TFV2drLn4xEs_LM9pfhBelGs"
          alt="Chloé souriante"
          className="chloé-main"
        />
        <p className="margin2r0 text-start">
          « Agis dans ton lieu, pense avec le monde. » De retour au péi après 8️⃣
          années en France et à l’étranger, j’ai choisi de faire mienne cette
          citation d’Edouard Glissant en consacrant pleinement mes compétences
          et mon énergie au développement de mon île, la Réunion 🌋 🇷🇪 Avec plus
          de 5️⃣ années d’expérience dans le privé et le public, je suis une
          jeune professionnelle avec des compétences reconnues en : •
          conseil/aide à la décision institutionnelle et politique 🔛 • gestion
          de projet, élaboration et mise en oeuvre de stratégies à fort impact
          🎯 • modernisation de l'action publique et innovation sociale 🚀
          Egalement présidente du "Laboratwar Nout Zidé - Think Tank Interactif
          des Jeunes pour l'Avenir de la Réunion" 🌍, membre de l’association
          “Retour Péi” ✈️ et créatrice d’un podcast 💯 % réunionnais 🎙
        </p>
      </article>
    </main>
  );
}
