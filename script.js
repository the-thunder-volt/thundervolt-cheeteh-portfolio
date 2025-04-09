const lines = [
    "Hey, Nice to see you here!",
    "You can find more about me just visit the links all over."
  ];
  
  const container = document.getElementById("typewriter");
  container.innerHTML = '';
  
  let lineIndex = 0;
  
  function typeLine() {
    if (lineIndex >= lines.length) return;
  
    const lineText = lines[lineIndex];
    const div = document.createElement("div");
    div.className = "line";
    container.appendChild(div);
  
    let charIndex = 0;
  
    const interval = setInterval(() => {
      if (charIndex < lineText.length) {
        div.textContent += lineText[charIndex++];
      } else {
        clearInterval(interval);
        lineIndex++;
        setTimeout(typeLine, 600); // Delay before next line
      }
    }, 60);
  }
  
  typeLine();
