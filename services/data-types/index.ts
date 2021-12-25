export interface CategoryTypes {
    _id: string;
    name: string;
    __v: number;
}

export interface GameItemTypes {
    _id: string;
    status: string;
    name: string;
    thumbnail: string;
    category: CategoryTypes;
}

export interface BanksTypes {
    _id: string;
    name: string;
    nameBank: string;
    accountNumber: number;
}

export interface PaymentTypes {
    _id: string;
    type: string;
    status: string;
    Banks: BanksTypes[];
}

export interface NominalsTypes {
    _id: string;
    coinQuantity: number;
    coinName: string;
    price: number;
}

export interface LoginTypes {
    email: string;
    password: string;
}

export interface UserTypes {
    id: string,
    username: string,
    email: string,
    name: string,
    phoneNumber: number,
    avatar: string
}

export interface CheckoutTypes {
    voucher: string,
    nominal: string,
    payment: string,
    bank: string,
    name: string,
    accountUser: string
}