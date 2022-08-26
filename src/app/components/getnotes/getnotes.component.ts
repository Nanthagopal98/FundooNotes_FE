import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})
export class GetnotesComponent implements OnInit {

  constructor(private notes:NotesService) { }

  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit(){
    
    this.notes.getNotes().subscribe((response:any) =>{
      console.log(response); 
  })
  }
}
