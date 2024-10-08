const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const db = require('./models');

// Rutas
const tasksRoutes = require('./routes/Tasks.js');
const userRoutes = require('./routes/Users.js');
app.use('/tasks', tasksRoutes);
app.use('/users', userRoutes);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
});
