import { Component, OnInit } from '@angular/core';
import { Library } from '../model/Library';
import { LibraryService } from '../shards/library.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  p: number = 1;
  library : Library[]=[];

  constructor(private ls:LibraryService) { }

  ngOnInit(): void {
    this.ls.getLibrary().subscribe((data: Library[]) => {
      console.log(data);

      this.library = data;
    });
  }

}
