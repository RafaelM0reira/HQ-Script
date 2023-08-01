import books from "../../database.json";
import { InputGroup, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { useState } from "react";
export default function SearchBar() {
  const [search, setSearch] = useState([]);
  const handleChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    if (!searchValue) {
      setSearch([]);
      return;
    }
    const filterSearch = books.filter((book) =>
      book.title.toLowerCase().includes(searchValue)
    );
    setSearch(filterSearch);
  };
  return (
    <>
      <InputGroup className=" pt-4">
        <InputGroup.Text id="basic-addon1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/64/64673.png"
            alt="searchIcon.png"
            className="search-icon"
          />
        </InputGroup.Text>
        <Form.Control
          placeholder="Pesquisar..."
          aria-label="search"
          aria-describedby="basic-addon1"
          className="search-bar"
          onChange={handleChange}
        />
      </InputGroup>
      {search.map((book) => (
        <ListGroup key={book.id}>
          <ListGroupItem
            key={book.id}
            className="search-products"
            action
            variant="light"
            href={`/${book.id}`}
          >
            {book.title}
          </ListGroupItem>
        </ListGroup>
      ))}
    </>
  );
}
