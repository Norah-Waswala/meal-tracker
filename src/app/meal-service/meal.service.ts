import { Injectable } from '@angular/core';
import { Meals } from '../forms/meallist';
@Injectable({
  providedIn: 'root'
})
export class MealService {
  getMeal(){
    return Meals
  }
  constructor() { }
}
