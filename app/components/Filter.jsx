import Image from "next/image";
import { useState } from "react"; // Import useState and useEffect for managing state and side effects
export default function Filter({
  setFilteredGames,
  boardgames,
  filteredGames,
}) {
  const [filterActive, setFilterActive] = useState(false); // State to see if the filter is open or not
  const [activeButton, setActiveButton] = useState("");

  console.log(boardgames);

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
      className="filter"
      onClick={() => {
        filterActive === false && setFilterActive(true);
        console.log("clicked");
      }}
      style={{
        top: filterActive ? "50%" : "-21.55%",
        right: filterActive ? "50%" : "1.5rem",
        transform: filterActive
          ? "scale(1) translate(50%, -50%"
          : "scale(0.58) translate(0)",
        transformOrigin: filterActive ? "top right" : "top right",
      }}
    >
      <div className="bestilling_flex_row">
        <Image
          src="/icons/heart.svg"
          alt="heart icon"
          width={400}
          height={400}
          style={{ height: "32px" }}
        />
        <p className="fontcolorblack fontweightmedium fontsize24">Filtrering</p>
        <div
          onClick={() => setFilterActive(false)}
          style={{
            display: "flex",
            width: "32px",
            height: "32px",
            justifyContent: "flex-end",
            alignItems: "start",
          }}
        >
          <Image
            src="/icons/close_btn.svg"
            alt="person icon"
            width={400}
            height={400}
            style={{ height: "1rem" }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "100%",
        }}
      >
        <div className="filter_flex_row">
          <Image
            src="/icons/person_black.svg"
            alt="person icon"
            width={400}
            height={400}
            style={{ height: "1rem" }}
          />
          <p className="fontcolorblack fontweightregular fontsize16">
            Antal spillere
          </p>
        </div>

        <div className="filter_flex_row space">
          <button
            onClick={() => applyFilter("players", "2")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button"
            style={{
              backgroundColor:
                activeButton === "players 2"
                  ? "var(--darkGreen)"
                  : "var(--red)",
            }}
          >
            2
          </button>
          <button
            onClick={() => applyFilter("players", "3-5")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button"
            style={{
              backgroundColor:
                activeButton === "players 3-5"
                  ? "var(--darkGreen)"
                  : "var(--red)",
            }}
          >
            3-5
          </button>
          <button
            onClick={() => applyFilter("players", "6+")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button"
            style={{
              backgroundColor:
                activeButton === "players 6+"
                  ? "var(--darkGreen)"
                  : "var(--red)",
            }}
          >
            6+
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "100%",
        }}
      >
        <div className="filter_flex_row">
          <Image
            src="/icons/time_black.svg"
            alt="person icon"
            width={400}
            height={400}
            style={{ height: "1rem" }}
          />
          <p className="fontcolorblack fontweightregular fontsize16">
            Spilletid (min)
          </p>
        </div>

        <div className="filter_flex_row space">
          <button
            onClick={() => applyFilter("time", "10-30")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button"
            style={{
              backgroundColor:
                activeButton === "time 10-30"
                  ? "var(--darkGreen)"
                  : "var(--red)",
            }}
          >
            10-30
          </button>
          <button
            onClick={() => applyFilter("time", "30-60")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button"
            style={{
              backgroundColor:
                activeButton === "time 30-60"
                  ? "var(--darkGreen)"
                  : "var(--red)",
            }}
          >
            30-60
          </button>
          <button
            onClick={() => applyFilter("time", "60+")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button"
            style={{
              backgroundColor:
                activeButton === "time 60+" ? "var(--darkGreen)" : "var(--red)",
            }}
          >
            60+
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "100%",
        }}
      >
        <div className="filter_flex_row">
          <Image
            src="/icons/age_black.svg"
            alt="person icon"
            width={400}
            height={400}
            style={{ height: "1rem" }}
          />
          <p className="fontcolorblack fontweightregular fontsize16">
            Anbefalet aldergrænse
          </p>
        </div>

        <div className="filter_flex_row space">
          <button
            onClick={() => applyFilter("age", "6")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button"
            style={{
              backgroundColor:
                activeButton === "age 6" ? "var(--darkGreen)" : "var(--red)",
            }}
          >
            6+
          </button>
          <button
            onClick={() => applyFilter("age", "8")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button"
            style={{
              backgroundColor:
                activeButton === "age 8" ? "var(--darkGreen)" : "var(--red)",
            }}
          >
            8+
          </button>
          <button
            onClick={() => applyFilter("age", "10")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button"
            style={{
              backgroundColor:
                activeButton === "age 10" ? "var(--darkGreen)" : "var(--red)",
            }}
          >
            10+
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "100%",
        }}
      >
        <div className="filter_flex_row">
          <Image
            src="/icons/dice_black.svg"
            alt="person icon"
            width={400}
            height={400}
            style={{ height: "1rem" }}
          />
          <p className="fontcolorblack fontweightregular fontsize16">
            Kategori
          </p>
        </div>

        <div className="filter_flex_row space">
          <button
            onClick={() => applyFilter("category", "populære")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button filter_kategori_button"
            style={{
              backgroundColor:
                activeButton === "category populære"
                  ? "var(--darkGreen)"
                  : "var(--red)",
            }}
          >
            Populære
          </button>
          <button
            onClick={() => applyFilter("category", "skjulte perler")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button filter_kategori_button"
            style={{
              backgroundColor:
                activeButton === "category skjulte perler"
                  ? "var(--darkGreen)"
                  : "var(--red)",
            }}
          >
            Skjulte perler
          </button>
        </div>
        <div className="filter_flex_row space">
          <button
            onClick={() => applyFilter("category", "klassikere")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button filter_kategori_button"
            style={{
              backgroundColor:
                activeButton === "category klassikere"
                  ? "var(--darkGreen)"
                  : "var(--red)",
            }}
          >
            Klassikere
          </button>
          <button
            onClick={() => applyFilter("category", "selskabsspil")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button filter_kategori_button"
            style={{
              backgroundColor:
                activeButton === "category selskabsspil"
                  ? "var(--darkGreen)"
                  : "var(--red)",
            }}
          >
            Selskabsspil
          </button>
        </div>
        <div className="filter_flex_row space">
          <button
            onClick={() => applyFilter("category", "quiz")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button filter_kategori_button"
            style={{
              backgroundColor:
                activeButton === "category quiz"
                  ? "var(--darkGreen)"
                  : "var(--red)",
            }}
          >
            Quiz
          </button>
          <button
            onClick={() => applyFilter("category", "strategi")}
            className="fontcolorwhite fontweightregular fontsize14 filter_button filter_kategori_button"
            style={{
              backgroundColor:
                activeButton === "category strategi"
                  ? "var(--darkGreen)"
                  : "var(--red)",
            }}
          >
            Strategi
          </button>
        </div>
      </div>

      <div className="bestilling_flex_row">
        <Image
          src="/icons/heart.svg"
          alt="heart icon"
          width={400}
          height={400}
          style={{ height: "32px", opacity: "0" }}
        />
        <p className="fontcolorblack fontweightmedium fontsize24">Filtrering</p>
        <Image
          src="/icons/heart.svg"
          alt="heart icon"
          width={400}
          height={400}
          style={{ height: "32px" }}
        />
      </div>
    </div>
  );
}
