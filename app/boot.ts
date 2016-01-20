import {bootstrap}     from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppRouter} from './app.router';

bootstrap(AppRouter, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);