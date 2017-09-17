import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User, IsActive } from '../enitities/user';
import { FormsModule }   from '@angular/forms';

import { UserService } from '../services/user.service';
import { MetadataService } from '../services/metadata.service';

import { NgbModal, NgbModalOptions, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'edit-user-modal',
    templateUrl: './edit-user-modal.component.html'
})
export class EditUserModalComponent {
    @Output() userRet: EventEmitter<User> = new EventEmitter<User>();
    @Input() newUser: User = new User();

    constructor(private modalService: NgbModal,
        private userService: UserService,
        private metaService: MetadataService) { }

    open(content) {
        this.modalService.open(content,{size: 'lg'});
    }

    save(): void {
        this.userService.update(this.newUser).subscribe(data => this.userRet.emit(data));
        this.newUser = new User();
    }
}
