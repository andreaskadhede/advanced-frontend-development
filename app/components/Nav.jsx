import Image from "next/image";
// import styles from "./page.module.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Image
            src="/icons/inspo_white.svg"
            alt="askdn"
            width={100}
            height={70}
            className="nav_icons"
          />
          <p>Inspiration</p>
        </li>
        <li>
          <Image
            src="/icons/dice_white.svg"
            alt="askdn"
            width={100}
            height={70}
            className="nav_icons"
          />
          <p>Brætspil</p>
        </li>
        <li>
          <Image
            src="/icons/bar_white.svg"
            alt="askdn"
            width={100}
            height={70}
            className="nav_icons"
          />
          <p>Bar</p>
        </li>
      </ul>
    </nav>
  );
}
