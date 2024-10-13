import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

/**MODELS */
import { appRoutesNames } from '../app-routes-names';
import { Subscription } from 'rxjs';
import { FileToUploadInterface } from './shared/models/file-to-upload.interface';

/**SERVICES */
import { UploadFileService } from './shared/services/uploader.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
  standalone: true,
  imports: [NgFor, RouterLink],
})
export class UploaderComponent implements OnDestroy {
  @ViewChild('inputFile') inputFile!: ElementRef<HTMLInputElement>;
  appRoutes = appRoutesNames;
  filesToUpload: FileToUploadInterface[] = [];
  subscription: Subscription = new Subscription();

  constructor(private uploadService: UploadFileService) {
    this.subscription.add(
      this.uploadService.filesToUpload$.subscribe((files: any) => {
        this.filesToUpload = files;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onChangeInputFile() {
    const fileList: FileList | null = this.inputFile.nativeElement.files;
    if (fileList?.length === 0) {
      return;
    }
    this.uploadService.addToUpload(fileList!);
  }

  async startUpload() {
    if (this.filesToUpload?.length === 0) {
      return;
    }
    await this.uploadService.startUpload();
  }
}
