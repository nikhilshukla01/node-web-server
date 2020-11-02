const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    // res.send('Site under maintenance');
    console.log('Next');
    next();
})

app.get('/', (req, res) => {
     // res.send('<h1>Atharva Shukla</h1>')
     res.send({
         name: 'Atharva Shukla',
         likes: [
             'cartoon', 'choclates'
         ]
     })

});

app.get('/about', (req, res) => {
    res.send({
        name: 'Atharva Shukla',
        class: 'LKG',
        section: 'C'
    })
});

app.listen(3000, () => {
    console.log('App started on port 3000')
});