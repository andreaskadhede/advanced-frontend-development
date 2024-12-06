import Image from "next/image";
// import styles from "./page.module.css";

export default function Bestilling() {
  return (
    <div className="bestilling centrum">
      <div className="bestilling_flex_row">
        <Image
          src="/icons/heart.svg"
          alt="heart icon"
          width={400}
          height={400}
          style={{ height: "32px" }}
        />
        <p className="fontcolorblack fontweightmedium fontsize24">Bestilling</p>
        <Image
          src="/icons/heart.svg"
          alt="heart icon"
          width={400}
          height={400}
          style={{ height: "32px" }}
        />
      </div>

      <div className="bestilling_flex_row">
        <p className="fontcolorblack fontweightmedium fontsize14">Hvedeøl</p>
        <div className="bestilling_plus_minus">
          <button className="fontcolorwhite fontweightmedium fontsize8">
            -
          </button>
          <p className="fontcolorwhite fontweightmedium fontsize8">{`1 stk`}</p>
          <button className="fontcolorwhite fontweightmedium fontsize8">
            +
          </button>
        </div>
        <p className="fontcolorblack fontweightmedium fontsize8">{`45 kr`}</p>
      </div>

      <div className="bestilling_flex_row">
        <p className="fontcolorblack fontweightmedium fontsize16">
          Samlet pris
        </p>
        <p className="fontcolorblack fontweightmedium fontsize16">{`280 kr`}</p>
      </div>

      <div className="bestilling_flex_row">
        <p
          className="fontcolorwhite fontweightmedium fontsize16"
          style={{ backgroundColor: "#1A993E" }}
        >
          Send bestilling
        </p>
        <Image
          src="/img/bell.svg"
          alt="heart icon"
          width={400}
          height={400}
          style={{ height: "32px" }}
        />
      </div>

      <div className="bestilling_flex_row">
        <Image
          src="/icons/heart.svg"
          alt="heart icon"
          width={400}
          height={400}
          style={{ height: "32px" }}
        />
        <p className="fontcolorblack fontweightmedium fontsize24">Bestilling</p>
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
