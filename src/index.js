import http from 'http';
import dotenv from 'dotenv';
import app from './app';

dotenv.config({ silent: true });
const port = parseInt(process.env.PORT, 10) || 3000;
const server = http.createServer(app);

server.listen(port, (err) => {
  if (!err) {
    console.log(`Server live at http://localhost:${port}`);
  }
});