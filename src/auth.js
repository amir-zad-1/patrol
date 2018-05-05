module.exports.authenticate = function (email, password, callback) {
  if (email === 'test@domain.com' && password === 'pwd')
    callback(null, {ok: true})
  else
    callback(null, {ok: false})
}