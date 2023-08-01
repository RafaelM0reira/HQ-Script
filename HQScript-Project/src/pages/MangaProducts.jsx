import books from "../../database.json";
import Cards from "../components/Cards";
export default function MangaProducts() {
  const mangaBooks = books.filter((book) => book.categories[0] === "Manga");

  return (
    <>
      <Cards propsData={mangaBooks} />
    </>
  );
}
