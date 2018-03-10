window.onload = survey;
function survey(){
      
      // Create a quiz object with a title and two questions.
      // A question has one or more answer, and one or more is valid.
	 var survey = {
		title: 'Welcome to online survey for Liquid!',
        questions: [
        	{
        		text: "What is your age group?",
        		responses: [
        			{text: '15-24'}, 
        			{text: '25-34'},
        			{text: '35-44'},
        			{text: '45-54'},
        			{text: '55-64'},
        			{text: '65+'},
        		]
        	}, {
        		text: "What is your gender?",
        		responses: [
        			{text: 'Male'}, 
        			{text: 'Female'},
        			{text: 'Do not identify'},
        		]
        	}, {
        		text: "Where do you live?",
        		responses: [
        			{text: 'City'}, 
        			{text: 'Countryside'},
        			{text: 'Do not identify'},
        		]
        	}
        ]
	 };
      
	 new Vue({
		 el: '#app',
		 data: { 
			 survey: survey,
			 questionIndex: 0,
			 userResponses: Array(survey.questions.length).fill(false),
		 }, 
		 methods: {
			    // Go to next question
			 next: function() {
				 this.questionIndex++;
			 },
			    // Go to previous question
			 prev: function() {
				 this.questionIndex--;
			 }
		 }// Attach quiz to Vue data
	 });
}