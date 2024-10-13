import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**MODELS */
import { FileToUploadInterface } from '../models/file-to-upload.interface';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  isUploading: boolean = false;
  filesToUpload!: FileToUploadInterface[];
  filesToUpload$: BehaviorSubject<FileToUploadInterface[]> =
    new BehaviorSubject<FileToUploadInterface[]>([]);

  private _fileSet!: Set<File>;

  constructor(private _http: HttpClient) {}

  addToUpload(fileList: FileList) {
    // this._fileSet = new Set();
    // this.filesToUpload$.next([]);
    // this.filesToUpload = [];

    // Array.from(fileList).forEach((f) => {
    //   this._fileSet.add(f);
    // });

    // this._fileSet.forEach((f) => {
    //   this.filesToUpload.push({
    //     file: f,
    //     name: f.name,
    //     uploadProgress: 0,
    //   });
    // });
    // this.filesToUpload$.next(this.filesToUpload);
    this.filesToUpload = Array.from(fileList).map((file) => ({
      file,
      name: file.name,
      uploadProgress: 0,
    }));
    this.filesToUpload$.next(this.filesToUpload);
  }

  async startUpload() {
    this.isUploading = true;

    for (const file of this.filesToUpload) {
      try {
        await this.upload(file);
      } catch (error) {
        // TODO: Handle error
      }
    }
  }

  // private upload(files: Set<File>): Observable<HttpEvent<Object>>{
  private upload(fileToUpload: FileToUploadInterface): Observable<void> {
    const baseUrl = '';
    const url = `${baseUrl}/upload/`;
    const formData = new FormData();

    // files.forEach((file) => {
    formData.append('file', fileToUpload.file!, fileToUpload.name);
    // });

    return this._http
      .post(url, formData, {
        headers: {
          'x-uploadtype': '',
          Authorization: 'Bearer ',
        },
        observe: 'events',
        reportProgress: true,
      })
      .pipe(
        map((ev: HttpEvent<Object>) => {
          if (ev.type === HttpEventType.Response) {
            fileToUpload.isUploading = false;
            this.filesToUpload$.next(this.filesToUpload);
            this.checkIsAllUploaded();
          } else if (ev.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round((ev.loaded * 100) / (ev.total ?? 1));
            fileToUpload.uploadProgress = percentDone;
            this.filesToUpload$.next(this.filesToUpload);
          }
        })
      );
  }

  private checkIsAllUploaded() {
    let isFinished: boolean = true;
    this.filesToUpload.forEach((f) => {
      if (f.isUploading === true) {
        isFinished = false;
      }
    });

    if (isFinished) {
      this.isUploading = false;
      // console.log('Upload completed.');
    }
  }
}
