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
      {boardgame.title.rendered}
      <Image
        src={boardgame.acf.image}
        alt={boardgame.title.rendered}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
    </div>
  );
}
