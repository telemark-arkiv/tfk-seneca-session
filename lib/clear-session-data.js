'use strict'

const mongojs = require('mongojs')
const envs = process.env
const dbsession = mongojs(envs.TFK_SENECA_SESSION_MONGODB_URI || 'localhost/session')
const sessions = dbsession.collection('sessions')

module.exports = function deleteSessions (args, callback) {
  const payload = {
    sessionId: args.sessionId
  }

  sessions.remove(payload, function removeSessions (error, data) {
    if (error) {
      console.error(error)
    } else {
      console.log(data)
    }
  })

  callback(null, {cleared: true})
}
