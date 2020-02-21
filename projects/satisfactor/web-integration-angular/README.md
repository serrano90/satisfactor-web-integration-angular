# @angular/web-integration-angular

> This package helps you integrate the satisfaction survey into any website implemented in angular

[![NPM](https://img.shields.io/npm/v/satisfactor-web-integration.svg)](https://www.npmjs.com/package/@satisfactor/web-integration-angular) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @satisfactor/web-integration-angular
```

## Usage

### App Module

```js
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SatisfactorModule } from "@satisfactor/web-integration-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SatisfactorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### App Component

```js
import { Component } from "@angular/core";
import { UserSurveyModel } from "@satisfactor/web-integration-angular";

@Component({
  selector: "app-root",
  template: `
    <div>
      <span>{{ title }} app is running!</span>
      <satisfactor [userSurvey]="userSurvey" [projectToken]="projectToken"></satisfactor>
    <div>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Test Angular Integration";
  userSurvey: UserSurveyModel;
  projectToken: string;
  constructor() {
    this.loadUserDataSurvey();
  }

  loadUserDataSurvey() {
    this.projectToken = "LCr8nhtFgB7nrFa7WD8o1h8iHWo9VNLc";
    this.userSurvey = new UserSurveyModel(
      "1",
      "Testing testify",
      "test@gmail.com",
      "+1 9876543210",
      "Testing Company"
    );
  }
}
```

## License

MIT © [](https://github.com/)
