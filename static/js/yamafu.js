const recordsBody = document.getElementById("tb");
const recordsStatus = document.getElementById("records-status");

if (recordsBody && recordsStatus) {
  const url = "https://sheets.googleapis.com/v4/spreadsheets/1vooqy1vAwnHPh1YJhuFD1KFgnHgIoQ5NxetgEzXKM6A/values/sheet1!A1:C1000?key=AIzaSyC3dkZFCxflbfVri6mix_pDm6xdZ6WgePw";
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("records unavailable");
      return response.json();
    })
    .then((data) => {
      const rows = Array.isArray(data.values) ? data.values : [];
      for (const row of rows) {
        const tr = document.createElement("tr");
        for (const value of row) {
          const td = document.createElement("td");
          td.textContent = value;
          tr.appendChild(td);
        }
        recordsBody.appendChild(tr);
      }
      if (rows.length === 0) recordsStatus.textContent = "表示できる記録はありません。";
    })
    .catch(() => {
      recordsStatus.textContent = "記録を読み込めませんでした。";
    });
}
