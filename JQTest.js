$(document).ready(function(){

    $("#btn1").click(function(){
     alert('Hello!');
    });

    //btn click event to hide/show pass
    $("#btnhs").click(function(){
        
        //store values in variable
        var pass = $("#pwd");
        var btn = $("#btnhs");

        //check based on button value 
        if(btn.attr("value")=="Show"){

            //chnage box type->text & btn value->Hide
            pass.attr('type','text');
            btn.attr('value','Hide');
        }
        else{
            //chnage box type->password & btn value->Show
            pass.attr('type','password');
            btn.attr('value','Show');
        }   
    });


    //btn for hide/show image
    $("#imgbtn").click(function(){

        var img = $("#img");
        var btn = $("#imgbtn");

        if(btn.attr("value")=="Hide"){

            img.hide(2000);
            btn.attr('value','Show');
        } else{

            img.show(2000);
            btn.attr('value','Hide');
        }
    });

    //calci opt
    $("#opt,#val2").on( "input change", function(){
       var optval = $("#opt").val();
       var num1 = parseInt($("#val1").val());
       var num2 = parseInt($("#val2").val());

        var cal;

        if(optval=="+"){

            cal = num1 + num2;
        } else if(optval=="-"){
            
             cal = num1 - num2;
            
        } else if(optval=="*"){
            
             cal = num1 * num2;
        }else if(optval=="%"){

             cal = num1 % num2;
        }

        if(cal>=0){
           $("#result").val(cal);
        }
         else{
            $("#result").val("Enter number 2").prop("disabled", true);
         }
    });



    $("#dept").on("change", function(){

        var deptVal = $("#dept").val();
        var empdrop = $("#emp");

        var empList = '<option value="">-- Select emp list--</option>';

        if(deptVal=="IT"){
            empList += '<option value="1">Amit</option>';
            empList += '<option value="2">Sahil</option>';
        } else if(deptVal=="HR"){
            empList += '<option value="3">Shubham</option>';
            empList += '<option value="4">Aditya</option>';
        }


        if(deptVal != "" ){
            empdrop.html(empList);
        } else{
            empdrop.html('<option value="">-- Select emp list--</option>');
        }
    });

    $("#txtip").on("input change", function(){

        var ui = $("#txtip").val();
        var para = $("#para");
        var color = "sty"
        
        para.text(ui);

        $("#head").css("color",ui);


    });


    var arrEmp = [
        {name:'Shubham', id:101},
        {name:'John', id:102}];


    $("#tbtn").click(function(){

        var obj='';

        //for loop

        // for(var i=0; i<arrEmp.length; i++){

        //     var name = (arrEmp[i].name);
        //     var id = (arrEmp[i].id);
        //     obj += "<tr>";
        //     obj += `<td>${name}</td>`;
        //     obj += `<td>${id}</td>`;
        //     obj += "</tr>";
        // }


        //for each loop

        $.each(arrEmp,function(index,item){

            obj += "<tr>";
            obj += `<td>${item.name}</td>`;
            obj += `<td>${item.id}</td>`;
            obj += "<tr>";
        });

          $("#bootTable").html(obj);          

    });   
});