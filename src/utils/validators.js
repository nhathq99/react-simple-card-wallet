export const addCardValidator = (card) => {
    if (!card.number.match("[1-9]")) {
      return "Card Number only have digit";
    }
    if (card.number.length > 19) {
        return 'Card Number must be less than 19 characters';
    }
    if (card.name.length > 21) {
        return 'Card Name is too long, must be less than 21 characters';
    }
    if (!card.expiry.match("[1-9]")) {
      return "Expiry must be only digit";
    }
    if (card.expiry.length != 4) {
      return "Invalid Expiry, please input 4 digit";
    }
    if (!card.cvc.match("[1-9]")) {
      return "CVC must be only digit";
    }
    if (card.cvc.length < 3 || card.cvc.length > 5) {
      return "Invalid CVC, please input again";
    }
    return undefined;
}