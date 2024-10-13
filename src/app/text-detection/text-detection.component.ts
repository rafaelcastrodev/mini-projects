import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

/**MODELS */
import { appRoutesNames } from '../app-routes-names';

@Component({
  selector: 'app-text-detection',
  templateUrl: './text-detection.component.html',
  styleUrls: ['./text-detection.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, RouterModule],
})
export class TextDetectionComponent implements OnInit {
  @ViewChild('textbox') textbox!: ElementRef<any>;
  appRoutes = appRoutesNames;

  tagables!: string[];
  text!: string;
  taggedContent!: string;

  constructor() {}

  ngOnInit() {
    // console.log('DetectTextCompoent Init');
  }

  detectTagables() {
    this.text = this.textbox.nativeElement.innerText;
    this.tagables = this.filterWords(this.text);
  }

  applyTagOnContent() {
    let text: string = this.text;
    this.tagables.forEach((t) => {
      const tag: string = `<span class="tagged">${t}</span>`;
      // console.log(t);
      text = text.replace(t, tag);
    });
    this.taggedContent = text;
    // console.log(this.taggedContent);
  }

  removeTag(indexTag: number) {
    this.tagables.splice(indexTag, 1);
  }

  private filterWords(text: string): string[] {
    const noSpaceWords: string[] = text.split(' ');
    const tagables: string[] = [];

    noSpaceWords.forEach((w) => {
      const character: any = w.charAt(0);

      if (!isNaN(character * 1)) {
        tagables.push(this.filterOutSpecialChars(w));
      } else if (this.charIsLetter(character)) {
        if (character == character.toUpperCase()) {
          tagables.push(this.filterOutSpecialChars(w));
        }
        // if (character == character.toLowerCase()) {
        //   //todo
        // }
      }
    });
    return this.filterOutRepeatedWords(tagables);
  }

  private filterOutRepeatedWords(words: string[]): string[] {
    return [...new Set(words)];
  }

  private charIsLetter(char: any) {
    if (typeof char !== 'string') {
      return false;
    }
    return /^[a-zA-Z]+$/.test(char);
  }

  private filterOutSpecialChars(word: string): string {
    const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const charPos: number = word.length - 1;
    const character: any = word.charAt(charPos);

    if (regex.test(character)) {
      return word.substr(0, charPos);
    }
    return word;
  }
}
