var leapYear = function(year) {
  if( year >= 0 && ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0))) {
    return true;
  } else if (year === NaN) {
    return false;
  } else {
    return false;
  }

};

$(document).ready(function(event) {
    $("form#leap-year").submit(function(event){
      var year = parseInt($("input#year").val());
      var result = leapYear(year);

      $(".year").text(year);

    if ( year === NaN || year < 0){
      alert("Please write a valid input");
      $(".not").text(".not");
    } else if(!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }




    $("#result").show();
    event.preventDefault();

  });
});
