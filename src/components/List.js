import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import Details from './Details'

const List = (props) => {
    const { books } = useContext(BookContext)
    return books.length ? ( 
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return ( <Details book={book} key={book.id} />)
                })}
            </ul>
        </div>
     ) : (
        <div className="no-books">
            No books to read. Hello free time :)
        </div>
     )
}
 
export default List;