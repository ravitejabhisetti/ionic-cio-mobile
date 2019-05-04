import { CommonModule } from '@angular/common';
import { CioEmptyComponent } from './cio-empty-component/cio-empty-component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        CioEmptyComponent
    ],
    imports: [CommonModule, IonicModule],
    exports: [
        CioEmptyComponent
    ]
})

export class ComponentsModule { }
