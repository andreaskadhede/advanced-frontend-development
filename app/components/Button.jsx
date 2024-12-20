"use client";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Button({
  destination = "#",
  fillColor = "var(--red)",
  text = "Tilbage",
  fontSize = "var(--fontsizeXS)",
  fontColor = "var(--white)",
}) {
  return (
    <Link className="button" href={destination}>
      <article className="boardgame">
        <div className="game_lid" style={{ backgroundColor: fillColor }}>
          <p style={{ fontSize: fontSize, color: fontColor }}>{text}</p>
        </div>
        <div className="game_box"></div>
      </article>
    </Link>
  );
}
