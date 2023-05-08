class dataBase {
  static #allCompanies = [];
  static #userAdd = [];

  static addCompany(company) {
    dataBase.#allCompanies.push(company);
  }
  static userAdd(company) {
    dataBase.#userAdd.push(company);
  }
  static getinputUser() {
    return dataBase.#userAdd;
  }
  static getAll() {
    return dataBase.#allCompanies;
  }
}
