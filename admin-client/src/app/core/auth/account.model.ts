export class Account {
  constructor(
    public activated: boolean,
    public authorities: string[],
    public email: string,
    public firstName: string | null,
    public lastName: string | null,
    public username: string,
    public imageUrl: string | null
  ) {}
}
