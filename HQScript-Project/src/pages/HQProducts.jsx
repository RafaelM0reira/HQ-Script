import books from "../../database.json";
import Cards from "../components/Cards";
export default function HQProducts() {
  const hqBooks = books.filter((book) => book.categories[0] === "HQ");
  return (
    <>
      <Cards propsData={hqBooks} />
    </>
  );
}
