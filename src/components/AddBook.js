import React from "react";

export default function AddBook({ handleChange, book, addBook }) {
  return (
    <div>
      <div className="container w-50 mt-5 border border-secondary">
        <form style={{ padding: "20px 20px 10px 20px" }}>
          <div className="form-floating mb-3">
            <input
              type="text"
              onChange={handleChange}
              value={book.bookName}
              name="bookName"
              className="form-control"
              id="floatingInput"
              placeholder="book name.."
            />
            <label for="floatingInput">Book Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              onChange={handleChange}
              value={book.author}
              name="author"
              className="form-control"
              id="floatingPassword"
              placeholder="Author"
            />
            <label for="floatingPassword">Author</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              onChange={handleChange}
              value={book.quantity}
              name="quantity"
              className="form-control"
              id="floatingPassword"
              placeholder="quantity"
            />
            <label for="floatingPassword">Quantity</label>
          </div>
          <div className="form-floating mb-3">
            <select
              onChange={handleChange}
              value={book.department}
              name="department"
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option defaultValue>Open this select menu</option>
              <option value="History & Criticism">History & Criticism</option>
              <option value="Religious">Religious</option>
              <option value="Music">Music</option>
              <option value="Study & Teaching">Study & Teaching</option>
              <option value="Classic">Classic</option>
            </select>
            <label for="floatingSelect">Department</label>
          </div>
          <div class="form-floating">
            <textarea
              onChange={handleChange}
              value={book.comments}
              name="comments"
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>
          <button
            type="button"
            onClick={addBook}
            className="btn btn-primary mt-2"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
