"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import styles from "./page.module.css";

export default function Inspiration() {
   const [delayBowl, setDelayBowl] = useState(true);
   const [delayPinboard, setDelayPinboard] = useState(true);
   const [delayPosters, setDelayPosters] = useState(false);
   const [delayWheel, setDelayWheel] = useState(false);

   //  useEffect() to switch between SVG og GIF
   //  --- BOWL ---
   useEffect(() => {
      const timer = setTimeout(() => {
         setDelayBowl((prevDelayBowl) => !prevDelayBowl); // Toggle the delay state
      }, 3829);

      return () => clearTimeout(timer); // Clean up the timer
   }, [delayBowl]);

   //  --- PINBOARD ---
   useEffect(() => {
      const timer = setTimeout(() => {
         setDelayPinboard((prevDelayPinboard) => !prevDelayPinboard); // Toggle the delay state
      }, 2750);

      return () => clearTimeout(timer); // Clean up the timer
   }, [delayPinboard]);

   //  --- POSTERS ---
   useEffect(() => {
      const timer = setTimeout(() => {
         setDelayPosters((prevDelayPosters) => !prevDelayPosters); // Toggle the delay state
      }, 2505);

      return () => clearTimeout(timer); // Clean up the timer
   }, [delayWheel]);

   //  --- WHEEL ---
   useEffect(() => {
      const timer = setTimeout(() => {
         setDelayWheel((prevDelayWheel) => !prevDelayWheel); // Toggle the delay state
      }, 5550);

      return () => clearTimeout(timer); // Clean up the timer
   }, [delayWheel]);

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
            {delayBowl ? (
               <Image
                  className="bowl"
                  src="/gif/bowl.gif"
                  height={400}
                  width={400}
                  alt="Lodtrækningsskål"
               />
            ) : (
               <Image
                  className="bowl"
                  src="/img/bowl.svg"
                  height={400}
                  width={400}
                  alt="Lodtrækningsskål"
               />
            )}

            {delayPinboard ? (
               <Image
                  className="pinboard"
                  src="/gif/pinboard.gif"
                  height={400}
                  width={400}
                  alt="Opslagstavle"
               />
            ) : (
               <Image
                  className="pinboard"
                  src="/img/pinboard.svg"
                  height={400}
                  width={400}
                  alt="Opslagstavle"
               />
            )}

            {delayPosters ? (
               <Image
                  className="posters"
                  src="/gif/posters.gif"
                  height={400}
                  width={400}
                  alt="Plakater"
               />
            ) : (
               <Image
                  className="posters"
                  src="/img/posters.svg"
                  height={400}
                  width={400}
                  alt="Plakater"
               />
            )}

            {delayWheel ? (
               <Link className="wheel_high" href="/inspiration/wheelMiniGame">
                  <Image
                     className="wheel_high"
                     src="/gif/wheel_legs_high.gif"
                     height={400}
                     width={400}
                     alt="Lykkehjul"
                  />
               </Link>
            ) : (
               <Link className="wheel_high" href="/inspiration/wheelMiniGame">
                  <Image
                     className="wheel_high"
                     src="/img/wheel_legs_high.svg"
                     height={400}
                     width={400}
                     alt="Lykkehjul"
                  />
               </Link>
            )}
         </div>
      </main>
   );
}
