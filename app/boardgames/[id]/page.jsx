import Button from "@/app/components/Button";
import Image from "next/image";

export default async function BoardgameDetailPage({ params }) {
  const { id } = await params;
  //Database for enkelt spil
  const response = await fetch(
    `https://advanced-frontend-development.andreaskadhede.dk/wp-json/wp/v2/boardgame/${id}?acf_format=standard&orderby=date&order=asc`
  );
  const boardgame = await response.json();
  console.log(boardgame);

  return (
    <main className="single_boardgame">
      {/* opdatér link til at navigere ét step tilbage i stedet */}
      <Button destination="/boardgames" />
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
              <p>{boardgame.acf.players}</p>
            </div>
            <div>
              <Image
                src="/icons/time_white.svg"
                height={100}
                width={100}
                alt="Estimeret spilletid"
              />
              <p>{boardgame.acf.time}</p>
            </div>
            <div>
              <Image
                src="/icons/age_white.svg"
                height={100}
                width={100}
                alt="Anbefalet aldersgrænse"
              />
              <p>{boardgame.acf.age}</p>
            </div>
            <div>
              <Image
                src="/icons/place_white.svg"
                height={100}
                width={100}
                alt="Placering"
              />
              <p>{boardgame.acf.placement}</p>
            </div>
          </div>
          <p>{boardgame.acf.description}</p>
        </article>
        <div className="carousel">
          <Image
            src={boardgame.acf.images.front}
            height={400}
            width={400}
            alt={boardgame.acf.name}
          />
          {/* <Image
            src={boardgame.acf.images.opened}
            height={400}
            width={400}
            alt={boardgame.acf.name}
          />
          <Image
            src={boardgame.acf.images.back}
            height={400}
            width={400}
            alt={boardgame.acf.name}
          /> */}
          <div className="breadcrumbs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <article className="rules">
          <h2>Regler</h2>
          <p>{boardgame.acf.rules}</p>
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
  );
}
