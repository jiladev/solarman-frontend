export function formatPhone(phone: string) {
  phone = phone.replace(/\D/g, "");
  let formattedString = "";

  if (phone.length > 0) {
    formattedString = "(";
  }

  formattedString += phone.slice(0, 2);

  if (phone.length > 2) {
    formattedString += ") ";
  }

  if (phone.length > 2) {
    formattedString += phone.slice(2, 6);
  }

  if (phone.length > 6) {
    formattedString += "-";
    formattedString += phone.slice(6, 10);
  }

  if (phone.length === 11) {
    formattedString =
      formattedString.slice(0, 5) +
      phone.slice(2, 3) +
      " " +
      phone.slice(3, 7) +
      "-" +
      phone.slice(7, 11);
  }

  return formattedString;
}

export function formatBill(bill: string) {
  bill = bill.replace(/\./g, ",");
  const firstCommaIndex = bill.indexOf(",");

  if (firstCommaIndex !== -1) {
    bill =
      bill.substring(0, firstCommaIndex + 1) +
      bill
        .substring(firstCommaIndex + 1)
        .replace(/,/g, "")
        .slice(0, 2);
  }

  bill = bill.replace(/[^\d,]/g, "");
  let formattedString = "";

  if (bill.length > 0) {
    formattedString = "R$ ";
  }

  formattedString += bill;

  return formattedString;
}

export function formatNumber(number: string) {
  return number.replace(/\D/g, "");
}
