

function helloWorld(){

    console.log("Hello World");
}

function addinst(){
    var eleadd = $("div#instadd").children().length + 1;
    $("#instadd").append('<div class="panel panel-info addinst" id="inst'+eleadd+'"><div class=\"panel-body\"><select class=\"form-control\" style=\"width: 15%;\" id="instruct'+eleadd+'" onblur="removeCom()"><option value=\"from\">FROM</option><option value=\"maintainer\">MAINTAINER</option><option value=\"run\">RUN</option><option value="expose">EXPOSE</option><option value=""env">ENV</option><option value="add">ADD</option><option value="copy">COPY</option><option value="entrypoint">ENTRYPOINT</option><option value="volume">VOLUME</option><option value="user">USER</option><option value="workdir">WORKDIR</option><option value="onbuild">ONBUILD</option></select></br><input type=\"text\" placeholder=\"Comment\" class=\"form-control\" id="comment'+eleadd+'"></br><textarea rows=\"3\" class=\"form-control\" placeholder=\"Message\" id="text'+eleadd+'"></textarea></br><div><input class=\"btn btn-danger\" type=\"submit\" value=\"X Remove\" onClick="JavaScript:reminst(inst'+eleadd+')"></div></div>');
}


function removeCom(){

    console.log("we are in Removecom function");

    var eleadd = $("div#instadd").children().length + 1;

    for(var i=0;i<=eleadd;i++){

        var x = $('#instruct'+i+' option:selected').text();

        console.log(x);

        if (x == "FROM"){

           document.getElementById('comment'+i+'').readOnly=true
        } else if ( x == "MAINTAINER"){
            document.getElementById('comment'+i+'').readOnly=true
        }

    }

}


function reminst(va){

    console.log(va.id);

    document.getElementById(va.id).remove();
}

function clearInst(){
    $("#instadd").html("");
    console.log("we are in clear function");
}

function convertJsonObj(){

    var eleadd = $("div#instadd").children().length + 1;
        n =[];

    console.log(eleadd);

    for(var i=0;i<=eleadd;i++){

       // var fromvalue=document.getElementById('instruct'+i+'').value;
//        var fromvalue=document.getElementById(instruct2).value;

        var x = $('#instruct'+i+' option:selected').text();

        console.log(x);

        if (x == "FROM"){

            var fromvalue=$('#text'+i+'').val();

        } else if ( x == "MAINTAINER"){

            var maintainvalue=$('#text'+i+'').val();

        } else if( x == "RUN"){

            var runvalue=$('#text'+i+'').val(),
                runcomment=$('#comment'+i+'').val();

            var m ={instruction:"run",arguments:runvalue,comment:runcomment};

            n.push(m);

        } else if ( x == "EXPOSE"){

            var exposevalue=$('#text'+i+'').val(),
                exposecomment=$('#comment'+i+'').val();

            var m ={instruction:"expose",arguments:exposevalue,comment:exposecomment};

            n.push(m);

        } else if( x == "ENV"){

            var envvalue=$('#text'+i+'').val(),
                envcomment=$('#comment'+i+'').val();

            var m ={instruction:"env",arguments:envvalue,comment:envcomment};

            n.push(m);

        } else if ( x == "ADD"){

            var addvalue=$('#text'+i+'').val(),
                addcomment=$('#comment'+i+'').val();

            var m ={instruction:"add",arguments:addvalue,comment:addcomment};

            n.push(m);

        } else if ( x == "COPY"){

            var copyvalue=$('#text'+i+'').val(),
                copycomment=$('#comment'+i+'').val();

            var m ={instruction:"copy",arguments:copyvalue,comment:copycomment};

            n.push(m);

        } else if ( x == "ENTRYPOINT"){

            var entrypointvalue=$('#text'+i+'').val(),
                entrypointcomment=$('#comment'+i+'').val();

            var m ={instruction:"entrypoint",arguments:entrypointvalue,comment:entrypointcomment};

            n.push(m);

        } else if ( x == "VOLUME"){

            var volumevalue=$('#text'+i+'').val(),
                volumecomment=$('#comment'+i+'').val();

            var m ={instruction:"volume",arguments:volumevalue,comment:volumecomment};

            n.push(m);

        } else if ( x == "USER"){

            var uservalue=$('#text'+i+'').val(),
                usercomment=$('#comment'+i+'').val();

            var m ={instruction:"user",arguments:uservalue,comment:usercomment};

            n.push(m);

        } else if ( x == "WORKDIR"){

            var workdirvalue=$('#text'+i+'').val(),
                workdircomment=$('#comment'+i+'').val();

            var m ={instruction:"workdir",arguments:workdirvalue,comment:workdircomment};

            n.push(m);
        } else if( x == "ONBUILD") {

            var onbuildvalue=$('#text'+i+'').val(),
                onbuildcomment=$('#comment'+i+'').val();

            var m ={instruction:"onbuild",arguments:onbuildvalue,comment:onbuildcomment};

            n.push(m);
        }

    }

    console.log(n);

    var dataval = {
        from: fromvalue,
        maintainer: maintainvalue,
        steps: n
    };

console.log(dataval);

    jQuery.ajax({
        url: '/template/create',
        timeout:11000,
        type: 'POST',
        cache: false,
        dataType: "text",
        async: false,
        data: {databody:dataval},
        success: function(data){

            console.log(data);

            $('#addtemp').modal('hide');
            clearInst();
            toastr.success(data);

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




setInterval(function(){
        io.socket.get('/testing/test', {
            room:'test'
        }, function(res){
            console.log(res);
        });

}, 5000);




