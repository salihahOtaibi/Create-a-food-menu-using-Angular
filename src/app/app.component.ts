import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menu';
  total =0;
  qty = 0;

  itemName = "";

  foodmenu=[
    {id:1,name:"لازانيا",price:40,description:"لازانيا بالفرن",img:"../assets/images/Lasagna.jpeg"},
    {id:2,name:"باستا بيستو",price:35,description:"باستا بصلصة البيستو",img:"../assets/images/pasta-pisto.jpeg"},
    {id:3,name:"باستا الفريدو",price:40,description:"باستا فيتوشيني بالدجاج وصلصة الفريدو",img:"../assets/images/pasta.jpeg"},
    {id:4,name:"سلطة",price:25,description:"صلطة بالدجاج",img:"../assets/images/salad.jpeg"}
  ]

  sum(event: any, price: number){
    const isChecked: boolean = event.target.checked;
    console.log(isChecked);
    console.log(price);

    if(isChecked){
      this.total= this.total+price;
      this.qty++;
    }
    else{
      this.total= this.total - price;
      this.qty--;
    }    
  }

  find(menu: any[]){
    return menu.filter(item => item.name.toLowerCase().includes(this.itemName.toLowerCase()));
  }
}
