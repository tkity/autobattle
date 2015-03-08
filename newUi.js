(function () {
	var doc = document;
    if(!doc.getElementById("turu")) {
		var jq = doc.createElement("script");
    	jq.src = "http://img.tantora.jp/sp_st/js/kachikomi/jquery-1.10.1.min.js";
    	jq.onload = function() {
			var lib = doc.createElement("script");
    		lib.src = "http://img.tantora.jp/sp_st/js/battle/lib.min.js";
    		doc.head.appendChild(lib);
    		
    		var f = doc.createElement("script");
    		f.src = "http://192.168.11.4:18080/tantora/md5.js";
    		f.onload = function() {
    			var m = doc.createElement("script");
    			m.src = "http://192.168.11.4:18080/tantora/t.js";
    			doc.head.appendChild(m);
    		};
    		doc.head.appendChild(f);
    	};
    	doc.head.appendChild(jq);

    	var a = document.createElement("link");
        a.rel = "stylesheet";
        a.href = "http://img.tantora.jp/sp_st/css/battle/common.min.css?1";
        a.media = "screen";
        document.head.appendChild(a);
        a = document.createElement("link");
        a.rel = "stylesheet";
        a.href = "http://img.tantora.jp/sp_st/css/battle/lib.min.css?1";
        a.media = "screen";
        document.head.appendChild(a);
        var b = document.createElement("link");
        b.rel = "stylesheet";
        b.href = "http://img.tantora.jp/sp_st/css/battle/common_browser.min.css?1";
        b.media = "screen";
        document.head.appendChild(a);
        b = document.createElement("link");
        b.rel = "stylesheet";
        b.href = "http://img.tantora.jp/sp_st/css/smartphone.css?1";
        b.media = "screen";
        document.head.appendChild(a);
    }else{
        alert("既に起動しています");
    }
})();

//var mainui ='<div id="turu"><div class="title-covor" style="margin: 5px 0;"><div class="title-inner" style="background-color: #414141;">単車の鶴 Ver1.0</div></div><div class="title-inner" style="background-color: #eb6100;">設定</div><div style="background-color: #222222; padding: 2px 0;" class="aligncenter"><form id="autoItem" name="sendItem" style="margin:0.6em 0;"><div class="setContainer"><div class="set"><lable style="font-weight:bold;color:#f8f8ff;" class="stitle" for="itemspirit" >気合回復: <br></lable><select id="itemspirit"><option value="378" selected="selected">タバコ</option><option value="1721">レッドヘブン</option>  </select></div><div class="set">  <lable style="font-weight:bold;color:#f8f8ff;" class="stitle" for="itemstamina" >体力回復: <br></lable>  <select id="itemstamina">    <option value="184" selected="selected">しやがれ</option>    <option value="1719">牛乳</option>  </select></div><div class="set">  <lable style="font-weight:bold;color:#f8f8ff;" class="stitle" for="itemhp" >HP回復: <br></lable>  <select id="itemhp">   <option value="68">焼きそば</option>    <option value="255" selected="selected">牛丼</option>    <option value="800">つけ麺</option>    <option value="1722">ピッツァ</option>    <option value="2895">焼き飯</option>  </select></div></div><hr class="light" style="margin: 0.3em 0;"><div id="enemy_rank" class="set" >  <label class="stitle" >Lv: <br></label><input type="radio" name="option1" id="option1_1" value="correct=minus"><label for="option1_1">弱</label><input type="radio" name="option1" id="option1_2" checked="" value=""><label for="option1_2">同</label><input type="radio" name="option1" id="option1_3" value="correct=plus"><label for="option1_3">強</label></div><hr class="light" style="margin: 0.3em 0;"><div id="enemy_rank" class="set" >  <label class="stitle" >防御特化野郎<br></label><input type="radio" name="option6" id="option6_1"><label for="option6_1">無視</label><input type="radio" name="option6" id="option6_2" checked><label for="option6_2">倒す</label></div><hr class="light" style="margin: 0.3em 0;"><div id="mode" class="set" ><label class="stitle" >バトルモード:<br> </label><input type="radio" name="option2" id="option2_1" checked value="default"><label for="option2_1">両方</label><input type="radio" name="option2" id="option2_2" value="ouen"><label for="option2_2">カチコミのみ</label><input type="radio" name="option2" id="option2_3" value="taiman"><label for="option2_3">タイマンのみ</label></div><hr class="light" style="margin: 0.3em 0;"><div id="yousei" class="set" ><label class="stitle" >カチコミ要請:<br> </label><input type="radio" name="option3" id="option3_1" checked><label for="option3_1">送る</label><input type="radio" name="option3" id="option3_2"><label for="option3_2">送らない</label></div><hr class="light" style="margin: 0.3em 0;"><div id="kyuuenji" class="set" ><label class="stitle" >カチコミ救援時: <br></label><input type="radio" name="option4" id="option4_1"><label for="option4_1">参加のみ</label><input type="radio" name="option4" id="option4_2"><label for="option4_2">寸止め</label><input type="radio" name="option4" id="option4_3" checked><label for="option4_3">鬼叩き</label></div><hr class="light" style="margin: 0.3em 0;"><div id="explimitter" class="set" ><label class="stitle" >EXPリミッター： <br></label><input type="radio" name="option7" id="option7_1"value="90"><label for="option7_1">90%</label><input type="radio" name="option7" id="option7_2" value="99"><label for="option7_2">99%</label><input type="radio" name="option7" id="option7_3" value="0" checked><label for="option7_3">無効</label></div><hr class="light" style="margin: 0.3em 0;"><div class="set"><label class="stitle">自動一時停止: <br></label><output id="setTimer">1時間後</output><input type="range" name="option5" id="option5" min="0" max="6" step="1" value="1"></div><hr class="light" style="margin: 0.3em 0;"><div id="autostart" class="aligncenter"><a class="common-button">スタート</a></div></div><hr class="gold" style="margin: 0.3em 0;"></form><style>.setContainer{  padding-left:10px;  padding-right:10px; display: flex;  display: -webkit-flex; /* Safari */ -webkit-justify-content: space-around; /* Safari */ flex-direction: row-reverse;  justify-content: space-between;}select {  margin: 0px auto 10px auto;  border-radius: 10px;  position: relative;  padding: 0px;  background-color: #333;width:6em;color:red;}.set{  color:#a9a9a9;  padding-top:10px; padding-bottom:10px;}form lable .set {  display:block !important; float:left !important;}label.stitle { display:block;  color:#f8f8ff;  font-weight:bold; margin-bottom:5px;  }label{ font-size: 14px;  margin-right:0.3em; }input[type="range"]{ margin:auto;  display:block;  width:90%;  height:100%;}input[type="radio"]:checked + label {  color:deepskyblue;}output {   color:deepskyblue;}#autostart .common-button{ width:10em; margin-bottom: -10px;}</style></div>'
