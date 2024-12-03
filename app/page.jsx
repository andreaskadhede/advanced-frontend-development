import Image from "next/image";
import Boardgame from "./components/Boardgame";

export default function Home() {
  return (
    <main>
      <section className="shelf top">
        <h2 className="box_header">Populære spil</h2>
        <div id="pop_1" className="box_header"></div>
        <div id="pop_2" className="box_header"></div>
        <div id="pop_3" className="box_header"></div>
        <div id="pop_4" className="box_header"></div>
      </section>
      <div className="double_shelf">
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
          <h3>Bar</h3>
          <Image src="/img/bell.svg" height={400} width={400} alt="Klokke" />
        </section>
      </div>
      <div className="double_shelf">
        <section className="shelf">
          <h3>Skjulte perler</h3>
        </section>
        <section className="shelf">
          <Image
            src="/gif/wheel_legs_low.gif"
            height={400}
            width={400}
            alt="Lykkehjul"
          />
          <h3>Inspiration</h3>
        </section>
      </div>
    </main>
  );
}
