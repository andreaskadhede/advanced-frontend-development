import Image from "next/image";
import Link from "next/link";
// import styles from "./page.module.css";

export default function Boardgame({ boardgame }) {
  return (
    <Link href={`/boardgames/${boardgame.id}`}>
      <article
        key={boardgame.id}
        className="bg-white shadow-md rounded overflow-hidden"
      >
        <Image
          src={boardgame.acf.image}
          alt={boardgame.title.rendered}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg text-gray-800 font-semibold">
            {boardgame.title.rendered}
          </h2>
        </div>
      </article>
    </Link>
  );
}
