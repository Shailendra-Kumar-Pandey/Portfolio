import nodemailer from 'nodemailer';


const emailRecever = async (subject, text)=>{

  let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "shailendrakr2026@gmail.com",
    pass: process.env.pass,
  },
});

  const mailOption = {
    from : 'shailendrakr2026@gmail.com',
    to : 'shailendrakr2010@gmail.com',
    subject,
    text
  }

  let info =  await transporter.sendMail(mailOption);

  console.log(info)
}



export default emailRecever;