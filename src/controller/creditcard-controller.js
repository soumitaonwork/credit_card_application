const creditCardService = require('./../services/creditcard-service');
module.exports = {
    addCreditCard: async (req, res, next) => {
        try {
            const { name, cardNumber, limit } = req.body;
            const creditCard = new creditCardService();
            const report = await creditCard.addCreditCard(name, cardNumber, limit);
            return res.status(report.status).send({ message: report.msg});
        } catch (error) {
            return next(error);
        }
    },

    getAllCreditCards: async (req, res, next) => {
        try {
            const creditCard = new creditCardService();
            const report = await creditCard.getAllCreditCard();
            if(report){
                return res.status(200).json({ message: report });
            }
            
        } catch (error) {
            return next(error);
        }
    }
}