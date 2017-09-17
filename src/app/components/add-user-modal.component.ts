import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User, IsActive } from '../enitities/user';
import { FormsModule }   from '@angular/forms';

import { UserService } from '../services/user.service';
import { MetadataService } from '../services/metadata.service';

import { NgbModal, NgbModalOptions, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'add-user-modal',
    templateUrl: './add-user-modal.component.html'
})
export class AddUserModalComponent {
    //@Input() isLost: boolean = false;
    @Output() userRet: EventEmitter<User> = new EventEmitter<User>();
    newUser: User = new User();

    constructor(private modalService: NgbModal,
        private userService: UserService,
        private metaService: MetadataService) { }

    open(content) {
        this.modalService.open(content,{size: 'lg'});
    }

    add(): void {
        this.userService.createUser(this.newUser).subscribe(data => this.userRet.emit(data));
        this.newUser = new User();
    }
}
