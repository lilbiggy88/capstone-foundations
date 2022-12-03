
const express = require("express");
const cors = require("cors");
const axios = require('axios');
const zlib = require("zlib");


const app = express();


app.use(express.json());
app.use(cors());


app.get('/api/words', (req, res) => {
const options = {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/?random=true&letters=5',
  'responseType': 'arraybuffer', 
'decompress': true,
  headers: {
    'X-RapidAPI-Key': '823388f6b1msh36c78196bd0f036p1bb87cjsn6a2099b9c477',
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',

  }
};


axios.request(options).then(function (response) {
	zlib.gunzip(response.data, function (error, result) {
        console.log(result.toString());
        let wordle = result.toString()
        let pWordle = JSON.parse(wordle)
        console.log(pWordle.word)
        res.status(200).send(pWordle.word)
      });
}).catch(function (error) {
	console.error(error);
});
})




app.listen(3001, () => console.log("Beam me up on 3001"));