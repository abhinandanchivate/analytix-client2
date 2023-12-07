import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { Test2Component } from './components/test2/test2.component';

@NgModule({
  declarations: [Test2Component],
  imports: [CommonModule, TestRoutingModule],
  exports: [Test2Component],
})
export class TestModule {}
