
$("#16815185560406c3c06f576075551227").click(function() {
  

    
  
    var k=$("#PMT_BORESH").getValue();
    var p=$("#oder_tedadkalite").getValue();
    
    
    
      
      if (k == 25) {
         var u=p*1.2/30;    
    $("#oder_meterboresh").setValue(u);
        }
      if (k == 35) {
         var u=p*1.2/20;    
    $("#oder_meterboresh").setValue(u);
        }
      if (k == 1) {
         var u=p*1.2/250;    
    $("#oder_meterboresh").setValue(u);
        }
          
      
        
      
    var a=$("#PMT_CODE").getValue();
    
    var b=$("#PMT_GP").getValue();
    
    
    var c=$("#PMT_ORDERNUM").getValue();
    var d=parseInt(c)+1;
      
    var e=b+"."+a+"."+ d;
    $("#oder_number").setValue(e);
    });
    
    
    
    
    
    
    
    $("#submit0000000001").find('button').click(getRoles);
    function getRoles() {
        $("#16815185560406c3c06f576075551227").saveForm();
    }
    
    
    
    $('#oder_grid').hideColumn(1);
    $('#textVar001').hide();
    $('#textVar003').hide();
    $('#textVar004').hide();
    $('#PMT_BORESH').hide();
    $('#PMT_CODE').hide();
    $('#PMT_GP').hide();
    $('#PMT_ORDERNUM').hide();
    $('#textVar005').hide();
    
    
    
    // Grid validator
    $("#16815185560406c3c06f576075551227").setOnSubmit(function() {
      //alert($("#oder_grid").getText(1, 3));
      var numRows = $("#oder_grid").getNumberRows();
        var count=0;
        for (var i=1; i <= numRows; i++) {
            if ($("#oder_grid").getText(i, 3) == $("#oder_grid").getText(1, 3)) {
                $("#oder_grid").getControl(i, 3).css("border","green solid 3px");
            }
            else {
                $("#oder_grid").getControl(i, 3).css("border","red solid 3px");
                 count++;
            }
        }
        if (count > 0) {
            alert('در هر سفارش حداکثر 1 نوع پارچه میتوان انتخاب کرد')
            return false;
             //return false to prevent submit
        }
        else {
          return true;
        }
    });
    
    
    
    
    // MeterBoreshkhorde
    
    //
    //
    
    
    //var esmkalite=$("#oder_noekalite").getValue();
    
    
    
    //$("#16815185560406c3c06f576075551227").mouseover(function() {
    
      
    //        
       
    //});
    
    
    
    
    
    
    
    
    
    
    //top titile
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
    
    
    
    // fabric elementor
    $("#16815185560406c3c06f576075551227").mouseover(function() {
       
    var row = $("#oder_grid").getNumberRows();
      var get = $("#oder_grid").getValue(1,2);
      var get2 = $("#oder_grid").getValue(1,3);
    
    
    for (var i=0;i<=row;i++){
      
      $("#oder_grid").setValue(get2,i,3);
      
    }
      
      });
    
    
    
    
    $("#submit0000000001").find('button').click(getRoles);
    function getRoles() {
        $("#16815185560406c3c06f576075551227").saveForm();
    }
    