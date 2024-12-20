import Image from "next/image";

export default function CardSearch({ searchQuery, handleSearchChange }) {
   return (
      <div className="search">
         <Image
            src="/icons/search.svg"
            alt="search icon"
            width={400}
            height={400}
            id="search_icon"
         />
         <input
            placeholder="Søg..."
            className="card_input"
            value={searchQuery}
            onChange={handleSearchChange} // Handle input change
         />{" "}
         <div className="width2rem">
            <Image
               src="/icons/spades.svg"
               alt="spades icon"
               width={400}
               height={400}
               id="spades_icon"
            />
         </div>
      </div>
   );
}
