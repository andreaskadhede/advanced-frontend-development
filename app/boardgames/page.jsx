import Image from "next/image";
import Boardgame from "../components/Boardgame";
// import styles from "./page.module.css";

export default async function Boardgames() {
  //Database over alle spil
  const response = await fetch(
    "http://advanced-frontend-development.andreaskadhede.dk/wp-json/wp/v2/boardgame?acf_format=standard&orderby=date&order=asc"
  );
  const boardgames = await response.json();
  console.log(boardgames);

  return (
    <main>
      <div className="games">
        {boardgames.map((boardgame) => (
          <Boardgame key={boardgame.id} boardgame={boardgame} />
        ))}
      </div>
    </main>
  );
}
