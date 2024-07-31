class RestPrato {
  id: number;
  description: string;
  image: string;
  title: string;

  constructor(id: number, description: string, image: string, title: string) {
    this.id = id;
    this.description = description;
    this.image = image;
    this.title = title;
  }
}

export default RestPrato;
