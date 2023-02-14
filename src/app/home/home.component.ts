import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    tekst = "";
    click(): void {
      this.tekst = "Angular to kompleksowy framework do projektowania oraz tworzenia wydajnych aplikacji typu SPA (Single Page Application) Napisany w języku TypeScript i wspierany oraz rozwijany przez Google. Angular początkowo miał być wersją 2 popularnego frameworku AngularJS, jednak decyzje projektowe sprawiły, że Google zdecydował się wydać go jako osobny byt, m.in. ze względu na brak kompatybilności wstecznej oraz prostej ścieżki aktualizacji aplikacji napisanych w AngularJS do Angular 2[2]. Angular wydany jest na licencji MIT.";
    }
}
