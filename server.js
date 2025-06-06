import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post('/usuarios', async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                pass: req.body.password // campo correto conforme seu schema.prisma
            }
        });
        res.status(201).send('Usuário criado com sucesso!');
    } catch (error) {
        res.status(400).send('Erro ao criar usuário: ' + error.message);
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

/* 
 - Criar um usuario
 - listar todos os usuarios
 - editar um usuario
 - deletar um usuario


*/