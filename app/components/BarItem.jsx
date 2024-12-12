import Image from "next/image";
// import styles from "./page.module.css";

export default function BarItem({ barItem, categoryColors, category }) {
   return (
      <div>
         <div key={barItem.id} className="boardgame">
            <div
               className="game_lid bar_lid"
               style={{ backgroundColor: categoryColors[category] }}>
               <p>{`${barItem.acf.price} kr`}</p>
               <p className="name">{barItem.acf.name}</p>
               <div className="add">
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
