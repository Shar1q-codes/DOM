// function handleSubmit () { 
//     const userInput = document.getElementById("name");
//     const todo = document.createElement("h1");
//     todo.innerText = userInput.value;
//     todo.setAttribute("class", "todoDiv");
//     document.getElementById("todoData").appendChild(todo);
// }

// adding dynamic html 
// create an empty div tag and give it some id.
// capture the input field value
// create the element that you want to add in html.
// append the element inside the empty div tag.

//Q1.Accessing element by id:

document.getElementById("text").innerText="This is Div tag";

//Q2.Accessing element by ClassName:

const jas = document.getElementsByClassName("hea");
console.log(jas.innerText);


//Q3/4.Access element by Tag Name && Change the heading from ""Hello"" to ""Hello World"" using DOM functions" :-

const head=document.getElementsByTagName("h1");
console.log(head);

//Q5.Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function Submit(){
    document.getElementById("flex").style.flexDirection="column-reverse";
}

//Q6.Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions":-

function handleSubmit() {
    const value=document.getElementById("lang")
    value.innerText='CodingLanguages';
    value.innerHTML='<h1>Coding-Languages</h1>';
    value.style.color="red";
    value.style.backgroundColor ="yellow";
}

//Q7.Create an HTML page having content as Hello world and a button named Replace Text.content should be changed to "Welcome to Elevation academy":-

function clickme(){
    console.log("Clicked..");
    document.getElementById("ele").innerText="Welcome to Elevation academy";
}

//Q8.Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected:-

function getOption(){
    var result=document.getElementById("texti");
    var result2=result.value;
    document.getElementById("output").innerText=result2;
}

//Q9. timer clock using JS -- display HH:MM:SS --:

   function clock(){
    var hours=document.getElementById("hour");
    var minutes=document.getElementById("min");
    var seconds=document.getElementById("sec");
    var am=document.getElementById("ampm");
    
    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm="AM";
    if(hrs==0)
    {
    hrs=12;
    }
    if(hrs>12){
        hrs=hrs-12;
        am_pm="PM"
    }
    if(hrs<10){
    hrs="0"+hrs;
    }
    if(mins<10){
        mins="0"+mins;
        }
    if(secs<10){
        secs="0"+secs;
        }
        hours.innerText=hrs;
        minutes.innerText=mins;
        seconds.innerText=secs
        am.innerHTML=am_pm
    }
    setInterval(clock,1000)