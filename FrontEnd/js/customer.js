$(document).ready(function () {

    $("#txtCusID").attr("disabled", true);
    $("#txtName").attr("disabled", true);
    $("#txtAddress").attr("disabled", true);
    $("#btnSave").attr("disabled", true);
    $("#btnUpdate").attr("disabled", true);   
    $("#btnDelete").attr("disabled", true);   

});

$("#btnAdd").click(function () {
    $("#txtCusID").val("")
    $("#txtName").val("")
    $("#txtAddress").val("")
    $("#txtName").attr("disabled", false);
    $("#txtAddress").attr("disabled", false);
    $("#btnSave").attr("disabled", false);
    $("#btnUpdate").attr("disabled",false);   
    $("#btnDelete").attr("disabled",false);

    $("#txtCusID").val(1); 
    $("#tblCustomer tbody tr").each(function () {
      var id = parseInt($(this).find('td:nth-child(1)').text().trim());
      $("#txtCusID").val(++id);  
    });

    

});


$("#btnSave").click(function(){

    var cusID=$("#txtCusID").val().trim();
    var cusName=$("#txtName").val().trim();
    var address=$("#txtAddress").val().trim();

    if(cusID==""){
        $("#txtCusID").css("border","1px solid red");
        alert("Customer Id Empty Can Not Add");
        return;
    }

    if(cusName==""){
        $("#txtName").css("border","1px solid red");
        alert("Customer Name Empty Can Not Add");
        $("#txtName").select();s
        return;
    }

    if(address==""){
        $("#txtAddress").css("border","1px solid red");
        alert("Customer Address Empty Can Not Add");
        $("#txtAddress").select();
        return;
    }


    var html =`<tr>

        <td id"cusID">${cusID}</td>
        <td>${cusName}</td>
        <td>${address}</td>
        <td><div class="img" id="ico"></div></td>
    
    </tr>`

    $("#tblCustomer tbody").append(html);

    reset();


    $("#tblCustomer tbody tr").click(function(){
        var cusID= $(this).find("td:nth-child(1)").text();
        var name= $(this).find("td:nth-child(2)").text();
        var address= $(this).find("td:nth-child(3)").text();

        $("#txtCusID").val(cusID);
        $("#txtName").val(name);
        $("#txtAddress").val(address);

        $("#txtName").attr("disabled", false);
        $("#txtAddress").attr("disabled", false);
        $("#btnUpdate").attr("disabled",false);   
        $("#btnDelete").attr("disabled",false);
    });
    
    $(".img").click(function(){
        // $("#tblCustomer tbody tr").off("click");

      var r = confirm("Do You Want Remove this Customer !");

      if(!r){return;}

        $(this).fadeOut(500, function () {
            $(this).parents("tr").remove();
            reset();
        });

        
        reset;
    });


    // $("#btnDelete").click(function(){
    //     $("#tblCustomer tbody tr").off("click");
    //     var cusID = $("#txtCusID").val();
    //     $("#tblCustomer tbody tr").each(function () {
    //         var id = parseInt($(this).find('td:nth-child(1)').text().trim());
    //         if(cusID==id){
    //             $(this).fadeOut(500, function () {
    //                 $(this).parents("tr").remove();
    //                 // reset();
    //                 // return;
    //             });
        
                
    //         }
            
    //       });
    // });

});

function reset(){
    $("#txtCusID").attr("disabled", true);
    $("#txtName").attr("disabled", true);
    $("#txtAddress").attr("disabled", true);
    $("#btnSave").attr("disabled", true);
    $("#btnUpdate").attr("disabled", true);   
    $("#btnDelete").attr("disabled", true); 
    $("#txtCusID").val("")
    $("#txtName").val("")
    $("#txtAddress").val("")
    $("#btnSave").attr("disabled", true);
    
}

$("#btnUpdate").click(function(){

   var cusID = $("#txtCusID").val();
   var cusName=$("#txtName").val().trim();
   var address=$("#txtAddress").val().trim();

    $("#tblCustomer tbody tr").each(function () {
        var id = parseInt($(this).find('td:nth-child(1)').text().trim());
       
        if(cusID==id){
            $(this).find('td:nth-child(2)').text(cusName);
            $(this).find('td:nth-child(3)').text(address);
            return;
        }
        
      });

      reset();

});




$("#txtName").keyup(function(){
    $("#txtName").css("border","1px solid #ced4da");
 });

 $("#txtAddress").keyup(function(){
    $("#txtAddress").css("border","1px solid #ced4da");
 });