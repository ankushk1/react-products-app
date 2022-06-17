import React, { useRef, useState } from "react";

const Modal = () => {
  const modalRef = useRef(null);
  const [style, setStyle ] = useState(false)

  const onOpenModal = () => {
    modalRef.current.classList.remove('hidden')
    setStyle(true)
  };

  const onCloseModal = (e) => {
    modalRef.current.classList.add('hidden')
  }

  const onCloseModal2 = (e) => {
    // modalRef.current.classList.add('hidden')
    console.log(e.key);
    if(e.key === 'Escape' && ! modalRef.current.classList.contains('hidden')) {
      onCloseModal()
    }
  }

  return (
    <div style={{height:"100vh"}} className = {style ? "background-blur" : null} >
     <div>
     <button className="show-modal" onClick={onOpenModal} onKeyDown={(e) => onCloseModal2(e)}>
        Show modal 1
      </button>
     </div>
      <div ref={modalRef} className="modal hidden">
        <button className="close-modal" onClick={onCloseModal}
         >Close</button>
        <h1>I'm a modal window 😍</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Modal;
