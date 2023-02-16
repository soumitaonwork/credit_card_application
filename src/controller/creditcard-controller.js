const creditCardService = require("./../services/creditcard-service");
const responseFactory = require("./../utils/responseFactory");

module.exports = {
  addCreditCard: async (req, res, next) => {
    const customResponse = responseFactory(res);
    try {
      const { name, cardNumber, limit } = req.body;
      if(!name || !cardNumber || limit){
        customResponse.notFound("Please enter name,card number and limit as string parameters.")
      }
      const creditCard = new creditCardService();
      const report = await creditCard.addCreditCard(name, cardNumber, limit);
      if (report.status == 200) {
        customResponse.success(report.msg);
      } else {
        customResponse.notAcceptable(report.msg);
      }
    } catch (error) {
      customResponse.error(error.message);
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
      customResponse.error(error.message);
    }
  },
};
