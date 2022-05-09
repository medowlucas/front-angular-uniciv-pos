import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavigationComponent } from './components/template/navigation/navigation.component';
import { HomeComponent } from './views/home/home.component';
import { MoviesComponent } from './views/movies/movies.component';
import { SeriesComponent } from './views/series/series.component';
import { MovieCreateComponent } from './components/movie/movie-create/movie-create.component';
import { SerieCreateComponent } from './components/serie/serie-create/serie-create.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieIndexComponent } from './components/movie/movie-index/movie-index.component';
import { MovieUpdateComponent } from './components/movie/movie-update/movie-update.component';
import { MovieDeleteComponent } from './components/movie/movie-delete/movie-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    MovieCreateComponent,
    SerieCreateComponent,
    MovieIndexComponent,
    MovieUpdateComponent,
    MovieDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
