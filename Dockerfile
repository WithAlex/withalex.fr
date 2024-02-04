FROM node:21-alpine AS frontend

WORKDIR /home/node/app
COPY package*.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:16.19.0 AS final
WORKDIR /app/
COPY --from=frontend /home/node/app/.output ./
EXPOSE 3000
CMD ["node", "server/index.mjs"]


