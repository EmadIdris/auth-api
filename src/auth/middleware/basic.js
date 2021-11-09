'use strict';
//================================================================== import
const base64 = require('base-64');
const { users } = require('../models/index');
//================================================================== export function
module.exports = async (req, res, next) => {
  if (!req.headers.authorization) { return _authError(); }
  let basic = req.headers.authorization.split(' ').pop();
  let [user, pass] = base64.decode(basic).split(':');
  try {
    console.log(user, pass);
    req.user = await users.authenticateBasic(user, pass)
    next();
  } catch (e) {
    _authError()
  }

  function _authError() {
    res.status(403).send('Invalid Login');
  }
}