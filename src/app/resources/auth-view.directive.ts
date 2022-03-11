import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from '../functionality';
  
@Directive({ 
    selector: '[authView]' 
})

export class AuthViewDirective implements OnInit {

    constructor(
        private userService: UserService,

        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {}

    //@ts-ignore
    condition: boolean;

    ngOnInit() {
        this.userService.authenticated.subscribe(
            (authenticated) => {
                if (authenticated && this.condition || !authenticated && !this.condition) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                } 
                else {
                    this.viewContainer.clear();
                }
            }
        );
    }

    @Input() set authView(condition: boolean) {
        this.condition = condition;
    }

}