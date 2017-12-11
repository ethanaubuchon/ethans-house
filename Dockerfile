FROM alpine

RUN apk update && apk add nginx && apk add openrc --no-cache

RUN adduser -D -g 'www' www

RUN mkdir /www && chown -R www:www /var/lib/nginx && chown -R www:www /www

CMD /usr/sbin/nginx -g "daemon off;"
