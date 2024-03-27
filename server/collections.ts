import {Mongo} from 'meteor/mongo'
import {Book} from './../imports/book'
export const BookSCollection=new Mongo.Collection<Book>('books')