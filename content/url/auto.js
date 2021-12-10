//宽带拨号
try_catch_if(
    function xx(){
        setTime1(function xx(){ //0.1秒后执行
            $('#network')[0].click(); //选择上网设置
            setTime10( //1秒后执行
                function xx(){
                    $('#wanPPPoEUser').val('13037660696') //让输入框为此账号
                }
            )
        });
    },
    function xx(){
        return currentUrl=="http://192.168.0.1/index.html"
    }
);
