export default class Product {
  constructor(
    public id: number,
    public product_name: string,
    public price: number,
    public size: number,
    public description: string
  ) {
    this.id = id;
    this.product_name = product_name;
    this.price = price;
    this.size = size;
    this.description = description;
  }
}
