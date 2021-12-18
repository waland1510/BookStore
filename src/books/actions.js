export const CREATE_BOOK = 'CREATE_BOOK';
export const createBook = book => ({
    type: CREATE_BOOK,
    payload: { book },
});

export const EDIT_BOOK = 'EDIT_BOOK';
export const editBook = book => ({
    type: EDIT_BOOK,
    payload: { book },
});

export const REMOVE_BOOK = 'REMOVE_BOOK';
export const deleteBook = id => ({
    type: REMOVE_BOOK,
    payload: { id },
});


export const LOAD_BOOKS_IN_PROGRESS = 'LOAD_BOOKS_IN_PROGRESS';
export const loadBooksInProgress = () => ({
    type: LOAD_BOOKS_IN_PROGRESS,
});

export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
export const loadBooksSuccess = books => ({
    type: LOAD_BOOKS_SUCCESS,
    payload: { books },
});

export const LOAD_BOOKS_FAILURE = 'LOAD_BOOKS_FAILURE';
export const loadBooksFailure = () => ({
    type: LOAD_BOOKS_FAILURE,
});