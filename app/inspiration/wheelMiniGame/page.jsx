import Image from "next/image";
// import styles from "./page.module.css";

export default function WheelMiniGame() {
   return (
      <main className="inspiration_main">
         <div className="minigame">
            <section className="inspo_top">
               <h1>Lykkehjulet</h1>
               <p>Spin hjulet og få et tilfældigt spilforslag!</p>
            </section>
            <div className="inspo_bottom">
               <Image
                  className="wheel_low"
                  src="/gif/wheel_legs_low.gif"
                  height={400}
                  width={400}
                  alt="Lykkehjul"
               />

               <p id="pop_1" className="box_header">
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
