import React, { useEffect } from "react";
import Helmet from "react-helmet";

function Fans() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Atas Sintir Met Kask | Allé dit partou</title>
        <link rel="canonical" href="http://mysite.com/Fans" />
      </Helmet>
      <h1>On parle de nous</h1>
      <article className="flex-col">
        <h2>Patati Patata</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          quod rem at possimus rerum voluptates fugiat ea voluptatum. Impedit
          cupiditate libero maxime ab corrupti, accusantium nihil. Debitis dicta
          laboriosam accusantium saepe illum repellat incidunt perspiciatis ab
          sint enim ipsa nesciunt cupiditate, porro aspernatur repellendus
          facilis? Excepturi dolor exercitationem sapiente nulla.
        </p>
      </article>

      <article className="flex-col">
        <h2>Patati Patata</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          quod rem at possimus rerum voluptates fugiat ea voluptatum. Impedit
          cupiditate libero maxime ab corrupti, accusantium nihil. Debitis dicta
          laboriosam accusantium saepe illum repellat incidunt perspiciatis ab
          sint enim ipsa nesciunt cupiditate, porro aspernatur repellendus
          facilis? Excepturi dolor exercitationem sapiente nulla.
        </p>
      </article>
      <article className="flex-col">
        <h2>Patati Patata</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          quod rem at possimus rerum voluptates fugiat ea voluptatum. Impedit
          cupiditate libero maxime ab corrupti, accusantium nihil. Debitis dicta
          laboriosam accusantium saepe illum repellat incidunt perspiciatis ab
          sint enim ipsa nesciunt cupiditate, porro aspernatur repellendus
          facilis? Excepturi dolor exercitationem sapiente nulla.
        </p>
      </article>
    </main>
  );
}

export default Fans;
