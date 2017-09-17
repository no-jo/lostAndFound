import { Item } from '../enitities/item';
import { User } from '../enitities/user';


export enum Status {
	PENDING,
	ACCEPTED,
	REJECTED,
	CANCELLED,
	INACTIVE
}

export class Request {
	id: number;
	user: User;
	item: Item;
	status: Status;
	userComment: string;
	rating: number;
}