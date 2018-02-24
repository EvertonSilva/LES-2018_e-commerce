FROM ruby:2.3.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /codex_rails
WORKDIR /codex_rails
COPY Gemfile /codex_rails/Gemfile
COPY Gemfile.lock /codex_rails/Gemfile.lock
RUN bundle install
COPY . /codex_rails
