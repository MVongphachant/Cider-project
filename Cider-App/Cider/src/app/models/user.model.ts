export class User {
  constructor(
    public username: string,
    public _token: string,
    public createdAt: any,
    public _expiresIn: Date,
    _id: any
  ) {}

  // get token() {
  //   if (!this._expiresIn || new Date() > this._expiresIn) {
  //     return null;
  //   }

  //   return this._token;
  // }

}
