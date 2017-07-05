/**
 * Created by Administrator on 2016/8/17 0017.
 */
var indexList = [
    {img:"index_send1.png",title:"【熊猫】成都熊猫养殖基地",face:"index_userface1.jpg",speak:"第一次离熊猫这么近"},
    {img:"index_send2.png",title:"【街巷】成都宽窄巷子",face:"index_userface2.jpg",speak:"成都地标，不得不去"},
    {img:"index_send3.png",title:"【山林】剑门关古镇",face:"index_userface3.jpg",speak:"逛古镇，访古足，寻古心"},
    {img:"index_send4.png",title:"【山水】自然风光",face:"index_userface4.jpg",speak:"新鲜的空气，神清气爽"},
    {img:"index_send5.png",title:"【名迹】乐山大佛",face:"index_userface5.jpg",speak:"佛曰：这里必须来！"},
    {img:"index_send6.png",title:"【名迹】峨眉山风景区",face:"index_userface6.jpg",speak:"云上金顶，天下峨眉"},
    {img:"index_send7.png",title:"【名迹】状元坊",face:"index_userface7.jpg",speak:"这里为嘛叫状元坊，来了就知道"}
];

var findHotList = [
    {src:	"find_hot_img1.png"	,title:	"威尼斯"	,continue:	"水上城堡，别有韵味"	},
    {src:	"find_hot_img2.png"	,title:	"爱情海"	,continue:	"一个适合留下故事的地方"	},
    {src:	"find_hot_img3.png"	,title:	"云南"	,continue:	"据说此景只闻天上有"	},
    {src:	"find_hot_img4.png"	,title:	"新加坡"	,continue:	"那是一座花园里的城市"	},
    {src:	"find_hot_img5.png"	,title:	"旧金山"	,continue:	"一个活力从未削减的城市"	},
    {src:	"find_hot_img6.png"	,title:	"上海"	,continue:	"这是一个小渔村逆袭的故事"},
    {src:	"find_hot_img7.png"	,title:	"内蒙古"	,continue:	"天苍苍，野茫茫，风吹草低现牛羊"	},
    {src:	"find_hot_img8.png"	,title:	"北京"	,continue:	"北京不用多说值得游玩的，很多"	},
    {src:	"find_hot_img9.png"	,title:	"夏威夷"	,continue:	"海浪沙滩仙人掌，还缺一位老船长"	}
];

var findInseatList = [
    {src:	"find_inseat_img1.png"	,title:"成都	",continue:"熊猫之都，萌发你的世界"},
    {src:	"find_inseat_img2.png"	,title:"苏州	",continue:"水墨人间，如行画中"},
    {src:	"find_inseat_img3.png"	,title:"武汉	",continue:"武汉，每天不一样	"},
    {src:	"find_inseat_img4.png"	,title:"江南	",continue:"江南水乡，旧的很有味道"},
    {src:	"find_inseat_img5.png"	,title:"湖南	",continue:"这是被毛主席描绘很美的地方"},
    {src:	"find_inseat_img6.png"	,title:"泰山	",continue:"会当凌绝顶，一览众山小"},
    {src:	"find_inseat_img7.png"	,title:"长江	",continue:"她又另一个名字，华夏之源"},
    {src:	"find_inseat_img8.png"	,title:"长城	",continue:"它居然是“好汉”的代名词"},
    {src:	"find_inseat_img9.png"	,title:"黄河	",continue:"奔腾的是中华的血脉"}
];

var findOutseatList = [
    {src:	"find_outseat_img1.png"	,title:"釜山	",continue:"这是韩流韩范的发源地"},
    {src:	"find_outseat_img2.png"	,title:"巴黎	",continue:"其实，这里不止有铁塔"},
    {src:	"find_outseat_img3.png"	,title:"伦敦	",continue:"体会异域风情的不错选择"},
    {src:	"find_outseat_img4.png"	,title:"罗马	",continue:"不能只在地理书上看到"},
    {src:	"find_outseat_img5.png"	,title:"亚马逊",continue:"额，红鹦鹉与绿鹦鹉"},
    {src:	"find_outseat_img6.png"	,title:"瑞士	",continue:"看到瑞士想到军刀的，请举爪"},
    {src:	"find_outseat_img7.png"	,title:"巴西	",continue:"热情，热烈，热诚，热爱"},
    {src:	"find_outseat_img8.png"	,title:"马来西亚	",continue:"咦？这是城堡风格教堂耶！"}
];

var userFooter = [
    {time:"2016.01.01 | 武汉",speak:"昔人已乘黄鹤去，此地空余黄鹤楼。",img:"find_inseat_img3.png"},
    {time:"2016.05.29 | 北京",speak:"我爱北京天安门，天安门上太阳升",img:"find_hot_img8.png"},
    {time:"2016.07.15 | 成都",speak:"就一个字，萌！",img:"find_inseat_img1.png"}
];

var wanttoCity = [
    "北京","上海","成都","广州","杭州","深圳","台湾","澳门","苏州","武汉","湖南","江南","云南"
];

var foodBtn = [
    {src:"food_icon1.png",title:"美食外卖"},
    {src:"food_icon2.png",title:"甜品饮食"},
    {src:"food_icon3.png",title:"果蔬生鲜"},
    {src:"food_icon4.png",title:"超市便利"},
    {src:"food_icon5.png",title:"品牌馆"},
    {src:"food_icon6.png",title:"鲜花蛋糕"},
    {src:"food_icon7.png",title:"小吃夜宵"},
    {src:"food_icon8.png",title:"全部分类"}
];

var helpBtn = [
    {src:"help_travel.png",title:"主题游"},
    {src:"help_write.png",title:"游记"},
    {src:"help_hotel.png",title:"酒店"},
    {src:"help_freedom.png",title:"自由行"},
    {src:"help_more.png",title:"更多"}
];

var helpList = [
    {src:	"help_icon1.png"	,title:	"自驾游"	,continue:	"心野，随心驰骋"	},
    {src:	"help_icon2.png"	,title:	"情侣游"	,continue:	"不只是长情告白"	},
    {src:	"help_icon3.png"	,title:	"山水游"	,continue:	"醉爱七秀山水"	},
    {src:	"help_icon4.png"	,title:	"亲子游"	,continue:	"换个方式疼爱宝贝"	}
];