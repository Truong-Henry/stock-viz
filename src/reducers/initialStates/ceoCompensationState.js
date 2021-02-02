const ceoCompensationState = {
  symbol: {
    label: "Symbol",
    value: "",
    type: "string",
    description: "Symbol of the company",
  },
  year: {
    label: "Year",
    value: "",
    type: "string",
    description: " 	Fiscal year for the compensation data",
  },
  salary: {
    checked: false,
    label: "Salary",
    value: 0,
    type: "number",
    description: " Salary of the company CEO",
  },
  bonus: {
    checked: false,
    label: "Bonus",
    value: 0,
    type: "number",
    description: "Bonus amount of the company CEO.",
  },
  stockAwards: {
    checked: false,
    label: "Stock Awards",
    value: 0,
    type: "number",
    description: "",
  },
  optionAwards: {
    checked: false,
    label: "Options Awards",
    value: 0,
    type: "number",
    description: "",
  },
  nonEquityIncentives: {
    checked: false,
    label: "Non Equity Incentives",
    value: 0,
    type: "number",
    description: "",
  },
  pensionAndDeferred: {
    checked: false,
    label: "Pension and Deferred",
    value: 0,
    type: "number",
    description: "",
  },
  otherComp: {
    checked: false,
    label: "Other Compensation",
    value: 0,
    type: "number",
    description: "",
  },
  total: {
    checked: false,
    label: "Total",
    value: 0,
    type: "number",
    description: "",
  },
};

export default ceoCompensationState;
