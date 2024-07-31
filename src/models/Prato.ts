class Prato {
  id: number;
  category: string;
  description: string;
  image: string;
  infos: string[];
  title: string;
  star: string;

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    title: string,
    star: string
  ) {
    this.id = id;
    this.category = category;
    this.description = description;
    this.image = image;
    this.infos = infos;
    this.title = title;
    this.star = star;
  }
}

export default Prato;
