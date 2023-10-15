import React from "react";
import { Button, Popover, Menu } from "antd";
import { PropTypes } from 'prop-types';
import { MoreOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Wrapper } from "./Home.styled";
import { modalSelector } from "../../redux/home/home.selector";
import "react-credit-cards/es/styles-compiled.css";
import MyCards from "./components/MyCards/MyCards";
import AddEditCardModal from "./components/AddEditCardModal/AddEditCardModal";
import { useSelector, useDispatch } from "react-redux";
import { actionShowModal, actionHideModal } from "../../redux/home/home.action";
import { actionDeleteAllCards, actionGenerateDummyCard } from "../../redux/root/root.action";

const moreItems = [
  { label: "Generate dummy cards", key: "item-1" },
  { label: "Delete all cards", key: "item-2" },
];

const MoreMenu = ({ onItemClick }) => (
  <Menu selectedKeys={[]}>
    {moreItems.map((e) => (
      <Menu.Item key={e.key} onClick={(e) => onItemClick(e.key)}>
        {e.label}
      </Menu.Item>
    ))}
  </Menu>
);
MoreMenu.propTypes = {
  onItemClick: PropTypes.func,
}

const Home = () => {
  const dispatch = useDispatch();
  const modalState = useSelector(modalSelector);

  const handleMenuClick = (key) => {
    switch(key) {
      case 'item-1':
        dispatch(actionGenerateDummyCard());
        break;
      case 'item-2':
        dispatch(actionDeleteAllCards());
        break;
      default:
        return;
    }
  };

  return (
    <Wrapper>
      <div className="body">
        <div className="box-label">
          <div className="box-left">
            <p className="label">My Cards</p>
            <Popover content={<MoreMenu onItemClick={handleMenuClick} />}>
              <MoreOutlined className="more-icon" />
            </Popover>
          </div>
          <Button
            icon={<PlusCircleOutlined />}
            type="primary"
            size="large"
            onClick={() => dispatch(actionShowModal())}
          >
            Add New Card
          </Button>
        </div>
        <MyCards />
      </div>
      <AddEditCardModal
        isModalOpen={modalState.isOpenModal}
        data={modalState.data}
        onClose={() => dispatch(actionHideModal())}
      />
    </Wrapper>
  );
};

export default Home;
