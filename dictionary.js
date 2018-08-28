var fs = require("fs");
var path = require('path');
var yargs = require('yargs');
var arguments = yargs.argv._;

var data = path.join(__dirname,"data.json");

 // code without using yargs Package 
 if(fs.existsSync(date)){
  let dictionary = JSON.parse(fs.readFileSync(date));
  switch (process.argv[2]) {
    case "list" : console.log(dictionary);
      break;
    case "add" :  dictionary[process.argv[3]] = process.argv[4] || "";
      break;
    case "get" : console.log(dictionary[process.argv[3]]);
      break;
    case "remove" :   delete(dictionary[process.argv[3]]);
      break;
    case "clear" : dictionary = {};
        break;
    default:
        console.log("Unknown input");
  }
  fs.writeFileSync(data,JSON.stringify(dictionary));
}else{
  console.log("not found");
}


/*----------- code using yargs Package ----*/

// if(fs.existsSync(data)){
//     let dictionary = JSON.parse(fs.readFileSync(data));
//     switch (arguments[0]) {
//       case "list" : console.log(dictionary);
//         break;
//       case "add" :  dictionary[arguments[1]] = arguments[2] || "";
//         break;
//       case "get" : console.log(dictionary[arguments[1]]);
//         break;
//       case "remove" :   delete(dictionary[arguments[1]]);
//         break;
//       case "clear" : dictionary = {};
//           break;
//       default:
//           console.log("Unknown input");
//     }
//     fs.writeFileSync(data,JSON.stringify(dictionary));
//   }else{
//     console.log("not found");
//   }




 


 

