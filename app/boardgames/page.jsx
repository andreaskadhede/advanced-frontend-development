import Image from "next/image";
import Boardgame from "../components/Boardgame";
// import styles from "./page.module.css";

export default async function Boardgames() {
  //Database over alle spil
  const response = await fetch(
    "http://advanced-frontend-development.andreaskadhede.dk/wp-json/wp/v2/boardgame?acf_format=standard&orderby=date&order=asc&per_page=15"
  );
  const boardgames = await response.json();
  console.log(boardgames);

  return (
    <main>
      <div className="games">
        <div className="search_and_filter">
          <div className="search">
            <Image
              src="/icons/search.svg"
              alt="search icon"
              width={400}
              height={400}
              className="card_icon"
            />
            <input placeholder="Søg..." className="card_input"></input>
            <Image
              src="/icons/spades.svg"
              alt="spades icon"
              width={400}
              height={400}
              className="card_icon"
            />
          </div>

          <div className="filter">
            <p>Filtrering</p>
            <Image
              src="/icons/heart.svg"
              alt="heart icon"
              width={400}
              height={400}
              className="card_icon"
            />
          </div>
        </div>
        {boardgames.map((boardgame) => (
          <Boardgame key={boardgame.id} boardgame={boardgame} />
        ))}
      </div>
    </main>
  );
}
