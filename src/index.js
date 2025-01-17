import express from 'express';
import handlebars from 'express-handlebars';

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',   //задаваме да моге да обработва с разширение hbs
}));
app.set('view engine', 'hbs');    //hbs ще е дефолтния енжин
app.set('views', './src/views');  //указваме къде се намира папката views

app.get ('/', (req, res) => {
    //res.send('It works!');
    res.render('home', {layout: false});
});

app.listen(5000, ()=> console.log('Server is listening at http://localhost:5000...'));

