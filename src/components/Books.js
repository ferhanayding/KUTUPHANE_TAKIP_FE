import React from "react";

function Books({ books, lendBook, deleteBook, backBook }) {
  return (
    <div className="container mt-5 ">
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">Department</th>
            <th scope="col">Quantity</th>
            <th scope="col" colSpan="3">
              Process
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={index}>
                <th scope="row">{book._id}</th>
                <td
                  data-toggle="tooltip"
                  data-placement="top"
                  title={book.comments}
                >
                  {book.bookName}
                  <span class="tooltiptext">{book.comment}</span>
                </td>
                <td>{book.author}</td>
                <td>{book.department}</td>
                <td>{book.quantity}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      deleteBook(book._id);
                    }}
                  >
                    DELETE
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      lendBook(book._id);
                    }}
                  >
                    LEND
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      backBook(book._id);
                    }}
                  >
                    BACK
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
