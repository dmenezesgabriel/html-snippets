export class DateHelper {
  stringToDate(string) {
    return new Date(
      ...string.split("-").map((item, index) => item - (index % 2))
    );
  }

  dateToString(date) {
    return `${date.getDate()}/${date.getMont()}/${date.getFullYear()} `;
  }
}
