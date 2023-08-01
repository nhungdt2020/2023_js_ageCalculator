// $("h1").css("color","blue");

function checkValidateDay(inputValue) {
  if (inputValue === "") {
    return "This field is required";
  } else if (isInt(inputValue) === false || inputValue < 1 || inputValue > 31) {
    return "Must be a valid date";
  }
  //   else if(inputValue > dayOfMonth(lmonth,lyear)){

  //   }
  else {
    return "";
  }
}

function checkValidateMonth(inputValue) {
  if (inputValue === "") {
    return "This field is required";
  } else if (isInt(inputValue) === false || inputValue < 1 || inputValue > 12) {
    return "Must be a valid date";
  } else {
    return "";
  }
}

function checkValidateYear(inputValue) {
  if (inputValue === "") {
    return "This field is required";
  } else if (isInt(inputValue) === false) {
    return "Must be a valid date";
  } else if (inputValue > (new Date).getFullYear() || inputValue < 1) {
    return "Must in the past";
  } else {
    return "";
  }
}

$("#day, #month, #year").change(function (e) {

  if (this.id === "day") {
    let check = checkValidateDay(e.target.value);

    if (check === "") {
      //disable error msg
      $(this).parent().find(".msg").text(check);

    } else {
      $(this).parent().find(".msg").text(check);
      $(this).parent().parent().find("label").css("color", "red");
    }
  }

  if (this.id === "month") {
    let check = checkValidateMonth(e.target.value);

    if (check === "") {
      //disable error msg
      $(this).parent().find(".msg").text(check);
      

    } else {
      $(this).parent().find(".msg").text(check);
      $(this).parent().parent().find("label").css("color", "red");
    }
  }

  if (this.id === "year") {
    let check = checkValidateYear(e.target.value);

    if (check === "") {
      //disable error msg
      $(this).parent().find(".msg").text(check);

    } else {
      $(this).parent().find(".msg").text(check);
      $(this).parent().parent().find("label").css("color", "red");
    }
  }


  }
);

$("img").click(function(){
    let year = $("#year").val();
    let month= $("#month").val();
    let day = $("#day").val();
    if (year != "" && month != "" && day != "") {
        console.log("ban da duoc den day", year, month, day)
    
        //show result on screen
        const currentTime = new Date();
        let currentYear = currentTime.getFullYear();
        let currentMonth = currentTime.getMonth()+1;
        let currentDay = currentTime.getDate();
        //get day of month
        function dayOfMonth(fmonth, fyear) {
          return new Date(fyear, fmonth, 0).getDate();
        }
    
        //calculate age from input data
    
        let y = currentYear - year;
    
        let m = currentMonth - month;
        if (m < 1) {
          y--;
          m = 12 - (-m );
        }
    
        let d = currentDay - day;
        if (d < 1) {
          m--;
          d = dayOfMonth(currentMonth, currentYear) - day;
        }
        
        console.log(y,m,d)
        $(this).parent().parent().parent().find(".valueYear").text(y);
        $(this).parent().parent().parent().find(".valueMonth").text(m);
        $(this).parent().parent().parent().find(".valueDay").text(d);
}})




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
