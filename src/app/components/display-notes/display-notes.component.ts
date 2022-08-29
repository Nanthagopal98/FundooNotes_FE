import { Component, Input, OnInit } from '@angular/core';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {


  constructor(public dialog:MatDialog) { }
  @Input() notesList:any;
  ngOnInit(): void {
  }

  editNoteDialogBox(notes:any){
     const dialogbox = this.dialog.open( UpdatenoteComponent,{
      width:'40%',
      height:'auto',
      data:notes
     })
     dialogbox.afterClosed().subscribe(result =>{
      console.log(result);
     })
  }

}
