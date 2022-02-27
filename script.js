
var cr= [];
var text = "";

  document.body.onmouseup = function() {
    cr= window.getSelection().getRangeAt(0).getClientRects();
    text = window.getSelection().toString();
  },
  document.body.onmousedown = function(ev) {
      
    for(var i = 0 ; i < cr.length ; i++) {
      if(ev.pageX >= cr[i].left && ev.pageX <= cr[i].right &&
         ev.pageY >= cr[i].top  && ev.pageY <= cr[i].bottom
        ) {  
            alert("Got selected text " + text)
            var server = "Access-Control-Allow-Origin: http://127.0.0.1:5000";
            var op_num = {'search':"ransomware"};
            var appdir='/sum';
            $.ajax({
            type: "POST",
            url:server+appdir,
            data: JSON.stringify(op_num),
            dataType: 'json'
            })
            alert("bruhh_from_js")
            //   console.log("bruhh_from_js");
        
      }
    }
  };