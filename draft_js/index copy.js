// $("h1").css("color","blue");

//validate textbox when input blank
let iday = ($("#day").on('keypress', function(e){
    let lday = $("#day").val();
    if(e.which === 13){
        if(lday === ""){
            msgCSS();
            $(".msgDay").text("This field is required");

        } else if(isInt(lday)=== false){
            msgCSS();
            $(".msgDay").text("Must be interger number") ;
          
        } else if(lday < 1 || lday > 31) {
            $(".day").css("color","red");
            $(".msgDay").text("Must be a valid day")    
        } else{
            console.log('input day =', lday)
            return lday;
        }

    }
}))

console.log('idayyyy =', iday);

$("#month").on('keypress', function(e){
    let lmonth = $("#month").val();
    if(e.which === 13){
        console.log('lmonth',lmonth);
        if(lmonth === ""){
            msgCSS();
            $(".msgMonth").text("This field is required");

        } else if(isInt(lmonth)=== false){
            msgCSS();
            $(".msgMonth").text("Must be interger number") ;
          
        } else if(lmonth < 1 || lmonth > 12) {
            $(".month").css("color","red");
            $(".msgMonth").text("Must be a valid month")    
        } else{
            console.log('input month =', lmonth)
        }
    }
})

$("#year").on('keypress', function(e){
    let lyear = $("#year").val();
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    if(e.which === 13){
        console.log('lyear',lyear);
        if(lyear === ""){
            msgCSS();
            $(".msgYear").text("This field is required");

        } else if(isInt(lyear)=== false){
            msgCSS();
            $(".msgYear").text("Must be interger number") ;
          
        } else if(currentYear < lyear) {
            $(".year").css("color","red");
            $(".msgYear").text("Must be in the past")    
        } else{
            console.log('input year =', lyear)
        }
    }
})

//check input number is interger
function isInt(value) {
    let x = parseFloat(value);
    return !isNaN(value) && (x | 0) === x;
  }

//check input data is number
function isNumeric(num){
    return !isNaN(num)
  }

console.log('is number',isNumeric('adc'))



//show msg check blank
function msgCSS(){
    $(".day").css("color","red");
}


//tinh so nam so voi hien tai

function calDate(){
    let llyear = $("#year").val();
    let llmonth= $("#month").val();
    let llday = $("#day").val();
    
    if ()
    let total = llyear + llmonth +llday;

    console.log('total',total);

    let currentTime = new Date();

    let currentYear = currentTime.getFullYear();
    let currentMonth = currentTime.getMonth();
    let currentDay = currentTime.getDay()

    console.log(currentTime,currentYear,currentMonth,currentDay );

}

console.log('start cal date');
calDate();