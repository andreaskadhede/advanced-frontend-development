import Image from "next/image";

export default function Confirmation() {
   return (
      <div className="confirmation card">
         <div className="card_top">
            <div className="width2rem">
               <Image
                  src="/icons/heart.svg"
                  alt="heart icon"
                  width={400}
                  height={400}
               />
            </div>
            <div className="width2rem"></div>
         </div>

         <div className="card_middle">
            <h2>Din bestilling er sendt til baren!</h2>
         </div>
         <div className="card_bottom">
            <div className="width2rem"></div>
            <div className="width2rem">
               <Image
                  src="/icons/heart.svg"
                  alt="heart icon"
                  width={400}
                  height={400}
               />
            </div>
         </div>
      </div>
   );
}
