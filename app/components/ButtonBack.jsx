"use client";

import { useRouter } from "next/navigation";

export default function ButtonBack({
  fillColor = "var(--red)",
  text = "Tilbage",
  fontSize = "var(--fontsizeXS)",
  fontColor = "var(--white)",
}) {
  const router = useRouter();

  const handleClick = () => {
    router.back(); // Navigate back safely
  };

  return (
    <button
      className="button"
      onClick={handleClick}
      style={{
        cursor: "pointer", // Ensures the element behaves like a button
      }}
    >
      <article className="boardgame">
        <div className="game_lid" style={{ backgroundColor: fillColor }}>
          <p style={{ fontSize: fontSize, color: fontColor }}>{text}</p>
        </div>
        <div className="game_box"></div>
      </article>
    </button>
  );
}
