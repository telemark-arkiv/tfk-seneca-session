'use strict'

const envs = process.env
const setSessionData = require('./set-session-data')
const clearSessionData = require('./clear-session-data')
const deleteSessionData = require('./delete-session-data')
const getSessionData = require('./get-session-data')

module.exports = function (options) {
  const seneca = this

  seneca.add('role:session, cmd:set', setSessionData)
  seneca.add('role:session, cmd:clear', clearSessionData)
  seneca.add('role:session, cmd:delete', deleteSessionData)
  seneca.add('role: session, cmd:get', getSessionData)

  return {
    name: envs.TFK_SENECA_SESSION_TAG || 'tfk-seneca-session'
  }
}
