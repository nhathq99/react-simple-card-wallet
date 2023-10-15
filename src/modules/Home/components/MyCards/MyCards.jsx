import React from "react";
import { Switch, Table, List, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { cardsSelector } from "../../../../redux/root/root.selector";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  Wrapper,
  CardType,
  CardInfo,
  CardStatus,
  CardAction,
  Spacer,
} from "./MyCards.styled";
import {
  actionDeleteCard,
  actionEditStatusCard,
} from "../../../../redux/root/root.action";
import { actionShowModal } from "../../../../redux/home/home.action";
import RowItem from "./components/RowItem/RowItem";

const columns = (onEnableClicked, onEditClicked, onDeleteClicked) => [
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    width: "15%",
    render: (text) => (
      <CardType>
        <p>{text}</p>
      </CardType>
    ),
  },
  {
    title: "Info",
    dataIndex: "info",
    key: "info",
    width: "25%",
    render: (_, { name, number }) => (
      <CardInfo>
        <p className="name">{name}</p>
        <p>xxxx xxxx xxxx {number.slice(-4)}</p>
      </CardInfo>
    ),
  },
  {
    title: "Expiration",
    dataIndex: "expiry",
    key: "expiry",
    width: "15%",
    render: (text) => {
      const pair = Array.from(text);
      pair.splice(2, 0, "/");
      return <p>{pair.join("")}</p>;
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "enable",
    width: "15%",
    render: (_, { enable }) => (
      <CardStatus enable={enable}>{enable ? "Enabled" : "Disabled"}</CardStatus>
    ),
  },
  {
    title: "",
    dataIndex: "actions",
    key: "actions",
    width: "20%",
    render: (_, { enable }, index) => (
      <CardAction>
        <Switch checked={enable} onChange={(e) => onEnableClicked(e, index)} />
        <Spacer />
        <EditOutlined className="icons" onClick={() => onEditClicked(index)} />
        <Spacer />
        <Popconfirm
          title="Delete the card"
          description="Are you sure to delete this card?"
          onConfirm={() => onDeleteClicked(index)}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined className="icons" onClick={() => {}} />
        </Popconfirm>
      </CardAction>
    ),
  },
];

const MyCards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(cardsSelector);

  const handleEnableClick = (enable, index) => {
    dispatch(actionEditStatusCard(enable, index));
  };
  const handleEditClick = (index) => {
    const card = cards[index];
    dispatch(actionShowModal({ card, index }));
  };
  const handleDeleteClick = (index) => {
    dispatch(actionDeleteCard(index));
  };
  return (
    <Wrapper>
      <Table
        className="table"
        dataSource={cards}
        columns={columns(handleEnableClick, handleEditClick, handleDeleteClick)}
      />
      <List
        className="list"
        dataSource={cards}
        renderItem={(item, index) => (
          <List.Item className="list-item" key={index}>
            <RowItem
              index={index}
              card={item}
              onEnableClicked={handleEnableClick}
              onEditClicked={handleEditClick}
              onDeleteClicked={handleDeleteClick}
            />
          </List.Item>
        )}
      />
    </Wrapper>
  );
};

export default MyCards;
