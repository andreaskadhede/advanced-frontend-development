import Image from "next/image";
import Link from "next/link";

export default function Boardgame({ boardgame }) {
  return (
    <Link href={`/boardgames/${boardgame.id}`}>
      <div key={boardgame.id} className="boardgame">
        <div
          className="game_lid"
          style={{ backgroundColor: boardgame.acf.background_color }}
        >
          {/* <p>{boardgame.acf.name}</p> */}
          <Image
            src={
              boardgame.acf.cover ? boardgame.acf.cover : "/partners_box.jpg"
            }
            // {boardgame.acf.image}
            alt={boardgame.title.rendered}
            width={400}
            height={400}
            className="boardgame_image"
          />
          <div className="game_info">
            <div>
              <Image
                src={
                  boardgame.acf.info_color === "hvid"
                    ? "/icons/person_white.svg"
                    : "/icons/person_black.svg"
                }
                alt="Antal personer"
                width={400}
                height={400}
                className="nav_icons"
              />
              <p
                style={{
                  color:
                    boardgame.acf.info_color === "hvid"
                      ? "var(--white)"
                      : "var(--black)",
                }}
              >
                {boardgame.acf.players}
              </p>
            </div>
            <div>
              <Image
                src={
                  boardgame.acf.info_color === "hvid"
                    ? "/icons/time_white.svg"
                    : "/icons/time_black.svg"
                }
                alt="Estimeret spilletid"
                width={400}
                height={400}
                className="nav_icons"
              />
              <p
                style={{
                  color:
                    boardgame.acf.info_color === "hvid"
                      ? "var(--white)"
                      : "var(--black)",
                }}
              >{`${boardgame.acf.time} min`}</p>
            </div>
            <div>
              <Image
                src={
                  boardgame.acf.info_color === "hvid"
                    ? "/icons/age_white.svg"
                    : "/icons/age_black.svg"
                }
                alt="Anbefalet aldersgrænse"
                width={400}
                height={400}
                className="nav_icons"
              />
              <p
                style={{
                  color:
                    boardgame.acf.info_color === "hvid"
                      ? "var(--white)"
                      : "var(--black)",
                }}
              >{`${boardgame.acf.age}+`}</p>
            </div>
          </div>
        </div>

        <div className="game_box"></div>
      </div>
    </Link>
  );
}
