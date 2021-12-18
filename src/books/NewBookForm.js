import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addBookRequest, editBookRequest } from './thunks';

const FormContainer = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`;

const NewBookInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`;

const NewBookButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`;

const NewBookForm = ({ book, onCreatePressed, onEditPressed, toggle, newId }) => {
    const [id] = useState(book ? book.id : '')
    const [title, setTitle] = useState(book ? book.title : '');
    const [price, setPrice] = useState(book ? book.price : '');
    const [category, setCategory] = useState(book ? book.category : '');
    const [description, setDescription] = useState(book ? book.description : '');

    return (
        <FormContainer>
            <NewBookInput
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <NewBookInput
                type="text"
                placeholder="Price"
                value={price}
                onChange={e => setPrice(e.target.value)} />
            <NewBookInput
                type="text"
                placeholder="Category"
                value={category}
                onChange={e => setCategory(e.target.value)} />
                <NewBookInput
                type="text"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)} />
            <br />
            {book ?
                <NewBookButton
                    onClick={() => {
                        toggle();
                        onEditPressed({ id, title, price, category, description });
                    }}>
                    Edit Book
                </NewBookButton>
                :
                <NewBookButton
                    onClick={() => {
                        toggle();
                        onCreatePressed({ id: newId, title, price, category, description });
                    }}>
                    Create Book
                </NewBookButton>}
        </FormContainer>
    );
};

const mapStateToProps = state => ({
    books: state.books.data,
});

const mapDispatchToProps = dispatch => ({
    onEditPressed: book => dispatch(editBookRequest(book)),
    onCreatePressed: book => dispatch(addBookRequest(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBookForm);