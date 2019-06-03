const express = require("express");
const app = express();

app.use(express.json());


app.listen(5000, () => {
    console.log('Servidor Subiu.')
})

app.get('/teste', (request, response) => {
    response.type('json').send({
        mensagem: 'Ola Mundo',
    })
})

app.get('/nome/:meuNome', (request, response) => {
    const {meuNome} = request.params
   response.type('json').send({
       mensagem: `Ola ${meuNome}`,
   })
       
})

app.post('/teste', (request, response) => {
   const {body} = request;
   if(body.teste){
       response.status(200).send({
           mensagem: 'Tudo ok com o body'
       })
    }else{
        response.status(400).send({
            mensagem: 'Você esqueceu o atributo teste'
        })
    }
})

