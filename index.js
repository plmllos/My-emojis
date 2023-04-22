let arrEmoji = []

const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const emojiInput = document.getElementById("emoji-input")
const emojiContainer = document.getElementById("emoji-container")

pushBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        arrEmoji.push(emojiInput.value)
        emojiInput.value = ""
        emojiContainer.innerHTML = arrEmoji
    }
})

unshiftBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        arrEmoji.unshift(emojiInput.value)
        emojiInput.value = ""
        emojiContainer.innerHTML = arrEmoji
    }
})

popBtn.addEventListener("click", function() {
    arrEmoji.pop()
    emojiContainer.innerHTML = arrEmoji
})

shiftBtn.addEventListener("click", function() {
    arrEmoji.shift()
    emojiContainer.innerHTML = arrEmoji
})