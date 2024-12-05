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
    <main>
      {boardgame.acf.name}

      <div>
        <div>
          <Image
            src="/icons/person_white.svg"
            alt={boardgame.acf.name}
            width={400}
            height={400}
            className="nav_icons"
          />
          {boardgame.acf.players}
        </div>
        <div>
          <Image
            src="/icons/time_white.svg"
            alt={boardgame.acf.name}
            width={400}
            height={400}
            className="nav_icons"
          />
          {boardgame.acf.time}
        </div>
        <div>
          <Image
            src="/icons/age_white.svg"
            alt={boardgame.acf.name}
            width={400}
            height={400}
            className="nav_icons"
          />
          {boardgame.acf.age}
        </div>
        <div>
          <Image
            src="/icons/age_white.svg"
            alt={boardgame.acf.name}
            width={400}
            height={400}
            className="nav_icons"
          />
          {boardgame.acf.placement}
        </div>
      </div>

      <p>Describtion</p>
      {boardgame.acf.description}

      <Image
        src={boardgame.acf.images}
        alt={boardgame.acf.name}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />

      <p>Rules</p>
      {boardgame.acf.rules}

      {/* Foreslag til spil */}
    </main>
  );
}
