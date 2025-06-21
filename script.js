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
  // window.addEventListener("DOMContentLoaded", () => {
  //   setTimeout(() => {
  //     document.getElementById("sideDiv").classList.add("show");
  //   }, 1000);
  // });


// document.addEventListener("DOMContentLoaded", () => {
//     const aboutText = `Hey, Nice to see you here!
//     You can find more about me more just visit the links all over.`;
//     // const aboutText = "I’m a passionate web developer creating modern and responsive websites.";
//     const element = document.getElementById("typewriter");
  
//     let index = 0;
  
//     function type(){
//         if (index < aboutText.length){
//             element.textContent += aboutText.charAt(index);
//             index++;
//             setTimeout(type, 50); // adjust typing speed
//         }
        
        
//     }
//     // let index2 = 0;
    
//     // function type2()
//     // {
//     //     if (index2 < aboutText2.length){
//     //         element.textContent += aboutText2.charAt(index2);
//     //         index2++;
//     //         setTimeout(type2, 50); // adjust typing speed
//     //     }
//     //     }
  
//     type();
//     // setTimeout(() => {
//     //     setInterval(500)
//     // }, timeout);
//     // type2();
//   });
  
