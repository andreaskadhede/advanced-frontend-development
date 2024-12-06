import Image from "next/image";
// import styles from "./page.module.css";

export default function BarItem({ barItem }) {
  return (
    <div>
      <div key={barItem.id} className="boardgame">
        <div className="game_lid">
          <p>{`${barItem.acf.price} kr`}</p>
          <p>{barItem.acf.name}</p>
          <div className="muligheder">
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
        </div>

        <div className="game_box"></div>
      </div>
    </div>
  );
}
