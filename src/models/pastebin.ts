export class Pastebin {

  private _id: number;
  private _key: string;
  private _code: string;
  private _codeEnd: Date;
  private _type: string;


  constructor(responsePastebinObject?: any) {
    if (responsePastebinObject) {
      this._id = responsePastebinObject.id;
      this._key = responsePastebinObject.key;
      this._code = responsePastebinObject.code;
      this._codeEnd = new Date(responsePastebinObject.codeEnd * 1000);
      this._type = responsePastebinObject.type;
    } else {
      this._id = 0;
      this._key = '';
      this._code = '';
      this._codeEnd = new Date(0);
      this._type = '';
    }
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get codeEnd(): Date {
    return this._codeEnd;
  }

  set codeEnd(value: Date) {
    this._codeEnd = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  toJson(post: boolean) {
      return {
        code: this.code,
        codeEnd: this.codeEnd,
        type: this.type
      };
    }

}
