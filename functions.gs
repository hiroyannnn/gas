function iine() {
  var iconStartCol = 7  // アイコンを並べる最初の列。
  var headerRow = 1 // ヘッダー行の指定
  var sheet = SpreadsheetApp.getActiveSheet();
  
  var user = Session.getActiveUser().getEmail() // ユーザ取得
  var row = sheet.getActiveCell().getRow()
  // ヘッダ行を消さないための処理
  if(row <= headerRow){
    return;
  }
  var iconColValues = sheet.getRange(row, iconStartCol, 1, 100).getValues()[0] // カーソル行のアイコンの列の配列
  // いいね済みのときの処理（何もしない）
  if(iconColValues.indexOf(user) >= 0){
    return;
  }
  var col = iconStartCol + iconColValues.indexOf('') // 空になっている最初の列
  
  sheet.getRange(row, col).setValue(user)
}