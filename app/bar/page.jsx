"use client"; // This makes sure the component is client-side rendered

import { useState, useEffect } from "react"; // Import useState and useEffect for managing state and side effects
import BarItem from "../components/BarItem";
import CardOrder from "../components/CardOrder";
import Image from "next/image";

export default function Boardgames() {
   // const [bestilling, setBestilling] = useState({}); // State to hold your order
   const [barItems, setBarItems] = useState([]); // State to hold the barItems
   const [openCategories, setOpenCategories] = useState({
      "Varme drikke": false,
      "Fadøl, Øl & Cider": false,
      "Alkoholiske drikke": false,
      "Kolde drikke": false,
      "Snacks & slik": false,
   }); // State for tracking which categories are open/closed

   // Fetch data from the API when the component mounts
   useEffect(() => {
      const fetchBarItems = async () => {
         const response = await fetch(
            "https://advanced-frontend-development.andreaskadhede.dk/wp-json/wp/v2/item?acf_format=standard&orderby=date&order=asc&per_page=50"
         );
         const data = await response.json();
         setBarItems(data); // Set the fetched barItems to state
      };
      fetchBarItems();
   }, []); // Empty dependency array to run only once when the component mounts

   // Helper function to filter barItems by category
   const filterBarItemsByCategory = (categoryName) => {
      return barItems.filter(
         (item) =>
            item.acf &&
            item.acf.category &&
            item.acf.category.toLowerCase() === categoryName.toLowerCase()
      );
   };

   // Categories (corresponding to <p> text)
   const categories = [
      "Varme drikke",
      "Fadøl, øl og cider",
      "Alkoholiske drikke",
      "Kolde drikke",
      "Snacks og slik",
   ];

   // Color mapping for categories
   const categoryColors = {
      "Varme drikke": "var(--black)",
      "Fadøl, øl og cider": "var(--darkGreen)",
      "Alkoholiske drikke": "var(--purple)",
      "Kolde drikke": "var(--blue)",
      "Snacks og slik": "var(--red)",
   };

   // Toggle the open/closed state for a specific category
   const toggleCategory = (category) => {
      setOpenCategories((prevState) => ({
         ...prevState,
         [category]: !prevState[category], // Toggle the state for the clicked category
      }));
   };

   return (
      <main>
         <div className="bar">
            {categories.map((category) => (
               <div className="bar_dropdown" key={category}>
                  <div
                     className="bar_overskrifter"
                     onClick={() => toggleCategory(category)} // Toggle visibility on click
                  >
                     <p>{category}</p>
                     <Image
                        src="/icons/arrow_right.svg"
                        height={100}
                        width={100}
                        alt={category}
                        style={{
                           transition: "all 0.3s ease-in-out",
                           rotate: openCategories[category] ? "90deg" : "0deg",
                        }}
                     />
                  </div>
                  <div
                     className={`bar_items ${
                        openCategories[category] ? "" : "lukket"
                     }`} // Apply "lukket" class based on state
                  >
                     {/* Render filtered items for the current category */}
                     {filterBarItemsByCategory(category).map((barItem) => (
                        <BarItem
                           key={barItem.id}
                           barItem={barItem}
                           categoryColors={categoryColors}
                           category={category}
                        />
                     ))}
                  </div>
               </div>
            ))}
            <CardOrder />
         </div>
      </main>
   );
}
