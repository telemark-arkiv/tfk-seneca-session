# tfk-seneca-session
Session service

```curl -d '{"role": "session", "cmd":"set", "sessionId": "1234", "key":"test", "data":"kjeks"}' -v http://localhost:8000/act```
```curl -d '{"role": "session", "cmd":"get", "sessionId": "1234", "key":"test", "data":"kjeks"}' -v http://localhost:8000/act```
```curl -d '{"role": "session", "cmd":"delete", "sessionId": "1234", "key":"test", "data":"kjeks"}' -v http://localhost:8000/act```
```curl -d '{"role": "session", "cmd":"clear", "sessionId": "1234", "key":"test", "data":"kjeks"}' -v http://localhost:8000/act```