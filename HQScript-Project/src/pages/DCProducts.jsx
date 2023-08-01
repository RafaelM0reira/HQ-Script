import books from "../../database.json";
import Cards from "../components/Cards";
export default function DCProducts() {
  const dcBooks = books.filter((book) => book.categories[2] === "DC");
  return (
    <>
      <Cards propsData={dcBooks} />
    </>
  );
}
