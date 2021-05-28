//console.log("Hello World");

const express = require('express');
const app = express();
app.use(express.json());

//Permissões
var cors = require('cors');
app.use(cors());

notes = ["Primeira nota", "Segunda nota"];

app.get('/', function(req,res){ 
    res.send('Hello World')
});
app.get('/notes/', (request, response) => {
    response.send(notes);
});
// Array que vai fingir que é o nosso banco de dados
const mensagens = [
    "Rafaela", "Yoko"
];

app.get('/mensagens',  function(req,res){
    res.send(mensagens);
}
);

app.get('/mensagens/:id', 
    function(req, res){
        const id=req.params.id-1;
        const mensagem = mensagens[id];

        if (!mensagem){
            res.send("Mensagem não encontrada");
        } else {
            res.send(mensagem);
        }
    }
    );

    app.post('/mensagens',
        (req,res) => {
        console.log(req.body.mensagem);
        const mensagem = req.body.mensagem;
        mensagens.push(mensagem);
        res.send("criar uma mensagem.")

        });
    app.put('/mensagens/:id',
        (req,res) => {
            const id = req.params.id -1;
            const mensagem = req.body.mensagem;
            mensagens [id] = mensagem;
            res.send("Mensagem atualizado com sucesso")
        });
        
    app.delete('/mensagens/:id',
        (req, res) => {
            const id = req.params.id -1;
            delete mensagens[id];
            res.send("Mensagem removida com sucesso")
        ;})

// Porta que eu estou ouvindo
app.listen(process.env.PORT || 3000);
