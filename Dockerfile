###########################################################
#
# Dockerfile for tfk-seneca-session
#
###########################################################

# Setting the base to nodejs 4.4.7
FROM mhart/alpine-node:4.4.7

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Extra tools for native dependencies
RUN apk add --no-cache make gcc g++ python

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV TFK_SENECA_SESSION_TAG tfk-seneca-session
ENV TFK_SENECA_SESSION_URL https://session.no
ENV TFK_SENECA_SESSION_HOST localhost
ENV TFK_SENECA_SESSION_PORT 8000
ENV TFK_SENECA_SESSION_MONGODB_URI mongodb://localhost/session

# Startup
CMD ["node", "service.js", "--seneca-log=type:act"]