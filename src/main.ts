import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app';
import { appRouterProviders } from './app/app.routes';

bootstrapApplication(AppComponent, {
providers: [
provideHttpClient(),
...appRouterProviders
]
}).catch(err => console.error(err));
