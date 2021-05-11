import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoute from './routes/posts.js';

const app = express();


// app.use('/posts', posts)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoute)

const CONNECTION_URL = 'mongodb+srv://Razer:1234@cluster0.e1cua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => app.listen(PORT, () => console.log(`${PORT}-portda server ishlamoqda`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false)