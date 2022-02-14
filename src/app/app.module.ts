import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionAdminComponent } from './gestion-admin/gestion-admin.component';
import { GestionArticlesComponent } from './gestion-articles/gestion-articles.component';
import { GestionCategoriesComponent } from './gestion-categories/gestion-categories.component';
import { GestionCommandesComponent } from './gestion-commandes/gestion-commandes.component';
import { LoginComponent } from './login/login.component';
import { ModificationArticleComponent } from './modification-article/modification-article.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { ModifierCommandeComponent } from './modifier-commande/modifier-commande.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuilComponent,
    GestionCategoriesComponent,
    GestionCommandesComponent,
    GestionArticlesComponent,
    ModificationArticleComponent,
    ModifierAdminComponent,
    ModifierCommandeComponent,
    ModifierCategorieComponent,
    GestionAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
