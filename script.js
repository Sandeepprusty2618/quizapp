const questions = [{
        'que': 'which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JAVASCRIPT',
        'd': 'PHP',
        'correct': 'a',
    
},
{
    'que': 'what year javascript launched?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'none of the above',
    'correct': 'b',
},
{
    'que': 'what does css stands for?',
    'a': 'markup language',
    'b': 'cascading style sheets',
    'c': 'jason object notation',
    'd': 'none of these',
    'correct': 'b',
},
]
let index =2;
const quesBox =document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadquestion=()=>{
    const data = questions[index]
    console.log(data)
    quesBox.innerText = ` ${index=1}) ${data.que} `;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
constantsubmitQuiz = () =>{
    const ans = getanswer()
}
const getanswer = ()=>{
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                console.log("yes")
            }else{
                console.log("no")
                return input.value;
            }
        }
    )
}

//intial call
loadquestion();


