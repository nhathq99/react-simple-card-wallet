import React from "react";
import PropTypes from "prop-types";
import AddCard from "../AddCard/AddCard";
import { Modal } from "antd";

const AddEditCardModal = ({ data, isModalOpen, onClose }) => {
  return (
    <Modal
      open={isModalOpen}
      footer={null}
      title={null}
      maskClosable
      onCancel={onClose}
      closeIcon={false}
    >
      <AddCard data={data} onCloseClicked={onClose} />
    </Modal>
  );
};

AddEditCardModal.propTypes = {
  data: PropTypes.object,
  isModalOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default AddEditCardModal;
