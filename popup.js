document.getElementById("toggleBtn").addEventListener("click",
     async() => {
        const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ["content-script.js"]
        });
        chrome.tabs.sendMessage(tab.id,{type: "toggle-dark-mode"});
})





























// async () => { ... }

// This is an arrow function marked as async.

// async keyword means the function can use await inside it to pause execution until a Promise resolves.
// EXAMPLE:

// async function example() {
//   const result = await someAsyncFunction();
//   console.log(result); // runs after Promise resolves
// }

// Without async, you cannot use await.