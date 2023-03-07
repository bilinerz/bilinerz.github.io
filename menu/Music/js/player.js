//创建一个音乐播放器的类 单例模式

class Player {
    constructor() { //类的构造函数
        //如果类已经有实例了，就返回这个实例
        if (Player.instance) return Player.instance;
        //如果没有实例化，就去构造一个实例
        return this.getInstance(...arguments);
    }

    //构建实例
    getInstance() {
        let instance = new PlayerCreator(...arguments);
        //让实例可以使用到Player的原型的属性方法
        // instance.__proto__=Player.prototype;
        // instance.constructor=Player;
        //把构建好的实例挂在Player类上
        Player.instance = instance;
        return instance;
    }
}

//歌曲信息
class Musics {
    //歌曲
    constructor() {
        this.songs = [{
                id: 1,
                title: '思故国',
                singer: '白雪',
                songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/思故國.mp3',
                imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/思故國.jpg'
            },
			{
			    id: 2,
			    title: '让生命去感受（钢琴伴奏）',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/让生命去感受（钢琴伴奏）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/让生命去感受.jpg'
			},
            {
                id: 3,
                title: '让生命去感受',
                singer: '关贵敏',
                songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/让生命去感受.mp3',
                imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/让生命去感受.jpg'
            },
			{
			    id: 4,
			    title: '女声独唱：九字真言',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/女声独唱：九字真言.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/女声独唱：九字真言.jpg'
			},
			{
			    id: 5,
			    title: '慈悲的礼物',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/慈悲的礼物.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/慈悲的礼物.jpg'
			},
			{
			    id: 6,
			    title: '我问那南来北往的大雁',
			    singer: '关贵敏',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/我问那南来北往的大雁.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/我问那南来北往的大雁.jpg'
			},
			{
			    id: 7,
			    title: '凡花落尽',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/凡花落尽.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/凡花落尽.jpg'
			},
			{
			    id: 8,
			    title: '大唐的记忆（伴奏）',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/大唐的记忆（伴奏）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/大唐的记忆（伴奏）.jpg'
			},
			{
			    id: 9,
			    title: '大唐的记忆',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/大唐的记忆.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/大唐的记忆.jpg'
			},
			{
			    id: 10,
			    title: '来归行',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/来归行.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/来归行.jpg'
			},
			{
			    id: 11,
			    title: '男声独唱：来归行',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/男声独唱：来归行.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/男声独唱：来归行.jpg'
			},
			{
			    id: 12,
			    title: '隐约想起来',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/隐约想起来.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/隐约想起来.jpg'
			},
			{
			    id: 13,
			    title: '快醒醒',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/快醒醒.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/快醒醒.jpg'
			},
            {
                id: 14,
                title: '梦醒',
                singer: '姜敏',
                songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/梦醒.mp3',
                imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/梦醒.jpg'
            },
			{
			    id: 15,
			    title: '在这难忘的时刻',
			    singer: '关贵敏',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/在这难忘的时刻.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/在这难忘的时刻.jpg'
			},
			{
			    id: 16,
			    title: '阳光下遇见你（伴奏）',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/阳光下遇见你（伴奏）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/阳光下遇见你（伴奏）.jpg'
			},
			{
			    id: 17,
			    title: '阳光下遇见你',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/阳光下遇见你.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/阳光下遇见你.jpg'
			},
			{
			    id: 18,
			    title: '正气歌（伴奏）',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/正气歌（伴奏）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/正气歌（伴奏）.jpg'
			},
			{
			    id: 19,
			    title: '为你而来',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/为你而来.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/为你而来.jpg'
			},
			{
			    id: 20,
			    title: '纯真（《震撼》电影主题曲）',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/纯真（《震撼》电影主题曲）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/纯真（《震撼》电影主题曲）.jpg'
			},
			{
			    id: 21,
			    title: '请与我比邻而坐',
			    singer: '关贵敏',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/请与我比邻而坐.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/请与我比邻而坐.jpg'
			},
			{
			    id: 22,
			    title: '与我同行',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/与我同行.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/与我同行.jpg'
			},
			{
			    id: 23,
			    title: '荷塘清音',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/荷塘清音.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/荷塘清音.jpg'
			},
			{
			    id: 24,
			    title: '当法呈现在面前（钢琴独奏）',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/当法呈现在面前（钢琴独奏）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/当法呈现在面前（钢琴独奏）.jpg'
			},
			{
			    id: 25,
			    title: '师恩颂（管弦乐伴奏）',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/师恩颂（管弦乐伴奏）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/师恩颂（管弦乐伴奏）.jpg'
			},
			{
			    id: 26,
			    title: '师恩颂 - 2006小合唱',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/师恩颂 - 2006小合唱.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/师恩颂 - 2006小合唱.jpg'
			},
			{
			    id: 27,
			    title: '找回真我（小提琴、钢琴、bE调）',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/找回真我（小提琴、钢琴、bE调）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/找回真我（小提琴、钢琴、bE调）.jpg'
			},
			{
			    id: 28,
			    title: '找回真我（笛、钢琴、D调）',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/找回真我（笛、钢琴、D调）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/找回真我（笛、钢琴、D调）.jpg'
			},
			{
			    id: 29,
			    title: '机缘莫误',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/机缘莫误.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/机缘莫误.jpg'
			},
			{
			    id: 30,
			    title: '天兵天将护法神',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/天兵天将护法神.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/天兵天将护法神.jpg'
			},
			{
			    id: 31,
			    title: '世界需要真善忍',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/世界需要真善忍.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/世界需要真善忍.jpg'
			},
			{
			    id: 32,
			    title: '最初的家园',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/最初的家园.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/最初的家园.jpg'
			},
			{
			    id: 33,
			    title: '群星报喜',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/群星报喜.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/群星报喜.jpg'
			},
			{
			    id: 34,
			    title: '人间清流天上来',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/人间清流天上来.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/人间清流天上来.jpg'
			},
			{
			    id: 35,
			    title: '让他们都知道（伴奏版）',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/让他们都知道（伴奏版）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/与我同行.jpg'
			},
			{
			    id: 36,
			    title: '女声独唱：寻求 (钢琴伴奏)',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/女声独唱：寻求 (钢琴伴奏).mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/女声独唱：寻求 (钢琴伴奏).jpg'
			},
			{
			    id: 37,
			    title: '女声独唱：梦里的期盼',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/女声独唱：梦里的期盼.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/女声独唱：梦里的期盼.jpg'
			},
			{
			    id: 38,
			    title: 'The Way Home（返本归真之路）',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/The Way Home（返本归真之路）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/The Way Home（返本归真之路）.jpg'
			},
			{
			    id: 39,
			    title: 'Saturday Morning（星期六早晨）',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/Saturday Morning（星期六早晨）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/Saturday Morning（星期六早晨）.jpg'
			},
			{
			    id: 40,
			    title: '我，义无反顾 - 伴奏',
			    singer: '九洲',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/我，义无反顾 - 伴奏.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/我，义无反顾 - 伴奏.jpg'
			},
			{
			    id: 41,
			    title: '我，义无反顾合唱（女声领唱）',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/我，义无反顾合唱（女声领唱）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/找回真我（小提琴、钢琴、bE调）.jpg'
			},
			{
			    id: 42,
			    title: '钢琴独奏曲：万象更新',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/钢琴独奏曲：万象更新.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/正气歌（伴奏）.jpg'
			},
			{
			    id: 43,
			    title: '女声独唱：飞天庭',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/女声独唱：飞天庭.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/女声独唱：飞天庭.jpg'
			},
			{
			    id: 44,
			    title: '乐曲：真善忍的光芒',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/乐曲：真善忍的光芒.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/乐曲：真善忍的光芒.jpg'
			},
			{
			    id: 45,
			    title: '铜管重奏：希望之光 (The Light)',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/铜管重奏：希望之光 (The Light).mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/世界需要真善忍.jpg'
			},
			{
			    id: 46,
			    title: '伴奏音乐：千年等大法',
			    singer: '',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/伴奏音乐：千年等大法.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/伴奏音乐：千年等大法.jpg'
			}
        ]
    }
    //根据索引获取歌曲的方法
    getSongByNum(index) {
        return this.songs[index];
    }
}

//真正的构建播放器的类
class PlayerCreator {
    constructor() {
        this.audio = document.querySelector('.music-player__audio') // Audio dom元素, 因为很多api都是需要原生audio调用的，所以不用jq获取
        // this.audio.muted = true; // 控制静音
        this.audio.volume = 0.8;

        //工具
        this.util = new Util();
        this.musics = new Musics(); //歌曲信息
        this.song_index = 0; // 当前播放的歌曲索引
        this.loop_mode = 0; // 1 2
        // 下方歌曲列表容器
        this.song_list = $('.music__list_content');

        this.render_doms = { //切换歌曲时需要渲染的dom组
            title: $('.music__info--title'),
            singer: $('.music__info--singer'),
            image: $('.music-player__image img'),
            blur: $('.music-player__blur')
        }
        this.ban_dom = { //禁音时需要渲染的dom组
            control__btn: $('.control__volume--icon')
        }

        // 时间显示容器
        this.render_time = {
            now: $('.nowTime'),
            total: $('.totalTime')
        }

        // 唱片
        this.disc = {
            image: $('.music-player__image'),
            pointer: $('.music-player__pointer')
        };
        //播放器初始化
        this.init();
    }
    //初始化函数
    init() {
        this.renderSongList();
        this.renderSongStyle();
        this.bindEventListener();
    }
    //生成播放列表
    renderSongList() {
        let _str = '';
        this.musics.songs.forEach((song, i) => {
            _str += `<li class="music__list__item">${song.title}</li>`
        });
        this.song_list.html(_str);
    }

    //根据歌曲去渲染视图
    renderSongStyle() {
        let {
            title,
            singer,
            songUrl,
            imageUrl
        } = this.musics.getSongByNum(this.song_index);
        this.audio.src = songUrl;
        this.render_doms.title.html(title);
        this.render_doms.singer.html(singer);
        this.render_doms.image.prop('src', imageUrl);
        this.render_doms.blur.css('background-image', 'url("' + imageUrl + '")');

        //切换列表中的item的类名 play
        this.song_list.find('.music__list__item').eq(this.song_index).addClass('play').siblings().removeClass('play');
    }
    //绑定各种事件
    bindEventListener() {
        //播放按钮
        this.$play = new Btns('.player-control__btn--play', {
            click: this.handlePlayAndPause.bind(this)
        });
        //上一首
        this.$prev = new Btns('.player-control__btn--prev', {
            click: this.changeSong.bind(this, 'prev')
        });
        //下一首
        this.$next = new Btns('.player-control__btn--next', {
            click: this.changeSong.bind(this, 'next')
        });
        //循环模式
        this.$mode = new Btns('.player-control__btn--mode', {
            click: this.changePlayMode.bind(this)
        });
        //禁音
        this.$ban = new Btns('.control__volume--icon', {
            click: this.banNotes.bind(this)
        })
        //列表点击
        this.song_list.on('click', 'li', (e) => {
            let index = $(e.target).index();
            this.changeSong(index);
        })

        //音量控制 audio标签音量 vlouem 属性控制0-1

        new Progress('.control__volume--progress', {
            min: 0,
            max: 1,
            value: this.audio.volume,
            handler: (value) => { //更改进度时
                this.audio.volume = value;
            }
        })


        //歌曲进度 this.audio.duration

        //可以播放的时候触发（歌曲的基本信息都已经获取到了）
        this.audio.oncanplay = () => {
            //避免重复实例化
            if (this.progress) {
                this.progress.max = this.audio.duration; //切换歌曲后更新时长
                this.render_time.total.html(this.util.formatTime(this.audio.duration));
                return false;
            };
            this.progress = new Progress('.player__song--progress', {
                min: 0,
                max: this.audio.duration,
                value: 0,
                handler: (value) => {
                    this.audio.currentTime = value;
                }
            })
            //调整总时长
            this.render_time.total.html(this.util.formatTime(this.audio.duration));
        }

        //会在播放的时候持续触发
        this.audio.ontimeupdate = () => {
            this.progress.setValue(this.audio.currentTime);
            //调整当前时长
            this.render_time.now.html(this.util.formatTime(this.audio.currentTime));
        }

        //当歌曲播放完成的时候
        this.audio.onended = () => {
            this.changeSong('next');
            //播放完，换歌后，重新播放
            this.audio.play();
        }

    }

    //播放暂停控制
    handlePlayAndPause() {
        let _o_i = this.$play.$el.find('i');
        //this.audio.pauseed值为true 说明目前是不播放
        if (this.audio.paused) { //现在是暂停的 要播放
            this.audio.play();
            _o_i.removeClass('icon-play').addClass('icon-pause');
            this.disc.image.addClass('play');
            this.disc.pointer.addClass('play')
        } else {
            this.audio.pause();
            _o_i.addClass('icon-play').removeClass('icon-pause');
            this.disc.image.removeClass('play');
            this.disc.pointer.removeClass('play');
        }
    }

    //更改循环模式
    changePlayMode() {
        this.loop_mode++;
        if (this.loop_mode > 2) this.loop_mode = 0;
        this.renderPlayMode();
    }
    //更改按钮样式
    renderPlayMode() {
        let _classess = ['loop', 'random', 'single'];
        let _o_i = this.$mode.$el.find('i');
        //prop 改一些标签的自有属性 attr改一些标签的自定义属性
        _o_i.prop('class', 'iconfont icon-' + _classess[this.loop_mode])
    }

    //更改歌曲索引
    changeSongIndex(type) {
        if (typeof type === 'number') {
            this.song_index = type;
        } else {
            if (this.loop_mode === 0) {
                //列表循环
                this.song_index += type === 'next' ? 1 : -1;
                if (this.song_index > this.musics.songs.length - 1) this.song_index = 0;
                if (this.song_index < 0) this.song_index = this.musics.songs.length - 1;
            } else if (this.loop_mode === 1) {
                //随机播放
                let _length = this.musics.songs.length;
                let _random = Math.floor(Math.random() * _length);
                for (let i = 0; i < 10000; i++) { //随机的数为本身则继续随机
                    if (this.song_index == _random) {
                        _random = Math.floor(Math.random() * _length);
                    } else {
                        this.song_index = _random;
                        break;
                    }
                }
            } else if (this.loop_mode === 2) {
                this.song_index = this.song_index;
            }
        }
    }
    //歌曲时长
    songTime() {
        let totalMinute = parseInt(this.audio.duration / 60) < 10 ? "0" + parseInt(this.audio.duration / 60) : parseInt(this.audio.duration / 60);
        let totalSecond = parseInt(this.audio.duration % 60) < 10 ? "0" + parseInt(this.audio.duration % 60) : parseInt(this.audio.duration % 60);
        $('.totalTime').text(totalMinute + ':' + totalSecond);
    }
    //切换歌曲
    changeSong(type) {
        //更改索引
        this.changeSongIndex(type);
        //记录切歌前的状态
        let _is_pause = this.audio.paused;
        //切歌后更改视图显示
        this.renderSongStyle();
        //如果切歌前是在播放，就继续播放
        if (!_is_pause) this.audio.play();
    }
    //禁音
    banNotes() {
        let _o_i = this.$ban.$el.find("i");
        if (this.audio.muted == true) { //如果禁音则开启
            this.audio.muted = false;
            _o_i.removeClass('icon-muted').addClass('icon-volume');
        } else {
            this.audio.muted = true;
            _o_i.removeClass('icon-volume').addClass('icon-muted');
        }
    }
}

//进度条
class Progress {
    constructor(selector, options) {
        $.extend(this, options);
        ///给this挂载传入的参数
        this.$el = $(selector);
        this.width = this.$el.width();
        this.init();
    }

    //进度条初始化
    init() {
        this.renderBackAndPointer();
        //this.bindEvents();
        this.drag();
        this.value;
        this.changeDOMStyle(this.width * this.value);
    }
    //为进度条渲染back和pointer
    renderBackAndPointer() {
        this.$back = $('<div class="back">');
        this.$pointer = $('<div class="pointer">');

        this.$el.append(this.$back);
        this.$el.append(this.$pointer);
    }

    setValue(value) { //主动调用，传入value值，设置进度条样式
        let _distance = this.width * value / (this.max - this.min);
        this.changeDOMStyle(_distance);
    }

    drag() {
        let ele = this.$pointer;
        let father = this.$el;
        let flag = false; //鼠标是否点击
        ele.mousedown((e) => {
            flag = true;
            let mousePos = {
                x: e.offsetX
            }
            $(document).mousemove((e) => {
                if (flag === true) {
                    let _left = e.clientX - father.offset().left - mousePos.x;
                    let _distance = Math.max(0, Math.min(_left, father.outerWidth(false) - ele.outerWidth(false)))
                    let _ratio = _distance / father.outerWidth(false);
                    let _value = _ratio * (this.max - this.min); //当前的音量值
                    this.changeDOMStyle(_distance);
                    this.handler(_value); //更改进度之后，执行回调
                }
            })
        })
        $(document).mouseup(() => {
            flag = false;
        })

    }

    bindEvents() { //鼠标点击时更改
        this.$el.click((e) => {
            let _x = e.offsetX; //鼠标距离元素左边的距离
            let _ratio = _x / this.width;
            let _value = _ratio * (this.max - this.min); //当前的音量值
            this.changeDOMStyle(_x);
            this.handler(_value); //更改进度之后，执行回调
        })
    }
    //更改pointer和back
    changeDOMStyle(distance) {
        this.$back.width(distance + 7 == 7 ? 0 : distance + 7);//进度为0时将进度条背景改为0否则加上进度按钮的长度
        this.$pointer.css('left', distance + 'px');
    }
}


//按钮类 
class Btns {
    constructor(selector, handlers) {
        this.$el = $(selector); //元素
        this.bindEvents(handlers);
    }
    bindEvents(handlers) { //绑定事件
        for (const event in handlers) {
            //使用值的时候保证键值对在对象中是存在的
            if (handlers.hasOwnProperty(event)) {
                this.$el.on(event, handlers[event]);
            }
        }
    }
}
new Player();