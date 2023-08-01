import books from "../../database.json";
import Cards from "../components/Cards";
export default function MarvelProducts() {
  const marvelBooks = books.filter((book) => book.categories[2] === "Marvel");
  console.log(marvelBooks);
  return (
    <>
      <Cards propsData={marvelBooks} />
    </>
  );
}
