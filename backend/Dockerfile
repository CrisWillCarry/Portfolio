# Use an official Node.js image as a parent image with alpine variant
FROM node:14.14-alpine
# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Compile TypeScript
RUN npm run build

WORKDIR /app/dist

# Run the application
CMD node dist/server.js
