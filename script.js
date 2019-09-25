$(document).ready(function(){
    $('#purpose').on('change', function() {
      if ( this.value == 'Apple')
      {
        $("#Apple").show();
      }
      else if( this.value=="Dell")
      {
        $("#Dell").show();

      }else if(this.value="HP")
      {
        $("#HP").show();
      }
    });
});

function hideApple() {
  document.getElementById("Apple").style.display ="none";
  
};

function hideDell() {
document.getElementById("Dell").style.display = "none";
};

function hideHp(){
 document.getElementById("HP").style.display = "none";
};

