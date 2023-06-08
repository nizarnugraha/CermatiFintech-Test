FROM node:15.14

RUN npm install -g npm@7.15.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN npm install
ENV ENVIRONMENT="dev"
RUN chmod +x /usr/src/app/run.sh
CMD ["/usr/src/app/run.sh"]