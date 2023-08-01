import books from "../../database.json";
import Cards from "../components/Cards";
export default function ShounenProducts() {
  const shounenBooks = books.filter((book) => book.categories[2] === "Shounen");
  return (
    <>
      <Cards propsData={shounenBooks} />
    </>
  );
}
