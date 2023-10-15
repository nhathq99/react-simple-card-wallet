Array.prototype.shuffle = function() {
  let m = this.length, i;
  while (m) {
    i = (Math.random() * m--) >>> 0;
    [this[m], this[i]] = [this[i], this[m]]
  }
  return this;
}

export const generateDummyCards = [
  {
    name: "Mike",
    number: "4545454545454545",
    expiry: "1024",
    cvc: "321",
    enable: true,
    type: "visa",
  },
  {
    name: "John",
    number: "4545676789891212",
    expiry: "0925",
    cvc: "213",
    enable: false,
    type: "mastercard",
  },
  {
    name: "Daniel",
    number: "5421342351234322",
    expiry: "0325",
    cvc: "214",
    enable: false,
    type: "mastercard",
  },
  {
    name: "Smith",
    number: "5754231234132312",
    expiry: "0824",
    cvc: "212",
    enable: true,
    type: "maestro",
  },
  {
    name: "Steve",
    number: "372394534623432",
    expiry: "0825",
    cvc: "574",
    enable: true,
    type: "amex",
  },
  {
    name: "Tim",
    number: "3528657843240892",
    expiry: "0724",
    cvc: "970",
    enable: false,
    type: "jcb",
  },
];

export const generateShuffleDummyCards = generateDummyCards.shuffle();