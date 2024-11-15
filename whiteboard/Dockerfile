FROM node:23

WORKDIR /whiteboard-app

COPY package* .
COPY ./prisma .

RUN npm install
# RUN npx prisma generate

COPY . .

CMD [ "npm", "run", "dev" ]
