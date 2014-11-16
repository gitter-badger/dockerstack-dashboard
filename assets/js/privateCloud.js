/*
*
*
*
*
*
*
*
* */

function checkDedServercred(){

    var username =document.getElementById("username").value,
        hostname=document.getElementById("hostname").value,
        password=document.getElementById("password").value,
        port=document.getElementById("portno").value;

    console.log(username,hostname,password,port);

    var dataval={
        host:hostname,
        port:port,
        username:username,
        password:password
    }

    jQuery.ajax({
        url: '/private/checkdedcred',
        timeout:1100,
        type: 'POST',
        cache: false,
        dataType: "text",
        async: false,
        data: { databody:dataval },
        complete: function() {
            //called when complete
            console.log('process complete');
            $("#loadingbar").width("101%").delay(100).fadeOut(400, function() {
                $(this).remove();
            });

        },
        success: function(data){

            if(data == "Not Working")
            {
                toastr.error("Server Credentials are "+data);

            } else {
                toastr.success("Server Credentials are "+data);

            }
            console.log(data);
        },
        error: function(jqXHR, exception) {
            if (jqXHR.status === 0) {
                alert('Not connect.\n Verify Network.');
                console.log(jqXHR);

            } else if (jqXHR.status == 404) {
                alert('Requested page not found. [404]');
                jqXHR.abort();
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error [500].');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error.\n' + jqXHR.responseText);
            }
        }
    })
}


function dedserverCredSave(){

    var username =document.getElementById("username").value,
        hostname=document.getElementById("hostname").value,
        password=document.getElementById("password").value,
        port=document.getElementById("portno").value;

    console.log(username,hostname,password,port);

    var dataval={
        host:hostname,
        port:port,
        username:username,
        password:password
    }


    toastr.success("Dedicated Server Credentials have been Saved");
}