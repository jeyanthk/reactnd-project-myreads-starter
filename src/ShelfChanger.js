import React from 'react'
import propTypes from 'prop-types'

class ShelfChanger extends React.Component{
  onChange=(e)=>{
    this.props.moveBookTo(this.props.book,e.target.value);
  }
  render(){
    let {book}=this.props;
    return (
      <div className="book-shelf-changer">
            <select name="shelfName"  onChange={this.onChange} value={book.shelf?book.shelf:'none'}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
    );
  }
}

ShelfChanger.propTypes = {
  book: propTypes.object.isRequired,
}

export default ShelfChanger;