import Image from "next/image";
import { useState } from "react"; // Import useState and useEffect for managing state and side effects
// import styles from "./page.module.css";

export default function CardFilter() {
   const [filterActive, setFilterActive] = useState(false); // State to hold the barItems
   return (
      <div
         className="card"
         onClick={() => {
            setFilterActive(!filterActive);
            console.log("clicked");
         }}
         style={{
            top: filterActive ? "50%" : "-18.65%",
            right: filterActive ? "50%" : "1.5rem",
            transform: filterActive
               ? "scale(1) translate(50%, -50%"
               : "scale(0.58) translate(0)",
            transformOrigin: filterActive ? "top right" : "top right",
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
            <h2>Filtrering</h2>
            <div className="width2rem">
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
            <div className=" card_filter_element">
               <div className="title">
                  <Image
                     src="/icons/person_black.svg"
                     alt="person icon"
                     width={400}
                     height={400}
                     style={{ height: "1rem" }}
                  />
                  <h4>Antal spillere</h4>
               </div>

               <div className="options">
                  <button>2</button>
                  <button>3-5</button>
                  <button>6+</button>
               </div>
            </div>

            <div className=" card_filter_element">
               <div className="title">
                  <Image
                     src="/icons/time_black.svg"
                     alt="person icon"
                     width={400}
                     height={400}
                     style={{ height: "1rem" }}
                  />
                  <h4>Spilletid (min)</h4>
               </div>

               <div className="options">
                  <button>10-30</button>
                  <button>30-60</button>
                  <button>60+</button>
               </div>
            </div>

            <div className="card_filter_element">
               <div className="title">
                  <Image
                     src="/icons/age_black.svg"
                     alt="person icon"
                     width={400}
                     height={400}
                     style={{ height: "1rem" }}
                  />
                  <h4>Anbefalet aldergrænse</h4>
               </div>

               <div className="options">
                  <button>6+</button>
                  <button>8+</button>
                  <button>10+</button>
               </div>
            </div>

            <div className=" card_filter_element">
               <div className="title">
                  <Image
                     src="/icons/dice_black.svg"
                     alt="person icon"
                     width={400}
                     height={400}
                     style={{ height: "1rem" }}
                  />
                  <h4>Kategori</h4>
               </div>

               <div className="options">
                  <button className="kategori">Populære</button>
                  <button className="kategori">Skjulte perler</button>
               </div>
               <div className="options">
                  <button className="kategori">Klassikere</button>
                  <button className="kategori">Selskabsspil</button>
               </div>
               <div className="options">
                  <button className="kategori">Quiz</button>
                  <button className="kategori">Strategi</button>
               </div>
            </div>
         </div>
         <div className="card_bottom">
            <div
               className="width2rem"
               style={{
                  display: filterActive ? "block" : "none",
               }}></div>
            <h2>Filtrering</h2>
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
