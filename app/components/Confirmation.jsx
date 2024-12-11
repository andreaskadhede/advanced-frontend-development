import Image from "next/image";
import { useState } from "react"; // Import useState and useEffect for managing state and side effects
// import styles from "./page.module.css";

export default function Confirmation() {
   return (
      <div className="confirmation card">
         <div className="card_top">
            <div className="width2rem">
               <Image
                  src="/icons/heart.svg"
                  alt="heart icon"
                  width={400}
                  height={400}
               />
            </div>
            <div className="width2rem"></div>
         </div>

         <div className="card_middle">
            <h2>Bestilling er sendt til baren!</h2>
         </div>
         <div className="card_bottom">
            <div className="width2rem"></div>
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
