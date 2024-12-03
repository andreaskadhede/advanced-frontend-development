import Image from "next/image";
// import styles from "./page.module.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Image
            src="/logo.png"
            alt="askdn"
            width={100}
            height={70}
            className="logo"
          />
          <p>Inspiration</p>
        </li>
        <li>
          <Image
            src="/logo.png"
            alt="askdn"
            width={100}
            height={70}
            className="logo"
          />
          <p>Brætspil</p>
        </li>
        <li>
          <Image
            src="/logo.png"
            alt="askdn"
            width={100}
            height={70}
            className="logo"
          />
          <p>Bar</p>
        </li>
      </ul>
    </nav>
  );
}
