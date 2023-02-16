const creditCardDao = require("./../dao/creditcard-dao");
const validateCreditCard = require("./../utils/luhn-algorithm-util");

class CreditCardService {
  constructor() {}
  /**
   * @description : Method to add credit card
   * @param : name,card number and limit
   * @returns
   */
  async addCreditCard(name, cardNumber, limit) {
    try {
      if (isNaN(cardNumber)) {
        return { status: 406, msg: "Card number should be numeric" };
      }
      if (!validateCreditCard.validateCreditCardNumber(cardNumber)) {
        return { status: 406, msg: "Invalid card number" };
      } else {
        let addcreditcard = await creditCardDao.addCard(
          name,
          cardNumber,
          limit
        );
        return { status: 201, msg: `Credit card successfully added` };
      }
    } catch (error) {
      console.log(
        `Error occured trying to add credit card, Error: ${error.message}`
      );
      throw error;
    }
  }

  /**
   * @description : Method which retrives the list of active directory users
   * @param
   * @returns
   */
  async getAllCreditCard() {
    try {
      let allcards = await creditCardDao.getAllCards();
      console.log(allcards);
      return allcards;
    } catch (error) {
      console.log(
        `Error occured trying to fetch credit cards, Error: ${error.message}`
      );
      throw error;
    }
  }
}

module.exports = CreditCardService;
