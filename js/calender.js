$(document).ready(function(){
  
    $('.datepicker').datepicker({
      
    });
    
    $('.timepicker').timepicker({

    });
    
    $( ".datepicker-done" ).click(function() {
       var date =$(".datepicker-date-display").text();


       $(".date").text(date);
       
    
      });

      var timespan = '';
      $(".am-btn").click (function() {

        timespan = 'AM';
         
       });
       $(".pm-btn").click(function(){
       timespan = 'PM';
      });

      $( ".timepicker-close" ).click(function() {

        var time =$(".timepicker-span-hours").text() +':'+$(".timepicker-span-minutes").text();
        
        $(".time").text(time + ' '+ timespan);
        
     
       });
      
    
    
  });
  // var x = document.getElementById("demo");

  function getlocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }

    function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
    }

  }
  
  