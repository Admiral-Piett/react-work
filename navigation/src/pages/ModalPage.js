import Modal from "../components/Modal";
import { useState } from "react";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modalButton = (
    <div>
      <Button primary hollow onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={modalButton}>
      <p>Here's some stuff for you to read immediately.</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleOpen}>
        Show Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
