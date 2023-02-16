# Base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy application files
COPY package*.json ./
COPY app.js ./

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]