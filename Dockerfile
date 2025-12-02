FROM node:24-alpine AS installer
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:24-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=installer /app/node_modules ./node_modules

RUN npm run build

FROM caddy:alpine
COPY --from=builder /app/dist /srv
COPY <<EOF /etc/caddyfile
:80 {
    root /srv
    try_files {path} {path}/ /index.html
    file_server
}
EOF

EXPOSE 80
CMD ["caddy", "run", "--config", "/etc/caddyfile"]
