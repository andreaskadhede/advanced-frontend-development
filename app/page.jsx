import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className="shelf">
        <h2>Populære spil</h2>
      </section>
      <div>
        <section className="shelf">
          <Image src="/img/bell.svg" />
          <Image
            src="/img/plant1_small.svg"
            height={400}
            width={400}
            alt="Potteplante"
          />
        </section>
        <section className="shelf">
          <h3>Bar</h3>
        </section>
      </div>
      <div>
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
