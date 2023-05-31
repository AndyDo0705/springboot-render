var button1 = document.querySelector('input[value="Submit"]');
var button2 = document.querySelector('input[value="Add Grade"]');
var newGrades = document.getElementsByClassName("new-grade");
var inputFields = document.getElementsByClassName("input-field");
var gradeScale = [];
var aPlus = 0,a = 0,aMinus = 0,bPlus = 0,b = 0,bMinus = 0,cPlus = 0,c = 0,cMinus = 0,d = 0,f = 0;
var grades = [65.95,56.98,78.62,96.1,90.3,72.24,92.34,60.00,81.43,86.22,88.33,9.03,49.93,52.34,53.11,50.10,88.88,55.32,55.69,61.68,70.44,70.54,90.0,71.11,80.01];

button1.addEventListener('click',function(){
  if (gradeScale.length != 0){
    gradeScale.length = 0;
  }
  if (aPlus != 0 || a != 0 || aMinus != 0 || bPlus != 0 || b != 0 || bMinus != 0 || cPlus != 0 || c != 0 || cMinus != 0 || d != 0 || f != 0){
    aPlus =0;
    a = 0;
    aMinus=0;
    bPlus = 0;
    b = 0;
    bMinus =0;
    cPlus=0;
    c=0;
    cMinus=0;
    d=0;
    f=0;
  }
  isValidNum = false;
  for (var i = 0; i < inputFields.length; i++){
    if (isNaN(parseFloat(inputFields[i].value)) || parseFloat(inputFields[i].value) < 0 || parseFloat(inputFields[i].value) > 100){
      isValidNum = true;
    }
  };
  for (var i = 0; i < inputFields.length-1; i++){
    if (parseFloat(inputFields[i].value) < parseFloat(inputFields[i+1].value)){
      isValidNum = true;
      // break;
    }
  };
  if (isValidNum === true)
    window.alert("Type inputs again correctly");
  else{
    for (var i = 0; i < inputFields.length; i++){
      gradeScale.push(parseFloat(inputFields[i].value));
    }
  }
  for (var i = 0; i < grades.length; i++){
    if(grades[i]<= gradeScale[0] && grades[i] >= gradeScale[1]){
      aPlus++;
    }
    else if(grades[i]< gradeScale[1] && grades[i] >= gradeScale[2]){
      a++;
    }
    else if(grades[i]< gradeScale[2] && grades[i] >= gradeScale[3]){
      aMinus++;
    }
    else if(grades[i]< gradeScale[3] && grades[i] >= gradeScale[4]){
      bPlus++;
    }
    else if(grades[i]< gradeScale[4] && grades[i] >= gradeScale[5]){
      b++;
    }
    else if(grades[i]< gradeScale[5] && grades[i] >= gradeScale[6]){
      bMinus++;
    }
    else if(grades[i]< gradeScale[6] && grades[i] >= gradeScale[7]){
      cPlus++;
    }
    else if(grades[i]< gradeScale[7] && grades[i] >= gradeScale[8]){
      c++;
    }
    else if(grades[i]< gradeScale[8] && grades[i] >= gradeScale[9]){
      cMinus++;
    }
    else if(grades[i]< gradeScale[9] && grades[i] >= gradeScale[10]){
      d++;
    }
    else if(grades[i]< gradeScale[10] && grades[i] >= gradeScale[11] || grades[i] < gradeScale[11]){
      f++;
    }
    HistogramChart.config.data.datasets[0].data[0] = aPlus;
    HistogramChart.config.data.datasets[0].data[1] = a;
    HistogramChart.config.data.datasets[0].data[2] = aMinus;
    HistogramChart.config.data.datasets[0].data[3] = bPlus;
    HistogramChart.config.data.datasets[0].data[4] = b;
    HistogramChart.config.data.datasets[0].data[5] = bMinus;
    HistogramChart.config.data.datasets[0].data[6] = cPlus;
    HistogramChart.config.data.datasets[0].data[7] = c;
    HistogramChart.config.data.datasets[0].data[8] = cMinus;
    HistogramChart.config.data.datasets[0].data[9] = d;
    HistogramChart.config.data.datasets[0].data[10] = f;
    HistogramChart.update();
  }
})

button2.addEventListener('click',function(){
  ValidNum = false;
  if (isNaN(parseFloat(newGrades[0].value)) || parseFloat(newGrades[0].value) < 0 || parseFloat(newGrades[0].value) > 100){
    ValidNum = true;
  }
  if(ValidNum === true){
    window.alert("Type input again correctly");
  }
  else{
    if(parseFloat(newGrades[0].value)<= gradeScale[0] && parseFloat(newGrades[0].value) >= gradeScale[1]){
      aPlus++;
    }
    else if(parseFloat(newGrades[0].value)< gradeScale[1] && parseFloat(newGrades[0].value) >= gradeScale[2]){
      a++;
    }
    else if(parseFloat(newGrades[0].value)< gradeScale[2] && parseFloat(newGrades[0].value) >= gradeScale[3]){
      aMinus++;
    }
    else if(parseFloat(newGrades[0].value)< gradeScale[3] && parseFloat(newGrades[0].value) >= gradeScale[4]){
      bPlus++;
    }
    else if(parseFloat(newGrades[0].value)< gradeScale[4] && parseFloat(newGrades[0].value) >= gradeScale[5]){
      b++;
    }
    else if(parseFloat(newGrades[0].value)< gradeScale[5] && parseFloat(newGrades[0].value) >= gradeScale[6]){
      bMinus;
    }
    else if(parseFloat(newGrades[0].value)< gradeScale[6] && parseFloat(newGrades[0].value) >= gradeScale[7]){
      cPlus++;
    }
    else if(parseFloat(newGrades[0].value)< gradeScale[7] && parseFloat(newGrades[0].value) >= gradeScale[8]){
      c++;
    }
    else if(parseFloat(newGrades[0].value)< gradeScale[8] && parseFloat(newGrades[0].value) >= gradeScale[9]){
      cMinus++;
    }
    else if(parseFloat(newGrades[0].value)< gradeScale[9] && parseFloat(newGrades[0].value) >= gradeScale[10]){
      d++;
    }
    else if(parseFloat(newGrades[0].value)< gradeScale[10] && parseFloat(newGrades[0].value) >= gradeScale[11] || parseFloat(newGrades[0].value) < gradeScale[11]){
      f++;
    }
    HistogramChart.config.data.datasets[0].data[0] = aPlus;
    HistogramChart.config.data.datasets[0].data[1] = a;
    HistogramChart.config.data.datasets[0].data[2] = aMinus;
    HistogramChart.config.data.datasets[0].data[3] = bPlus;
    HistogramChart.config.data.datasets[0].data[4] = b;
    HistogramChart.config.data.datasets[0].data[5] = bMinus;
    HistogramChart.config.data.datasets[0].data[6] = cPlus;
    HistogramChart.config.data.datasets[0].data[7] = c;
    HistogramChart.config.data.datasets[0].data[8] = cMinus;
    HistogramChart.config.data.datasets[0].data[9] = d;
    HistogramChart.config.data.datasets[0].data[10] = f;
    HistogramChart.update();
    grades.push(parseFloat(newGrades[0].value));
  }
})

var canvasElement = document.getElementById("Histogram-chart");
var config = {
  type: "bar",
  data:{
    labels:["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"],
    datasets: [{label : "Number of students", data:[0,0,0,0,0,0,0,0,0,0,0], backgroundColor:["rgb(220,20,60)",
    "rgb(220,20,60)",
    "rgb(220,20,60)",
    "rgb(220,20,60)",
    "rgb(220,20,60)",
    "rgb(220,20,60)",
    "rgb(220,20,60)",
    "rgb(220,20,60)",
    "rgb(220,20,60)",
    "rgb(220,20,60)",
    "rgb(220,20,60)"],
    borderColor:["rgb(0,0,0)",
    "rgb(0,0,0)",
    "rgb(0,0,0)",
    "rgb(0,0,0)",
    "rgb(0,0,0)",
    "rgb(0,0,0)",
    "rgb(0,0,0)",
    "rgb(0,0,0)",
    "rgb(0,0,0)",
    "rgb(0,0,0)",
    "rgb(0,0,0)"],
    borderWidth: 1,
  }],
  },
    options:{
      responsive: true,
    }
}

var HistogramChart = new Chart(canvasElement,config);
