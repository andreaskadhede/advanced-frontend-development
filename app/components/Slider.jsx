import Image from "next/image";

export default function Slider() {
  return (
    <div className="carousel">
      {/* <Image
            src={boardgame.acf.images.front}
            height={400}
            width={400}
            alt={boardgame.acf.name}
          /> */}
      <Image
        src={boardgame.acf.images.opened}
        height={400}
        width={400}
        alt={boardgame.acf.name}
      />
      {/* <Image
            src={boardgame.acf.images.back}
            height={400}
            width={400}
            alt={boardgame.acf.name}
          /> */}
      {/* <div className="breadcrumbs">
            <div></div>
            <div></div>
            <div></div>
          </div> */}
    </div>
  );
}
