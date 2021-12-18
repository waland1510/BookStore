import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .5;
`;
const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
`;
const ModalDiv = styled.div`
    z-index: 100;
    background: white;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 3px;
    max-width: 500px;
    padding: 2rem;
`;


const Modal = ({ isShowing, hide, children }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <ModalOverlay />
        <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <ModalDiv>
                <div className="modal-header">
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {children}
                </div>
            </ModalDiv>
        </ModalWrapper>
    </React.Fragment>, document.querySelector('#modal')
) : null;

export default Modal;