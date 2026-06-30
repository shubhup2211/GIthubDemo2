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

});