import Image from "next/image";
import { useState } from "react"; // Import useState and useEffect for managing state and side effects
// import styles from "./page.module.css";

export default function Bestilling() {
  const [bestillingActive, setBestillingActive] = useState(false); // State to hold the barItems
  return (
    <div
      className="bestilling"
      onClick={() => {
        setBestillingActive(!bestillingActive);
        console.log("clicked");
      }}
      style={{
        top: bestillingActive ? "50%" : "80%",
        right: bestillingActive ? "50%" : "1.5rem",
        transform: bestillingActive
          ? "translate(50%, -50%)"
          : "translate(0%, 0%)",
      }}
    >
      <div className="bestilling_flex_row">
        <Image
          src="/icons/heart.svg"
          alt="heart icon"
          width={400}
          height={400}
        />
        <p className="fontcolorblack fontweightmedium fontsize24">Bestilling</p>
        <Image
          src="/icons/close_btn.svg"
          alt="person icon"
          width={400}
          height={400}
          style={{ height: "1rem" }}
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
          style={{ height: "32px", opacity: "0" }}
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
