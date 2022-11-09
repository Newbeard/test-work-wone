// Функция валидации токена 
const checkToken = (tokenUser, tokenServer) => {

  tokenUser = tokenUser.replace(/\-/g, "");

  tokenServer = tokenServer.replace(/\-/g, "");

  if (Number(tokenServer) === Number(tokenUser)) {

    return true
  }
  return false
};

module.exports = checkToken;
