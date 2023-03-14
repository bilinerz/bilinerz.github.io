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
				ci:'遥望故国泪花飞，魂萦梦绕知是谁，<br>\
					不知亲人可安康，不知山水可青翠。<br>\
					烟雨濛濛江南美，渔歌唱晚行碧水，<br>\
					四季如春云贵美，月下竹林人自醉。<br>\
					牛羊遍野塞外美，骏马飞驰彩云追，<br>\
					冰峰屹立藏原美，神殿檐下风铃脆。<br>\
					遥望故国思绪飞，大好山河面貌非，<br>\
					世风日下人心变，古风清纯唤不回。<br>\
					危难之中神慈悲，大法震撼善念归，<br>\
					路不拾遗太平世，夜不闭户更祥瑞。<br>\
					真善忍能使人心美，源远古风又璨璀，<br>\
					重德行善福相随，人间再映天堂辉。',
                songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/思故國.mp3',
                imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/思故國.jpg'
            },
			{
			    id: 2,
			    title: '让生命去感受（钢琴伴奏）',
			    singer: '',
				ci:'打开窗 让清风吹拂你<br>\
					推开门 让阳光拥抱你<br>\
					走出去 让生命感受永远<br>\
					闭上眼 让神思带着你自由的飞<br>\
					打开窗 让清风吹拂你<br>\
					推开门 让阳光拥抱你<br>\
					走出去 让生命感受永远<br>\
					闭上眼 让神思带着你自由的飞<br>\
					那是生命的春天<br>\
					那是归真的理念<br>\
					真善忍净化了心灵<br>\
					让我们感受生命更加美丽<br>\
					打开窗 听到了好消息<br>\
					推开门 看见微笑的你<br>\
					走出去 让生命感受世界<br>\
					闭上眼 让信念带着你自由的飞<br>\
					那是生命的蓝天 那是希望的田野<br>\
					真善忍充满在人间<br>\
					让我们感受天地更加美丽',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/让生命去感受（钢琴伴奏）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/让生命去感受.jpg'
			},
            {
                id: 3,
                title: '让生命去感受',
                singer: '关贵敏',
				ci:'打开窗 让清风吹拂你<br>\
					推开门 让阳光拥抱你<br>\
					走出去 让生命感受永远<br>\
					闭上眼 让神思带着你自由的飞<br>\
					打开窗 让清风吹拂你<br>\
					推开门 让阳光拥抱你<br>\
					走出去 让生命感受永远<br>\
					闭上眼 让神思带着你自由的飞<br>\
					那是生命的春天<br>\
					那是归真的理念<br>\
					真善忍净化了心灵<br>\
					让我们感受生命更加美丽<br>\
					打开窗 听到了好消息<br>\
					推开门 看见微笑的你<br>\
					走出去 让生命感受世界<br>\
					闭上眼 让信念带着你自由的飞<br>\
					那是生命的蓝天 那是希望的田野<br>\
					真善忍充满在人间<br>\
					让我们感受天地更加美丽',
                songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/让生命去感受.mp3',
                imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/让生命去感受.jpg'
            },
			{
			    id: 4,
			    title: '女声独唱：九字真言',
			    singer: '',
				ci:'法轮大法好，真善忍好。',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/女声独唱：九字真言.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/女声独唱：九字真言.jpg'
			},
			{
			    id: 5,
			    title: '慈悲的礼物',
			    singer: '',
				ci:'乐曲介绍：<br>\
					神韵艺术团的演出就像给众生最慈悲的礼物。乐曲中想表达神圣、感动、慈悲，以及师父度人的辛劳（是我自己个人层次的理解） - 献礼风靡全球的神韵艺术团',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/慈悲的礼物.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/慈悲的礼物.jpg'
			},
			{
			    id: 6,
			    title: '我问那南来北往的大雁',
			    singer: '关贵敏',
				ci:'我问那南来北往的大雁，<br>\
					你可知道他们在哪里风餐露宿？<br>\
					我问那蓝天上悠悠的白云，<br>\
					你可知道为什么他们有家不能回返？<br>\
					<br>\
					大雁告诉我：<br>\
					朋友，<br>\
					为了唤醒沉睡世上的人们，<br>\
					他们还在承受着苦难。<br>\
					白云说：<br>\
					你看那天边，<br>\
					有一道金色的彩霞，<br>\
					会带来万道金光，<br>\
					那是觉者真正的家园。<br>\
					<br>\
					（重复：）<br>\
					白云说：<br>\
					你看那天边，<br>\
					有一道金色的彩霞，<br>\
					会带来万道金光，<br>\
					那是觉者真正的家园。',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/我问那南来北往的大雁.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/我问那南来北往的大雁.jpg'
			},
			{
			    id: 7,
			    title: '凡花落尽',
			    singer: '作曲: 台湾大法弟子',
				ci:'',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/凡花落尽.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/凡花落尽.jpg'
			},
			{
			    id: 8,
			    title: '大唐的记忆（伴奏）',
			    singer: '作曲: 许根桀',
				ci:'千年的流韵　千年的迷离<br>\
					千年的徘徊　千年的叹息<br>\
					渭城朝雨新　阳关故人离<br>\
					长歌古道行　大唐遗梦寻<br>\
					渭城朝雨新　阳关故人还<br>\
					长安今又现　大法度唐人',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/大唐的记忆（伴奏）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/大唐的记忆（伴奏）.jpg'
			},
			{
			    id: 9,
			    title: '大唐的记忆',
			    singer: '',
				ci:'千年的流韵　千年的迷离<br>\
					千年的徘徊　千年的叹息<br>\
					渭城朝雨新　阳关故人离<br>\
					长歌古道行　大唐遗梦寻<br>\
					渭城朝雨新　阳关故人还<br>\
					长安今又现　大法度唐人',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/大唐的记忆.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/大唐的记忆.jpg'
			},
			{
			    id: 10,
			    title: '来归行',
			    singer: '作者作曲: 大法弟子 配器: 陈东',
				ci:'',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/来归行.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/来归行.jpg'
			},
			{
			    id: 11,
			    title: '男声独唱：来归行',
			    singer: '词：跃星 演唱：刘伟',
				ci:'远古誓约立在天<br>\
					助师正法下人间<br>\
					千年轮回荣与苦<br>\
					只待师尊大法传<br>\
					<br>\
					得法修炼助师行<br>\
					正悟开出路通天<br>\
					金殿玉楼师指点<br>\
					圣地仙境在龙泉<br>\
					<br>\
					师恩浩荡师恩重<br>\
					寸草难报三春晖<br>\
					唯有精进再精进<br>\
					同化大法随师归',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/男声独唱：来归行.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/男声独唱：来归行.jpg'
			},
			{
			    id: 12,
			    title: '隐约想起来',
			    singer: '作者周快',
				ci:'',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/隐约想起来.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/隐约想起来.jpg'
			},
			{
			    id: 13,
			    title: '快醒醒 -- 致所有迷中人',
			    singer: '词：今月 演唱：白雪',
				ci:'当你进入人生的这场戏，<br>\
					可能已忘记生命的来历，<br>\
					你曾经演过千百个角色，<br>\
					每每悲剧多过喜剧。<br>\
					权力得失让你悲伤欢喜，<br>\
					名利情场让你癫狂哭泣。<br>\
					每一个角色你都全神投入，<br>\
					如今的世界已经令你痴迷。<br>\
					<br>\
					谁能知道人生的意义，<br>\
					就是在这迷中寻找生命的真谛？<br>\
					<br>\
					世间的角色本无高低，<br>\
					灵魂的贵贱全靠自己。<br>\
					尽管你不相信有神灵，<br>\
					也没有虔诚敬天拜地，<br>\
					请你听听真善忍的呼声，<br>\
					难道民意不能反映天意？<br>\
					请你问问自己的良知，<br>\
					心灵会感受到上苍的信息。<br>\
					<br>\
					谁能知道为何生在今世，<br>\
					眼前的机缘万古不遇？<br>\
					<br>\
					在这寰宇更新的紧要关头，<br>\
					生命的抉择谁也无法回避，<br>\
					心存善念进天国，<br>\
					心生恶念下地狱。<br>\
					不论你在罪恶中陷得有多深，<br>\
					只要你有痛悔的诚意；<br>\
					神的慈悲虽然厚无边际，<br>\
					自甘堕落他也救不了你。<br>\
					<br>\
					你可别再彷徨犹豫，<br>\
					永远错过这稍纵即逝的良机。',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/快醒醒.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/快醒醒.jpg'
			},
            {
                id: 14,
                title: '梦醒',
                singer: '姜敏',
				ci:'轮迴转世几千年，<br>\
					進進出出为哪般？<br>\
					功名利禄不长久，<br>\
					世道兴衰全在天。<br>\
					生命本是天上仙，<br>\
					人生成败过眼烟。<br>\
					是非本是前世怨，<br>\
					得法破迷上青天。',
                songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/梦醒.mp3',
                imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/梦醒.jpg'
            },
			{
			    id: 15,
			    title: '在这难忘的时刻',
			    singer: '关贵敏',
				ci:'1.<br>\
					在这难忘的时刻，<br>\
					心中飞起一支歌，<br>\
					越过那高山和重洋，<br>\
					飞向泰山和黄河。<br>\
					我的歌啊，真诚的歌，<br>\
					带着牵挂，带着祝福，<br>\
					飞向久别的父老乡亲，<br>\
					带着牵挂，带着祝福，<br>\
					把大法的信息传播。<br>\
					<br>\
					2.<br>\
					在这相聚的时刻，<br>\
					心中飞起一支歌，<br>\
					越过那五洲和四海,<br>\
					飞向世界每个角落,<br>\
					我的歌啊，深情的歌，<br>\
					带着乡音，带着乡情，<br>\
					飞向每一个炎黄子孙，<br>\
					带着乡音，带着乡情，<br>\
					把救度的信息传播。<br>\
					<br>\
					3.<br>\
					在这欢庆的时刻，<br>\
					心中飞起一支歌，<br>\
					经过那魔难和坎坷，<br>\
					带着大法的真理飞向故国。<br>\
					我的歌啊，心灵的歌，<br>\
					带着光明，带着祥和，<br>\
					飞向可贵的每个生命，<br>\
					带着光明，带着祥和，<br>\
					把美好的种子撒播。',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/在这难忘的时刻.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/在这难忘的时刻.jpg'
			},
			{
			    id: 16,
			    title: '阳光下遇见你（伴奏）',
			    singer: '曲/钢琴：解晓菁',
				ci:'Part 1<br>\
					看冷冽的寒风 吹起冰霜和风雪<br>\
					美好的大地 为何如此残缺<br>\
					看成住与坏灭 带来穷途和末劫<br>\
					直到一丝曙光 降临这个世界<br>\
					<br>\
					阳光下遇见你<br>\
					你的慈悲 划破了孤寂<br>\
					打开我真诚的心 抛开世俗的泥<br>\
					阳光下遇见你<br>\
					阳光下遇见你<br>\
					你的细语 洗涤我的心灵<br>\
					唤回善良本性 想起曾经约定<br>\
					想起了曾经的约定<br>\
					<br>\
					Part 2<br>\
					看灿烂的光芒 已融化了冰霜<br>\
					曾经冰冷的心 如今却充满希望<br>\
					看辽阔的天空 是多么的宽广<br>\
					让我的心 已不再徬徨<br>\
					<br>\
					阳光下遇见你<br>\
					看清了真相 重启我记忆<br>\
					阳光下遇见了你 我与你 相随不离 ~ 我与你 相随不离<br>\
					阳光下遇见你<br>\
					发现了善良 充满我心灵<br>\
					阳光下遇见了你 我与你 相随不离 ~ 我与你 相随不离<br>\
					阳光下遇见你<br>\
					学会了忍让 使我看得更清<br>\
					阳光下遇见了你 我与你 相随不离 ~ 我与你 相随不离<br>\
					真善忍 遇见你   ',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/阳光下遇见你（伴奏）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/阳光下遇见你（伴奏）.jpg'
			},
			{
			    id: 17,
			    title: '阳光下遇见你',
			    singer: '主唱：吴政翰/孙湘青；<br>和声：郑星羽/何宗安/马于晴',
				ci:'Part 1<br>\
					看冷冽的寒风 吹起冰霜和风雪<br>\
					美好的大地 为何如此残缺<br>\
					看成住与坏灭 带来穷途和末劫<br>\
					直到一丝曙光 降临这个世界<br>\
					<br>\
					阳光下遇见你<br>\
					你的慈悲 划破了孤寂<br>\
					打开我真诚的心 抛开世俗的泥<br>\
					阳光下遇见你<br>\
					阳光下遇见你<br>\
					你的细语 洗涤我的心灵<br>\
					唤回善良本性 想起曾经约定<br>\
					想起了曾经的约定<br>\
					<br>\
					Part 2<br>\
					看灿烂的光芒 已融化了冰霜<br>\
					曾经冰冷的心 如今却充满希望<br>\
					看辽阔的天空 是多么的宽广<br>\
					让我的心 已不再徬徨<br>\
					<br>\
					阳光下遇见你<br>\
					看清了真相 重启我记忆<br>\
					阳光下遇见了你 我与你 相随不离 ~ 我与你 相随不离<br>\
					阳光下遇见你<br>\
					发现了善良 充满我心灵<br>\
					阳光下遇见了你 我与你 相随不离 ~ 我与你 相随不离<br>\
					阳光下遇见你<br>\
					学会了忍让 使我看得更清<br>\
					阳光下遇见了你 我与你 相随不离 ~ 我与你 相随不离<br>\
					真善忍 遇见你   ',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/阳光下遇见你.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/阳光下遇见你.jpg'
			},
			{
			    id: 18,
			    title: '正气歌（伴奏）',
			    singer: '作曲/演奏: 颜静芬',
				ci:'(一段) <br>\
					浩瀚苍穹无垠阔 乾坤正运大道洪,<br>\
					日月星辰布天宇 造化众生传古风<br>\
					文明礼乐展神韵 仁义大节在我胸<br>\
					百苦一肩心不惧 志坚能过山万重<br>\
					且向千秋书我名 忍把烈火炼真金<br>\
					始知人间有正义 苦度众生正念行<br>\
					(二段) <br>\
					浩瀚苍穹无垠阔 乾坤正运大道洪<br>\
					日月星辰布天宇 造化众生传古风<br>\
					百转轮回惊大梦 法光请明映我胸<br>\
					力挡群邪千万难 真念只为誓愿洪<br>\
					一身忠直震寰宇 一片丹心照汗青<br>\
					需知天地有正气 法正人间万世平',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/正气歌（伴奏）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/正气歌（伴奏）.jpg'
			},
			{
			    id: 19,
			    title: '为你而来',
			    singer: '作者/词: 柯贝',
				ci:'Coming from far away,<br>\
					Again and again, I come for you,<br>\
					I come with love for you.<br>\
					Precious Chinese people, please listen to my heart-felt voice,<br>\
					Wonderful Falun Dafa, Falun Dafa Hao!<br>\
					See the truth behind those lies.<br>\
					Facing violence and danger,<br>\
					Again and again,I come for you,<br>\
					I come with love for you.<br>\
					Precious Chinese people, do you know that the whole world is saying,<br>\
					“Wonderful Falun Dafa, Falun Dafa Hao!”<br>\
					Do not miss this precious chance.<br>\
					<br>\
					Do not miss this precious chance, this precious chance!<br>\
					<br>\
					跨越千山万水<br>\
					我一次又一次为你而来<br>\
					我因为爱你而来<br>\
					可贵的中国人啊<br>\
					请静心倾听我的心声<br>\
					法轮大法好啊<br>\
					法轮大法好<br>\
					切莫相信那欺世的谎言<br>\
					面对暴力危险<br>\
					我一次又一次为你而来<br>\
					我因为爱你而来<br>\
					可贵的中国人啊<br>\
					你可知道全世界都说<br>\
					法轮大法好啊<br>\
					法轮大法好<br>\
					切莫错过这万古机缘',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/为你而来.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/为你而来.jpg'
			},
			{
			    id: 20,
			    title: '纯真（《震撼》电影主题曲）',
			    singer: '演唱：白雪',
				ci:'粉妆玉琢女儿身<br>\
					笑也纯来哭也真<br>\
					莫忘今世法缘重<br>\
					家在仙宫不在尘',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/纯真（《震撼》电影主题曲）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/纯真（《震撼》电影主题曲）.jpg'
			},
			{
			    id: 21,
			    title: '请与我比邻而坐',
			    singer: '演唱：关贵敏',
				ci:'请与我比邻而坐，在寂静之处。<br>\
					微闭双目，发出我们心底的呼唤。<br>\
					为制止酷刑凌辱，为结束疯狂屠戮。<br>\
					为停止一切迫害，心慈意猛何惧苦。<br>\
					于无声处，让我们同将历史改变。<br>\
					于无声处，让我们同将众生救度。<br>\
					同将众生救度。<br>\
					<br>\
					Sit by my side, closing your eyes.<br>\
					Together in silence, we call for<br>\
					the end of torturing,<br>\
					the end of killing,<br>\
					the end of persecution.<br>\
					Compassion grows in our hearts.<br>\
					Together in silence,<br>\
					our wishes can make a difference.',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/请与我比邻而坐.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/请与我比邻而坐.jpg'
			},
			{
			    id: 22,
			    title: '与我同行',
			    singer: '作曲: 水晶',
				ci:'此曲是为表达法轮功学员们面对无理打压时，<br>\
					依然怀抱一颗悲悯温柔的心…<br>\
					呼吁全世界善良的人们与我同行 停止迫害',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/与我同行.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/与我同行.jpg'
			},
			{
			    id: 23,
			    title: '荷塘清音',
			    singer: '作曲/配器：TONY CHEN',
				ci:'',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/荷塘清音.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/荷塘清音.jpg'
			},
			{
			    id: 24,
			    title: '当法呈现在面前（钢琴独奏）',
			    singer: '作曲: 美西法轮功学员',
				ci:'',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/当法呈现在面前（钢琴独奏）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/当法呈现在面前（钢琴独奏）.jpg'
			},
			{
			    id: 25,
			    title: '师恩颂（管弦乐伴奏）',
			    singer: '作者/词: 颂法',
				ci:'（领）回想起您传法的日日夜夜，<br>\
					泪水啊再一次洒满胸前，<br>\
					有谁能知道您的心酸，<br>\
					有谁能知道您的艰难。<br>\
					（合）看那金色的法轮，<br>\
					出现在那美丽的彩云间，<br>\
					（领）慈悲的您知道众生在期盼，<br>\
					期盼着大法降临人间。<br>\
					<br>\
					（合）回想着您十年的正法路，<br>\
					泪水啊再一次洒满胸前，<br>\
					有谁能知道您付出的心血，<br>\
					有谁能知道您承受的一切。<br>\
					看那金色的法船，<br>\
					满载着众生驰向彼岸，<br>\
					是您力挽狂澜，<br>\
					救度苍穹在坏灭的瞬间。<br>\
					<br>\
					（领）回想起远古的记忆，<br>\
					一幕幕展现眼前，<br>\
					铿锵的誓言回荡在耳边，<br>\
					神圣的誓约依然记在心间。<br>\
					（合）我们为着众生而来，<br>\
					助师正法何惧下苦海，<br>\
					（领）是您带着我们走过魔难，<br>\
					风雨中您将大法的威德显。<br>\
					<br>\
					（合）听那普天的颂赞，<br>\
					万古的机缘撒满天地间，<br>\
					是您带着众生走向未来，<br>\
					大法的光辉永远照耀在苍宇间。',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/师恩颂（管弦乐伴奏）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/师恩颂（管弦乐伴奏）.jpg'
			},
			{
			    id: 26,
			    title: '师恩颂 - 2006小合唱',
			    singer: '演唱: 悉尼同颂合唱团',
				ci:'（领）回想起您传法的日日夜夜，<br>\
					泪水啊再一次洒满胸前，<br>\
					有谁能知道您的心酸，<br>\
					有谁能知道您的艰难。<br>\
					（合）看那金色的法轮，<br>\
					出现在那美丽的彩云间，<br>\
					（领）慈悲的您知道众生在期盼，<br>\
					期盼着大法降临人间。<br>\
					<br>\
					（合）回想着您十年的正法路，<br>\
					泪水啊再一次洒满胸前，<br>\
					有谁能知道您付出的心血，<br>\
					有谁能知道您承受的一切。<br>\
					看那金色的法船，<br>\
					满载着众生驰向彼岸，<br>\
					是您力挽狂澜，<br>\
					救度苍穹在坏灭的瞬间。<br>\
					<br>\
					（领）回想起远古的记忆，<br>\
					一幕幕展现眼前，<br>\
					铿锵的誓言回荡在耳边，<br>\
					神圣的誓约依然记在心间。<br>\
					（合）我们为着众生而来，<br>\
					助师正法何惧下苦海，<br>\
					（领）是您带着我们走过魔难，<br>\
					风雨中您将大法的威德显。<br>\
					<br>\
					（合）听那普天的颂赞，<br>\
					万古的机缘撒满天地间，<br>\
					是您带着众生走向未来，<br>\
					大法的光辉永远照耀在苍宇间。',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/师恩颂 - 2006小合唱.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/师恩颂 - 2006小合唱.jpg'
			},
			{
			    id: 27,
			    title: '找回真我（小提琴、钢琴、bE调）',
			    singer: '作曲／制作：颜静芬',
				ci:'曲子的三段意境:<br>\
					(一)行板:下世轮回,历尽世事,苦等圣缘<br>\
					(二)快板:喜得大法,真我梦醒,法中重生<br>\
					(三)小快板:前景光明,感怀师恩,归途有望',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/找回真我（小提琴、钢琴、bE调）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/找回真我（小提琴、钢琴、bE调）.jpg'
			},
			{
			    id: 28,
			    title: '找回真我（笛、钢琴、D调）',
			    singer: '作曲／制作：颜静芬',
				ci:'曲子的三段意境:<br>\
					(一)行板:下世轮回,历尽世事,苦等圣缘<br>\
					(二)快板:喜得大法,真我梦醒,法中重生<br>\
					(三)小快板:前景光明,感怀师恩,归途有望',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/找回真我（笛、钢琴、D调）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/找回真我（笛、钢琴、D调）.jpg'
			},
			{
			    id: 29,
			    title: '机缘莫误',
			    singer: '作者：周快',
				ci:'大意:<br>\
					人生在世，辛辛苦苦，为何忙碌；<br>\
					来去匆匆，机缘莫误，繁忙人世中，<br>\
					请停下脚步，听听箫声洗涤心灵，<br>\
					听听大法弟子讲真相、得救度。',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/机缘莫误.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/机缘莫误.jpg'
			},
			{
			    id: 30,
			    title: '天兵天将护法神',
			    singer: '作者/词: 清淡',
				ci:'',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/天兵天将护法神.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/天兵天将护法神.jpg'
			},
			{
			    id: 31,
			    title: '世界需要真善忍',
			    singer: '作曲: 筱洁',
				ci:'大地仰望着蓝天，<br>\
					江河依恋着山川。<br>\
					孩子依偎在母亲的怀抱，<br>\
					游子的心 思念着故乡，<br>\
					思念着故乡。<br>\
					<br>\
					生命向往阳光，<br>\
					江河向往大海。<br>\
					我的心向往美好的未来，<br>\
					向往世界充满真善忍。',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/世界需要真善忍.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/世界需要真善忍.jpg'
			},
			{
			    id: 32,
			    title: '女声独唱：最初的家园',
			    singer: '作曲: 小羽 演唱：金玉',
				ci:'记得在那天上有个美丽特殊的地方，<br>\
					记得那个美丽的地方是我们的故乡；<br>\
					自从我们相继来到不是家的这个地方，<br>\
					生生世世在轮回中期待—— 有一天得法回到故乡！<br>\
					快醒来吧！亲爱的同伴，<br>\
					不要再迷失，不要再彷徨；<br>\
					无论来自哪里？还是去向何方？<br>\
					心中不能失去回归的愿望！<br>\
					记得在那天上有个美丽特殊的地方，<br>\
					记得那个美丽的地方是我们的故乡；<br>\
					自从我们相继来到不是家的这个地方，<br>\
					生生世世在轮回中期待—— 有一天得法回到故乡！',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/最初的家园.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/最初的家园.jpg'
			},
			{
			    id: 33,
			    title: '群星报喜',
			    singer: '作曲/演奏：颜静芬',
				ci:'迎春报喜群星会<br>\
					耀耀星河指向天<br>\
					心系众生展百技<br>\
					云霄天际满彩辉',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/群星报喜.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/群星报喜.jpg'
			},
			{
			    id: 34,
			    title: '人间清流天上来',
			    singer: '演奏：陈国华',
				ci:'1. 各式装饰音参照中国曲风「萧」或「笛子」的特点吹奏。<br>\
					2. 萧的部分,也可以用低音曲笛、西洋横笛吹奏。',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/人间清流天上来.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/人间清流天上来.jpg'
			},
			{
			    id: 35,
			    title: '让他们都知道（伴奏版）',
			    singer: '作曲：刘绍珊 演奏：解晓菁',
				ci:'你知道吗很多人在城市中迷失了<br>\
					你知道吗很多人被谎言给蒙骗了<br>\
					你知道吗有些人在风雨中动摇了<br>\
					你知道吗有些人在恐惧中放弃了<br>\
					看不清前面的方向 忘记了那回家的路途<br>\
					外面漫天的乌云密布 邪恶阴影笼罩四周<br>\
					他们看不见他们听不到 他们沈迷在沈沦在黑暗中<br>\
					告诉他让他们知道 告诉他让他们知道<br>\
					告诉他宇宙大法就在他的身旁 告诉他让他们都知道<br>\
					<br>\
					告诉他去找真正的自我 告诉他有缘千万别错过了<br>\
					告诉他善恶到头他终究有报 告诉他真相总有大白的时候<br>\
					告诉他真善忍是回家唯一的路 告诉他让他们都知道<br>\
					告诉他寒冬已过就春天要来到<br>\
					告诉他大法的光芒已覆盖了苍穹<br>\
					告诉他帆已张满了渡船即将启航 告诉他我们在等他回家',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/让他们都知道（伴奏版）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/与我同行.jpg'
			},
			{
			    id: 36,
			    title: '女声独唱：寻求 (钢琴伴奏)',
			    singer: '演奏: 陈怡安',
				ci:'我跨过高山越过重洋去寻找我要去的地方<br>\
					我知道那是一个真实虽然有时依然迷惘<br>\
					终于我找到那个地方那是我们回归的天堂<br>\
					真善忍他重现在我心中从此我不再迷失方向<br>\
					不再迷失方向不再迷失方向',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/女声独唱：寻求 (钢琴伴奏).mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/女声独唱：寻求 (钢琴伴奏).jpg'
			},
			{
			    id: 37,
			    title: '女声独唱：梦里的期盼',
			    singer: '作曲：弘扬 演唱：如水',
				ci:'多少个夜晚<br>\
					我做着这个梦<br>\
					梦里我见到您<br>\
					慈祥的笑容<br>\
					您轻轻召唤我<br>\
					飞向那<br>\
					美丽遥远的星空<br>\
					<br>\
					恍惚间我记起<br>\
					一个誓约<br>\
					曾经和您签过<br>\
					神圣的誓约<br>\
					为等您救度<br>\
					我辗转凡尘<br>\
					我轮回千秋<br>\
					<br>\
					如今我终于等到了您<br>\
					慈悲伟大的恩师<br>\
					这是真的<br>\
					这不是梦<br>\
					不是梦<br>\
					无量众生<br>\
					终得救',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/女声独唱：梦里的期盼.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/女声独唱：梦里的期盼.jpg'
			},
			{
			    id: 38,
			    title: 'The Way Home（返本归真之路）',
			    singer: '作者/词: Steve & Kazu',
				ci:'Lost, lost, lost in a mase (迷呀迷，迷中迷)<br>\
					Anxious days seemed endless (似乎苦海无止境)<br>\
					Until one day a knock at my door (直到那么一天)<br>\
					The buddha light shining brightly (佛光照耀光临)<br>\
					<br>\
					Making our way home,on the last leg of the journey (快快你的步伐 快回家)<br>\
					Making our way home,the law wheel is turning,making<br>\
					our way home. (法轮旋转带领我们回家)<br>\
					<br>\
					Verse Two<br>\
					<br>\
					Slowly fading away<br>\
					The notions i’d harboured (妄念渐消失，让我心更清)<br>\
					Becoming clearer each day<br>\
					The buddha light showing me the way<br>\
					The way (明亮佛之光，指引我归途，指引回归路)<br>\
					<br>\
					Making our way home,on the last leg of the journey, (快快你的步伐 快回家)<br>\
					Making our way home,the law wheel is turning (法轮转又转)<br>\
					Making our way home,on the last leg of the journey (快快你的步伐 快回家)<br>\
					Making our way home. (快回家)<br>\
					<br>\
					Verse Two [repeat] [重复]<br>\
					<br>\
					Making our way home,on the last leg of the journey,<br>\
					Making our way home,the law wheel is turning<br>\
					Making our way home,on the last leg of the journey<br>\
					Making our way home.',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/The Way Home（返本归真之路）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/The Way Home（返本归真之路）.jpg'
			},
			{
			    id: 39,
			    title: 'Saturday Morning（星期六早晨）',
			    singer: '作曲/演唱：Steve Milne',
				ci:'周六清晨的海边<br>\
					海风吹拂我静坐<br>\
					优雅音乐在飞扬<br>\
					焦虑也随之烟散<br>\
					孩子睁眼在凝视<br>\
					想起久远的记忆<br>\
					忘记了奔跑嬉戏<br>\
					梦中乐园仍如故<br>\
					别让忙碌给掩埋<br>\
					把今天留给自己<br>\
					就要从现在开始<br>\
					迈大步走出迷雾<br>\
					<br>\
					周六清晨的海边<br>\
					晨风中闭目佇立<br>\
					烦恼也随之飘逝<br>\
					生命负重不再有<br>\
					别让忙碌给掩埋<br>\
					把今天留给自己<br>\
					不要再漫无目光<br>\
					迈大步走出迷雾<br>\
					别让忙碌给掩埋<br>\
					把今天留给自己<br>\
					不要再漫无目光<br>\
					迈大步走出迷雾<br>\
					',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/Saturday Morning（星期六早晨）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/Saturday Morning（星期六早晨）.jpg'
			},
			{
			    id: 40,
			    title: '我，义无反顾 - 伴奏',
			    singer: '九洲',
				ci:'曾经，我们约定，一同世上把真法找寻<br>\
					世间名利，混沌无底，多少生灵负债难醒<br>\
					昏沉的道，魔引领着跑，迷茫的人群却在劫难逃<br>\
					（副歌）<br>\
					如果，我不能兑现承诺，将止不住痛心和泪眼滂沱，不怕艰险，我不怕劳苦，只要你得度！<br>\
					如果，我不能兑现承诺，将止不住痛心和泪眼滂沱，不怕艰险，我不怕劳苦，只要你得度，我义无反顾！<br>\
					<br>\
					如今，找到了你，我把真相递给了你，<br>\
					为何你慌，为何你拒，为何情愿让荒唐占据？<br>\
					诡辞连篇，荒诞无稽，莫非名与利真能让你安心？<br>\
					（副歌）<br>\
					如果，我不能兑现承诺，将止不住痛心和泪眼滂沱，不怕艰险，我不怕劳苦，只要你得度！如果，我不能兑现承诺，将止不住痛心和泪眼滂沱，不怕艰险，我不怕劳苦，只要你得度，我义无反顾！<br>\
					<br>\
					心疼你！被谎言聚满那脆弱敏感的心！<br>\
					珍惜你！为你盼得法而不惧危险的心！',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/我，义无反顾 - 伴奏.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/我，义无反顾 - 伴奏.jpg'
			},
			{
			    id: 41,
			    title: '我，义无反顾合唱（女声领唱）',
			    singer: '演唱：九洲 墨尔本合唱团',
				ci:'曾经，我们约定，一同世上把真法找寻<br>\
					世间名利，混沌无底，多少生灵负债难醒<br>\
					昏沉的道，魔引领着跑，迷茫的人群却在劫难逃<br>\
					（副歌）<br>\
					如果，我不能兑现承诺，将止不住痛心和泪眼滂沱，不怕艰险，我不怕劳苦，只要你得度！<br>\
					如果，我不能兑现承诺，将止不住痛心和泪眼滂沱，不怕艰险，我不怕劳苦，只要你得度，我义无反顾！<br>\
					<br>\
					如今，找到了你，我把真相递给了你，<br>\
					为何你慌，为何你拒，为何情愿让荒唐占据？<br>\
					诡辞连篇，荒诞无稽，莫非名与利真能让你安心？<br>\
					（副歌）<br>\
					如果，我不能兑现承诺，将止不住痛心和泪眼滂沱，不怕艰险，我不怕劳苦，只要你得度！如果，我不能兑现承诺，将止不住痛心和泪眼滂沱，不怕艰险，我不怕劳苦，只要你得度，我义无反顾！<br>\
					<br>\
					心疼你！被谎言聚满那脆弱敏感的心！<br>\
					珍惜你！为你盼得法而不惧危险的心！',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/我，义无反顾合唱（女声领唱）.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/找回真我（小提琴、钢琴、bE调）.jpg'
			},
			{
			    id: 42,
			    title: '钢琴独奏曲：万象更新',
			    singer: '作曲/演奏：Haroldo Rodrigues',
				ci:'2021年是中国传统新年中的牛年，两位来自德国的大法弟子想用一首钢琴独奏曲“万象更新”和一首诗，一起来表达对慈悲伟大的师尊的救度之恩：“恭祝师尊过年好！谢谢师父！”<br>\
					他们想用自己的原创作品呈现创世主的洪大慈悲，天国圣境的纯净美好和进入新宇宙众生们的无比喜悦。<br>\
					钢琴曲：万象更新<br>\
					诗：<br>\
					万象更新<br>\
					星辰斗转天宇清<br>\
					大选起伏人心明<br>\
					亘古天门迎义仁<br>\
					悠悠万载纪元兴',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/钢琴独奏曲：万象更新.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/正气歌（伴奏）.jpg'
			},
			{
			    id: 43,
			    title: '女声独唱：飞天庭',
			    singer: '作曲：知恩',
				ci:'微风吹拂闻佳音<br>\
					风摆柳动仙姿影<br>\
					橙红紫绿舞娉婷<br>\
					瑶步款款入仙境<br>\
					<br>\
					迎春花开舞东风<br>\
					百花争艳碧水清<br>\
					晚风扶弄枝叶青<br>\
					仙鹤扶摇飞天庭<br>\
					<br>\
					仙娥曼舞声声吟<br>\
					妙音飘渺细聆听<br>\
					焚香举目邀嫦娥<br>\
					道童仙子舞月影',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/女声独唱：飞天庭.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/女声独唱：飞天庭.jpg'
			},
			{
			    id: 44,
			    title: '乐曲：真善忍的光芒',
			    singer: '曲/配器：TONY CHEN',
				ci:'介绍：<br>\
					这一首曲子作为2021年的第一首创作，想要发自内心赞颂“真善忍”。<br>\
					“真善忍”三个字简单但却威力巨大，无论你多繁杂的思绪，念动“真善忍”的时候会将它们都驱散。无论这个世界多么复杂、道德下滑的速度有多快、时局有多么动荡，“真善忍”三个字永远都不会变，念动他，一切邪恶会被解体驱散。在瘟疫的肆虐中，念动他可保平安。相信不久的将来“真善忍”的光芒会温暖每一个人的心田、照亮整个寰宇。此曲叫做“真善忍的光芒“，“真善忍”内涵极其广大，此曲灵感仅来自我在法轮大法修炼中现有层次的理解。',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/乐曲：真善忍的光芒.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/乐曲：真善忍的光芒.jpg'
			},
			{
			    id: 45,
			    title: '铜管重奏：希望之光 (The Light)',
			    singer: '作者：Peter Wetzel',
				ci:'Auf dem Weg in die Wahrhaftigkeit<br>\
					gibt es Tage voller Dunkelheit<br>\
					Wo kann ich nur hin, in dem Leid bestehn<br>\
					Da hab ich ein kleines Licht gesehn<br>\
					Da ist ein Licht kanns noch nicht deutlich sehn<br>\
					Da ist ein Licht mein Herz es möcht dorthin<br>\
					Bleib jetzt nicht stehn, musst nur weiter gehen<br>\
					Dann wirst du es klarer sehn<br>\
					Ja dann wirst du die Wahrheit sehn<br>\
					Ist das Herz mal ruhig und klar<br>\
					Scheint das Licht auf einmal mir so nah<br>\
					Wohin kann ich gehn, hab nicht so viel Zeit<br>\
					Auf dem Weg in die Barmherzigkeit<br>\
					Da ist ein Licht es leuchtet hell und schön<br>\
					Da ist ein Licht ich kann es deutlich sehn<br>\
					Schau in dich rein, find den hellen Schein<br>\
					Dann wirst du gesegnet sein<br>\
					Ja, dann wirst du barmherzig sein<br>\
					Es gibt Menschen, bös und voller Neid<br>\
					ruhig dein Herz, das ist was Nachsicht heißt<br>\
					Du musst aufrecht stehn, darfst nicht untergehn<br>\
					Dann wirst du die ganze Wahrheit sehn<br>\
					Da ist ein Licht es leuchtet hell und klar<br>\
					Da ist ein Licht ich glaub ich bin bald da<br>\
					Ich bleib nicht stehn, werd nicht untergehen<br>\
					Dann werd ich zu Hause sein<br>\
					Ja dann bin ich wieder daheim',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/铜管重奏：希望之光 (The Light).mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/世界需要真善忍.jpg'
			},
			{
			    id: 46,
			    title: '伴奏音乐：千年等大法',
			    singer: '作曲：丁文 配器：明珂',
				ci:'红尘世 五千年<br>\
					踏着风霜寻故乡<br>\
					看天望明月<br>\
					心潮起波浪<br>\
					涌动着远古的盼望<br>\
					名利情让人醉<br>\
					誓约洪愿早已忘<br>\
					坠落红尘浊浪<br>\
					沉入迷雾苍茫<br>\
					暗夜中不知归航<br>\
					<br>\
					天已大亮<br>\
					婆罗花开放<br>\
					创世法王降临世上<br>\
					大梦醒来早已泪流面庞<br>\
					大法能破除迷障<br>\
					回天乡是希望<br>\
					大法已来到世上<br>\
					唤醒了<br>\
					久远的梦想<br>\
					随创世主回归穹苍<br>\
					<br>\
					出生时 为何哭<br>\
					掉進迷潭难回故乡<br>\
					轮回剧中徜徉<br>\
					远古记忆似梦<br>\
					等来大戏最后一场<br>\
					<br>\
					天门已开<br>\
					前程光亮<br>\
					快快醒来上渡航<br>\
					不要错过<br>\
					千年的等待<br>\
					今朝就要回故乡<br>\
					大法开启尘封记忆<br>\
					创世主将新宇开创<br>\
					唤醒了<br>\
					久远的梦想<br>\
					随创世主回归穹苍',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/伴奏音乐：千年等大法.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/伴奏音乐：千年等大法.jpg'
			},
			{
			    id: 47,
			    title: '女声独唱：雨后',
			    singer: '演唱：雨晴',
				ci:'十五月儿十六圆，月明星繁照九天，<br>\
					乾坤朗朗宇宙明，风雨过后尽开颜。<br>\
					助师正法度众生，历尽万苦与千辛，<br>\
					他日圆满乘风去，无垠苍穹天地行。<br>\
					真象大显天地明, 佛恩浩荡似春风. <br>\
					功成圆满随师还, 天地永固法长存。<br>\
					大法弟子亿万众，众志成城魔胆寒。<br>\
					齐发正念灭败物, 法正人间有一天。',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/女声独唱：雨后.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/女声独唱：雨后.jpg'
			},
			{
			    id: 48,
			    title: '儿歌：福无边',
			    singer: '演唱：大法小弟子 美慧',
				ci:'儿歌：福无边<br>\
					改编自《小帆船》<br>\
					作曲：新乐<br>\
					填词：朵朵莲<br>\
					演唱：大法小弟子 美慧<br>\
					<br>\
					繁星闪 宇宙转<br>\
					星转斗移如梦幻<br>\
					星如浩瀚月如烟<br>\
					万千世界多变换<br>\
					<br>\
					星河转 银河变<br>\
					万千生命轮回转<br>\
					浩渺宇宙一尘埃<br>\
					同化大法福无边<br>\
					<br>\
					日也转 月也转<br>\
					天地万物谁掌管<br>\
					宇宙大法创世主<br>\
					法正乾坤新宇天<br>\
					法正乾坤新宇天',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/儿歌：福无边.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/儿歌：福无边.jpg'
			},
			{
			    id: 49,
			    title: '女声独唱：修炼路上',
			    singer: '演唱：如水',
				ci:'词曲：证道 <br>\
					编曲：如初<br>\
					演唱：如水<br>\
					<br>\
					在黑暗中我苦苦求索，<br>\
					人来世间究竟为什么？<br>\
					生死轮回千辛万苦，<br>\
					不知怎样能彻底解脱。<br>\
					<br>\
					终于等到今天这一刻，<br>\
					大法让我不再迷惑，<br>\
					修炼路上哪怕千难万险，<br>\
					不负众望兑现誓约。<br>\
					<br>\
					不管多少风雨坎坷，<br>\
					紧随恩师降妖除魔，<br>\
					讲清真相慈悲救度众生，<br>\
					圆满功成同回天国。',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/女声独唱：修炼路上.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/修炼的记忆.jpg'
			},
			{
			    id: 50,
			    title: '星星的故事',
			    singer: '作者/词: 晨曦 演唱: 研研',
				ci:'妈妈告诉我天上的星星对应人世间每一个人。<br>\
					我去想一想，我去看一看，找一找哪一颗是我，<br>\
					法轮旋呀旋，带我回天国，那里有我的众生。<br>\
					我要叫他们同化“真善忍”拥有美好的永远。<br>\
					法轮旋呀旋旋呀旋，风中，雨中，晴天。<br>\
					<br>\
					妈妈告诉我最亮的星星对应人世间最美的人。<br>\
					我去想一想，我去看一看，找一找哪一颗最亮。<br>\
					法轮旋呀旋，带我回天国，那里有我的众生。<br>\
					我要叫他们同化“真善忍”成就最亮的星星。<br>\
					法轮旋呀旋旋呀旋，风中，雨中，晴天。',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/星星的故事.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/梦醒.jpg'
			},
			{
			    id: 51,
			    title: '静心',
			    singer: '作者/词：晓萍 演唱：杨建生',
				ci:'小乔流水月儿明，风摆柳枝水中映；<br>\
					潺潺小溪云儿望，山中松柏竹中林。<br>\
					秉烛夜读寒窗苦，白日升起天地明；<br>\
					心中罗盘胸中法，宝剑出鞘马嘶鸣。<br>\
					宝剑出鞘马嘶鸣。',
			    songUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/静心.mp3',
			    imageUrl: 'https://www.tiandiming.com/9981/music/天音凈樂/img/静心.jpg'
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
			ci: $('.ci'),
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
			ci,
            songUrl,
            imageUrl
        } = this.musics.getSongByNum(this.song_index);
        this.audio.src = songUrl;
        this.render_doms.title.html(title);
        this.render_doms.singer.html(singer);
		this.render_doms.ci.html(ci);
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