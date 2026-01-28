import http from 'http';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenf from 'dotenv';
import { Server } from 'socket.io';

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/public", express.static(path.join(__dirname, '../web/public')));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../web/index.html'));
    console.log(path.join(__dirname, '../web/index.html'));
});

httpServer.listen(3000, () => {
    console.log('Server is listening on port 3000');
}); 