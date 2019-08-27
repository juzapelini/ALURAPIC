import { Component, OnChanges, Input, SimpleChanges} from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.photos){
      this.rows = this.groupColums(this.photos);
    }
  }

  @Input() photos: Photo[] = [];

  rows: any[] = [];

  constructor() { }

  groupColums(photos: Photo[]): any[] {
    const newRows = [];
    for (let index =0; index < photos.length; index+=3){
      newRows.push(photos.slice(index, index +3));
    }
    return newRows;

  }

}
