import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientService } from '../../services/client.service'; 

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  clientForm!: FormGroup;
  levelOptions: number[] = [1, 2, 3]; // Array de opciones para el nivel

  constructor(private fb: FormBuilder, private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      rut: [''],
      first_name: [''],
      paternal_lastname: [''],
      maternal_lastname: [''],
      password: [''],
      level: [''],
      email: [''],
      mobile_number: [''],
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      this.clientService.createClient(this.clientForm.value).subscribe(
        response => {
          console.log('Cliente creado', response);
          // Manejo adicional tras la creación exitosa
        },
        error => {
          console.error('Error al crear cliente', error);
        }
      );
    }
  }
}
