// date and timing
var date = new Date();
console.log(date)

var year = date.getFullYear();
console.log(year)

var month = date.getMonth();
console.log(month)

var currentDate = date.getDate();
console.log(currentDate)

var currentDay = date.getDay();
console.log(currentDay)

var currentHour = date.getHours();
console.log(currentHour)

var currentMinutes = date.getMinutes();
console.log(currentMinutes)

// Error handling -> try , catch, finally , throw
// try ... catch handle run time errors (program which is runable), but not syntax error
// Error object
// The finally statement -> execute code, after try and catch 

try{
    // code test
    alert("Hi Everyone");
    alert(x);
    alert("Not gonna work");   

}catch(err){
    console.log(err);
}finally{
    alert("Bye Everyone");
}

// Error handling - try, catch, finally
// The throw statement -> create custom errors.

document.querySelector("#checkButton").addEventListener("click",function(){
   
    var num = document.querySelector("#numTextfield").value;
    
    try{
        if(num < 5)
        {
            throw "input is too low"
        } else if(num > 10)
        {
            throw "input is too high"
        }

    }catch(err1){
        console.log(err1);
        
    }

})