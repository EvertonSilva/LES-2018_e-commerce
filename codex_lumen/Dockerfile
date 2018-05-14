FROM php:7-fpm

RUN apt-get update && apt-get install build-essential openssl zlib1g-dev

# Install MCrypt
# RUN apt-get update \
#     && apt-get install -y libmcrypt-dev \
#     && pecl install mcrypt-1.0.1 \
#     && docker-php-ext-install mcrypt

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer

# Install Mysql client
RUN apt-get update && apt-get install -y mysql-client \
    && docker-php-ext-install pdo_mysql

# Install mbstring
RUN docker-php-ext-install mbstring

# Install PHP zip extension
RUN docker-php-ext-install zip

# Install Git
RUN apt-get update \
    && apt-get install -y git

RUN mkdir /codex_lumen
WORKDIR /codex_lumen
COPY . /codex_lumen
