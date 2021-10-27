import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Books from "./components/Books";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddBook from "./components/AddBook";

function App() {
  const [books, setBooks] = useState([]);

  const [book, setBook] = useState({
    bookName: "",
    author: "",
    quantity: "",
    department: "",
    comments: "",
  });

  useEffect(() => {
    fetch("/books")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setBooks(jsonRes));
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const addBook = (e) => {
    e.preventDefault();

    const newBook = {
      bookName: book.bookName,
      author: book.author,
      quantity: book.quantity,
      department: book.department,
      comments: book.comments,
    };
    axios.post("/newbook", newBook);
    alert(`The movie ${book.bookName} is added`);
    setBook({
      bookName: "",
      author: "",
      quantity: "",
      department: "",
      comments: "",
    });
  };

  const deleteBook = (id) => {
    axios.delete("/delete/" + id);
    alert(`book with id:${id} is deleted`);
  };
  const lendBook = (id) => {
    axios.put("/lend/" + id);
    alert(`book with id:${id} is lended`);
  };
  const backBook = (id) => {
    axios.put("/back/" + id);
    alert(`book with id:${id} is back`);
  };
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              ACR-BOOKS
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="add">
                    Add Book
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Departments
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        History & Criticism
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Religious
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Music
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Study & Teaching
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <Books
              books={books}
              deleteBook={deleteBook}
              lendBook={lendBook}
              backBook={backBook}
            />
          </Route>
          <Route path="/add">
            <AddBook
              handleChange={handleChange}
              book={book}
              addBook={addBook}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
