import fs from "node:fs/promises"
const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database {
  database = {}

  constructor(){
    this.persist() //referenciar 
  }

  persist(){
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.database))
  }

  insert(table, data){ 
    if(Array.isArray(this.database[table])){
      this.database[table].push(data)
    } else {
      this.database[table] = [data]
    }

    this.persist()
  }

  select(table){
    return this.database[table]
  }
}

/*
  database = {
    product: [{
    name: "computer", price: 5000},{
    name: "mouse", price: 200
    }],
    user: [{
    }]
  }

  Se não tiver um array, isso!:
  {
  "products": []
  }
  então a gente vai adicionar 
*/