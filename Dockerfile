FROM oven/bun:latest AS build

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run --bun build

FROM oven/bun:latest AS production

WORKDIR /app

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production --ignore-scripts

COPY --from=build /app/build ./build

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
	CMD bun -e "const response = await fetch('http://127.0.0.1:3000/'); process.exit(response.ok ? 0 : 1)" || exit 1

CMD ["bun", "./build"]
