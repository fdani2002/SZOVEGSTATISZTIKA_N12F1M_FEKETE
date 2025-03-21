document.getElementById("analyzeBtn").addEventListener("click", function()
{
    const text = document.getElementById("text").value;
    if(text.trim() === "")
    {
        alert("Adjon meg valami szöveget!");
        return;
    }
});