"use client";
import { useState } from "react";
import Image from "next/image";

export default function Slider({ boardgame }) {
  // Opretter state til at styre, hvilket billede der vises
  const [activeNow, setActiveNow] = useState(0);

  const billeder = [
    boardgame.acf.images.opened,
    boardgame.acf.images.back,
    boardgame.acf.images.front,
  ];

  // Funktion der håndterer animationen og opdatering af billede
  const videre = () => {
    // Animation ud
    const carousel_img = document.getElementById("carousel_img");
    carousel_img.style.animationName = "slideOut";

    // Når animationen er færdig, skift billede
    setTimeout(() => {
      setActiveNow((prevActiveNow) => (prevActiveNow + 1) % billeder.length); // Opdater billede og loop til første
      carousel_img.style.animationName = "slideIn"; // Animation ind
    }, 500); // Ventetid svarende til animationens længde
  };

  return (
    <div className="carousel" onClick={videre}>
      <Image
        src={billeder[activeNow]}
        height={400}
        width={400}
        alt={boardgame.acf.name}
        id="carousel_img"
      />

      <div className="breadcrumbs">
        <div
          style={{
            opacity: activeNow === 0 ? "1" : "0.5",
            transition: "all 1s ease",
          }}
        ></div>
        <div
          style={{
            opacity: activeNow === 1 ? "1" : "0.5",
            transition: "all 1s ease",
          }}
        ></div>
        <div
          style={{
            opacity: activeNow === 2 ? "1" : "0.5",
            transition: "all 1s ease",
          }}
        ></div>
      </div>
    </div>
  );
}
