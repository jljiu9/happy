//定时嵌套函数
function setTime1(dosomething){setTimeout(function (){dosomething();},100);}
function setTime2(dosomething){setTimeout(function (){dosomething();},200);}
function setTime3(dosomething){setTimeout(function (){dosomething();},300);}
function setTime6(dosomething){setTimeout(function (){dosomething();},600);}
function setTime10(dosomething){setTimeout(function (){dosomething();},1000);}
function setTime20(dosomething){setTimeout(function (){dosomething();},2000);}
//setTime(1,2,3,6,10,20)
//
//
//捕获异常函数
function try_catch(dosothing){
    try{
        dosothing();
    }catch{
        //console.log('出现异常！');
    }
}
function try_catch_if(dosothing,trueif){ //加了if判断条件
    try{
        if(trueif()){
            dosothing();
        }else{
            //console.log('if条件不满足')
        }
    }catch{
        //console.log('出现异常！');
    }
}
//要执行的函数
// function dosothing(){
//     m = 'jljiu';
//     m += 00;
//     console.log(m)
// }
//函数调用
// trycatch(dosothing);
// try_catch_if(
//     dosothing,
//     function xx(){
//         return 1
//     }
// );
