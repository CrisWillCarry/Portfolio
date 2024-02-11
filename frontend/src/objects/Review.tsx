
class review {
  constructor(
    public id: number,
    public username: string,
    public stars: number,
    public comment: string,
    public picture : string,
    public date: string
  ) {}
}

export default review;