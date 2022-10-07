import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { TableOfPeopleComponent } from './components/table-of-people/table-of-people.component';

import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { FormErrorPipe } from './pipes.ts/form-error.pipe';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [
    FormErrorPipe,

    AppComponent,
    UploadImageComponent,
    FormComponent,
    TableOfPeopleComponent,
    SummaryComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    StepsModule,
    ToastModule,
    CardModule,
    ButtonModule,
    FileUploadModule,
    ProgressBarModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    DividerModule,
    TableModule,
    CheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
