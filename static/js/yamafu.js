$(function() {
    $.ajax({
        url: 'https://sheets.googleapis.com/v4/spreadsheets/1vooqy1vAwnHPh1YJhuFD1KFgnHgIoQ5NxetgEzXKM6A/values/sheet1!A1:C1000?key=AIzaSyC3dkZFCxflbfVri6mix_pDm6xdZ6WgePw',  // 取得したいURLを指定
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            for (var i in data.values){
                 trtxt = '<tr id="tr' + i + '"></tr>';
                 $("#tb").append(trtxt);
                 for (var j in data.values[i]){
                     tdtxt = '<td>' + data.values[i][j] + '</td>'
                     $("#tr"+i).append(tdtxt);
                 }
            }
        }
    });
}); 
