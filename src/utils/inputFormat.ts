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
  bill = bill.replace(/[^\d]/g, "").replace(/^0+/, "");
  let formattedString = "";

  if (bill.length > 2) {
    formattedString =
      "R$ " +
      bill.slice(0, bill.length - 2) +
      "," +
      bill.slice(bill.length - 2, bill.length);
  } else if (bill.length === 0) {
    formattedString = "";
  } else {
    formattedString = "R$ 0," + (Number(bill) > 9 ? bill : "0" + bill);
  }

  return formattedString;
}

export function formatNumber(number: string) {
  number = number.replace(/[^\d]/, "").replace(/^0+/, "");
  let formattedString = "";

  if (number.length > 2) {
    formattedString =
      number.slice(0, number.length - 2) +
      "," +
      number.slice(number.length - 2, number.length);
  } else if (number.length > 0) {
    formattedString = "0," + (Number(number) > 9 ? number : "0" + number);
  }

  return formattedString;
}

export function formatDatetime(datetime: string) {
  const year = datetime.slice(0, 4);
  const month = datetime.slice(5, 7);
  const day = datetime.slice(8, 10);
  const timestamp = datetime.slice(11, 16);

  return `${day}/${month}/${year} ${timestamp}`;
}

export function revertPhone(phone: string) {
  return phone.replace(/\D/g, "");
}

export function revertToNumber(number: string) {
  return Number(number.replace(/[^\d,.]/g, "").replace(",", "."));
}
