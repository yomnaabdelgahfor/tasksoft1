import express from 'express';

const app  = express();
const students =[
    {
        id:1,
        name:"yomna",
        city:"tanta"
    },
    {
        id:2,
        name:"yasmin",
        city:"cairo"
    },{
        id:3,
        name:"yoana",
        city:"esmaila"
    },{
        id:4,
        name:"yara",
        city:"alex"
    },
]

const studentsFunction =(requet,response)=>{
   let output='<ul>';
   for(let i =0;i<students.length;i++){
    const student =students[i]; 
    output+='<li>'+student.name +'</li>';
   }

   output+='</ul>'
response.send(output);
};

app.get('/students',studentsFunction)

app.listen(5000);