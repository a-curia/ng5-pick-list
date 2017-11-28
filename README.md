### Interpolation 
- allows you to define properties in a component class, and communicate these properties to and from the template
- whenever you need to communicate properties (variables, objects, arrays, etc..) from the component class to the template, you can use interpolation
- format for defining interpolation in a template is: {{ propertyName }}

### Property binding 
- is the same thing as interpolation, except you can set the properties and attributes of various HTML elements
- property binding in Angular 5 is one-way, in that communication goes from the component class to the template
- format like: [value]="btnText"


### Event binding 
- allows you to define events that occur in the template (user-initiated), and communicate to the component class
- how can we make our Add an Item button actually work and save the user-submitted data somewhere?
- we can use event binding to capture a variety of user-initiated events to initiate logic in our component class
- list of events - https://www.w3schools.com/jsref/dom_obj_event.asp

### Two-Way Data Binding
- what if we wanted to use our input textfield to both retrieve and set its value from a component class?
- we can use what's called **ngModel** to create that 2-way data binding
- import **FormsModule** in order to have access to **ngModule**

### Router
- we can use the Angular 5 router to specify which comopnent should load by default when the app is loaded, and also utilize the <router-outlet>
- we used the --routing flag, which set us up with a file located at /src/app/app-routing.module.ts
- app-routing.module.ts add the values in Routes array

### Services
- sometimes, you need to use code across multiple components
- instead of rewriting the same code, you can create a service file that can be imported to your components as needed
- services are commonly ysed for storing data and making HTTP calls
- ng generate service myservice
- a great way of sharing data between components is to use the Rxjs BehaviorSubject library. 
- to import the service you need to add it to the providers array of the /src/app/app.module.ts

# ***************************************************************************************************************************


# MyNewProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
