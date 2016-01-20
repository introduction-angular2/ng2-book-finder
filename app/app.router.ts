import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {NavbarComponent} from './layout/navbar.component';
import {BookRouter} from './book/book.router';

@Component({
    selector : 'my-app',
    template : `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES, NavbarComponent]   
})

@RouteConfig([
    { path: '/book/...', name: 'Book', component: BookRouter, useAsDefault: true }
])

export class AppRouter{}

