import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
    private baseUrl: string = 'http://it-ebooks-api.info/v1/search/';      

    constructor(private _http: Http) {}

    getBooks1(searchText:string) {
        return this._http.get(this.baseUrl + searchText)
            .map((res: Response) => {
              console.log('response is ', res.json().Books);
              return res.json().Books;
            });
    }

}