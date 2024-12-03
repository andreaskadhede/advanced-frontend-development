import Image from "next/image";
import Boardgame from "../components/Boardgame";
// import styles from "./page.module.css";

export default async function Boardgames() {
  //Indsæt egen database
  const response = await fetch(
    "https://headless.cederdorff.dk/wp-json/wp/v2/posts?acf_format=standard&orderby=date&order=asc"
  );
  const boardgames = await response.json();
  console.log(boardgames);

  return (
    <section>
      {boardgames.map((boardgame) => (
        <Boardgame key={boardgame.id} post={boardgame} />
      ))}
    </section>
  );
}
