const companyN1 = new Company();
companyN1.companyName = "Alfreds Futterkiste";
companyN1.contactName = "Maria Anders";
companyN1.countryName = "Germany";
const companyN2 = new Company();
companyN2.companyName = "Centro comercial Moctezuma";
companyN2.contactName = "Francisco Chang";
companyN2.countryName = "Mexico";
const companyN3 = new Company();
companyN3.companyName = "Ernst Handel";
companyN3.contactName = "Roland Mendel	";
companyN3.countryName = "Austria";
const companyN4 = new Company();
companyN4.companyName = "Island Trading";
companyN4.contactName = "Helen Bennett";
companyN4.countryName = "UK";
const companyN5 = new Company();
companyN5.companyName = "Laughing Bacchus Winecellars";
companyN5.contactName = "Yoshi Tannamuri";
companyN5.countryName = "Canada";
const companyN6 = new Company();
companyN6.companyName = "Magazzini Alimentari Riuniti";
companyN6.contactName = "Giovanni Rovelli";
companyN6.countryName = "Italy";
// push all to Array
dataBase.addCompany(companyN1);
dataBase.addCompany(companyN2);
dataBase.addCompany(companyN3);
dataBase.addCompany(companyN4);
dataBase.addCompany(companyN5);
dataBase.addCompany(companyN6);
// show in HTML
const companyId = document.getElementById("company");
const allCompanies = dataBase.getAll();
for (let i = 0; i < allCompanies.length; i++) {
  const company = allCompanies[i];
  const companyHtml = Company.showHtml(company);
  companyId.innerHTML += companyHtml;
}
// User Input
function addCompany() {
  const companyName = prompt("companyName");
  const contactName = prompt("contactName");
  const countryName = prompt("countryName");
  const company = new Company();
  company.companyName = companyName;
  company.contactName = contactName;
  company.countryName = countryName;
  dataBase.userAdd(company);
  const companyHtml = Company.showHtml(company);
  companyId.innerHTML += companyHtml;
}
function showInputs() {
  const userAddCompanies = dataBase.getinputUser();
  alert(JSON.stringify(userAddCompanies));
}
