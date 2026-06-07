function checkQuiz(){

let answer =
document.querySelector('input[name="quiz"]:checked');

let result =
document.getElementById("result");

if(!answer){
result.innerHTML =
"Выберите вариант ответа!";
return;
}

if(answer.value==="correct"){
result.innerHTML =
"✅ Верно! Никогда не сообщайте код из SMS.";
}
else{
result.innerHTML =
"❌ Неверно. Код из SMS нельзя сообщать никому.";
}

}