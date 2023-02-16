const creditCardService = require("./../services/creditcard-service");
const responseFactory = require("./../utils/responseFactory");

module.exports = {
  addCreditCard: async (req, res, next) => {
    const customResponse = responseFactory(res);
    try {
      const { name, cardNumber, limit } = req.body;
      if (!name || !cardNumber || !limit ||!(typeof name === "string")) {
        customResponse.badRequest(
          "Please enter name,card number and limit as string parameters."
        );
      } else {
        const creditCard = new creditCardService();
        const report = await creditCard.addCreditCard(name, cardNumber, limit);
        if (report.status == 201) {
          customResponse.created(report.msg);
        } else if (report.status == 400) {
          customResponse.badRequest(report.msg);
        } else {
          customResponse.error(error);
        }
      }
    } catch (error) {
      customResponse.error(error);
    }
  },

  getAllCreditCards: async (req, res, next) => {
    const customResponse = responseFactory(res);
    try {
      const creditCard = new creditCardService();
      const report = await creditCard.getAllCreditCard();
      if (report) {
        customResponse.success(report);
      }
    } catch (error) {
      customResponse.error(error);
    }
  },
};
