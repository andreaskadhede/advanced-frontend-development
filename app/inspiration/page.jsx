"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
         <div className="inspiration_grid">
            <Image
               className="inspiration_background"
               src="/img/inspiration_background.svg"
               height={800}
               width={800}
               alt="Inspirations lokale"
            />

            {delayBowl ? (
               <video
                  autoPlay
                  muted
                  loop
                  type="video/webm"
                  className="bowl"
                  src="/gif/bowl.webm"
                  height={400}
                  width={400}
                  alt="Lodtrækningsskål"></video>
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
               <video
                  autoPlay
                  muted
                  loop
                  type="video/webm"
                  className="pinboard"
                  src="/gif/pinboard.webm"
                  height={400}
                  width={400}
                  alt="Opslagstavle"></video>
            ) : (
               <Image
                  className="pinboard"
                  src="/img/pinboard.png"
                  height={400}
                  width={400}
                  alt="Opslagstavle"
               />
            )}

            {delayPosters ? (
               <video
                  autoPlay
                  muted
                  loop
                  type="video/webm"
                  className="posters"
                  src="/gif/posters.webm"
                  height={400}
                  width={400}
                  alt="Plakater"></video>
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
                  <video
                     autoPlay
                     muted
                     loop
                     type="video/webm"
                     className="wheel_high"
                     src="/gif/wheel_legs_high.webm"
                     height={400}
                     width={400}
                     alt="Lykkehjul"></video>
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
