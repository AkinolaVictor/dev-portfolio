const nodemailer = require('nodemailer');

export default async function sendEmail_2(req, res) {
    const {userEmail, subject, html} = req.body
    
    console.log("called email");
    
    let transporter = nodemailer.createTransport({
        // service: 'gmail',
        auth: { 
            user: process.env.NEXT_PUBLIC_USEMAIL,
            pass: process.env.NEXT_PUBLIC_USEPASS  // USED APP PASSWORD
        },
        host: "smtp.gmail.com",
        port: process.env.NEXT_PUBLIC_DEVELOPMENT_ENV=="local"?465:587,
        secure: process.env.NEXT_PUBLIC_DEVELOPMENT_ENV=="local"?true:false,
        // port: 587,
        // secure: false,

        // requireTLS: true,
        connectionTimeout: 10000,
        
        greetingTimeout: 10000,
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false
        }
    })

    
    try {
        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_USEMAIL,
            to: userEmail,
            subject,
            html
        }).then(()=>{
            console.log("finally done");
            res.send({successful: true})
        }).catch((e)=>{
            console.log("err");
            console.log(e);
            res.send({successful: false})
        })
    } catch (e){
        console.log("err_2");
        console.log(e);
        res.send({successful:false})
    }
}