/**
 * UserSurvey
 */

export class UserSurveyModel {
  id: string;
  name: string;
  email: string;
  cellPhone: string;
  company: string;

  constructor(id: string, name: string, email: string, cellPhone: string, company: string) {
    this.id = id;
    this.name = name !== undefined ? name : null;
    this.email = email !== undefined ? email : null;
    this.cellPhone = cellPhone !== undefined ? cellPhone : null;
    this.company = company !== undefined ? company : null;
  }

  isValid() {
    return this.id !== undefined;
  }
}
