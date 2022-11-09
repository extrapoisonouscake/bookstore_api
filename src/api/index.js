const path = require('path')
const fs = require('fs');
const {Router} = require('express')
const routes = Router();
const appDir = path.dirname(require.main.filename);
const {books,reviews} = JSON.parse(fs.readFileSync(path.join(appDir,'data','data.json')))
routes.get('/books',(req,res)=>{
    res.json(books)
})
routes.get('/reviews',(req,res)=>{
    res.json(reviews)
})
routes.get('/review',(req,res)=>{
    const {id} = req.query;
    const review = reviews.find(rev => rev.bookId === Number(id));
    
    res.json(review)
})
module.exports = routes;