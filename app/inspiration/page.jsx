import Image from "next/image";
// import styles from "./page.module.css";

export default function Inspiration() {
   return (
      <main className="inspiration_main">
         <Image
            className="inspiration_background"
            src="/img/inspiration_background.svg"
            height={1000}
            width={1000}
            alt="Inspirations lokale"
         />

         <div className="inspiration_grid">
            <Image
               className="bowl"
               src="/gif/bowl.gif"
               height={400}
               width={400}
               alt="Lodtrækningsskål"
            />
            {/* <Image
            className="bowl"
            src="/img/bowl.svg"
            height={400}
            width={400}
            alt="Lodtrækningsskål"
         /> */}

            <Image
               className="pinboard"
               src="/gif/pinboard.gif"
               height={400}
               width={400}
               alt="Opslagstavle"
            />
            {/*<Image
            className="pinboard"
            src="/img/pinboard.svg"
            height={400}
            width={400}
            alt="Opslagstavle"
         />*/}

            <Image
               className="posters"
               src="/gif/posters.gif"
               height={400}
               width={400}
               alt="Plakater"
            />
            {/*<Image
            className="posters"
            src="/img/posters.svg"
            height={400}
            width={400}
            alt="Plakater"
         />*/}

            <Image
               className="wheel_high"
               src="/gif/wheel_legs_high.gif"
               height={400}
               width={400}
               alt="Lykkehjul"
            />
            {/*<Image
            className="wheel_high"
            src="/img/wheel_legs_high.svg"
            height={400}
            width={400}
            alt="Lykkehjul"
         /> */}
         </div>
      </main>
   );
}
