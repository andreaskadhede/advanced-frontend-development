import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import useState and useEffect for managing state and side effects
import Button from "./Button";
// import styles from "./page.module.css";

export default function CardGame({ result, resetWheel }) {
   return (
      <div className="card">
         <div className="card_top">
            <div className="width2rem">
               <Image
                  src="/icons/heart.svg"
                  alt="heart icon"
                  width={400}
                  height={400}
               />
            </div>
            <h2>TILLYKKE</h2>
            <div className="width2rem close_button">
               <button onClick={() => resetWheel()}>
                  <Image
                     src="/icons/close_btn.svg"
                     alt="person icon"
                     width={400}
                     height={400}
                     style={{ height: "1rem" }}
                  />
               </button>
            </div>
         </div>

         <div className="card_middle">
            <p>Vi foreslår dig at spille </p>
            <Image
               src={result.cover}
               height={400}
               width={400}
               alt={result.name}
            />
            <p>Find spillet på {result.placement}</p>
            <Button
               destination={`/boardgames/${result.id}`}
               text="Læs mere om spillet"
               fillColor="var(--darkGreen)"
               fontSize="var(--fontsizeM)"
            />
         </div>

         <div className="card_bottom">
            <div className="width2rem"></div>
            <h2>TILLYKKE</h2>
            <div className="width2rem">
               <Image
                  src="/icons/heart.svg"
                  alt="heart icon"
                  width={400}
                  height={400}
               />
            </div>
         </div>
      </div>
   );
}
