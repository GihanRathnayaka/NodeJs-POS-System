$(document).ready(function () {
    reset();
});


$("#btnAdd").click(function () {
    $("#txtItemCode").val("");
    $("#txtQty").val("");
    $("#txtPrice").val("");
    $("#txtItemName").val("")
    $("#txtPrice").attr("disabled", false);
    $("#txtQty").attr("disabled", false);
    $("#txtItemName").attr("disabled", false);
    $("#btnSave").attr("disabled", false);
    // $("#btnUpdate").attr("disabled",false);   
    // $("#btnDelete").attr("disabled",false);



    $("#txtItemCode").val("I001");
    var id = 1;
    $("#tbtItems tbody tr").each(function () {
        ++id;
        console.log("wada");
        $("#txtItemCode").val("I00" + (id));
    });

});

$("#btnSave").click(function () {

    var itemCode = $("#txtItemCode").val();
    var itemName = $("#txtItemName").val();
    var price = $("#txtPrice").val();
    var qty = $("#txtQty").val();

    if (itemCode == "") {
        alert("Please Check Item Code Empty !");
        $("#txtItemCode").css("border", "1px solid red");
        $("#txtItemCode").select();
        return;
    }

    if (itemName == "") {
        alert("Please Check Item Name Empty !");
        $("#txtItemName").css("border", "1px solid red");
        $("#txtItemName").select();
        return;
    }

    if (price == "") {
        alert("Please Check Item Unit Price Empty !");
        $("#txtPrice").css("border", "1px solid red");
        $("#txtPrice").select();
        return;
    }
    if (qty == "") {
        alert("Please Check Item Quantity is Empty !");
        $("#txtQty").css("border", "1px solid red");
        $("#txtQty").select();
        return;
    }

    if (isNaN(price) || parseFloat(price) < 0) {
        alert("Please Check Item Unit Price  !");
        $("#txtPrice").css("border", "1px solid red");
        $("#txtPrice").select();
        return;
    }

    if (isNaN(qty) || parseInt(qty) < 0) {
        alert("Please Check Item Quantity ");
        $("#txtQty").css("border", "1px solid red");
        $("#txtQty").select();
        return;
    }




    var html = `<tr>
    
        <td>${itemCode}</td>
        <td>${itemName}</td>
        <td>${price}</td>
        <td>${qty}</td>
        <td><div class="img"></div></td>
    
    </tr>`

    $("#tbtItems").append(html);
    reset();

    $("#tbtItems tbody tr").click(function () {
        $("#txtPrice").attr("disabled", false);
        $("#txtQty").attr("disabled", false);
        $("#txtItemName").attr("disabled", false);
       // $("#btnSave").attr("disabled", false);
        $("#btnUpdate").attr("disabled", false);
        $("#btnDelete").attr("disabled", false);
        var itmeCode = $(this).find("td:nth-child(1)").text();
        var itemName = $(this).find("td:nth-child(2)").text();
        var price = $(this).find("td:nth-child(3)").text();
        var qty = $(this).find("td:nth-child(4)").text();

        $("#txtItemCode").val(itmeCode);
        $("#txtItemName").val(itemName);
        $("#txtPrice").val(price);
        $("#txtQty").val(qty);

        reset;
    });


    $(".img").click(function () {
        $("#tbtItems tbody tr").off("click");
        var r = confirm("Do You Want Remove this Customer !");

        if(!r){return;}

        $(this).parent().fadeOut(500, function () {
            $(this).parent().remove();
            reset();
        });

    });




});

$("#txtItemName").keyup(function () {
    $("#txtItemName").css("border", "1px solid #ced4da")

});
$("#txtQty").keyup(function () {
    $("#txtQty").css("border", "1px solid #ced4da")
});

$("#txtPrice").keyup(function () {
    $("#txtPrice").css("border", "1px solid #ced4da")
});


function reset() {
    $("#txtItemCode").attr("disabled", true);
    $("#txtItemName").attr("disabled", true);
    $("#txtQty").attr("disabled", true);
    $("#txtPrice").attr("disabled", true);
    $("#btnSave").attr("disabled", true);
    $("#btnUpdate").attr("disabled", true);
    $("#btnDelete").attr("disabled", true);
    $("#txtItemCode").val("");
    $("#txtQty").val("");
    $("#txtPrice").val("");
    $("#txtItemName").val("")
}

$("#btnUpdate").click(function () {

    var itemCode = $("#txtItemCode").val();
    var itemName = $("#txtItemName").val();
    var price = $("#txtPrice").val();
    var qty = $("#txtQty").val();

    $("#tbtItems tbody tr").each(function () {
        var id = $(this).find('td:nth-child(1)').text().trim();

        if (itemCode == id) {
            $(this).find('td:nth-child(2)').text(itemName);
            $(this).find('td:nth-child(3)').text(price);
            $(this).find('td:nth-child(4)').text(qty);
            return;
        }

    });

    reset();

});