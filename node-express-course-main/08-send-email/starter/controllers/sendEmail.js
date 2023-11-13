const nodemailer = require('nodemailer')

const sendEmail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'dawson.boyle16@ethereal.email',
            pass: 'AS5Vvjzz378WeHaRQs'
        }
    });

    let info = await transporter.sendMail({
        from:'"Coding Addict" <codingaddict@gmail.com>',
        to:'bar@example.com',
        subject: 'hello',
        html: '<h2>Sending emails with node.js</h2>'
    })

    res.json(info)
};

module.exports = sendEmail