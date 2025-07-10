FROM node:18-alpine
WORKDIR /app
COPY . /app
RUN if [ -f package.json ]; then npm install; fi
CMD ["npm", "start"]
