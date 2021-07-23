var index = 0;
var crct = 0;
var noques = 10;


function displayQn() {

    document.getElementById("question").innerHTML = `${index + 1}` + ". " + qna[index].qn;
    document.getElementById("op1").innerHTML = qna[index].ans.a;
    document.getElementById("op2").innerHTML = qna[index].ans.b;
    document.getElementById("op3").innerHTML = qna[index].ans.c;
    document.getElementById("op4").innerHTML = qna[index].ans.d;

    if (index >= (noques - 1)) {
        document.getElementById("buttondiv").innerHTML = "<button id='next' onclick='submitQuiz()'>Submit</button>";
    }

}

function nextQn() {
    checkAns();
    var x = document.getElementById(qna[index].cans);
    x.checked = false;
    index++;
    displayQn();
}
function checkAns() {
    var x = document.getElementById(qna[index].cans);
    if (x.checked == true)
        crct++;
}
function submitQuiz() {
    checkAns();
    var ob1 = document.getElementById("question");
    var ob2 = document.getElementById("a1");
    var ob3 = document.getElementById("b1");
    var ob4 = document.getElementById("c1");
    var ob5 = document.getElementById("d1");
    var ob6 = document.getElementById("buttondiv");
    var ob7 = document.getElementById("line");
    ob1.remove();
    ob2.remove();
    ob3.remove();
    ob4.remove();
    ob5.remove();
    ob6.remove();
    ob7.remove();
    var cdiv = document.createElement("div");
    cdiv.innerText = "Your score is: " + crct;
    cdiv.id = "newdiv";
    document.body.appendChild(cdiv);
}

qna = [
    {
        qn: "Who is the first Persident of India?",
        ans: {
            'a': "Dr. Rajendra Prasad",
            'b': "Sardar Vallabhai Patel",
            'c': "Jawaharlal Nehru",
            'd': "Dr. Radhakrishnan"
        },
        cans: 'a'
    },
    {
        qn: "Who was the last Viceroy of British India",
        ans: {
            'a': "Irwin",
            'b': "Dalhousie",
            'c': "Mountbatten",
            'd': "Warren Hastings"
        },
        cans: 'c'
    },
    {
        qn: "Which Indian City is the capital of two states?",
        ans: {
            'a': "Indore",
            'b': "Chandigarh",
            'c': "Delhi",
            'd': "Hyderabad"
        },
        cans: 'b'
    },
    {
        qn: "How many countries does India share its International border with?",
        ans: {
            'a': "9",
            'b': "14",
            'c': "6",
            'd': "7"
        },
        cans: 'd'
    },
    {
        qn: "What is the approximate land cover aera of India, in sq.km",
        ans: {
            'a': "1,000,000",
            'b': "2,000,000",
            'c': "3,000,000",
            'd': "4,000,000"
        },
        cans: 'c'
    },
    {
        qn: "Delhi is located along which river?",
        ans: {
            'a': "Yamuna",
            'b': "Ganga",
            'c': "Indus",
            'd': "Brahmaputra"
        },
        cans: 'a'
    },
    {
        qn: "What is the smallest state in India by area?",
        ans: {
            'a': "Puducherry",
            'b': "Sikkim",
            'c': "Kerala",
            'd': "Goa"
        },
        cans: 'd'
    },
    {
        qn: "Which is the wettest state in India?",
        ans: {
            'a': "Kerala",
            'b': "Meghalaya",
            'c': "West Bengal",
            'd': "Odisha"
        },
        cans: 'b'
    },
    {
        qn: "In which state is the Kaziranga National Park located?",
        ans: {
            'a': "Rajasthan",
            'b': "Karnataka",
            'c': "Assam",
            'd': "Bihar"
        },
        cans: 'c'
    },
    {
        qn: "Who was the first Indian woman to be elected as President of United Nations General Assembly?",
        ans: {
            'a': "Indira Gandhi",
            'b': "Vijayalakshmi Pandit",
            'c': "Sarojini Naidu",
            'd': "Rajkumari Amrit Kaur"
        },
        cans: 'b'
    }
]