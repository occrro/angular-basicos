

import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";



//declaraamos el decorador
@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})


export class ContadorModule {}