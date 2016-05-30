'use strict'

const mongojs = require('mongojs')
const envs = process.env
const dbsession = mongojs(envs.TFK_SENECA_SESSION_MONGODB_URI || 'localhost/session')
const sessions = dbsession.collection('sessions')

module.exports = function addSession (args, callback) {
  const payload = {
    query: {
      sessionId: args.sessionId,
      key: args.key
    },
    update: {
      '$set': {
        data: args.data
      }
    },
    upsert: true,
    new: true
  }

  sessions.findAndModify(payload, function updateSession (error, data) {
    if (error) {
      callback (error, null)
    } else {
      callback (null, data)
    }
  })
}
