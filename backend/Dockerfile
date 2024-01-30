# Use an official Node.js image as a parent image with alpine variant
FROM node

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
# Expose the port the app runs on
EXPOSE 8080

# Run the application
CMD node server.js
