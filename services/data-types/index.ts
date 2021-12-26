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

export interface TopUpCategoryTypes {
    _id: string,
    value: number,
    name: string
}

export interface historyVoucherTopup {
    category: string,
    coinQuantity: string,
    coinName: string,
    gameName: string,
    price: number,
    thumbnail: string
}

export interface HistoryPaymentTypes {
    nameBank: string,
    name:string,
    accountNumber: string,
    type: string
}

export interface HistoryTransactionTypes {
    _id: string,
    historyVoucherTopup: historyVoucherTopup,
    value: number,
    status: string,
    accountUser: string,
    tax:number,
    name: string,
    historyPayment: HistoryPaymentTypes
}