

# Chrome Extension: GPT-Based Phishing Message Detector

## What is this?

A Google Chrome extension that allows users to:

* Select suspicious text on websites (e.g., Gmail, Facebook)
* Right-click > “Check if this is a phishing message”
* Instantly receive a GPT-based analysis in Hebrew, including:

  * Is it phishing? (Yes/No)
  * Brief explanation
  * Risk level

## Who is it for?

* Private users concerned about email and SMS scams
* Trainers and lecturers in cybersecurity courses
* Institutions aiming to protect employees or students

## How to install

1. Download the extension’s folder (not a ZIP file)
2. Open Chrome and go to `chrome://extensions`
3. Enable "Developer Mode"
4. Click “Load unpacked” and select the extension folder

## How to use

1. Select suspicious text on any website
2. Right-click > “Check if this is a phishing message”
3. Wait a few seconds
4. A popup will show the analysis result

![Extension usage demo](screenshot.png)

## How it works

* The extension sends the selected text to an API running a GPT-4o model
* The model analyzes the message and returns a response in Hebrew
* The result is displayed in a styled popup window

## Credits

* Developed by: Aviram Cohen
* GPT integration: OpenAI API
* Cloud platform: Render

---

> Future versions will include: user management interface, improved design, multi-user support, and more.

Good luck!

---

