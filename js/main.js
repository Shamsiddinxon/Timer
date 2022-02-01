let elForm = document.querySelector(".font-wrap");
let elStartBtn = document.querySelector(".btn-start");
let elStopBtn = document.querySelector(".btn-stop");
let elRestartBtn = document.querySelector(".btn-restart");
let elSettingBtn = document.querySelector(".btn-setting");
let elTimeText = document.querySelector(".site-time");
let elMinInput = document.querySelector(".min-input")
let elSecundInput = document.querySelector(".sekund-input");

let sekund = 1500;

elForm.classList.add("none");
elRestartBtn.classList.add("none");
elStopBtn.classList.add("none");

updateTime(sekund)

if (sekund === 0) {
    sekund = 1500
}

//forum add
elSettingBtn.addEventListener("click", () => {
    elForm.classList.remove("none");
    document.querySelector(".overlay1").classList.add("overlay")
});

// form submit remove
elForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    elForm.classList.add("none")
    document.querySelector(".overlay1").classList.remove("overlay")

    let elMinValue = elMinInput.value;
    let elSecundvalue = elSecundInput.value;

    sekund = noupdateTime(elMinValue, elSecundvalue)
    updateTime(sekund)
    // console.log(sekund);
});

// form remove
document.querySelector(".overlay1").addEventListener("click", () => {
    elForm.classList.add("none")
    document.querySelector(".overlay1").classList.remove("overlay")
});


//START BTN CLICK
elStartBtn.addEventListener("click", () => {
    elStartBtn.classList.add("none");
    elRestartBtn.classList.remove("none");
    elStopBtn.classList.remove("none");

    console.log(sekund);
    statusbar(sekund)


})

//STOP BTN CLICK
elStopBtn.addEventListener("click", () => {
    elStopBtn.classList.add("none");
    elStartBtn.classList.remove("none");



    setInterval = clearInterval(setInterval);
    // setInterval(function () {
    //     sekund
    //     updateTime(sekund)

    // },1000, );
})


//restart BTN CLICK
elRestartBtn.addEventListener("click", () => {
    elRestartBtn.classList.add("none");
    elStopBtn.classList.add("none");
    elStartBtn.classList.remove("none");
    now = 1500;
})

//secundni minutga
function updateTime(secondsUpdate) {
    if (secondsUpdate < 1) {
        elTimeText.textContent = "00:00"
    } else if (secondsUpdate >= 1) {
        let minutes = Math.floor(secondsUpdate  / 60);
        let seconds = Math.floor(secondsUpdate % 60);


        if (seconds < 10) {
            seconds = `0${seconds}`
        }

        elTimeText.textContent = `${minutes}:${seconds}`;
        console.log("boldii");
    }
}

//minutni secundga
function noupdateTime(minut, sekund) {
    let minutes = Math.floor(minut  * 60);
    let secundes = sekund * 1;
    return minutes + secundes
}

function statusbar(sekund) {


setInterval(function () {
    sekund--
    updateTime(sekund)

}, 1000,);
}




