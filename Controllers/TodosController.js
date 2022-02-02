const TodosModel = require('../Models/todos'); 

exports.listerTodos = (req,res) =>{
   
    TodosModel.find({}).exec(( error, listTodos)=>{
        if(error){return res.status(400).json({error})}
        if(listTodos){return res.status(200).json({listTodos})}
    })
    }
    exports.ajouterTodos = (req,res) =>{
   
    const Objtodos = {
        content : req.body.content,
        date: req.body.date
    }

    const Todos = new TodosModel(Objtodos);
    
    Todos.save(( error, todoCreated ) => {
              if (error) return res.status(400).json({ error })
              if ( todoCreated ) {
                  return res.status(200).json({ todoCreated })
              }
    })
}

exports.supprimerTodos =  (req,res) =>{

    const id = req.params.idtodo;
    
    TodosModel.findByIdAndRemove(id).exec((error, todo)=>{
        if (error) return res.status(400).json({ error })
        if ( todo ) {
            return res.status(200).json({ "message": "Todo supprimée avec succés!" })
        }
    })
}

exports.modifierTodos = (req,res) =>{

    const id = req.params.idtodo;

    const ModifiedOBJ ={
        content: req.body.content ,
        date: req.body.date ,
    }
    
  TodosModel.findByIdAndUpdate(id, ModifiedOBJ).exec(( error, Modifiedtodo)=>{
        if (error) return res.status(400).json({ error })
        if ( Modifiedtodo ) {
            return res.status(200).json({ "message": "Todo modifiée avec succés!" })
        }
    })

    }