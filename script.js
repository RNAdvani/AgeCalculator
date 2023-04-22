const inpDate=document.getElementById('inpdate')
const inpMonth=document.getElementById('inpmonth')
const inpYear=document.getElementById('inpyear')
let getDate = ''
const yearsDisplay = document.querySelector('#years')
const monthsDisplay = document.querySelector('#months')
const daysDisplay = document.querySelector('#days')








const calcFunc=()=>{
    let bday=''
let today = new Date()
let yearDiff =0
let monthDiff = 0 ;
let daysDiff = 0;
    console.log(getDate);
    date=`${inpMonth.value}-${inpDate.value}-${inpYear.value}`;
    bday = new Date(date)
 today = new Date()
let diff = today - bday
 yearDiff = Math.round(diff/(1000*60*60*365*24))


let bdayDate = bday.getDate();
let todayDate = today.getDate();

let bdayMonth = bday.getMonth();
let todayMonth = today.getMonth();

const months = [31,28,31,30,31,30,31,30,31,30,31]

if(today.getFullYear()%4==0&&today.getFullYear()%100==0){
    months[1]=29
}if(today.getFullYear()%4==0){
    months[1]=29
}

const monthDifference = (a,b)=>{
    
    // a=bday.getMonth()
    // b=today.getMonth()
    
    if(a > b){
    yearDiff--
    }

    if(a< b){
    monthDiff = today.getMonth() - bday.getMonth()
    }

    if(a > b){
    monthDiff = 12-(bday.getMonth() - today.getMonth()) 
    }
}

const dateDifference = (a,b) =>{
    
    // a= bday.getDate()
    // b= today.getDate()
    
    if(a>b){
    monthDiff--
    daysDiff = months[(today.getMonth())-1] - (a-b)
    }
    if(a<b){
    daysDiff = b-a
    }
    
}


monthDifference(bdayMonth,todayMonth)
dateDifference(bdayDate,todayDate)


console.log(`You're ${yearDiff}years ${monthDiff}months and ${daysDiff}days old`)

function display (){
    yearsDisplay.innerText=yearDiff;
    monthsDisplay.innerText=monthDiff;
    daysDisplay.innerText=daysDiff;
}

display()

}















//Logic









