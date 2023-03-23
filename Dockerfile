## Development
FROM node:18 AS development

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --production=false

COPY . .

## Build
FROM development AS build

RUN npm run build

# COPY .env ./dist

## Production
FROM node:18 AS production

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --production=true

COPY --from=build /usr/app/dist .

CMD ["node", "/usr/app/src/main"]
