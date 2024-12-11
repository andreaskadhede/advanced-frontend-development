"use client";
import Wheel from "@/app/components/Wheel";
import Image from "next/image";
import { useState } from "react";

export default function WheelMiniGame() {
   const [wheelNoGame, setWheelNoGame] = useState(true);
   const [wheelGame, setWheelGame] = useState(false);

   function gameStart() {
      setWheelNoGame(false); // Hide the no-animation section
      setWheelGame(true); // Show the animation section
   }

   return (
      <main className="inspiration_main">
         <div className="minigame">
            {wheelNoGame && (
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

                     <div onClick={gameStart} className="boardgame">
                        <div className="game_lid">
                           <h2>Start spil</h2>
                        </div>
                        <div className="game_box"></div>
                     </div>

                     <div className="boardgame">
                        <div className="game_lid">
                           <br />
                        </div>
                        <div className="game_box"></div>
                     </div>
                  </div>
               </div>
            )}

            {wheelGame && (
               <div className="wheel_animation">
                  <Wheel />
               </div>
            )}
         </div>
      </main>
   );
}
