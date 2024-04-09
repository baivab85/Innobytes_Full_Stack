import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Routes from './route/routes.js';
import session from 'express-session';
import nodemailer from 'nodemailer';
import { v4 } from 'uuid';
import User1 from './schema/user_schema.js';
const router = express.Router();

const app = express()

app.get('/', (req, res) => {
    res.json({server: 'Running..!'});
});

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

const PORT = 8000;
dotenv.config()

const corsConfig = {
    origin: '',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))



app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
Connection(username,password)

app.use('/', Routes);
app.use('/uploads', express.static('uploads'))

const verificationCodes = {};

app.post('/send-verification-code', async (req, res) => {
  const { email } = req.body;

  try {
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    verificationCodes[email] = verificationCode;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shiladityamukherjee5486@gmail.com',
        pass: 'lcat mzqi myew kbla',
      },
      debug: true,
    });

    const mailOptions = {
      from: 'shiladityamukherjee5486@gmail.com',
      to: email,
      subject: 'Email Verification Code',
      text: `Your verification code is: ${verificationCode}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Verification code sent successfully' });
  } catch (error) {
    console.error('Error sending verification code:', error);
    res.status(500).json({ error: 'Failed to send verification code' });
  }
});

app.post('/verify-code', (req, res) => {
  const { email, verificationCode } = req.body;

  if (verificationCodes[email] && verificationCodes[email] === parseInt(verificationCode)) {
    delete verificationCodes[email];
    res.status(200).json({ message: 'Verification successful' });
  } else {
    res.status(400).json({ error: 'Invalid verification code' });
  }
});


app.post('/send-verification-code', async (req, res) => {
  const { email } = req.body;

  try {
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    verificationCodes[email] = verificationCode;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shiladityamukherjee5486@gmail.com',
        pass: 'lcat mzqi myew kbla',
      },
      debug: true,
    });

    const mailOptions = {
      from: 'shiladityamukherjee5486@gmail.com',
      to: email,
      subject: 'Email Verification Code',
      text: `Your verification code is: ${verificationCode}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Verification code sent successfully' });
  } catch (error) {
    console.error('Error sending verification code:', error);
    res.status(500).json({ error: 'Failed to send verification code' });
  }
});

app.post('/verify-code', (req, res) => {
  const { email, verificationCode } = req.body;

  if (verificationCodes[email] && verificationCodes[email] === parseInt(verificationCode)) {
    delete verificationCodes[email];
    res.status(200).json({ message: 'Verification successful' });
  } else {
    res.status(400).json({ error: 'Invalid verification code' });
  }
});



app.listen(PORT, () =>{
    console.log("Server Listening On Port Number "+PORT)
})
