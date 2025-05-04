document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("lastResult", (data) => {
    const resultElement = document.getElementById("result");
    const result = data.lastResult;

    if (result && typeof result === "string" && result.trim().length > 0) {
      resultElement.textContent = result;
    } else {
      resultElement.textContent = "⚠️ לא התקבלה תשובה. ייתכן שיש בעיית חיבור או שהשרת לא זמין כרגע.";
      resultElement.style.color = "#c0392b";
    }
  });
});
