import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  actionAddCard,
  actionEditCard,
} from "../../../../redux/root/root.action";
import { Spacer, Wrapper } from "./AddCard.styled";
import { Button, Form, Input, message } from "antd";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { actionHideModal } from "../../../../redux/home/home.action";
import { addCardValidator } from "../../../../utils/validators";

const AddCard = ({ data, onCloseClicked }) => {
  const dispatch = useDispatch();
  const [isValidCard, setValidCard] = useState(false);
  const [card, setCard] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    type: "",
    enable: true,
  });

  const [messageApi, contextHolder] = message.useMessage();

    const showError = (msg) => {
      messageApi.open({
        type: "error",
        content: msg,
      });
    };

  useEffect(() => {
    const card = data?.card ?? {};
    setCard({
      cvc: card?.cvc ?? "",
      expiry: card?.expiry ?? "",
      focus: "",
      name: card?.name ?? "",
      number: card?.number ?? "",
      type: "",
      enable: card?.enable ?? true,
    });
  }, [data?.card]);
  const handleSubmit = () => {
    const cardData = { ...card };
    delete cardData.focus;
    const error = addCardValidator(cardData);
    if (error) {
      showError(error);
      return;
    }
    if (data) {
      dispatch(actionEditCard(cardData, data.index));
    } else {
      dispatch(actionAddCard(cardData));
    }
    setCard({
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      number: "",
      type: "",
    });
    dispatch(actionHideModal());
  };

  const handleInputFocus = (e) => {
    setCard({
      ...card,
      focus: e.target.name,
    });
    console.log("e.target.focus: ", e.target.name);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCard({ ...card, [name]: value });
  };

  const isEmpty = () => {
    const cardData = { ...card };
    delete cardData.focus;
    return !Object.values(cardData).every((e) => e !== "");
  };

  const handleCallback = (type, isValid) => {
    setValidCard(isValid);
    setCard({ ...card, type: type.issuer });
  };
  return (
    <Wrapper>
      {contextHolder}
      <div className="box-card">
        <Cards
          cvc={card.cvc}
          expiry={card.expiry}
          focused={card.focus}
          name={card.name}
          number={card.number}
          callback={handleCallback}
        />
      </div>
      <Form className="add-card-form">
        <Input
          value={card.number}
          type="number"
          name="number"
          pattern="[0-9]{19}"
          maxLength={19}
          placeholder="Card Number e.g: 4545454545454545"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <Spacer />
        <Input
          value={card.name}
          type="text"
          name="name"
          maxLength={21}
          pattern="^[a-zA-Z ]+$"
          placeholder="Card Name e.g: John Smith"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <Spacer />
        <div className="expiry-cvc-box">
          <Input
            value={card.expiry}
            className="expiry"
            type="number"
            name="expiry"
            pattern="[0-9]{4}"
            maxLength={4}
            placeholder="Valid Thru e.g: 0323"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <Spacer />
          <Input
            value={card.cvc}
            className="cvc"
            type="number"
            name="cvc"
            placeholder="CVC e.g: 1234"
            pattern="[0-9]{4}"
            maxLength={4}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <Spacer />
        <div className="box-buttons">
          <Button
            type="primary"
            size="large"
            danger
            ghost
            onClick={onCloseClicked}
          >
            Close
          </Button>
          <Spacer />
          <Button
            className="primary-button"
            type="primary"
            size="large"
            disabled={!isValidCard && isEmpty()}
            onClick={handleSubmit}
          >
            {data ? "Save Changes" : "Add Card"}
          </Button>
        </div>
      </Form>
    </Wrapper>
  );
};
AddCard.propTypes = {
  data: PropTypes.object,
  onCloseClicked: PropTypes.func,
};

export default AddCard;
