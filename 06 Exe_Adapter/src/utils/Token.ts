export default class Token{
    private _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.BgptKS4VsvwEWF2aPMYVnWidLvNFZBiAK6ps7RCA7Y8";
    public get token() {
        return this._token;
    }
    public set token(value) {
        this._token = value;
    }
}