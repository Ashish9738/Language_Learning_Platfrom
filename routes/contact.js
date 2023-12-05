const express = require('express');
const router = express.Router();
// require('dotenv').config();
const path = require('path');
const nodemailer = require('nodemailer');
// const sgMail = require('@sendgrid/mail');
const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


router.post('/', (req, res) => {
    // console.log(req);
    const { name, email, message } = req.body;

    // const msg = {
    //     to: `niroshshetty@gmail.com`, // Change to your recipient
    //     from: 'niroshshetty2020@gmail.com', // Change to your verified sender
    //     subject: 'contact us form',
    //     text: `Message from ${req.body.email}:\n${req.body.message}`,
    // }
    // try {
    //     sgMail.send(msg);
    //     res.send("Message Successfully Sent!");
    // } catch (error) {
    //     res.send("Message Could not be Sent");
    // }

    // let transporter = nodemailer.createTransport({
    //     service: 'Gmail',
    //     auth: {
    //         user: 'www.niroshshetty.com@gmail.com',
    //         pass: 'nirosh30028051shetty.'
    //     }
    // });

    // // Email content
    // let mailOptions = {
    //     from: 'www.niroshshetty.com@gmail.com',
    //     to: 'niroshshetty2020@example.com',
    //     subject: 'Subject of your email',
    //     text: 'This is the body of your email'
    // };

    // // Send email
    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });

    const mailjet = require('node-mailjet').connect(
        '91aab6eb84f46085ea461d39106fd592',
        '7e8cef1061aa62899969f83d43427553'
    );

    const sendEmail = async () => {
        const request = await mailjet.post('send', { version: 'v3.1' }).request({
            Messages: [
                {
                    From: {
                        Email: 'gmail01@example.com',
                        Name: 'Team Name'
                    },
                    To: [
                        {
                            Email: 'gmail02@example.com',
                            Name: 'Recipient Name'
                        }
                    ],
                    Subject: 'Contact US',
                    TextPart: `name:${name},emial:${email}, message:${message}`
                }
            ]
        });

        console.log(request.body);
    };

    sendEmail().catch(console.error);


});





module.exports = router;