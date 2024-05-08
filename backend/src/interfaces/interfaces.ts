/*users */

export interface IUser {
	id: number;
	name: string;
	email: string;
	password: string;
	avatar?: string;
	role: UserRole;
}
export enum UserRole {
	USER = "USER",
	ADMIN = "ADMIN",
}

/*for products*/
export interface IProduct {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	variation: string;
	image: string;
	rating?: {
		rate: number;
		count: number;
	};
}
