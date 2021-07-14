$("#textVar006").hide();
$("#rangrazis_sumvaznfarei").hide();
$("#rangrazis_colorname").hide();
$("#rangrazis_colornamemegdar").hide();


//////////////////   alert ("do we get here");    

//////////////////   ست کردن آنی ساعت هنگام ثبت فرم   /////////////

var d = new Date().getHours() ;
var m = new Date().getMinutes();

if (m<=9){
m='0'+m
}
var output = d + ':' + m;
$('#rangrazis_time').find('input').val(output);


//////////////////     محاسبه وزن از گرید    ////////////////

$("#button0000000001").click(function(){
  
  function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
  
var sum=0;
for (var i=1;i<=$("#rangrazisgriddaryafti").getNumberRows();i++){
  var a=parseFloat($("#rangrazisgriddaryafti").getValue(i,1));

    sum = a + sum;

}
   $("#rangrazis_sumvazn").setValue(sum);
});

///////////////////     محاسبه وزن فرعی     ///////////////

$("#button0000000001").click(function(){
  
  function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
  
var fa=($("#rangrazis_noeparche").getValue());
var vaznasli=parseFloat($("#rangrazis_sumvazn").getValue());
var newburnout = "نیوبرناتی";

  if (fa==newburnout){
    
    var farei =0;
    farei =(vaznasli)*(90.8/100)
    $("#rangrazis_sumvaznfarei").setValue(farei);

  }
  else {
      $("#rangrazis_sumvaznfarei").setValue(vaznasli);

  }
});

////////////////////   محاسبه حجم آب   ///////////////////

$("#button0000000001").click(function(){
  
  
  function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
  
  var jet=($("#rangrazis_jetnumber").getValue());  
  var farei=parseFloat($("#rangrazis_sumvaznfarei").getValue());  
  var hazmab=0;

if (jet <= 14) {

	hazmab=(farei)*11.5;
  hazmab = roundToFixed(hazmab, 1)
    $("#rangrazis_hazmab").setValue(hazmab);

}
else if(jet == 21){
	
	hazmab=(farei)*11.5;
  hazmab = roundToFixed(hazmab, 1)
    $("#rangrazis_hazmab").setValue(hazmab);

}
else if(jet == 22){
	
	hazmab=(farei)*11.5;
  hazmab = roundToFixed(hazmab, 1)
    $("#rangrazis_hazmab").setValue(hazmab);
	
}
else if(jet == 15){	
	 if(farei >= 420){
		 
			hazmab=(farei)*8;
      hazmab = roundToFixed(hazmab, 1)
			$("#rangrazis_hazmab").setValue(hazmab);
			
	 }
	 else if (farei < 420){
			hazmab=(farei)*11.5;
      hazmab = roundToFixed(hazmab, 1)
			$("#rangrazis_hazmab").setValue(hazmab);
	 }
	 else{
	
			alert ("هیچ وزنی وارد نشده برای جت شماره 15، لطفا با واحد تحقیق و توسعه تماس بگیرید");
	
		}
}	 
else if(jet == 17){	
	 if(farei >= 420){
		 
			hazmab=(farei)*8;
			$("#rangrazis_hazmab").setValue(hazmab);
			
	 }
	 else if (farei < 420){
			hazmab=(farei)*11.5;
			$("#rangrazis_hazmab").setValue(hazmab);
	 }
	 else{
	
		alert ("هیچ وزنی وارد نشده برای جت شماره 17، لطفا با واحد تحقیق و توسعه تماس بگیرید");
	
		}
}
else if(jet == 19){	
	 if(farei >= 420){
		 
			hazmab=(farei)*8;
			$("#rangrazis_hazmab").setValue(hazmab);
			
	 }
	 else if (farei < 420){
			hazmab=(farei)*11.5;
			$("#rangrazis_hazmab").setValue(hazmab);
	 }
	 else{
	
		alert ("هیچ وزنی وارد نشده برای جت شماره 19، لطفا با واحد تحقیق و توسعه تماس بگیرید");
	
		}
}

	
  
});

//////////////////     محاسبه ضد شکست    ////////////////

$("#button0000000001").click(function(){
  
  
  function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
 
  var farei=parseFloat($("#rangrazis_sumvaznfarei").getValue());  
  
  var a=15;
  a=a*farei;
  a = roundToFixed(a, 1)
  $("#rangrazis_zedeshekast").setValue(a);

  
});

//////////////////    محاسبه یکنواخت کننده    ////////////////

$("#button0000000001").click(function(){
  
  
  function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
 
  var hazmab=parseFloat($("#rangrazis_hazmab").getValue());  
  var yeknavakh=1;
  
  a=yeknavakh*hazmab;
  a = roundToFixed(a, 1)
  $("#rangrazis_yeknavakhtkonande").setValue(a);

  
});

///////////////////    محاسبه اسید رنگ    /////////////////

$("#button0000000001").click(function(){
  
  
  function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
 
   var jet=parseFloat($("#rangrazis_jetnumber").getValue()); 
 
    if(jet == 11){
      $("#rangrazis_acid").setValue(250);
    }else if(jet == 12){
      $("#rangrazis_acid").setValue(250);
    }else if(jet == 13){
      $("#rangrazis_acid").setValue(250);
    }else if(jet == 14){
      $("#rangrazis_acid").setValue(250);
    }else {
	  $("#rangrazis_acid").setValue(500);
  }
  


  
});

/////////////////////  محاسبه جمع متراژ دریافتی  //////////////

$("#button0000000001").click(function(){

  function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
 
var sum=0;
for (var i=1;i<=$("#rangrazisgriddaryafti").getNumberRows();i++){
  var a=parseFloat($("#rangrazisgriddaryafti").getValue(i,2));

    sum = a + sum;

}
  
   $("#rangrazis_summeter").setValue(sum);
});

/////////////////////  محاسبه جمع تعداد طاقه  ////////////////

$("#button0000000001").click(function(){
  
  function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
  
var sum=0;
for (var i=1;i<=$("#rangrazisgridsefaresh").getNumberRows();i++){
  var a=parseFloat($("#rangrazisgridsefaresh").getValue(i,2));

    sum = a + sum;
  
}
  
   $("#rangrazis_sumtedadtage").setValue(sum);
});

/////////////////////  نمایش کد متراژ سفارشات  ///////////////

$("#button0000000001").click(function(){
  
  
    function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
  
  var c;
  var a=parseFloat($("#rangrazis_summeter").getValue());
  var b=parseFloat($("#rangrazis_sumtedadtage").getValue());
	  c = a/b;

for (var i=1;i<=$("#rangrazisgridsefaresh").getNumberRows();i++){
  var e=parseFloat($("#rangrazisgridsefaresh").getValue(i,2));

  
    d = e * c;
    d = roundToFixed(d, 1)
   $("#rangrazisgridsefaresh").setValue(d, i, 3);
  
}

});
  
////////////////  درج مقادیر مصرفی رنگ های مادر  ///////////////

$("#button0000000001").click(function(){
  
  
    function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
  
  
  var c = 0;
  var d = 0;
  var a=parseFloat($("#megdarrang1").getValue());
  var b=parseFloat($("#rangrazis_sumvaznfarei").getValue());
	  c = a*b;
  	  d = c/100;
   	  d = roundToFixed(d, 2)
   $("#megdarmasrafi1").setValue(d);
  

  
    
  
    function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
  
  
  var c = 0;
  var d = 0;
  var a=parseFloat($("#megdarrang2").getValue());
  var b=parseFloat($("#rangrazis_sumvaznfarei").getValue());
	  c = a*b;
  	  d = c/100;
   	  d = roundToFixed(d, 2)
   $("#megdarmasrafi2").setValue(d);
  

    
  
    function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
  
  
  var c = 0;
  var d = 0;
  var a=parseFloat($("#megdarrang3").getValue());
  var b=parseFloat($("#rangrazis_sumvaznfarei").getValue());
	  c = a*b;
  	  d = c/100;
   	  d = roundToFixed(d, 2)
   $("#megdarmasrafi3").setValue(d);
  

  
  
    function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
  
  
  var c = 0;
  var d = 0;
  var a=parseFloat($("#megdarrang4").getValue());
  var b=parseFloat($("#rangrazis_sumvaznfarei").getValue());
	  c = a*b;
  	  d = c/100;
   	  d = roundToFixed(d, 2)
   $("#megdarmasrafi4").setValue(d);
  

  
    function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
  
  
  var c = 0;
  var d = 0;
  var a=parseFloat($("#megdarrang5").getValue());
  var b=parseFloat($("#rangrazis_sumvaznfarei").getValue());
	  c = a*b;
  	  d = c/100;
   	  d = roundToFixed(d, 2)
   $("#megdarmasrafi5").setValue(d);
  

  
});
   

/////////////////////  محاسبه ریداکشن   ///////////////

$("#button0000000001").click(function(){
  
  
  function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
 
  var colornamemegdar=parseFloat($("#rangrazis_colornamemegdar").getValue());  
  var hazmab=parseFloat($("#rangrazis_hazmab").getValue());  

  var a=0;
  a=colornamemegdar*hazmab;
  a = roundToFixed(a, 1)
  $("#rangrazis_ridaction").setValue(a);
  var ba=$("#rangrazis_ridaction").getValue();  

  if (isNaN(ba)){
    $("#rangrazis_ridaction").setValue("0");
  }
 

  
});

/////////////////////  محاسبه اسید ریداکشن   ///////////////

$("#button0000000001").click(function(){
  
  
  function roundToFixed(_float, _digits){
var rounder = Math.pow(10, _digits);
return (Math.round(_float * rounder) / rounder).toFixed(_digits);
}
 
  var ridaction=parseFloat($("#rangrazis_ridaction").getValue());  
  var hazm=parseFloat($("#rangrazis_hazmab").getValue());  


  if (ridaction==0){
    $("#rangrazis_acidridaction").setValue("0");
  }else{
    hazm = roundToFixed(hazm, 1)
    $("#rangrazis_acidridaction").setValue(hazm);
  }

});

/////////////////  موارد مربوط به استایل فرم   //////////////////

function labelOnTop(fieldId, colWidth) {
  var aFieldTypes = ['text', 'textarea', 'checkbox', 'checkgroup', 'dropdown', 'suggest', 
                   'radio', 'datetime', 'file', 'multipleFile', 'image', 'link'];
  var oField = $("#"+fieldId);
  var type = '';

  if (typeof oField.getInfo === 'function' && oField.getInfo() != null) {
    type = oField.getInfo().type;
  }

  if (aFieldTypes.indexOf(type) == -1) {
    return;
  }

  var oDivs = oField.children("div");
  if (type == 'multipleFile') {
    oDivs = oDivs.children("div");
  }

  oDivs.eq(0).removeClass();
  oDivs.eq(0).addClass("col-sm-"+colWidth+" col-md-"+colWidth+" col-lg-"+colWidth);
  oDivs.eq(0).find("label").css("float", "right");
  
  //remove classes that start with "col-":
  var aClasses = oDivs.eq(1).attr('class').split(/\s+/);
  $.each(aClasses, function(index, className) {
    if (className.match(/^col-/)) {
      oDivs.eq(1).removeClass(className);
    }
  });

  oDivs.eq(1).addClass("col-sm-"+colWidth+" col-md-"+colWidth+" col-lg-"+colWidth);
  oDivs.eq(1).css("float", "right");
  oDivs.eq(1).css("padding-left", "0");
}
function processFormFields(aRows) {
  for (i in aRows) { 
    for (ii in aRows[i]) {
      if (aRows[i][ii].type == 'form')
        processFormFields(aRows[i][ii].items);
      else 
        labelOnTop( aRows[i][ii].id, "12" );
    }
  }
}  
var aItems = getFormById( $("form").prop("id") ).model.attributes.items;
processFormFields(aItems);


