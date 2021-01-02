FROM nginx:latest

COPY tools/docker/nginx/nginx.conf  /etc/nginx/
COPY tools/docker/nginx/default.conf /etc/nginx/conf.d/
RUN echo "upstream php-upstream { server php:9000; }" > /etc/nginx/conf.d/upstream.conf

EXPOSE 80
EXPOSE 443
