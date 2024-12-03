import Image from "next/image";
// import styles from "./page.module.css";

export default function Boardgame({ post }) {
  return (
    <div>
      <Image
        src={post.acf.image}
        alt={post.title.rendered}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <p>{post.title.rendered}</p>
    </div>
  );
}
