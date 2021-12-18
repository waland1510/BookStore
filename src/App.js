import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import BookList from './books/BookList';


const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    width: 100vw;
    height: 100vh;
`;

const App = () => {
    return (
        <AppContainer>
            <BookList />
        </AppContainer>
    )
};

export default hot(module)(App);