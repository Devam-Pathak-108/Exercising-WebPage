import ReactDOM from 'react-dom'
import './Modal.css'
const Modal = ({ open, children, close }) => {
    if (open) {
        return ReactDOM.createPortal(
            <>
                <div className='modalOverlay' />
                <div className='modalMain' >
                    <div className="modalCard">
                        <p className="modalHeading">Thanks You</p>
                        <p className="modalDescription">{children}</p>
                        <center>
                            <button className="modalButton" onClick={close}>Close</button>
                        </center>
                    </div>
                </div>
            </>,
            document.querySelector('#modal')
        );
    }
}

export default Modal;
