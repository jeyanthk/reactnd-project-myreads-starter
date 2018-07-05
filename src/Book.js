import React, { Component } from "react";
import propTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'


class Book extends Component {
  render() {
    const { book, moveBookTo } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}
          />
        <ShelfChanger book={book} moveBookTo={moveBookTo}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(", ") : "  Author Unknown "}
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  book: propTypes.object.isRequired,
  moveBookTo: propTypes.func.isRequired,
}

export default Book;
