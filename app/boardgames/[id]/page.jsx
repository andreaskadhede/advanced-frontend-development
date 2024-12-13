import ButtonBack from "@/app/components/ButtonBack";
import Boardgame from "@/app/components/Boardgame";
import TextToggle from "@/app/components/TextToggle";
import Slider from "@/app/components/Slider";
import Image from "next/image";

export default async function BoardgameDetailPage({ params }) {
  const { id } = await params;
  // Database for enkelt spil
  const response = await fetch(
    `https://advanced-frontend-development.andreaskadhede.dk/wp-json/wp/v2/boardgame?acf_format=standard&orderby=date&order=asc&per_page=15`
  );
  const boardgames = await response.json();
  console.log(boardgames);
  console.log(id);

  // Ensure id is compared as a number
  const boardgame = boardgames.find((game) => game.id === Number(id));

  // Shuffle array around to show new random boardgames with the same criteria
  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sortKey: Math.random() })) // Map to objects with random sort keys
      .sort((a, b) => a.sortKey - b.sortKey) // Sort by random keys
      .map(({ value }) => value); // Extract original values
  };

  // Filter board games with the same category, excluding the current game's id
  const numericId = Number(id); // Ensure `id` is a number for comparison
  // Exclude the game with ID 33 and filter by category
  const sameCategoryGames = shuffleArray(
    boardgames.filter(
      (game) =>
        game.id !== numericId && // Ensure ID is excluded
        game.acf.category.some((category) =>
          boardgame.acf.category.includes(category)
        )
    )
  ).slice(0, 3); // Limit to 3 games

  console.log("Filtered games:", sameCategoryGames);

  // Filter board games with the same players
  const samePlayerGames = shuffleArray(
    boardgames.filter(
      (game) =>
        game.id !== numericId && // Ensure ID is excluded
        game.acf.players_category.some((players) =>
          boardgame.acf.players_category.includes(players)
        )
    )
  ).slice(0, 3); // Limit to 3 games

  // Filter board games with the same time
  const sameTimeGames = shuffleArray(
    boardgames.filter(
      (game) =>
        game.id !== numericId && // Ensure ID is excluded
        game.acf.time_category.some((time) =>
          boardgame.acf.time_category.includes(time)
        )
    )
  ).slice(0, 3); // Limit to 3 games

  console.log(sameTimeGames);

  return (
    <main className="single_boardgame">
      {/* opdatér link til at navigere ét step tilbage i stedet */}
      <ButtonBack destination="/boardgames" />
      <section className="boardgame_info">
        <article className="intro">
          <h1>{boardgame.acf.name}</h1>
          <div className="icons">
            <div>
              <Image
                src="/icons/person_white.svg"
                height={100}
                width={100}
                alt="Antal spillere"
              />
              <p>{boardgame.acf.players}</p>
            </div>
            <div>
              <Image
                src="/icons/time_white.svg"
                height={100}
                width={100}
                alt="Estimeret spilletid"
              />
              <p>{`${boardgame.acf.time} min`}</p>
            </div>
            <div>
              <Image
                src="/icons/age_white.svg"
                height={100}
                width={100}
                alt="Anbefalet aldersgrænse"
              />
              <p>{`${boardgame.acf.age}+`}</p>
            </div>
            <div>
              <Image
                src="/icons/place_white.svg"
                height={100}
                width={100}
                alt="Placering"
              />
              <p>{boardgame.acf.placement}</p>
            </div>
          </div>
          <p>{boardgame.acf.description}</p>
        </article>
        <Slider></Slider>
        <article className="rules">
          <h2>Regler</h2>
          <TextToggle rules={boardgame.acf.rules}></TextToggle>
          {/* <p rules={boardgame.acf.rules}></p> */}
        </article>
        <article className="suggestions">
          <h2>Lignende spil</h2>
          <div className="games shelf">
            {/* Render filtered boardgames */}
            {sameCategoryGames.map((boardgame) => (
              <Boardgame key={boardgame.id} boardgame={boardgame} />
            ))}
          </div>
        </article>
        <article className="suggestions">
          <h2>Samme antal spillere</h2>
          <div className="games shelf">
            {/* Render filtered boardgames */}
            {samePlayerGames.map((boardgame) => (
              <Boardgame key={boardgame.id} boardgame={boardgame} />
            ))}
          </div>
        </article>
        <article className="suggestions">
          <h2>Samme spilletid</h2>
          <div className="games shelf">
            {/* Render filtered boardgames */}
            {sameTimeGames.map((boardgame) => (
              <Boardgame key={boardgame.id} boardgame={boardgame} />
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
