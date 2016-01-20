import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {BookSearchComponent} from './book-search.component';

@Component({
    template : `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]   
})

@RouteConfig([
        { path: '/search', name: 'Search', component: BookSearchComponent, useAsDefault: true }
])

export class BookRouter{}

