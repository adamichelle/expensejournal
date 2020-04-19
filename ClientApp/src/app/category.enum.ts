export enum Category {
  Airtime,
  Beauty,
  Bills,
  Clothing,
  Data,
  Entertainment,
  Food,
  Miscellaneous,
  Rent
}

export namespace Category {

  export function values() {
    return Object.keys(Category).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
