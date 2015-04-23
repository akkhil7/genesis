var data=
{
  "users":
[
{"id":5,"email":"akhilr94@gmail.com","username":"akhil"},
{"id":6,"email":"wowowowow@gmail.com","username":"hello"},
{"id":7,"email":"asdkaskdj@a.com","username":"helloozzz"},
{"id":8,"email":"wow@gmail.com","username":"HELLO"}
]
}
data=data.users;
String.prototype.contains=function(str){
  if (this.indexOf(str)!==-1)
    return true;
  else
    return false;
}
window.addEventListener('load', function(){
  var box = document.getElementById('input');
  var str="";
  box.addEventListener('keypress', function(event){
    var ch = String.fromCharCode(event.keyCode);
    str+=ch;
    var result=[];
      for(var i=0;i<data.length;i++)
      { user=data[i];
        if(user.username.contains(str) || user.email.contains(str) )
        {
        result.push(user);
        }
      }
    console.log(result);
  })
});