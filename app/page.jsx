import Image from "next/image";
import Boardgame from "./components/Boardgame";
import Button from "./components/Button";
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
            <Button
               destination="/boardgames"
               fillColor="var(--darkGreen)"
               text="Populære spil"
               fontSize="var(--fontsizeXL)"
            />
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
               <Button
                  destination="/bar"
                  text="Bar"
                  fillColor="var(--purple)"
                  fontSize="var(--fontsizeM)"
               />
               <Link href="/bar">
                  <Image
                     src="/img/bell.svg"
                     height={400}
                     width={400}
                     alt="Klokke"
                  />
               </Link>
            </section>
         </div>
         <div className="double_shelf bottom">
            <section className="shelf bottom left">
               <Button
                  destination="/boardgames"
                  text="Skjulte perler"
                  fontSize="var(--fontsizeM)"
               />
               <Boardgame boardgame={boardgames[10]} />
               <Boardgame boardgame={boardgames[4]} />
            </section>
            <section className="shelf bottom right">
               <Link href="/inspiration">
                  <Image
                     src="/gif/wheel_legs_low.gif"
                     height={400}
                     width={400}
                     unoptimized
                     alt="Lykkehjul"
                  />
               </Link>
               <Button
                  destination="/inspiration"
                  text="Inspiration"
                  fillColor="var(--blue)"
                  fontSize="var(--fontsizeM)"
               />
            </section>
         </div>
      </main>
   );
}
