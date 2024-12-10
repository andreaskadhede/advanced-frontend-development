import Image from "next/image";
import Boardgame from "./components/Boardgame";

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
        <h2 className="box_header">Populære spil</h2>
        <Boardgame id="pop_1" boardgame={boardgames[3]} />
        <Boardgame id="pop_2" boardgame={boardgames[7]} />
        <Boardgame id="pop_3" boardgame={boardgames[12]} />
        <Boardgame id="pop_4" boardgame={boardgames[0]} />
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
          <h4 className="box_header">Bar</h4>
          <Image src="/img/bell.svg" height={400} width={400} alt="Klokke" />
        </section>
      </div>
      <div className="double_shelf bottom">
        <section className="shelf bottom left">
          <h4 className="box_header">Skjulte perler</h4>
          <Boardgame id="per_1" boardgame={boardgames[2]} />
          <Boardgame id="per_2" boardgame={boardgames[4]} />
        </section>
        <section className="shelf bottom right">
          <Image
            src="/gif/wheel_legs_low.gif"
            height={400}
            width={400}
            unoptimized
            alt="Lykkehjul"
          />
          <h4 className="box_header">Inspiration</h4>
        </section>
      </div>
    </main>
  );
}
