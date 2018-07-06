import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from './Book';
import propTypes from 'prop-types'



class Searchbooks extends Component {

  state = {
    query: "",
    filteredBooks: []
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query
    }));

    BooksAPI.search(query, 20).then(filteredBooks => {
      if (!filteredBooks || filteredBooks.error) {
        this.setState({filteredBooks: []});
        return;
    }
    filteredBooks = filteredBooks.map((book) => {
      const shelfCheck = this.props.books.find(b => b.id === book.id);
      book.shelf = shelfCheck ? shelfCheck.shelf : "none";
      return book;
    });

    this.setState({ filteredBooks });
    });
  };

  render() {
    const { query, filteredBooks } = this.state;
    const {moveBookTo} = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {filteredBooks && filteredBooks.length > 0 ? (
              filteredBooks.map(book => (
                <li key={book.id}>
                <Book book={book} moveBookTo={moveBookTo}/>
                </li>
              ))
            ) : (
              <p>No books match your search criteria</p>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

Searchbooks.propTypes = {
  moveBookTo: propTypes.func.isRequired,
}

export default Searchbooks;
