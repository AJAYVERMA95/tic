$('#form').submit(function () {

    $('#mailStatus').append("Sending...");

    var url = $(this).attr("action");
    var type = $(this).attr("method");
    var data = {};

    $(this).find("[name]").each(function (index,value) {
        var name = $(value).attr("name");
        var attr_val = $(value).val();
        data[name] = attr_val;
    });

    $.ajax({
        url : url,
        type : type,
        data : data,
        cache : false,
        success : function (response) {
            if(response["Error"] == "True"){
                alert("OOPHS..!! Unable to send mail.Try LATER..!! ");
            }
            if(response["Success"] == "True"){
                alert("Mail SENT.");
            }
        },
        error : function () {
            alert("Sorry..!! Server in maintenance. Try LATER..!! ")
        },
        complete : function () {
            $('#mailStatus').empty();
        }
    })
    return false;
});
