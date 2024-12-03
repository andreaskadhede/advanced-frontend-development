import Image from "next/image";
// import styles from "./page.module.css";

export default async function BoardgameDetailPage({ params }) {
  const { id } = await params;
  //Indsæt egen database
  const response = await fetch(
    `https://headless.cederdorff.dk/wp-json/wp/v2/posts/${id}?acf_format=standard`
  );
  const boardgame = await response.json();
  console.log(boardgame);

  return (
    <div>
      <p>BoardgameDetailPage</p>
    </div>
  );
}
