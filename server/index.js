const express=require('express');
const app=express();
app.use(express.json()); 

const cors=require('cors');
app.use(cors());

require('./db/connection');
const User=require('./Models/User');
const nodemailer = require("nodemailer");

require("dotenv").config();
MAIL_HOST="smtp.gmail.com"
MAIL_USER="myself.test555@gmail.com"
MAIL_PASS="deenzpfuftyyxvum"

app.post("/",async(req,res)=>{
    let user=new User(req.body);
    let result=await user.save();

    // mail-sending
    const {name,email,mobile,moveType,moveSize,fromSub,toSub}=req.body;
     
    let transporter =nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    let info = await transporter.sendMail({
        from: 'Thanks For Booking',  
        to: "prime.removal.and.storage@gmail.com", 
        subject: "Booking Details", 
        html: `<!DOCTYPE html>
        <html>
        
        <head>
            <meta charset="UTF-8">
            <title>Payment Confirmation</title>
            <style>
                body {
                    background-color: #ffffff;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 1.4;
                    color: #333333;
                    margin: 0;
                    padding: 0;
                }
        
        
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    text-align: center;
                }
        
                .logo {
                    max-width: 200px;
                    margin-bottom: 20px;
                    border-radius: 10px;
                }
        
                .message {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
        
                .body {
                    font-size: 16px;
                    margin-bottom: 20px;
                }
        
                .cta {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #1f1f1f;
                    color: #f3f6e7;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 16px;
                    font-weight: bold;
                    margin-top: 20px;
                }
        
                .support {
                    font-size: 14px;
                    color: #999999;
                    margin-top: 20px;
                }
        
                .highlight {
                    font-weight: bold;
                }
            </style>
        
        </head>
        
        <body>
            <div class="container">
                <a href="https://logictics-truck.vercel.app/"><img class="logo" 
                  src="https://res.cloudinary.com/dflucjora/image/upload/v1705485630/logo_mail_fysh77.png"
                        alt="Trukkit Logo"></a>
                <div class="message">New Booking</div>
                <div class="body">
                    <p>Name : <b>${name}</b></p>
                    <p>Email: <b>${email}</b></p>
                    <p>Mobile No : <b>${mobile}</b></p>
                    <p>Move Type : <b>${moveType}</b></p>
                    <p>Move Size : <b>${moveSize}</b></p>
                    <p>From Suburb : <b>${fromSub}</b></p>
                    <p>To Suburb : <b>${toSub}</b></p>
                </div>
                <div class="support">If you have any questions or need assistance, please feel free to reach out to us at 
                <a href="mailto:prime.removal.and.storage@gmail.com">info@gmail.com</a>. We are here to help!</div>
            </div>
        </body>
        
        </html>`,  
      });
      console.log("Message sent: %s", info.messageId);


    console.log(result);
    res.send(result);
})

 
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});