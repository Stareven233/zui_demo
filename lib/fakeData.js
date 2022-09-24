/**
 * 随机数生成
 * max 最大值 默认10 不包含
 * min 最小值 默认0  包含
 */
function random(max, min) {
    min = min || 0
    max = max || 10
    return Math.floor(Math.random() * (max - min) + min)
}

/**
 * 随机生成16进制的Unicode编码来随机生成汉字
 */
 function randomChineseCharacters(num) {
  const arr = []
  let str
  for (let i = 0; i < num; i++) {
    // 汉字范围 U+4E00～U+9FA5
    str = '\\u' + (Math.floor(Math.random() * (40869 - 19968)) + 19968).toString(16)
    arr.push(eval(`'${str}'`))
  }
  return arr.join("")
}

function randomChChoice(num) {
 const res = []
 for (let i = 0; i < num; i++) {
    res.push(cn3500[random(cn3500.length)])
 }
 return res.join('')
}

/**
 * 生成随机数据
 * @fn {*} 生成方法 
 * @n {*} 生成数量 
 */
function GetList(fn, n) {
    n = n || 10;
    var list = [];
    for (var i = 0; i < n; i++) {
        var val = fn();
        if (val) {
            list.push(val)
        }
    }
    return list;
}

/**
 * 随机手机号
 */
function GetPhone() {
    var tow = random(9, 3);
    var n = random(999999999, 100000000);
    return '1' + tow + '' + n
}

/**
 * 随机身份证
 */
function GetIDCard() {
    var address = random(999999, 100000);
    var date = new Date();
    var yearfull = date.getFullYear();
    var y = random(yearfull + 1, yearfull - 70);
    var m = random(13, 1);
    var d = random(30, 1);
    var z = random(9999, 1000);
    if (m < 10) {
        m = '0' + m;
    }
    if (d < 10) {
        d = '0' + d;
    }
    return address + '' + y + '' + m + '' + d + '' + z + '';
}

/**
 * 从身份证获取生日，年龄，性别
 * @param {*} idCard 
 */
function GetIdCardInfo(idCard) {
    var data = {};
    var date = new Date();
    var yearfull = date.getFullYear();
    var _sex = parseInt(idCard.substring(14, 1), 10) % 2 ? "男" : "女"; //性别
    if (_sex == "男") {
        data.sex = {
            b: true,
            n: 1,
            c: "男",
        }
    }
    if (_sex == "女") {
        data.sex = {
            b: false,
            n: 0,
            c: "女",
        }
    }
    var birthday = "";
    birthday = idCard.substr(6, 8);
    birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");

    data.birthday = birthday;

    //获取年龄
    var myDate = new Date(data.birthday);
    var myear = myDate.getFullYear();

    data.age = yearfull - myear;
    return data;
}

/**
 * 随机英文名字
 */
function GetName_En(_LastName) {
    return GetLastName_En() +'·'+ GetLastName_En();
}

/**
 * 随机名字
 */
function GetName(_LastName) {
    if(_LastName){
        return _LastName + GetFirstName();
    }
    return GetLastName() + GetFirstName();
}

const getNickName = () => {
    const names = [
        GetName_En(), 
        randomChChoice(random(12, 1)),
        randomChineseCharacters(random(9, 2))
    ]
    return names[random(3)]
}

/**
 * 随机姓 英文
 */
function GetLastName_En() {
    return LastName_En[random(LastName_En.length, 0)];
}

/**
 * 随机姓
 */
function GetLastName() {
    return LastName[random(LastName.length, 0)];
}

/**
 * 随机名
 */
function GetFirstName() {
    //1-单字名
    //2-双字名
    //3-三字名
    //-1-叠字
    var n_arr = [
        1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 
        2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, 3];
    var n = n_arr[random(n_arr.length, 0)];
    var name = '';
    if (n < 0) {
        var nn = FirstName[random(FirstName.length, 0)];
        name += nn + nn;
    } else {
        for (let i = 0; i < n; i++) {
            name += FirstName[random(FirstName.length, 0)];
        }
    }
    return name;
}

/**
 * 随机车
 */
function GetCar() {
    return Car[random(Car.length, 0)];
}

/**
 * 随机公司
 */
function GetCop() {
    return Cop[random(Cop.length, 0)];
}

/**
 * 生成银行卡信息
 */
function GetBankCard() {
    var max_bank = random(bank.length, 0);
    var max_bank2 = random(max_bank, 0);
    var max_bank3 = random(max_bank2, 0);
    var _Bank = bank[random(max_bank3, 0)];
    var max_money = random(99999999999, 0);
    var max_money2 = random(max_money, 0);
    var max_money3 = random(max_money2, 0);
    return {
        bankname: _Bank.name,
        card: _Bank.code + '' + random(9999999999999, 1000000000000),
        money: random(max_money3, 0)
    }
}

const bank = [{
  "name": "中国工商银行",
  "code": 623865
}, {
  "name": "招商银行",
  "code": 623045
}, {
  "name": "中国农业银行",
  "code": 624749
}, {
  "name": "中国建设银行",
  "code": 624448
}, {
  "name": "中国银行",
  "code": 627504
},]
const Cop = ['中国石油化工集团公司', '中国石油天然气集团公司' , '中国建筑工程总公司', '鸿海精密工业股份有限公司','中国工商银行', '中国平安保险','中国建设银行','好市多', '中国农业银行',  '中国人寿保险',  '中国银行', '中国移动通信集团公司','中国铁路工程总公司', '中国铁道建筑总公司']
const Car = ['奥迪', 'ABT', 'AC Schnitzer', 'ALPINA', '宝马', '奔驰', '保时捷', '宝沃', '大众', '捷达', '卡尔曼', '卡尔森', '罗伦士', '欧宝', '奔驰Smart', '西雅特', '本田', '丰田', '雷克萨斯', '铃木', '马自达', '讴歌', '日产']
const LastName_En=['Aaron','Abel','Abraham','Adam','Adrian','Alva','Alex','Alexander','Alan','Albert','Alfred','Andrew','Andy','Angus','Anthony','Arthur','Austin','Ben','Benson','Bill','Bob','Brandon','Brant','Brent','Brian']
const LastName = [
  '赵', '钱', '孙', '李', '周', '吴', '郑', '王',
  '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨',
  '朱', '秦', '尤', '许', '何', '吕', '施', '张',
  '孔', '曹', '严', '华', '金', '魏', '陶', '姜',
  '戚', '谢', '邹', '喻', '柏', '水', '窦', '章',
  '云', '苏', '潘', '葛', '奚', '范', '彭', '郎',
  '鲁', '韦', '昌', '马', '苗', '凤', '花', '方',
  '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐',
  '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤',
  '滕', '殷', '罗', '毕', '郝', '邬', '安', '常',
  '乐', '于', '时', '傅', '皮', '卞', '齐', '康',
  '伍', '余', '元', '卜', '顾', '孟', '平', '黄',
  '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪',
  '祁', '毛', '禹', '狄', '米', '贝', '明', '臧',
  '计', '伏', '成', '戴', '谈', '宋', '茅', '庞',
  '熊', '纪', '舒', '屈', '项', '祝', '董', '梁',
  '杜', '阮', '蓝', '闵', '席', '季', '麻', '强',
  '贾', '路', '娄', '危', '江', '童', '颜', '郭',
  '梅', '盛', '林', '刁', '钟', '徐', '邱', '骆',
  '高', '夏', '蔡', '田', '樊', '胡', '凌', '霍',
  '虞', '万', '支', '柯', '昝', '管', '卢', '莫',
  '经', '房', '裘', '缪', '干', '解', '应', '宗',
  '丁', '宣', '贲', '邓', '郁', '单', '杭', '洪',
  '包', '诸', '左', '石', '崔', '吉', '钮', '龚',
  '程', '嵇', '邢', '滑', '裴', '陆', '荣', '翁',
  '荀', '羊', '於', '惠', '甄', '曲', '家', '封',
  '芮', '羿', '储', '靳', '汲', '邴', '糜', '松',
  '井', '段', '富', '巫', '乌', '焦', '巴', '弓',
  '牧', '隗', '山', '谷', '车', '侯', '宓', '蓬',
  '全', '郗', '班', '仰', '秋', '仲', '伊', '宫',
  '宁', '仇', '栾', '暴', '甘', '钭', '厉', '戎',
  '祖', '武', '符', '刘', '景', '詹', '束', '龙',
  '叶', '幸', '司', '韶', '郜', '黎', '蓟', '薄',
  '印', '宿', '白', '怀', '蒲', '邰', '从', '鄂',
  '索', '咸', '籍', '赖', '卓', '蔺', '屠', '蒙',
  '池', '乔', '阴', '鬱', '胥', '能', '苍', '双',
  '闻', '莘', '党', '翟', '谭', '贡', '劳', '逄',
  '姬', '申', '扶', '堵', '冉', '宰', '郦', '雍',
  '卻', '璩', '桑', '桂', '濮', '牛', '寿', '通',
  '边', '扈', '燕', '冀', '郏', '浦', '尚', '农',
  '温', '别', '庄', '晏', '柴', '瞿', '阎', '充',
  '慕', '连', '茹', '习', '宦', '艾', '鱼', '容',
  '向', '古', '易', '慎', '戈', '廖', '庾', '终',
  '暨', '居', '衡', '步', '都', '耿', '满', '弘',
  '匡', '国', '文', '寇', '广', '禄', '阙', '东',
  '欧', '殳', '沃', '利', '蔚', '越', '夔', '隆',
  '师', '巩', '厍', '聂', '晁', '勾', '敖', '融',
  '冷', '訾', '辛', '阚', '那', '简', '饶', '空',
  '曾', '毋', '沙', '乜', '养', '鞠', '须', '丰',
  '巢', '关', '蒯', '相', '查', '后', '荆', '红',
  '游', '竺', '权', '逯', '盖', '益', '桓', '公',
  '万俟', '司马', '上官', '欧阳',
  '夏侯', '诸葛', '闻人', '东方',
  '赫连', '皇甫', '尉迟', '公羊',
  '澹台', '公冶', '宗政', '濮阳',
  '淳于', '单于', '太叔', '申屠',
  '公孙', '仲孙', '轩辕', '令狐',
  '钟离', '宇文', '长孙', '慕容',
  '鲜于', '闾丘', '司徒', '司空',
  '丌官', '司寇', '仉督', '子车',
  '颛孙', '端木', '巫马', '公西',
  '漆雕', '乐正', '壤驷', '公良',
  '拓跋', '夹谷', '宰父', '谷梁',
  '晋', '楚', '闫', '法', '汝', '鄢', '涂', '钦',
  '段干', '百里', '东郭', '南门',
  '呼延', '归海', '羊舌', '微生',
  '岳', '帅', '缑', '亢', '况', '郈', '有', '琴',
  '梁丘', '左丘', '东门', '西门',
  '商', '牟', '佘', '佴', '伯', '赏', '南宫',
  '墨', '哈', '谯', '笪', '年', '爱', '阳', '佟', '第五', '言', '福',
]
const cn3500 = "一乙二十丁厂七卜八人入儿九几了乃刀力又三干于亏士土工才下寸丈大与万上小口山巾千乞川亿个么久勺丸夕凡及广亡门义之尸已弓己卫子也女飞刃习叉马乡丰王井开夫天元无云专扎艺木五支厅不太犬区历友尤匹车巨牙屯比互切瓦止少日中贝内水冈见手午牛毛气升长仁什片仆化仇币仍仅斤爪反介父从今凶分乏公仓月氏勿风欠丹匀乌勾凤六文方火为斗忆计订户认心尺引丑巴孔队办以允予劝双书幻玉刊末未示击打巧正扑扒功扔去甘世古节本术可丙左厉石右布龙平灭轧东卡北占业旧帅归目旦且叮叶甲申号电田由只央史兄叼叫叨另叹四生失禾丘付仗代仙们仪白仔他斥瓜乎丛令用甩印乐句匆册犯外处冬鸟务包饥主市立闪兰半汁汇头汉宁穴它讨写让礼训必议讯记永司尼民出辽奶奴加召皮边孕发圣对台矛纠母幼丝式刑动扛寺吉扣考托老圾巩执扩扫地扬场耳共芒亚芝朽朴机权过臣再协西压厌在百有存而页匠夸夺灰达列死成夹轨邪划迈毕至此贞师尘尖劣光当早吐吓虫曲团同吊吃因吸吗屿帆岁回岂则刚网肉年朱先丢舌竹迁乔伟传乒乓休伍伏优伐延件任伤价份华仰仿伙伪自血向似后行舟全会杀合兆企众爷伞创肌朵杂危旬旨负各名多争色壮冲冰庄庆亦刘齐交次衣产决充妄闭问闯羊并关米灯州汗污江池汤忙兴宇守宅字安讲军许论农讽设访寻那迅尽导异孙阵阳收阶阴防奸如妇好她妈戏羽观欢买红纤约级纪驰巡寿弄麦形进戒吞远违运扶抚坛技坏扰拒找批扯址走抄坝贡攻赤折抓扮抢孝均抛投坟坑抗坊抖护壳志块扭声把报却劫芽花芹芬苍芳严芦劳克苏杆杜杠材村杏极李杨求更束豆两丽医辰励否还歼来连步坚旱盯呈时吴助县里呆园旷围呀吨足邮男困吵串员听吩吹呜吼吧别岗帐财钉针告我乱利秃秀私每兵估体何但伸作伯伶佣低你住位伴身皂佛近彻役返余希坐谷妥含邻岔肝肚肠龟免狂犹角删条卵岛迎饭饮系言冻状亩况床库疗应冷这序辛弃冶忘闲间闷判灶灿弟汪沙汽沃泛沟没沈沉怀忧快完宋宏牢究穷灾良证启评补初社识诉诊词译君灵即层尿尾迟局改张忌际陆阿陈阻附妙妖妨努忍劲鸡驱纯纱纲纳纵驳纷纸纹纺驴纽奉玩环武青责现表规抹拢拔拣坦担押抽拐拖者拍顶拆拥抵拘势抱垃拉拦幸拌招坡披拨择抬其取苦若茂苹苗英范直茄茎茅林枝杯柜析板松枪构杰述枕丧或画卧事刺枣雨卖矿码厕奔奇奋态欧垄妻轰顷转斩轮软到非叔肯齿些虎虏肾贤尚旺具果味昆国昌畅明易昂典固忠咐呼鸣咏呢岸岩帖罗帜岭凯败贩购图钓制知垂牧物乖刮秆和季委佳侍供使例版侄侦侧凭侨佩货依的迫质欣征往爬彼径所舍金命斧爸采受乳贪念贫肤肺肢肿胀朋股肥服胁周昏鱼兔狐忽狗备饰饱饲变京享店夜庙府底剂郊废净盲放刻育闸闹郑券卷单炒炊炕炎炉沫浅法泄河沾泪油泊沿泡注泻泳泥沸波泼泽治怖性怕怜怪学宝宗定宜审宙官空帘实试郎诗肩房诚衬衫视话诞询该详建肃隶录居届刷屈弦承孟孤陕降限妹姑姐姓始驾参艰线练组细驶织终驻驼绍经贯奏春帮珍玻毒型挂封持项垮挎城挠政赴赵挡挺括拴拾挑指垫挣挤拼挖按挥挪某甚革荐巷带草茧茶荒茫荡荣故胡南药标枯柄栋相查柏柳柱柿栏树要咸威歪研砖厘厚砌砍面耐耍牵残殃轻鸦皆背战点临览竖省削尝是盼眨哄哑显冒映星昨畏趴胃贵界虹虾蚁思蚂虽品咽骂哗咱响哈咬咳哪炭峡罚贱贴骨钞钟钢钥钩卸缸拜看矩怎牲选适秒香种秋科重复竿段便俩货顺修保促侮俭俗俘信皇泉鬼侵追俊盾待律很须叙剑逃食盆胆胜胞胖脉勉狭狮独狡狱狠贸怨急饶蚀饺饼弯将奖哀亭亮度迹庭疮疯疫疤姿亲音帝施闻阀阁差养美姜叛送类迷前首逆总炼炸炮烂剃洁洪洒浇浊洞测洗活派洽染济洋洲浑浓津恒恢恰恼恨举觉宣室宫宪突穿窃客冠语扁袄祖神祝误诱说诵垦退既屋昼费陡眉孩除险院娃姥姨姻娇怒架贺盈勇怠柔垒绑绒结绕骄绘给络骆绝绞统耕耗艳泰珠班素蚕顽盏匪捞栽捕振载赶起盐捎捏埋捉捆捐损都哲逝捡换挽热恐壶挨耻耽恭莲莫荷获晋恶真框桂档桐株桥桃格校核样根索哥速逗栗配翅辱唇夏础破原套逐烈殊顾轿较顿毙致柴桌虑监紧党晒眠晓鸭晃晌晕蚊哨哭恩唤啊唉罢峰圆贼贿钱钳钻铁铃铅缺氧特牺造乘敌秤租秧积秩称秘透笔笑笋债借值倚倾倒倘俱倡候俯倍倦健臭射躬息徒徐舰舱般航途拿爹爱颂翁脆脂胸胳脏胶脑狸狼逢留皱饿恋桨浆衰高席准座症病疾疼疲脊效离唐资凉站剖竞部旁旅畜阅羞瓶拳粉料益兼烤烘烦烧烛烟递涛浙涝酒涉消浩海涂浴浮流润浪浸涨烫涌悟悄悔悦害宽家宵宴宾窄容宰案请朗诸读扇袜袖袍被祥课谁调冤谅谈谊剥恳展剧屑弱陵陶陷陪娱娘通能难预桑绢绣验继球理捧堵描域掩捷排掉推堆掀授教掏掠培接控探据掘职基著勒黄萌萝菌菜萄菊萍菠营械梦梢梅检梳梯桶救副票戚爽聋袭盛雪辅辆虚雀堂常匙晨睁眯眼悬野啦晚啄距跃略蛇累唱患唯崖崭崇圈铜铲银甜梨犁移笨笼笛符第敏做袋悠偿偶偷您售停偏假得衔盘船斜盒鸽悉欲彩领脚脖脸脱象够猜猪猎猫猛馅馆凑减毫麻痒痕廊康庸鹿盗章竟商族旋望率着盖粘粗粒断剪兽清添淋淹渠渐混渔淘液淡深婆梁渗情惜惭悼惧惕惊惨惯寇寄宿窑密谋谎祸谜逮敢屠弹随蛋隆隐婚婶颈绩绪续骑绳维绵绸绿琴斑替款堪塔搭越趁趋超提堤博揭喜插揪搜煮援裁搁搂搅握揉斯期欺联散惹葬葛董葡敬葱落朝辜葵棒棋植森椅椒棵棍棉棚棕惠惑逼厨厦硬确雁殖裂雄暂雅辈悲紫辉敞赏掌晴暑最量喷晶喇遇喊景践跌跑遗蛙蛛蜓喝喂喘喉幅帽赌赔黑铸铺链销锁锄锅锈锋锐短智毯鹅剩稍程稀税筐等筑策筛筒答筋筝傲傅牌堡集焦傍储奥街惩御循艇舒番释禽腊脾腔鲁猾猴然馋装蛮就痛童阔善羡普粪尊道曾焰港湖渣湿温渴滑湾渡游滋溉愤慌惰愧愉慨割寒富窜窝窗遍裕裤裙谢谣谦属屡强粥疏隔隙絮嫂登缎缓骗编缘瑞魂肆摄摸填搏塌鼓摆携搬摇搞塘摊蒜勤鹊蓝墓幕蓬蓄蒙蒸献禁楚想槐榆楼概赖酬感碍碑碎碰碗碌雷零雾雹输督龄鉴睛睡睬鄙愚暖盟歇暗照跨跳跪路跟遣蛾蜂嗓置罪罩错锡锣锤锦键锯矮辞稠愁筹签简毁舅鼠催傻像躲微愈遥腰腥腹腾腿触解酱痰廉新韵意粮数煎塑慈煤煌满漠源滤滥滔溪溜滚滨粱滩慎誉塞谨福群殿辟障嫌嫁叠缝缠静碧璃墙嘉摧截誓境摘摔撇聚慕暮蔑蔽模榴榜榨歌遭酷酿酸磁愿需裳颗嗽蜻蜡蝇蜘赚锹锻舞稳算箩管僚鼻魄貌膜膊膀鲜疑馒裹敲豪膏遮腐瘦辣竭端旗精歉弊熄熔漆漂漫滴演漏慢寨赛察蜜谱嫩翠熊凳骡缩慧撕撒趣趟撑播撞撤增聪鞋蕉蔬横槽樱橡飘醋醉震霉瞒题暴瞎影踢踏踩踪蝶蝴嘱墨镇靠稻黎稿稼箱箭篇僵躺僻德艘膝膛熟摩颜毅糊遵潜潮懂额慰劈操燕薯薪薄颠橘整融醒餐嘴蹄器赠默镜赞篮邀衡膨雕磨凝辨辩糖糕燃澡激懒壁避缴戴擦鞠藏霜霞瞧蹈螺穗繁辫赢糟糠燥臂翼骤鞭覆蹦镰翻鹰警攀蹲颤瓣爆疆壤耀躁嚼嚷籍魔灌蠢霸露囊罐匕刁丐歹戈夭仑讥冗邓艾夯凸卢叭叽皿凹囚矢乍尔冯玄邦迂邢芋芍吏夷吁吕吆屹廷迄臼仲伦伊肋旭匈凫妆亥汛讳讶讹讼诀弛阱驮驯纫玖玛韧抠扼汞扳抡坎坞抑拟抒芙芜苇芥芯芭杖杉巫杈甫匣轩卤肖吱吠呕呐吟呛吻吭邑囤吮岖牡佑佃伺囱肛肘甸狈鸠彤灸刨庇吝庐闰兑灼沐沛汰沥沦汹沧沪忱诅诈罕屁坠妓姊妒纬玫卦坷坯拓坪坤拄拧拂拙拇拗茉昔苛苫苟苞茁苔枉枢枚枫杭郁矾奈奄殴歧卓昙哎咕呵咙呻咒咆咖帕账贬贮氛秉岳侠侥侣侈卑刽刹肴觅忿瓮肮肪狞庞疟疙疚卒氓炬沽沮泣泞泌沼怔怯宠宛衩祈诡帚屉弧弥陋陌函姆虱三绅驹绊绎契贰玷玲珊拭拷拱挟垢垛拯荆茸茬荚茵茴荞荠荤荧荔栈柑栅柠枷勃柬砂泵砚鸥轴韭虐昧盹咧昵昭盅勋哆咪哟幽钙钝钠钦钧钮毡氢秕俏俄俐侯徊衍胚胧胎狰饵峦奕咨飒闺闽籽娄烁炫洼柒涎洛恃恍恬恤宦诫诬祠诲屏屎逊陨姚娜蚤骇耕耙秦匿埂捂捍袁捌挫挚捣捅埃耿聂荸莽莱莉莹莺梆栖桦栓桅桩贾酌砸砰砾殉逞哮唠哺剔蚌蚜畔蚣蚪蚓哩圃鸯唁哼唧唆峭峻赂赃钾铆氨秫笆俺赁倔殷耸舀豺豹颁胯胰脐脓逛卿鸵鸳馁凌凄衷郭斋疹紊瓷羔烙浦涡涣涤涧涕涩悍悯窍诺诽袒谆祟恕娩骏琐麸琉琅措捺捶赦埠捻掐掂掖掷掸掺勘聊娶菱菲萎菩萤干萧萨菇彬梗梧梭曹酝酗厢硅硕奢盔匾颅彪眶晤曼晦冕啡畦趾啃蛆蚯蛉蛀唬啰唾啤啥啸崎逻崔崩婴赊铐铛铝铡铣铭矫秸秽笙笤偎傀躯兜衅徘徒舶舷舵敛翎脯逸凰猖祭烹庶庵痊阎阐眷焊焕鸿涯淑淌淮淆渊淫淳淤淀涮涵惦悴惋寂窒谍谐裆袱祷谒谓谚尉堕隅婉颇绰绷综绽缀巢琳琢琼揍堰揩揽揖彭揣搀搓壹搔葫募蒋蒂韩棱椰焚椎棺榔椭粟棘酣酥硝硫颊雳翘凿棠晰鼎喳遏晾畴跋跛蛔蜒蛤鹃喻啼喧嵌赋赎赐锉锌甥掰氮氯黍筏牍粤逾腌腋腕猩猬惫敦痘痢痪竣翔奠遂焙滞湘渤渺溃溅湃愕惶寓窖窘雇谤犀隘媒媚婿缅缆缔缕骚瑟鹉瑰搪聘斟靴靶蓖蒿蒲蓉楔椿楷榄楞楣酪碘硼碉辐辑频睹睦瞄嗜嗦暇畸跷跺蜈蜗蜕蛹嗅嗡嗤署蜀幌锚锥锨锭锰稚颓筷魁衙腻腮腺鹏肄猿颖煞雏馍馏禀痹廓痴靖誊漓溢溯溶滓溺寞窥窟寝褂裸谬媳嫉缚缤剿赘熬赫蔫摹蔓蔗蔼熙蔚兢榛榕酵碟碴碱碳辕辖雌墅嘁踊蝉嘀幔镀舔熏箍箕箫舆僧孵瘩瘟彰粹漱漩漾慷寡寥谭褐裉隧嫡缨撵撩撮撬擒墩撰鞍蕊蕴樊樟橄敷豌醇磕磅碾嘶嘲嘹蝠蝎蝌蝗蝙嘿幢镊镐稽篓膘鲤鲫褒瘪瘤瘫凛憋澎潭潦澳潘澈澜澄憔懊憎翩褥谴鹤憨履嬉豫缭撼擂擅蕾薛薇擎翰噩橱橙瓢磺霍霎辙冀踱蹂蟆螃螟噪鹦黔穆篡篷篙篱儒膳鲸瘾瘸糙燎濒憾懈窿缰壕藐檬檐檩檀礁磷瞭瞬瞳瞪曙蹋蟋蟀嚎赡镣魏簇儡徽爵朦臊鳄糜癌懦豁臀藕藤瞻嚣鳍癞瀑襟璧戳攒孽蘑藻蹭蹬簸簿蟹靡癣羹鳖鬓攘蠕巍鳞糯譬霹躏髓蘸镶瓤矗"
const FirstName = "一丁丂七丄丅丆万丈三上下丌不与丏丐丑丒专且丕世丗丘丙业丛东丝丞丟丠両丢丣两严並丧个丫中丰丱串丳临丵丸丹为主丼丽举乃久乆乇么义之乌乍乎乏乐乑乒乓乔乕乖乗乘乙乚乛乜九乞也习乡乢乣乤乥书乧乨乩乪乫乬乭乮乯买乱乲乳乴乵乶乷乸乹乺乻乼乽乾乿亀亁亂亃亄亅了亇予争亊事二亍于亏亐云互亓五井亖亗亘亙亚些亜亝亞亟亠亡亢亣交亥亦产亨亩亪享京亭亮亯亰亱亲亳亴亵亶亷亸亹人亼亽亾亿什仁仂仃仄仅仆仇仈仉今介仌仍从仏仐仑仒仓仔";