let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score");

const gencompchoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
};

const drawgame = () => {
    msg.innerText = `Try Again! Game was Drawn`;
    msg.style.backgroundColor = "#1e88e5";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerscore++;
        compscorepara.innerText = computerscore;
        msg.innerText = `Opps! You Lose ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    const compchoice = gencompchoice();

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

// 🌗 Mode Toggle
let btnmode = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light"; // default

btnmode.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        btnmode.innerText = "☀️";
    } else {
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        btnmode.innerText = "🌙";
    }
    console.log(currmode);
});
