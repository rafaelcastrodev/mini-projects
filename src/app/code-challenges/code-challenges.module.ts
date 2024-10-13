import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeChallengesRoutingModule } from './code-challenges-routing.module';

/**COMPONENTS */
import { CodeChallengesComponent } from './code-challenges.component';
import { CodeChallengesListComponent } from './list/code-challenges-list.component';
import { componentsArray } from './_index';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CodeChallengesRoutingModule,
  ],
  declarations: [
    CodeChallengesComponent,
    CodeChallengesListComponent,
    componentsArray,
  ],
})
export class CodeChallengesModule {}
