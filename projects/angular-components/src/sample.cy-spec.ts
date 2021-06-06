import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { mount } from '@jscutlery/cypress-angular/mount';
import { DynamicModule } from 'ng-dynamic-component';

@Component({
  template: `<h1>👋 Hello!</h1>`,
})
export class GreetingsComponent {}

describe('greetings', () => {
  it('should say hello', () => {
    mount(GreetingsComponent, { imports: [BrowserModule, DynamicModule] });
    cy.get('h1').contains('👋 Hello!');
  });
});
