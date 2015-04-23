/* TypeAhead script created by Akhil R © 2015 */

var data=[{"id":5,"email":"akhilr94@gmail.com","username":"akhil"},
{"id":6,"email":"wowowowow@gmail.com","username":"hello"},
{"id":7,"email":"asdkaskdj@a.com","username":"helloozzz"},
{"id":8,"email":"wow@gmail.com","username":"HELLO"}
]

window.addEventListener('load', function(){
  var box = document.getElementById('input');
  box.addEventListener('keydown', function(e){
    findMatch(e);
  });
  box.addEventListener('keydown', function(e){
    show(e);
  });
  box.addEventListener('keyup', function(e){
    findMatch(e);
  });
  box.addEventListener('keyup', function(e){
    hide(e);
  });
});

function show(e){
     if(isChar(e))
     {
      var dropdown = document.getElementsByClassName("dropdown");
      var box = document.getElementById('input');
      dropdown = dropdown[0];
      dropdown.style.display = 'block';
      box.style.borderRadius = '3px 3px 0 0';
     }
}
function hide(e){
  if(e.which == 8)
  {
  var dropdown = document.getElementsByClassName("dropdown");
  dropdown=dropdown[0];
  var box = document.getElementById('input');
  str=box.value;
  if(str==="")
   dropdown.style.display='none';
   box.style.borderRadius = '3px';
  }
}
//function to find match from JSON data
function findMatch(e){
  var box = document.getElementById('input');
  var str=box.value;
  var result=[];
  if(str!="") {
    for(var i=0;i<data.length;i++)
    { user=data[i];
      if(user.username.contains(str) || user.email.contains(str))
        result.push(user);
    }
    if(result.length>0)
      console.log(result.length);
    else

  }
}

//modify String prototype
String.prototype.contains=function(str){
  if (this.indexOf(str)!==-1)
    return true;
  else
    return false;
}

function isChar(evt) {
  if(typeof evt.which == "number" && evt.which > 0)
    return !evt.ctrlKey && !evt.metaKey && !evt.altKey && evt.which != 8;
}