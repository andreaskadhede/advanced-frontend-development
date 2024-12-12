"use client";
import { useState } from "react";

export default function ButtonBack({ rules }) {
  const [textOpen, setTextOpen] = useState(false);
  return (
    <div>
      <p
        style={{
          height: textOpen ? "100%" : "60px",
          overflow: "hidden",
        }}
      >
        {rules}
      </p>

      <h4
        style={{ textDecoration: "underline", padding: "0.5rem 0px" }}
        onClick={() => {
          setTextOpen(!textOpen), console.log(rules);
        }}
      >
        Læs mere
      </h4>
    </div>
  );
}
