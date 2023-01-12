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
import { LayoutModule} from '@angular/cdk/layout';
import { MatRadioModule} from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule} from '@angular/material/dialog'
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'


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
    LayoutModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatBottomSheetModule,
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
    LayoutModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatBottomSheetModule
  ]
})
export class MaterialModule { }
