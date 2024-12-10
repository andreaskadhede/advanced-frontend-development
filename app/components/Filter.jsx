import Image from "next/image";
import { useState } from "react"; // Import useState and useEffect for managing state and side effects
// import styles from "./page.module.css";

export default function Filter() {
  const [filterActive, setFilterActive] = useState(false); // State to hold the barItems
  return (
    <div
      className="filter"
      onClick={() => {
        setFilterActive(!filterActive);
        console.log("clicked");
      }}
      style={{
        top: filterActive ? "50%" : "-16%",
        right: filterActive ? "50%" : "24px",
        transform: filterActive
          ? "scale(1) translate(50%, -50%)"
          : "scale(0.5) translate(0%, 0%)",
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
        <p className="fontcolorblack fontweightmedium fontsize24">Filrering</p>
        <div
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
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button">
            2
          </button>
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button">
            3-5
          </button>
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button">
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
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button">
            10-30
          </button>
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button">
            30-60
          </button>
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button">
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
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button">
            6+
          </button>
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button">
            8+
          </button>
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button">
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
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button filter_kategori_button">
            Populære
          </button>
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button filter_kategori_button">
            Skjulte perler
          </button>
        </div>
        <div className="filter_flex_row space">
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button filter_kategori_button">
            Klassikere
          </button>
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button filter_kategori_button">
            Selskabsspil
          </button>
        </div>
        <div className="filter_flex_row space">
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button filter_kategori_button">
            Quiz
          </button>
          <button className="fontcolorwhite fontweightregular fontsize14 filter_button filter_kategori_button">
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
        <p className="fontcolorblack fontweightmedium fontsize24">Filrering</p>
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
