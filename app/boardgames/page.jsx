"use client"; // This makes sure the component is client-side rendered

import { useState, useEffect } from "react";
import Image from "next/image";
import Boardgame from "../components/Boardgame";
import CardFilter from "../components/CardFilter";
import CardSearch from "../components/CardSearch";
// import styles from "./page.module.css";

export default function Boardgames() {
   const [boardgames, setBoardgames] = useState([]); // State to hold the barItems
   // Local state for the search query
   const [searchQuery, setSearchQuery] = useState("");

   // Fetch data from the API when the component mounts
   useEffect(() => {
      const fetchBoardgames = async () => {
         const response = await fetch(
            "https://advanced-frontend-development.andreaskadhede.dk/wp-json/wp/v2/boardgame?acf_format=standard&orderby=date&order=asc&per_page=15"
         );
         const data = await response.json();
         setBoardgames(data); // Set the fetched boardgames to state
      };
      fetchBoardgames();
   }, []); // Empty dependency array to run only once when the component mounts

   // Filter the boardgames based on the search query
   const filteredBoardgames = boardgames.filter((boardgame) =>
      boardgame.title.rendered.toLowerCase().includes(searchQuery.toLowerCase())
   );

   // Handle changes in the search input
   const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
   };

   return (
      <main>
         <div className="inner_bookshelf">
            <CardSearch
               searchQuery={searchQuery}
               handleSearchChange={handleSearchChange}
            />
            <CardFilter />
            {/* Render filtered boardgames */}
            {filteredBoardgames.length > 0 ? (
               filteredBoardgames.map((boardgame) => (
                  <Boardgame key={boardgame.id} boardgame={boardgame} />
               ))
            ) : (
               <p>Vi har desværre ikke et brætspil med dette navn.</p> // Show this if no games match
            )}
         </div>
      </main>
   );
}
