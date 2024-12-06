"use client"; // This makes sure the component is client-side rendered

import { useState, useEffect } from "react";
import Image from "next/image";
import Boardgame from "../components/Boardgame";
// import styles from "./page.module.css";

export default function Boardgames() {
  const [boardgames, setBoardgames] = useState([]); // State to hold the barItems
  // Local state for the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchBoardgames = async () => {
      const response = await fetch(
        "http://advanced-frontend-development.andreaskadhede.dk/wp-json/wp/v2/boardgame?acf_format=standard&orderby=date&order=asc&per_page=15"
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
      <div className="games">
        <div className="search_and_filter">
          <div className="search">
            <Image
              src="/icons/search.svg"
              alt="search icon"
              width={400}
              height={400}
              className="card_icon"
            />
            <input
              placeholder="Søg..."
              className="card_input"
              value={searchQuery}
              onChange={handleSearchChange} // Handle input change
            />
            <Image
              src="/icons/spades.svg"
              alt="spades icon"
              width={400}
              height={400}
              className="card_icon"
            />
          </div>

          <div className="filter">
            <p>Filtrering</p>
            <Image
              src="/icons/heart.svg"
              alt="heart icon"
              width={400}
              height={400}
              className="card_icon"
            />
          </div>
        </div>
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
