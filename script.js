// // complete the JS code
// const nameInput = document.getElementById("name");
// const scoreInput = document.getElementById("score");
// const scores = document.getElementById("scores");
// localstorage.setItem("scores",JSON.stringyfy(scores))
// // Save score to Local Storage
// function saveScore() {
//   // complete the code here
// 	const data=JSON.parse(localstorage.getItem("scores")) || [];
// 	const obj = {
// 		"name": nameInput,
// 		"scores":scores
// 	}
// 	data.push(obj);
//   showScores(data);
// }

// // Show scores in div
// function showScores(data) {
//   // complete the code
// 	document.createElment="ul";
	
// 	data.map((val)=>{
// document.createElement="li";
// 		li.innerHTML=`${val.name}`
// 	})
// 	document.getElementById("scores").appendChild("ul")
// }











const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
const table= document.createElement("table");
const head1=document.createElement("th");
head1.innerHTML="name"
const head2=document.createElement("th")
head2.innerHTML="score"
const rowHead= document.createElement("tr");
rowHead.appendChild(head1);
rowHead.appendChild(head2);
table.appendChild(rowHead);
document.body.append(table)
function saveScore() {
  // complete the code here

  const data1=document.createElement("td");
data1.innerHTML=nameInput.value
const data2=document.createElement("td")
data2.innerHTML=scoreInput.value
const dataRow= document.createElement("tr");
dataRow.appendChild(data1);
dataRow.appendChild(data2);
table.appendChild(dataRow)
const prevdata = scores.innerHTML=JSON.parse(localStorage.getItem("scores")) || "0"
if(prevdata<scoreInput.value){
  scores.innerHTML = scoreInput.value 
  localStorage.setItem("scores", JSON.stringify(scoreInput.value))
}  
showScores();
}

// Show scores in div
function showScores() {
  scores.innerHTML=JSON.parse(localStorage.getItem("scores")) || "No scores yet"
}
