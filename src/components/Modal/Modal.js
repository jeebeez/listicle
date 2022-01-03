import React, { useRef } from "react";
import ReactDom from "react-dom";
import "./Modal.scss";

export default function Modal({ setShowModal, item }) {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <div className="imageModal">
          <img
            src={`https://avatars.dicebear.com/api/adventurer-neutral/${item.ID}.svg`}
            alt="avatar"
          />
        </div>
        <div className="allData">
          <p
            style={{ backgroundColor: item.backgroundColor }}
            className="IDModal"
          >
            #{item.ID}
          </p>
        </div>
        <div className="allData">
          <p className="title"> NAME</p>
          <p>{item.FirstNameLastName}</p>
        </div>
        <div className="allData">
          <p className="title"> EMAIL</p>
          <p>{item.EmailAddress}</p>
        </div>
        <div className="allData">
          <p className="title"> PHONE</p>
          <p>{item.Phone}</p>
        </div>
        <div className="allData">
          <p className="title">COMPANY</p>
          <p>{item.Company}</p>
        </div>

        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
