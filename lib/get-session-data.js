'use strict'

const mongojs = require('mongojs')
const envs = process.env
const dbsession = mongojs(envs.TFK_SENECA_SESSION_MONGODB_URI || 'localhost/session')
const sessions = dbsession.collection('sessions')

module.exports = function getSessions (args, callback) {
  const payload = {
    sessionId: args.sessionId
  }

  sessions.find(payload, function findSessions (error, data) {
    if (error) {
      callback (error, null)
    } else {
      callback (null, data)
    }
  })
}
