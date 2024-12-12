import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image
        src="/logo.png"
        alt="askdn"
        width={400}
        height={400}
        className="logo"
      />
    </header>
  );
}
