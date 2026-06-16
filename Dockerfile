# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install && npm cache clean --force

COPY . .

# Build arguments (passed from GitHub Actions)
ARG VITE_API_BASE_URL
ARG VITE_DOMAIN
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_DOMAIN=$VITE_DOMAIN

# Build the Vite app
RUN npm run build

# ---- Production stage ----
FROM nginx:alpine

# Copy built static files
COPY --from=builder /app/build /usr/share/nginx/html

# Write nginx config with SPA routing
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD sed -i "s/listen 80;/listen ${PORT:-80};/g" /etc/nginx/conf.d/default.conf && nginx -g "daemon off;"