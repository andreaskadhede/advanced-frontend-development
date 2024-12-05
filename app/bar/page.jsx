import BarItem from "../components/BarItem";
// import styles from "./page.module.css";

export default async function Boardgames() {
  //Indsæt egen database
  const response = await fetch(
    "http://advanced-frontend-development.andreaskadhede.dk/wp-json/wp/v2/item?acf_format=standard&orderby=date&order=asc"
  );
  const barItems = await response.json();
  console.log(barItems);

  return (
    <main>
      <div className="games">
        {barItems.map((barItem) => (
          <BarItem key={barItem.id} barItem={barItem} />
        ))}
      </div>
    </main>
  );
}
