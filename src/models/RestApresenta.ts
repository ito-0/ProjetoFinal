class RestPrato {
  id: number;
  category: string;
  image: string;
  title: string;

  constructor(id: number, category: string, image: string, title: string) {
    this.id = id;
    this.category = category;
    this.image = image;
    this.title = title;
  }
}

export default RestPrato;
