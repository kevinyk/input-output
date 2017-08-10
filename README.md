# InputOutputLecture

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

* This is demonstration code of using the @Input and @Output decorators to communicate between parent and child components.

* The task-list component needs info from the parent tasks component's task property so it can have correct values for its myTasks property. So it uses the @Input decorator

* The task-new component needs to communicate the new task it is trying to add to the tasks property of the tasks component. So it uses the @Output decorator.

* This also demonstrates the use of classes in Angular 4 and how it help refactor repetitive object definitions.

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
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
