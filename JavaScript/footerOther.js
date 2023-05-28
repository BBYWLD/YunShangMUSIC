// 歌词详情

let btn = document.querySelector("label.song_tip");
let detail = document.querySelector("div#song_detail");

btn.addEventListener('click',()=>{
    let staus = document.querySelector("#song_tip").checked;
    if(staus){        
        detail.style.marginTop = '100%';
        detail.style.opacity = "0";
    }else{
        detail.style.marginTop = "0";
        detail.style.opacity = "1";
        btn.title = "退出沉浸";
    }
})