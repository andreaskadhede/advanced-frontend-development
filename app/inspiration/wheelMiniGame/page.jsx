"use client";
import Wheel from "@/app/components/Wheel";
import Image from "next/image";
import { useState } from "react";

export default function WheelMiniGame() {
   const [isWheelNoGame, setIsWheelNoGame] = useState(true);
   const [isWheelGame, setIsWheelGame] = useState(false);

   function gameStart() {
      setIsWheelNoGame(false); // Hide the no-animation section
      setIsWheelGame(true); // Show the animation section
   }

   return (
      <main className="inspiration_main">
         <div className="minigame">
            {isWheelNoGame && (
               <div className="wheel_no_animation">
                  <section className="inspo_top">
                     <h1>Lykkehjulet</h1>
                     <p className="fontsize20">
                        Spin hjulet og få et tilfældigt spilforslag!
                     </p>
                  </section>
                  <div className="inspo_bottom">
                     <Image
                        onClick={gameStart}
                        className="wheel_low"
                        src="/gif/wheel_legs_low.gif"
                        height={400}
                        width={400}
                        alt="Lykkehjul"
                     />
                     <p onClick={gameStart} id="pop_1" className="box_header">
                        Start spil
                     </p>
                     <p id="pop_1" className="box_header">
                        <br />
                     </p>
                  </div>
               </div>
            )}

            {isWheelGame && (
               <div className="wheel_animation">
                  <Wheel />
               </div>
            )}
         </div>
      </main>
   );
}
