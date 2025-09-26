// 中秋灯谜题库 - 50道题目
const riddles = [
    {
        question: "中秋佳节结良缘（打一城市名）",
        options: ["重庆", "成都", "合肥", "长沙"],
        answer: 0
    },
    {
        question: "明月照我还（打一明代文学家）",
        options: ["归有光", "李白", "杜甫", "苏轼"],
        answer: 0
    },
    {
        question: "中秋月饼（打一电脑名词）",
        options: ["软盘", "硬盘", "光盘", "U盘"],
        answer: 2
    },
    {
        question: "中秋度蜜月（打一成语）",
        options: ["喜出望外", "花好月圆", "明月清风", "两全其美"],
        answer: 1
    },
    {
        question: "中秋望月（打一《红楼梦》诗名）",
        options: ["对月寓怀", "中秋对月", "月赋", "望月怀远"],
        answer: 0
    },
    {
        question: "中秋过后又重阳（打一郑板桥诗句）",
        options: ["一节复一节", "一月又一月", "一秋又一秋", "一重阳又一重阳"],
        answer: 0
    },
    {
        question: "举头望明月（打一中药名）",
        options: ["当归", "茯苓", "黄芪", "人参"],
        answer: 0
    },
    {
        question: "中秋月饼（打一电脑名词）",
        options: ["软盘", "硬盘", "光盘", "点心"],
        answer: 2
    },
    {
        question: "明天日全食（打一字）",
        options: ["月", "日", "天", "明"],
        answer: 0
    },
    {
        question: "长安一片月（打一《水浒传》人物名）",
        options: ["秦明", "宋江", "吴用", "卢俊义"],
        answer: 0
    },
    {
        question: "月是故乡明（打一农业名词）",
        options: ["光照", "本土", "农家", "乡土"],
        answer: 1
    },
    {
        question: "一轮明月照窗前（打一礼貌用语）",
        options: ["光临舍下", "欢迎光临", "蓬荜生辉", "敬请光临"],
        answer: 0
    },
    {
        question: "举杯邀明月（打一礼貌用语）",
        options: ["请光临", "请喝酒", "请干杯", "请赏光"],
        answer: 3
    },
    {
        question: "寂寞嫦娥舒广袖（打一舞蹈术语）",
        options: ["水袖", "独舞", "长袖", "单人舞"],
        answer: 1
    },
    {
        question: "明月照我还（打一明代文学家）",
        options: ["归有光", "徐渭", "唐寅", "王守仁"],
        answer: 0
    },
    {
        question: "中秋赏菊（打一成语）",
        options: ["花好月圆", "明日黄花", "秋高气爽", "春花秋月"],
        answer: 0
    },
    {
        question: "中秋月饼（打一电脑名词）",
        options: ["软盘", "硬盘", "光盘", "磁盘"],
        answer: 2
    },
    {
        question: "中秋别后重团圆（打一影片名）",
        options: ["第二次握手", "团圆", "重逢", "月光重逢"],
        answer: 0
    },
    {
        question: "中秋望月（打一《红楼梦》诗名）",
        options: ["对月寓怀", "月赋", "望月", "怀月"],
        answer: 0
    },
    {
        question: "中秋过后又重阳（打一郑板桥诗句）",
        options: ["一节复一节", "一重又一重", "一阳又一阳", "一秋又一秋"],
        answer: 0
    },
    {
        question: "春风吹来白花开，中秋过后葫芦来。外穿黄衫藏黑豆，润肺凉心好药材。（打一水果）",
        options: ["梨", "苹果", "柿子", "柚子"],
        answer: 0
    },
    {
        question: "中秋月色露生花（打一商品名）",
        options: ["光明墨水", "月光墨水", "夜景墨水", "夜景啤酒"],
        answer: 1
    },
    {
        question: "中秋佳节大团圆（打一电影名）",
        options: ["喜相逢", "全家福", "团圆", "欢乐颂"],
        answer: 1
    },
    {
        question: "月到中秋（打一数字）",
        options: ["0", "1", "8", "15"],
        answer: 0
    },
    {
        question: "中秋晚上共团圆（打一水果）",
        options: ["葡萄", "西瓜", "柚子", "桂圆"],
        answer: 0
    },
    {
        question: "中秋明月（打一货币名称）",
        options: ["日元", "美元", "欧元", "人民币"],
        answer: 0
    },
    {
        question: "中秋望月（打一数学名词）",
        options: ["圆", "圆周", "圆心", "圆弧"],
        answer: 0
    },
    {
        question: "中秋旅游度蜜月（打一成语）",
        options: ["喜出望外", "双喜临门", "花好月圆", "喜气洋洋"],
        answer: 1
    },
    {
        question: "中秋朗月，宾主共赏（打一成语）",
        options: ["正大光明", "光明正大", "月明星稀", "众星捧月"],
        answer: 0
    },
    {
        question: "时逢中秋产于沪（打一成语）",
        options: ["日新月异", "与时俱进", "沧海桑田", "日积月累"],
        answer: 0
    },
    {
        question: "中秋月饼（打一电脑名词）",
        options: ["软盘", "硬盘", "光盘", "存储器"],
        answer: 2
    },
    {
        question: "中秋望月（打一唐诗目）",
        options: ["月夜", "望月", "对月", "月下"],
        answer: 0
    },
    {
        question: "中秋过后又重阳（打一诗句）",
        options: ["一节复一节", "一重又一重", "一阳又一阳", "一秋又一秋"],
        answer: 0
    },
    {
        question: "中秋别后重团圆（打一历史事件）",
        options: ["七七事变", "八一五", "九一八", "双十协定"],
        answer: 1
    },
    {
        question: "中秋月色露生花（打一成语）",
        options: ["水中捞月", "镜花水月", "花前月下", "月下花前"],
        answer: 1
    },
    {
        question: "中秋团圆（打一数学名词）",
        options: ["同心圆", "圆周", "直径", "半径"],
        answer: 0
    },
    {
        question: "中秋月饼（打一饮食用语）",
        options: ["点心", "晚餐", "早餐", "夜宵"],
        answer: 0
    },
    {
        question: "中秋望月（打一摄影术语）",
        options: ["满月照", "圆月照", "月光照", "夜景"],
        answer: 0
    },
    {
        question: "中秋佳节（打一电影名）",
        options: ["月满西楼", "花好月圆", "月光爱人", "月亮湾"],
        answer: 1
    },
    {
        question: "中秋度蜜月（打一成语）",
        options: ["花好月圆", "喜出望外", "双喜临门", "大喜过望"],
        answer: 0
    },
    {
        question: "中秋赏月（打一礼貌用语）",
        options: ["望光临", "请赏光", "请光临", "请赏月"],
        answer: 1
    },
    {
        question: "中秋归来（打一词牌名）",
        options: ["八归", "归来", "回波乐", "秋风引"],
        answer: 0
    },
    {
        question: "嫦娥下凡（打一花名）",
        options: ["月季", "牡丹", "菊花", "桂花"],
        answer: 0
    },
    {
        question: "中秋菊开（打一成语）",
        options: ["花好月圆", "明日黄花", "秋高气爽", "春花秋月"],
        answer: 0
    },
    {
        question: "明月照我还（打一明代文学家）",
        options: ["归有光", "徐渭", "唐寅", "王守仁"],
        answer: 0
    },
    {
        question: "举杯邀明月（打一礼貌用语）",
        options: ["请光临", "请喝酒", "请干杯", "请赏光"],
        answer: 3
    },
    {
        question: "寂寞嫦娥舒广袖（打一舞蹈术语）",
        options: ["水袖", "独舞", "长袖", "单人舞"],
        answer: 1
    },
    {
        question: "华夏共赏中秋月（打一旅游用语）",
        options: ["观光", "月圆", "团圆", "共同观赏"],
        answer: 0
    },
    {
        question: "中秋度蜜月（打一成语）",
        options: ["花好月圆", "喜出望外", "双喜临门", "大喜过望"],
        answer: 0
    },
    {
        question: "清风拂面中秋夜（打一四字常用语）",
        options: ["明月清风", "发扬光大", "光明正大", "正大光明"],
        answer: 1
    }
];

// 游戏状态
let currentQuestionIndex = 0;
let score = 0;
let currentRiddles = [];

// DOM元素
const startPage = document.getElementById('start-page');
const gamePage = document.getElementById('game-page');
const resultPage = document.getElementById('result-page');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const currentQuestionEl = document.getElementById('current-question');
const scoreEl = document.getElementById('score');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const finalScoreEl = document.getElementById('final-score');
const resultMessageEl = document.getElementById('result-message');

// 开始游戏
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

function startGame() {
    // 重置游戏状态
    currentQuestionIndex = 0;
    score = 0;
    
    // 随机选择10道题目（从50道中随机选）
    currentRiddles = [...riddles].sort(() => Math.random() - 0.5).slice(0, 10);
    
    // 更新UI
    showPage('start-page');
    setTimeout(() => {
        showPage('game-page');
        loadQuestion();
    }, 500);
}

function showPage(pageName) {
    // 隐藏所有页面
    startPage.classList.remove('active');
    gamePage.classList.remove('active');
    resultPage.classList.remove('active');
    
    // 显示指定页面
    document.getElementById(pageName).classList.add('active');
}

function loadQuestion() {
    if (currentQuestionIndex >= currentRiddles.length) {
        endGame();
        return;
    }
    
    const currentRiddle = currentRiddles[currentQuestionIndex];
    
    // 更新问题信息
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    scoreEl.textContent = score;
    questionEl.textContent = currentRiddle.question;
    
    // 清空选项
    optionsEl.innerHTML = '';
    
    // 添加选项
    currentRiddle.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        optionElement.addEventListener('click', () => checkAnswer(index));
        optionsEl.appendChild(optionElement);
    });
}

function checkAnswer(selectedIndex) {
    const currentRiddle = currentRiddles[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    // 禁用所有选项
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // 显示正确答案
    options[currentRiddle.answer].classList.add('correct');
    
    if (selectedIndex === currentRiddle.answer) {
        // 答对了
        score++;
        scoreEl.textContent = score;
    } else {
        // 答错了
        options[selectedIndex].classList.add('wrong');
    }
    
    // 延迟加载下一题
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1500);
}

function endGame() {
    finalScoreEl.textContent = score;
    
    // 根据得分显示不同消息
    let message = '';
    if (score >= 9) {
        message = '🎉 太棒了！你是中秋灯谜大师！文学造诣深厚！';
    } else if (score >= 7) {
        message = '✨ 厉害！你对中秋文化很了解！继续加油！';
    } else if (score >= 5) {
        message = '🌙 不错！基本掌握了中秋知识！再接再厉！';
    } else if (score >= 3) {
        message = '🥮 加油！多了解中秋传统文化会更好！';
    } else {
        message = '📚 再接再厉，中秋文化博大精深，多多学习哦！';
    }
    
    resultMessageEl.textContent = message;
    showPage('result-page');
}

// 初始化显示开始页面
showPage('start-page');