import { Component, OnInit, Input } from '@angular/core';
import { UserSurveyModel } from './user-survey.model';

@Component({
  selector: 'satisfactor',
  template: ``
})
export class SatisfactorComponent implements OnInit {
  @Input() userSurvey: UserSurveyModel;
  @Input() projectToken: string;
  constructor() { 
  }
  loadScript() {
    console.log(this.userSurvey);
    console.log(this.projectToken);
    if (this.userSurvey instanceof UserSurveyModel && this.userSurvey.isValid()) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `!function(){window.satisfactor=window.satisfactor||function(){(window.satisfactor.value=window.satisfactor.value||[]).push(arguments)};var e=document.createElement("script"),t=document.getElementsByTagName("script")[0].parentNode;e.async=1,e.src="https://app.satisfactor.io/js/nps.min.js",t.appendChild(e);var s=document.createElement("link"),a=document.getElementsByTagName("head")[0];s.type="text/css",s.rel="stylesheet",s.href="https://app.satisfactor.io/css/nps.min.css",a.appendChild(s)}();
      satisfactor({
          token: "${this.projectToken}",
          userId: "${this.userSurvey.id}",
          traits: {
              name: "${this.userSurvey.name}",
              email: "${this.userSurvey.email}",
              cell_phone: "${this.userSurvey.cellPhone}",
              company: "${this.userSurvey.company}"
          }
      });`;

      document.getElementsByTagName('body')[0].appendChild(script);
    }
  }
  ngOnInit(): void {
    this.loadScript();
  }
}
