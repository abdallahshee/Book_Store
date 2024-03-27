import {Book,BookCreate} from './../imports/book'
import {Router,Request,Response} from 'express'
// import 
import {BookSCollection} from './collections'

export const bookRouter=Router()

bookRouter.get('/',(req, res)=>{
    // const books:Book[]=BookSCollection.find().fetch()
    // if(books){
    //     res.send(books)
    // }else{
    //     return "No Books Found"
    // }
    const books:Book[]=[
    
        {
        name:"Art of War",
        id:"23",
        title:"The best of the best"
        },
        {
        name:"Laws of Human nature",
        title:"The best of the world",
        id:"3456"
        },
        {name:"33 Strategies of War",
        title:"Master the modern war",
        id:"345"
        }
    ]
     res.send(books)
    
})

bookRouter.put('/',(req:Request<BookCreate>, res)=>{
    const book:Book={
        id:"45",
        ...req.params
    }
    const bookId=BookSCollection.insert(book)
     res.send(bookId)
})