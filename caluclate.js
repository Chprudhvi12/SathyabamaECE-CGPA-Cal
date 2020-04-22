function caluculate(){
	var arrayOfMarksElements =[];
	var arrayOfGradeObtained = [];
	var arrayOfMarksId = ['marks1','marks2','marks3','marks4','marks5',
	'marks6','marks7','marks8','marks9'];
	for(i=0;i<arrayOfMarksId.length;i++){
		var ele = document.getElementById(arrayOfMarksId[i]); 
		arrayOfMarksElements.push(ele);
	}
	for(var i=0;i<arrayOfMarksElements.length;i++){
		var mark = arrayOfMarksElements[i].value;
		var grade = caluculateGrade(mark);
		if(grade == 0){
			alert("Enter The Marks Within the Bound(0-100)");
		}
		else if(grade === -1){
			alert("No Alphabets should be Entered");
		}
		else
		arrayOfGradeObtained.push(grade);
	}
	var arrayOfCreditId = ['credits1','credits2','credits3','credits4','credits5',
	'credits6','credits7','credits8','credits9'];
	var arrayOfCreditElements = [];
	var arrayOfCredits = [];
	for(var i=0;i<arrayOfCreditId.length;i++){
		var ele = document.getElementById(arrayOfCreditId[i]); 
		arrayOfCreditElements.push(ele);
	}
	for(var i=0;i<arrayOfCreditElements.length;i++){
		var credit = arrayOfCreditElements[i].textContent;
		var val = parseInt(credit);
		arrayOfCredits.push(val);
	}
	var sum =0;
	for(i=0;i<arrayOfCredits.length;i++){
		sum += arrayOfCredits[i];
	}
	var ObtainedGrades = 0;
	for(i=0;i<arrayOfGradeObtained.length;i++){
		ObtainedGrades += ( arrayOfGradeObtained[i] * arrayOfCredits[i] );
	}
	 var result = document.getElementById('result');
	 result.innerHTML = "Result is : " + ((ObtainedGrades/sum).toFixed(2))+" CGPA";
	
}
function caluculateGrade(marks){
	var mark;
	if(parseInt(marks)==false){
		return -1;
	}
	else {
	 mark = parseInt(marks);
	}
	if(mark>100 || mark<0){
		return 0;
	}
	else if(mark>=90){
		return 10;
	}
	else if(mark>80){
		return 9;
	}
	else if(mark>70){
		return 8;
	}
	else if(mark>60){
		return 7;
	}
	else if(mark>50){
		return 6;
	}
	else if(mark>40){
		return 5;
	}
	else 
		return 0;
}
	
