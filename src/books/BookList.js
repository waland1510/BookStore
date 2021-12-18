import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import NewBookForm from './NewBookForm';
import BookListItem from './BookListItem';
import { loadBooks, deleteBookRequest } from './thunks';
import Modal from './Modal'
import useModal from './useModal'

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;
const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;

const BookList = ({ books, onDeletePressed, isLoading, startLoadingBooks }) => {
    const [editIndex, setEditIndex] = useState(null)
    useEffect(() => {
        startLoadingBooks();
    }, []);
    const { isShowing, toggle } = useModal();
    const loadingMessage = <div>Loading Books...</div>;
    const content = (
        <ListWrapper>
            <h3>Book List:</h3>
            <Button onClick={() => { toggle(); setEditIndex(null) }}>Add Book</Button>
            <Modal
                isShowing={isShowing}
                hide={toggle}
            >
                <NewBookForm book={editIndex !== null ? books[editIndex] : null} toggle={toggle} newId={editIndex === null ? books.length + 1 : null} />
            </Modal>
            {books.sort(function (a, b) {
                return a.id - b.id;
            }).map((book, index) => <BookListItem
                book={book}
                index={index}
                onDeletePressed={onDeletePressed}
                setEditIndex={setEditIndex}
                toggle={toggle}
            />)}
        </ListWrapper>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: state.books.isLoading,
    books: state.books.data
});

const mapDispatchToProps = dispatch => ({
    startLoadingBooks: () => dispatch(loadBooks()),
    onDeletePressed: id => dispatch(deleteBookRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);