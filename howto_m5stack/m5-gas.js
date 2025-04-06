function doPost(e) {
    console.log('catch post'); // POSTリクエストを受け取ったことをログに記録
    // スプレッドシートの特定のシートを取得
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('test-sheet');
  
    // POSTリクエストのデータをJSON形式で解析
    let params = JSON.parse(e.postData.getDataAsString());
    let id = params.id; // リクエストからリーダーIDを取得
    let data = params.data; // リクエストからタグ番号を取得
  
    // データをスプレッドシートに追加する処理
    let lock = LockService.getDocumentLock(); // 排他的処理のためのロックを取得
    if (lock.tryLock(5000)) { // 最大5秒間ロックを試行
      try {
        let datetime = new Date(); // 現在時刻を取得
        array = [[datetime, id, data]]; // 書き込むデータを2次元配列で準備
  
        sheet.insertRows(1, 1); // シートの1行目に新しい行を挿入
        sheet.getRange("A1:C1").setValues(array); // 1行目のA列からC列にデータを書き込む
        SpreadsheetApp.flush(); // スプレッドシートへの変更を即時反映
      } finally {
        lock.releaseLock(); // 処理が終わったらロックを解除
      }
    } else {
      console.log('ロックを取得できませんでした'); // ロックが取得できなかった場合のログ
    }
  }