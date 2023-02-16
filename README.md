# credit_card_application

Credit Card System is a RESTful web application that provides two endpoints for managing credit cards. Users can add new credit cards and retrieve all credit cards in the system. Credit card numbers are validated using the Luhn 10 algorithm.

Installation
To install Credit Card System run the following commands in terminal:
- clone the repository from git
git clone https://github.com/soumitaonwork/credit_card_application.git 

- run the following commands to start the node application:
npm install
npm start

Endpoints:
/add-card: Add a new credit card
Adds a new credit card for a given name, card number, and limit.

URL: http://localhost:3000/add-card
Method: POST
Request Body: JSON object with the following properties:
name: string (required)
cardNumber: string (required)
limit: number (required)
Success Response Code: 201 (Created)
Error Response Codes:
400 (Bad Request) if the request body is missing a required property or if the card number is not compatible with Luhn 10
500 (Internal Server Error) if there is a server error


/get-all-cards : Get all credit cards
Retrieves all credit cards in the system.

URL: http://localhost:3000/get-all-cards
Method: GET
Success Response Code: 200 (OK)
Response Body: JSON array of objects, where each object represents a credit card and has the following properties:
id: string (unique identifier for the credit card)
name: string
cardNumber: string
balance: number (current balance on the card)
limit: number
Error Response Codes:
500 (Internal Server Error) if there is a server error
Validation
All input and output is in JSON format. Credit card numbers may vary in length, up to 19 characters, and will always be numeric.

Luhn 10 Algorithm
The Luhn 10 algorithm is a checksum formula that is used to validate credit card numbers. The algorithm works by verifying that the last digit of the credit card number is correct based on the first 15 digits of the card number. If the last digit is incorrect, the card number is not valid. The algorithm is commonly used to detect accidental errors in card numbers, but it is not a foolproof method of detecting fraud.

In-memory Database used :
nedb


Swagger Documentation Link :
http://localhost:3000/api-docs/

Postman Collection :
Credit card application backend.postman_collection (found in root directory)

Add-on :
Dockerfile : A Dockerfile is a text file that contains a set of instructions that are used to build a Docker image. The Dockerfile is used to automate the process of creating a Docker container, by configuration required for the application to run.

