import { ViewEncapsulation, Component } from "@angular/core";

@Component({
    selector: 'header-bar',
    template:
    `
    <div class="header">
        <div>
            <img class="img-gradient" src="../../assets/images/gradient.png">
        </div>
        <div>
            <img class="img-logo img-centered" src="../../assets/images/logo.svg">
        </div>
    </div>
    `,
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class HeaderBarComponent {
    
}