// array colelction
var collection = {

    "101" :{
        "name" : "test2",
        "age" : "30",
        "color" : "black",
        "tracks" : [
            "let's rock",
            "give a love name"
        ]
        
    },

    
    "102" :{

        "name" : "test1",
        "age" : "30",
        "color" : "white",
        "tracks" : [
            "let's rockstar",
            "love"
        ]
    },

    
    "103" :{

        "name" : "test12",
        "age" : "40",
        "color" : "grey",
        "tracks" : [
            "let's rockstar",
            "love"
        ]
        
    },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id,prop,value){
    if(value === ""){
      delete collection[id][prop]

    }else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value)
    }else {
        collection[id][prop] = value
    }

    return collection;
}

console.log(updateRecords(101,"color", "yellow"))