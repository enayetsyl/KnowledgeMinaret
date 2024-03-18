FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

RUN npm install -g next

RUN npm install tailwindcss @tabler/icons-react framer-motion

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]