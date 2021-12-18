import {
    createBook,
    editBook,
    deleteBook,
    loadBooksInProgress,
    loadBooksSuccess,
    loadBooksFailure,
} from './actions';

export const loadBooks = () => async dispatch => {
    try {
        dispatch(loadBooksInProgress());
        // localStorage.setItem("books", JSON.stringify([{ id: 1, title: "first", price: "$10", category: "Horror", description: "Horror classic" }]))
        const books = JSON.parse(localStorage.getItem("books"))
        // const books = [{ id: 1, title: "first", price: "$10" }]

        dispatch(loadBooksSuccess(books));
    } catch (e) {
        dispatch(loadBooksFailure());
        dispatch(displayAlert(e));
    }
}

export const addBookRequest = book => async dispatch => {
    try {
        const books = JSON.parse(localStorage.getItem("books"))
        books.push({ id: books.length + 1, ...book })
        localStorage.setItem("books", JSON.stringify(books))
        dispatch(createBook(book));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const editBookRequest = book => async dispatch => {
    try {
        const books = JSON.parse(localStorage.getItem("books"))
        const filtered = books.filter(item => item.id !== book.id)
        filtered.push(book)
        localStorage.setItem("books", JSON.stringify(filtered))
        dispatch(editBook(book));
    } catch (e) {
        dispatch(displayAlert(e, book));
    }
}

export const deleteBookRequest = id => async dispatch => {
    try {
        const books = JSON.parse(localStorage.getItem("books"))
        const filtered = books.filter(book => book.id !== id)
        localStorage.setItem("books", JSON.stringify(filtered))
        dispatch(deleteBook(id));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const displayAlert = text => () => {
    alert(text);
};