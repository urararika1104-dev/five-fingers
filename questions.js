// ==================================================
// 五本指診断：質問データ
// ==================================================
//
// ★質問を増やしたり変更したりするときは、基本的に
// このファイルだけ編集すればOKです。
//
// weights の数字が、その質問が各指に与える影響です。
// 大きいほど、その指との関連が強くなります。
//
// 回答による倍率
// 強くそう思う       → +2
// それなりにそう思う → +1
// どちらとも言えない →  0
// それなりに違う     → -1
// 強く違う           → -2
// ==================================================

const questions = [

    {
        text: "立場や年齢が上の人に対しては、普段からかなり気を遣うほうだ。",
        weights: {
            thumb: 3,
            index: 0,
            middle: -3,
            ring: -1,
            pinky: -2
        }
    },

    {
        text: "相手との関係性にかかわらず、最低限の礼儀は守るべきだと思う。",
        weights: {
            thumb: 3,
            index: 1,
            middle: -1,
            ring: 0,
            pinky: -1
        }
    },

    {
        text: "決められたルールには、多少不満があっても従うほうだ。",
        weights: {
            thumb: 0,
            index: 3,
            middle: -2,
            ring: -2,
            pinky: -1
        }
    },

    {
        text: "「決まりだから」という理由だけであっても、それを守ることには意味があると思う。",
        weights: {
            thumb: 0,
            index: 3,
            middle: 1,
            ring: -1,
            pinky: -1
        }
    },

    {
        text: "もし仲間が殴られたりしても相手が上の立場なら逆らえない",
        weights: {
            thumb: 3,
            index: 1,
            middle: -3,
            ring: 0,
            pinky: -1
        }
    },

    {
        text: "自分や仲間が理不尽な扱いを受けたら、何らかの形でやり返したいと思う。",
        weights: {
            thumb: -1,
            index: -1,
            middle: 3,
            ring: 0,
            pinky: 0
        }
    },

    {
        text: "もし相手が自分より人気だったり有名人でも、対等に接せれる。",
        weights: {
            thumb: -2,
            index: 0,
            middle: 2,
            ring: 1,
            pinky: 2
        }
    },

    {
        text: "多少理不尽であっても、やらなきゃいけないことはあると思う。",
        weights: {
            thumb: 2,
            index: 3,
            middle: -3,
            ring: -1,
            pinky: 1
        }
    },

    {
        text: "ありきたりなものより、変わっていて独創的なものに惹かれる。",
        weights: {
            thumb: 0,
            index: -1,
            middle: 0,
            ring: 3,
            pinky: 1
        }
    },

    {
        text: "成功の是非に関わらず、新しいことには挑戦してみたいものだ",
        weights: {
            thumb: 0,
            index: -1,
            middle: 0,
            ring: 3,
            pinky: 1
        }
    },

    {
        text: "自分のことを他人にあまり知られたくない。",
        weights: {
            thumb: 0,
            index: 1,
            middle: 0,
            ring: -1,
            pinky: 3
        }
    },

    {
        text: "秘密を抱えていても、それを人に悟られない自信がある。",
        weights: {
            thumb: 0,
            index: -1,
            middle: 0,
            ring: 0,
            pinky: 3
        }
    },

    {
        text: "集団に所属していても、必要以上に他人と関わりたくない。",
        weights: {
            thumb: -1,
            index: -1,
            middle: -3,
            ring: 1,
            pinky: 3
        }
    },

    {
        text: "自分のやり方を他人から細かく指図されるのは苦手だ。",
        weights: {
            thumb: -1,
            index: -2,
            middle: 0,
            ring: 1,
            pinky: 3
        }
    },

    {
        text: "誰かに命令されるより、自分で考えて自由に行動したい。",
        weights: {
            thumb: -2,
            index: -2,
            middle: 1,
            ring: 2,
            pinky: 3
        }
    },

    {
        text: "目上の人であっても、礼儀さえ守っていれば対等に接していいと思う。",
        weights: {
            thumb: -2,
            index: 0,
            middle: 3,
            ring: 1,
            pinky: 1
        }
    },

    {
        text: "自分が嫌な思いをしたとしても、相手に同じことをするのは避けたい。",
        weights: {
            thumb: 0,
            index: 1,
            middle: -3,
            ring: 0,
            pinky: 1
        }
    },

    {
        text: "仲間のためなら、自分が多少損をしてでも行動することがある。",
        weights: {
            thumb: 0,
            index: 0,
            middle: 3,
            ring: 0,
            pinky: -2
        }
    },

    {
        text: "課題で何かを作れと言われたら、少し奇をてらいたくなってしまう",
        weights: {
            thumb: -1,
            index: -2,
            middle: 0,
            ring: 3,
            pinky: 1
        }
    },

    {
        text: "誰にも知られていない情報や秘密を知ることにワクワクする。",
        weights: {
            thumb: 0,
            index: 0,
            middle: 0,
            ring: 1,
            pinky: 3
        }
    }

];
