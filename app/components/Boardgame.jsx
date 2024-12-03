import Image from "next/image";
import Link from "next/link";
// import styles from "./page.module.css";

export default function Boardgame({ boardgame }) {
  return (
    <Link href={`/boardgames/${boardgame.id}`}>
      <div key={boardgame.id} className="boardgame">
        <div className="game_lid">
          <Image
            src="/partners_box.jpg"
            // {boardgame.acf.image}
            alt={boardgame.title.rendered}
            width={400}
            height={400}
            className="boardgame_image"
          />
          <div className="game_info">
            <div>
              <Image
                src="/icons/person_white.svg"
                alt="askdn"
                width={400}
                height={400}
                className="nav_icons"
              />
              <p>6</p>
            </div>
            <div>
              <Image
                src="/icons/time_white.svg"
                alt="askdn"
                width={400}
                height={400}
                className="nav_icons"
              />
              <p>45-60 min</p>
            </div>
            <div>
              <Image
                src="/icons/age_white.svg"
                alt="askdn"
                width={100}
                height={70}
                className="nav_icons"
              />
              <p>8+</p>
            </div>
          </div>
        </div>

        <div className="game_box"></div>
      </div>
    </Link>
  );
}
