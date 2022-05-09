import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // styleUrls: ['./serversapp.component.css']
 styles: [`
  h3{
    color: red;
  }
 `]
})
export class AppComponent{
  username = '';
  showSecret = false;
  log = [];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
