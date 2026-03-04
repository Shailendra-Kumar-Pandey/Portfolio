import nodemailer from 'nodemailer';
import process from 'process'

const emailRecever = async (subject, text)=>{

  let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.emailUser,
    pass: process.env.pass,
  },
});

  const mailOption = {
    from : process.env.emailUser,
    to : process.env.emailSender,
    subject,
    text
  }

  let info =  await transporter.sendMail(mailOption);

  console.log(info)
}



export default emailRecever;