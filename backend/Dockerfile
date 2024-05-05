# Use an official Node.js image as a parent image with alpine variant
FROM node:14.14-alpine

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies (production dependencies only)
RUN npm install --only=production

# Install TypeScript globally (if needed)
RUN npm install -g typescript

# Copy the rest of the application code
COPY . .

# Compile TypeScript
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Run the application
CMD ["node", "dist/server.js"]
