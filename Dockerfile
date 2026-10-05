FROM oven/bun:latest

RUN apk add --no-cache curl

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

EXPOSE 3000
CMD ["bun", "run", "build/index.js"]
