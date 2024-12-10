"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const currentPath = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" style={{ opacity: currentPath === "/" ? "1" : "0.5" }}>
            <Image
              src={
                currentPath === "/"
                  ? "/icons/home_white_full.svg"
                  : "/icons/home_white.svg"
              }
              alt="Hjem"
              width={100}
              height={100}
              className="nav_icons"
            />
            <p>Forside</p>
          </Link>
        </li>
        <li>
          <Link
            href="/inspiration"
            style={{ opacity: currentPath === "/inspiration" ? "1" : "0.5" }}
          >
            <Image
              src={
                currentPath === "/inspiration"
                  ? "/icons/inspo_white_full.svg"
                  : "/icons/inspo_white.svg"
              }
              alt="Inspiration"
              width={100}
              height={100}
              className="nav_icons"
            />
            <p>Inspiration</p>
          </Link>
        </li>
        <li>
          <Link
            href="/boardgames"
            style={{ opacity: currentPath === "/boardgames" ? "1" : "0.5" }}
          >
            <Image
              src={
                currentPath === "/boardgames"
                  ? "/icons/dice_white_full.svg"
                  : "/icons/dice_white.svg"
              }
              alt="Terninger"
              width={100}
              height={100}
              className="nav_icons"
            />
            <p>Brætspil</p>
          </Link>
        </li>
        <li>
          <Link
            href="/bar"
            style={{ opacity: currentPath === "/bar" ? "1" : "0.5" }}
          >
            <Image
              src={
                currentPath === "/bar"
                  ? "/icons/bar_white_full.svg"
                  : "/icons/bar_white.svg"
              }
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
