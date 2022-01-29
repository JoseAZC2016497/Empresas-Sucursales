import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

constructor(private fb:FormBuilder, private _snackBar: MatSnackBar) { 
this.form= this.fb.group({
usuario:['',Validators.required],
contraseña:['',Validators.required],

})

  }

  ngOnInit(): void {
  }

  ingresar(){
    console.log(this.form)
    const usuario = this.form.value.usuario;
    const contraseña = this.form.value.contraseña;

     if(usuario=="AdminMc" && contraseña=="123456"){
//nos manda a otro formulario
this.fakeLoading();
 } else{
  //mostramos mensaje de error
  this.error();
  this.form.reset();
 }
  }

  error(){
    this._snackBar.open('usuario o contraseña ingresados son incorrectos','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

fakeLoading(){
this.loading = true;
  setTimeout(() => {
    //Rediccionamos
this.loading= false;
  }, 1500);
}



}
