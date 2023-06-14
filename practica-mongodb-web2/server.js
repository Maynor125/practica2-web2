const express=require('express');

const app=express();
require('./data/db');

app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);

app.get('/',(req,res)=>{
    res.send('callese viejo lerdo')
})

app.use('/',require('./routes/tarea.route'))

app.listen(app.get('port',()=>{
    console.log(`el servidor esta pilas en ${app.get('port')} `)
}))

app.use(require('./controllers/tarea.controller'))