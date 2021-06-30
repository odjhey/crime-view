FROM node:16-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./

RUN yarn --frozen-lockfile
COPY ./src ./src
COPY ./public ./public
RUN yarn build

FROM nginx:alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
