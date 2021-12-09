//QQ注册邮箱
let qq_domain ="https://" + document.domain;$('.imglogo.pointer.skinlogo').attr('href',qq_domain);//设置QQ邮箱跳转
let qq_url = document.URL;
function Qframe(){
    var extra = "target=cancellation_alias&alias=";
        try{
            qq_url.match(/target=cancellation_alias\&alias=/i)[0]=="target=cancellation_alias&alias=";
        }catch(err){
            var shezhi = $('#frame_html_setting');
            var s_href = shezhi.attr('href');
            shezhi.html('<span class="hh">修改中...</span>');
            var aim = "/cgi-bin/setting4?fun=list&acc=1&sid="+s_href.match(/\?sid=(.*?)\&fun/)[1];
            var xiugai = $('.hh');
            xiugai.click(function(){
                $(location).attr('href', aim);
            });
            xiugai.click();
        }
};
setTimeout(function (){
    try_catch_if(
        Qframe,
        function xx(){
            return qq_url.match(/https:\/\/mail.qq.com\/cgi-bin\/frame_html\?sid=/i)[0]=="https://mail.qq.com/cgi-bin/frame_html?sid="
        }
    );
},300);
//创建一个新的邮箱
function setmail(){
    var settingDiv = $('.settingtd.settingDiv:nth-child(5) .btn_gray')[0];
    var msg = jQuery('.toolbg.msg_info *');
    var regbody = jQuery('.regbody *');
    var phtml = jQuery('.regbody *:eq(10)');
    setTime3(function xx(){
        try_catch_if(
            function xx(){
                settingDiv.click();
            },
            function xx(){
                return settingDiv.innerHTML=="注册VIP邮箱帐号..."
            }
        );
        try_catch_if(
            function xx(){
                msg[20].click();
            },
            function xx(){
                return msg[2].innerHTML=="第一步: 了解vip邮箱帐号 — 注册vip邮箱帐号"
            }
        );
        try_catch_if(
            function xx(){
                jQuery(regbody[15]).val(rdWord);
                regbody[36].click();
            },
            function xx(){
                return regbody[11].innerHTML=="第二步: 注册邮箱帐号 — 注册vip邮箱帐号"
            }
        );
        try_catch_if(
            function xx(){
                var i = regbody[14].innerHTML;
                jQuery(regbody[18]).val(i);
                regbody[35].click();
            },
            function xx(){
                return regbody[9].innerHTML=="第三步: 确认你要注册的邮箱帐号 — 注册vip邮箱帐号"
            }
        );
        try_catch_if(
            function xx(){
                //var alert_email = regbody[1334].innerHTML;
                //alert_email = alert_email.match(/我新注册了QQ邮箱的VIP帐号：(.*?)，常联系！/)[1];
                $('input[value="跳过这一步"]').click();
            },
            function xx(){
                return regbody[5].innerHTML=="第四步: 注册成功并告诉好友 — 注册vip邮箱帐号"
            }
        );
        try_catch_if(
            function xx(){
                var yuan = phtml.html();
                console.log(phtml.html());
                phtml.html('<input type="text" readonly class="addinput">');
                $('.addinput').attr('value',yuan);
                $(".addinput").focus(function(){
                    $('.addinput').select();
                    document.execCommand("Copy");
                });
            },
            function xx(){
                return jQuery('.regbody *:eq(4)').html()=="完成：成功注册vip邮箱帐号"
            }
        );
        try_catch(
            function xx(){
                //为验证码设置自动复制
                var verificationCode = jQuery('#mailContentContainer *:eq(6)');
                var yuanCode = verificationCode.html();
                console.log(verificationCode.html());
                verificationCode.html('<input type="text" readonly class="addinput" style="width:45px;outline:none;">');
                $('.addinput').attr('value',yuanCode);
                $(".addinput").focus(function(){
                    $('.addinput').select();
                    document.execCommand("Copy");
                    getSelection().removeAllRanges();
                });
            }
        );
    });
}
setmail();
//QQ邮箱注销
setTime3(function(){
    try_catch(
        function xx(){
            var email = $('div .vBorder tbody tr:nth-child(4) td:nth-child(2)').html();
            if(email=='VIP邮箱&nbsp;'){
                var current_mail = $('div .vBorder tbody tr:nth-child(4) td:nth-child(1)').html();
                current_mail = current_mail.replace(/\&nbsp\;/,'');
                applydelalias(current_mail);
            };
        }
    );
    try_catch(
        function xx(){
            $('ol li .btn.wd3').click();
            $('#agreement').click();
            $('#btn_submit').click();
            var zhuxiao = $('.tpinfo b').html();
            zhuxiao = zhuxiao.replace(/\&nbsp\;/,'');
            $('#alias').val(zhuxiao);
            setTimeout(function (){
                $('#docancel').click();
            },200);
        },
    );
});
