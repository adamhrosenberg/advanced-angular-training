import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListPostsComponent} from './observable-example/list-posts/list-posts.component';
import {TwoWayDataBindingExampleComponent} from './two-way-data-binding-example/two-way-data-binding-example.component';
import {BindingsComponent} from './bindings';
import {MenuComponent} from './menu/menu.component';
import {TemplateDrivenFormComponent} from './forms/template-driven-form.component';
import {ReactiveFormComponent} from './forms/reactive-form.component';
import {HidingComponent} from './hiding/hiding.component';
import {ModelComponent} from './model/model.component';
import {ObservableExampleComponent} from './observable-example/observable-example.component';
import {NgforComponent} from './ngfor/ngfor.component';
import {NgClassComponent} from './ngclass/ng-class.component';
import {NgSwitchComponent} from './ngswitch/ng-switch.component';
import {SubjectExampleComponent} from './subject-example/subject-example.component';
import {PromiseExampleComponent} from './promise-example/promise-example.component';
import {WrapperComponent} from './spinner/wrapper.component';
import {StateFilterComponent} from './state-filter/state-filter.component';
import {DragDropComponent} from './drag-drop/drag-drop.component';
import {LabsMenuComponent} from './labs/labs-menu/labs-menu.component';
import {LabA0Component} from './labs/lab-a0/lab-a0.component';

const appRoutes: Routes = [
  {
    path: '', component: MenuComponent
  }, {
    path: 'observable-example', component: ObservableExampleComponent
  }, {
    path: 'subject-example', component: SubjectExampleComponent
  }, {
    path: 'promise-example', component: PromiseExampleComponent
  }, {
    path: 'list-posts', component: ListPostsComponent
  }, {
    path: '2-way-data-binding', component: TwoWayDataBindingExampleComponent
  }, {
    path: 'bindings', component: BindingsComponent
  }, {
    path: 'template-driven-form', component: TemplateDrivenFormComponent
  }, {
    path: 'reactive-form', component: ReactiveFormComponent
  }, {
    path: 'ngif', component: HidingComponent
  }, {
    path: 'ngmodel', component: ModelComponent
  }, {
    path: 'ngfor', component: NgforComponent
  }, {
    path: 'ngclass', component: NgClassComponent
  }, {
    path: 'ngswitch', component: NgSwitchComponent
  }, {
    path: 'spinner', component: WrapperComponent
  }, {
    path: 'state-filter', component: StateFilterComponent
  }, {
    path: 'drag-drop', component: DragDropComponent
  }, {
    path: 'labs', component: LabsMenuComponent
  }, {
    path: 'labs/A0', component: LabA0Component
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
