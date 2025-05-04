chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "checkForPhishing",
    title: "בדוק אם זה הודעת פישינג",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "checkForPhishing") {
    console.log("שלב 1: נלחץ פריט התפריט");
    
    const selectedText = info.selectionText;
    console.log("שלב 2: טקסט מסומן:", selectedText);

    try {
      const response = await fetch("https://phishing-detector-backend-4q8c.onrender.com/check_phishing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: selectedText })
      });

      console.log("שלב 3: התקבלה תגובה מהשרת");

      const data = await response.json();
      console.log("שלב 4: תוכן התשובה:", data);

      chrome.storage.local.set({ lastResult: data.result });
      chrome.windows.create({
        url: "popup.html",
        type: "popup",
        width: 400,
        height: 300
      });

    } catch (error) {
      console.error("שגיאה בתקשורת עם השרת:", error);
      chrome.storage.local.set({ lastResult: "אירעה שגיאה בעת קבלת התוצאה." });
    }
  }
});
