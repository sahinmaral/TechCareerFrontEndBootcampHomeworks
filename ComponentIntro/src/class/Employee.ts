export default class Employee {
    name: string;
    profession:string;
    imageUrl: string;
    aboutCompany : string;

    constructor(name: string, profession:string, aboutCompany:string, imageUrl: string) {
      this.name = name;
      this.profession = profession;
      this.imageUrl = imageUrl;
      this.aboutCompany = aboutCompany;
    }
  }
