import { Meteor } from 'meteor/meteor';
import express from 'express'
import {bookRouter} from './books'
import {WebApp} from 'meteor/webapp'

const app =express()
app.use(express.json())
app.use('/books', bookRouter)

const StartServer=()=>{
  WebApp.connectHandlers.use('/api',app)
  // WebApp.connectApp.use("/api",app)
}

Meteor.startup(()=>{
  StartServer()
})
