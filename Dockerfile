# Use the official Node.js image.
FROM node:20

# Set the working directory.
WORKDIR /work/foodie

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Expose the application port.
EXPOSE 4000

# Start the application using PM2.
# CMD ["pm2-runtime", "start", "ecosystem.config.js"]
CMD ["node", "server.js"]
