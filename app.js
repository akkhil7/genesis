/* TypeAhead created by Akhil R © 2015 */

var data=[{"id":5,"email":"akhilr94@gmail.com","username":"akhil"},
{"id":6,"email":"wowowowow@gmail.com","username":"hello"},
{"id":7,"email":"asdkaskdj@a.com","username":"helloozzz"},
{"id":8,"email":"wow@gmail.com","username":"HELLO"}
]
var itemCounter = -1;

/* ---- EVENT LISTENERS ---- */
window.addEventListener('load', function(){
  var box = document.getElementById('input');
  var dropdown = document.getElementsByClassName('dropdown')[0];

  /*box.addEventListener('keydown', function(e){
    if(isChar(e)) {
      findMatch(e);
      show(e);
    }
    else
      hide(e);

  });*/

  box.addEventListener('keyup', function(e){
    if(isChar(e)) {
      findMatch(e);
      show(e);
    }
    else
      hide(e);
  });

});
/* ---- SHOW DROPDOWN MENU ----- */
function show(e){
  var dropdown = document.getElementsByClassName("dropdown")[0];
  var box = document.getElementById('input');
  dropdown.style.display = 'block';
  box.style.borderRadius = '3px 3px 0 0';
}
/* ---- HIDE DROPDOWN MENU ----- */
function hide(e){
  if(e.which == 8)
  {
  var dropdown = document.getElementsByClassName("dropdown")[0];
  var box = document.getElementById('input');
  str=box.value;
  if(str==="")
   dropdown.style.display='none';
   box.style.borderRadius = '3px';
  }
}
// /*-------- IF A CHARACTER IS ENTERED, DO THESE OPERATIONS -------*/
function findMatch(e){
  var box = document.getElementById('input');
  var dropdown = document.getElementsByClassName('dropdown')[0];
  while(dropdown.firstChild) // to clear the dropdown <li> for each query
    dropdown.removeChild(dropdown.firstChild);

  var str=box.value;
  var result=[];
  if(e.which != 40 && e.which != 38)
    itemCounter = -1;
  if(str != "") {
    for(var i=0;i<data.length;i++)
    { user=data[i];
      if(user.username.contains(str) || user.email.contains(str))
        result.push(user);
    }
    if(result.length>0) {  //IF THERE ARE ANY RESULTS

      var ul = document.createElement("ul");
      dropdown.appendChild(ul);

      for(var i=0;i<result.length;i++)
      { var li = document.createElement("li");
        var a  = document.createElement("a");
        var p  = document  .createElement("p");
        //sorry i'm a js rookie. there's a lot to refactor i'm sure about that.
        var username = result[i].username.toLowerCase();
        li.innerHTML = "@"+username;
        p.innerHTML = result[i].email.toLowerCase();
        a.appendChild(li);
        a.appendChild(p);
        a.setAttribute("href", "#");
        a.setAttribute("class", "item");
        ul.appendChild(a);
      }
      /* ---- KEYBOARD CONTROLS (UP AND DOWN ARROW) ---- */
      if(e.which==40)  
        moveDown(e);
      if(e.which==38)
        moveUp(e);
      /* END OF KEYBOARD CONTROLS */

      /* ---- MOUSE CONTROLS ---- */
      dropdown.addEventListener("mouseover", function(e) {
        if(e.target && (e.target.nodeName == "A" || e.target.nodeName=="LI" || e.target.nodeName=="P"))
          { if(e.target.nodeName == "LI" || e.target.nodeName == "P")
              {
                var item = e.target.parentNode;
                item.style.backgroundColor = "#f9f9f9";
              }
            else
                e.target.style.backgroundColor = "#f9f9f9";
        }
      });
      dropdown.addEventListener("mouseout", function(e) {
        if(e.target && (e.target.nodeName == "A" || e.target.nodeName=="LI" || e.target.nodeName=="P"))
          { if(e.target.nodeName == "LI" || e.target.nodeName == "P")
              {
                var item = e.target.parentNode;
                item.style.backgroundColor = "";
              }
            else
                e.target.style.backgroundColor = "";
        }
      });
    /* END OF MOUSE CONTROLS */
       
    }
    else  //IF THERE ARE NO RESULTS
      dropdown.innerHTML = "<li style='color: #477DCA; padding: 0.5em;'> Can't find any results </li>";
    }
}

/* ---- MOVE HIGHLIGHT DOWN ---- */
function moveDown(e) {
  e.preventDefault();
  var dropdown = document.getElementsByClassName('dropdown')[0];
  var items = dropdown.getElementsByClassName('item');
  if(e.type =='keydown') { //or it'll increment itemCounter twice on keyup and keydown
    if(itemCounter < items.length-1) 
      itemCounter++;
  }
  if(itemCounter<items.length)
  { items[itemCounter].style.backgroundColor = "#f9f9f9";
    items[itemCounter].style.color = "#29549b";
  }
}

/* ---- MOVE HIGHLIGHT UP ---- */
function moveUp(e) {
  e.preventDefault();
  var dropdown = document.getElementsByClassName('dropdown')[0];
  var items = dropdown.getElementsByClassName('item');
  if(e.type =='keydown') { //or it'll decrement itemCounter twice on keyup and keydown
    if(itemCounter > 0) 
      itemCounter--;
  }
  if(itemCounter > -1) {
    items[itemCounter].style.backgroundColor = "#f9f9f9";
    items[itemCounter].style.color = "#29549b";
  }
}

/* ---- CHECK SUBSTRING OF STRING  ---- */
String.prototype.contains=function(str){
  if (this.indexOf(str)!==-1)
    return true;
  else
    return false;
}
/* ---- IS CHARACTER CHECKER  ---- */
function isChar(evt) {
  if(typeof evt.which == "number" && evt.which > 0)
    return !evt.ctrlKey && !evt.metaKey && !evt.altKey && evt.which != 8 && evt.which !=9;
}
