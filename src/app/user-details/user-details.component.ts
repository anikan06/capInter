import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetails } from '../model/user.model';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  genders = ['male', 'female'];
  userForm!: FormGroup;
  arr!: FormArray;

  userArray: Array<UserDetails> = [];

  constructor(
    public fb: FormBuilder,
    private user: UserDataService
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]],
      age: ['', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]+$')]],
      gender: [''],
      hobbies: [''],
      verified: [false, Validators.requiredTrue],
    })

    
  }

  createItem() {
    return this.fb.group({
      hobby: ['']
    })
  }

  addItem() {
    this.arr = this.userForm.get('hobbies') as FormArray;
    this.arr.push(this.createItem());
  }

  get aliasesArrayControl() {
    return (this.userForm.get('hobbies') as FormArray).controls;
  }

  onSubmit() {
    console.log(this.userForm.value);
    this.userArray.push(this.userForm.value);
    console.log(this.userArray);
    this.user.getData(this.userArray);
  }

  reset() {
    this.userForm.reset();
  }


}
