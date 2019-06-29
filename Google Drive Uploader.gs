/*
 * Google Drive Uploader (Google App Script)
 * 張睿玹版權所有
 * https://github.com/dwcoop/GoogleAppScript_Uploader/license.html
 * 文件: Google Drive Uploader.gs(前端)
 * 版本: V1.0.0
 * 日期: 2019-06-19T22:36Z
 */
function doGet(request){
	switch(request.parameter.type){
		case "auth":
			
			break;
		case "check":
			return HtmlService.createHtmlOutput(
				ScriptApp
					.getAuthorizationInfo(ScriptApp.AuthMode.FULL)
					.getAuthorizationStatus()
			);
	}
}
function doPost(request) {
  //var image = request.postData.getDataAsString();
  var image = request.parameter.image;
  var mime = request.parameter.type;
  var filename = request.parameter.name;
  var blob = Utilities.newBlob(
    Utilities.base64Decode(image),mime,filename
  );
  var url=DriveApp.createFile(blob).getDownloadUrl();
  return ContentService.createTextOutput(url.replace("&gd=true",""));
}