FROM node:23

WORKDIR /whiteboard-app

COPY package* .
COPY ./prisma .

RUN npm install && npx prisma generate

COPY . .

CMD ["sh", "-c", "npx prisma migrate dev && npm run dev"]
