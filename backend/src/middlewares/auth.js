import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

export default async function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não providenciado' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    req.userId = decoded.id;

    console.log(req.userId);

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
}
