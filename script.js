// 灯谜题库 
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
let currentQuestions = [];

// DOM元素
const startPage = document.getElementById('start-page');
const gamePage = document.getElementById('game-page');
const resultPage = document.getElementById('result-page');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const currentQuestionElement = document.getElementById('current-question');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const resultMessageElement = document.getElementById('result-message');

// 开始游戏
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

// 开始游戏函数
function startGame() {
    // 重置游戏状态
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    
    // 随机选择10道题目
    currentQuestions = [...riddles].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    // 切换到游戏页面
    showPage(gamePage);
    
    // 加载第一题
    loadQuestion();
}

// 显示页面函数
function showPage(page) {
    startPage.classList.remove('active');
    gamePage.classList.remove('active');
    resultPage.classList.remove('active');
    
    page.classList.add('active');
}

// 加载题目函数
function loadQuestion() {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    
    // 更新题目计数器
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // 设置题目
    questionElement.textContent = currentQuestion.question;
    
    // 清空选项
    optionsElement.innerHTML = '';
    
    // 添加选项
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(button);
    });
}

// 选择答案函数
function selectAnswer(selectedOption) {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    
    // 检查答案
    if (selectedOption === currentQuestion.answer) {
        score++;
        scoreElement.textContent = score;
        
        // 正确答案动画效果
        const buttons = optionsElement.querySelectorAll('button');
        buttons.forEach(button => {
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            }
        });
    } else {
        // 错误答案动画效果
        const buttons = optionsElement.querySelectorAll('button');
        buttons.forEach(button => {
            if (button.textContent === selectedOption) {
                button.classList.add('wrong');
            }
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            }
        });
    }
    
    // 延迟加载下一题
    setTimeout(() => {
        currentQuestionIndex++;
        
        // 检查是否还有题目
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            endGame();
        }
    }, 1000);
}

// 结束游戏函数
function endGame() {
    // 更新最终得分
    finalScoreElement.textContent = score;
    
    // 设置评价
    if (score >= 8) {
        resultMessageElement.textContent = "太棒了！你是中秋文化达人！";
    } else if (score >= 5) {
        resultMessageElement.textContent = "不错哦！继续加油！";
    } else {
        resultMessageElement.textContent = "再接再厉！多了解中秋文化吧！";
    }
    
    // 切换到结果页面
    showPage(resultPage);
}