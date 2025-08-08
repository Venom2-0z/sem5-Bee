import express from 'express';
import { readFile } from 'fs/promises';
const app = express();
app.use(express.json());
app.use(express.static(`${process.cwd()}/public`));
const PORT = 4444;

app.post('/adduser', async (req, res) => {
    const { email, password } = req.body;
    console.log(`Received user data: ${email}, ${password}`);
    res.json({
        success: true,
        message: 'User data received successfully'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

