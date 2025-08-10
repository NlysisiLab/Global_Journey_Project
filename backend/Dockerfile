FROM node:22-alpine
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy tsconfig & source files
COPY tsconfig.json ./
COPY src ./src

# Build TypeScript
RUN npm run build

EXPOSE 5000
CMD ["node", "dist/server.js"]
