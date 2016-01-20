import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  constructor(private _http: Http) {}

  getBooks() {
    return this._http.get('/app/book/books.json')
    .map((res:Response) => res.json());
  }

}