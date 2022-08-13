const { response, request } = require('express')
const express = require('express')
const app = express()
const PORT = 3000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'kanye': {
        'age': 45,
        'birthName': 'Kanye Omari West',
        'birthLocation': 'Atlanta, Georgia'
    },
    'drake': {
        'age': 35,
        'birthName': 'Aubrey Drake Graham',
        'birthLocation': 'Toronto, Ontario'
    }
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req,res) => {
    const rapName = req.params.rapperName.toLocaleLowerCase()
    if(rappers[rapName]){
        res.json(rappers[rapName])
    } else {
        res.json(rappers['kanye'])
    }
    //res.json(rappers)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})