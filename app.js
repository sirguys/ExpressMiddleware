var app = require('express')()
app.listen(3000)
app.use(showTime)
app.use(showAddress)
app.get('/',home)
app.use(showError)

function showTime(req, res , next) {
    var d = new Date()
    console.log(d)
    next()
}
function showAddress(req,res,next){
    console.log(req.ip);
    next()
}
function home(req, res) {
    res.send({status:'ok'})
}
function showError(req, res, next){
    res.status(404).send({message:'Not Found'})
}
