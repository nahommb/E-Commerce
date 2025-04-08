var request = require('request');
require('dotenv').config();

const chapa_api = process.env.CHAPA_API

const pay = (req,res)=>{

    // const {first_name,last_name,amount,email,phone_number} = req.body;

    const now = new Date();

   const email = 'nahomjr17@gmail.com'
   const safeEmail = email.split('@')[0].replace(/[^a-zA-Z0-9._-]/g, '');

   const pad = (n) => n.toString().padStart(2, '0');

    const year = now.getFullYear();
    const month = pad(now.getMonth() + 1);
    const day = pad(now.getDate());
    const hour = pad(now.getHours());
    const minute = pad(now.getMinutes());
    const second = pad(now.getSeconds());

    console.log('paymet check')
    console.log(chapa_api)

    const tnx_ref = `${year}-${month}-${day}_${hour}-${minute}-${second}_${safeEmail}`;

  
    var options = {
      'method': 'POST',
      'url': 'https://api.chapa.co/v1/transaction/initialize',
      'headers': {
    'Authorization': `Bearer ${chapa_api}`,
    'Content-Type': 'application/json'
      },
      body: JSON.stringify({
    "amount": "10",
    "currency": "ETB",
    "email": "abebech_bekele@gmail.com",
    "first_name": "Bilen",
    "last_name": "Gizachew",
    "phone_number": "0912345678",
    "tx_ref":tnx_ref,
    "callback_url": "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
    "return_url": "https://www.google.com/",
    "customization[title]": "Payment for my favourite merchant",
    "customization[description]": "I love online payments",
    "meta[hide_receipt]": "true"
      })
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      const responseBody = JSON.parse(response.body)
    //   res.send(responseBody)
      res.redirect(responseBody.data.checkout_url)
      console.log(response.body);
    });
    
    
}

module.exports = {pay} 