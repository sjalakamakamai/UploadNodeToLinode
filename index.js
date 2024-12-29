import express from 'express';

const app = express();
const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=> console.log('Server is running on port ${PORT}'))


app.get('/endpoint-1', (req, res, next) => {

    res.status(200).json({
        success: true,
        data: {

            message: 'Hello from endpoint 1'
        }
    })
})


app.get('/endpoint-1', (req, res, next) => {

    res.status(200).json({
        success: true,
        data: {

            message: 'Hello from endpoint 2'
        }
    })
})


