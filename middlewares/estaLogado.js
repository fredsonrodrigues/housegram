function estaLogado(req, res, next) {
  if (req.session.usuario) {
    return next();
  }

  return res.redirect('/');
}

module.exports = estaLogado;
