import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notesObject:any
  constructor(private notes:NotesService) { }

  ngOnInit(): void {
  }
  onDelete(){
    let reqData={
      notesId:this.notesObject.notesId,
    }
    console.log(reqData)
    this.notes.trashNotes(reqData).subscribe((response: any) => {
      console.log("Note Trashed Successfully",response);
    })
  }
  onArchiev(){
    let reqData = {
      notesId : this.notesObject.notesId
    }
    console.log(reqData)
    this.notes.archievNotes(reqData).subscribe((response:any) =>{
    console.log(response)
    })

  }
}
