import Image from "next/image";
import { useState } from "react"; // Import useState and useEffect for managing state and side effects
// import styles from "./page.module.css";

export default function CardOrder() {
   const [orderActive, setOrderActive] = useState(false); // State to hold the barItems
   return (
      <div
         className="card"
         onClick={() => {
            setOrderActive(!orderActive);
            console.log("clicked");
         }}
         style={{
            top: orderActive ? "50%" : "64%",
            right: orderActive ? "50%" : "1.5rem",
            transform: orderActive
               ? "scale(1) translate(50%, -50%)"
               : "scale(0.58) translate(0%, 0%)",
            transformOrigin: orderActive ? "bottom right" : "bottom right",
         }}>
         <div className="card_top">
            <div className="width2rem">
               <Image
                  src="/icons/heart.svg"
                  alt="heart icon"
                  width={400}
                  height={400}
               />
            </div>
            <h2>Bestilling</h2>
            <div
               className="width2rem"
               style={{
                  display: orderActive ? "block" : "none",
               }}>
               <Image
                  src="/icons/close_btn.svg"
                  alt="person icon"
                  width={400}
                  height={400}
                  style={{ height: "1rem" }}
               />
            </div>
         </div>

         <div className="card_middle">
            <div className="card_order_element">
               <p>Hvedeøl</p>
               <div className="card_order_plus_minus">
                  <button>-</button>
                  <p>{`1 stk`}</p>
                  <button>+</button>
               </div>
               <p>{`45 kr`}</p>
            </div>

            <div className="card_order_total">
               <p>Samlet pris</p>
               <p>{`280 kr`}</p>
            </div>

            <div className="card_order_send">
               <div className="boardgame">
                  <div className="game_lid">
                     <p>Send bestilling</p>
                  </div>
                  <div className="game_box"></div>
               </div>
               <Image
                  src="/img/bell.svg"
                  alt="heart icon"
                  width={400}
                  height={400}
               />
            </div>
         </div>

         <div className="card_bottom">
            <div className="width2rem"></div>
            <h2>Bestilling</h2>
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
