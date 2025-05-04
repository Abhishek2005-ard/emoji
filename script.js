const emojiData = [
    { emoji: "😀", keywords: ["smile", "happy", "joy", "grin"] },
    { emoji: "❤️", keywords: ["heart", "love", "like"] },
    { emoji: "😂", keywords: ["laugh", "tear", "funny"] },
    { emoji: "🐱", keywords: ["cat", "pet", "animal"] },
    { emoji: "🎉", keywords: ["party", "celebrate", "fun"] },
    { emoji: "👍", keywords: ["thumbs", "up", "like", "approve"] },
    { emoji: "🌟", keywords: ["star", "shine", "favorite"] },
    { emoji: "😎", keywords: ["cool", "sunglasses", "chill"] },
    { emoji: "💡", keywords: ["idea", "light", "bulb"] },
    { emoji: "🚀", keywords: ["rocket", "launch", "space"] }
  ];
  
  const searchInput = document.getElementById("searchInput");
  const emojiResults = document.getElementById("emojiResults");
  const feedback = document.getElementById("feedback");
  
  function filterEmojis(keyword) {
    if (!keyword.trim()) return [];
    return emojiData.filter(e =>
      e.keywords.some(k => k.includes(keyword.toLowerCase()))
    );
  }
  
  function showEmojis(results) {
    emojiResults.innerHTML = "";
    feedback.textContent = "";
  
    if (results.length === 0) {
      emojiResults.innerHTML = "<p style='grid-column: 1 / -1; text-align: center;'>No results found.</p>";
      return;
    }
  
    results.forEach(e => {
      const div = document.createElement("div");
      div.className = "emoji-card";
      div.textContent = e.emoji;
      div.title = "Click to copy";
      div.addEventListener("click", () => {
        navigator.clipboard.writeText(e.emoji).then(() => {
          feedback.textContent = `Copied ${e.emoji} to clipboard!`;
          setTimeout(() => (feedback.textContent = ""), 1500);
        });
      });
      emojiResults.appendChild(div);
    });
  }
  
  searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value;
    const results = filterEmojis(keyword);
    showEmojis(results);
  });
  