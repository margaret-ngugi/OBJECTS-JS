//Question1

//Q1
//You are working on a web application for a car rental company. They want to keep track
//of their car inventory and rental information. Your task is to create a JavaScript class or
//function constructor for representing cars in their inventory and another one for
//representing rental information


//equirements:
//1 Create a Car class or function constructor that has the following properties:
//a. make (string): The make of the car, e.g., "Toyota".
//b. model (string): The model of the car, e.g., "Camry".
//c. year (number): The year the car was manufactured, e.g., 2020.
//d. isAvailable (boolean): Indicates if the car is currently available for rent

//The Car class or function constructor should also have a method called
//toggleAvailability that changes the isAvailable property to its opposite value (true to
 //   false, false to true
//Q1
class Car{
    constructor(make,model,year,isAvailable){
        this.make=make
        this.model=model
        this.year =year
        this.isAvailble=isAvailable
    }
    toogleAvailability(){
        this.isAvailble=!this.isAvailble
    }
}
const car =new Car("Toyota","Camry",2020,"true")
console.log(car);

//Q2
//create a Rental class or function constructor that has the following properties:
 //car (Car object): The car that has been rented.
//renterName (string): The name of the person who rented the car.
//rentalStartDate (Date object): The start date of the rental period.
//rentalEndDate (Date object): The end date of the rental period.
//The Rental class or function constructor should also have a method called
//calculateRentalDuration that returns the rental duration in     

class Rental{
    constructor(rentalName,rentalStartDate,rentalEndDate){
        this.rentalName=rentalName
        this.rentalStartDate=rentalStartDate
        this.rentalEndDate=rentalEndDate

    }
    calculateRentalDuration(){
        this.renterName=!this.renterName
        console.l0g (50*20)
    }
}
 
let rental=new Rental("faith",2/02/2023,30/04/2023)
console.log(rental);
//Q3
//create an instance of the Car class or function constructor for a car in the
//inventory. Then, create an instance of the Rental class or function constructor for
//a rental involving the car you created. Finally, calculate the rental duration using
//the calculateRentalDuration method.





//Question2
//reate a Question class with the following properties:
// text(string): The text of the question.
// options(array): An array containing the multiple-choice options.
// correctAnswer(string): The correct answer to the question.
//The Question class should also have a method called checkAnswer that takes a
//user's answer as a parameter and returns true if the answer is correct and false
//otherwise


//Q1
class Question{
    constructor(text,options,correctAnswers){
    this.text =text
    this.options=options
    this.correctAnswers=correctAnswers
    }

}
let question=new Question("which is an animal?","cat or book","cat")
Question.prototype.checkAnswer="checkAnswer"

console.log(Question.correctAnswers);

//Q2
//reate a Quiz class with the following properties:
//questions(array):An array of Question objects.
//currentQuestionIndex(number): The index of the current question in the
//questions array.
//score(number): The user’s current score.
//The Quiz class should have the following methods:
//addQuestion: Takes a Question object as a parameter and adds it to the
//questions array.
//nextQuestion: Advances to the next question in the quiz by incrementing the
//currentQuestionIndex.
//submitAnswer: Takes a user's answer as a parameter, checks if the answer is
//correct using the checkAnswer method of the Question class, and updates the
//score if the answer is correc
class Quiz{
    constructor(questions,currentQuestionIndex,score){
        this.question=questions
        this.currentQuestionIndex=currentQuestionIndex
        this.score=score
    }
}
Quiz.prototype.addQuestions="questions"
Quiz.prototype.nextQuestion=+"currentQuestionIndex"
// Quiz.prototype.submitAnswer=
    




