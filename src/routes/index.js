//Get the variables in the .env
require('dotenv').config();

const {Router} = require('express');
const webpush = require('web-push');
const wbp = require('../webpush');
let pushSuscription;

const router = Router();

router.post('/suscribe', async (req, res)=>{
    console.log(req.body);
    pushSuscription = req.body; 
    const payload = JSON.stringify({
        title: "Hola",
        message: "Hola mensaje"
    });
    try {
        await webpush.sendNotification(pushSuscription, payload)
    } catch (error) {
        
    }
    res.status(200).json();
});



module.exports = router;