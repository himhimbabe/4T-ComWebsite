FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY index.html styles.css solution.css site.js scroll-motion.js /srv/
COPY assets/ /srv/assets/
COPY solutions/ /srv/solutions/
EXPOSE 8080
