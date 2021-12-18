import {
    CREATE_BOOK,
    EDIT_BOOK,
    REMOVE_BOOK,
    LOAD_BOOKS_IN_PROGRESS,
    LOAD_BOOKS_SUCCESS,
    LOAD_BOOKS_FAILURE,
} from './actions';

const initialState = { isLoading: false, data: [] };

export const books = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_BOOK: {
            const { book } = payload;
            return {
                ...state,
                data: state.data.concat({ id: state.data.length + 1, ...book }),
            };
        }
        case EDIT_BOOK: {
            const { book } = payload;
            return {
                ...state,
                data: state.data.filter(item => item.id !== book.id).concat(book),
            };
        }
        case REMOVE_BOOK: {
            const { id } = payload;
            return {
                ...state,
                data: state.data.filter(book => book.id !== id),
            };
        }
        case LOAD_BOOKS_SUCCESS: {
            const { books } = payload;
            return {
                ...state,
                isLoading: false,
                data: books,
            };
        }
        case LOAD_BOOKS_IN_PROGRESS:
            return {
                ...state,
                isLoading: true,
            }
        case LOAD_BOOKS_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}