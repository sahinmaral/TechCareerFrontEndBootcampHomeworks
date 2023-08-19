export default class Employee {
    name: string;
    email:string;
    comment: string;
    subject : string;

    constructor(name: string, email:string, subject:string, comment: string) {
      this.name = name;
      this.email = email;
      this.comment = comment;
      this.subject = subject;
    }
  }
