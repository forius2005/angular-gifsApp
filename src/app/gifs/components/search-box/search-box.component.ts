import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tarInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ){}

  // searchTag ( newTag: string ){
  searchTag (  ){

    const newTag = this.tarInput.nativeElement.value;

    this.gifsService.searchTag ( newTag );

    this.tarInput.nativeElement.value = '';
  }

}
