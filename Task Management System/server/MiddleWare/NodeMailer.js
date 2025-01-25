

const nodemailer=require("nodemailer");

const transporter=nodemailer.createTransport({
    service:'mail',
    auth:{
        user:'krajan92946@gmail.com',
        pass:''
    },
});

transporter.verify((error,success)=>{
    
})