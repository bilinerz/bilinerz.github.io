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
                title: '岳飛傳 - 第一回：岳飛出世大鵬展 缸內逃生避洪水',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/01.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 2,
                title: '岳飛傳 - 第二回：老隱士 周侗收子傳絕技',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/02.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 3,
                title: '岳飛傳 - 第三回：瀝泉山黑洞 斬怪蟒獲寶槍',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/03.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 4,
                title: '岳飛傳 - 第四回：亂草岡 金蘭結義',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/04.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 5,
                title: '岳飛傳 - 第五回：娘娘廟會 英雄救美 結良緣',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/05.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 6,
                title: '岳飛傳 - 第六回：操辦喜事 歸故里 相州總兵介紹信',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/06.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 7,
                title: '岳飛傳 - 第七回：京城遇小梁王',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/07.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 8,
                title: '岳飛傳 - 第八回：老元帥宗澤試才',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/08.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 9,
                title: '岳飛傳 - 第九回：周三畏义赠宝剑',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/09.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 10,
                title: '岳飛傳 - 第十一回：人歡馬炸武科場',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/10.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 11,
                title: '岳飛傳 - 第十一回：奸臣作梗比箭法',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/11.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 12,
                title: '岳飛傳 - 第十二回：兩方對峙 生死文書立',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/12.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 13,
                title: '岳飛傳 - 第十三回：大鬧武科場 槍挑小梁王',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/13.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 14,
                title: '岳飛傳 - 第十四回：奸臣構陷 老元帥遭削職為民',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/14.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 15,
                title: '岳飛傳 - 第十五回：宗澤惜才贈盔甲 宗方相助逃城門',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/15.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 16,
                title: '岳飛傳 - 第十六回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/16.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 17,
                title: '岳飛傳 - 第十七回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/17.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 18,
                title: '岳飛傳 - 第十八回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/18.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
                id: 19,
                title: '岳飛傳 - 第十九回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/19.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 20,
                title: '岳飛傳 - 第二十回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/20.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 21,
                title: '岳飛傳 - 第二十一回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/21.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 22,
                title: '岳飛傳 - 第二十二回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/22.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 23,
                title: '岳飛傳 - 第二十三回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/23.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 24,
                title: '岳飛傳 - 第二十四回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/24.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 25,
                title: '岳飛傳 - 第二十五回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/25.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 26,
                title: '岳飛傳 - 第二十六回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/26.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 27,
                title: '岳飛傳 - 第二十七回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/27.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 28,
                title: '岳飛傳 - 第二十八回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/28.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 29,
                title: '岳飛傳 - 第二十九回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/29.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 30,
                title: '岳飛傳 - 第三十回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/30.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 31,
                title: '岳飛傳 - 第三十一回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/31.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 32,
                title: '岳飛傳 - 第三十二回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/32.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 33,
                title: '岳飛傳 - 第三十三回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/33.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 34,
                title: '岳飛傳 - 第三十四回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/34.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 35,
                title: '岳飛傳 - 第三十五回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/35.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 36,
                title: '岳飛傳 - 第三十六回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/36.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 37,
                title: '岳飛傳 - 第三十七回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/37.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 38,
                title: '岳飛傳 - 第三十八回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/38.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 39,
                title: '岳飛傳 - 第三十九回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/39.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 40,
                title: '岳飛傳 - 第四十回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/40.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 41,
                title: '岳飛傳 - 第四十一回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/41.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 42,
                title: '岳飛傳 - 第四十二回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/42.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 43,
                title: '岳飛傳 - 第四十三回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/43.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 44,
                title: '岳飛傳 - 第四十四回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/44.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 45,
                title: '岳飛傳 - 第四十五回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/45.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 46,
                title: '岳飛傳 - 第四十六回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/46.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 47,
                title: '岳飛傳 - 第四十七回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/47.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 48,
                title: '岳飛傳 - 第四十八回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/48.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 49,
                title: '岳飛傳 - 第四十九回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/49.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 50,
                title: '岳飛傳 - 第五十回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/50.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 51,
                title: '岳飛傳 - 第五十一回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/51.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 52,
                title: '岳飛傳 - 第五十二回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/52.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 53,
                title: '岳飛傳 - 第五十三回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/53.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 54,
                title: '岳飛傳 - 第五十四回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/54.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 55,
                title: '岳飛傳 - 第五十五回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/55.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 56,
                title: '岳飛傳 - 第五十六回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/56.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 57,
                title: '岳飛傳 - 第五十七回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/57.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 58,
                title: '岳飛傳 - 第五十八回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/58.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 59,
                title: '岳飛傳 - 第五十九回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/59.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 60,
                title: '岳飛傳 - 第六十回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/60.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 61,
                title: '岳飛傳 - 第六十一回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/61.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 62,
                title: '岳飛傳 - 第六十二回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/62.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 63,
                title: '岳飛傳 - 第六十三回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/63.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 64,
                title: '岳飛傳 - 第六十四回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/64.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 65,
                title: '岳飛傳 - 第六十五回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/65.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 66,
                title: '岳飛傳 - 第六十六回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/66.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 67,
                title: '岳飛傳 - 第六十七回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/67.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 68,
                title: '岳飛傳 - 第六十八回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/68.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 69,
                title: '岳飛傳 - 第六十九回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/69.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 70,
                title: '岳飛傳 - 第七十回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/70.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 71,
                title: '岳飛傳 - 第七十一回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/71.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 72,
                title: '岳飛傳 - 第七十二回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/72.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 73,
                title: '岳飛傳 - 第七十三回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/73.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 74,
                title: '岳飛傳 - 第七十四回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/74.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 75,
                title: '岳飛傳 - 第七十五回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/75.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 76,
                title: '岳飛傳 - 第七十六回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/76.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 77,
                title: '岳飛傳 - 第七十七回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/77.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 78,
                title: '岳飛傳 - 第七十八回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/78.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 79,
                title: '岳飛傳 - 第七十九回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/79.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 80,
                title: '岳飛傳 - 第八十回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/80.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 81,
                title: '岳飛傳 - 第八十一回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/81.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 82,
                title: '岳飛傳 - 第八十二回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/82.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 83,
                title: '岳飛傳 - 第八十三回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/83.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 84,
                title: '岳飛傳 - 第八十四回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/84.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 85,
                title: '岳飛傳 - 第八十五回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/85.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 86,
                title: '岳飛傳 - 第八十六回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/86.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 87,
                title: '岳飛傳 - 第八十七回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/87.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 88,
                title: '岳飛傳 - 第八十八回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/88.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 89,
                title: '岳飛傳 - 第八十九回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/89.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 90,
                title: '岳飛傳 - 第九十回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/90.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 91,
                title: '岳飛傳 - 第九十一回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/91.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 92,
                title: '岳飛傳 - 第九十二回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/92.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 93,
                title: '岳飛傳 - 第九十三回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/93.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 94,
                title: '岳飛傳 - 第九十四回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/94.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 95,
                title: '岳飛傳 - 第九十五回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/95.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 96,
                title: '岳飛傳 - 第九十六回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/96.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 97,
                title: '岳飛傳 - 第九十七回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/97.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 98,
                title: '岳飛傳 - 第九十八回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/98.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 99,
                title: '岳飛傳 - 第九十九回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/99.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 100,
                title: '岳飛傳 - 第一百回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/100.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 101,
                title: '岳飛傳 - 第一百零一回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/101.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 102,
                title: '岳飛傳 - 第一百零二回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/102.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 103,
                title: '岳飛傳 - 第一百零三回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/103.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 104,
                title: '岳飛傳 - 第一百零四回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/104.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 105,
                title: '岳飛傳 - 第一百零五回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/105.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 106,
                title: '岳飛傳 - 第一百零六回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/106.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 107,
                title: '岳飛傳 - 第一百零七回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/107.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 108,
                title: '岳飛傳 - 第一百零八回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/108.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 109,
                title: '岳飛傳 - 第一百零九回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/109.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 110,
                title: '岳飛傳 - 第一百一十回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/110.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 111,
                title: '岳飛傳 - 第一百一十一回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/111.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 112,
                title: '岳飛傳 - 第一百一十二回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/112.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 113,
                title: '岳飛傳 - 第一百一十三回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/113.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 114,
                title: '岳飛傳 - 第一百一四十回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/114.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 115,
                title: '岳飛傳 - 第一百一五十回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/115.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 116,
                title: '岳飛傳 - 第一百一十六回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/116.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 117,
                title: '岳飛傳 - 第一百一十七回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/110.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 118,
                title: '岳飛傳 - 第一百一十八回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/117.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 119,
                title: '岳飛傳 - 第一百一十九回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/118.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 120,
                title: '岳飛傳 - 第一百二十回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/120.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 121,
                title: '岳飛傳 - 第一百二十一回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/121.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 122,
                title: '岳飛傳 - 第一百二十二回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/122.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 123,
                title: '岳飛傳 - 第一百二十三回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/123.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 124,
                title: '岳飛傳 - 第一百二十四回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/124.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 125,
                title: '岳飛傳 - 第一百二十五回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/125.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 126,
                title: '岳飛傳 - 第一百二十六回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/126.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 127,
                title: '岳飛傳 - 第一百二十七回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/127.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 128,
                title: '岳飛傳 - 第一百二十八回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/128.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 129,
                title: '岳飛傳 - 第一百二十九回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/129.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
            {
                id: 130,
                title: '岳飛傳 - 第一百三十回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/130.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
            },
			{
			    id: 131,
			    title: '岳飛傳 - 第一百三十一回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/131.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 132,
			    title: '岳飛傳 - 第一百三十二回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/132.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 133,
			    title: '岳飛傳 - 第一百三十三回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/133.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 134,
			    title: '岳飛傳 - 第一百三十四回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/134.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 135,
			    title: '岳飛傳 - 第一百三十五回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/135.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 136,
			    title: '岳飛傳 - 第一百三十六回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/136.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 137,
			    title: '岳飛傳 - 第一百三十七回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/137.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 138,
			    title: '岳飛傳 - 第一百三十八回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/138.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 139,
			    title: '岳飛傳 - 第一百三十九回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/139.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 140,
			    title: '岳飛傳 - 第一百四十回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/140.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 141,
			    title: '岳飛傳 - 第一百四十一回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/141.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 142,
			    title: '岳飛傳 - 第一百四十二回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/142.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 143,
			    title: '岳飛傳 - 第一百四十三回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/143.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 144,
			    title: '岳飛傳 - 第一百四十四回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/44.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 145,
			    title: '岳飛傳 - 第一百四十五回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/145.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 146,
			    title: '岳飛傳 - 第一百四十六回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/146.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 147,
			    title: '岳飛傳 - 第一百四十七回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/147.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 148,
			    title: '岳飛傳 - 第一百四十八回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/148.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 149,
			    title: '岳飛傳 - 第一百四十九回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/149.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 150,
			    title: '岳飛傳 - 第一百五十回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/150.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 151,
			    title: '岳飛傳 - 第一百五十一回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/151.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 152,
			    title: '岳飛傳 - 第一百五十二回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/152.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 153,
			    title: '岳飛傳 - 第一百五十三回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/153.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 154,
			    title: '岳飛傳 - 第一百五十四回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/154.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 155,
			    title: '岳飛傳 - 第一百五十五回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/155.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 156,
			    title: '岳飛傳 - 第一百五十六回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/156.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 157,
			    title: '岳飛傳 - 第一百五十七回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/157.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 158,
			    title: '岳飛傳 - 第一百五十八回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/158.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 159,
			    title: '岳飛傳 - 第一百五十九回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/159.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 160,
			    title: '岳飛傳 - 第一百六十回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/160.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 161,
			    title: '岳飛傳 - 第一百六十一回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/161.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 162,
			    title: '岳飛傳 - 第一百六十二回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/162.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 163,
			    title: '岳飛傳 - 第一百六十三回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/163.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 164,
			    title: '岳飛傳 - 第一百六十四回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/164.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 165,
			    title: '岳飛傳 - 第一百六十五回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/165.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 166,
			    title: '岳飛傳 - 第一百六十六回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/166.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 167,
			    title: '岳飛傳 - 第一百六十七回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/167.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 168,
			    title: '岳飛傳 - 第一百六十八回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/168.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 169,
			    title: '岳飛傳 - 第一百六十九回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/169.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 170,
			    title: '岳飛傳 - 第一百七十回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/170.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 171,
			    title: '岳飛傳 - 第一百七十一回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/171.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 172,
			    title: '岳飛傳 - 第一百七十二回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/172.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 173,
			    title: '岳飛傳 - 第一百七十三回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/173.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 174,
			    title: '岳飛傳 - 第一百七十四回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/174.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 175,
			    title: '岳飛傳 - 第一百七十五回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/175.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 176,
			    title: '岳飛傳 - 第一百七十六回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/176.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 177,
			    title: '岳飛傳 - 第一百七十七回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/177.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 178,
			    title: '岳飛傳 - 第一百七十八回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/178.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 179,
			    title: '岳飛傳 - 第一百七十九回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/179.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 180,
			    title: '岳飛傳 - 第一百八十回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/180.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 181,
			    title: '岳飛傳 - 第一百八十一回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/181.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 182,
			    title: '岳飛傳 - 第一百八十二回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/182.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 183,
			    title: '岳飛傳 - 第一百八十三回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/183.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 184,
			    title: '岳飛傳 - 第一百八十四回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/184.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 185,
			    title: '岳飛傳 - 第一百八十五回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/185.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 186,
			    title: '岳飛傳 - 第一百八十六回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/186.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 187,
			    title: '岳飛傳 - 第一百八十七回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/187.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 188,
			    title: '岳飛傳 - 第一百八十八回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/188.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 189,
			    title: '岳飛傳 - 第一百八十九回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/189.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 190,
			    title: '岳飛傳 - 第一百九十回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/190.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 191,
			    title: '岳飛傳 - 第一百九十一回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/191.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 192,
			    title: '岳飛傳 - 第一百九十二回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/192.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 193,
			    title: '岳飛傳 - 第一百九十三回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/193.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 194,
			    title: '岳飛傳 - 第一百九十四回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/194.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 195,
			    title: '岳飛傳 - 第一百九十五回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/195.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 196,
			    title: '岳飛傳 - 第一百九十六回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/196.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 197,
			    title: '岳飛傳 - 第一百九十七回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/197.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 198,
			    title: '岳飛傳 - 第一百九十八回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/198.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 199,
			    title: '岳飛傳 - 第一百九十九回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/199.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 200,
			    title: '岳飛傳 - 第二百回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/201.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 201,
			    title: '岳飛傳 - 第二百零一回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/202.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 202,
			    title: '岳飛傳 - 第二百零二回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/203.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 203,
			    title: '岳飛傳 - 第二百零三回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/204.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 204,
			    title: '岳飛傳 - 第二百零四回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/205.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 205,
			    title: '岳飛傳 - 第二百零五回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/206.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 206,
			    title: '岳飛傳 - 第二百零六回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/207.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 207,
			    title: '岳飛傳 - 第二百零七回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/208.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 208,
			    title: '岳飛傳 - 第二百零八回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/209.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
			{
			    id: 209,
			    title: '岳飛傳 - 第二百零九回：',
			    singer: '来自-希望之聲',
			    songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/130.mp3',
			    imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
			},
            {
                id: 210,
                title: '岳飛傳 - 第二百一十回：',
                singer: '来自-希望之聲',
                songUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/210.mp3',
                imageUrl: 'https://bilinerz.eu.org/9981/video/岳飛傳/yuefeizhuan/img/yuefeizhuan.jpg'
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