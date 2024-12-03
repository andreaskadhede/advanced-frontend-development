import Image from "next/image";
// import styles from "./page.module.css";

export default function Header() {
  return (
    <header>
      <Image
        src="/logo.png"
        alt="askdn"
        width={100}
        height={70}
        className="logo"
      />
    </header>
  );
}
