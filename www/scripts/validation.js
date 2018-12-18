// When the document has loaded

$(document).ready(function(){
  $("#merchandiseForm").on("submit", function(){
    var formValid = true;
    //validation for name
    var nameIsValid = $("#name").prop("validity").valid;
    if(nameIsValid){
      $("#nameError").addClass("hidden");
      $("#name-background").addClass("standard-background");
    } else {
      formValid = false;
      $("#nameError").removeClass("hidden");
      $("#name-background").removeClass("standard-background");
    }

    //validation for Email
    var emailIsValid = $("#email").prop("validity").valid;
    if(emailIsValid){
      $("#emailError").addClass("hidden");
      $("#email-background").addClass("standard-background");
    } else{
      formValid = false;
      $("#emailError").removeClass("hidden");
      $("#email-background").removeClass("standard-background");
    }

    //validation for Telephone number
    var telIsValid = $("#tel").prop("validity").valid;
    if(telIsValid){
      $("#telError").addClass("hidden");
      $("#tel-background").addClass("standard-background");
      $("#tel-option").addClass("optional");
    } else{
      formValid = false;
      $("#telError").removeClass("hidden");
      $("#tel-background").removeClass("standard-background");
      $("#tel-option").removeClass("optional");
    }

    //validation for Design 1 Size small
    var d1svalid = $("#d1-size-small").prop("validity").valid;
    if(d1svalid){
      $("#d1s-error").addClass("hidden");
      $("#d1s-background").addClass("standard-background");
    } else{
      formValid = false;
      $("#d1s-error").removeClass("hidden");
      $("#d1s-background").removeClass("standard-background");
    }

    //validation for Design 1 Size Medium
    var d1mvalid = $("#d1-size-medium").prop("validity").valid;
    if(d1mvalid){
      $("#d1m-error").addClass("hidden");
      $("#d1m-background").addClass("standard-background");
    } else{
      formValid = false;
      $("#d1m-error").removeClass("hidden");
      $("#d1m-background").removeClass("standard-background");
    }

    //validation for Design 1 size large
    var d1lvalid = $("#d1-size-large").prop("validity").valid;
    if(d1lvalid){
      $("#d1l-error").addClass("hidden");
      $("#d1l-background").addClass("standard-background");
    } else{
      formValid = false;
      $("#d1l-error").removeClass("hidden");
      $("#d1l-background").removeClass("standard-background");
    }

    //validation for Design 1 size extra Large
    var d1exlvalid = $("#d1-size-extralarge").prop("validity").valid;
    if(d1exlvalid){
      $("#d1exl-error").addClass("hidden");
      $("#d1exl-background").addClass("standard-background");
    } else{
      formValid = false;
      $("#d1exl-error").removeClass("hidden");
      $("#d1exl-background").removeClass("standard-background");
    }

    //validation for Design 2 size small
    var d2svalid = $("#d2-size-small").prop("validity").valid;
    if(d2svalid){
      $("#d2s-error").addClass("hidden");
      $("#d2s-background").addClass("standard-background");
    } else{
      formValid = false;
      $("#d2s-error").removeClass("hidden");
      $("#d2s-background").removeClass("standard-background");
    }

    //validation for Design 2 size medium
    var d2mvalid = $("#d2-size-medium").prop("validity").valid;
    if(d2mvalid){
      $("#d2m-error").addClass("hidden");
      $("#d2m-background").addClass("standard-background");
    } else{
      formValid = false;
      $("#d2m-error").removeClass("hidden");
      $("#d2m-background").removeClass("standard-background");
    }


    //validation for Design 2 size large
    var d2lvalid = $("#d2-size-large").prop("validity").valid;
    if(d2lvalid){
      $("#d2l-error").addClass("hidden");
      $("#d2l-background").addClass("standard-background");
    } else{
      formValid = false;
      $("#d2l-error").removeClass("hidden");
      $("#d2l-background").removeClass("standard-background");
    }

    //validation for Design 2 size extra large
    var d2exlvalid = $("#d2-size-extralarge").prop("validity").valid;
    if(d2exlvalid){
      $("#d2exl-error").addClass("hidden");
      $("#d2exl-background").addClass("standard-background");
    } else{
      formValid = false;
      $("#d2exl-error").removeClass("hidden");
      $("#d2exl-background").removeClass("standard-background");
    }

    //validation for Design 3 size small
    var d3svalid = $("#d3-size-small").prop("validity").valid;
    if(d3svalid){
      $("#d3s-error").addClass("hidden");
      $("#d3s-background").addClass("standard-background");
    } else{
      formValid = false;
      $("#d3s-error").removeClass("hidden");
      $("#d3s-background").removeClass("standard-background");
    }

    //validation for Design 3 size medium
    var d3mvalid = $("#d3-size-medium").prop("validity").valid;
    if(d3mvalid){
      $("#d3m-error").addClass("hidden");
      $("#d3m-background").addClass("standard-background")
    } else{
      formValid = false;
      $("#d3m-error").removeClass("hidden");
      $("#d3m-background").removeClass("standard-background")
    }

    //validation for Design 3 size large
    var d3lvalid = $("#d3-size-large").prop("validity").valid;
    if(d3lvalid){
      $("#d3l-error").addClass("hidden");
      $("#d3l-background").addClass("standard-background")
    } else{
      formValid = false;
      $("#d3l-error").removeClass("hidden");
      $("#d3l-background").removeClass("standard-background")
    }

    //validation for Design 3 size extra large
    var d3exlvalid = $("#d3-size-extralarge").prop("validity").valid;
    if(d3exlvalid){
      $("#d3exl-error").addClass("hidden");
      $("#d3exl-background").addClass("standard-background");
    } else{
      formValid = false;
      $("#d3exl-error").removeClass("hidden");
      $("#d3exl-background").removeClass("standard-background");
    }

    //validation for tote bag quantity
    var toteIsValid = $("#num-totes").prop("validity").valid;
    if(toteIsValid){
      $("#tote-error").addClass("hidden");
      $("#tote-background").addClass("standard-background");
    } else{
      formValid = false;
      $("#tote-error").removeClass("hidden");
      $("#tote-background").removeClass("standard-background");
    }

    //Notify User that Errors have occurred in the form
    if (formValid){
      $("#submit-error").addClass("hidden");
      $("#submit-container").addClass("standard-submit");
    } else{
      formValid = false;
      $("#submit-error").removeClass("hidden");
      $("#submit-container").removeClass("standard-submit");
    }

    return formValid
  });
});
