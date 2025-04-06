---
marp: true
theme: gaia

# header: Meisei Gakuen 100th Anniversary Special Exhibition
paginate: true
---
<!-- _class: lead -->
# M5 SETUP
## M5Burner & UIFLOW　

<!-- <br><br>　Meisei University : 菊池康太 -->
<br><br>　チームアクティビティ1：尼岡、末田、菊池

---
## M5Stackとは？

M5Stackは、ESP32マイコンをベースにしたモジュール型の開発ボードシリーズ。豊富な拡張モジュールやセンサー、ディスプレイを備えており、IoT（モノのインターネット）やプロトタイピング、教育用途での使用に適している。
<br>
<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="https://m.media-amazon.com/images/I/31x4Vcji19L._AC_.jpg" width="300">
  <img src="https://m.media-amazon.com/images/I/51G7UxtQJsL._AC_SX679_.jpg" width="300">
</div>

---
<!-- _class: lead -->
## M5Stackについて
- [M5Stack.com](https://m5stack.com/)
- [スイッチサイエンス販売ページ](https://www.switch-science.com/collections/m5stack?srsltid=AfmBOooUjIbsVLsu62agBUNxnz8ot4U8gpIagYlklyNLzaXwNQYYhJac)
- [ProtoPedia:Creativity Contest 2024](https://protopedia.net/event/m5stack2024)

---
<!-- _class: lead -->
M5Stackで開発するには

UI FLOW
Arduino IDE
Platforme IO

などの方法がある。今回はUIFLOW(1.0)を使用する

---
## [UIFLOW](https://flow.m5stack.com/)

- ビジュアルPGで処理がブロックとしてすでに用意されている
- ブラウザ上で開発可能
- ネットワーク経由でプログラムを実行可能

<img src="img/ss_img 2025-04-04 18.37.26.png" width="600">

---
<!-- _class: lead -->
# M5Burner
# 開発前にファームウェア書き換え

---
# M5Burner
UIFLOWを使うには、[M5Burner](https://docs.m5stack.com/en/download)でファームウェアの書き換えが必要

<br>
<img src="img/ss_img 2025-04-04 18.48.50.png" width="1000">

PCに合わせてアプリケーションをダウンロードする

---

Macならdmgを開いてApplicationsフォルダへアプリを移動
WindowsならZipをC:\Program Filesへ展開する

Windowsの場合セキュリティダイアログが表示されるが、「詳細情報」をクリックし、「実行」をクリック

<img src="img/ss_img 2025-04-04 19.33.34.png" width="600">
起動画面

---

使用するM5Stackの機種に合わせてファームウェアをDownloadする。今回はM5Stack Basicを使用するので、UIFLOW(CORE)をダウンロードする
<img src="img/ss_img 2025-04-04 19.36.25.png" width="1000">

---
### ファームウェア書き込み設定
M5をPCに接続し「Brun」を押す。COMにM5らしきportがあれば選択し、「NEXT」Wi-FiのSSIDとPASSを入力し、「NEXT」でファームウェアを書き込める。書き込み後「Brun Successfully」を押して完了。
<img src="img/ss_img 2025-04-04 19.52.08.png" width="800">

---
portにM5が出現しない場合は、M5のサイトから[usbドライバー：CH9102](https://docs.m5stack.com/en/download#:~:text=USB%20Driver%20%26%20Open%20source%20Library)を追加する必要がある。
<br>
<img src="img/ss_img 2025-04-04 19.58.50.png" width="1000">

---
「Configure」をクリックし、M5のCOM portを選択し、「load」をクリック。ここで下記の様にM5の設定を変更し「Save」する。

<img src="img/ss_img 2025-04-04 20.09.05.png" width="750">




---
<!-- _class: lead -->
# UIFLOW
# ネットワーク経由でプログラム実行

---
UIFLOWの画面左下の「APIキー」をクリック。
M5Stackの画面に表示されているAPIを入力し「OK」
<font color="red">切断中</font>が<font color="Green">接続済み</font>になればOK

<div style="display: flex; justify-content: center; gap: 10px;">
<img src="img/ss_img 2025-04-05 16.14.02.png" width="550">
<img src="img/ss_img 2025-04-04 20.07.17.png" width="550"> 
</div>

---

試しにプログラム作って実行してみる。
メニューから使いたい機能のブロックを画面中央にドラックする。
<img src="img/ss_img 2025-04-05 16.36.36.png" width="800"> 

---
次のプログラムを作って、「Run」を押してみよう
<img src="img/ss_img 2025-04-05 16.36.12.png" width="670"> 

---

「ダウンロード」を押すと接続が切れてしまうので、再度M5Burnerで[p10](###ファームウェア書き込み設定)の設定をやり直す必要がある。

---
### Labelを使ってテキストを表示する
左端の「Label」をM5の画面に表示したい位置にドラッグする。
<img src="img/ss_img 2025-04-05 16.59.37.png" width="900">

---
UIにラベルが追加され、数値やテキストを表示できる。
デバックのときには、"print()"としても使える。
<div style="display: flex; justify-content: center; gap: 10px;">
<img src="img/ss_img 2025-04-05 16.57.38.png" width="600">
<img src="img/ss_img 2025-04-05 17.58.44.png" width="600">
</div>

---

次のプログラムを作って、実行してみよう。
A、BボタンでM5の画面の数値が変化すればOK。
<img src="img/ss_img 2025-04-06 0.14.56.png" width="680">

---
<!-- _class: lead -->
他にもさまざまな機能が用意されています。
終わった人は、好きにプログラムを組んでみましょう！