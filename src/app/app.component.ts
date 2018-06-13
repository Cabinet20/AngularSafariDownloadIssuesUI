import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-root',
  template: `
    <!--main-nav>
    </main-nav-->
    <ul>
      <li><a download="SafariDownloadProblem1.pdf" (click)="downloadFilePost()">Download current way (Angular POST request)</a></li>
      <li><a download="SafariDownloadProblem2.pdf" (click)="downloadFileGet()">Download current way (Angular GET request)</a></li>
      <li><a download="SafariDownloadProblem3.pdf" href="http://safaridownloadissue-api.azurewebsites.net/api/download/" >
      Download via href</a></li>
    </ul>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';

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
