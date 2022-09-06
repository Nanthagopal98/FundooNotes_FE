import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  title:any;
  description:any;
  id:any
  color:any

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogbox : MatDialogRef<UpdatenoteComponent>,
    private notes:NotesService) {
    this.title = data.title,
    this.description = data.description,
    this.id = data.notesId
    this.color = data.color
   }

  ngOnInit(): void {
  }
  closeDialog(){
    let reqData = {
      title : this.title,
      description : this.description,
      color : this.color
    }
    this.notes.updateNotes(reqData, this.id).subscribe((response:any) =>{
      console.log(response);
      this.dialogbox.close()

    });
  }
}
