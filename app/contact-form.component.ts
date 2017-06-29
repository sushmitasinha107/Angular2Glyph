import {Component} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder,Validators} from '@angular/forms';


@Component({
    selector:'contact-form',
    templateUrl : 'app/contact-form.component.html'


})
export class ContactFormComponent{
    log(x){
      console.log(x);
        

    }

}