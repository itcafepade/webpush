//Get the variables in the .env
require('dotenv').config();

const {
    Router
} = require('express');
const webpush = require('web-push');
const wbp = require('../webpush');
let pushSuscription;

const router = Router();

router.post('/suscribe', async (req, res) => {
    try {
        pushSuscription = req.body.dataSuscription;
        // console.log(req.body.dataSuscription)
        const payload = await JSON.stringify({
            title: req.body.title,
            message: req.body.message
        });

        try {
            await webpush.sendNotification(pushSuscription, payload);
        } catch (error) {
            console.log('Error: ' + error);
        }
    } catch (error) {
        console.log('Error try: ' + error);
        res.status(300).json();
    }
    res.status(200).json();
});

module.exports = router;