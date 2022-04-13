import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
// import { Meals } from '../forms/meallist';
import { MealService } from '../meal-service/meal.service';
import { AlertService } from '../alert-service/alert.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  
   meals:Meal[];
  alertService!:AlertService;
  quote!:Quote;

  // constructor(mealService:MealService) {
  //   this.meals = mealService.getMeal()
  // }
  

  mealAdded(data: Meal){
    this.meals.unshift(data);
  }
  
  index=0
  deleteMeal(data:Meal){
    
      let toDelete = confirm(`Are you sure you want to delete ${this.meals[this.index].mealName}?`)      
      if (toDelete){
        this.meals.splice(this.index,1)
        if (toDelete){
          this.meals.splice(this.index,1)
          this.alertService.alertMe("The goal has been deleted")
        }
      }
    }
    constructor(mealService:MealService, alertService:AlertService,private quoteService:QuoteRequestService) {
      this.meals = mealService.getMeal()
      this.alertService = alertService;
    }

 

  ngOnInit():void {
    // interface ApiResponse{
    //   author:string;
    //   quote:string;
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }
//   this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
//     // Succesful API request
//     this.quote = new Quote(data.author, data.quote)
//   }, err=>{
//     this.quote = new Quote("Winston Churchill","Never never give up!")
//     console.log("An error occurred")
    
// })

// }
// }
}