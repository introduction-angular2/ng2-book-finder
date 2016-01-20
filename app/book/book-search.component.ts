import {Component} from "angular2/core";
import {Book} from './book.interface';
import {BookService} from './book.service';

@Component({
  templateUrl :'/app/book/book-search.html',
  providers: [BookService]      
})

export class BookSearchComponent {

  private books : Observable<Book>; 

  constructor(private _bookService: BookService) { }

  ngOnInit() {
      this.searchBooks();
  }

  private searchBooks() {
      this.books = this._bookService.getBooks();
  }
}

