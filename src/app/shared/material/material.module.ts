import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatDividerModule} from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatTabsModule} from '@angular/material/tabs';
import { MatCheckboxModule} from'@angular/material/checkbox';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule} from '@angular/material/card';
import { MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatCardModule,
    MatBadgeModule,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatCardModule,
    MatBadgeModule,

  ]
})
export class MaterialModule { }
