import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

app.get('/', (req, res) => {
  res.send('Post-Comment Service is running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
