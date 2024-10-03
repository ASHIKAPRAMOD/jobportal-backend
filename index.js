import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for all requests
app.use(express.json());


app.use(express.urlencoded({ extended: true }));
const corsOptions = {
    credentials: true,
    origin: 'http://localhost:5173', // Allow requests from frontend server
};
app.use(cors(corsOptions));
app.get ('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});