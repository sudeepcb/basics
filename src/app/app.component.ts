import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  //template: `<p>Hello world</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  name = 'Luis';
  imgURL = 'https://picsum.photos/id/237/500/500';
  hello = "Hello, there";
  getName(){
    return this.name;
  }

  changeInput(e:KeyboardEvent){
    this.hello = (e.target  as HTMLInputElement).value;
  }
  changeImage(e:KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logImage(e : string){
    console.log(e);
  }
}
