const express = require("express")
const app = express()
const port = 5000

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
// moteur de vue c'est handlebars
app.set("view engine", "handlebars")

const translation = require("./translations.json") 

app.get('/:lang?', (req, res) => {
   console.log(req.params)
   const { lang } = req.params

   if (!lang)  {
      res.render('home', {
         pageTitle: translation.fr.pageTitle, 
         title: translation.fr.title    
      })    
   } else {
      res.render('home', {
         pageTitle: translation[lang].pageTitle,  
         title: translation[lang].title        
      }) 
   }  
}) 

app.listen(port, () => {
   console.log(`Server is running on ${port}`)
})