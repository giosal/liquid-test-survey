var surveyJSON = {pages:[{name:"Age",elements:[{type:"radiogroup",name:"ageQuestion",title:"What is your age group?",choices:["13-24","25-36","37-48","49-60","61-72","72+"],choicesOrder:"asc"}],description:"Age"},{name:"Gender",elements:[{type:"radiogroup",name:"genderQuestion",title:"What is your gender",choices:["Male","Female","Prefer not to disclose"]}]},{name:"Residence",elements:[{type:"text",name:"residenceQuestion",title:"Where do you live?"}]}]}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});