function loadJSON(file,callback){
    var ajax=new XMLHttpRequest();
    ajax.overrideMimeType("application/json");
    ajax.open("GET",file,true)
    ajax.onreadystatechange=function(){
        if(ajax.readyState===4 && ajax.status===200){
            callback(ajax.responseText);

        }
    }
    ajax.send();
}
loadJSON("data.json",function(text){
    var d=JSON.parse(text);
    console.log(d.details)
})
