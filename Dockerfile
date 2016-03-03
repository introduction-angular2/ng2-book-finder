FROM node:4.2-slim

# Expose PORT
EXPOSE 3000

# Set Current Working Directory
WORKDIR /dist

COPY ./package.json /dist
COPY ./app /dist/app
COPY ./assets /dist/assets

COPY ./index.html /dist
COPY ./favicon.ico /dist

RUN npm install

RUN npm run tsc:w

# Execute the command when container starts
CMD ["npm","run", "lite"];
