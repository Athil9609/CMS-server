const json=require('json-server')

const contactServer=json.create()

const middleware=json.defaults()


const router=json.router('db.json')


contactServer.use(middleware)
contactServer.use(router)

const PORT=3000 || process.env.PORT

contactServer.listen(PORT,()=>{
    console.log("Server running at port:",PORT);
    
})
