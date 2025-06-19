import { Component, Input, OnChanges } from '@angular/core';
import { Iuser } from '../../models/users';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnChanges {
  @Input() user!: Iuser;

  newName: string = '';
  newAbout: string = '';
  isEditingName = false;
  isEditingAbout = false;

  ngOnChanges(): void {
    if (this.user) {
      this.newName = this.user.username;
      this.newAbout = this.user.experience;
    }
  }

  saveName() {
    if (this.newName.trim()) {
      this.user.username = this.newName;
    }
    this.isEditingName = false;
  }

  saveAbout() {
    if (this.newAbout.trim()) {
      this.user.experience = this.newAbout;
    }
    this.isEditingAbout = false;
  }
}
