import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { Meal } from '../meal';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit { 
  meals: Meal[] = [];
  id!: number
  mealName!: string
  calories!: number
  details!: string
  newMeal={id:0,mealName:'',calories:0,details:''}
  constructor() { }

  ngOnInit(): void {
  }
  // addMeal(meal: Meal){
  //   this.meals.unshift(meal);
  //   }
    @Output() addMeals = new EventEmitter<Meal>();
    submitMeal(form:NgForm){
      
      let {mealName,mealCalories,mealDetails}=form.value
      this.newMeal = {
        id:0,
        mealName:mealName,
        calories:mealCalories,
        details:mealDetails
        
      }
      console.log(this.newMeal)
      this.addMeals.emit(this.newMeal);
        }
}
