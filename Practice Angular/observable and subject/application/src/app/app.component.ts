import { Component } from "@angular/core";
import { AuthService, MyDataType } from "./app.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "rxjs/Observable";
  subscriptionUsers: MyDataType[] = [];
  title: any;

  constructor(private authService: AuthService) {
    this.getUsersWithSubscription();
  }

  getUsersWithSubscription() {
    this.authService.getUsersForSubscription().subscribe((res: MyDataType[]) => {
      this.subscriptionUsers = res;
      console.log(
        "getUsersWithSubscription(): " + JSON.stringify(this.subscriptionUsers)
      );
    });
  }
}
