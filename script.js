// ==================================================
// 五本指診断 - 診断システム
// ==================================================

let currentQuestion = 0;

let scores = {
    thumb: 0,
    index: 0,
    middle: 0,
    ring: 0,
    pinky: 0
};

// 回答履歴
let answerHistory = [];


// -----------------------------------------------
// 指の情報
// -----------------------------------------------

const fingerInfo = {

    thumb: {
        name: "親指",
        english: "THUMB",
        color: "#d93636",
        description:
            "上下関係や礼儀を重んじるあなた。立場や規律を意識し、相手が誰であろうと礼儀を守ることを大切にする傾向があります。"
    },

    index: {
        name: "人差し指",
        english: "INDEX",
        color: "#58d9ff",
        description:
            "与えられた指示やルールに従うことを重視するあなた。決められたものの中で安全や秩序を得ようとする傾向があります。"
    },

    middle: {
        name: "中指",
        english: "MIDDLE",
        color: "#a66cff",
        description:
            "義理や仲間意識を重んじるあなた。受けた恩を忘れず、身内には厚く、理不尽な扱いには強く反発する傾向があります。"
    },

    ring: {
        name: "薬指",
        english: "RING",
        color: "#ff9d45",
        description:
            "芸術や独創性を重んじるあなた。既存の価値観に縛られず、面白いもの・センスのあるもの・心を惹きつけるものを好む傾向があります。"
    },

    pinky: {
        name: "小指",
        english: "PINKY",
        color: "#4d7cff",
        description:
            "秘密や自由を好むあなた。他人にすべてを見せることを避け、自分だけの世界や情報を持つことを好む傾向があります。"
    }

};


// -----------------------------------------------
// 回答
// -----------------------------------------------

const answers = [
    {
        value: 2,
        label: "強くそう思う"
    },

    {
        value: 1,
        label: "それなりにそう思う"
    },

    {
        value: 0,
        label: "どちらとも言えない"
    },

    {
        value: -1,
        label: "それなりに違う"
    },

    {
        value: -2,
        label: "強く違う"
    }
];


// -----------------------------------------------
// 最初の画面
// -----------------------------------------------

function showTitle() {

    document.getElementById("app").innerHTML = `

        <div class="screen title-screen">

            <div class="logo-small">
                PROJECT MOON INSPIRED PERSONALITY TEST
            </div>

            <h1 class="title">
                五本指診断
            </h1>

            <p class="subtitle">
                あなたは、どの指に近い？
            </p>

            <div class="finger-line">
                <span class="thumb"></span>
                <span class="index"></span>
                <span class="middle"></span>
                <span class="ring"></span>
                <span class="pinky"></span>
            </div>

            <button
                class="start-button"
                onclick="startDiagnosis()"
            >
                診断を開始する
            </button>

        </div>

    `;
}


// -----------------------------------------------
// 診断開始
// -----------------------------------------------

function startDiagnosis() {

    currentQuestion = 0;

    scores = {
        thumb: 0,
        index: 0,
        middle: 0,
        ring: 0,
        pinky: 0
    };

    // 回答履歴もリセット
    answerHistory = [];

    showQuestion();
}


// -----------------------------------------------
// 質問表示
// -----------------------------------------------

function showQuestion() {

    const question = questions[currentQuestion];

    const progress =
        (currentQuestion / questions.length) * 100;

    let answerHTML = "";

    answers.forEach((answer, index) => {

        answerHTML += `

            <button
                class="answer-button"
                onclick="answerQuestion(${answer.value})"
            >

                <span class="answer-number">
                    ${index + 1}
                </span>

                <span class="answer-label">
                    ${answer.label}
                </span>

            </button>

        `;

    });


    // -----------------------------------------------
    // 戻るボタン
    // -----------------------------------------------

    let backButtonHTML = "";

    if (currentQuestion > 0) {

        backButtonHTML = `

            <button
                class="back-button"
                onclick="goBack()"
            >
                ← 前の質問へ戻る
            </button>

        `;

    }


    document.getElementById("app").innerHTML = `

        <div class="screen">

            <div class="question-header">

                <span>
                    FIVE FINGERS
                </span>

                <span>
                    QUESTION
                    ${String(currentQuestion + 1).padStart(2, "0")}
                    /
                    ${String(questions.length).padStart(2, "0")}
                </span>

            </div>


            <div class="progress-container">

                <div
                    class="progress-bar"
                    style="width:${progress}%"
                ></div>

            </div>


            <div class="question-card">

                <div class="question-number">
                    QUESTION ${String(currentQuestion + 1).padStart(2, "0")}
                </div>

                <h2 class="question-text">
                    ${question.text}
                </h2>

                <div class="answers">
                    ${answerHTML}
                </div>

                ${backButtonHTML}

            </div>

        </div>

    `;
}


// -----------------------------------------------
// 回答処理
// -----------------------------------------------

function answerQuestion(value) {

    const question = questions[currentQuestion];


    // -----------------------------------------------
    // もし既にこの質問に回答していた場合
    // 以前の回答を取り消す
    // -----------------------------------------------

    if (answerHistory[currentQuestion] !== undefined) {

        const oldValue = answerHistory[currentQuestion];

        scores.thumb -= oldValue * question.weights.thumb;
        scores.index -= oldValue * question.weights.index;
        scores.middle -= oldValue * question.weights.middle;
        scores.ring -= oldValue * question.weights.ring;
        scores.pinky -= oldValue * question.weights.pinky;

    }


    // -----------------------------------------------
    // 新しい回答を記録
    // -----------------------------------------------

    answerHistory[currentQuestion] = value;


    // -----------------------------------------------
    // 点数を加算
    // -----------------------------------------------

    scores.thumb += value * question.weights.thumb;
    scores.index += value * question.weights.index;
    scores.middle += value * question.weights.middle;
    scores.ring += value * question.weights.ring;
    scores.pinky += value * question.weights.pinky;


    currentQuestion++;


    if (currentQuestion >= questions.length) {

        showResult();

    } else {

        showQuestion();

    }

}


// -----------------------------------------------
// 前の質問へ戻る
// -----------------------------------------------

function goBack() {

    // 最初の質問なら戻れない
    if (currentQuestion <= 0) {
        return;
    }


    // 現在位置を一つ前へ
    currentQuestion--;


    const question = questions[currentQuestion];

    // 前の質問で選んでいた回答
    const oldValue = answerHistory[currentQuestion];


    // -----------------------------------------------
    // その質問で加算された点数を取り消す
    // -----------------------------------------------

    if (oldValue !== undefined) {

        scores.thumb -= oldValue * question.weights.thumb;
        scores.index -= oldValue * question.weights.index;
        scores.middle -= oldValue * question.weights.middle;
        scores.ring -= oldValue * question.weights.ring;
        scores.pinky -= oldValue * question.weights.pinky;

    }


    // 回答履歴から削除
    answerHistory[currentQuestion] = undefined;


    // 質問を表示
    showQuestion();

}


// -----------------------------------------------
// 結果表示
// -----------------------------------------------

function showResult() {

    const ranking = Object.entries(scores)
        .sort((a, b) => b[1] - a[1]);


    const first = ranking[0][0];

    const result = fingerInfo[first];


    const maxScore =
        Math.max(...Object.values(scores));


    let rankingHTML = "";


    ranking.forEach(([finger, score], index) => {

        const info = fingerInfo[finger];

        let percentage = 0;

        if (maxScore > 0) {

            percentage = Math.max(
                4,
                (score / maxScore) * 100
            );

        }


        rankingHTML += `

            <div class="rank-row">

                <div class="rank-info">

                    <span class="rank-name">
                        ${index + 1}.
                        ${info.name}
                    </span>

                    <span class="rank-score">
                        ${score} pt
                    </span>

                </div>


                <div class="score-background">

                    <div
                        class="score-bar ${finger}"
                        style="width:${percentage}%"
                    ></div>

                </div>

            </div>

        `;

    });


    document.getElementById("app").innerHTML = `

        <div class="screen result-screen">

            <div class="result-label">
                YOUR RESULT
            </div>

            <h1
                class="result-finger"
                style="color:${result.color}"
            >
                ${result.name}
            </h1>

            <div class="result-subtitle">
                ${result.english}
            </div>


            <p class="result-description">
                ${result.description}
            </p>


            <div class="ranking">

                <div class="ranking-title">
                    FIVE FINGERS / RANKING
                </div>

                ${rankingHTML}

            </div>


            <br><br>

            <button
                class="retry-button"
                onclick="showTitle()"
            >
                もう一度診断する
            </button>

        </div>

    `;

}


// -----------------------------------------------
// 最初の画面を表示
// -----------------------------------------------

showTitle();
