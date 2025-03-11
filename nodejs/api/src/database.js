export class Database {
  database = {}

  insert(table, data){ 
    if(Array.isArray(this.database[table])){
      this.database[table].push(data)
    } else {
      this.database[table] = [data]
    }
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