// $("h1").css("color","blue");

function checkValidateDay(inputValue) {
  if (inputValue === "") {
    return "This field is required";
  } else if (isInt(inputValue) === false) {
    return "Must be a valid date";
  } else {
    return "";
  }
}

$("#day, #month, #year").change(function (e) {
  var check = checkValidateDay(e.target.value);

  if (check === "") {
    //disable error msg
    $(this).parent().find(".msg").text(check);

    //get current date
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    let currentMonth = currentTime.getMonth()+1;
    let currentDay = currentTime.getDate();
    
    console.log("current date", currentYear, currentMonth, currentDay)



    let lday = $("#day").val();
    let lmonth = $("#month").val();
    let lyear = $("#year").val();

    //get day of month
    function dayOfMonth(month, year){
        return new Date(year, month,0).getDate();
    }

   //calculate age from input data

    let y = currentYear - lyear;

    let m = currentMonth - lmonth;
    if(m<1){
        y--;
        m = 12 - (-m);

    }
    
    let d=currentDay - lday;
    if(d<1){
        m--;
        d = dayOfMonth(currentMonth,currentYear) - lday;
    }


    //show result on screen
    $(this).parent().parent().parent().find(".valueYear").text(y);
    $(this).parent().parent().parent().find(".valueMonth").text(m);
    $(this).parent().parent().parent().find(".valueDay").text(d);


  } else {
    $(this).parent().find(".msg").text(check);
    $(this).parent().parent().find("label").css("color", "red");
  }
});

//check input number is interger
function isInt(value) {
  let x = parseFloat(value);
  return !isNaN(value) && (x | 0) === x;
}

//check input data is number
function isNumeric(num) {
  return !isNaN(num);
}

console.log("is number", isNumeric("adc"));

//show msg check blank
function msgCSS() {
  $(".msg").css("color", "red");
  $("label").css("color", "red");
}
