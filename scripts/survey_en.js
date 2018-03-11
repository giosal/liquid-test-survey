window.onload = survey;
function survey(){
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
        			{text: 'Please enter your location'},
        		]
        	}, {
        		text: "Do you like to shop?",
        		responses: [
        			{text: 'Yes'},
        			{text: 'No'},
        		]
        	}, {
        		text: "Select your favorite things to buy:",
        		responses: [
        			{text: 'Clothing'},
        			{text: 'Lingerie'},
        			{text: 'Shoes'},
        			{text: 'Devices'},
        			{text: 'Cars'},
        		]
        	}, {
        		text: "Please select your favorite brands:",
        		responses: [
        			{text: 'Sandro'},
        			{text: 'Maje'},
        			{text: 'Agent Provocateur'},
        			{text: 'Aubade'},
        			{text: 'Chantelle'},
        			{text: 'Sony'},
        			{text: 'Ferrari'},
        			{text: 'BMW'},
        			{text: 'Asus'},
        		]
        	}
        ]
	 };
      
	 new Vue({
		 el: '#app',
		 data: { 
			 survey: survey,
			 questionIndex: 0,
			 userResponses: Array(survey.questions.length),
			 question4: Array(5),
			 question5: Array(9),
		 }, 
		 mounted: function() {
		     var vm = this;
		     window.addEventListener('popstate', function(event) {
		         vm.questionIndex = (event.state || {questionIndex: 0}).questionIndex;
		     });
		 },
		 methods: {
			 next: function() {
				 this.questionIndex++;
				 this.updateHistory();
			 },
			 prev: function() {
				 this.questionIndex--;
				 this.updateHistory();
			 },
			 updateHistory: function() {
		         history.pushState({questionIndex: this.questionIndex}, "Question " + this.questionIndex);
		     }
		 }
		 
	 });
}