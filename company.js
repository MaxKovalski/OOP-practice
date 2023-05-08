class Company {
  companyName;
  contactName;
  countryName;

  static showHtml(names) {
    return `
    <tr>
      <td>${names.companyName}</td>
      <td>${names.contactName}</td>
      <td>${names.countryName}</td>
    </tr>`;
  }
}
