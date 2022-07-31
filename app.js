const th_1 = document.querySelector("#theme-1");
const th_2 = document.querySelector("#theme-2");
const th_3 = document.querySelector("#theme-3");
const theme_token_spans = document.querySelectorAll(".theme-token span") 
const body = document.querySelector("body");
const calc_head = document.querySelector(".calc-head");
const span_theme_1 = document.querySelector(".span-theme-1");
const theme_token = document.querySelector(".theme-token");
const theme_slider_bar = document.querySelector(".theme-slider-bar");
const theme_slider_ball = document.querySelector(".theme-slider-ball");
const calc_display = document.querySelector(".calc-display");
const calc_key_layout = document.querySelector(".calc-key-layout");

// this is a array
const btns = document.querySelectorAll(".btn");

const btn_del = document.querySelector(".btn-del");
const btn_reset = document.querySelector(".btn-reset");
const btn_equal = document.querySelector(".btn-equal");
// const calc_display_text = document.querySelector("#calc-display-result");
const calc_display_result = document.querySelector("#calc-display-result");

const calc_display_equation = document.querySelector(".calc-display-equation");


th_1.addEventListener("click",() => {
    calc_head.style.color = "white";
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    theme_token.style.color = "white";
    span_theme_1.style.color = "white";
    theme_slider_bar.style.backgroundColor = "hsl(223, 31%, 20%)";
    theme_slider_ball.style.backgroundColor = "hsl(6, 63%, 50%)";
    theme_slider_ball.style.left = "0%";
    theme_slider_ball.style.transform = "translateX(0%)";
    calc_key_layout.style.backgroundColor = "hsl(223, 31%, 20%)";
    calc_display.style.backgroundColor = "hsl(224, 36%, 15%)";
    for (const btn of btns) {
        btn.style.color = " hsl(221, 14%, 31%)";
        btn.style.backgroundColor = "hsl(30, 25%, 89%)";
    }
    btn_del.style.backgroundColor = "hsl(225, 21%, 49%)";
    btn_reset.style.backgroundColor = "hsl(225, 21%, 49%)";
    btn_equal.style.backgroundColor = "hsl(6, 63%, 50%)";
    calc_display_result.style.color = white;
    calc_display_equation.style.color = white;

});


th_2.addEventListener("click",() => {
    calc_head.style.color = "hsl(60, 10%, 19%)";
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    theme_token.style.color = "hsl(60, 10%, 19%)";
    span_theme_1.style.color = "hsl(60, 10%, 19%)";
    theme_slider_bar.style.backgroundColor = "hsl(0, 5%, 81%)";
    calc_key_layout.style.backgroundColor = "hsl(0, 5%, 81%)";
    theme_slider_ball.style.backgroundColor = "hsl(25, 98%, 40%)";
    theme_slider_ball.style.left = "50%";
    theme_slider_ball.style.transform = "translateX(-50%)";
    calc_display.style.backgroundColor = "hsl(0, 0%, 93%)";
    for (const btn of btns) {
        btn.style.color = "hsl(60, 10%, 19%)"; 
        btn.style.backgroundColor = "hsl(45, 7%, 89%)";
    }
    btn_del.style.backgroundColor = "hsl(185, 42%, 37%)";
    btn_reset.style.backgroundColor = "hsl(185, 42%, 37%)";
    btn_equal.style.backgroundColor = "hsl(25, 98%, 40%)";
    calc_display_result.style.color = "hsl(60, 10%, 19%)";
    calc_display_equation.style.color = "hsl(60, 10%, 19%)";
});


th_3.addEventListener("click",() => {
    calc_head.style.color = "hsl(52, 100%, 62%)";
    theme_token.style.color = "hsl(52, 100%, 62%)";
    span_theme_1.style.color = "hsl(52, 100%, 62%)";
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    theme_slider_bar.style.backgroundColor = "hsl(268, 71%, 12%)";
    calc_key_layout.style.backgroundColor = "hsl(268, 71%, 12%)";
    theme_slider_ball.style.backgroundColor = "hsl(176, 100%, 44%)";
    theme_slider_ball.style.left = "100%";
    theme_slider_ball.style.transform = "translateX(-100%)";
    calc_display.style.backgroundColor = "hsl(268, 71%, 12%)";
    for (const btn of btns) {
        btn.style.color = "hsl(52, 100%, 62%)";
        btn.style.backgroundColor = "hsl(268, 47%, 21%)";
    }
    btn_del.style.backgroundColor = "hsl(281, 89%, 26%)";
    btn_reset.style.backgroundColor = "hsl(281, 89%, 26%)";
    btn_equal.style.backgroundColor = "hsl(176, 100%, 44%)";
    calc_display_result.style.color = "hsl(52, 100%, 62%)";
    calc_display_equation.style.color = "hsl(52, 100%, 62%)";
});


const num_btns = document.querySelectorAll(".num-btn");
const op_btns = document.querySelectorAll(".op-btn");



// result aaye ja rha hai jaise hi input aa raha HAI. 
/*
    aur starting mai sabse pahale first input hi result hoga
    aur jab user equal wale button ko press karega tab equation hata ke only 
    result show kar denge;

    user should not be able to enter a operator without entering a number first
    user should not be able to enter two operator ek saath 
*/ 


// let result = '';

// this boolean will be used as a flag for, if the btn_equal is pressed, 
// bcz after that we will seize all the operation, only u can reset after that 
let askForResult = false;

const resultByParsingEq = (equation)=>{
    if (!equation) {
        calc_display_result.textContent = "";
    }else{

    

    let result = "";
    console.log(equation);
    lastChar = equation[equation.length-1];
    // console.log(lastChar);
    // let eqLength = equation.length;
    // console.log(eqLength);

    // removing, if the last char of the equation is a operator
    // this thing will not work if user entered more than one operator at once

    if(lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/'){
        equation = equation.slice(0,equation.length-1);
    }
    // count of no of operation in equation;
    // this thing will not work if user entered more than one operator at once
    let count = 0;
    for (const eqChar of equation) {
        if(eqChar === '+' || eqChar === '-' || eqChar === '*' || eqChar === '/'){
            count++;
        }
    }

    // string array of equation
    //  eg. converting this "2+5-33" into [2,+,5,-,33];
    // for this first we will use string.replaceAll()
    // and replce any operator like + with &+&
    // than use string.split() and split for &;

    equation = equation.replaceAll('+', '&+&');
    equation = equation.replaceAll('*', '&*&');
    equation = equation.replaceAll('-', '&-&');
    equation = equation.replaceAll('/', '&/&');
    // console.log(equation);

    let eqArray = equation.split('&');
    console.log(eqArray);

    function calc(a, op, b){
        switch (op) {
            case "+":
                return a+b;
               
            case "-":
                return a-b;
                
            case "/":
                return a/b;
                
            case "*":
                return a*b;
            
            default: return a;
                
        }
    }

    let op = "";
    for(let ele of eqArray){
        if(ele === "+" || ele === "*" || ele === "/" || ele === "-"){
            op = ele;
        }else{
            if (result === "") {
                result = parseFloat(ele);
            } else {
                result = calc(result,op,parseFloat(ele));
            }
        }
    }
    console.log("i am result :",result);
    
    calc_display_result.textContent = result;

}
    

    
};

for (const btn of btns) {
        btn.addEventListener('click',(e)=>{
            if(!askForResult){
                // console.log(calc_display_equation.textContent)
                let equation = calc_display_equation.textContent;
                equation += e.target.textContent;
                calc_display_equation.textContent = equation;
                resultByParsingEq(equation);
            }
    });
}


// del_btn functioning 

btn_del.addEventListener('click',()=>{
    if (!askForResult) {
        let equation = calc_display_equation.textContent;
        equation = equation.slice(0, equation.length-1);
        calc_display_equation.textContent = equation;
        resultByParsingEq(equation);
    }
});

//  result_btn functioning

btn_equal.addEventListener('click',()=>{
    calc_display_equation.style.display = "none";
    calc_display_result.style.fontSize = "4rem"
    askForResult = true;
});

// reset_btn functioning

btn_reset.addEventListener("click",()=>{
    calc_display_equation.style.display = "flex";
    calc_display_result.style.fontSize = "3rem"
    askForResult = false;
    calc_display_equation.textContent = "";
    calc_display_result.textContent = "";
});
