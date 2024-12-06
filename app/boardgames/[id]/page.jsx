import Button from "@/app/components/Button";
import Image from "next/image";
// import styles from "./page.module.css";

export default async function BoardgameDetailPage({ params }) {
  const { id } = await params;
  //Database for enkelt spil
  const response = await fetch(
    `http://advanced-frontend-development.andreaskadhede.dk/wp-json/wp/v2/boardgame/${id}?acf_format=standard&orderby=date&order=asc`
  );
  const boardgame = await response.json();
  console.log(boardgame);

  return (
    <main className="single_boardgame">
      <Button />
      <section className="boardgame_info">
        <article className="intro">
          <h1>{boardgame.acf.name}</h1>
          <div className="icons">
            <div>
              <Image
                src="/icons/person_white.svg"
                height={100}
                width={100}
                alt="Antal spillere"
              />
              <p>4</p>
            </div>
            <div>
              <Image
                src="/icons/time_white.svg"
                height={100}
                width={100}
                alt="Estimeret spilletid"
              />
              <p>45-60</p>
            </div>
            <div>
              <Image
                src="/icons/age_white.svg"
                height={100}
                width={100}
                alt="Anbefalet aldersgrænse"
              />
              <p>10+</p>
            </div>
            <div>
              <Image
                src="/icons/place_white.svg"
                height={100}
                width={100}
                alt="Placering"
              />
              <p>A2</p>
            </div>
          </div>
          <p>
            Nogle kalder det strategisk Ludo med kort - og det er vel egentlig
            ikke skudt helt ved siden af! 
          </p>
        </article>
        <div className="carousel">
          <Image
            src="/partners_box.jpg"
            height={400}
            width={400}
            alt="placeholder image"
          />
          <div className="breadcrumbs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <article className="rules">
          <h2>Regler</h2>
          <p>En masse regler</p>
        </article>
        <article className="suggestions">
          <h2>Lignende spil</h2>
          <div className="games shelf top">
            <div id="pop_1" className="box_header"></div>
            <div id="pop_2" className="box_header"></div>
            <div id="pop_3" className="box_header"></div>
            <div id="pop_4" className="box_header"></div>
          </div>
        </article>
        <article className="suggestions">
          <h2>Samme antal spillere</h2>
          <div className="games shelf top">
            <div id="pop_1" className="box_header"></div>
            <div id="pop_2" className="box_header"></div>
            <div id="pop_3" className="box_header"></div>
            <div id="pop_4" className="box_header"></div>
          </div>
        </article>
        <article className="suggestions">
          <h2>Samme spilletid</h2>
          <div className="games shelf top">
            <div id="pop_1" className="box_header"></div>
            <div id="pop_2" className="box_header"></div>
            <div id="pop_3" className="box_header"></div>
            <div id="pop_4" className="box_header"></div>
          </div>
        </article>
      </section>
    </main>
    // <main>
    //   {boardgame.acf.name}

    //   <div>
    //     <div>
    //       <Image
    //         src="/icons/person_white.svg"
    //         alt={boardgame.acf.name}
    //         width={400}
    //         height={400}
    //         className="nav_icons"
    //       />
    //       {boardgame.acf.players}
    //     </div>
    //     <div>
    //       <Image
    //         src="/icons/time_white.svg"
    //         alt={boardgame.acf.name}
    //         width={400}
    //         height={400}
    //         className="nav_icons"
    //       />
    //       {boardgame.acf.time}
    //     </div>
    //     <div>
    //       <Image
    //         src="/icons/age_white.svg"
    //         alt={boardgame.acf.name}
    //         width={400}
    //         height={400}
    //         className="nav_icons"
    //       />
    //       {boardgame.acf.age}
    //     </div>
    //     <div>
    //       <Image
    //         src="/icons/age_white.svg"
    //         alt={boardgame.acf.name}
    //         width={400}
    //         height={400}
    //         className="nav_icons"
    //       />
    //       {boardgame.acf.placement}
    //     </div>
    //   </div>

    //   <p>Describtion</p>
    //   {boardgame.acf.description}

    //   <Image
    //     src={boardgame.acf.images}
    //     alt={boardgame.acf.name}
    //     width={400}
    //     height={200}
    //     className="w-full h-48 object-cover"
    //   />

    //   <p>Rules</p>
    //   {boardgame.acf.rules}

    //   {/* Foreslag til spil */}
    // </main>
  );
}
