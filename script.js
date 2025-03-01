
function todaydate(){
    let date = document.getElementById("date");
    let today = new Date();
    let day = today.getDate();
    let daysOfWeek = ["Sun", "Mon", "Tue", "We", "Thu", "Fri", "Sa"];
    let dayOfWeek = daysOfWeek[today.getDay()];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
    let month = months[today.getMonth()]; 
    let year = today.getFullYear(); 
    let formattedDate =  dayOfWeek + "-" + month + "-" + day + "-" + year;
    date.innerHTML = formattedDate ;

}
todaydate();
let discover = document.getElementById("Discover");
discover.addEventListener("click",function(){
    window.location.href = "second.html";
})

let clearHistory = document.getElementById("btn7");
clearHistory.addEventListener("click",function(){
    history.innerHTML = " ";
    history.style.backgroundColor = "white"
})


let history = document.getElementById("history")
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let p1 = document.getElementById("p1").innerHTML;
let p2 = document.getElementById("p2").innerHTML;
let p3 = document.getElementById("p3").innerHTML;
let p4 = document.getElementById("p4").innerHTML;
let p5 = document.getElementById("p5").innerHTML;
let p6 = document.getElementById("p6").innerHTML;
let count = document.getElementById("count");
let convertNumber = parseInt(count.innerHTML);
let count1 = document.getElementById("count1");
let convertNumber1 = parseInt(count1.innerHTML);




btn1.addEventListener("click",function (){
    alert("Board update successfully");
    btn1.disabled = true;
    btn1.style.backgroundColor = "#A9B3F1";
    btn1.style.cursor = "not-allowed";
    if (convertNumber >= 0 ){
        convertNumber-- ;
        count.innerHTML = convertNumber ;
    }
    if (convertNumber1 >= 0 ){
        convertNumber1++ ;
        count1.innerHTML = convertNumber1 ;
    }
    let currentTime = new Date();
    let hours = currentTime.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let period = hours >= 12 ? 'AM' : 'PM'
    let totaltime = hours + ":" + minutes + ":" + second + " " + period;
    history.insertAdjacentHTML("beforeend", `<p class="bg-[#F4F7FF] text-sm rounded-t-lg mt-5">
        New task added successfully!
    </p>
    <p class="bg-[#F4F7FF] rounded-b-lg text-sm font-bold mb-5">
        ${p1}at ${totaltime}
    </p>`);
    

} )


btn2.addEventListener("click",function (){
    alert("Board update successfully");
    btn2.disabled = true;
    btn2.style.backgroundColor = "#A9B3F1";
    btn2.style.cursor = "not-allowed";
    if (convertNumber >= 0 ){
        convertNumber-- ;
        count.innerHTML = convertNumber ;
    }
    if (convertNumber1 >= 0 ){
        convertNumber1++ ;
        count1.innerHTML = convertNumber1 ;
    }
    let currentTime = new Date();
    let hours = currentTime.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let period = hours >= 12 ? 'AM' : 'PM'
    let totaltime = hours + ":" + minutes + ":" + second + " " + period;
    history.insertAdjacentHTML("beforeend", `<p class="bg-[#F4F7FF] text-sm rounded-t-lg mt-5">
        New task added successfully!
    </p>
    <p class="bg-[#F4F7FF] rounded-b-lg text-sm font-bold mb-5">
        ${p2}at ${totaltime}
    </p>`);
    

} )


btn3.addEventListener("click",function (){
    alert("Board update successfully");
    btn3.disabled = true;
    btn3.style.backgroundColor = "#A9B3F1";
    btn3.style.cursor = "not-allowed";
    if (convertNumber >= 0 ){
        convertNumber-- ;
        count.innerHTML = convertNumber ;
    }
    if (convertNumber1 >= 0 ){
        convertNumber1++ ;
        count1.innerHTML = convertNumber1 ;
    }
    let currentTime = new Date();
    let hours = currentTime.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let period = hours >= 12 ? 'AM' : 'PM'
    let totaltime = hours + ":" + minutes + ":" + second + " " + period;
    history.insertAdjacentHTML("beforeend", `<p class="bg-[#F4F7FF] text-sm rounded-t-lg mt-5">
        New task added successfully!
    </p>
    <p class="bg-[#F4F7FF] rounded-b-lg text-sm font-bold mb-5">
        ${p3}at ${totaltime}
    </p>`);
    

} )


btn4.addEventListener("click",function (){
    alert("Board update successfully");
    btn4.disabled = true;
    btn4.style.backgroundColor = "#A9B3F1";
    btn4.style.cursor = "not-allowed";
    if (convertNumber >= 0 ){
        convertNumber-- ;
        count.innerHTML = convertNumber ;
    }
    if (convertNumber1 >= 0 ){
        convertNumber1++ ;
        count1.innerHTML = convertNumber1 ;
    }
    let currentTime = new Date();
    let hours = currentTime.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let period = hours >= 12 ? 'AM' : 'PM'
    let totaltime = hours + ":" + minutes + ":" + second + " " + period;
    history.insertAdjacentHTML("beforeend", `<p class="bg-[#F4F7FF] text-sm rounded-t-lg mt-5">
        New task added successfully!
    </p>
    <p class="bg-[#F4F7FF] rounded-b-lg text-sm font-bold mb-5">
        ${p4}at ${totaltime}
    </p>`);
    

} )


btn5.addEventListener("click",function (){
    alert("Board update successfully");
    btn5.disabled = true;
    btn5.style.backgroundColor = "#A9B3F1";
    btn5.style.cursor = "not-allowed";
    if (convertNumber >= 0 ){
        convertNumber-- ;
        count.innerHTML = convertNumber ;
    }
    if (convertNumber1 >= 0 ){
        convertNumber1++ ;
        count1.innerHTML = convertNumber1 ;
    }
    let currentTime = new Date();
    let hours = currentTime.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let period = hours >= 12 ? 'AM' : 'PM'
    let totaltime = hours + ":" + minutes + ":" + second + " " + period;
    history.insertAdjacentHTML("beforeend", `<p class="bg-[#F4F7FF] text-sm rounded-t-lg mt-5">
        New task added successfully!
    </p>
    <p class="bg-[#F4F7FF] rounded-b-lg text-sm font-bold mb-5">
        ${p5}at ${totaltime}
    </p>`);
    

} )


btn6.addEventListener("click",function (){
    alert("Board update successfully");
    btn6.disabled = true;
    btn6.style.backgroundColor = "#A9B3F1";
    btn6.style.cursor = "not-allowed";
    if (convertNumber >= 0 ){
        convertNumber-- ;
        count.innerHTML = convertNumber ;
    }
    if (convertNumber1 >= 0 ){
        convertNumber1++ ;
        count1.innerHTML = convertNumber1 ;
    }
    let currentTime = new Date();
    let hours = currentTime.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let period = hours >= 12 ? 'AM' : 'PM'
    let totaltime = hours + ":" + minutes + ":" + second + " " + period;
    history.insertAdjacentHTML("beforeend", `<p class="bg-[#F4F7FF] text-sm rounded-t-lg mt-5">
        New task added successfully!
    </p>
    <p class="bg-[#F4F7FF] rounded-b-lg text-sm font-bold mb-5">
        ${p6}at ${totaltime}
    </p>`);
    

} )


