"use client";
import Wheel from "@/app/components/Wheel";
import Image from "next/image";
// import styles from "./page.module.css";

function spinWheel() {
   alert("hi");
}

export default function WheelMiniGame() {
   return (
      <main className="inspiration_main">
         <div className="minigame">
            {/* <section className="inspo_top">
               <h1>Lykkehjulet</h1>
               <p>Spin hjulet og få et tilfældigt spilforslag!</p>
            </section> */}
            <div className="inspo_bottom">
               {/* <Image
            onClick={spinWheel}
            className="wheel_low"
            src="/gif/wheel_legs_low.gif"
            height={400}
            width={400}
            alt="Lykkehjul"
         /> */}
               <div className="wheel_animation">
                  <Image
                     onClick={spinWheel}
                     className="wheel_low"
                     src="/img/wheel_legs_low.svg"
                     height={400}
                     width={400}
                     alt="Lykkehjul"
                  />

                  <Wheel />
               </div>
               <p onClick={spinWheel} id="pop_1" className="box_header">
                  Start spil
               </p>
               <p id="pop_1" className="box_header">
                  Start spil
               </p>
            </div>
         </div>
      </main>
   );
}
