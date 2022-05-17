import axios from 'axios';
//import config from '#config';
import { useCookie } from 'h3'

export default async (req, res, next) => {
  try {
    const config = useRuntimeConfig();
    const apiUrl = config.public.API_URL;
    const token = useCookie(req, 'X-Toteem-Access-Token');
    const response = await axios.get(`${apiUrl}/users/me`, {
      headers: { 'X-Toteem-Access-Token': token },
    });
    const isAuthenticated = response.data.message === 'Ok';

    if (isAuthenticated && req.url === '/collaborator/login') {
      console.log(1);
      res.writeHead(301, { Location: '/collaborator' });
      res.end();
    } else if (isAuthenticated || req.url === '/collaborator/login') {
      console.log(req.url);
      next();
    } else {
      console.log(3);
      res.writeHead(301, { Location: '/collaborator/login' });
      res.end();
    }
  } catch (e) {
    if (req.url !== '/collaborator/login') {
      console.log(4);
      res.writeHead(301, { Location: '/collaborator/login' });
      res.end();
    } else {
      console.log(5);
      next();
    }
  }
};
