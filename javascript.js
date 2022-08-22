document.getElementById('grow').addEventListener('keyup',keyupfun)
function keyupfun()
{
  var a=document.querySelectorAll('li');
  for(var i=0; i<a.length;i++)
  {
    var val=document.getElementById('grow').value.toLowerCase();
    if(a[i].innerHTML.toLowerCase().indexOf(val)!=-1)
    {
      a[i].style.display='block';
    }
    else{
      a[i].style.display='none';
    }
  }
}