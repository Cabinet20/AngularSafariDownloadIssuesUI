import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver) {}

  downloadFilePost() {
    console.log('Testing download');
    const downloadUrl = `http://safaridownloadissue-api.azurewebsites.net/api/download/`;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', downloadUrl, true);
    xhr.setRequestHeader('Random-Header-String', 'Yolo');
    xhr.responseType = 'blob';
    xhr.withCredentials = true;
    xhr.onprogress = (event) => {
      console.log(event.loaded / event.total * 100);
    };
    xhr.onload = function (e: Event) {
      if (xhr.status === 200) {
        FileSaver.saveAs(xhr.response,  `SafariDownloadProblem.pdf`);
      } else {
      }
    };
    xhr.send();
  }

  downloadFileGet() {
    console.log('Testing download');
    const downloadUrl = `http://safaridownloadissue-api.azurewebsites.net/api/download/`;
    const xhr = new XMLHttpRequest();
    xhr.open('Get', downloadUrl, true);
    xhr.setRequestHeader('Random-Header-String', 'Yolo');
    xhr.responseType = 'blob';
    xhr.withCredentials = true;
    xhr.onprogress = (event) => {
      console.log(event.loaded / event.total * 100);
    };
    xhr.onload = function (e: Event) {
      if (xhr.status === 200) {
        FileSaver.saveAs(xhr.response,  `SafariDownloadProblem.pdf`);
      } else {
      }
    };
    xhr.send();
  }
}
