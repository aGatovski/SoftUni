function create(words) {
    let content = document.getElementById("content");
    for (const word of words) {
        let div = document.createElement("div");
        let paragraph = document.createElement("p");
 
 
        paragraph.textContent = word;
        paragraph.style.display = "none";
 
        div.addEventListener("click", function() {
            // Toggle the display of the paragraph on click
            if (paragraph.style.display === "none") {
                paragraph.style.display = "block";
            } 
            
            
            else {
                paragraph.style.display = "none";
            }
        });
 
        div.appendChild(paragraph);
        // Append the div to the content element inside the loop
        content.appendChild(div);
    }
 }