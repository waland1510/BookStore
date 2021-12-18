import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;


const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
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

const RemoveButton = styled(Button)`
    background-color: #ee2222;
    margin-left: 8px;
`;
const EditButton = styled(Button)`
    background-color: #22ee22;
`;

const BookListItem = ({ book = {}, index, setEditIndex, onDeletePressed, toggle }) => {
    return (
        <Container>
            <h3>{book.title}</h3>
            <p> Category: {book.category}</p>
            <p> Description: {book.description}</p>
            <p> Price: {book.price}</p>
            <ButtonsContainer>
                <EditButton
                    onClick={() => { toggle(); setEditIndex(index) }}
                    className="completed-button">Edit</EditButton>
                <RemoveButton
                    onClick={() => onDeletePressed(book.id)}
                    className="remove-button">Remove</RemoveButton>
            </ButtonsContainer>
        </Container >
    );
}

export default BookListItem;