import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Floreria-app';

  scrolled: boolean = false;
  usuario: any;
  //usuario = JSON.parse(localStorage.getItem(this.usuario));

  constructor(private el: ElementRef) {
    if(localStorage.getItem("usuario")){
      this.usuario = JSON.parse(localStorage.getItem("usuario") || '{}');
    }
    else{
      this.usuario = localStorage.setItem('usuario', JSON.stringify("{}"));
    }
    
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }

  ngOnInit(): void {
    
  }

  abrirMenu(){
    let myTag = this.el.nativeElement.querySelector("#menu_movil");
    let myNav = this.el.nativeElement.querySelector("#linksMenu");

    if(!myTag.classList.contains('active'))
    {
      myTag.classList.add('active'); 
      myNav.classList.add('active'); 
    }
    else{
      myTag.classList.remove('active'); 
      myNav.classList.remove('active'); 
    }
  }

}
