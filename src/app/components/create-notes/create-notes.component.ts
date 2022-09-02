import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notesService/notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit{
  @Output() refreshEventCreate = new EventEmitter<string>();
  notesForm !:FormGroup;
  display:boolean = true;
  submitted = false;
  token:any;
  constructor(private formBuilder : FormBuilder, private notes:NotesService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.notesForm = this.formBuilder.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  onSubmit(){
    this.submitted = true;
    if(this.notesForm.valid){
      let reqData = {
        title : this.notesForm.value.title,
        description : this.notesForm.value.desc
      }
      console.log(reqData);
      this.notes.addNotes(reqData).subscribe((response:any) =>{
        console.log(response); 
        this.refreshEventCreate.emit(response)
      });
      
    }
    this.display = true;
  }
}
