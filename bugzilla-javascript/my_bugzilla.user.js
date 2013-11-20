//variables
//配置项们
//步骤序列号与内容的分隔符
var seqSep = ">";
//各部分内容分隔
var conSep = "\n\n";
//各部分名称
var conName = new Array("步骤:\n1","期望:\n1","实际:\n1","补充说明:\n1");
var conLen = conName.length;
conName = conName.reverse();
//产品和版本
var curProduct =new Array ("","")



//{{{ main 主功能控制区
var url = window.location.href;
TopSearches();
if (url.indexOf("enter_bug.cgi?product") >= 0){
  //新bug页面
  New_Bug();
}
else if (url.indexOf("show_bug.cgi?id=") >= 0 || url.indexOf("process_bug.cgi") >= 0 || url.indexOf("attachment.cgi") >=0 ){
  //旧bug页面
  Old_Bug();
  Bottom_Summary();
}
else if (url.indexOf("buglist.cgi") >= 0){
  //bug列表
  TopOperation();
}
//}}}

/*****************************************************/
//functions
function New_Bug(){
  console.log("a New Bug");
  x = document.getElementById('expert_fields_controller');
  if (x != null && x.innerHTML.indexOf('显示') >= 0 )
  {
    x.click();
  }
  if (url.indexOf(encodeURI(curProduct[0])) >=0){
    Default_Version();
  }
  Bug_Module("");
  Bug_Auto();
  Auto_Pic_Desc();
  IsBugEmpty();
  console.log(encodeURI(curProduct[0]));
}

//{{{ 判断bug是否为空
function IsBugEmpty(){
  console.log('in commentIsEmpty');
  btnSubmit = document.getElementById('commit');
  btnSubmit.onclick = function commentIsEmpty(event){
    txtComment = document.getElementById('comment');
    realComment = txtComment.value;
    for (i in conName){
      //去除模板内容
      realComment = realComment.replace(conName[i],'');
    }
    //去除序号分隔符
    realComment = realComment.replace(new RegExp(seqSep,g), '');
    //去除数字
    realComment = realComment.replace(/\d/g, '');
    //去除换行
    realComment = realComment.replace(/\n/g, '');
    //console.log(realComment);
    //判断真实内容不为空
    if (realComment == '')
    {
      alert('请填写描述');
      return false;
    }
    // 子产品不为空
    selectComponent = document.getElementsByName('component')[0];
    if (selectComponent.value == ''){
      alert('请选择一个子产品');
      return false;
    }
    return true;
  }
}
//}}}

function Default_Version(){
  console.log("Select Default_Version");
  v = document.getElementsByName('version')[0];
  dVi = getCurVersionIndex(v, curProduct[1]);
  v.selectedIndex = dVi;
}

function Bug_Module(module)
{
  var Demo = conName[conLen-1] + seqSep;
  x = document.getElementById('comment');
  if (x.value == "")
  {
    console.log("Add Prefix");
    x.value=Demo;
  }
}
function Auto_Pic_Desc()
{
  x = document.getElementById('data');
  if (x != null){
    x.onchange = function onchange(){
      console.log("Add Pic Description");
      y = document.getElementById('description');
      tmp = this.value.split('\\');
      c = tmp.length;
      y.value = tmp[c-1].split('.')[0];
    }
  }
}
function Old_Bug()
{
  console.log("an Old Bug");
  Old_Auto_Prefix();
  Auto_Pic_Desc();
}

function Old_Auto_Prefix()
{
  status_select = document.getElementById('bug_status');
  status_select.onchange=function onchange()
  {
    console.log("Add old Bug Prefix");
    comment_textarea = document.getElementById('comment');
    if ( this.value == "REOPENED" ){
      tmp = confirm("REOPEN(确定) 还是 补充(取消) ?","REOPEN","补充");
      if (tmp) {
        res = "REOPENED.";
      }else{
        res= "补充:";
      }
      comment_textarea.value = res + '\n' + comment_textarea.value;
    }else{
      comment_textarea = document.getElementById('comment');
      comment_textarea.value = this.value + '.\n' + comment_textarea.value;
    }
  }

  comment = document.getElementById('comment');
  comment.onkeyup = function onkeyup(){
    console.log("Delete Invalid Prefix");
    x = document.getElementById('bug_status');
    v = this.value;
    lines = v.split('\n');
    lcount = lines.length;
    if (event.keyCode == 8){
      last = lines[lcount - 1];
      last = last.replace("\n","");
      console.log(last);
      token = false;
      if ( last.indexOf("补充") >= 0 ){
        token = true;
      }
      for (i in x.options) {
        if ( last.indexOf(x[i].value) >= 0 ){
          token = true;
        }
      }
      if (token){
        this.value = v.replace(last, "");
      }
    }
  }
}

///////
function Bug_Auto()
{
  x = document.getElementById('comment');
  x.onkeyup=function onkeyup(){
    v = this.value;
    t = v.split(conSep);
    l = t.length;
    lines = v.split('\n');
    // 当按下的是回车键时
    if(event.keyCode == 13)
    {
      //按内容分隔出块
      //最后一行为空时,添加下一个内容标题
      if (t[l-1] == ""){
        for (i=0;i<conLen;i++){
          if (v.indexOf(conName[i]) >= 0){
            if (i != 0){
              console.log("Add" + conName[i-1].split('\n')[0]);
              this.value = v + conName[i-1] + seqSep;
            }
            return false;
          }
        }
        //若不是空,处理内容内部.
      }else{
        last = lines[lines.length-2];
        t1 = last.split(seqSep);
        if (t1[t1.length-1] == "" && last != "" && parseInt(last) != 1){
          this.value = v.replace(last+"\n","");
        }else{
          next = parseInt(last) + 1;
          if (isNaN(next)){
            next = "";
          }else{
            next = next + seqSep;
          }
          console.log("Add Sequence");
          //this.value = v + next;
          tmpValue = strReverse(this.value);
          this.value = strReverse(tmpValue.replace('\n', strReverse('\n'+ next)));
        }
        return false;
      }
    }
    //当按键是退格键时
    else if (event.keyCode == 8) {
      res = false;
      //console.log("press BackSpace");
      for (i in conName){
        tmp = conName[i].trim();
        if (tmp.indexOf(t[l-1]) >= 0){
          res = true;
          break;
        }
      }

      if (res && t[l-1] != ""){
        console.log("Delete Prefix");
        this.value = v.replace("\n" + t[l-1], "");
        return;
      }
      if (!res){
        this.value = deleteSerialNum(v, seqSep);
      }
      //console.log(res);
    }
  }
}

function getCurVersionIndex(select, expvalue){
  var i = 0;
  for (x in select.options){
    if (select.options[x].value == expvalue){
      return i;
    }
    i += 1;
  }
}

//{{{ 删除数字前缀
function deleteSerialNum(text, seperator){
  console.log("Delete Sequence");
  tmp = text.split("\n");
  lasttmp = tmp[tmp.length-1];
  //console.log(lasttmp)
  try {
    //分隔符前为纯数字,且不为1
    res = (eval(lasttmp) == parseInt(lasttmp)) && parseInt(lasttmp) != 1;
    //console.log(res);
  }catch (err){
    res = false;
  }
  //console.log(tmp);
  if (res){
    //倒序处理
    textRe = strReverse(text);
    //console.log(textRe)
    //替换最后一个匹配的序号
    textRe = textRe.replace(strReverse(lasttmp) + "\n", "");
    text = strReverse(textRe);
  }
  return text.trim();
}
//}}}

//{{{将底部常用搜索复制到顶部
function TopSearches(){
  console.log('copy My-Search upto the Top');
  headDiv = document.getElementById('header');
  headLinks = document.getElementsByClassName('links')[0];
  headDiv.removeChild(headLinks);
  bottomLinks = document.getElementById('useful-links');
  bottomLinksCopy = bottomLinks.cloneNode(true);
  bottomLinksCopy.className = 'links';
  headDiv.appendChild(bottomLinksCopy);
  headDiv.id = 'footer';
}
//}}}

//{{{将底部常用操作复制到顶部
function TopOperation(){
  console.log('copy Operations-For-BugList upto the Top');
  x = document.getElementsByTagName('table');
  x1 = x[x.length-1].cloneNode(true);
  y = document.getElementsByClassName('search_description')[0];
  y.appendChild(x1);
}
//}}}

//{{{将bugSummary复制到底部
function Bottom_Summary(){
  console.log('copy Summary downto the Bottom');
  x = document.getElementsByClassName('bz_alias_short_desc_container edit_form')[0];
  y = document.getElementsByName('changeform')[0];
  z = x.cloneNode(true);
  z1 = z.getElementsByTagName('small')[0];
  z1.remove();
  y.appendChild(z);
}
//}}}

//{{{倒序字符串
function strReverse(str){
  resStr = '';
  for (i in str){
    resStr += str[str.length-1-i];
  }
  return resStr;
}
//}}}
