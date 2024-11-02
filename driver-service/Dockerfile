FROM node:14
WORKDIR /app
COPY src/package*.json ./
RUN npm install
COPY src/ .
EXPOSE 3001
CMD ["node", "index.js"]