import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DistrictRoutingModule } from './district-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DistrictComponent } from './district.component';

@NgModule({
  declarations: [
    DistrictComponent
  ],
  imports: [
    CommonModule,
    DistrictRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class DistrictModule { }
