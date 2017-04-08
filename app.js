
let place=0, Output,position_of_ques, q, Option,Options, optA,optB,optC,optD, correctANS = 0;

function store_name(){
if (typeof(Storage) !== "undefined"){
    let name=document.getElementById("username");
    localStorage.setItem("username",name.value);
    document.getElementById("get_username").innerHTML = "User Name: <span id='nm'>"+localStorage.getItem("username")+"</span>"; 
} else 
{
    alert("sorry your browser does not support this feature");
}

}


let ques =
 [

	[" JavaScript is designed for following purpose--","To Style HTML Pages","To add interactivity to HTML Pages.","To Perform Server Side Scripting Opertion","To Execute Query Related to DB on Server","A"],
	
	[" Why JavaScript is called as Lightweight Programming Language ?","because JS is available free of cost","because JS is client side scripting","because we can add programming functionality inside JS","because JS can provide programming functionality inside but up to certain extend.","D"],
	
	[" JavaScript Code can be called by using _________.","Function / Method","RMI","Triggering Event","Preprocessor","Function / Method"],
	
	[" What is the correct syntax for referring to an external script called ' abc.js'?","script href='abc.js'","script name='abc.js'","script src='abc.js'","None of the above","C"],
	
	["x=4+'4'<br>document.write(x)<br><br>Output------?","44","8","4","Error Output","A"],
	
	[" Which attribute is used to specifies that the script is executed when the page has finished parsing (only for external scripts)","type","defer","async","parse","B"],
	

];

function myques(){

Output=document.getElementById("Output");
if(place >= ques.length){

	document.getElementById("position_of_ques").innerHTML="Test Completed";
	document.getElementById("Output1").innerHTML="<h2>correct answers: "+correctANS+" Out of "+ques.length;
	
if(((correctANS/ques.length)*100)> 90){
document.getElementById("Output").innerHTML="<h2>Your scores are Excellent by "+((correctANS/ques.length)*100)+"%";

}
else if(((correctANS/ques.length)*100)> 80){
document.getElementById("Output").innerHTML="<h2>Your scores are Good by "+((correctANS/ques.length)*100)+"%";

}
else if(((correctANS/ques.length)*100)> 70){
document.getElementById("Output").innerHTML="<h2>Your scores are average by "+((correctANS/ques.length)*100)+"%";

}
else if(((correctANS/ques.length)*100)> 55){
document.getElementById("Output").innerHTML="<h2>You are just passed by "+((correctANS/ques.length)*100)+"%";

}
else{
	document.getElementById("Output").innerHTML="<h2>You are fail by "+((correctANS/ques.length)*100)+"%<br> <span id='luck'>Good Luck for next Time</span>";
}
	
	for(let i=0; i<Options.length;i++)
	{
	document.getElementById("answers").innerHTML="Correct Answer for Question"+(place+1)+" is : " +(ques[place][5]);

	}

	place=0;
	correctANS=0;
	return false;
}
document.getElementById("total").innerHTML="You have Total "+ques.length+" Questions";

document.getElementById("position_of_ques").innerHTML="QUESTION :"+(place+1);
q= ques[place][0];
optA = ques[place][1];
optB = ques[place][2];
optC = ques[place][3];
optD = ques[place][4];
document.getElementById("Output").innerHTML= "<h3>"+q+"</h3>";
document.getElementById("Output").innerHTML+="<input type='radio' id='a' name='Options' value='A'>"+optA+"<br>";
document.getElementById("Output").innerHTML+="<input type='radio' id='a' name='Options' value='B'>"+optB+"<br>";
document.getElementById("Output").innerHTML+="<input type='radio' id='a' name='Options' value='C'>"+optC+"<br>";
document.getElementById("Output").innerHTML+="<input type='radio' id='a' name='Options' value='D'>"+optD+"<br>";

document.getElementById("Output").innerHTML+= "<button onclick='checkAns()' id='btn'><span id='sb'> Submit Answer</span></button>";


}

function checkAns(){
	Options = document.getElementsByName('Options');
	for(let i=0; i<Options.length;i++){
		if(Options[i].checked){
			Option= Options[i].value;
		}
	}

if(Option === ques[place][5]){

	correctANS++;
}
	place++;
	myques();
}
function _(val)
{
	return document.getElementById(val);
}
window.addEventListener("load",myques, false);