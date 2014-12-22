function sendData(form){
   var blank = "";
   var sleep = $('input:radio[name=sleep]:checked').val();
   var sleep_quality = $('input:radio[name=sleep_quality]:checked').val();
   var fatigue = $('input:radio[name=fatigue]:checked').val();
   var RTT = $('input:radio[name=RTT]:checked').val();
   var mood = $('input:radio[name=mood]:checked').val();
   var soreness = $('input:radio[name=soreness]:checked').val();
   var RPE = $('input:radio[name=RPE]:checked').val();
   var userName = document.getElementById('user_name').value;
   var password = document.getElementById('password').value;
   var string_res = blank.concat("sleep=",sleep,"&sleep_quality=",sleep_quality,"&fatigue=",fatigue,"&RTT=",RTT,"&mood=",mood,"&soreness=",soreness,"&RPE=",RPE,"&user_name=",userName,"&password=",password);

   var xmlhttp;
   var url = "http://93.107.110.41/ClareSFapp/RPE.php?"
  var  url1 = url.concat(string_res);
   alert(url1);
   if (window.XMLHttpRequest)
   {// code for IE7+, Firefox, Chrome, Opera, Safari
  	xmlhttp=new XMLHttpRequest();
   }
  else
  {// code for IE6, IE5
  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  { 
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      alert("Updated");
      alert(xmlhttp.responseText);
    }
  }
  xmlhttp.open("GET",url1,true);
  xmlhttp.send();
} 
	
