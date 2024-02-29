const pageTitle = [];
const pageSbTitle = [];
const pageFile = [];
const pageImage = [];
const pageDate = [];
const pageCategory = [];

addData("/works/0/", "/works/0/0.jpg", "", "1", "スピーカー", "Blenderで作ったスピーカーです。")
addData("/works/1/", "/works/1/0.jpg", "", "1", "家電", "Blenderで作った家電です。")
addData("/works/2/", "/works/2/0.jpg", "", "0", "3Dシューティングゲーム", "敵の弾をよけながら攻撃する3Dのシューティングゲームです。")
addData("/works/3/", "/works/3/0.jpg", "", "0", "月への旅", "サターンVロケットを操縦して月まで行くゲームです。")
addData("/works/4/", "/works/4/0.jpg", "", "0", "迷路自動作成ツール", "迷路を自動で作成してくれるツールです。")
addData("/works/5/", "/works/5/0.jpg", "", "0", "天体望遠鏡（てんたいぼうえんきょう）", "天体望遠鏡で夜空の月や惑星を観察するゲームです。")
addData("/works/6/", "/works/6/0.jpg", "", "0", "3D紅葉 Japanese maples", "紅葉の葉が落ちていく様子を色々な角度から鑑賞できます。")
addData("/works/7/", "/works/7/0.jpg", "", "0", "バーチャル旅行 Virtual Travel", "家の中でも旅行に行ったような気分になれるゲームです。")
addData("/works/8/", "/works/8/0.jpg", "", "0", "移動・回転が可能な3D", "3Dのオブジェクトを位置・角度を変えて見ることができます。")
addData("/works/9/", "/works/9/0.jpg", "", "0", "田舎の夏", "田舎の夏の風景をイメージして作りました。")
addData("/works/10/", "/works/10/0.jpg", "", "2", "2Dプラットフォーマー", "矢印キーでプレイヤーを操作してゴールへ行くゲームです。")
addData("/works/11/", "/works/11/0.jpg", "", "2", "3Dプラットフォーマー", "3Dのプレイヤーを操作してゴールへ行くゲームです。")
addData("/works/12/", "/works/12/0.jpg", "", "0", "2人用すごろく2", "自分ですごろくのマスを作ってプレイできるゲームです。")
addData("/works/13/", "/works/13/0.jpg", "", "0", "10人以上接続できるオンライン", "10人以上のプレイヤーとオンラインで遊べるゲームです。")
addData("/works/14/", "/works/14/0.jpg", "", "1", "家電 2", "Blenderで作業部屋とリビングを作りました。")
addData("/works/15/", "/works/15/0.jpg", "", "0", "ホタル鑑賞", "自分で好きな方向に進んでホタルの動きや点滅を鑑賞することができます。")
addData("/works/16/", "/works/16/0.jpg", "", "0", "波紋", "雨が降ったときに池の水面にできる波紋を表現しました。")
// addData("/explanation/0/", "/explanation/0/0.png", "", "3", "三角関数について", "三角関数の他の視点での捉え方について解説します。")
addData("/works/17/", "/works/17/0.jpg", "2024/1/21", "0", "Christmas", "SCRATCHでクリスマスの作品を作りました。")
addData("/works/18/", "/works/18/0.jpg", "2024/1/23", "1", "エレベーター", "リアルさにこだわったエレベーターです。")
addData("/works/19/", "/works/19/0.jpg", "2024/1/23", "1", "Apple iPhone 15 Pro", "BlenderでAppleのiPhone 15 Proを作りました。")
addData("/article/1/", "/files/icons/pages.png", "2024/1/23", "4", "弟とホームページを作っています", "弟にホームページの作り方を教えています。")

function addData (file, image, date, category, title, subTitle) {
    pageTitle.push(title);
    pageSbTitle.push(subTitle);
    pageFile.push(file);
    pageImage.push(image);
    pageDate.push(date);
    pageCategory.push(category)
}