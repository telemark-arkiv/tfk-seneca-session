'use strict'

const Seneca = require('seneca')
const Mesh = require('seneca-mesh')
const Session = require('./lib/session')
const envs = process.env

const options = {
  seneca: {
    tag: envs.TFK_SENECA_SESSION_TAG || 'tfk-seneca-session'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'role:session, cmd:set', model: 'consume'},
      {pin: 'role:session, cmd:get', model: 'consume'},
      {pin: 'role:session, cmd:clear', model: 'consume'},
      {pin: 'role:session, cmd:delete', model: 'consume'}
    ]
  },
  session: {
    url: envs.TFK_SENECA_SESSION_URL || 'https://session.no'
  },
  isolated: {
    host: envs.TFK_SENECA_SESSION_HOST || 'localhost',
    port: envs.TFK_SENECA_SESSION_PORT || 8000
  }
}

var Service = Seneca(options.seneca)

if (envs.TFK_SENECA_SESSION_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(Session, options.session)
