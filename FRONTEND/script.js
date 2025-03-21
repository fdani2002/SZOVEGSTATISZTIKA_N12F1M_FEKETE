document.getElementById("analyzeBtn").addEventListener("click", function()
{
    const text = document.getElementById("text").value;
    if(text.trim() === "")
    {
        alert("Adjon meg valami szöveget!");
        return;
    }
    const wordCount = text.trim().split(/\s+/).length;
    document.getElementById("results").innerHTML = `<p> Szavak száma: ${wordCount} </p>`;
    
});