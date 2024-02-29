const pageTitle = [];
const pageSbTitle = [];
const pageFile = [];
const pageImage = [];
const pageDate = [];
const pageCategory = [];

addData("/home/works/0/", "/home/works/0/0.jpg", "", "1", "スピーカー", "Blenderで作ったスピーカーです。")
addData("/home/works/1/", "/home/works/1/0.jpg", "", "1", "家電", "Blenderで作った家電です。")
addData("/home/works/2/", "/home/works/2/0.jpg", "", "0", "3Dシューティングゲーム", "敵の弾をよけながら攻撃する3Dのシューティングゲームです。")
addData("/home/works/3/", "/home/works/3/0.jpg", "", "0", "月への旅", "サターンVロケットを操縦して月まで行くゲームです。")
addData("/home/works/4/", "/home/works/4/0.jpg", "", "0", "迷路自動作成ツール", "迷路を自動で作成してくれるツールです。")
addData("/home/works/5/", "/home/works/5/0.jpg", "", "0", "天体望遠鏡（てんたいぼうえんきょう）", "天体望遠鏡で夜空の月や惑星を観察するゲームです。")
addData("/home/works/6/", "/home/works/6/0.jpg", "", "0", "3D紅葉 Japanese maples", "紅葉の葉が落ちていく様子を色々な角度から鑑賞できます。")
addData("/home/works/7/", "/home/works/7/0.jpg", "", "0", "バーチャル旅行 Virtual Travel", "家の中でも旅行に行ったような気分になれるゲームです。")
addData("/home/works/8/", "/home/works/8/0.jpg", "", "0", "移動・回転が可能な3D", "3Dのオブジェクトを位置・角度を変えて見ることができます。")
addData("/home/works/9/", "/home/works/9/0.jpg", "", "0", "田舎の夏", "田舎の夏の風景をイメージして作りました。")
addData("/home/works/10/", "/home/works/10/0.jpg", "", "2", "2Dプラットフォーマー", "矢印キーでプレイヤーを操作してゴールへ行くゲームです。")
addData("/home/works/11/", "/home/works/11/0.jpg", "", "2", "3Dプラットフォーマー", "3Dのプレイヤーを操作してゴールへ行くゲームです。")
addData("/home/works/12/", "/home/works/12/0.jpg", "", "0", "2人用すごろく2", "自分ですごろくのマスを作ってプレイできるゲームです。")
addData("/home/works/13/", "/home/works/13/0.jpg", "", "0", "10人以上接続できるオンライン", "10人以上のプレイヤーとオンラインで遊べるゲームです。")
addData("/home/works/14/", "/home/works/14/0.jpg", "", "1", "家電 2", "Blenderで作業部屋とリビングを作りました。")
addData("/home/works/15/", "/home/works/15/0.jpg", "", "0", "ホタル鑑賞", "自分で好きな方向に進んでホタルの動きや点滅を鑑賞することができます。")
addData("/home/works/16/", "/home/works/16/0.jpg", "", "0", "波紋", "雨が降ったときに池の水面にできる波紋を表現しました。")
// addData("/home/explanation/0/", "/home/explanation/0/0.png", "", "3", "三角関数について", "三角関数の他の視点での捉え方について解説します。")
addData("/home/works/17/", "/home/works/17/0.jpg", "2024/1/21", "0", "Christmas", "SCRATCHでクリスマスの作品を作りました。")
addData("/home/works/18/", "/home/works/18/0.jpg", "2024/1/23", "1", "エレベーター", "リアルさにこだわったエレベーターです。")
addData("/home/works/19/", "/home/works/19/0.jpg", "2024/1/23", "1", "Apple iPhone 15 Pro", "BlenderでAppleのiPhone 15 Proを作りました。")
addData("/home/article/1/", "/home/files/icons/pages.png", "2024/1/23", "4", "弟とホームページを作っています", "弟にホームページの作り方を教えています。")

function addData (file, image, date, category, title, subTitle) {
    pageTitle.push(title);
    pageSbTitle.push(subTitle);
    pageFile.push(file);
    pageImage.push(image);
    pageDate.push(date);
    pageCategory.push(category)
}