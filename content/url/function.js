//定时嵌套函数
function setTime1(dosomething){setTimeout(function (){dosomething();},100);}
function setTime2(dosomething){setTimeout(function (){dosomething();},200);}
function setTime3(dosomething){setTimeout(function (){dosomething();},300);}
function setTime6(dosomething){setTimeout(function (){dosomething();},600);}
function setTime10(dosomething){setTimeout(function (){dosomething();},1000);}
function setTime20(dosomething){setTimeout(function (){dosomething();},2000);}
//setTime(1,2,3,6,10,20)
//