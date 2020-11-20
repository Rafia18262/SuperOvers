// alert("hey everyone")

// var global scope
// const
// let block scope
var a=10
let b="name"
const c = true

console.log(a)
console.log(b)
console.log(c)

//console.log("data type of b= "+ typeof(b))
//console.log("data type of a = "+ typeof(a))
//console.log("data type of c = "+ typeof(c))

//team name
//team Scoteam runs

var team1={
    name:"csk",
    score:0,
    runs:[]
};

var team2={
    name:"MI",
    score:0,
    runs:[]
};

var score=[0,1,2,3,4,5,6]
console.log(team1)
console.log(team2)

var toss;

window.onload=()=>{
   // console.log("hy")
selectToss();
updateName();
}

function selectToss(){
    toss=Math.round(Math.random())+1
    console.log(toss)
}

function updateName(){
    console.log("team1 name"+ team1.name)
    console.log("team2 name"+ team2.name)
}

function updateButtontext(){
    //if(toss==1){
        //console.log("team1" +team1.name +"batting")
        // }
        // else{
       //  console.log("team1" +team1.name +"batting")
       // }
  console.log(`${toss==1?team1.name:team2.name}BATTING`);
}

handlestrike=()=>{
    console.log("onclick works")
   var runs = score[Math.floor(Math.random()*score.length)]
   console.log(runs)
   if(toss==1){
       team1.runs.push(runs);
       console.log(runs)
   }
   else{
   team2.runs.push(runs);
   console.log(runs)
 }
}

function updateScores(){
    console.log("team1score"+team1.score)
    console.log("team2score"+team2.score)
}