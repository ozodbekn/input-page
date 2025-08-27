import React, { useState } from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  document.body.style.overflow = show ? "hidden" : "auto";
  return (
    <div>
      <h2>Sidebar</h2>
      <button onClick={handleShow}>Show</button>

      <div>
        {show && <div onClick={handleClose} className="overlay"></div>}

        <div className={`sidebar ${show ? "active" : ""}`}>
          <button onClick={handleClose}>close</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
