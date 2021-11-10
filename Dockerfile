FROM jekyll/jekyll

COPY . .

COPY Gemfile .
COPY Gemfile.lock .

RUN bundle install --quiet

CMD ["jekyll", "serve"]
