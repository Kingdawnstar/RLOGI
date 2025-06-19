import express from 'express';
import userRouter from './routes/User.route.js';
import postRouter from './routes/Post.route.js';
import commentRouter from './routes/Comment.route.js';
import connectDB from './lib/connectDB.js';
import webhookRouter from './routes/webhook.route.js';
import ngrok from '@ngrok/ngrok';
import { configDotenv } from 'dotenv';

const app = express();

app.use(express.json());

// app.get('/test', (req, res) => {
//     res.status(200).send('it works!')
// })

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);
app.use('/webhooks', webhookRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message || "something went wrong",
        status: error.status,
        stack: error.stack,
    });
});

app.listen(5000, async () => {
    connectDB();
    console.log('Winning');

     await ngrok.authtoken(process.env.NGROK_AUTHTOKEN)

    // Start ngrok
    const url = await ngrok.connect(5000);
    console.log(url);
});
