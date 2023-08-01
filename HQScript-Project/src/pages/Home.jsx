import Carousels from "../components/Carousels";
import "../styles/cards.scss";
import Cards from "../components/Cards";
import books from "../../database.json";
export default function Home() {
  return (
    <>
      <Carousels />
      <Cards propsData={books} />
    </>
  );
}
