
const people = [
{    
name: "Cortie Roddan",
birthDate: "2/28/1958",
children: 5,
country: "China",
canProgram: "true",
},

{    
name: "Evelyn Franz",
birthDate:  "8/29/2004",
children: 5,
country: "China",
canProgram: "false",
},
    
{    
name: "Parnell Biddleston",
birthDate:  "9/8/2002",
children: 5,
country: "China",
canProgram: "false",
},
                
{    
name: "Dilly Munby",
birthDate:  "2/7/1961",
children: 4,
country: "Peru",
canProgram: "false",
},
                                
{    
name: "Audre Fidele",
birthDate:  "4/12/1951",
children: 0,
country: "Indonesia",
canProgram: "true",
},
            
{    
name: "Demetrius Cobbe",
birthDate:  "4/5/1984",
children: 3,
country: "Peru",
canProgram: "true",
},

{    
name: "Natka Bugge",
birthDate:  "5/13/1975",
children: 4,
country: "Indonesia",
canProgram: "true",
},
 
{    
name: "Bernarr Hendrich",
birthDate:  "8/30/1977",
children: 3,
country: "China",
canProgram: "false",
},

{    
name: "Evelina Panyer",
birthDate:  "9/2/1962",
children: 0,
country: "Mauritius",
canProgram: "true",
},
            
{    
name: "Caron Bridie",
birthDate:  "8/2/1960",
children: 3,
country: "Portugal",
canProgram: "true",
},
]

//Outputs how many children all people have, in total (Ex.: Bia has 2 kids, Paul has 3, so the total 5)
//console.log(people [1].children)
//for(let i=0;i<people.length;i++){

  
let total=0
for (let i=0;i<people.length;i++){
    total=total+people[i].children  
}
console.log ("This is total of children: "+total);
console.log("finish looping")
    








