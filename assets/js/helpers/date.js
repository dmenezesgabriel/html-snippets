export class DateHelper {
  constructor() {
    // An empty constructor is a pattern on abstract classes
    throw new Error("This class cannot be instantiated");
  }
  // Usually helper classes don't instantiate objects, because they would
  // imply on a high impact on memory, so to be possible to call a class method
  // Without instantiate an object we define a static method.
  static stringToDate(string) {
    if (/^\d{2}[./-]\d{2}[./-]\d{4}$/.test(string)) {
      console.log(string);
      throw new Error("Incorrect format fot date. Expected yyyy-mm-dd");
    }
    return new Date(
      ...string.split("-").map((item, index) => item - (index % 2))
    );
  }

  static dateToString(date) {
    return `${date.getDate()}/${date.getMont()}/${date.getFullYear()} `;
  }
}
