import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Output() refreshEventFromDisplaytoGetall = new EventEmitter<string>();

  constructor(public dialog:MatDialog) { }
  message:any
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

  receivedRefreshEvent($event:any){
    console.log("Icon to Display "+$event);
    this.message = $event;
    this.refreshEventFromDisplaytoGetall.emit(this.message)
  }

}
