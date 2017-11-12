import { ViewEncapsulation, Component } from "@angular/core";

@Component({
    selector: 'header-bar',
    template:
    `
    <div class="header">
        <div>
            <img src="../../assets/images/gradient.png" style="width:100%">
        </div>
        <div>
            <img class="img-logo img-centered" src="../../assets/images/logo.svg">
        </div>
    </div>
    `,
    styleUrls: ['../../app.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class HeaderBarComponent {
    
}