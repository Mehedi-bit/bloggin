// In the name of Allah, the most Gracious most merciful
const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles')

const app = express();

mongoose.connect('mongodb://localhost/blog')

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    articles = [
        {
            title: "Test article",
            createdAt: new Date(),
            description: "Test description"
        },
        {
            title: "Test article-2",
            createdAt: new Date(),
            description: "Test description-2"
        }
    ]
    res.render('articles/index', {articles: articles})
})

app.use('/articles', articleRouter);

app.listen(5000);