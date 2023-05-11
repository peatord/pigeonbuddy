export default class User {
  constructor(displayname, email, interests, note) {
    this.displayname = displayname;

    this.email = email;
    this.interests = interests;
    this.note = note;
  }
  static test() {
    return new User("testUser", "test@test.com", "25", "test,test,test"); //return new this(props); also works
  }
}
