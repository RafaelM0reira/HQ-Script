import books from "../../database.json";
import Cards from "../components/Cards";
export default function SeinenProducts() {
  const seinenBooks = books.filter((book) => book.categories[2] === "Seinen");
  return (
    <>
      <Cards propsData={seinenBooks} />
    </>
  );
}
