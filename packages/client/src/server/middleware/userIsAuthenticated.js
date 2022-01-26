import axios from "axios";
import config from "#config";

export default async (req, res, next) => {
  try {
    const apiUrl = config.API_URL;
    const token = req.headers.cookie.split("toteemToken=").pop();
    const response = await axios.get(`${apiUrl}/users/me`, {
      headers: { "X-Toteem-Access-Token": token },
    });
    const isAuthenticated = response.data.message === "Ok";

    if (isAuthenticated && req.url === "/signin") {
      res.writeHead(301, { Location: "/" });
      res.end();
    } else if (isAuthenticated || req.url === "/signin") {
      next();
    } else {
      res.writeHead(301, { Location: "/signin" });
      res.end();
    }
  } catch (e) {
    if (req.url !== "/signin") {
      res.writeHead(301, { Location: "/signin" });
      res.end();
    } else {
      next();
    }
  }
};
