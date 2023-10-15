import React from "react";
import { Menu, Popconfirm, Popover } from "antd";
import PropTypes from "prop-types";
import { CreditCardOutlined, MoreOutlined } from "@ant-design/icons";
import { Wrapper, SmallSpacer } from "./RowItem.styled";

const MoreMenu = ({ enable, onItemClicked }) => (
  <Menu selectedKeys={[]}>
    <Menu.Item key={"item-1"} onClick={(e) => onItemClicked(e.key)}>
      {enable ? "Disable" : "Enable"}
    </Menu.Item>
    <Menu.Item key={"item-2"} onClick={(e) => onItemClicked(e.key)}>
      Edit
    </Menu.Item>
    <Popconfirm
      title="Delete the card"
      description="Are you sure to delete this card?"
      onConfirm={() => onItemClicked("item-3")}
      okText="Yes"
      cancelText="No"
    >
      <Menu.Item key={"item-3"}>Delete</Menu.Item>
    </Popconfirm>
  </Menu>
);
MoreMenu.propTypes = {
  enable: PropTypes.bool,
  onItemClicked: PropTypes.func,
};

const RowItem = ({
  index,
  card,
  onEnableClicked,
  onEditClicked,
  onDeleteClicked,
}) => {
  const handleItemClick = (key) => {
    switch (key) {
      case "item-1":
        onEnableClicked(!card.enable, index);
        break;
      case "item-2":
        onEditClicked(index);
        break;
      case "item-3":
        onDeleteClicked(index);
        break;
    }
  };

  const expiryText = (origin) => {
    const pair = Array.from(origin);
      pair.splice(2, 0, "/");
      return pair.join("");
  };

  return (
    <Wrapper>
      <div className="header">
        <div className="left-side">
          <CreditCardOutlined className="card-icon" />
          <p className="type">{card.type}</p>
        </div>
        <Popover
          content={
            <MoreMenu enable={card.enable} onItemClicked={handleItemClick} />
          }
        >
          <MoreOutlined className="more-icon" />
        </Popover>
      </div>
      <SmallSpacer />
      <div className="info-row">
        <p className="title">Info:</p>
        <div className="content-box">
          <p className="name">{card.name}</p>
          <p className="number">xxxx xxxx xxxx {card.number.slice(-4)}</p>
        </div>
      </div>
      <SmallSpacer />
      <div className="expiry-status">
        <div className="expiry">
          <p className="title">Expiration:</p>
          <p>{expiryText(card.expiry)}</p>
        </div>
        <div className="status">
          <p className="title">Status:</p>
          <p className={`frame ${card.enable ? "enabled" : "disabled"}`}>
            {card.enable ? "Enabled" : "Disabled"}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

RowItem.propTypes = {
  index: PropTypes.number,
  card: PropTypes.object,
  onEnableClicked: PropTypes.func,
  onEditClicked: PropTypes.func,
  onDeleteClicked: PropTypes.func,
};

export default RowItem;
