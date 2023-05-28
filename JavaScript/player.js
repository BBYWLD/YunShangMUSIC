/**
 * 歌曲数据：歌词、路径、歌手、歌名、封面
 */
var songData = [
    {
        name: '不遗憾',
        singer: '李荣浩',
        source: '../resource/song/不遗憾.mp3',
        img: '../resource/img/不遗憾.webp',
        lyric: '[00:00.000] 作词 : 李荣浩[00:01.000] 作曲 : 王晓东@时光列车TimeExpress[00:03.39]编曲 : 李荣浩[00:04.92]制作人 : 李荣浩[00:29.94]终于看到[00:34.35]你穿着想要的 那种婚纱[00:41.60]你右手接过 那捧花[00:43.92]从今后 换成他 保护你 照顾你[00:50.42]不论贫穷富裕[00:54.17]不论生老病疾[00:58.82]以后路上[01:03.24]知道你会过的 有模有样[01:09.92]我不会中途 先退场[01:12.71]我要等那一幕[01:16.11]我知道我会哭[01:19.78]也知道我哭是为给你祝福[01:26.23]爱过了 就不遗憾[01:30.12]有什么 好遗憾[01:33.86]今后提起 你的姓名 谈笑我也可以[01:41.40]想到曾经在一起[01:45.28]争吵欢笑都发自内心[01:51.17]爱情不止一种定义[01:55.05]错过了 也不遗憾[01:58.77]只要是 好答案[02:02.25]别回头看 回头太难 你要变得勇敢[02:10.01]这一辈子我欠你[02:13.85]如果来生还可能继续[02:19.85]再用尽一生找寻 你在哪里[02:32.16]以后路上[02:36.66]知道你会过的 有模有样[02:43.14]我不会中途 先退场[02:45.79]我要等那一幕[02:49.38]我知道我会哭[02:52.89]也知道我哭是为给你祝福[02:59.54]爱过了 就不遗憾[03:03.09]有什么 好遗憾[03:06.65]今后提起 你的姓名 谈笑我也可以[03:14.23]想到曾经在一起[03:18.38]争吵欢笑都发自内心[03:24.19]爱情不止一种定义[03:28.16]错过了 也不遗憾[03:31.86]只要是 好答案[03:35.46]别回头看 回头太难 你要变得勇敢[03:43.12]这一辈子我欠你[03:47.00]如果来生还可能继续[03:52.83]再用尽一生找寻 你在哪里[04:15.02]错过了 也不遗憾[04:18.47]只要是 好答案[04:22.05]别回头看 回头太难 你要变得勇敢[04:29.33][04:33.62]如果来生还可能继续[04:39.35]再用尽一生找寻 你在哪里[05:07.55]监制 : 郭栋楠@青春光线[05:07.61]吉他 : 李荣浩[05:08.14]贝斯 : 李荣浩[05:08.67]鼓 : 李彦超[05:09.10]弦乐编写 : 李荣浩[05:09.84]弦乐 : 国际首席爱乐乐团[05:09.90]和音 : 李荣浩[05:10.43]录音 : 李荣浩[05:10.96]混音 : 李荣浩[05:11.49]音乐制作助理 : 青格乐[05:12.44]录音工作室 : 北京一样音乐录音室[05:12.93]混音工作室 : 北京一样音乐录音室[05:13.41]母带后期制作人 : 李荣浩[05:13.47]母带后期处理工程师 : 周天澈[05:13.74]母带后期处理录音室 : Studio 21A[05:13.91]音乐统筹 : 李崇碧 / 周瑶[05:13.97]版权运营 : 王家怡 / 李一凡@光合世纪[05:14.67]OP : 北京梦织音传媒有限公司 / 北京一样音乐文化传播有限公司[05:15.53]SP : 天津光合世纪文化有限公司[05:15.91]经纪公司 : 北京一样音乐文化传播有限公司[05:16.81]经纪人 : 何晓菁[05:17.45]企宣 : 陈冰雪[05:17.98]执行经纪 : 於政文[05:18.72]艺人助理 : 谢利园[05:19.46]妆发 : 李纬'
    }
]

// 初始化
init = () => {
    /**
     * 导入歌词，做初始化页面
     *  剔除时间，留下歌词
     *      正则匹配
     */
    let result = '';
    let left = songData[0].lyric.split('[');
    left.forEach((current) => {
        let right = current.split(']');
        let lyric = right[1];
        let tRight = right[0].split('.');
        let tim = tRight[0].split(':');
        let time = tim[0] * 60 + parseInt(tim[1]);
        if (lyric) {
            result += '<p id=t' + time + '>' + lyric + '</p>';
        }
        $('.infoWrap .songInfo').innerHTML = result;
    })
    // 进度条
}

window.addEventListener('load', () => {
    /**
     * 作者：chao
     * 功能：获取DOM节点
     */
    $ = (selector) => {
        return document.querySelector(selector);
        // return selector.substring(0,1) == '.' ? document.getElementsByClassName(selector.substring(1)) : document.getElementById(selector.substring(1));
    }

    /**
     * 功能：歌曲封面的旋转和暂停
     */
    let myRote = (() => {
        let deg = $('.iconWrap img').style.transform.length;    //旋转角度
        let intervalId = null;
        rote = () => {
            $('.iconWrap img').style.transform = 'rotate(' + deg + 'deg' + ')';
            deg += 0.5;
        }

        start = () => {
            if (intervalId == null) {
                rote();
                intervalId = setInterval(rote, 100);
            }
        }

        stop = () => {
            clearInterval(intervalId);
            intervalId = null;
        }

        reset = () => {
            stop();
            deg = 0;
            $('.iconWrap img').transform = 'rotate(' + 0 + 'deg' + ')';
        }

        return { startRote: start, stopRote: stop, resetRote: reset }
    })();

    // 播放
    let onOff = true;// 标记状态
    var timer = null;
    let totail = null;
    $('.controlBtn').addEventListener('click', () => {
        if (onOff) {
            $('#songing').play();   //点击播放
            myRote.startRote();
            onOff = !onOff;
            $('.controlBtn').setAttribute('class', 'controlBtn playBtn');
            timer = setInterval(Progress, 100);
            totail = $('#songing').duration;
            // console.log($('#songing').currentTime);
        } else {
            $('#songing').pause();  //点击暂停
            myRote.stopRote();
            onOff = !onOff;
            $('.controlBtn').setAttribute('class', 'controlBtn pauseBtn');
            clearInterval(timer);
        }
    })

    // 歌曲进度条
    Progress = () => {
        // let time = $('#songing').currentTime;   //当前播放时间
        // let totail = $('#songing').duration;    //总时长
        let totailLength = $('.slipBar').offsetWidth;   //总路径
        // let before = window.getComputedStyle($('.slipBtn'),':before');
        let before = $('.slipBtn');

        let proportion = $('#songing').currentTime / $('#songing').duration;
        $('.playBar').style.width = ~~(proportion * totailLength) + 'px';
        $('.slipBtn').style.left = ~~(proportion * totailLength) - 4 + 'px';
        before.setAttribute('data-current', ~~($('#songing').currentTime));
    }

    /**
     * 功能：进度条拖拽
    *  1.计算拖拽长度
     */
    $('.slipBtn').addEventListener('mousedown', () => {
        $('.slip_wrap').onmousemove = (e) => {
            let x = e.clientX;
            let location = x - $('.slipBtn').offsetParent.offsetParent.offsetLeft - 48;
            $('.slipBtn').style.left = location + 'px';
            $('.playBar').style.width = location + 'px';

            let bli = parseInt(getComputedStyle($('.slipBtn')).left) / parseInt($('.slipBar').offsetWidth);
            let c = bli * $('#songing').duration;
            Progress();
            // console.log(bli);
            $('#songing').currentTime = c;
            // console.log(bli);
        }
        $('.slip_wrap').onmouseup = () => {
            $('.slipBtn').onmousedown = null;
            $('.slip_wrap').onmousemove = null;
        }
    })

    /**
     * 歌词同步播放
     *  当前时间：歌词提供的时间
     */
    let index = 0;
    var num = 0;
    $('#songing').addEventListener('timeupdate', () => {
        let cur = parseInt($('#songing').currentTime);
        // console.log(cur);
        if ($(`#t${cur}`)) {
            $(`#t${index}`).removeAttribute('class');
            index = cur;
            $(`#t${cur}`).setAttribute('class', 'current');
            // 滚动
            console.log('之前'+num);
            if(document.querySelectorAll('.songInfo p')[num+3].id == `t${cur}`){
                $('.songInfo').style.transform = 'translateY(' + -60 * num + 'px)';
                num++; 
                console.log('加厚'+num);
            }
            console.log('当前时间'+cur,'最后'+num);
            // console.log(document.querySelector('.songInfo .current').id);
        }

    }, false)

    //加载初始页面
    init();
})