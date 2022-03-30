FROM node:17.8.0-alpine3.14 AS build
WORKDIR /usr/src
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/dist/express-gaumont .
