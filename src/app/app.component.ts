import { Component, Inject, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './note';
import { NoteForm } from './note-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notes: Note[] = [
    {
      id: 1,
      title: 'Mock Title',
      body: 'mock body',
      color: '#ff0000',
      favourite: true
    }
  ];

  noteModel = new NoteForm( null,"", "", false, "");

  
  //selected: Partial<Note>;
  active_id : number ; 
  clicked : boolean;

  constructor( private service: NotesService) {}

  ngOnInit() {
    this.loadNotes();
  }

  getNotes() {
    return this.notes;
  }

  public loadNotes() : any{
    // TODO: Retrieve a list of notes from the service and store them locally
    this.notes = this.service.getNotes()
  }

  // TODO: prevent changing original object
  selectNote(note : Note) {
    console.log(note)
    this.noteModel = note
    this.active_id = note.id;
    this.clicked = true;
  }

  // newNote() {
  //   this.selected = {};
  // }

  // TODO: save note
  saveNote(note:any) {
    console.log(note.value)
    this.service.saveNote(note.value)
    note.reset();
  }

  clearForm(form) {
    form.reset();
    }

  showForm(){
    this.clicked = true;

  }
}
