import Image from "next/image";
import Boardgame from "../components/Boardgame";
// import styles from "./page.module.css";

export default function Boardgames() {
  //Indsæt egen database
  const response = await fetch(
    "https://headless.cederdorff.dk/wp-json/wp/v2/posts?acf_format=standard&orderby=date&order=asc"
  );
  const posts = await response.json();
  console.log(posts);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Boardgame key={post.id} post={post} />
      ))}
    </section>
  );
}
