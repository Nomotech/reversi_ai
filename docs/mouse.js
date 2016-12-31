var mouse_x;
var mouse_y;

// ------------------------------------------------------------
// マウスを移動するたびに実行されるイベント
// ------------------------------------------------------------
document.onmousemove = function (e){
	if(!e) e = window.event; // レガシー

	// クライアント座標系を基点としたマウスカーソルの座標を取得
	mouse_x = e.clientX;
	mouse_y = e.clientY;

	// 出力テスト
	//console.log("x:" + mouse_x);
	//console.log("y:" + mouse_y);

	//マウスが乗ってるreversiのマス目
	field_mouse();
};

document.onclick = function (e){
	if(!e) e = window.event; // レガシー
	field_click(focus_x,focus_y);
	//console.log("マウスがクリックされた");
};