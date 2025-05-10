FROM node:14 AS base

FROM base AS development

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source

COPY . .

EXPOSE 4000

CMD ["npm","run", "start-dev"]

FROM base AS production

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .

RUN npm install --only=production

# Bundle app source

COPY . .

EXPOSE 4000

CMD ["npm" ,"run", "start"]