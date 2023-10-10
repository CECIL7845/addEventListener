let data = [
    {
        player: "Cecil",
        score: 52
    },
    {
        player: "John",
        score: 41
    }
]
const logBtn = document.getElementById(log-btn)

logBtn.addEventListener("click", function() {
    console.log(data[0].score)
})