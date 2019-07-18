const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

admin.initializeApp();

// Use gmail to set up transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().mail.user,
        pass: functions.config().mail.pass
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        // getting destination email by query string
        const dest = functions.config().mail.dest

        const mailOptions = {
            from: 'Jillo Abdullahi <jillo.abdullahi90@gmail.com>',
            to: dest,
            subject: 'I\M A PICKLE!!',
            html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
                    <br />
                    <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
                ` // email content in HTML
        };

        // returning results
        return transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                console.log("failed", err);
                return res.send(err.toString());
            }
            return res.send('Sent');
        })

    })
})
