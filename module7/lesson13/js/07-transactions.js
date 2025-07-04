const transactionHistory = [
  {
    id: "758d5283-358e-4fbb-b222-a17fd04e8916",
    amount: "179.07",
    date: "2012-02-01T22:00:00.000Z",
    business: "Bogan - DuBuque",
    name: "Auto Loan Account 7313",
    type: "deposit",
    account: "19808943",
  },
  {
    id: "f0463ec4-7104-4adb-a41c-b1c7549055f8",
    amount: "930.87",
    date: "2012-02-01T22:00:00.000Z",
    business: "Legros, Weimann and Treutel",
    name: "Auto Loan Account 0721",
    type: "invoice",
    account: "38277848",
  },
  {
    id: "6c0e5a78-ad9f-46af-8299-44b77f5099d5",
    amount: "704.53",
    date: "2012-02-01T22:00:00.000Z",
    business: "Beatty, Wisozk and Koch",
    name: "Savings Account 1894",
    type: "withdrawal",
    account: "76727204",
  },
  {
    id: "16bd2a9d-7b0e-418f-a75c-7076e8ab6175",
    amount: "656.81",
    date: "2012-02-01T22:00:00.000Z",
    business: "Hane - Bode",
    name: "Personal Loan Account 2316",
    type: "withdrawal",
    account: "27462350",
  },
  {
    id: "d328680d-4aa5-40ee-912b-9b5149b602e6",
    amount: "280.21",
    date: "2012-02-01T22:00:00.000Z",
    business: "Schulist - Waelchi",
    name: "Savings Account 9032",
    type: "payment",
    account: "99923313",
  },
  {
    id: "e51fb348-8523-4e39-915f-39687ca4eebf",
    amount: "303.06",
    date: "2012-02-01T22:00:00.000Z",
    business: "Swaniawski - Hayes",
    name: "Checking Account 0573",
    type: "invoice",
    account: "75028346",
  },
  {
    id: "cd727197-5ffb-45a7-9bf5-9d08092a1cce",
    amount: "462.59",
    date: "2012-02-01T22:00:00.000Z",
    business: "Berge - Reinger",
    name: "Personal Loan Account 8173",
    type: "invoice",
    account: "93437240",
  },
  {
    id: "247e150a-71ba-4df7-9836-5bb400e012bb",
    amount: "242.49",
    date: "2012-02-01T22:00:00.000Z",
    business: "Stroman Inc",
    name: "Savings Account 1383",
    type: "withdrawal",
    account: "18476423",
  },
  {
    id: "6224c740-ff23-429d-854a-c7b310f7653b",
    amount: "770.94",
    date: "2012-02-01T22:00:00.000Z",
    business: "Johns - Pagac",
    name: "Auto Loan Account 1392",
    type: "invoice",
    account: "07680863",
  },
  {
    id: "79ccb1dd-6544-47cc-9a40-ea453985a748",
    amount: "788.40",
    date: "2012-02-01T22:00:00.000Z",
    business: "Ullrich, Shields and Koelpin",
    name: "Personal Loan Account 8318",
    type: "invoice",
    account: "07081761",
  },
];

const tableEl = document.querySelector(".js-transaction-table");

const tab = transactionHistory
  .map((item) => {
    return `
  <tr>
    <td>${item.id}</td>
    <td>${item.amount}</td>
    <td>${item.date}</td>
    <td>${item.business}</td>
    <td>${item.type}</td>
    <td>${item.name}</td>
    <td>${item.account}</td>
  </tr>
`;
  })
  .join("");

tableEl.insertAdjacentHTML("beforeend", tab);
