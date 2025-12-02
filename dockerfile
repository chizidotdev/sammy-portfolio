FROM node:24-alpine AS installer
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

FROM node:24-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=installer /app/node_modules ./node_modules

RUN pnpm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY <<EOF /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
EOF

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
