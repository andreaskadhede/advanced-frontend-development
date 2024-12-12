import Image from "next/image";
import { useState } from "react"; // Import useState and useEffect for managing state and side effects

export default function CardFilter({
   setFilteredGames,
   boardgames,
   filteredGames,
}) {
   const [filterActive, setFilterActive] = useState(false); // State to hold the barItems
   const [activeButton, setActiveButton] = useState("");

   const applyFilter = (criteria, value) => {
      setActiveButton(`${criteria} ${value}`);

      const newFilteredGames = boardgames.filter((game) => {
         if (criteria === "players") {
            return game.acf.players_category.includes(value);
         } else if (criteria === "time") {
            return game.acf.time_category.includes(value);
         } else if (criteria === "age") {
            return game.acf.age >= parseInt(value);
         } else criteria === "category";
         return game.acf.category.includes(value);
      });
      setFilteredGames(newFilteredGames);
      console.log(filteredGames);
   };

   return (
      <div
         className="card"
         onClick={() => {
            filterActive === false && setFilterActive(true);
            console.log("clicked");
         }}
         style={{
            top: filterActive ? "50%" : "-151.52px",
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
            <div className="width2rem" onClick={() => setFilterActive(false)}>
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
                  <button
                     onClick={() => applyFilter("players", "2")}
                     style={{
                        backgroundColor:
                           activeButton === "players 2"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     2
                  </button>
                  <button
                     onClick={() => applyFilter("players", "3-5")}
                     style={{
                        backgroundColor:
                           activeButton === "players 3-5"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     3-5
                  </button>
                  <button
                     onClick={() => applyFilter("players", "6+")}
                     style={{
                        backgroundColor:
                           activeButton === "players 6+"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     6+
                  </button>
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
                  <button
                     onClick={() => applyFilter("time", "10-30")}
                     style={{
                        backgroundColor:
                           activeButton === "time 10-30"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     10-30
                  </button>
                  <button
                     onClick={() => applyFilter("time", "30-60")}
                     style={{
                        backgroundColor:
                           activeButton === "time 30-60"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     30-60
                  </button>
                  <button
                     onClick={() => applyFilter("time", "60+")}
                     style={{
                        backgroundColor:
                           activeButton === "time 60+"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     60+
                  </button>
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
                  <button
                     onClick={() => applyFilter("age", "6")}
                     style={{
                        backgroundColor:
                           activeButton === "age 6"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     6+
                  </button>
                  <button
                     onClick={() => applyFilter("age", "8")}
                     style={{
                        backgroundColor:
                           activeButton === "age 8"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     8+
                  </button>
                  <button
                     onClick={() => applyFilter("age", "10")}
                     style={{
                        backgroundColor:
                           activeButton === "age 10"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     10+
                  </button>
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
                  <button
                     className="category"
                     onClick={() => applyFilter("category", "populære")}
                     style={{
                        backgroundColor:
                           activeButton === "category populære"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     Populære
                  </button>
                  <button
                     className="category"
                     onClick={() => applyFilter("category", "skjulte perler")}
                     style={{
                        backgroundColor:
                           activeButton === "category skjulte perler"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     Skjulte perler
                  </button>
               </div>
               <div className="options">
                  <button
                     className="category"
                     onClick={() => applyFilter("category", "klassikere")}
                     style={{
                        backgroundColor:
                           activeButton === "category klassikere"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     Klassikere
                  </button>
                  <button
                     className="category"
                     onClick={() => applyFilter("category", "selskabsspil")}
                     style={{
                        backgroundColor:
                           activeButton === "category selskabsspil"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     Selskabsspil
                  </button>
               </div>
               <div className="options">
                  <button
                     className="category"
                     onClick={() => applyFilter("category", "quiz")}
                     style={{
                        backgroundColor:
                           activeButton === "category quiz"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     Quiz
                  </button>
                  <button
                     className="category"
                     onClick={() => applyFilter("category", "strategi")}
                     style={{
                        backgroundColor:
                           activeButton === "category strategi"
                              ? "var(--darkGreen)"
                              : "var(--red)",
                     }}>
                     Strategi
                  </button>
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
