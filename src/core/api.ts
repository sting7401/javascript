import { NewsFeed, NewsDetail } from '../types';

export default class Api {
  xhr: XMLHttpRequest;
  url: string;

  constructor(url: string) {
    this.xhr = new XMLHttpRequest();
    this.url = url;
  }

  getRequestWidthXHR<AjaxResponse>(callback: (data: AjaxResponse) => void): void {
    this.xhr.open('GET', this.url);
    this.xhr.addEventListener('load', () => {
       callback( JSON.parse(this.xhr.response) as AjaxResponse);
    });
    this.xhr.send();
  }

  getRequestWidthPromise<AjaxResponse>(callback: (data: AjaxResponse) => void): void {
    fetch(this.url)
    .then(response => response.json())
    .then(callback)
    .catch(() => {
        console.error('Error');
    });
  }
}

export class NewsFeedApi extends Api {
  constructor(url: string) {
    super(url);
  }

  getDataWidthXHR(callback: (data: NewsFeed[]) => void): void {
    return this.getRequestWidthXHR<NewsFeed[]>(callback);
  }

  getDataWidthPromise(callback: (data: NewsFeed[]) => void): void {
    return this.getRequestWidthXHR<NewsFeed[]>(callback);
  }
}

export class NewsDetailApi extends Api {
  constructor(url: string) {
    super(url);
  }

  getDataWidthXHR(callback: (data: NewsDetail) => void): void {
    return this.getRequestWidthXHR<NewsDetail>(callback);
  }

  getDataWidthPromise(callback: (data: NewsDetail) => void): void {
    return this.getRequestWidthXHR<NewsDetail>(callback);
  }
}
