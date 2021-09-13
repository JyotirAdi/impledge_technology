const express = require('express')
const Easypost = require('@easypost/api')
const app = express()
const port = 3000
const api = new Easypost('EZTK5b2cf3f0efdd42ce93ccf76799881c0avCkCYQ3TmDhycjOeoUmKTg');


app.get('/', (req, res) => {
    res.send('API is online')
})



app.get('/createShipment', (req, res) => {

    console.log("started")

    const toAddress = new api.Address({
        street1: '345 California St',
        street2: 'FLOOR 5',
        city: 'SAN FRANCISCO',
        state: 'CA',
        zip: '94104',
        country: 'US',
        company: 'EasyPost',
        phone: '415-528-7555',
    });
    const fromAddress = new api.Address({
        street1: '345 California St',
        street2: 'FLOOR 5',
        city: 'SAN FRANCISCO',
        state: 'CA',
        zip: '94104',
        country: 'US',
        company: 'EasyPost',
        phone: '415-528-7555',
    });
    const parcel = new api.Parcel({
        length: 20.2,
        width: 10.9,
        height: 5,
        weight: 65.9
    });
    const customsInfo = new api.CustomsInfo({
        eel_pfc: 'NOEEI 30.37(a)',
        customs_certify: true,
        customs_signer: 'Steve Brule',
        contents_type: 'merchandise',
        contents_explanation: '',
        restriction_type: 'none',
        restriction_comments: '',
        non_delivery_option: 'abandon',

    });

    const shipment = new api.Shipment({
        to_address: toAddress,
        from_address: fromAddress,
        parcel: parcel,
        customs_info: customsInfo
    });




    shipment.save().then((data) => {
        console.log("done")
        api.Shipment.retrieve(data.rates[0].shipment_id).then(s => {
            s.buy(s.lowestRate(), 249.99).then(console.log);
        }).then(() => {
            console.log(data)
            res.send(`following shipment id to be pasted in url: ${data.rates[0].shipment_id}`)

        })

    });

})

app.get('/getShipment/:id', (req, res) => {

    const id = req.params.id
    console.log("started")
    api.Shipment.retrieve(id)
        .then((data) => {
            console.log("done")
            console.log(data)
            res.redirect(data.postage_label.label_url)
        });
})



app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})