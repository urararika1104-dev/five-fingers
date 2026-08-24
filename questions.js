// ========================================
// 五本指診断 - 質問データ
// ========================================
//
// ここだけ編集すれば、質問内容や点数を変更できます。
// 診断システム本体を変更する必要はありません。
//
// scores:
// thumb  = 親指
// index  = 人差し指
// middle = 中指
// ring   = 薬指
// little = 小指
//
// 回答によって、ここで設定した点数に
// -2 ～ +2 の倍率がかかります。
// ========================================

const questions = [

    {
        text: "自分より立場が上の人には、それ相応の礼儀を払うべきだと思う。",
        scores: {
            thumb: 2,
            index: 0,
            middle: 0,
            ring: 0,
            little: 0
        }
    },

    {
        text: "決められたルールなら、納得できなくても従うべきだと思う。",
        scores: {
            thumb: 0,
            index: 2,
            middle: 0,
            ring: 0,
            little: -1
        }
    },

    {
        text: "自分や仲間が受けた仕打ちは、きちんと返すべきだと思う。",
        scores: {
            thumb: 0,
            index: 0,
            middle: 2,
            ring: 0,
            little: 0
        }
    },

    {
        text: "既存の常識に沿った作品より、独創的で変わった作品の方が魅力的だと思う。",
        scores: {
            thumb: 0,
            index: 0,
            middle: 0,
            ring: 2,
            little: 0
        }
    },

    {
        text: "自分のことを他人にあまり知られなくても構わないと思う。",
        scores: {
            thumb: 0,
            index: 0,
            middle: 0,
            ring: 0,
            little: 2
        }
    },

    {
        text: "立場や肩書きが違うなら、それに応じて接し方を変えるのは当然だと思う。",
        scores: {
            thumb: 2,
            index: 0,
            middle: 0,
            ring: 0,
            little: 0
        }
    },

    {
        text: "命令されたことに疑問を感じても、決められたことなら従う方がいいと思う。",
        scores: {
            thumb: 0,
            index: 2,
            middle: 0,
            ring: 0,
            little: -1
        }
    },

    {
        text: "自分が受けた小さな失礼でも、されたことはなかなか忘れない。",
        scores: {
            thumb: 0,
            index: 0,
            middle: 2,
            ring: 0,
            little: 0
        }
    },

    {
        text: "人との付き合いよりも、面白い作品やアイデアを追いかけている方が楽しい。",
        scores: {
            thumb: 0,
            index: 0,
            middle: 0,
            ring: 2,
            little: 1
        }
    },

    {
        text: "誰にも干渉されず、自分一人で自由に行動する方が気楽だ。",
        scores: {
            thumb: 0,
            index: -1,
            middle: 0,
            ring: 0,
            little: 2
        }
    }

];
