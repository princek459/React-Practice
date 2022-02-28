import ReactDOM from 'react-dom'
import './Modal.css'


export default function Modal( {children, handleClose} ) {
    // rendering the component outside the parent component
    return ReactDOM.createPortal((
        <div className="modal-backdrop">
            <div className='modal'>
                {children}
            <button onClick={handleClose}>CLOSE</button>
            </div>
        </div>
    ), document.body)
}
