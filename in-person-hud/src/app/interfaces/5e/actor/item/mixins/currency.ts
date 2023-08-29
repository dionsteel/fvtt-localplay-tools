export interface CurrencyMapping extends Record<string,string> {
  pp: "PP";
  gp: "GP";
  ep: "EP";
  sp: "SP";
  cp: "CP";
}

export interface HoldsCurrency<C extends CurrencyMapping = CurrencyMapping> {
  currency: Record<C[keyof C], number>; //  Object containing currencies as numbers.
}
