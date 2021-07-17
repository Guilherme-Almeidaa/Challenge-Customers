require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
const customersRoute = require('./routes/customerRoute');

app.use(express.json());
app.use('/customers', customersRoute)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});