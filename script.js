// グローバル変数の定義
const wineList = [
    
    {
        name: "アップルワイン ７２０ｍｌ",
        type: "赤ワイン",
        origin: "国産",
        taste: "甘口",
        price: 1218,
        salesPoint: "国産リンゴを100%使用した、フルーティーで爽やかな甘みのワイン",
        janCode: "4904230200406",
        imageUrl: "https://imgur.com/Y8QT14U.jpeg"
    },
    {
        name: "赤玉 スィートワイン 赤 ５５０ｍｌ",
        type: "赤ワイン",
        origin: "国産",
        taste: "甘口",
        price: 568,
        salesPoint: "長年親しまれている甘口の赤ワイン。料理との相性も抜群",
        janCode: "4901777008694",
        imageUrl: "https://imgur.com/bZJXPfl.jpeg"
    },
      {
        name: "ニッカシードルスイート ７２０ｍｌ",
        type: "スパークリングワイン",
        origin: "国産",
        taste: "ライトボディ",
        price: 668,
        salesPoint: "りんごの優しい甘みと爽やかな泡立ちが特徴のシードル",
        janCode: "4904230013839",
        imageUrl:"https://imgur.com/jjelKy8.jpeg"
    },
    {
        name: "ニッカシードルドライ ７２０ｍｌ",
        type: "スパークリングワイン",
        origin: "国産",
        taste: "ライトボディ",
        price: 668,
        salesPoint: "すっきりとした辛口で、食事に合わせやすい大人のシードル",
        janCode: "4904230013853",
 imageUrl:"https://imgur.com/snfYX5X.jpeg"
    },
    {
        name: "ニッカ シードルロゼ ７２０ｍｌ",
        type: "スパークリングワイン",
        origin: "国産",
        taste: "ライトボディ",
        price: 668,
        salesPoint: "ロゼタイプのフルーティーな味わいのシードル",
        janCode: "4904230059967",
 imageUrl:"https://imgur.com/DF5pzop.jpeg"
    },
    {
        name: "甘熟ぶどうのワイン赤 ５００ｍｌ",
        type: "赤ワイン",
        origin: "国産",
        taste: "甘口",
        price: 598,
        salesPoint: "国産ぶどうを使用した甘口の赤ワイン",
        janCode: "4973480300044",
 imageUrl:"https://imgur.com/WWNt988.jpeg"
    },
    {
        name: "甘熟ぶどうのワイン白 ５００ｍｌ",
        type: "白ワイン",
        origin: "国産",
        taste: "甘口",
        price: 598,
        salesPoint: "国産ぶどうを使用した甘口の白ワイン",
        janCode: "4973480300051",
 imageUrl:"https://imgur.com/Xamsnln.jpeg"
    },
    {
        name: "酵母の泡甲州ブリュット ７２０ｍｌ",
        type: "スパークリングワイン",
        origin: "国産",
        taste: "辛口",
        price: 2010,
        salesPoint: "日本固有の甲州ぶどうを使用した、きめ細やかな泡立ちの本格派スパークリング",
        janCode: "4935874300542",
        imageUrl:"https://imgur.com/ByA9Y0h.jpeg"
    },
    {
        name: "ゴールドスパークリング ７２０ｍｌ",
        type: "スパークリングワイン",
        origin: "国産",
        taste: "やや甘口",
        price: 1780,
        salesPoint: "華やかな香りと甘みが特徴的な国産スパークリングワイン",
        janCode: "4935874300412",
 imageUrl:"https://imgur.com/5nUXxYS.jpeg"
    },
    {
        name: "超たっぷり７２０ ７２０ｍｌ",
        type: "赤ワイン",
        origin: "国産",
        taste: "ほのかな甘口",
        price: 498,
        salesPoint: "コストパフォーマンスに優れた国産赤ワイン",
        janCode: "4901777405851",
  imageUrl:"https://imgur.com/469uO5R.jpeg"

    },
    {
        name: "ボンルージュＰＥＴ赤 ７２０ｍｌ",
        type: "赤ワイン",
        origin: "国産",
        taste: "中口",
        price: 611,
        salesPoint: "ペットボトル入りで便利な国産赤ワイン",
        janCode: "4973480323326",
 imageUrl:"https://imgur.com/lotpQil.jpeg"
    },
    {
        name: "彩食健美 赤 瓶 ７２０ｍｌ",
        type: "赤ワイン",
        origin: "国産",
        taste: "ほのかな甘口",
        price: 598,
        salesPoint: "健康志向の方におすすめ。ポリフェノールを含んだ赤ワイン",
        janCode: "4901777246409",
 imageUrl:"https://imgur.com/UtHfk7B.jpeg"
    },
    {
        name: "酸化防止剤無添加やさしい濃赤 ７２０ｍｌ",
        type: "赤ワイン",
        origin: "国産",
        taste: "やや甘口",
        price: 488,
        salesPoint: "添加物不使用の自然な味わいの濃い目の赤ワイン",
        janCode: "4582600200128",
 imageUrl:"https://imgur.com/9VE2hOo.jpeg",
    },
    {
        name: "酸化防止剤無添加やさしい赤 ７２０ｍｌ",
        type: "赤ワイン",
        origin: "国産",
        taste: "やや辛口",
        price: 488,
        salesPoint: "添加物不使用の自然な味わいの赤ワイン",
        janCode: "4582600200104",
imageUrl:"https://imgur.com/2iQXwA4.jpeg"
    },
    {
        name: "酸化防止剤無添加やさしい白 ７２０ｍｌ",
        type: "白ワイン",
        origin: "国産",
        taste: "やや辛口",
        price: 488,
        salesPoint: "添加物不使用の自然な味わいの白ワイン",
        janCode: "4582600200111",
imageUrl:"https://imgur.com/gnOhbii.jpeg"
    },
    {
        name: "アルプス 無添加信州コンコード ７２０ｍｌ",
        type: "赤ワイン",
        origin: "国産",
        taste: "中口",
        price: 1065,
        salesPoint: "信州産ぶどうを使用した無添加の赤ワイン",
        janCode: "4906251551574",
imageUrl:"https://imgur.com/iMJ8HbT.jpeg"
    },
    {
        name: "ＣＨ勝沼 無添加・無補糖 赤甘口 ６００ｍｌ",
        type: "赤ワイン",
        origin: "国産",
        taste: "甘口",
        price: 1100,
        salesPoint: "添加物不使用の自然な甘さが魅力の国産赤ワイン",
        janCode: "4941495200130",
imageUrl:"https://imgur.com/48cY0Fy.jpeg"
    },
    {
        name: "無添加ワインオフ赤 ７２０ｍｌ",
        type: "赤ワイン",
        origin: "国産",
        taste: "辛口",
        price: 448,
        salesPoint: "添加物不使用の辛口赤ワイン",
        janCode: "4901777367715",
imageUrl:"https://imgur.com/K5knj8B.jpeg"
    },
    {
        name: "無添加ワインオフ白 ７２０ｍｌ",
        type: "白ワイン",
        origin: "国産",
        taste: "辛口",
        price: 448,
        salesPoint: "添加物不使用の辛口白ワイン",
        janCode: "4901777367739",
imageUrl:"https://imgur.com/ychYcaF.jpeg"
    },
    {
        name: "氷と 無添加ワイン濃赤７２０ ７２０ｍｌ",
        type: "赤ワイン",
        origin: "国産",
        taste: "やや甘口",
        price: 458,
        salesPoint: "氷を入れて楽しむ無添加の濃い赤ワイン",
        janCode: "4901777300682",
　　　　imageUrl: "https://imgur.com/6w3ibIp.jpeg"
    },
  
  
  
  
  
  
    {
        name: "氷と 無添加ワイン濃白７２０ ７２０ｍｌ",
        type: "白ワイン",
        origin: "国産",
        taste: "やや甘口",
        price: 458,
        salesPoint: "氷を入れて楽しむ無添加の濃い白ワイン",
        janCode: "4901777300705",
imageUrl:"https://imgur.com/TV2937F.jpeg"
    },
    {
        name: "果実の泡 林檎スパークリング ５００ｍｌ",
        type: "スパークリングワイン",
        origin: "国産",
        taste: "やや甘口",
        price: 863,
        salesPoint: "りんごの風味豊かな国産スパークリングワイン",
        janCode: "4990583311999",
imageUrl:"https://imgur.com/juMy4X4.jpeg"
    },
    {
        name: "果実の泡 黒葡萄ＳＰ ５００ｍｌ",
        type: "スパークリングワイン",
        origin: "国産",
        taste: "やや甘口",
        price: 863,
        salesPoint: "黒ぶどうを使用した国産スパークリングワイン",
        janCode: "4990583319742",
imageUrl:"https://imgur.com/IZYZVBA.jpeg"
    },
    {
        name: "果実の泡 北海道梅ＳＰ ５００ｍｌ",
        type: "スパークリングワイン",
        origin: "国産",
        taste: "やや甘口",
        price: 940,
        salesPoint: "北海道産梅を使用したユニークなスパークリングワイン",
        janCode: "4990583319735",
imageUrl:"https://imgur.com/HXXj9KV.jpeg"
    },
    {
        name: "おたるナイアガラスパーク ７２０ｍｌ",
        type: "スパークリングワイン",
        origin: "道産",
        taste: "やや甘口",
        price: 1780,
        salesPoint: "北海道産ナイアガラ種を使用した、フルーティーで爽やかな泡立ちが特徴的なスパークリングワイン",
        janCode: "4990583303406",
imageUrl:"https://imgur.com/gcTONJ6.jpeg"
    },
    {
        name: "北海道ＷキャンベルアーリＳＰ ７２０ｍｌ",
        type: "スパークリングワイン",
        origin: "道産",
        taste: "やや甘口",
        price: 1785,
        salesPoint: "北海道産キャンベル・アーリー種を使用したスパークリングワイン",
        janCode: "4990583314303",
imageUrl:"https://imgur.com/cF9BwDx.jpeg"
    },
    {
        name: "おたるデラウェアＳＰ ７５０ｍｌ",
        type: "スパークリングワイン",
        origin: "道産",
        taste: "辛口",
        price: 1785,
        salesPoint: "北海道産デラウェア種を使用した爽やかな辛口スパークリング",
        janCode: "4990583315010",
imageUrl:"https://imgur.com/xzciRqK.jpeg"
    },
    {
        name: "トラディショナルメソッドＭ ７５０ｍｌ",
        type: "スパークリングワイン",
        origin: "道産",
        taste: "辛口",
        price: 2800,
        salesPoint: "シャンパーニュと同じ製法で作られた本格的な国産スパークリングワイン",
        janCode: "4990583333007",
imageUrl:"https://imgur.com/EkqeEmF.jpeg"
    },
    {
        name: "トラディショナルメソッドロゼ ７５０ｍｌ",
        type: "スパークリングワイン",
        origin: "道産",
        taste: "辛口",
        price: 2800,
        salesPoint: "シャンパーニュと同じ製法で作られた本格的な国産ロゼスパークリングワイン",
        janCode: "4990583333014",
imageUrl:"https://imgur.com/08WhC9k.jpeg"
    },
    {
        name: "おたる初デラ２０２３ ７２０ｍｌ",
        type: "白ワイン",
        origin: "道産",
        taste: "やや甘口",
        price: 1270,
        salesPoint: "2023年産の初摘みデラウェアを使用した白ワイン",
        janCode: "4990583328102",
imageUrl:"https://imgur.com/DXrNAfV.jpeg"
    },
    {
        name: "初しぼりポート＆ナイヤ２３ ７２０ｍｌ",
        type: "白ワイン",
        origin: "道産",
        taste: "甘口",
        price: 1360,
        salesPoint: "北海道産ぶどうを使用した、フレッシュで甘美な味わいの新酒",
     janCode: "4990583328508",
imageUrl:"https://imgur.com/iYZYknd.jpeg"
    },
    {
        name: "初しぼりキャンベルアーリ２３ ７２０ｍｌ",
        type: "赤ワイン",
        origin: "道産",
        taste: "やや甘口",
        price: 1270,
        salesPoint: "2023年産の初摘みキャンベル・アーリーを使用した赤ワイン",
        janCode: "4990583328201",
imageUrl:"https://imgur.com/US12N9W.jpeg"
    },
    {
        name: "おたるプレミアムキャンベル赤 ７２０ｍｌ",
        type: "赤ワイン",
        origin: "道産",
        taste: "甘口",
        price: 1520,
        salesPoint: "北海道産キャンベル種を使用した、芳醇な香りと甘みが特徴の赤ワイン",
        janCode: "4990583314402",
imageUrl:"https://imgur.com/PclAfVY.jpeg"
    },
   
  {
    name: "おたる 完熟ナイアガラ",
    type: "白",
    origin: "道産",
    taste: "甘口",
    price: 1500,
    volume: "720ml",
    jan: "4990583381114",
imageUrl:"https://imgur.com/Mi76PGM.jpeg"
  },
  {
    name: "おたる プレミアムキャンベル",
    type: "赤",
    origin: "道産",
    taste: "甘口",
    price: 1520,
    volume: "720ml",
    jan: "4990583311609",
imageUrl:"https://imgur.com/VrfVuOf.jpeg"
  },
  {
    name: "北海道ツヴァイゲルト",
    type: "赤",
    origin: "道産",
    taste: "ミディアムボディ",
    price: 1610,
    volume: "750ml",
    jan: "4990583332000",
imageUrl:"https://imgur.com/O0zfV0Y.jpeg"
  },
  {
    name: "北海道ケルナー",
    type: "白",
    origin: "道産",
    taste: "辛口",
    price: 1610,
    volume: "750ml",
    jan: "4990583332109",
imageUrl:"https://imgur.com/C7gu9TG.jpeg"
  },
  {
    name: "道内限定おたるキャン＆ロンド",
    type: "赤",
    origin: "道産",
    taste: "甘口",
    price: 1302,
    volume: "720ml",
    jan: "4990583321189",
imageUrl:"https://imgur.com/ERIApLq.jpeg"
  },
  {
    name: "道内限定おたるポート＆ナイヤ",
    type: "白",
    origin: "道産",
    taste: "甘口",
    price: 1302,
    volume: "720ml",
    jan: "4990583321196",
    imageUrl:"https://imgur.com/yGR1Ztd.jpeg"
  },
  {
    name: "おたる生詰めワイン",
    type: "赤",
    origin: "道産",
    taste: "やや甘口",
    price: 1260,
    volume: "720ml",
    jan: "4990583305394",
imageUrl:"https://imgur.com/hzInJ3B.jpeg"
  },
  {
    name: "函館とまこまいハスカップワイン",
    type: "赤",
    origin: "道産",
    taste: "甘口",
    price: 1150,
    volume: "720ml",
    jan: "4977754300075",
imageUrl:"https://imgur.com/Htb8mnl.jpeg"
  },
  
 
  
  {
    name: "十勝 トカップ 赤",
    type: "赤",
    origin: "道産",
    taste: "普通",
    price: 1090,
    volume: "720ml",
    jan: "4970903510011",
imageUrl:"https://imgur.com/wINgBH4.jpeg"
  },
  {
    name: "十勝 トカップ 白",
    type: "白",
    origin: "道産",
    taste: "辛口",
    price: 1090,
    volume: "720ml",
    jan: "4970903510028",
imageUrl:"https://imgur.com/06WwX3j.jpeg"
  },
  {
    name: "十勝ワイン 町民用 赤ワイン",
    type: "赤",
    origin: "道産",
    taste: "やや軽め",
    price: 1180,
    volume: "720ml",
    jan: "4970903512855",
imageUrl:"https://imgur.com/4O8RILN.jpeg"
  },
  {
    name: "十勝ワイン町民用白ザ・いけだ",
    type: "白",
    origin: "道産",
    taste: "辛口",
    price: 1180,
    volume: "720ml",
    jan: "4970903511957",
imageUrl:"https://imgur.com/n58E27p.jpeg"
  },
  {
    name: "十勝ワイン 町民用ロゼワイン",
    type: "ロゼ",
    origin: "道産",
    taste: "辛口",
    price: 1090,
    volume: "720ml",
    jan: "4970903512305",
imageUrl:"https://imgur.com/g5EcBQY.jpeg"
  },
  {
    name: "北の和音 山幸ツバイゲルト",
    type: "赤",
    origin: "道産",
    taste: "やや軽め",
    price: 1650,
    volume: "750ml",
    jan: "4970903512824",
imageUrl:"https://imgur.com/sgyAoKQ.jpeg"
  },
  {
    name: "北の和音ケルナー白",
    type: "白",
    origin: "道産",
    taste: "辛口",
    price: 1300,
    volume: "720ml",
    jan: "4970903512695"
  },
  {
    name: "北の和音バッカスＳＰ",
    type: "スパークリング",
    origin: "道産",
    taste: "辛口",
    price: 1500,
    volume: "750ml",
    jan: "4970903512770",
imageUrl:"https://imgur.com/LtiU34q.jpeg"
  },
  {
    name: "ふらのワイン 赤",
    type: "赤",
    origin: "道産",
    taste: "普通",
    price: 1455,
    volume: "720ml",
    jan: "4969335001624",
imageUrl:"https://imgur.com/TIOGjpR.jpeg"
  },
  {
    name: "ふらのワイン 白",
    type: "白",
    origin: "道産",
    taste: "中口",
    price: 1455,
    volume: "720ml",
    jan: "4969335001631",
imageUrl:"https://imgur.com/xEG67VQ.jpeg"
  },
  {
    name: "特撰ナイヤガラハーフ",
    type: "赤",
    origin: "道産",
    taste: "甘口",
    price: 1606,
    volume: "375ml",
    jan: "4990583330013",
imageUrl:"https://imgur.com/vYEvij3.jpeg"
  },
  {
    name: "小樽 ナイアガラ",
    type: "白",
    origin: "道産",
    taste: "やや甘口",
    price: 1210,
    volume: "720ml",
    jan: "4990583381107",
imageUrl:"https://imgur.com/4C4yAeJ.jpeg"
  },
  {
    name: "おたる赤辛口",
    type: "赤",
    origin: "道産",
    taste: "辛口",
    price: 1200,
    volume: "720ml",
    jan: "4990583300009",
imageUrl:"https://imgur.com/Q06EanO.jpeg"
  },
  {
    name: "おたる赤甘口",
    type: "赤",
    origin: "道産",
    taste: "甘口",
    price: 1200,
    volume: "720ml",
    jan: "4990583305004",
imageUrl:"https://imgur.com/XmLQRQq.jpeg"
  },
  {
    name: "北海道ワイン おたる ロゼ",
    type: "ロゼ",
    origin: "道産",
    taste: "やや甘口",
    price: 1050,
    volume: "720ml",
    jan: "4990583723006",
imageUrl:"https://imgur.com/D9Po7Vl.jpeg"
  },
  {
    name: "おたるキャンベルアーリ赤辛口",
    type: "赤",
    origin: "道産",
    taste: "辛口",
    price: 1200,
    volume: "720ml",
    jan: "4990583314501",
imageUrl:"https://imgur.com/y2qVk1x.jpeg"
  },
  {
    name: "北海道Ｗおたる白辛口",
    type: "白",
    origin: "道産",
    taste: "辛口",
    price: 1200,
    volume: "720ml",
    jan: "4990583318806",
imageUrl:"https://imgur.com/pbfPYpn.jpeg"
  },
  {
    name: "おたる 白 甘口",
    type: "白",
    origin: "道産",
    taste: "甘口",
    price: 1200,
    volume: "720ml",
    jan: "4990583316031",
imageUrl:"https://imgur.com/UQOi0ui.jpeg"
  },
  {
    name: "道民ワイン 赤 やや辛口",
    type: "赤",
    origin: "道産",
    taste: "辛口",
    price: 970,
    volume: "720ml",
    jan: "4990583316956",
imageUrl:"https://imgur.com/Y0axdTS.jpeg"
  },
  {
    name: "道民ワイン 赤 やや甘口",
    type: "赤",
    origin: "道産",
    taste: "甘口",
    price: 960,
    volume: "720ml",
    jan: "4990583316963",
imageUrl:"https://imgur.com/WCfKLg9.jpeg"
  },
  {
    name: "道民ワイン 白 やや辛口",
    type: "白",
    origin: "道産",
    taste: "辛口",
    price: 1170,
    volume: "720ml",
    jan: "4990583316970",
imageUrl:"https://imgur.com/liMKZnU.jpeg"
  },
  {
    name: "道民ワイン ロゼ 辛口",
    type: "ロゼ",
    origin: "道産",
    taste: "辛口",
    price: 972,
    volume: "720ml",
    jan: "4990583316987",
imageUrl:"https://imgur.com/3o7stoY.jpeg"
  },
  {
    name: "おたる 限定キャンベルアーリ",
    type: "赤",
    origin: "道産",
    taste: "中口",
    price: 1305,
    volume: "720ml",
    jan: "4990583310404",
imageUrl: "https://imgur.com/qqnPS5J.jpeg"

  },
  {
    name: "おたる北海道ナイアガラロゼ",
    type: "ロゼ",
    origin: "道産",
    taste: "やや甘口",
    price: 1300,
    volume: "720ml",
    jan: "4990583306803",
 imageUrl:"https://imgur.com/6SCpcgx.jpeg"
  },
  {
    name: "おたる 限定デラウェア辛口",
    type: "赤",
    origin: "道産",
    taste: "辛口",
    price: 1300,
    volume: "720ml",
    jan: "4990583312804",
 imageUrl:"https://imgur.com/9pmdaSV.jpeg"
  },
  {
    name: "道内おたるナイアガラ辛口",
    type: "白",
    origin: "道産",
    taste: "辛口",
    price: 1320,
    volume: "720ml",
    jan: "4990583318004",
imageUrl:"https://imgur.com/a1LldUl.jpeg"
  },
  
  {
    name: "ＴＶＧＥオレゼルヴァＣＳ",
    type: "赤",
    origin: "輸入",
    originDetails: "チリ",
    taste: "ミディアムボディ",
    price: 980,
    volume: "750ml",
    jan: "4549414516920",
 imageUrl:"https://imgur.com/MkHh29e.jpeg"
  },
  {
    name: "オーレゼルヴァＳＢ",
    type: "白",
    origin: "輸入",
    originDetails: "チリ",
    taste: "辛口",
    price: 980,
    volume: "750ml",
    jan: "7804320496344",
 imageUrl:"https://imgur.com/u2GLIQa.jpeg"
  },
  {
    name: "オーレゼルヴァカルメネール",
    type: "赤",
    origin: "輸入",
    originDetails: "チリ",
    taste: "ミディアムボディ",
    price: 980,
    volume: "750ml",
    jan: "7804320521114",
 imageUrl:"https://imgur.com/yI11Bob.jpeg"
  },
  {
    name: "オー レゼルヴァ ロゼ",
    type: "ロゼ",
    origin: "輸入",
    originDetails: "チリ",
    taste: "中辛口",
    price: 980,
    volume: "750ml",
    jan: "7804320627175",
imageUrl:"https://imgur.com/nZo4F91.jpeg"
  },
  {
    name: "プロメスシャルドネ",
    type: "白",
    origin: "輸入",
    originDetails: "フランス",
    taste: "辛口",
    price: 1280,
    volume: "750ml",
    jan: "3770004191598",
 imageUrl:"https://imgur.com/hndBQcd.jpeg"
  },
  {
    name: "オーレゼルヴァＰＮ",
    type: "赤",
    origin: "輸入",
    originDetails: "チリ",
    taste: "ミディアムボディ",
    price: 980,
    volume: "750ml",
    jan: "7804320682105",
 imageUrl:"https://imgur.com/zfCCsI5.jpeg"
  },
  {
    name: "ＴＶＧＥオレゼルヴァＣＨ",
    type: "白",
    origin: "輸入",
    originDetails: "チリ",
    taste: "辛口",
    price: 980,
    volume: "750ml",
    jan: "4549414516937",
 imageUrl:"https://imgur.com/m1Ta0Bl.jpeg"
  },
  {
    name: "オーレゼルヴァゲヴュルツＴ",
    type: "白",
    origin: "輸入",
    originDetails: "チリ",
    taste: "やや辛口",
    price: 980,
    volume: "750ml",
    jan: "7804320617732",
imageUrl:"https://imgur.com/LAohJsU.jpeg"
  },
  {
    name: "サンジョヴィアンＲボルドー白",
    type: "白",
    origin: "輸入",
    originDetails: null,
    taste: "中辛口",
    price: 880,
    volume: "750ml",
    jan: "3192371011192",
 imageUrl:"https://imgur.com/gZMjgWX.jpeg"
  },
  {
    name: "マルケス デ テナ ブランコ",
    type: "白",
    origin: "輸入",
    originDetails: "フランス",
    taste: "辛口",
    price: 498,
    volume: "750ml",
    jan: "8410310616099",
 imageUrl:"https://imgur.com/NLNgJu5.jpeg"
  },
  {
    name: "プダ シャルドネ",
    type: "白",
    origin: "輸入",
    originDetails: "チリ",
    taste: "やや辛口",
    price: 598,
    volume: "750ml",
    jan: "7809579807583",
imageUrl:"https://imgur.com/lyEHxhI.jpeg"
  },
  {
    name: "ディゼノ白",
    type: "白",
    origin: "輸入",
    originDetails: "ドイツ",
    taste: "やや甘口",
    price: 498,
    volume: "750ml",
    jan: "4008005044346",
imageUrl:"https://imgur.com/96pwG5A.jpeg"
  },
  
  {
    name: "エイティーンソーヴィニヨンＢ",
    type: "白",
    origin: "輸入",
    originDetails: "チリ",
    taste: "辛口",
    price: 498,
    volume: "750ml",
    jan: "7808765725212",
imageUrl:"https://imgur.com/Kerzu75.jpeg"
  },
  {
    name: "エイティーン シャルドネ",
    type: "白",
    origin: "輸入",
    originDetails: "チリ",
    taste: "やや辛口",
    price: 498,
    volume: "750ml",
    jan: "7808765722839",
 imageUrl:"https://imgur.com/9SG4duQ.jpeg"
  },
 
  {
    name: "ラクロワドステラン赤ハーフ",
    type: "赤",
    origin: "輸入",
    originDetails: "フランス",
    taste: "ミディアムボディ",
    price: 598,
    volume: "375ml",
    jan: "3180280455268",
 imageUrl:"https://imgur.com/F5CP25p.jpeg"
  },
  {
    name: "ラクロワドステラン白ハーフ",
    type: "白",
    origin: "輸入",
    originDetails: "フランス",
    taste: "辛口",
    price: 598,
    volume: "375ml",
    jan: "3180280455343",
 imageUrl:"https://imgur.com/M7aiZU1.jpeg"
  },
 
  {
    name: "ＴＶリゴルＥＸブリュットＨ",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "スペイン",
    taste: "辛口",
    price: 598,
    volume: "375ml",
    jan: "4901810987436",
 imageUrl:"https://imgur.com/JmMGTOY.jpeg"
  },
  {
    name: "ＴＶリゴルＥＸＲブリュットＨ",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "スペイン",
    taste: "辛口",
    price: 598,
    volume: "375ml",
    jan: "4901810987443",
 imageUrl:"https://imgur.com/PLX50H3.jpeg"
  },
  {
    name: "ＴＶリゴルＥＸセミセコＨ",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "スペイン",
    taste: "やや甘口",
    price: 598,
    volume: "375ml",
    jan: "4901810987450",
 imageUrl:"https://imgur.com/CUSjAIN.jpeg"
  },
 
  {
    name: "サンジョヴィアンＲボルドー赤",
    type: "赤",
    origin: "輸入",
    originDetails: "フランス",
    taste: "ミディアムボディ",
    price: 880,
    volume: "750ml",
    jan: "3192371076757",
 imageUrl:"https://imgur.com/ocghxe1.jpeg"
  },
  {
    name: "ＣＶシャトーサンレオン",
    type: "赤",
    origin: "輸入",
    originDetails: "フランス",
    taste: "フルボディ",
    price: 1580,
    volume: "750ml",
    jan: "3211209133759",
 imageUrl:"https://imgur.com/BnUOMAW.jpeg"
  },
  {
    name: "ドメーヌピィナチュレルマン",
    type: "赤",
    origin: "輸入",
    originDetails: "フランス",
    taste: "ミディアムボディ",
    price: 1780,
    volume: "750ml",
   jan: "3760112790332",
 imageUrl:"https://imgur.com/Op2iixo.jpeg"

  },
  {
    name: "Ｄラファージュコテシュッド赤",
    type: "赤",
    origin: "輸入",
    originDetails: "フランス",
    taste: "ミディアムボディ",
    price: 1280,
    volume: "750ml",
    jan: "3760031471725",
 imageUrl:"https://imgur.com/TlzCkkp.jpeg"
  },
  {
    name: "サンロックＲ酸化防止剤無添加",
    type: "赤",
    origin: "輸入",
    originDetails: "フランス",
    taste: "フルボディ",
    price: 1780,
    volume: "750ml",
    jan: "3760031474016",
 imageUrl:"https://imgur.com/uqYDSqu.jpeg"
  },
  {
    name: "ＣＶシャトーカンペ",
    type: "赤",
    origin: "輸入",
    originDetails: "フランス",
    taste: "フルボディ",
    price: 1980,
    volume: "750ml",
    jan: "3211209141457",
 imageUrl:"https://imgur.com/3LVnBCh.jpeg"
  },
  {
    name: "ＣＶシャトーオウルトウ",
    type: "赤",
    origin: "輸入",
    originDetails: "フランス",
    taste: "フルボディ",
    price: 1980,
    volume: "750ml",
    jan: "3211209128038",
 imageUrl:"https://imgur.com/gpJB5TB.jpeg"
  },
  {
    name: "アレクシスリシーヌキュベ",
    type: "赤",
    origin: "輸入",
    originDetails: "フランス",
    taste: "フルボディ",
    price: 880,
    volume: "750ml",
    jan: "3500610137402",
 imageUrl:"https://imgur.com/G6QA4Sx.jpeg"
  },
  {
    name: "モメサン メルロー",
    type: "赤",
    origin: "輸入",
    originDetails: "フランス",
    taste: "ミディアムボディ",
    price: 1028,
    volume: "750ml",
    jan: "4971980182030",
 imageUrl:"https://imgur.com/9KcUAeT.jpeg"
  },
  {
    name: "ＣＶＰＶキャンティ",
    type: "赤",
    origin: "輸入",
    originDetails: "イタリア",
    taste: "ライトボディ",
    price: 880,
    volume: "750ml",
    jan: "8006030340040",
 imageUrl:"https://imgur.com/BZKnjBT.jpeg"
  },
  {
    name: "ＣＶＰＶキャンティクラシコ",
    type: "赤",
    origin: "輸入",
    originDetails: "イタリア",
    taste: "ミディアムボディ",
    price: 1280,
    volume: "750ml",
    jan: "8006030240043",
 imageUrl:"https://imgur.com/ORCwRzM.jpeg"
  },
  {
    name: "マルケス デ テナ ティント",
    type: "赤",
    origin: "輸入",
    originDetails: "スペイン",
    taste: "ミディアムボディ",
    price: 498,
    volume: "750ml",
    jan: "8410310616105",
imageUrl:"https://imgur.com/uiqQxAz.jpeg"
  },
  {
    name: "ヴァルデパブロ・サングリア",
    type: "赤",
    origin: "輸入",
    originDetails: "スペイン",
    taste: "甘口",
    price: 680,
    volume: "750ml",
    jan: "8411155921560",
imageUrl:"https://imgur.com/YLtfahL.jpeg"
  },
  {
    name: "ヴィラ モリーノテーブルＷ赤",
    type: "赤",
    origin: "輸入",
    originDetails: "スペイン",
    taste: "ライトボディ",
    price: 680,
    volume: "750ml",
    jan: "8005390020814",
imageUrl:"https://imgur.com/eHBZjQ4.jpeg"
  },
  {
    name: "プダ カベルネソーヴィニヨン",
    type: "白",
    origin: "輸入",
    originDetails: "チリ",
    taste: "ミディアムボディ",
    price: 598,
    volume: "750ml",
    jan: "7809579807552",
imageUrl:"https://imgur.com/jtMn7kh.jpeg"
  },
  {
    name: "ディゼノ赤",
    type: "赤",
    origin: "輸入",
    originDetails: "ドイツ",
    taste: "やや甘口",
    price: 498,
    volume: "750ml",
    jan: "4008005044353",
imageUrl:"https://imgur.com/ilQT6Gx.jpeg"
  },
  {
    name: "エイティーン カベルネＳ",
    type: "赤",
    origin: "輸入",
    originDetails: "チリ",
    taste: "ミディアムボディ",
    price: 498,
    volume: "750ml",
    jan: "7808765722815",
imageUrl:"https://imgur.com/5D6G6jq.jpeg"
  },
  {
    name: "エイティーン メルロー",
    type: "赤",
    origin: "輸入",
    originDetails: "チリ",
    taste: "ミディアムボディ",
    price: 498,
    volume: "750ml",
    jan: "7808765722822",
 imageUrl:"https://imgur.com/uQ1JGU9.jpeg"
  },
  {
    name: "エイティーン ロゼ",
    type: "ロゼ",
    origin: "輸入",
    originDetails: "チリ",
    taste: "辛口",
    price: 498,
    volume: "750ml",
    jan: "7808765751464",
imageUrl:"https://imgur.com/pDpEvRD.jpeg"
  },
 
 
  {
    name: "Ａメッツクレマンダルザス",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "フランス",
    taste: "辛口",
    price: 1980,
    volume: "750ml",
    jan: "3259366255747",
imageUrl:"https://imgur.com/JJxIEtz.jpeg"
  },
  {
    name: "モンヴェルメイユクレマンｄＬ",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "フランス",
    taste: "辛口",
    price: 1780,
    volume: "750ml",
    jan: "3176780033969",
imageUrl:"https://imgur.com/25daeyx.jpeg"
  },
  {
    name: "ムタールＣブリュットナトゥレ",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "フランス",
    taste: "辛口",
    price: 2280,
    volume: "750ml",
    jan: "3440747520220",
 imageUrl:"https://imgur.com/WfOzxz9.jpeg"
  },
  {
    name: "モエエシャンドンブリュット",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "フランス",
    taste: "辛口",
    price: 7800,
    volume: "750ml",
    jan: "3185370001233",
imageUrl:"https://imgur.com/ANsPYIz.jpeg"
  },
  {
    name: "モエエシャンドンロゼ",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "フランス",
    taste: "辛口",
    price: 9100,
    volume: "750ml",
    jan: "3185370061503",
 imageUrl:"https://imgur.com/3OjUvls.jpeg"

  },
  {
    name: "モエエシャンドンブリュットＨ",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "フランス",
    taste: "辛口",
    price: 4900,
    volume: "375ml",
    jan: "3185370226766",
 imageUrl:"https://imgur.com/uzjAKgM.jpeg"
  },
  {
    name: "モエシャンドンロゼ ハーフ",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "フランス",
    taste: "辛口",
    price: 5350,
    volume: "375ml",
    jan: "3185370226810",
 imageUrl:"https://imgur.com/LOYGPcp.jpeg"
  },
  {
    name: "カンティキュヴェブリュット",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "イタリア",
    taste: "辛口",
    price: 680,
    volume: "750ml",
    jan: "8005415058099",
imageUrl:"https://imgur.com/mzsfLDr.jpeg"
  },
  {
    name: "カンティキュヴェドルチェ",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "イタリア",
    taste: "甘口",
    price: 680,
    volume: "750ml",
    jan: "8005415058112",
imageUrl:"https://imgur.com/xCKb8Ky.jpeg"
  },
  {
    name: "ストーニーヒルＳＰＫＣｈＰＮ",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "オーストラリア",
    taste: "辛口",
    price: 780,
    volume: "750ml",
    jan: "9311043759871",
imageUrl:"https://imgur.com/WfNwenM.jpeg"
  },
  {
    name: "ＶガンディアカヴァＢナチュレ",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "スペイン",
    taste: "辛口",
    price: 980,
    volume: "750ml",
    jan: "8410310607967",
imageUrl:"https://imgur.com/66fMrDV.jpeg"
  },
  {
    name: "エルミラクレカヴァブリュット",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "スペイン",
    taste: "辛口",
    price: 1280,
    volume: "750ml",
    jan: "8410310606328",
imageUrl:"https://imgur.com/gRRx0ab.jpeg"
  },
  {
    name: "カンティ プロセッコ",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "イタリア",
    taste: "辛口",
    price: 1580,
    volume: "750ml",
    jan: "8005415046447",
imageUrl:"https://imgur.com/kWuQyMm.jpeg"
  },
  {
    name: "サラビベ ブリュット",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "メキシコ",
    taste: "辛口",
    price: 1080,
    volume: "750ml",
    jan: "7501067500012",
imageUrl:"https://imgur.com/5Aj0ZFi.jpeg"
  },
  {
    name: "ＴＶリゴルＥＸブリュット",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "スペイン",
    taste: "辛口",
    price: 980,
    volume: "750ml",
    jan: "4901810987405",
imageUrl:"https://imgur.com/2l6AuOG.jpeg"
  },
  {
    name: "ＴＶリゴルＥＸロゼブリュット",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "スペイン",
    taste: "辛口",
    price: 980,
    volume: "750ml",
    jan: "4901810987412",
imageUrl:"https://imgur.com/ydqwls5.jpeg"
  },
  {
    name: "ＴＶリゴルＥＸセミセコ",
    type: "スパークリング",
    origin: "輸入",
    originDetails: "スペイン",
    taste: "やや甘口",
    price: 980,
    volume: "750ml",
    jan: "4901810987429",
imageUrl:"https://imgur.com/nbgpJmp.jpeg"
  }  // ... 他のワインデータ ...
// ... (既存のワインリストをここに記述) ...
];

const sakeInfo = {
    description: "日本酒は、米、水、麹を原料として発酵させた日本の伝統的なアルコール飲料です。",
    types: [
        { name: "純米酒", description: "米と米麹のみで造られた日本酒。", examples: ["獺祭", "久保田"] },
        { name: "吟醸酒", description: "米を50%以上精米し、低温でゆっくり発酵させた香り高い日本酒。", examples: ["八海山", "臥龍梅"] },
        { name: "大吟醸酒", description: "米を50%以上精米し、さらに手間をかけて造られた最高級の日本酒。", examples: ["十四代", "黒龍"] },
        { name: "本醸造酒", description: "米、米麹、醸造アルコールで造られた日本酒。", examples: ["菊正宗", "月桂冠"] }
    ],
    tastes: [
        { name: "辛口", description: "糖分が少なく、すっきりとした味わい。" },
        { name: "甘口", description: "糖分が多く、まろやかな味わい。" },
        { name: "淡麗", description: "軽やかでさっぱりとした味わい。" },
        { name: "濃醇", description: "コクがあり、味わい深い。" }
    ],
    hokkaido_sake: [
        { name: "国稀", brewery: "国稀酒造", location: "増毛町", feature: "すっきりとした辛口" },
        { name: "男山", brewery: "男山", location: "旭川市", feature: "クリアでバランスの良い味わい" },
        { name: "千歳鶴", brewery: "千歳鶴", location: "札幌市", feature: "まろやかで飲みやすい" }
    ],
    famous_regional_sake: [
        { prefecture: "秋田県", name: "新政", feature: "フルーティーな香りと酸味が特徴" },
        { prefecture: "山形県", name: "十四代", feature: "繊細な味わいと香りが人気" },
        { prefecture: "新潟県", name: "久保田", feature: "クリアでバランスの取れた味わい" },
        { prefecture: "京都府", name: "玉乃光", feature: "まろやかで上品な味わい" },
        { prefecture: "兵庫県", name: "剣菱", feature: "キレのある辛口" }
    ],
    gift_recommendations: [
        { occasion: "一般的な贈り物", recommendations: ["獺祭", "久保田", "八海山"] },
        { occasion: "高級贈答品", recommendations: ["十四代", "而今", "黒龍"] },
        { occasion: "お祝い", recommendations: ["出世魚", "福寿", "天狗舞"] },
        { occasion: "お返し", recommendations: ["白鹿", "月桂冠", "松竹梅"] }
    ],
    serving_temperature: [
        { type: "冷酒", description: "5-10℃で提供。夏向けや香りの高い日本酒に適しています。" },
        { type: "常温", description: "室温（約20℃）で提供。バランスの取れた味わいを楽しめます。" },
        { type: "ぬる燗", description: "40-45℃で提供。冬向けや濃醇な味わいの日本酒に適しています。" }
    ]
};


const chuhaiInfo = {
    description: "チューハイは、蒸留酒をベースにフルーツジュースやフレーバー、炭酸水などで割った日本発祥のアルコール飲料です。",
    baseSpirits: [
        {
            name: "焼酎",
            description: "最も一般的なチューハイのベース。米、麦、芋など様々な原料から作られ、それぞれ特徴的な風味を持つ。",
            tasteProfie: "日本らしい穏やかな味わいで、原料の風味を感じられることがある。"
        },
        {
            name: "ウオッカ",
            description: "無味無臭に近い蒸留酒で、フルーツの風味を際立たせる。",
            tasteProfie: "クリーンでシャープな味わい。フルーツや他の添加物の風味がストレートに感じられる。"
        },
        {
            name: "ジン",
            description: "ジュニパーベリーなどのボタニカルで香り付けされた蒸留酒。",
            tasteProfie: "ハーバルな香りが特徴。柑橘系のフレーバーとよく合う。"
        },
        {
            name: "ラム",
            description: "サトウキビを原料とした蒸留酒。",
            tasteProfie: "甘みのある風味で、トロピカルなフルーツとの相性が良い。"
        }
    ]

    // ... (以前に定義したチューハイ情報をここに挿入)

    // ... (既存のチューハイ情報をここに記述) ...
};

let chuhaiList = [
{ janCode: "4904230013846", maker: "アサヒビール", name: "シードルスィート", volume: "200ml", alcohol: 3, sugarContent: "有糖", description: "国産リンゴ１００％でつくったスパークリングワインです。リンゴを丸ごと丁寧に搾った果汁から生まれました。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/Ku0pK1O.jpeg" },
    { janCode: "4904230013860", maker: "アサヒビール", name: "シードルドライ", volume: "200ml", alcohol: 5, sugarContent: "有糖", description: "国産リンゴ１００％でつくったスパークリングワインです。リンゴを丸ごと丁寧に搾った果汁から生まれました。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/QpJotxW.jpeg" },
    { janCode: "4904230059974", maker: "アサヒビール", name: "ニッカ　シードルロゼ", volume: "200ml", alcohol: 4, sugarContent: "有糖", description: "国産リンゴ１００％でつくったスパークリングワインです。リンゴを丸ごと丁寧に搾った果汁から生まれました。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/WqxscD7.jpeg" },
    { janCode: "4901777403666", maker: "サントリー", name: "無添加ＳＰ赤泡Ｒ", volume: "350ml", alcohol: 9, sugarContent: "有糖", description: "ぶどうをほおばったような果実感と心地よい炭酸感", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/APLKZm8.jpeg" },
    { janCode: "4901777403680", maker: "サントリー", name: "無添加ＳＰ白泡Ｒ", volume: "350ml", alcohol: 9, sugarContent: "有糖", description: "ぶどうをほおばったような果実感と心地よい炭酸感", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/H6odS1d.jpeg" },
    { janCode: "4902102151429", maker: "コカ・コーラ", name: "ジャック＆コーク", volume: "350ml", alcohol: 7, sugarContent: "有糖", description: "コカコーラとジャックダニエルのプレミックスカクテル", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/tgFagcI.jpeg" },
    { janCode: "4901880871932", maker: "サッポロビール", name: "男梅サワー", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "梅干しまるごと粉砕浸漬酒を使用した、唯一無二の梅干し感を味わえます。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/v4R1DD2.jpeg" },
    { janCode: "4985011710949", maker: "アシード", name: "愛南ゴールドのチューハイ", volume: "350ML", alcohol: 5, sugarContent: "有糖", description: "和製グレープフルーツと呼ばれている愛媛県の河内晩柑。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/05E4f7M.jpeg" },
    { janCode: "4985011711243", maker: "アシード", name: "有田みかんのチューハイ", volume: "350ML", alcohol: 5, sugarContent: "有糖", description: "爽やかな酸味と有田特有の甘味でリフレッシュ。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/AIgb31u.jpeg" },
    { janCode: "4901777201439", maker: "サントリー", name: "角ハイボール", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "炭酸強めの爽快な角ハイボールです。味わいの骨格となる原酒は角瓶と同じ原酒を使用しています。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/BJCittP.jpeg" },
    { janCode: "4901777349070", maker: "サントリー", name: "角ハイボール缶濃いめＲ", volume: "350ml", alcohol: 9, sugarContent: "無糖", description: "ほのかなレモンピールの香りゆったり贅沢にお酒を味わえます", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/TMqdCHx.jpeg" },
    { janCode: "4901777212008", maker: "サントリー", name: "トリスハイボール缶", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "トリスハイボールの特長であるすっきりとした味わいを生かしながら、レモンの風味を加えた爽やかな味わいが特長です。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/nhFGkKz.jpeg" },
    { janCode: "4901777306578", maker: "サントリー", name: "ジムビームハイボール缶", volume: "350ml", alcohol: 6, sugarContent: "無糖", description: "ジムビーム原酒の量を増やすことで、よりウイスキーのおいしさを感じられる香り・味わいを目指しました。爽快でキレのある中味に仕上げました。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/XrrVXGo.jpeg" },
    { janCode: "4901777375703", maker: "サントリー", name: "翠ジンソーダＲ", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "日常の食事に合う爽やかな味わいのサントリージン翠のソーダ割り", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/wgiQuBJ.jpeg" },
    { janCode: "4904670464543", maker: "宝酒造", name: "宝焼酎ハイボールレモン", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "スッキリとしたレモンの味わいが特長", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/fGUXDU2.jpeg" },
    { janCode: "4904670464642", maker: "宝酒造", name: "宝焼酎ハイボールドライ", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "ガツンとくる辛口チューハイで、アルコール７%の飲みごたえが特徴。身体に嬉しい甘味料ゼロ、糖質80%オフ、プリン体ゼロを実現。甘くないので、どんな料理とも美味しくお飲みいただけます。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/DKltywI.jpeg" },
    { janCode: "4902102156189", maker: "コカ・コーラ", name: "甘くない無糖レモン７％", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "すっきりとした爽やかさ、みずみずしいレモンを存分に楽しめる、レモンをキュッと搾ったようなシンプルな味わいです。糖類・甘味料不使用。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/Zz8edbx.jpeg" },
    { janCode: "4902102156240", maker: "コカ・コーラ", name: "甘くない檸檬堂無糖レモン５％", volume: "350ml", alcohol: 5, sugarContent: "無糖", description: "すっきりとした爽やかさ、みずみずしいレモンを存分に楽しめる、レモンをキュッと搾ったようなシンプルな味わいです。糖類・甘味料不使用。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/FJpF2Zu.jpeg" },
    { janCode: "4901411104959", maker: "キリンビール", name: "氷結無糖レモン４％Ｒ", volume: "350ml", alcohol: 4, sugarContent: "無糖", description: "しっかりとした飲み応えキリッと冴えるレモンの果実味。", scene: ["食中"], imageUrl: "https://imgur.com/43KQxhG.jpeg" },
    { janCode: "4901411104898", maker: "キリンビール", name: "氷結無糖レモン７％Ｒ", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "しっかりとした飲み応えキリッと冴えるレモンの果実味。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/J9MXRow.jpeg" },
    { janCode: "4901411113678", maker: "キリンビール", name: "氷結無糖ＧＦ４％３５０", volume: "350ml", alcohol: 4, sugarContent: "無糖", description: "豊かなグレープフルーツの味わいかろやかな飲み心地。", scene: ["食中"], imageUrl: "https://imgur.com/T4XxInD.jpeg" },
    { janCode: "4901411113616", maker: "キリンビール", name: "氷結無糖ＧＦ７％３５０", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "豊かなグレープフルーツの味わいかろやかな飲み心地。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/laf9g2m.jpeg" },
    { janCode: "4904230073536", maker: "アサヒビール", name: "ＧＩＮＯＮレモンＲ缶", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "柑橘の果皮を漬け込んで蒸溜し、香味づけられたジンを使用。柑橘の風味がゆっくりと広がっていき、レモンの素材本来のおいしさを楽しむことができます。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/wKV1Fc0.jpeg" },
    { janCode: "4904230073574", maker: "アサヒビール", name: "ＧＩＮＯＮ　ＧＦ　Ｒ缶", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "柑橘の果皮を漬け込んで蒸溜し、香味づけられたジンを使用。柑橘の風味がゆっくりと広がっていき、グレープフルーツの素材本来のおいしさを楽しむことができます。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/6zS0Xpv.jpeg" },
    { janCode: "4901777423633", maker: "サントリー", name: "１９６無糖Ｗレモン４％Ｒ", volume: "350ml", alcohol: 4, sugarContent: "無糖", description: "甘くなくすっきりとした食事に合う無糖のレモンチューハイ", scene: ["食中"], imageUrl: "https://imgur.com/GmbouWX.jpeg" },
    { janCode: "4901777393981", maker: "サントリー", name: "１９６瞬間凍結レモンＲ", volume: "350ml", alcohol: 6, sugarContent: "無糖", description: "甘くないのに骨太な果実感が愉しめる無糖レモン", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/U4zFx0e.jpeg" },
    { janCode: "4901777409804", maker: "サントリー", name: "１９６無糖オレンジレモンＲ", volume: "350ml", alcohol: 4, sugarContent: "無糖", description: "甘くなくすっきりとした無糖のオレンジ＆レモンチューハイ", scene: ["食中"], imageUrl: "https://imgur.com/mxGKGzn.jpeg" },
    { janCode: "4989287001947", maker: "アシード", name: "太陽すもものチューハイ", volume: "350ML", alcohol: 4, sugarContent: "無糖", description: "深い甘みとほのかな酸味による爽やかでバランスの良い味わい。", scene: ["食中", "食後"], imageUrl: "https://imgur.com/jQ6NNuK.jpeg" },
{ janCode: "4936790540142", maker: "富永貿易", name: "カジューハイ　ピンクＧＦ", volume: "340ml", alcohol: 3, sugarContent: "無糖", description: "ピンクグレープフルーツ果汁１００％の低アルコール缶チューハイ", scene: ["食中", "食後"], imageUrl: "https://imgur.com/N7RKAAS.jpeg" },
    { janCode: "4936790540166", maker: "富永貿易", name: "１００％カジューハイ白ぶどう", volume: "340ml", alcohol: 3, sugarContent: "有糖", description: "白ぶどう果汁１００％の低アルコール缶チューハイ", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/9V8J3Xo.jpeg" },
    { janCode: "4936790540128", maker: "富永貿易", name: "１００％カジューハイ　りんご", volume: "340ml", alcohol: 3, sugarContent: "有糖", description: "りんご果汁１００％の低アルコール缶チューハイ", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/idFSs3l.jpeg" },
    { janCode: "4560152543528", maker: "北海道麦酒醸造", name: "りんごのほっぺチューハイ", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "りんごの甘み、香り、美味しさを丸ごと凝縮した「りんごのほっぺ」を使用。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/zFktsua.jpeg" },
    { janCode: "4904230035480", maker: "アサヒビール", name: "カルピスサワー", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "「カルピス」の甘ずっぱいおいしさと程よいアルコール感が楽しめる、やさしくさわやかなスイート系缶チューハイです。甘ずっぱい味わいの「カルピス」をウオッカと炭ろ過水で仕上げたさわやかなスイート系缶チューハイです。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/AVrwztP.jpeg" },
    { janCode: "4901411133959", maker: "キリンビール", name: "華よい檸檬３５０", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "こころ華やぐ解放感を手軽に楽しめる果実スパークリング", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/OsceQjd.jpeg" },
    { janCode: "4901411133881", maker: "キリンビール", name: "華よい白桃３５０", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "こころ華やぐ解放感を手軽に楽しめる果実スパークリング", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/HacgzjZ.jpeg" },
    { janCode: "4901411133829", maker: "キリンビール", name: "華よい葡萄３５０", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "こころ華やぐ解放感を手軽に楽しめる果実スパークリング", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/0q9SU44.jpeg" },
    { janCode: "4901777421141", maker: "サントリー", name: "ほろよいレモンティーＲ", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "華やかな紅茶にレモンが爽やかさを添える味わい", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/ecuigFf.jpeg" },
    { janCode: "4901777421165", maker: "サントリー", name: "ほろよいアップルティーＲ", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "紅茶とアップルの華やかさが楽しめる味わい", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/ubL8PZx.jpeg" },
    { janCode: "4901777375505", maker: "サントリー", name: "ほろよいレモみかんＲ", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "レモンの爽やかさとみかんのやさしい甘みを楽しめるほろよいです", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/nLW00bw.jpeg" },
    { janCode: "4901777284791", maker: "サントリー", name: "ほろよい　白ぶどう", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "白ぶどうのみずみずしい果実感が口いっぱいに広がる、さわやかな味わいです。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/IHiDAh4.jpeg" },
    { janCode: "4901777196698", maker: "サントリー", name: "ほろよいもも", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "圧倒的な桃の果実味", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/enUlTlz.jpeg" },
    { janCode: "4901777204706", maker: "サントリー", name: "ほろよい白いサワー", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "乳性飲料のようなやさしい味わいはそのままに、甘酸っぱい爽やかさをより感じられる中味に仕上げました。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/SMyYx38.jpeg" },
    { janCode: "4901777247277", maker: "サントリー", name: "カシスとオレンジ", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "オレンジ果汁の味わいがしっかりと感じられるフルーティな味わいに仕上げました。カシスのほどよい甘酸っぱさと微炭酸による爽やかな飲み心地。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/9iQ2eBu.jpeg" },
    { janCode: "4901777360136", maker: "サントリー", name: "ほろよいシュワビタＲ", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "シュワシュワした炭酸が心地良い　心が前向きになれるほろよい", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/vt9VHRt.jpeg" },
    { janCode: "4901777193369", maker: "サントリー", name: "ほろよい梅酒ソーダ", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "人気上昇中の梅", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/0dYEc2D.jpeg" },
    { janCode: "4901411000459", maker: "キリンビール", name: "キリンビール　氷結レモン", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "シチリア島で収穫されたレモンを主に使用した、みずみずしくスッキリ爽快なおいしさ。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/oPx3z75.jpeg" },
    { janCode: "4901411025896", maker: "キリンビール", name: "キリン本搾りチューハイレモン", volume: "350ml", alcohol: 6, sugarContent: "無糖", description: "糖類無添加の果実系チューハイ", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/2phLr0h.jpeg" },
    { janCode: "4901411026152", maker: "キリンビール", name: "キリン本搾りチューハイＧＦ", volume: "350ml", alcohol: 6, sugarContent: "無糖", description: "糖類無添加の果実系チューハイ", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/Oe1FgY9.jpeg" },
    { janCode: "4901411055480", maker: "キリンビール", name: "本搾りピンクグレープフルーツ", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "果実とお酒だけでつくる、ピンクグレープフルーツを主に使用した、フルーティなおいしさが楽しめるチューハイ。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/KQmexvE.jpeg" },
    { janCode: "4901411039985", maker: "キリンビール", name: "本搾りオレンジ", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "果実とお酒だけでつくる、オレンジのジューシーなおいしさが楽しめるチューハイ。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/xkus9BF.jpeg" },
    { janCode: "4904230052289", maker: "アサヒビール", name: "贅沢搾りグレープフルーツ", volume: "350ml", alcohol: 4, sugarContent: "有糖", description: "アサヒ贅沢搾りグレープフルーツ", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/QBbTItt.jpeg" },
    { janCode: "4904230052326", maker: "アサヒビール", name: "贅沢搾り桃", volume: "350ml", alcohol: 4, sugarContent: "有糖", description: "贅沢搾り桃", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/j4SyGRg.jpeg" },
    { janCode: "4904230067252", maker: "アサヒビール", name: "贅沢搾りプレミアムみかん", volume: "350ml", alcohol: 4, sugarContent: "有糖", description: "果実感たっぷりの味わいの贅沢なみかんテイストチューハイです。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/35YyJEk.jpeg" },
    { janCode: "4904230073192", maker: "アサヒビール", name: "贅沢搾りプレミアムぶどう", volume: "350ml", alcohol: 4, sugarContent: "有糖", description: "果実感たっぷりの味わいが楽しめる贅沢なぶどうチューハイです", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/dEh1MUW.jpeg" },
    { janCode: "4901777393882", maker: "サントリー", name: "こだわり酒場タコハイＲ", volume: "350ml", alcohol: 6, sugarContent: "無糖", description: "酒場で愛されるプレーンサワー「タコハイ」", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/PArNvg4.jpeg" },
    { janCode: "4901777332508", maker: "サントリー", name: "こだわりレモンサワーＲ", volume: "350ml", alcohol: 7, sugarContent: "有糖", description: "しっかりレモン感とお酒のうまみを楽しめる新しいレモンサワー", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/hgmShWa.jpeg" },
    { janCode: "4901777361607", maker: "サントリー", name: "こだわり酒場追足Ｒ", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "レモンにひと工夫したお店のうまいレモンサワー", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/MTIdx12.jpeg" },
    { janCode: "4901880201371", maker: "サッポロビール", name: "濃いめのレモンサワー", volume: "350ml", alcohol: 7, sugarContent: "有糖", description: "レモン味しっかり濃いめのレモンサワー", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/2iEMXqF.jpeg" },
{ janCode: "4901880205102", maker: "サッポロビール", name: "濃いめ濃いままＲ", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "レモン味濃いめのしっかりすっぱいレモンサワーの濃いまま５度", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/qkGBlTm.jpeg" },
    { janCode: "4901880209940", maker: "サッポロビール", name: "濃いめグレフルＲ", volume: "350ml", alcohol: 7, sugarContent: "有糖", description: "グレフル味濃いめのグレフルサワー", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/UjUR5Xp.jpeg" },
    { janCode: "4901880208226", maker: "サッポロビール", name: "ニッポンのシンレモンＲ", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "レモンのプロのポッカサッポロと協働開発レモンサワーのシン定番", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/R8kKtk9.jpeg" },
    { janCode: "4902102130189", maker: "コカ・コーラ", name: "檸檬堂　定番レモン缶", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "丸ごとすりおろしレモン果汁　ＡＬＣ５％果汁１０％　定番の味", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/DxtZTuO.jpeg" },
    { janCode: "4902102155076", maker: "コカ・コーラ", name: "檸檬堂　レモン濃いめ", volume: "350ml", alcohol: 7, sugarContent: "有糖", description: "レモン丸ごと２個分のたっぷりレモンとお酒の超濃厚レモンサワー", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/kcwESeh.jpeg" },
    { janCode: "4549414440751", maker: "イオントップバリュ", name: "ＢＰレモンサワー３５０", volume: "350ml", alcohol: 7, sugarContent: "有糖", description: "しっかり　とした飲み応えキリッ　と冴えるレモンの果実味。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/DBzSFHR.jpeg" },
    { janCode: "4549414625820", maker: "イオントップバリュ", name: "ＢＰカロリーハーフレモン", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "カロリー半分糖類８０オフのすっきりした味わいのチューハイ", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/TnLprl4.jpeg" },
    { janCode: "4549414440638", maker: "イオントップバリュ", name: "ＢＰまる搾りレモン３５０", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "レモンの果実をまるごと搾った果汁感たっぷりのチューハイ", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/WoekErY.jpeg" },
    { janCode: "4549414440676", maker: "イオントップバリュ", name: "ＢＰまる搾りＧＦ３５０", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "グレープフルーツをまるごと搾った果汁感たっぷりのチューハイ", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/fdCA747.jpeg" },
    { janCode: "4549414440713", maker: "イオントップバリュ", name: "ＢＰまるごとうめ３５０", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "国産梅１００％使用した梅酒の芳醇な味わいをお楽しみください。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/jtTKaeI.jpeg" },
    { janCode: "4549414448689", maker: "イオントップバリュ", name: "ＢＰＳＴぶどう３５０ｍｌ", volume: "350ml", alcohol: 9, sugarContent: "有糖", description: "糖類ゼロプリン体ゼロの果実の味が感じられるチューハイです！", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/qb3km3M.jpeg" },
    { janCode: "4549414448764", maker: "イオントップバリュ", name: "ＢＰＳＴライム３５０ｍｌ", volume: "350ml", alcohol: 9, sugarContent: "有糖", description: "糖類ゼロプリン体ゼロの果実の味が感じられるチューハイです！", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/Q2Y1fsd.jpeg" },
    { janCode: "4549414629255", maker: "イオントップバリュ", name: "ＢＰ無糖プレーン３５０", volume: "350ml", alcohol: 6, sugarContent: "無糖", description: "糖類・甘味料を一切使わず仕上げた余計な甘さのない味わい", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/xnNFmJd.jpeg" },
    { janCode: "4549414623895", maker: "イオントップバリュ", name: "ＢＰ無糖レモン３５０ｍｌ", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "糖類・甘味料を一切使わず仕上げた余計な甘さのない味わい", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/STR50nb.jpeg" },
    { janCode: "4549414623932", maker: "イオントップバリュ", name: "ＢＰ無糖ＧＦ３５０ｍｌ", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "糖類・甘味料を一切使わず仕上げた余計な甘さのない味わい", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/W0MO7ze.jpeg" },
    { janCode: "4549414631159", maker: "イオントップバリュ", name: "ＢＰ無糖シークァー３５０", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "糖類・甘味料を一切使わず仕上げた余計な甘さのない味わい", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/UqjzeCk.jpeg" },
    { janCode: "4549414609264", maker: "イオントップバリュ", name: "ＢＰウィスキーハイボール", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "本場スコットランドで蒸留されたウィスキーのハイボール", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/fa8eQS0.jpeg" },
    { janCode: "4549414448726", maker: "イオントップバリュ", name: "ＢＰＳＴドライ３５０ｍｌ", volume: "350ml", alcohol: 9, sugarContent: "無糖", description: "糖類ゼロプリン体ゼロの高炭酸チューハイです。！", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/nFh7P6t.jpeg" },
    { janCode: "4549414448603", maker: "イオントップバリュ", name: "ＢＰＳＴレモン３５０ｍｌ", volume: "350ml", alcohol: 9, sugarContent: "無糖", description: "糖類ゼロプリン体ゼロの果実の味が感じられるチューハイです！", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/weNBf6i.jpeg" },
    { janCode: "4549414448801", maker: "イオントップバリュ", name: "ＢＰＳＴ塩レモン３５０", volume: "350ml", alcohol: 9, sugarContent: "無糖", description: "糖類ゼロプリン体ゼロの果実の味が感じられるチューハイです！", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/JEqKCYJ.jpeg" },
    { janCode: "4549414448641", maker: "イオントップバリュ", name: "ＢＰＳＴＧＦ３５０ｍｌ", volume: "350ml", alcohol: 9, sugarContent: "無糖", description: "糖類ゼロプリン体ゼロの果実の味が感じられるチューハイです！", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/rzxZBd3.jpeg" },
    { janCode: "4549414623970", maker: "イオントップバリュ", name: "ＢＰＳＴうめ３５０ｍｌ", volume: "350ml", alcohol: 9, sugarContent: "無糖", description: "糖類ゼロプリン体ゼロの果実の味が感じられるチューハイです！", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/f2idQq2.jpeg" },
    { janCode: "4901777026001", maker: "サントリー", name: "サントリー　白角水割", volume: "250ml", alcohol: 9, sugarContent: "無糖", description: "爽やかな香味とすっきりキレの良いあとくちが特長の水割りウイスキーです。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/y964MTW.jpeg" },
    { janCode: "4905846118468", maker: "チョーヤ梅酒", name: "ウメッシュ３％缶", volume: "250ml", alcohol: 3, sugarContent: "無糖", description: "すっきりとしたライトな飲み心地の本格梅酒ソーダ", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/5LEMNQz.jpeg" },
    { janCode: "4905846111360", maker: "チョーヤ", name: "チョーヤ　ウメッシュ　缶", volume: "250ml", alcohol: 4, sugarContent: "有糖", description: "酸味料や香料を使用せず、梅のエキスをじっくりと抽出した本格梅酒のソーダ割りだから飲み飽きしないおいしさが楽しめます。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/8qHayLp.jpeg" },
    { janCode: "4905846117065", maker: "チョーヤ梅酒", name: "チョーヤ　ゆずッシュ", volume: "250ml", alcohol: 3, sugarContent: "有糖", description: "四国産ゆず使用のすっきり爽やかな味わい。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/DhjrrvZ.jpeg" },
    { janCode: "4905846118444", maker: "チョーヤ梅酒", name: "熟成一年梅酒ソーダ　缶", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "Ｔｈｅ　ＣＨＯＹＡ熟成一年をそのままソーダ割りにしました", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/pn8lf9z.jpeg" },
{ janCode: "4971980755593", maker: "合同酒精", name: "ＮＰシャインマスカット", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "甘くて芳醇な味わいとぶどう感たっぷりなマスカットチューハイ", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/MolOFif.jpeg" },
    { janCode: "4971980310709", maker: "合同酒精", name: "合同　沖縄県産パイナップル", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "沖縄の太陽をたっぷり浴びて熟した、厳選パイナップル果汁を使用。甘酸っぱくてジューシーなチューハイです。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/x9E1hD0.jpeg" },
    { janCode: "4942568140018", maker: "山形県酒類卸", name: "木頭ゆずチューハイ", volume: "350ML", alcohol: 3, sugarContent: "有糖", description: "ＪＡアグリあなん女性部が感性を活かして開発したチューハイ", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/7KMTmM3.jpeg" },
    { janCode: "4901880880989", maker: "サッポロビール", name: "超男梅サワー", volume: "350ml", alcohol: 9, sugarContent: "有糖", description: "梅干しまるごとの旨さを閉じ込めた液中粉砕浸漬酒を使用。アルコール９度の飲みごたえと、こだわり抜いた梅干し感をお楽しみください。", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/88ui5No.jpeg" },
    { janCode: "4901880207182", maker: "サッポロビール", name: "男梅サワー無糖Ｒ", volume: "350ml", alcohol: 5, sugarContent: "無糖", description: "食事に合う男梅サワーウメぇ無糖が新登場", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/hwoXEjb.jpeg" },
    { janCode: "4901411130651", maker: "キリンビール", name: "上々焼酎ソーダ梅３５０", volume: "350ml", alcohol: 6, sugarContent: "無糖", description: "梅干しをアクセントに加えたスッキリ爽やかで軽快な焼酎ソーダ", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/BZXoYyT.jpeg" },
    { janCode: "4901411121659", maker: "キリンビール", name: "上々焼酎ソーダＲ", volume: "350ml", alcohol: 6, sugarContent: "無糖", description: "最高の食中酒となる軽快な飲み口のキリンの焼酎ソーダ", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/WnF8aXT.jpeg" },
    { janCode: "4904670470681", maker: "宝酒造", name: "宝　焼酎のやわらかお茶割り", volume: "335ml", alcohol: 4, sugarContent: "無糖", description: "こだわりの茶葉使用香料・着色料不使用プリン体ゼロ", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/MPqVMBq.jpeg" },
    { janCode: "4904670479066", maker: "宝酒造", name: "宝焼酎の濃いお茶割り", volume: "335ML", alcohol: 4, sugarContent: "無糖", description: "カテキン２倍で渋くて濃い味わいが特長の濃いお茶割り。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/o01PDZI.jpeg" },
    { janCode: "4901777411227", maker: "サントリー", name: "茉莉花ジャスミン茶割", volume: "335ml", alcohol: 4, sugarContent: "無糖", description: "ジャスミン焼酎茉莉花をジャスミン茶で割った通称ＪＪ缶", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/E1P60vq.jpeg" },
    { janCode: "4901777180918", maker: "サントリー", name: "ＳＵ烏龍チューハイ", volume: "335ml", alcohol: 4, sugarContent: "無糖", description: "中国福建省産の茶葉を使用", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/8aoc11C.jpeg" },
    { janCode: "4901777218581", maker: "サントリー", name: "ほろよいはちみつレモン", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "レモンのほどよい酸味に、はちみつのやさしい甘さを加えた爽やかな味わいです。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/zJjqoOs.jpeg" },
    { janCode: "4901777214590", maker: "サントリー", name: "ＳＵほろよいアイスティーＳ", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "紅茶の華やかな香りとほのかなレモンの味わいが楽しめる、すっきりとした味わいです。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/mEoWZQq.jpeg" },
    { janCode: "4901777211742", maker: "サントリー", name: "ほろよい　ぶどう", volume: "350ml", alcohol: 3, sugarContent: "有糖", description: "やわらかい甘みと華やかな香りアルコール３％やさしい飲み心地", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/31qraMq.jpeg" },
    { janCode: "4901411121451", maker: "キリンビール", name: "本搾りプレミアム４種Ｒ", volume: "350ml", alcohol: 6, sugarContent: "有糖", description: "複数果実のブレンドと果実の余韻が楽しめる特別な本搾り", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/jnLaVN1.jpeg" },
    { janCode: "4901411121499", maker: "キリンビール", name: "本搾りプレミアム３種Ｒ", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "複数果実のブレンドと果実の余韻が楽しめる特別な本搾り", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/5cZueVl.jpeg" },
    { janCode: "4904230070238", maker: "アサヒビール", name: "贅沢プレミアムトマトＲ", volume: "350ml", alcohol: 4, sugarContent: "有糖", description: "果実感たっぷりの味わいが楽しめる贅沢なトマトチューハイです。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/C97eIkV.jpeg" },
    { janCode: "4901411101446", maker: "キリンビール", name: "キリンザストロングレモンＲ", volume: "350ml", alcohol: 9, sugarContent: "有糖", description: "本格的なレモンの甘すぎない味わい。追いレモン潤沢仕立て。", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/9WMYb3Z.jpeg" },
    { janCode: "4901411101576", maker: "キリンビール", name: "キリンザストロングホワイトＲ", volume: "350ml", alcohol: 9, sugarContent: "有糖", description: "すっきり飲みやすい爽快な味わい。ヨーグルトすっきり仕立て。", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/RDwTfQP.jpeg" },
    { janCode: "4901880209803", maker: "サッポロビール", name: "クラフトスパイスソーダＲ", volume: "350ml", alcohol: 6, sugarContent: "無糖", description: "食事を引き立てる香りと刺激", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/ThNcwFS.jpeg" },
    { janCode: "4901411134390", maker: "キリンビール", name: "Ｐジンソーダ杜の香３５０", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "ジュニパーベリー１００％のジンの清涼感と軽やかな炭酸感", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/DKvk73k.jpeg" },
    { janCode: "4904230044994", maker: "アサヒビール", name: "ブラックニッカハイボール", volume: "350ml", alcohol: 9, sugarContent: "無糖", description: "ブラックニッカハイボール", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/yfQV62h.jpeg" },
    { janCode: "4904230051657", maker: "アサヒビール", name: "ＢＬＣハイボール香る夜", volume: "350ml", alcohol: 9, sugarContent: "無糖", description: "ＢＬＣハイボール香る夜缶", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/RVMjCFG.jpeg" },
    { janCode: "4904670495103", maker: "宝酒造", name: "宝発酵蒸留サワークリア", volume: "350ml", alcohol: 3, sugarContent: "無糖", description: "お酒好きのための３％チューハイ", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/ZX4bDBy.jpeg" },
    { janCode: "4904670496346", maker: "宝酒造", name: "宝発酵蒸留サワーレモン", volume: "350ml", alcohol: 3, sugarContent: "無糖", description: "お酒好きのための３％チューハイ", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/wI4Ccrc.jpeg" },
    { janCode: "4904670495721", maker: "宝酒造", name: "宝発酵蒸留サワーぶどう", volume: "350ml", alcohol: 3, sugarContent: "無糖", description: "お酒好きのための３％チューハイ", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/ZCeogFT.jpeg" },
    { janCode: "4901411110844", maker: "キリンビール", name: "氷結無糖レモン９％３５０缶", volume: "350ml", alcohol: 9, sugarContent: "無糖", description: "しっかりとした飲み応えキリッと冴えるレモンの果実味。", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/BBui1uN.jpeg" },
    { janCode: "4901411122052", maker: "キリンビール", name: "氷結無糖シークヮーサー７％Ｒ", volume: "350ml", alcohol: 7, sugarContent: "無糖", description: "沖縄県産シークヮーサー使用。爽やかな酸味が特徴。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/2PTNlEM.jpeg" },
    { janCode: "4901777404786", maker: "サントリー", name: "１９６瞬間無糖グレフルＲ", volume: "350ml", alcohol: 9, sugarContent: "無糖", description: "甘くないのに骨太な果実感が愉しめる無糖グレープフルーツ", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/CLab9CU.jpeg" },
    { janCode: "4901777409767", maker: "サントリー", name: "１９６無糖シークヮーサーＲ", volume: "350ml", alcohol: 9, sugarContent: "無糖", description: "甘くなくすっきりとした無糖のシークヮーサーチューハイ", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/mSdY685.jpeg" },
  
{ janCode: "4901777374317", maker: "サントリー", name: "こだわり酒場濃い旨Ｒ", volume: "350ml", alcohol: 7, sugarContent: "有糖", description: "濃いめの味わいで食事に合う濃い旨レモンサワー", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/nVoyQsW.jpeg" },
    { janCode: "4901411000404", maker: "キリンビール", name: "キリンビール　氷結ＧＦ", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "南アフリカ産のグレープフルーツを使用した、みずみずしくスッキリ爽快なおいしさ。", scene: ["食中", "リラックスタイム"], imageUrl: "https://imgur.com/dgpafO7.jpeg" },
    { janCode: "4901411034683", maker: "キリンビール", name: "氷結シャルドネスパークリング", volume: "350ml", alcohol: 5, sugarContent: "有糖", description: "白ワイン「シャルドネ」の風味豊かな味わいが楽しめるスパークリングチューハイ。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/0zaLR5s.jpeg" },
    { janCode: "4904230053644", maker: "アサヒビール", name: "贅沢搾りキウイ", volume: "350ml", alcohol: 4, sugarContent: "有糖", description: "果実感たっぷりの味わいが楽しめる贅沢なキウイチューハイです。", scene: ["食後", "リラックスタイム"], imageUrl: "https://imgur.com/Y3cMFvy.jpeg" },
    { janCode: "4901777240971", maker: "サントリー", name: "１９６ＤＲＹ", volume: "350ml", alcohol: 9, sugarContent: "無糖", description: "当社独自のウオツカやラムなど、厳選した原料酒を絶妙なバランスで配合し、甘くない爽快なキレ味を実現しました。", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/xnVj0LE.jpeg" },
    { janCode: "4901777192607", maker: "サントリー", name: "ー１９６℃ストロングＤレモン", volume: "350ml", alcohol: 9, sugarContent: "有糖", description: "ダブルレモンの果実感ダブルレモンの果実感", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/HoGW7GO.jpeg" },
    { janCode: "4901777293656", maker: "サントリー", name: "ー１９６ＳＴビターレモン", volume: "350ml", alcohol: 9, sugarContent: "有糖", description: "ほろ苦さを引き出したレモンピール（果皮）浸漬酒とレモンまるごとの浸漬酒を使用し、レモン果皮本来のほろ苦さが楽しめる甘くないすっきりとした味わいに仕上げました。", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/QTYKQT5.jpeg" },
    { janCode: "4901777210912", maker: "サントリー", name: "１９６ゼロシークワーサー", volume: "350ml", alcohol: 9, sugarContent: "有糖", description: "－196℃製法による果実の浸漬酒と果汁をダブルで使用しました。しっかりとした飲みごたえと果実感を楽しめます。", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/8C7lL0I.jpeg" },
    { janCode: "4901777222861", maker: "サントリー", name: "１９６ＳＺ完熟梅", volume: "350ml", alcohol: 9, sugarContent: "有糖", description: "-196℃製法による完熟梅の浸漬酒と完熟梅酒をダブルで使用しました。", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/7WJekkX.jpeg" },
    { janCode: "4901777371613", maker: "サントリー", name: "レモンハイトリスＲ", volume: "350ml", alcohol: 9, sugarContent: "無糖", description: "漬け込みレモンをウイスキーで丁寧に仕上げた特製ハイボール", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/tdN07Yk.jpeg" },
    { janCode: "4901777285040", maker: "サントリー", name: "トリハイ缶　キリッと濃いめ", volume: "350ml", alcohol: 9, sugarContent: "無糖", description: "中味の配合バランスを見直すことで、よりウイスキーの飲みごたえと余韻を感じられ、満足感がありながらもすっきりと飲み飽きないおいしさになりました。", scene: ["リラックスタイム"], imageUrl: "https://imgur.com/I1hGFSc.jpeg" }



    // ... (以前に定義したチューハイリストをここに挿入)
];

const chuhaiScenes = {
    "食中": {
        description: "料理と一緒に楽しむのに適したチューハイ",
        characteristics: [
            "すっきりとした味わい",
            "アルコール度数が比較的低め",
            "炭酸感があり、口中をリフレッシュする"
        ]
    },
    "食後": {
        description: "食事の締めくくりに楽しむのに適したチューハイ",
        characteristics: [
            "甘めの味わい",
            "フルーティーな香り",
            "デザート感覚で楽しめる"
        ]
    },
    "リラックスタイム": {
        description: "リラックスしたい時間に楽しむのに適したチューハイ",
        characteristics: [
            "味わいが濃厚",
            "アルコール度数が比較的高め",
            "ゆっくりと味わって楽しめる"
        ]
    }
};
const shochuInfo = {
    types: [
        {name: "甲類焼酎", description: "連続式蒸留器で蒸留され、アルコール度数が36%以上のもの。", features: "クセが少なく、ソフトな味わい。ほとんど無色透明。", examples: ["白岳", "三楽焼酎", "JINRO"]},
        {name: "乙類焼酎", description: "単式蒸留器で蒸留され、アルコール度数が45%未満のもの。", features: "原料の香りや味わいが残り、個性的な風味を持つ。", examples: ["いいちこ", "黒霧島", "魔王"]},
        {name: "麦焼酎", description: "大麦を原料とし、まろやかな味わいが特徴。", representative: "二階堂", features: "香ばしさとまろやかさのバランスが良い。"},
        {name: "芋焼酎", description: "サツマイモを原料とし、香り豊かで個性的な味わい。", representative: "魔王", features: "芋の甘みと華やかな香りが特徴。"},
        {name: "米焼酎", description: "米を原料とし、淡麗でクセが少ない。", representative: "八海山", features: "すっきりとした味わいで日本酒に近い印象。"},
        {name: "そば焼酎", description: "そばを原料とし、香ばしい香りが特徴。", representative: "雲海", features: "そば本来の香ばしさを楽しめる。"},
        {name: "黒糖焼酎", description: "黒糖を原料とし、まろやかで甘い香りが特徴。", representative: "龍宮", features: "黒糖の甘い香りと深みのある味わい。"}
    ],
    distillationMethods: [
        {name: "単式蒸留", description: "原料の風味を残した個性的な味わいになる。主に乙類焼酎の製造に使用。"},
        {name: "連続式蒸留", description: "アルコール度数が高く、クセが少ない。主に甲類焼酎の製造に使用。"}
    ],
    comparison: {
        title: "甲類焼酎と乙類焼酎の違い",
        details: [
            {aspect: "蒸留方法", koushu: "連続式蒸留", otsushu: "単式蒸留"},
            {aspect: "アルコール度数", koushu: "36%以上", otsushu: "45%未満"},
            {aspect: "原料の風味", koushu: "ほとんど残らない", otsushu: "よく残る"},
            {aspect: "味わい", koushu: "クセが少なく、ソフト", otsushu: "個性的で風味豊か"},
            {aspect: "代表的な飲み方", koushu: "割り材との相性が良い", otsushu: "ストレートや水割りで楽しむことが多い"},
            {aspect: "主な用途", koushu: "カクテルのベースやサワーに", otsushu: "そのままの味わいを楽しむ"}
        ]
    }
};

const whiskyInfo = {
    types: [
        {name: "シングルモルト", description: "単一の蒸留所で製造され、100%大麦麦芽を使用。", representative: "山崎", features: "複雑な風味と豊かな香りが特徴。"},
        {name: "ブレンデッド", description: "複数の原酒をブレンドして作られる。", representative: "響", features: "バランスの取れた味わいで飲みやすい。"},
        {name: "バーボン", description: "主にトウモロコシを原料とし、新樽で熟成させたアメリカンウイスキー。", representative: "ジムビーム", features: "甘みとバニラのような香りが特徴。"},
        {name: "ライウイスキー", description: "主にライ麦を原料としたウイスキー。", representative: "サントリー知多", features: "スパイシーでドライな味わい。"}
    ],
    regions: [
        {name: "スコットランド", description: "スモーキーな味わいが特徴的なものが多い。", representative: "ラフロイグ", features: "強いピート香と海の香りが特徴。"},
        {name: "アイルランド", description: "まろやかで飲みやすい味わいが特徴。", representative: "ジェムソン", features: "フルーティーでスムースな味わい。"},
        {name: "アメリカ", description: "バーボンやライウイスキーが代表的。", representative: "ジャックダニエル", features: "スムースでバランスの取れた味わい。"},
        {name: "日本", description: "繊細でバランスの取れた味わいが特徴。", representative: "山崎", features: "複雑な風味と豊かな香りが特徴。"}
    ],
    rareAndExpensive: [
        {name: "山崎50年", description: "日本を代表する超高級ウイスキー。", features: "豊かな香りと深い味わいが特徴。極めて希少。"},
        {name: "マッカラン 1926", description: "世界最高額で取引されたウイスキーの一つ。", features: "60年以上熟成された極めて希少なシングルモルト。"},
        {name: "ダルモア 62年", description: "世界で最も高価なウイスキーの一つ。", features: "62年熟成の極めて希少なシングルモルト。"}
    ],
    japaneseWhiskies: [
        {name: "山崎", description: "サントリーの代表的なシングルモルトウイスキー。", features: "フルーティーな香りとまろやかな味わい。"},
        {name: "響", description: "サントリーのプレミアムブレンデッドウイスキー。", features: "華やかな香りと深みのある味わい。"},
        {name: "白州", description: "サントリーのシングルモルトウイスキー。", features: "爽やかな香りとクリーンな味わい。"},
        {name: "ニッカ竹鶴", description: "ニッカウヰスキーの高級ブレンデッドウイスキー。", features: "バランスの取れた味わいと長い余韻。"},
        {name: "余市", description: "ニッカウヰスキーのシングルモルトウイスキー。", features: "フルーティーな香りとスモーキーな味わい。"}
    ]
};

const beerInfo = {
    types: [
        { name: "ラガー", description: "低温発酵のビール。すっきりとした味わいが特徴。", examples: ["アサヒスーパードライ", "キリンラガー", "サッポロ黒ラベル"] },
        { name: "エール", description: "高温発酵のビール。フルーティーな香りが特徴。", examples: ["ヱビス", "プレミアムモルツ", "ベアレン"] },
        { name: "スタウト", description: "濃色で苦みの強いビール。", examples: ["ギネス", "ヤッホーブルーイング Tokyo Black"] },
        { name: "IPA", description: "ホップの香りと苦みが強いビール。", examples: ["よなよなエール インディア・ペールエール", "サンクトガーレン"] }
    ],
    taste_differences: {
        title: "ビールの種類と特徴の比較",
        categories: [
            {
                name: "ビール（麦芽67%以上）",
                ingredients: "麦芽67%以上使用",
                taste: "麦芽由来の豊かな味わいとコク、ホップの香りと苦みがしっかりと感じられる",
                aroma: "麦芽とホップの香りが豊か",
                body: "しっかりとした飲みごたえ",
                aftertaste: "麦芽の余韻が長く続く",
                examples: ["★アサヒスーパードライ", "★キリンラガー", "★サッポロ黒ラベル"]
            },
            {
                name: "発泡酒",
                ingredients: "麦芽25%以上使用",
                taste: "ビールに近い味わいだが、若干軽め。ホップの苦みは控えめ",
                aroma: "穏やかな麦芽の香り",
                body: "やや軽めの飲みごたえ",
                aftertaste: "すっきりとした後味",
                examples: ["★キリン淡麗", "★ＴＶＢＰバーリアル", "★アサヒスタイルフリー"]
            },
            {
                name: "第3のビール",
                ingredients: "麦芽不使用または25%未満。大豆や豆由来の原料などを使用",
                taste: "さっぱりとした味わいで、クセが少ない。アルコール感は控えめ",
                aroma: "穏やかで優しい香り",
                body: "軽やかな飲みごたえ",
                aftertaste: "キレのある後味",
                examples: ["★キリンのどごし生", "★キリン本麒麟", "★アサヒクリアアサヒ"]
            },
            {
                name: "ラガー",
                ingredients: "麦芽、ホップ",
                taste: "すっきり",
                aroma: "軽い麦芽香",
                body: "軽め",
                aftertaste: "クリーン",
                examples: ["スーパードライ", "キリンラガー"]
            },
            {
                name: "エール",
                ingredients: "麦芽、ホップ（多め）",
                taste: "コク深い",
                aroma: "フルーティ",
                body: "中～重め",
                aftertaste: "余韻が長い",
                examples: ["ヱビス", "プレミアムモルツ"]
            },
            {
                name: "スタウト",
                ingredients: "焙煎麦芽",
                taste: "濃厚",
                aroma: "ローストの香り",
                body: "重め",
                aftertaste: "ビター",
                examples: ["ギネス", "よなよなスタウト"]
            }
        ],
        keys_to_differences: [
            "原料の違いにより、味わいの深さやコクに差が出ます",
            "麦芽使用量が多いほど、麦芽由来の香りとコクが強くなります",
            "ホップの使用量も異なるため、苦みの強さに違いが出ます",
            "製法の違いにより、泡持ちや炭酸の質感も異なります"
        ]
    },
    differences: [
        { name: "ビール", description: "麦芽使用率67%以上。", tax: "1リットルあたり220円（350ml缶で77円）" },
        { name: "発泡酒", description: "麦芽使用率25%以上。", tax: "1リットルあたり178円（350ml缶で62円）" },
        { name: "第三のビール", description: "麦芽不使用、または麦芽使用率25%未満。", tax: "1リットルあたり134円（350ml缶で47円）" }
    ],
    craftBeer: {
        description: "小規模醸造所で製造される個性的なビール。",
        features: ["多様な味わい", "地域性", "実験的な製法"],
        examples: ["よなよなエール", "ベアードビール", "サンクトガーレン"]
    },
    ipaInfo: {
        description: "India Pale Aleの略。ホップを多く使用した苦みの強いビール。",
        history: "イギリスからインドへの輸送中に腐らないよう、ホップを多く入れたことが始まり。",
        characteristics: ["強い苦み", "フルーティーな香り", "高めのアルコール度数"]
    },
    spinner: {
        description: "ビールサーバーに取り付ける泡立て器。",
        function: "ビールに細かい泡を作り出し、クリーミーな泡立ちを実現する。",
        benefits: ["見た目の向上", "香りの保持", "飲み心地の改善"]
    }
};

// メイン関数
function showScreen(screenId) {
    // 全画面を非表示
    document.querySelectorAll('#app > div').forEach(div => div.style.display = 'none');
    // 指定された画面を表示
    document.getElementById(screenId).style.display = 'block';

    // 各画面の初期化
    switch (screenId) {
        case 'home-screen':
            displayDiscountInfo();
            break;
        case 'beer-screen':
            displayBeerInfo();
            break;
        case 'wine-screen':
            displayWineInfo();
            displayBeaujolaisInfo();
            filterWines();
            break;
        case 'sake-screen':
            displaySakeInfo();
            break;
        case 'chuhai-screen':
            displayChuhaiInfo();
            initializeChuhaiFilters();
            displaySceneExplanations();
            filterChuhai();
            break;
        case 'shochu-screen':
            displayShochuInfo();
            break;
        case 'whisky-screen':
            displayWhiskyInfo();
            break;
    }

    // ページトップにスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // アイコンの再初期化
    lucide.createIcons();
}

// トップに戻るボタンの実装
function addBackToTopButton() {
    const button = document.createElement('div');
    button.className = 'back-to-top';
    button.innerHTML = '<i data-lucide="arrow-up"></i>';
    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    lucide.createIcons();
}

// ホーム画面の表示
function displayDiscountInfo() {
    const discountInfo = document.getElementById('discount-info');
    discountInfo.innerHTML = `
        <div class="info-section">
            <h3><i data-lucide="percent"></i>【感謝デーのご案内】</h3>
            <p>毎月12日フードデー、20日・30日はお客さま感謝デーとして、一部のお酒を除き5%割引で販売しています。</p>
            
            <h4><i data-lucide="check"></i>【割引対象商品】</h4>
            <ul class="discount-list">
                <li>日本酒</li>
                <li>焼酎</li>
                <li>洋酒</li>
                <li>ワイン</li>
                <li>チューハイ</li>
                <li>ノンアルコール</li>
            </ul>
            
            <h4><i data-lucide="x"></i>【割引対象外商品】</h4>
            <ul class="discount-list">
                <li>ビール</li>
                <li>発泡酒</li>
                <li>第3のビール</li>
                <li>トップバリュベストプライス甲類焼酎20度4ℓ</li>
                <li>合同清酒ビックマン20度4ℓ</li>
                <li>札幌清酒サッポロソフト4ℓ</li>
                <li>宝酒造大自然4ℓ</li>
                <li>アサヒビール大五郎4ℓ</li>
                <li>酒ギフト</li>
            </ul>
        </div>
        
        <div class="age-restriction">
            <i data-lucide="alert-triangle"></i>
            20歳未満の方への酒類の販売は法律で禁止されています。
        </div>
    `;
    lucide.createIcons();
}


function displayWineInfo() {
    const wineInfo = document.getElementById('wine-info');
    wineInfo.innerHTML = `
        <div class="info-section">
            <h3><i data-lucide="wine"></i>【ワインの基礎知識】</h3>
            <p>ワインは、ブドウを発酵させて作られるアルコール飲料です。主に以下の種類があります：</p>
            
            <h4><i data-lucide="droplets"></i>【主な種類】</h4>
            <ul>
                <li><strong>赤ワイン：</strong>黒ブドウの果皮や種子と共に発酵させて作られます。</li>
                <li><strong>白ワイン：</strong>主に白ブドウから作られますが、黒ブドウからも作ることができます。</li>
                <li><strong>ロゼワイン：</strong>赤ワインの製法で、果皮との接触時間を短くして作られます。</li>
                <li><strong>スパークリングワイン：</strong>二次発酵により炭酸ガスを含んだワインです。</li>
            </ul>

            <h4><i data-lucide="gauge"></i>【味わいについて】</h4>
            <div class="taste-section">
                <h5>甘さのレベル</h5>
                <ul>
                    <li><strong>甘口：</strong>糖分が多く、甘みをしっかりと感じるワイン</li>
                    <li><strong>やや甘口：</strong>程よい甘みを感じるワイン</li>
                    <li><strong>中口：</strong>甘みと酸味のバランスが取れたワイン</li>
                    <li><strong>やや辛口：</strong>やや糖分が少なく、すっきりとした味わいのワイン</li>
                    <li><strong>辛口：</strong>糖分が少なく、キリッとした味わいのワイン</li>
                </ul>

                <h5>ボディ（味わいの強さ）</h5>
                <ul>
                    <li><strong>ライトボディ：</strong>さっぱりとした軽い味わい。飲み始めに最適</li>
                    <li><strong>ミディアムボディ：</strong>程よい重さと深みのある味わい。最も汎用性が高い</li>
                    <li><strong>フルボディ：</strong>濃厚で力強い味わい。しっかりとした料理と相性が良い</li>
                </ul>
            </div>

            <h4><i data-lucide="thermometer"></i>【適切な飲用温度】</h4>
            <ul>
                <li><strong>赤ワイン：</strong>16-18℃</li>
                <li><strong>白ワイン：</strong>8-10℃</li>
                <li><strong>スパークリングワイン：</strong>6-8℃</li>
            </ul>

            <h4><i data-lucide="utensils"></i>【料理との相性】</h4>
            <ul>
                <li><strong>赤ワイン：</strong>肉料理、濃い味の料理</li>
                <li><strong>白ワイン：</strong>魚料理、さっぱりした料理</li>
                <li><strong>ロゼワイン：</strong>幅広い料理に合わせやすい</li>
                <li><strong>スパークリングワイン：</strong>前菜、アペリティフとして</li>
            </ul>

            <h4><i data-lucide="wine"></i>【ボージョレ・ヌーボーについて】</h4>
            <p>ボージョレ・ヌーボーは、フランスのボージョレ地方で生産される新酒ワインです。毎年11月の第3木曜日に解禁されます。</p>
            
            <h5><i data-lucide="sparkles"></i>特徴</h5>
            <ul>
                <li>フルーティーな香りと軽やかな味わい</li>
                <li>短期間で醸造され、通常2-3週間で完成</li>
                <li>ガメイ種のブドウを使用</li>
                <li>若々しく鮮やかな紫色が特徴的</li>
                <li>冷やして飲むのがおすすめ（10-13℃）</li>
            </ul>
            
            <h5><i data-lucide="history"></i>歴史</h5>
            <ul>
                <li>1951年にフランスで新酒の販売解禁日が制定</li>
                <li>1970年代から国際的なマーケティングキャンペーンが展開</li>
                <li>1980年代に日本で人気が高まる</li>
            </ul>
        </div>
    `;
    lucide.createIcons();
}





// ワインの検索結果表示
function displayWineResults(wines) {
    const resultsContainer = document.getElementById('wine-results');
    
    if (wines.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">該当するワインが見つかりませんでした。</p>';
        return;
    }

    resultsContainer.innerHTML = wines.map(wine => `
        <div class="wine-card">
            ${wine.imageUrl ? `<img src="${wine.imageUrl}" alt="${wine.name}" loading="lazy">` : ''}
            <h3>${wine.name}</h3>
            <p><strong>タイプ:</strong> ${wine.type || '不明'}</p>
            <p><strong>産地:</strong> ${wine.origin || '不明'}</p>
            <p><strong>味わい:</strong> ${wine.taste || '不明'}</p>
            <p><strong>価格:</strong> ${wine.price ? `${wine.price.toLocaleString()}円` : '価格未定'}</p>
            <p><strong>JANコード:</strong> ${wine.janCode || '不明'}</p>
            ${wine.salesPoint ? `<p><strong>特徴:</strong> ${wine.salesPoint}</p>` : ''}
        </div>
    `).join('');
}

// ワインのフィルタリング
function filterWines() {
    // 選択された値を取得
    const type = document.getElementById('wine-type').value;
    const origin = document.getElementById('wine-origin').value;
    const taste = document.getElementById('wine-taste').value;
    const price = document.getElementById('wine-price').value;

    // デバッグ用のログ
    console.log('フィルター条件:', { type, origin, taste, price });

    const filteredWines = wineList.filter(wine => {
        // タイプのマッチング
        const typeMatch = !type || 
            wine.type === type || 
            (wine.type === 'red' && type === '赤ワイン') ||
            (wine.type === '赤' && type === '赤ワイン') ||
            (wine.type === 'white' && type === '白ワイン') ||
            (wine.type === '白' && type === '白ワイン') ||
            (wine.type === 'rose' && type === 'ロゼワイン') ||
            (wine.type === 'ロゼ' && type === 'ロゼワイン') ||
            (wine.type === 'sparkling' && type === 'スパークリングワイン') ||
            (wine.type === 'スパークリング' && type === 'スパークリングワイン') ||
            (typeof wine.type === 'string' && wine.type.includes(type));

        // 産地のマッチング
        const originMatch = !origin || wine.origin === origin;

        // 味わいのマッチング（甘さとボディタイプの両方に対応）
        const tasteMatch = !taste ||
            wine.taste === taste ||
            (typeof wine.taste === 'string' && (
                wine.taste.includes(taste) ||
                // 甘さの一致確認
                (taste === '甘口' && wine.taste.includes('甘口')) ||
                (taste === 'やや甘口' && wine.taste.includes('やや甘口')) ||
                (taste === '中口' && wine.taste.includes('中口')) ||
                (taste === 'やや辛口' && wine.taste.includes('やや辛口')) ||
                (taste === '辛口' && wine.taste.includes('辛口')) ||
                // ボディタイプの一致確認
                (taste === 'ライトボディ' && wine.taste.includes('ライトボディ')) ||
                (taste === 'ミディアムボディ' && wine.taste.includes('ミディアムボディ')) ||
                (taste === 'フルボディ' && wine.taste.includes('フルボディ'))
            ));

        // 価格のマッチング
        const priceMatch = !price || wine.price <= parseInt(price);

        // デバッグ用のログ（特定のワインで条件が合わない場合）
        if (!typeMatch || !originMatch || !tasteMatch || !priceMatch) {
            console.log('フィルター外のワイン:', wine.name, {
                typeMatch,
                originMatch,
                tasteMatch,
                priceMatch
            });
        }

        return typeMatch && originMatch && tasteMatch && priceMatch;
    });

    // 検索結果の数をログに表示
    console.log('検索結果数:', filteredWines.length);

    // 結果を表示
    displayWineResults(filteredWines);
}

// チューハイのフィルター初期化
function initializeChuhaiFilters() {
    const makerSelect = document.getElementById('maker');
    const sceneSelect = document.getElementById('scene');

    // メーカーの選択肢を設定
    const makers = [...new Set(chuhaiList.map(chuhai => chuhai.maker))].sort();
    makerSelect.innerHTML = '<option value="">全てのメーカー</option>' + 
        makers.map(maker => `<option value="${maker}">${maker}</option>`).join('');

    // シーンの選択肢を設定
    const scenes = Object.keys(chuhaiScenes);
    sceneSelect.innerHTML = '<option value="">全てのシーン</option>' + 
        scenes.map(scene => `<option value="${scene}">${scene}</option>`).join('');

    // 度数スライダーの初期値を設定
    updateAlcoholLabel('minAlcohol');
    updateAlcoholLabel('maxAlcohol');
}

// チューハイの検索結果表示
function displayChuhaiResults(results) {
    const resultCount = document.getElementById('resultCount');
    const chuhaiListElement = document.getElementById('chuhaiList');
    
    resultCount.textContent = results.length;
    
    if (results.length === 0) {
        chuhaiListElement.innerHTML = '<p class="no-results">該当する商品が見つかりませんでした。</p>';
        return;
    }

    chuhaiListElement.innerHTML = results.map(chuhai => `
        <div class="chuhai-card">
            ${chuhai.imageUrl ? `<img src="${chuhai.imageUrl}" alt="${chuhai.name}" loading="lazy">` : ''}
            <h3>${chuhai.name}</h3>
            <p><strong>メーカー:</strong> ${chuhai.maker}</p>
            <p><strong>アルコール度数:</strong> ${chuhai.alcohol}%</p>
            <p><strong>容量:</strong> ${chuhai.volume}</p>
            <p><strong>糖分:</strong> ${chuhai.sugarContent}</p>
            <p><strong>説明:</strong> ${chuhai.description}</p>
            <p><strong>おすすめシーン:</strong> ${chuhai.scene.join(', ')}</p>
            <p><strong>JANコード:</strong> ${chuhai.janCode}</p>
        </div>
    `).join('');
}

// チューハイのフィルタリング
function filterChuhai() {
    const maker = document.getElementById('maker').value;
    const sugarContent = document.getElementById('sugarContent').value;
    const minAlcohol = parseInt(document.getElementById('minAlcohol').value);
    const maxAlcohol = parseInt(document.getElementById('maxAlcohol').value);
    const scene = document.getElementById('scene').value;
    const searchTerm = document.getElementById('searchTerm').value.toLowerCase();

    const filteredChuhai = chuhaiList.filter(chuhai => {
        const matchMaker = !maker || chuhai.maker === maker;
        const matchSugar = !sugarContent || chuhai.sugarContent === sugarContent;
        const matchAlcohol = chuhai.alcohol >= minAlcohol && chuhai.alcohol <= maxAlcohol;
        const matchScene = !scene || (chuhai.scene && chuhai.scene.includes(scene));
        const matchSearch = !searchTerm || 
            chuhai.name.toLowerCase().includes(searchTerm) || 
            (chuhai.description && chuhai.description.toLowerCase().includes(searchTerm));

        return matchMaker && matchSugar && matchAlcohol && matchScene && matchSearch;
    });

    sortChuhai(filteredChuhai);
}

function sortChuhai(list) {
    const sortBy = document.getElementById('sortBy').value;
    const sortOrder = document.getElementById('sortOrder').innerHTML.includes('fa-sort-amount-down') ? 'asc' : 'desc';
    
    list.sort((a, b) => {
        let compareA = a[sortBy];
        let compareB = b[sortBy];
        
        if (typeof compareA === 'string') {
            compareA = compareA.toLowerCase();
            compareB = compareB.toLowerCase();
        }
        
        if (compareA < compareB) return sortOrder === 'asc' ? -1 : 1;
        if (compareA > compareB) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    });
    
    displayChuhaiResults(list);
}

function displayChuhaiResults(results) {
    const resultCount = document.getElementById('resultCount');
    const chuhaiListElement = document.getElementById('chuhaiList');
    
    resultCount.textContent = results.length;
    
    if (results.length === 0) {
        chuhaiListElement.innerHTML = '<p class="no-results">該当する商品が見つかりませんでした。</p>';
        return;
    }

    chuhaiListElement.innerHTML = results.map(chuhai => `
        <div class="chuhai-card" data-jan="${chuhai.janCode}">
            ${chuhai.imageUrl ? `<img src="${chuhai.imageUrl}" alt="${chuhai.name}" loading="lazy">` : ''}
            <h3>${chuhai.name}</h3>
            <p><strong>メーカー:</strong> ${chuhai.maker}</p>
            <p><strong>アルコール度数:</strong> ${chuhai.alcohol}%</p>
            <p><strong>容量:</strong> ${chuhai.volume}</p>
            <p><strong>糖分:</strong> ${chuhai.sugarContent}</p>
            <p><strong>おすすめシーン:</strong> ${chuhai.scene.join(', ')}</p>
            <p><strong>説明:</strong> ${chuhai.description}</p>
　　　　　　 <p><strong>JANコード:</strong> ${chuhai.janCode}</p>
        </div>
    `).join('');
}

function displaySceneExplanations() {
    const sceneExplanationsElement = document.getElementById('sceneExplanations');
    sceneExplanationsElement.innerHTML = `
        <div class="info-section">
            <h3><i data-lucide="list"></i>【おすすめシーン説明】</h3>
            ${Object.entries(chuhaiScenes).map(([scene, info]) => `
                <div class="scene-explanation">
                    <h4><i data-lucide="check"></i>【${scene}】</h4>
                    <p>${info.description}</p>
                    <ul>
                        ${info.characteristics.map(char => `<li>${char}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `;
    lucide.createIcons();
}

function resetChuhaiFilters() {
    document.getElementById('maker').value = '';
    document.getElementById('sugarContent').value = '';
    document.getElementById('minAlcohol').value = 3;
    document.getElementById('maxAlcohol').value = 9;
    document.getElementById('scene').value = '';
    document.getElementById('searchTerm').value = '';
    updateAlcoholLabel('minAlcohol');
    updateAlcoholLabel('maxAlcohol');
    filterChuhai();
}

function updateAlcoholLabel(id) {
    const value = document.getElementById(id).value;
    document.getElementById(id + 'Value').textContent = value;
}


function displayBeerInfo() {
    const beerInfoElement = document.getElementById('beer-info');
    let html = `
        <div class="info-section">
            <h3><i data-lucide="beer"></i>【ビールの基礎知識】</h3>
            
            <h4><i data-lucide="wine"></i>【ビールの種類と特徴比較】</h4>
            <div class="comparison-table">
                <table>
                    <tr>
                        <th>種類</th>
                        <th>原料</th>
                        <th>味わい</th>
                        <th>香り</th>
                        <th>ボディ</th>
                        <th>後味</th>
                        <th>代表的な銘柄</th>
                    </tr>
                    ${beerInfo.taste_differences.categories.map(cat => `
                        <tr>
                            <td><strong>${cat.name}</strong></td>
                            <td>${cat.ingredients}</td>
                            <td>${cat.taste}</td>
                            <td>${cat.aroma}</td>
                            <td>${cat.body}</td>
                            <td>${cat.aftertaste}</td>
                            <td>${cat.examples.join('<br>')}</td>
                        </tr>
                    `).join('')}
                </table>
            </div>

            <h4><i data-lucide="info"></i>【味わいの違いのポイント】</h4>
            <ul>
                ${beerInfo.taste_differences.keys_to_differences.map(key => `
                    <li>${key}</li>
                `).join('')}
            </ul>

            <h4><i data-lucide="layers"></i>【税率による違い】</h4>
            <div class="comparison-table">
                <table>
                    <tr>
                        <th>種類</th>
                        <th>定義</th>
                        <th>税率</th>
                    </tr>
                    ${beerInfo.differences.map(diff => `
                        <tr>
                            <td><strong>${diff.name}</strong></td>
                            <td>${diff.description}</td>
                            <td>${diff.tax}</td>
                        </tr>
                    `).join('')}
                </table>
            </div>

            <h4><i data-lucide="beer"></i>【クラフトビール】</h4>
            <p>${beerInfo.craftBeer.description}</p>
            <ul>
                ${beerInfo.craftBeer.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <p><strong>代表的な銘柄:</strong> ${beerInfo.craftBeer.examples.join(', ')}</p>

            <h4><i data-lucide="info"></i>【IPAについて】</h4>
            <p>${beerInfo.ipaInfo.description}</p>
            <p><strong>歴史:</strong> ${beerInfo.ipaInfo.history}</p>
            <p><strong>特徴:</strong></p>
            <ul>
                ${beerInfo.ipaInfo.characteristics.map(char => `<li>${char}</li>`).join('')}
            </ul>

            <h4><i data-lucide="settings"></i>【スピナー】</h4>
            <p>${beerInfo.spinner.description}</p>
            <p>${beerInfo.spinner.function}</p>
            <ul>
                ${beerInfo.spinner.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
        </div>
    `;
    beerInfoElement.innerHTML = html;
    lucide.createIcons();
}

// 日本酒情報表示
function displaySakeInfo() {
    const container = document.getElementById('sake-info');
    let html = `
        <div class="info-section">
            <h3><i data-lucide="glass-water"></i>【日本酒について】</h3>
            <p>${sakeInfo.description}</p>

            <h4><i data-lucide="list"></i>【日本酒の種類】</h4>
            <ul>
                ${sakeInfo.types.map(type => `
                    <li>
                        <strong>${type.name}:</strong> ${type.description}
                        <br>代表的な銘柄: ${type.examples.join(', ')}
                    </li>
                `).join('')}
            </ul>

            <h4><i data-lucide="droplets"></i>【味わいの特徴】</h4>
            <ul>
                ${sakeInfo.tastes.map(taste => `
                    <li><strong>${taste.name}:</strong> ${taste.description}</li>
                `).join('')}
            </ul>

            <h4><i data-lucide="map-pin"></i>【北海道の地酒】</h4>
            <ul>
                ${sakeInfo.hokkaido_sake.map(sake => `
                    <li>
                        <strong>${sake.name}</strong> (${sake.brewery}, ${sake.location})
                        <br>${sake.feature}
                    </li>
                `).join('')}
            </ul>

            <h4><i data-lucide="gift"></i>【贈り物におすすめ】</h4>
            ${sakeInfo.gift_recommendations.map(rec => `
                <div class="gift-section">
                    <h5><i data-lucide="tag"></i>【${rec.occasion}】</h5>
                    <ul>
                        ${rec.recommendations.map(sake => `<li>${sake}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}

            <h4><i data-lucide="thermometer"></i>【温度による楽しみ方】</h4>
            <ul>
                ${sakeInfo.serving_temperature.map(temp => `
                    <li><strong>${temp.type}:</strong> ${temp.description}</li>
                `).join('')}
            </ul>
        </div>
    `;
    container.innerHTML = html;
    lucide.createIcons();
}

// 焼酎情報表示
function displayShochuInfo() {
    const container = document.getElementById('shochu-info');
    let html = `
        <div class="info-section">
            <h3><i data-lucide="wine"></i>【焼酎について】</h3>
            
            <h4><i data-lucide="git-compare"></i>【甲類焼酎と乙類焼酎の違い】</h4>
            <div class="comparison-table">
                <table>
                    <tr>
                        <th>比較項目</th>
                        <th>甲類焼酎</th>
                        <th>乙類焼酎</th>
                    </tr>
                    ${shochuInfo.comparison.details.map(detail => `
                        <tr>
                            <td>${detail.aspect}</td>
                            <td>${detail.koushu}</td>
                            <td>${detail.otsushu}</td>
                        </tr>
                    `).join('')}
                </table>
            </div>

            <h4><i data-lucide="list"></i>【焼酎の種類】</h4>
            <ul>
                ${shochuInfo.types.map(type => `
                    <li>
                        <strong>${type.name}:</strong> ${type.description}
                        ${type.representative ? `<br>代表銘柄: ${type.representative}` : ''}
                        <br>特徴: ${type.features}
                    </li>
                `).join('')}
            </ul>

            <h4><i data-lucide="flask"></i>【蒸留方法】</h4>
            <ul>
                ${shochuInfo.distillationMethods.map(method => `
                    <li><strong>${method.name}:</strong> ${method.description}</li>
                `).join('')}
            </ul>
        </div>
    `;
    container.innerHTML = html;
    lucide.createIcons();
}

// ウイスキー情報表示
function displayWhiskyInfo() {
    const container = document.getElementById('whisky-info');
    let html = `
        <div class="info-section">
            <h3><i data-lucide="wine"></i>【ウイスキーについて】</h3>

            <h4><i data-lucide="list"></i>【種類】</h4>
            <ul>
                ${whiskyInfo.types.map(type => `
                    <li>
                        <strong>${type.name}:</strong> ${type.description}
                        <br>代表銘柄: ${type.representative}
                        <br>特徴: ${type.features}
                    </li>
                `).join('')}
            </ul>

            <h4><i data-lucide="map"></i>【主な生産地域】</h4>
            <ul>
                ${whiskyInfo.regions.map(region => `
                    <li>
                        <strong>${region.name}:</strong> ${region.description}
                        <br>代表銘柄: ${region.representative}
                        <br>特徴: ${region.features}
                    </li>
                `).join('')}
            </ul>

            <h4><i data-lucide="trophy"></i>【希少・高額ウイスキー】</h4>
            <ul>
                ${whiskyInfo.rareAndExpensive.map(whisky => `
                    <li>
                        <strong>${whisky.name}:</strong> ${whisky.description}
                        <br>特徴: ${whisky.features}
                    </li>
                `).join('')}
            </ul>

            <h4><i data-lucide="flag"></i>【日本のウイスキー】</h4>
            <ul>
                ${whiskyInfo.japaneseWhiskies.map(whisky => `
                    <li>
                        <strong>${whisky.name}:</strong> ${whisky.description}
                        <br>特徴: ${whisky.features}
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    container.innerHTML = html;
    lucide.createIcons();
}

// モーダル関連機能
function showModal(content) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = content;
    modal.style.display = 'block';
}

// イベントリスナーの設定
document.addEventListener('DOMContentLoaded', () => {
    // ナビゲーションのイベントリスナー
    document.querySelectorAll('#top-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showScreen(e.target.closest('a').dataset.screen);
        });
    });

    // ワイン検索のイベントリスナー
    document.getElementById('wine-search')?.addEventListener('click', filterWines);

    // チューハイ関連のイベントリスナー
    document.getElementById('maker')?.addEventListener('change', filterChuhai);
    document.getElementById('sugarContent')?.addEventListener('change', filterChuhai);
    document.getElementById('minAlcohol')?.addEventListener('input', () => {
        updateAlcoholLabel('minAlcohol');
        filterChuhai();
    });
    document.getElementById('maxAlcohol')?.addEventListener('input', () => {
        updateAlcoholLabel('maxAlcohol');
        filterChuhai();
    });
    document.getElementById('scene')?.addEventListener('change', filterChuhai);
    document.getElementById('searchTerm')?.addEventListener('input', filterChuhai);
    document.getElementById('sortBy')?.addEventListener('change', () => filterChuhai());
    document.getElementById('sortOrder')?.addEventListener('click', (e) => {
        const button = e.currentTarget;
        button.innerHTML = button.innerHTML.includes('fa-sort-amount-down') ? 
            '<i class="fas fa-sort-amount-up"></i>' : 
            '<i class="fas fa-sort-amount-down"></i>';
        filterChuhai();
    });
    document.getElementById('chuhai-reset')?.addEventListener('click', resetChuhaiFilters);

    // モーダル関連のイベントリスナー
    document.querySelector('.close')?.addEventListener('click', () => {
        document.getElementById('modal').style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        const modal = document.getElementById('modal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // アプリケーションの初期化
    showScreen('home-screen');
});
