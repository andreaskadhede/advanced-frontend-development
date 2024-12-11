import Image from "next/image";
import Boardgame from "./components/Boardgame";
import Link from "next/link";

export default async function Home() {
  // Database over alle spil
  const response = await fetch(
    "https://advanced-frontend-development.andreaskadhede.dk/wp-json/wp/v2/boardgame?acf_format=standard&orderby=date&order=asc&per_page=15"
  );
  const boardgames = await response.json();
  console.log(boardgames);

  return (
    <main className="home">
      <section className="shelf top">
        {/* indsæt link til populære spil: */}
        <Link href="#">
          <article className="boardgame">
            <div className="game_lid">
              <h2>Populære spil</h2>
            </div>
            <div className="game_box"></div>
          </article>
        </Link>
        <Boardgame boardgame={boardgames[7]} />
        <Boardgame boardgame={boardgames[9]} />
        <Boardgame boardgame={boardgames[3]} />
        <Boardgame boardgame={boardgames[0]} />
      </section>
      <div className="double_shelf mid">
        <section className="shelf mid left">
          <Image
            src="/img/candle.svg"
            height={400}
            width={400}
            alt="Sterinlys"
          />
          <Image
            src="/img/plant1_small.svg"
            height={400}
            width={400}
            alt="Potteplante"
          />
        </section>
        <section className="shelf mid right">
          <Link href="/bar">
            <article className="boardgame">
              <div className="game_lid">
                <h4>Bar</h4>
              </div>
              <div className="game_box"></div>
            </article>
          </Link>
          <Image src="/img/bell.svg" height={400} width={400} alt="Klokke" />
        </section>
      </div>
      <div className="double_shelf bottom">
        <section className="shelf bottom left">
          {/* indsæt link til skjulte perler: */}
          <Link href="#">
            <article className="boardgame">
              <div className="game_lid">
                <h4>Skjulte perler</h4>
              </div>
              <div className="game_box"></div>
            </article>
          </Link>
          <Boardgame boardgame={boardgames[2]} />
          <Boardgame boardgame={boardgames[4]} />
        </section>
        <section className="shelf bottom right">
          <Image
            src="/gif/wheel_legs_low.gif"
            height={400}
            width={400}
            unoptimized
            alt="Lykkehjul"
          />
          <Link href="/inspiration">
            <article className="boardgame">
              <div className="game_lid">
                <h4>Inspiration</h4>
              </div>
              <div className="game_box"></div>
            </article>
          </Link>
        </section>
      </div>
    </main>
  );
}
