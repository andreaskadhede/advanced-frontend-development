import Image from "next/image";
import Link from "next/link";
// import styles from "./page.module.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <Image
              src="/icons/home_white.svg"
              alt="Hjem"
              width={100}
              height={100}
              className="nav_icons"
            />
            <p>Forside</p>
          </Link>
        </li>
        <li>
          <Link href="/inspiration">
            <Image
              src="/icons/inspo_white.svg"
              alt="Inspiration"
              width={100}
              height={100}
              className="nav_icons"
            />
            <p>Inspiration</p>
          </Link>
        </li>
        <li>
          <Link href="/boardgames">
            <Image
              src="/icons/dice_white.svg"
              alt="Terninger"
              width={100}
              height={100}
              className="nav_icons"
            />
            <p>Brætspil</p>
          </Link>
        </li>
        <li>
          <Link href="/bar">
            <Image
              src="/icons/bar_white.svg"
              alt="Popcorn"
              width={100}
              height={100}
              className="nav_icons"
            />
            <p>Bar</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
