import express from 'express';

const app = express();
app.use(express.json());

const users = []

app.post('/usuarios', (req, res) => {

    console.log(req.body);
    
    res.send('Usuário criado com sucesso!');
})

app.get('/usuarios', (req, res) => {
    res.send('!!');
})

app.listen(3000)

/* 
 - Criar um usuario
 - listar todos os usuarios
 - editar um usuario
 - deletar um usuario


*/