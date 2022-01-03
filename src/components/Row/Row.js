import React, { useState } from "react";
import "./Row.scss";
import Modal from "../Modal/Modal";

export default function Row({ item, ...props }) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <>
      {showModal ? <Modal setShowModal={setShowModal} item={item} /> : null}
      <div {...props} data-index={item.ID} className="row" onClick={openModal}>
        <div className="ID">
          <div style={{ backgroundColor: item.backgroundColor }}>
            #{item.ID}
          </div>
        </div>
        <div className="name">{item.FirstNameLastName}</div>
        <div className="email">{item.EmailAddress}</div>
        <div className="phone">{item.Phone}</div>
        <div className="company">{item.Company}</div>
        <div className="image">
          <img
            src={`https://avatars.dicebear.com/api/adventurer-neutral/${item.ID}.svg`}
            alt="avatar"
          />
        </div>
      </div>
    </>
  );
}
