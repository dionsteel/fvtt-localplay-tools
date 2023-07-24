import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, createApplication } from '@angular/platform-browser';

export async function main() {
  const app = await createApplication({
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule)],
  });//.catch((err) => console.error(err));
  app.
}

main();
