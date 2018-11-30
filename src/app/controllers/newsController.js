const dbConnection = require('../../config/dbConnection');
const conn= dbConnection();
const controller= {};

controller.list = (req,res)=> {

conn.query('SELECT * FROM news', (err, result)=>{
    
    if(err){
        res.json(err);
    }

res.render ('news', {
    news:result

});
});
}

controller.add = (req,res)=>{
const {title,news} =req.body;

    conn.query('INSERT INTO news SET ?',
    {
 title,
 news
    }, (err,result)=>{
        res.redirect('/news');
    });
};

//ELIMINAR

controller.delete = (req,res)=>{

    const {id_news} =req.params;
    
        conn.query('DELETE from news WHERE id_news=?',[id_news]
        , (err,result)=>{
            res.redirect('/news');
        });
    };
    
//ACTUALIZAR

controller.redir = (req, res) => {
    var title = req.session.title,
    id_news = req.params.id_news;
  
    conn.query('SELECT * FROM news where id_news= ' + id_news, (err, result) => {
        if (err) {
            res.json(err);
        }
//console.log(result)
    res.render('updatenews',{actualizar:result[0]});
    });
}

controller.update = (req, res) => {

    const {title,news, id_news } = req.body;
    conn.query("UPDATE news SET title='"+title+"',news='"+news+"' WHERE id_news="+id_news,
        {
          
         
        }
        , (err, result) => {
            console.log(err)
            res.redirect('/news');
        });
};
    

module.exports= controller;