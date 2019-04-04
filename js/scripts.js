var teller = function (total) {
  if (total < 3) {
    result = "unhappy";
  } else if (total <= 6) {
    result = "moderate";
  } else {
    result = "happy";
  }
  return result;
}

$().ready(function(){
  $("form#destiny").submit(function(event){
    var total = 0;
    $(":checkbox:checked").each(function(){
      total = total + parseInt($(this).val());
    });
    
    var result = teller(total);

    if (result == "happy"){
      $("#happy").show();
    }
    if (result == "unhappy"){
      $("#miserable").show();
    }
    if (result == "moderate"){
      $("#moderate").show();
    }

    $("#destiny").hide();

      event.preventDefault();
    });
  });
// $(document).ready(function(){
//   $("form#destiny").submit(function(event){
//     event.preventDefault();
//
//     $("#happy").show();
//     $("input:checkbox[name=happy]:checked").each(function(){
//       var happyMode = $(this).val();
//       $('#happy').append(happyMode + "<br>");
//     });
//     $("#moderate").show();
//     $("input:checkbox[name=fun-transportation]:checked").each(function(){
//       var moderateMode = $(this).val();
//       $('#moderate').append(moderateMode + "<br>");
//     });
//     $("#miserable").show();
//     $("input:checkbox[name=fun-transportation]:checked").each(function(){
//       var miserableMode = $(this).val();
//       $('#miserable').append(miserableMode + "<br>");
//     });
// $('#destiny').show();
//
//   });
// });
