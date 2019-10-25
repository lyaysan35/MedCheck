# medcheck

### Summary

This is an application that allows people keep track of common recommended medical procedures based on a patient’s age. A user will be able to enter patient names and ages, including known medical procedures from a pre-populated list of common medical procedures. The app will keep track of procedures that have been completed as well as procedures that have yet to be completed. There will be a visual representation of procedures completed and incomplete.

### Models

 User - username: String,
	password: String,
	patients: [ Id of Patient ]

 Patient - name: String,
	    age: Number,
	    completed: [ Timeframe - Procedure: completed = true ]

 Timeframes - timeOfRequired: Number,
		Procedure: [ { name: String,
				 completed: Boolean }]


### User Stories

 A user should hit the landing page and see a log in form, a new user form, and the name of the app

A user should click a “new patient” link that goes to a New Patient page where a new patient can be entered into the database.

A user should be able to enter patient names and ages and completed procedures

A user should be able to see a list of common medical procedures that should be completed from an infant to 1 year old.

A user should see a visual representation of a patient’s age in relation to when medical procedures should be completed. 

The patient information and completed procedures should be unique to each user. A user should not be able to see any other user’s data. 

A user should be able to go to an edit page for each patient and be able to update details.

A user will not necessarily have access to Procedure -  New and Edit pages.

A user can visit a procedure info page with details of recommended medical procedures.

### Stretch Goals

User can track patients past one year.

A user gets emailed or texted reminders about upcoming procedures.

Procedures beyond vaccines that can be tracked for older adults.
