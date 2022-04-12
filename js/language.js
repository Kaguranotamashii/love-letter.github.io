//中日双语切换
document.getElementById("chinese").onclick = function () {
    var chinese = document.getElementById("xiharuo");
    chinese.innerHTML =
      "「我们的情人不过是随便借个名字<br>\
          &emsp;&emsp;&emsp;用幻想吹出来的肥皂泡.....<br>\
          &emsp;&emsp;&emsp;把信拿去吧，你可以使假戏成真。」<br>\
          「我对爱情本来就是无病呻吟 漫无目的的吐露爱情<br>\
          &emsp;&emsp;&emsp;现在这些漂泊不定的鸟儿有地方栖息了」<br>\
          「来，把信拿去<br>\
          &emsp;&emsp;&emsp; 由于不是出自真心，话就说得格外好听！」<br>\
          「拿去吧，就这么办！」<br>\
      「今日我便要飞往那洁白的月世界……<br>\
      &emsp;&emsp;&emsp;即使不借助什么机器，我也能一跃而就。<br>\
      &emsp;&emsp;&emsp;没错……<br>\
      只有那个月之世界……才是为你我而造的天堂……」<br>\
          <br>\
          ————　罗斯丹 《西哈诺·德·贝热拉克》\
     ";
    document.getElementById("xiharuo").style.fontSize = 39;
    // document.getElementById("xiharuo").style.fontFamily = "方正楷体";
  };
  document.getElementById("japanese").onclick = function () {
    var japanese = document.getElementById("xiharuo");
    japanese.innerHTML =
      "「僕たちは、ただ名ばかりで<br>\
          &emsp;&emsp;&emsp;シャボン玉のようにふくらんでしまった.....<br>\
          &emsp;&emsp;&emsp; そんな空想の恋人に恋い焦がれている.....」<br>\
          「さぁ、君、取りたまえ。<br>\
          &emsp;&emsp;&emsp;この空想を、そして本物に変えるのは君だ」<br>\
          「僕は恋の嘆きとか書き散らかしたけど<br>\
          &emsp;&emsp;&emsp;彷徨う鳥の留まるのを君は見ることが出来る人なんだ」<br>\
          「さぁ、取りたまえ。<br>\
          &emsp;&emsp;&emsp;実はないだけ雄弁だと... <br>\
          &emsp;&emsp;&emsp;君にもわかる日が来るから」<br>\
          「さぁ、取りたまえ！」<br>\
          <br>\
          ————　シラノ・ド・ベルジュラック\
     ";
    document.getElementById("xiharuo").style.fontSize = 39;
    //document.getElementById("xiharuo").style.fontFamily = "白舟行書Pro";
  };
  