var quizdata = [
    {
        question: 'Which framework is related to JS?',
        a: '.net',
        b: 'Flask',
        c: 'React',
        d: 'Django',
        correct: 'c'
    },
    {
        question: 'Which of the following is not a programming language?',
        a: 'Html',
        b: 'Python',
        c: 'Java',
        d: 'JS',
        correct: 'a'

    },
    {
        question: 'Which of the following is not a framework?',
        a: 'React',
        b: 'Javascript',
        c: 'Angular',
        d: 'Django',
        correct: 'b'
    },
    {
        question: 'CSS stands for?',
        a: 'Cascading Style Sheet',
        b: 'Cascading Style State',
        c: 'Cascading Sheet of Style',
        d: 'None of the above',
        correct: 'a'
    }
]
var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')
var submitbtn = document.getElementById('submit')

var current = 0
var quizScore = 0

loadQuiz()
function loadQuiz() {
    deselect()
    question.innerHTML = quizdata[current].question
    option_a.innerText = quizdata[current].a
    option_b.innerText = quizdata[current].b
    option_c.innerText = quizdata[current].c
    option_d.innerText = quizdata[current].d
}
function deselect() {
    answer.forEach(answer => answer.checked = false)
}

submitbtn.addEventListener('click', () => {
    var selectedoption;

    answer.forEach(answer => {
        if (answer.checked) {
            selectedoption = answer.id
        }
    })
    if (selectedoption == quizdata[current].correct) {
        quizScore += 1
    }
    current += 1
    if (current == quizdata.length) {
        document.getElementById('quizdiv').innerHTML = `<h1>Your score is ${quizScore} out of ${quizdata.length}<h1>`

    } else {
        loadQuiz()
    }
})