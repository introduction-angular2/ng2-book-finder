import {Component} from "angular2/core";
import {FORM_DIRECTIVES, Control} from 'angular2/common';
import {Book} from './book.interface';
import {BookService} from './book.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  templateUrl :'/app/book/book-search.html',
  directives: [FORM_DIRECTIVES],
  providers: [BookService]      
})

export class BookSearchComponent {

  private books : Observable<Book>; 
  private searchBox: Control = new Control();

  constructor(private _bookService: BookService) {
    this.books = this.searchBox.valueChanges
      .do(x => { 
        console.log('Input search value is ', x);
      })
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((searchText:string) => {
        return this._bookService.getBooks1(searchText);
      })
  }
}

