// $("h1").css("color","blue");

//validate when input value on day-month-year textbox

$("#day, #month, #year").change(function (e) {
  if (this.id === "day") {
    let check = checkValidateDay(e.target.value);

    if (check === "") {
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
});

//calculate age from input data

$("img").click(function () {
  let year = $("#year").val();
  let month = $("#month").val();
  let day = $("#day").val();
  if (year != "" && month != "" && day != "") {
    // console.log("ban da duoc den day", year, month, day);
    console.log("daysInMonth", daysInMonth(month, year));


    if (daysInMonth(month, year) < day) {
      $(".msg").text("Must input valid date");
      $("label").css("color", "red");      
    } else {
      $(".msg").text("");
      $("label").css("color", "grey"); 

      //show result on screen
      const currentTime = new Date();
      let currentYear = currentTime.getFullYear();
      let currentMonth = currentTime.getMonth() + 1;
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
        m = 12 - -m;
      }

      let d = currentDay - day;
      if (d < 1) {
        m--;
        d = dayOfMonth(currentMonth, currentYear) - day;
      }

      console.log(y, m, d);
      $(this).parent().parent().parent().find(".valueYear").text(y);
      $(this).parent().parent().parent().find(".valueMonth").text(m);
      $(this).parent().parent().parent().find(".valueDay").text(d);
    }
  }
});

//validate data

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
  } else if (inputValue > new Date().getFullYear() || inputValue < 1) {
    return "Must in the past";
  } else {
    return "";
  }
}

//check input number is interger
function isInt(value) {
  let x = parseFloat(value);
  return !isNaN(value) && (x | 0) === x;
}

//check input data is number
function isNumeric(num) {
  return !isNaN(num);
}

console.log("is number", "Hello world");

//show msg check blank
function msgCSS() {
  $(".msg").css("color", "red");
  $("label").css("color", "red");
}

// Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}


