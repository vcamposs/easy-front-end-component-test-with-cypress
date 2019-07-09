FROM node:6.14.4

RUN npm install -g stubby
RUN mkdir -p /mocks

WORKDIR /mocks

ADD ./searchZipCode /mocks/searchZipCode
ADD ./startMocks.sh /mocks/startMocks.sh
RUN chmod +x /mocks/startMocks.sh
RUN chmod +x /mocks/searchZipCode/startSearchZipCode.sh

EXPOSE 8884 9003

ENTRYPOINT ["./startMocks.sh"]