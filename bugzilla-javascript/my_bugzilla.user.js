﻿//variables
//配置项们
//步骤序列号与内容的分隔符
var seqSep = ">";
//各部分内容分隔
var conSep = "\n\n";
//各部分名称
var conName = new Array("步骤:\n","期望:\n","实际:\n","补充说明:\n");
var conLen = conName.length
conName = conName.reverse()



//main 主功能控制区
var url = window.location.href;

if (url.indexOf("enter_bug.cgi?product") >= 0){
    New_Bug();
}
else if (url.indexOf("show_bug.cgi?id=") >= 0 || url.indexOf("process_bug.cgi") >= 0){
    Old_Bug();
}else if (url.indexOf("attachment.cgi") >= 0){
    Auto_Pic_Desc();
}

/*****************************************************/
//functions
function New_Bug(){
    //New_Auto_Prefix();
    Bug_Module("");
    Bug_Auto();
    Auto_Pic_Desc();
}
function New_Auto_Prefix(){
    x = document.getElementsByName('component')[0];
    x.onchange=function onchange(event){
        y = document.getElementsByName('short_desc')[0];
        //alert(x.value);
        set_assign_to();
        y.value = this.value + ",";
    }
}
function Bug_Module(module)
{
    var Demo = conName[conLen-1] + "1" + seqSep;
    // + "\n" + module + "\n2.\n3.\n\n期望:\n\n\n实际:\n\n\n\其它:\n";
    x = document.getElementById('comment');
    if (x.value == "")
    {
        x.value=Demo;
    }
}
function Auto_Pic_Desc()
{
    x = document.getElementById('data');
    x.onchange = function onchange(ev)
    {
        y = document.getElementById('description');
        tmp = this.value.split('\\');
        c = tmp.length;
        y.value = tmp[c-1].split('.')[0];
    }
}
function Old_Bug()
{
    Old_Auto_Prefix();
}

function Old_Auto_Prefix()
{
    status_select = document.getElementById('bug_status');
    status_select.onchange=function onchange()
    {
        comment_textarea = document.getElementById('comment');
        comment_textarea.value = this.value + '.\n' + comment_textarea.value;
    }
}

///////
function Bug_Auto()
{
    x = document.getElementById('comment');
    x.onkeyup=function onkeyup(){
        // 当按下的是回车键时
        if(event.keyCode == 13)
        {
            v = this.value;
            //按内容分隔出块
            t = v.split(conSep);
            l = t.length;
            //最后一块为空时,添加下一个内容标题
            if (t[l-1] == ""){
                for (i=0;i<conLen;i++){
                    if (v.indexOf(conName[i]) >= 0){
                        if (i != 0){
                            this.value = v + conName[i-1];
                        }
                        return false;
                    }
                }
            //若不是空,处理内容内部.
            }else{
                t = v.split("\n");
                last = t[t.length-2];
                t1 = last.split(seqSep);
                if (t1[t1.length-1] == "" && last != ""){
                    this.value = v.replace(last+"\n","");
                }else{
                    next = parseInt(last) + 1;
                    if (isNaN(next)){
                        next = "";
                    }else{
                        next = next + seqSep;
                    }
                    this.value = v + next;
                }
                return false;
            }
        }
    }
}