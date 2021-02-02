const advancedFundamentalsState = {
  symbol: {
    label: "Symbol",
    value: "",
    type: "string",
    description: "Associated symbol or ticker",
  },
  asOfDate: {
    label: "As of Data",
    value: "",
    type: "string",
    description: "Date last updated",
  },
  accountsPayable: {
    checked: false,
    label: "Accounts Payable",
    value: 0,
    type: "number",
    description: "Accounts payable, a current liability on the balance sheet.",
  },
  accountsPayableTurnover: {
    checked: false,
    label: "Accounts Payable Turnover",
    value: 0,
    type: "number",
    description:
      "The accounts payable turnover ratio shows how many times a company pays off its accounts payable during the period.",
  },
  accountsReceivable: {
    checked: false,
    label: "Accounts Receivable",
    value: 0,
    type: "number",
    description: "Accounts receivable, a current asset on the balance sheet.",
  },
  accountsReceivableTurnover: {
    checked: false,
    label: "Accounts Receivable Turnover",
    value: 0,
    type: "number",
    description:
      "The accounts receivable turnover ratio shows how quickly the company is paid for the credit it extends to customers.",
  },
  assetsCurrentCash: {
    checked: false,
    label: "Cash and Equivalents (Non-Operating)",
    value: 0,
    type: "number",
    description:
      "Cash and cash equivalents, a current asset on the balance sheet. This data point collects cash for non-financial companies.",
  },
  assetsCurrentCashRestricted: {
    checked: false,
    label: "Current Restricted Cash",
    value: 0,
    type: "number",
    description: "Restricted cash, a current asset on the balance sheet.",
  },
  assetsCurrentDeferredCompensation: {
    checked: false,
    label: "Reported Current Deferred Compensation Assets",
    value: 0,
    type: "number",
    description:
      "Current deferred compensation assets, a current asset on the balance sheet.",
  },
  assetsCurrentDeferredTax: {
    checked: false,
    label: "Reported Current Deferred Tax Assets",
    value: 0,
    type: "number",
    description:
      "Current deferred tax assets, a current asset on the balance sheet.",
  },
  assetsCurrentDiscontinuedOperations: {
    checked: false,
    label: "Current Discontinued Operations (Non-Operating)",
    value: 0,
    type: "number",
    description:
      "Current assets from discontinued operations, a current asset on the balance sheet.",
  },
  assetsCurrentInvestments: {
    checked: false,
    label: "Other Investment Securities (Operating)",
    value: 0,
    type: "number",
    description:
      "Investment securities, a current asset on the balance sheet for financial companies or financial segments.",
  },
  assetsCurrentLeasesOperating: {
    checked: false,
    label: "Reported Current Operating Lease Assets",
    value: 0,
    type: "number",
    description:
      "Current operating lease assets, a current asset on the balance sheet.",
  },
  assetsCurrentLoansNet: {
    checked: false,
    label: "Net Loans",
    value: 0,
    type: "number",
    description:
      "Net loans, a current asset on the balance sheet for finanial companies or financial segments",
  },
  assetsCurrentOther: {
    checked: false,
    label: "Other Current or Investment Assets",
    value: 0,
    type: "number",
    description: "Other current assets on the balance sheet.",
  },
  assetsCurrentSeparateAccounts: {
    checked: false,
    label: "Separate Accounts",
    value: 0,
    type: "number",
    description: "Separate accounts, a current asset on the balance sheet.",
  },
  assetsCurrentUnadjusted: {
    checked: false,
    label: "Total Current/Investment Assets (unadjusted)",
    value: 0,
    type: "number",
    description:
      "Total Current/Investment Assets (unadjusted) as reported on the balance sheet.",
  },
  assetsFixed: {
    checked: false,
    label: "Total Fixed Assets",
    value: 0,
    type: "number",
    description: "Total fixed assets from the balance sheet.",
  },
  assetsFixedDeferredCompensation: {
    checked: false,
    label: "Reported Deferred Compensation Assets",
    value: 0,
    type: "number",
    description:
      "Fixed deferred compensation assets, a fixed asset on the balance sheet.",
  },
  assetsFixedDeferredTax: {
    checked: false,
    label: "Reported Deferred Tax Assets",
    value: 0,
    type: "number",
    description:
      "Fixed deferred tax assets, a fixed asset on the balance sheet.",
  },
  assetsFixedDiscontinuedOperations: {
    checked: false,
    label: "Discontinued Operations (Non-Operating)",
    value: 0,
    type: "number",
    description:
      "Fixed assets from discontinued operations, a fixed asset on the balance sheet.",
  },
  assetsFixedLeasesOperating: {
    checked: false,
    label: "Reported Non-Current Operating Lease Assets",
    value: 0,
    type: "number",
    description:
      "Fixed operating lease assets, a fixed asset on the balance sheet.",
  },
  assetsFixedOperatingDiscontinuedOperations: {
    checked: false,
    label: "Discontinued Operations (Operating)",
    value: 0,
    type: "number",
    description:
      "Fixed assets from discontinued operations, a fixed asset on the balance sheet for REITs.",
  },
  assetsFixedOperatingSubsidiaryUnconsolidated: {
    checked: false,
    label: "Unconsolidated Subsidiary Assets (Operating)",
    value: 0,
    type: "number",
    description:
      "Investment in unconsolidated subsidiaries that are part of operations. A fixed asset on the balance sheet.",
  },
  assetsFixedOreo: {
    checked: false,
    label: "Other Real Estate Owned",
    value: 0,
    type: "number",
    description:
      "Other Real Estate Owned (OREO) assets, a fixed asset on the balance sheet for financial companies or segments.",
  },
  assetsFixedOther: {
    checked: false,
    label: "Other Fixed Assets",
    value: 0,
    type: "number",
    description: "Other fixed assets on the balance sheet.",
  },
  assetsFixedUnconsolidated: {
    checked: false,
    label: "Unconsolidated Subsidiary Assets (non-operating)",
    value: 0,
    type: "number",
    description:
      "Investment in unconsolidated subsidiaries that are not part of operations. A fixed asset on the balance sheet.",
  },
  assetsUnadjusted: {
    checked: false,
    label: "Total Assets (unadjusted)",
    value: 0,
    type: "number",
    description: "Total Assets (unadjusted) as reported on the balance sheet.",
  },
  capex: {
    checked: false,
    label: "Capital Expenditures",
    value: 0,
    type: "number",
    description:
      "Capital expenditures, from cash flows from investing section of the cash flow statement.",
  },
  capexAcquisition: {
    checked: false,
    label: "Acquisition Capital Expenditures",
    value: 0,
    type: "number",
    description:
      "Acquisition expenditures, from cash flows from investing section of the cash flow statement.",
  },
  capexMaintenance: {
    checked: false,
    label: "Maintenance Capital Expenditures",
    value: 0,
    type: "number",
    description:
      "Capital expenditures, as reported on the cash flow statement, that are necessary for the company to continue operating in its current form.",
  },
  cashConversionCycle: {
    checked: false,
    label: "Cash Conversion Cycle",
    value: 0,
    type: "number",
    description:
      "The cash conversion cycle show the number of days it takes for a company to convert its inventory and other resources into revenue.",
  },
  cashFlowFinancing: {
    checked: false,
    label: "Cash Flow from Financing Activities",
    value: 0,
    type: "number",
    description: "Total cash flow from financing activities.",
  },
  cashFlowInvesting: {
    checked: false,
    label: "Cash Flow from Investing Activities",
    value: 0,
    type: "number",
    description: "Total cash flow from investing activities.",
  },
  cashFlowOperating: {
    checked: false,
    label: "Cash Flow from Operations",
    value: 0,
    type: "number",
    description: "Total cash flow from operations.",
  },
  cashFlowShareRepurchase: {
    checked: false,
    label: "Cash Paid for Share Repurchases",
    value: 0,
    type: "number",
    description: "Total cash flow from share repurchases.",
  },
  cashLongTerm: {
    checked: false,
    label: "Long-Term Investments (Non-Operating)",
    value: 0,
    type: "number",
    description:
      "Long-term investments, a long-term asset on the balance sheet.",
  },
  cashOperating: {
    checked: false,
    label: "Cash and Equivalents (Operating)",
    value: 0,
    type: "number",
    description:
      "Cash and cash equivalents, a current asset on the balance sheet. This data point collects cash for financial companies or segments.",
  },
  cashPaidForIncomeTaxes: {
    checked: false,
    label: "Cash Paid for Income Taxes",
    value: 0,
    type: "number",
    description:
      "Cash paid for income taxes, a data point disclosed on the cash flow statement or in the notes.",
  },
  cashPaidForInterest: {
    checked: false,
    label: "Cash Paid for Interest",
    value: 0,
    type: "number",
    description:
      "Cash paid for interest, a data point disclosed on the cash flow statement or in the notes.",
  },
  cashRestricted: {
    checked: false,
    label: "Long-term Restricted Cash",
    value: 0,
    type: "number",
    description: "Restricted cash, a long-term asset on the balance sheet.",
  },
  chargeAfterTax: {
    checked: false,
    label: "Reported After-Tax Non-Operating Expense/(Income), Net",
    value: 0,
    type: "number",
    description:
      "Net After-Tax Non-Operating Expense/(Income) are the net of non-operating expenses and income that appear directly on the income statement after tax. We classify Non-Operating After-Tax Expenses into the following types:__",
  },
  chargeAfterTaxDiscontinuedOperations: {
    checked: false,
    label: "Reported Loss/(Gain) from Discontinued Operations After-Tax, Net",
    value: 0,
    type: "number",
    description:
      "HBS & MIT Sloan Data. Reported Loss/(Gain) from Discontinued Operations, net is the after-tax expense from assets or subsidiaries that are held for sale.",
  },
  chargesAfterTaxOther: {
    checked: false,
    label: "Reported Other After-Tax Charges, Net",
    value: 0,
    type: "number",
    description:
      "HBS & MIT Sloan Data. Reported Other After-tax Charges, net are other non-operating expenses and income that appear directly on the income statement after tax.",
  },

  creditLossProvision: {
    checked: false,
    label: "Credit Loss Provision",
    value: 0,
    type: "number",
    description:
      "Credit loss provision, an expense on the income statement recognized by financial companies or segments.",
  },

  daysInAccountsPayable: {
    checked: false,
    label: "Days in Accounts Payable",
    value: 0,
    type: "number",
    description:
      "Days in accounts payable shows the average number of days it takes a company to pay its bills.",
  },
  daysInInventory: {
    checked: false,
    label: "Days in Inventory",
    value: 0,
    type: "number",
    description:
      "The days in inventory ratio shows how quickly, in days, a company is converting its inventory into revenue.",
  },
  daysInRevenueDeferred: {
    checked: false,
    label: "Days in Deferred Revenue",
    value: 0,
    type: "number",
    description:
      "Days in deferred revenue shows the average number of days it takes a company to collect on deferred revenue.",
  },
  daysRevenueOutstanding: {
    checked: false,
    label: "Days Revenue Outstanding",
    value: 0,
    type: "number",
    description:
      "Days in revenue outstanding shows the average number of days it takes a compnay to collect payment after a sale has been made.",
  },
  debtFinancial: {
    checked: false,
    label: "Investment Liabilities - Debt",
    value: 0,
    type: "number",
    description:
      "Short-term and long-term debt for financial companies or segments.",
  },
  debtShortTerm: {
    checked: false,
    label: "Short-Term Debt",
    value: 0,
    type: "number",
    description: "Short-term debt, a current liability on the balance sheet.",
  },
  depreciationAndAmortizationAccumulated: {
    checked: false,
    label: " 	Accumulated Depreciation and Amortization",
    value: 0,
    type: "number",
    description:
      "Accumulated depreciation and amortization, a data point collected from the balance sheet or notes.",
  },
  depreciationAndAmortizationCashFlow: {
    checked: false,
    label: "Depreciation and Amortization (Cash Flow)",
    value: 0,
    type: "number",
    description:
      "Depreciation and amortization from cash flows from operations section of the cash flow statement.",
  },
  dividendsPreferred: {
    checked: false,
    label: "Reported Preferred Dividends, Net",
    value: 0,
    type: "number",
    description:
      "Reported Preferred Stock Dividends, net are the dividends that must be paid out to preferred equity owners before common stock owners can receive any money.",
  },
  dividendsPreferredRedeemableMandatorily: {
    checked: false,
    label: "Reported Dividends on Redeemable Preferred Stock, Net",
    value: 0,
    type: "number",
    description: "",
  },
  earningsRetained: {
    checked: false,
    label: "Retained Earnings",
    value: 0,
    type: "number",
    description:
      "Retained earnings, from the shareholders’ equity section of the balance sheet.",
  },
  ebitReported: {
    checked: false,
    label: "Reported EBIT",
    value: 0,
    type: "number",
    description:
      "Reported operating earnings before interest and taxes. This version of EBIT uses only reported data from the income statment and is not adjusted for unusual gains/losses found only in the footnotes or MD&A.",
  },
  ebitdaReported: {
    checked: false,
    label: "Reported EBITDA",
    value: 0,
    type: "number",
    description:
      "Reported operating earnings before interest, taxes, depreciation and amortization. This version of EBITDA uses only reported data from the income statment and is not adjusted for unusual gains/losses found only in the footnotes or MD&A.",
  },
  equityShareholder: {
    checked: false,
    label: "Total Shareholders’ Equity",
    value: 0,
    type: "number",
    description:
      "Total shareholders’ equity, from the shareholders’ equity section of the balance sheet.",
  },
  equityShareholderOther: {
    checked: false,
    label: "Other Shareholders’ Equity",
    value: 0,
    type: "number",
    description:
      "Other shareholders’ equity, from the shareholders’ equity section of the balance sheet.",
  },
  equityShareholderOtherDeferredCompensation: {
    checked: false,
    label: "Deferred Compensation Shareholders’ Equity",
    value: 0,
    type: "number",
    description:
      "Deferred compensation shareholder’s equity, from the shareholders’ equity section of the balance sheet.",
  },
  equityShareholderOtherEquity: {
    checked: false,
    label: "Other Shareholders’ Equity",
    value: 0,
    type: "number",
    description:
      "Other shareholders’ equity, from the shareholders’ equity section of the balance sheet.",
  },
  equityShareholderOtherMezzanine: {
    checked: false,
    label: "Mezzanine Shareholders’ Equity",
    value: 0,
    type: "number",
    description:
      "Mezzanine shareholders’ equity, from the shareholders’ equity section of the balance sheet.",
  },
  expenses: {
    checked: false,
    label: "Total Expenses",
    value: 0,
    type: "number",
    description: "Total Expenses",
  },
  expensesAcquisitionMerger: {
    checked: false,
    label: "Reported Acquisition and Merger Expenses, Net",
    value: 0,
    type: "number",
    description:
      "HBS & MIT Sloan Data. Reported Acquisition and Merger Expenses, net are the net of non-operating expenses related to an acquisition or merger that appear directly on the income statement.",
  },
  expensesCompensation: {
    checked: false,
    label: "Other Compensation",
    value: 0,
    type: "number",
    description: "Other compensation, an expense on the income statement.",
  },
  expensesDepreciationAndAmortization: {
    checked: false,
    label: "Depreciation and Amortization",
    value: 0,
    type: "number",
    description:
      "Depreciation and amortization, an expense on the income statement.",
  },
  expensesDerivative: {
    checked: false,
    label: "Reported Derivate Related Expenses, Net",
    value: 0,
    type: "number",
    description:
      "HBS & MIT Sloan Data. Reported Derivative Related Expenses, net are the net of non-operating expenses related to derivatives that appear directly on the income statement.",
  },
  expensesDiscontinuedOperations: {
    checked: false,
    label: "Reported Expenses/(Income) from Discontinued Operations, Net",
    value: 0,
    type: "number",
    description:
      "HBS & MIT Sloan Data. Reported Expenses/(Income) from Discontinued Operations, net are non-operating expenses associated with businesses or subsidiaries that are held for sale. These expenses appear directly on the income statement.",
  },
  expensesDiscontinuedOperationsReits: {
    checked: false,
    label: "Losses from Discontinued Operations (Operating)",
    value: 0,
    type: "number",
    description: "Losses from discontinued operations for REITs.",
  },
  expensesEnergy: {
    checked: false,
    label: "Energy Operating Expense",
    value: 0,
    type: "number",
    description:
      "Energy expense, an expense on the income statement for energy companies.",
  },
  expensesForeignCurrency: {
    checked: false,
    label: "Reported Foreign Currency Expenses, Net",
    value: 0,
    type: "number",
    description:
      "HBS & MIT Sloan Data. Reported Foreign Currency Loss/(Gain), net is a non-operating expense related to the changes in the value of foreign currency that appears directly on the income statement.",
  },
  expensesInterest: {
    checked: false,
    label: "Reported Interest Expense/(Income), Net",
    value: 0,
    type: "number",
    description:
      "Reported Interest Expense/(Income), net is a non-operating expense related to the cost of financing that appears directly on the income statement.",
  },
  expensesInterestFinancials: {
    checked: false,
    label: "Interest Expense (Operating)",
    value: 0,
    type: "number",
    description:
      "Interest expense, an exense on the income statement for financial companies or financial segments.",
  },
  expensesInterestMinority: {
    checked: false,
    label: "Reported Minority Interest Expense, Net",
    value: 0,
    type: "number",
    description:
      "Reported Minority Interest Expenses, net are the net of non-operating expenses associated with significant but non-controlling ownership of a company’s voting shares. The portion of the parent company’s income attributed to minority interest is subtracted from reported profits.",
  },
  expensesLegalRegulatoryInsurance: {
    checked: false,
    label: "Reported Legal, Regulatory, and Insurance Related Expenses, Net",
    value: 0,
    type: "number",
    description:
      "HBS & MIT Sloan Data. Reported Legal, Regulatory, and Insurance Related Expenses, net are the net of non-operating expenses related to legal, regulatory, and insurance costs that appear directly on the income statement.",
  },
  expensesNonOperatingCompanyDefinedOther: {
    checked: false,
    label: "Reported Company Defined Other Non-Operating Expenses, Net",
    value: 0,
    type: "number",
    description:
      "HBS & MIT Sloan Data. Reported Company Defined Other Non-Operating Expenses, net are the net of non-operating expenses for costs specifically defined as other that appear directly on the income statement.",
  },
  expensesNonOperatingOther: {
    checked: false,
    label: "Reported Other Non-Operating Expense/(Income), Net",
    value: 0,
    type: "number",
    description:
      "HBS & MIT Sloan Data. Reported Other Non-Operating Expenses/(Income), net are non-operating expenses for other costs that appear directly on the income statement.",
  },
  expensesNonOperatingSubsidiaryUnconsolidated: {
    checked: false,
    label: "Reported Losses/(Income) from Unconsolidated Subsidiaries, Net",
    value: 0,
    type: "number",
    description:
      "Reported Losses/(Income) from Unconsolidated Subsidiaries, net are non-operating expenses associated with subsidiaries that are not consolidated within the parent company’s financial statements. These expenses appear directly on the income statement.",
  },
  expensesNonRecurringOther: {
    checked: false,
    label: "Reported Other Non-Recurring Expense/(Income), Net",
    value: 0,
    type: "number",
    description:
      "HBS & MIT Sloan Data. Reported Other Non-Recurring Expenses/(Income), net are non-operating expenses for other costs that appear directly on the income statement. These costs should not recur in the future.",
  },
  expensesOperating: {
    checked: false,
    label: "Total Operating Expense",
    value: 0,
    type: "number",
    description: "Total operating expenses disclosed on the income statement.",
  },
  expensesOperatingOther: {
    checked: false,
    label: "Other Operating Expense",
    value: 0,
    type: "number",
    description: "Other operating expense, an expense on the income statement.",
  },
  expensesOperatingSubsidiaryUnconsolidated: {
    checked: false,
    label: "Losses from Unconsolidated Subsidiaries (Operating)",
    value: 0,
    type: "number",
    description:
      "Losses from unconsolidated subsidiaries, treated as operating if the corresponding asset is operating.",
  },
  expensesOreo: {
    checked: false,
    label:
      "Reported Non-Operating Other Real Estate Owned Expense/(Income), Net",
    value: 0,
    type: "number",
    description:
      "HBS & MIT Sloan Data. Reported Non-Operating Other Real Estate Owned Expenses/(Income), net are non-operating expenses associated with foreclosed assets owned or controlled by a bank. These expenses appear directly on the income statement.",
  },
  expensesOreoReits: {
    checked: false,
    label: "Operating Other Real Estate Owned Expense",
    value: 0,
    type: "number",
    description:
      "Other real estate owned (OREO) expense, an expense on the income statement.",
  },
  expensesOtherFinancing: {
    checked: false,
    label: "Reported Other Financing Expenses, Net",
    value: 0,
    type: "number",
    description:
      "HBS & MIT Sloan Data. Reported Other Financing Expenses, net are the net of non-operating expenses related to the cost of financing that appear directly on the income statement.",
  },
  expensesRestructuring: {
    checked: false,
    label: "Reported Restructuring Expenses, Net",
    value: 0,
    type: "number",
    description:
      "HBS & MIT Sloan Data. Reported Restructuring Expenses, net are the net of non-operating expenses related to the reorganization of a business that appear directly on the income statement.",
  },
  expensesSga: {
    checked: false,
    label: "Selling, General, and Administrative Expense",
    value: 0,
    type: "number",
    description:
      "Selling, general, and administrative, an expense on the income statement.",
  },
  expensesStockCompensation: {
    checked: false,
    label: "Stock Compensation",
    value: 0,
    type: "number",
    description: "Stock compensation, an expense on the income statement.",
  },
  expensesWriteDown: {
    checked: false,
    label: "Reported Write-Downs (Non-Operating), Net",
    value: 0,
    type: "number",
    description:
      "HBS & MIT Sloan Data. Reported Write-Downs, net are non-operating expenses related to the impairment in value of a company’s assets. These expenses appear directly on the income statement.",
  },
  ffo: {
    checked: false,
    label: "Funds from Operations",
    value: 0,
    type: "number",
    description: "Funds from Operations",
  },
  goodwillAmortizationCashFlow: {
    checked: false,
    label: "Goodwill Amortization (Cash Flow Statement)",
    value: 0,
    type: "number",
    description:
      "Goodwill amortization, from cash flows from operations section of the cash flow statement, collected prior to 2001 when companies where permitted to amortize goodwill.",
  },
  goodwillAmortizationIncomeStatement: {
    checked: false,
    label: "Goodwill Amortization",
    value: 0,
    type: "number",
    description:
      "Goodwill amortization, a data point on the income statement collected prior to 2001 when companies where permitted to amortize goodwill.",
  },
  goodwillAndIntangiblesNetOther: {
    checked: false,
    label: "Other Intangibles",
    value: 0,
    type: "number",
    description:
      "Goodwill and intangible assets, net, a long-term asset reported on the balance sheet.",
  },
  goodwillNet: {
    checked: false,
    label: "Goodwill, net",
    value: 0,
    type: "number",
    description:
      "Goodwill, net, a long-term asset reported on the balance sheet.",
  },
  incomeFromOperations: {
    checked: false,
    label: "Reported Income from Operations",
    value: 0,
    type: "number",
    description:
      "Reported income from operations, an item on the income statement.",
  },
  incomeNet: {
    checked: false,
    label: "GAAP Net Income",
    value: 0,
    type: "number",
    description: "GAAP net income.",
  },
  incomeNetPerRevenue: {
    checked: false,
    label: "GAAP Net Income Margin",
    value: 0,
    type: "number",
    description: "GAAP net income margin.",
  },
  incomeNetPerWabso: {
    checked: false,
    label: "Basic EPS (Not Split-Adjusted)",
    value: 0,
    type: "number",
    description: "Basic earnings per share (not split-adjusted).",
  },
  incomeNetPerWabsoSplitAdjusted: {
    checked: false,
    label: "Basic EPS",
    value: 0,
    type: "number",
    description: "Basic earnings per share.",
  },
  incomeNetPerWabsoSplitAdjustedYoyDeltaPercent: {
    checked: false,
    label: "Basic EPS Annual Growth",
    value: 0,
    type: "number",
    description: "Percent growth in basic earnings per share year over year.",
  },
  incomeNetPerWadso: {
    checked: false,
    label: "Diluted GAAP EPS (Not Split-Adjusted)",
    value: 0,
    type: "number",
    description: "Diluted earnings per share (not split-adjusted).",
  },
  incomeNetPerWadsoSplitAdjusted: {
    checked: false,
    label: "Diluted GAAP EPS",
    value: 0,
    type: "number",
    description: "Diluted earnings per share.",
  },
  incomeNetPerWadsoSplitAdjustedYoyDeltaPercent: {
    checked: false,
    label: "Diluted GAAP EPS Annual Growth",
    value: 0,
    type: "number",
    description: "Percent growth in diluted earnings per share year over year.",
  },
  incomeNetPreTax: {
    checked: false,
    label: "Pre-Tax Income",
    value: 0,
    type: "number",
    description: "Pre-tax income.",
  },
  incomeNetYoyDelta: {
    checked: false,
    label: "Annual Change in Net Income",
    value: 0,
    type: "number",
    description: "The change in Net Income year over year.",
  },
  incomeOperating: {
    checked: false,
    label: "Total Operating Income",
    value: 0,
    type: "number",
    description:
      "Sum of a company’s operating income derived outside of revenues.",
  },
  incomeOperatingDiscontinuedOperations: {
    checked: false,
    label: "Income from Discontinued Operations (Operating)",
    value: 0,
    type: "number",
    description:
      "Income from discontinued operations, an item on the income statement for REITs.",
  },
  incomeOperatingOther: {
    checked: false,
    label: "Other Operating Income",
    value: 0,
    type: "number",
    description: "Other operating income.",
  },
  incomeOperatingSubsidiaryUnconsolidated: {
    checked: false,
    label: "Income from Unconsolidated Subsidiaries (Operating)",
    value: 0,
    type: "number",
    description:
      "Income from unconsolidated subsidiaries, an operating item on the income statement.",
  },
  incomeOperatingSubsidiaryUnconsolidatedAfterTax: {
    checked: false,
    label: "Income from Unconsolidated Subsidiaries After-tax (Operating)",
    value: 0,
    type: "number",
    description:
      "Income from unconsolidated subsidiaries after-tax, an operating item on the income statement.",
  },
  incomeTax: {
    checked: false,
    label: "Income Tax Provision",
    value: 0,
    type: "number",
    description:
      "A line item on a company’s income statement representing its estimated tax liability or benefit for the current year.",
  },
  incomeTaxCurrent: {
    checked: false,
    label: "Total Current Income Taxes",
    value: 0,
    type: "number",
    description: "Current income taxes payable.",
  },
  incomeTaxDeferred: {
    checked: false,
    label: "Total Deferred Income Taxes",
    value: 0,
    type: "number",
    description: "Deferred income taxes.",
  },
  incomeTaxDiscontinuedOperations: {
    checked: false,
    label: "Income Tax Expense/(Benefit) - Discontinued Operations",
    value: 0,
    type: "number",
    description: "Income tax expense/(benefit) from discontinued operations.",
  },
  incomeTaxOther: {
    checked: false,
    label: "Income Tax Expense/(Benefit) - Other",
    value: 0,
    type: "number",
    description: "Other income tax expense/(benefit).",
  },
  incomeTaxRate: {
    checked: false,
    label: "Effective Income Tax Rate",
    value: 0,
    type: "number",
    description: "The reported, effective income tax rate.",
  },
  interestMinority: {
    checked: false,
    label: "Minority Interests",
    value: 0,
    type: "number",
    description:
      "Minority interests, a component of shareholder’s equity representing a significant but non-controlling ownership of a company’s voting shares by either an investor or another company.",
  },
  inventory: {
    checked: false,
    label: "Inventory",
    value: 0,
    type: "number",
    description: "Inventory, a current asset on the balance sheet.",
  },
  inventoryTurnover: {
    checked: false,
    label: "Inventory Turnover",
    value: 0,
    type: "number",
    description:
      "Inventory turnover shows how many times a company has sold and replaced inventory during the period.",
  },
  liabilities: {
    checked: false,
    label: "Total Liabilities and Shareholders’ Equity",
    value: 0,
    type: "number",
    description: "Total liabilities and shareholders’ equity.",
  },
  liabilitiesCurrent: {
    checked: false,
    label: "Total Current/Investment Liabilities",
    value: 0,
    type: "number",
    description: "Total current/investment liabilities.",
  },
  liabilitiesNonCurrentAndInterestMinorityTotal: {
    checked: false,
    label: "Total Long-term Liabilities and Minority Interest",
    value: 0,
    type: "number",
    description: "Total Long-term Liabilities and Minority Interest",
  },
  liabilitiesNonCurrentDebt: {
    checked: false,
    label: "Long-Term Debt",
    value: 0,
    type: "number",
    description: "Long-term debt, a long-term, liability on the balance sheet.",
  },
  liabilitiesNonCurrentDeferredCompensation: {
    checked: false,
    label: "Reported Deferred Compensation Liability",
    value: 0,
    type: "number",
    description:
      "Long-term deferred compensation liability, a long-term liability on the balance sheet.",
  },
  liabilitiesNonCurrentDeferredTax: {
    checked: false,
    label: "Reported Deferred Tax Liability",
    value: 0,
    type: "number",
    description:
      "Long-term deferred tax liabilities, a long-term liability on the balance sheet.",
  },
  liabilitiesNonCurrentDiscontinuedOperations: {
    checked: false,
    label: "Discontinued Operations (Non-Operating)",
    value: 0,
    type: "number",
    description:
      "Long-term discontinued operations, a long-term liability on the balance sheet.",
  },
  liabilitiesNonCurrentLeasesOperating: {
    checked: false,
    label: "Reported Non-Current Operating Lease Liabilities",
    value: 0,
    type: "number",
    description:
      "Long-term operating lease liability, a long-term liability on the balance sheet.",
  },
  liabilitiesNonCurrentLongTerm: {
    checked: false,
    label: "Discontinued Long-term Liabilities",
    value: 0,
    type: "number",
    description: "Long-term discontinued liabilities.",
  },
  liabilitiesNonCurrentOperatingDiscontinuedOperations: {
    checked: false,
    label: "Discontinued Operations (Operating)",
    value: 0,
    type: "number",
    description:
      "Long-term discontinued operations, a long-term liability on the balance sheet for REITs.",
  },
  liabilitiesNonCurrentOther: {
    checked: false,
    label: "Other Long-term Liabilities",
    value: 0,
    type: "number",
    description:
      "Other long-term liabilities, a long-term liability on the balance sheet.",
  },
  nibclDeferredCompensation: {
    checked: false,
    label: "Reported Current Deferred Compensation Liability",
    value: 0,
    type: "number",
    description:
      "Current deferred compensation liability, a current liability on the balance sheet.",
  },
  nibclDeferredTax: {
    checked: false,
    label: "Reported Current Deferred Tax Liability",
    value: 0,
    type: "number",
    description:
      "Current deferred tax liability, a current liability on the balance sheet.",
  },
  nibclDiscontinuedOperations: {
    checked: false,
    label: "Current Discontinued Operations (Non-Operating)",
    value: 0,
    type: "number",
    description:
      "Current liability for discontinued operations, a current liability on the balance sheet.",
  },
  nibclLeasesOperating: {
    checked: false,
    label: "Reported Current Operating Lease Liabilities",
    value: 0,
    type: "number",
    description:
      "Current operating lease liabilities, a current liability on the balance sheet.",
  },
  nibclOther: {
    checked: false,
    label: "Other NIBCL or Investment Liabilities",
    value: 0,
    type: "number",
    description:
      "Other non-interest bearing current liabilities or investment liabilities, a current liability on the balance sheet.",
  },
  nibclRestructuring: {
    checked: false,
    label: "Accrued Restructuring Charges",
    value: 0,
    type: "number",
    description:
      "Current liability for restructuring charges, a current liability on the balance sheet.",
  },
  nibclRevenueDeferred: {
    checked: false,
    label: "Current Deferred Revenue",
    value: 0,
    type: "number",
    description:
      "Current deferred revenue, a current liability on the balance sheet.",
  },
  nibclRevenueDeferredTurnover: {
    checked: false,
    label: "Deferred Revenue Turnover",
    value: 0,
    type: "number",
    description: "Deferred revenue turnover",
  },
  nibclSeparateAccounts: {
    checked: false,
    label: "Separate Accounts",
    value: 0,
    type: "number",
    description: "Separate accounts, a current liability on the balance sheet.",
  },
  oci: {
    checked: false,
    label: "Accumulated OCI (Other Comprehensive Income)",
    value: 0,
    type: "number",
    description:
      "Accumulated Other Comprehensive Income, from the shareholders’ equity section of the balance sheet.",
  },

  ppAndENet: {
    checked: false,
    label: "Net Property, Plant, and Equipment",
    value: 0,
    type: "number",
    description:
      "Property, plant, and equipment, net, a fixed asset on the balance sheet.",
  },
  pricePerEarnings: {
    checked: false,
    label: "P/E (Price/Earnings Multiple)",
    value: 0,
    type: "number",
    description: "Traditional P/E multiple",
  },
  pricePerEarningsPerRevenueYoyDeltaPercent: {
    checked: false,
    label: "P/E Per Revenue Growth",
    value: 0,
    type: "number",
    description:
      "Traditional P/E multiple divided by the annual percent change in revenue.",
  },
  profitGross: {
    checked: false,
    label: "Gross Profit",
    value: 0,
    type: "number",
    description: "Gross Profit",
  },
  profitGrossPerRevenue: {
    checked: false,
    label: "Gross Margin",
    value: 0,
    type: "number",
    description: "Gross Profit Margin",
  },

  researchAndDevelopmentExpense: {
    checked: false,
    label: "Research and Development Expense",
    value: 0,
    type: "number",
    description:
      "Research and development expense, an expense on the income statement.",
  },
  reserves: {
    checked: false,
    label: "Total Reserves",
    value: 0,
    type: "number",
    description:
      "Sum of the current ending reserve balances for LIFO, inventory, and loan loss reserves.",
  },
  reservesInventory: {
    checked: false,
    label: "Inventory Reserves",
    value: 0,
    type: "number",
    description: "Inventory reserve from the current year.",
  },
  reservesLifo: {
    checked: false,
    label: "LIFO Reserves",
    value: 0,
    type: "number",
    description: "LIFO reserve from the current year.",
  },
  reservesLoanLoss: {
    checked: false,
    label: "Loan Loss Reserves",
    value: 0,
    type: "number",
    description: "Loan loss reserve from the current year.",
  },
  revenue: {
    checked: false,
    label: "Total Revenue",
    value: 0,
    type: "number",
    description: "Total revenue as reported on the income statement.",
  },
  revenueCostOther: {
    checked: false,
    label: "Cost of Sales",
    value: 0,
    type: "number",
    description: "Cost of sales, an expense on the income statement.",
  },
  revenueIncomeInterest: {
    checked: false,
    label: "Interest Income",
    value: 0,
    type: "number",
    description:
      "Interest income for financials, an item on the income statement.",
  },
  revenueOther: {
    checked: false,
    label: "Operating Revenue",
    value: 0,
    type: "number",
    description: "Revenue, an item on the income statement.",
  },
  revenueSubsidiaryUnconsolidated: {
    checked: false,
    label: "Unconsolidated Subsidiary Revenue",
    value: 0,
    type: "number",
    description:
      "Unconsolidated subsidiary revenue, an item on the income statement.",
  },
  salesCost: {
    checked: false,
    label: "Total Cost of Sales",
    value: 0,
    type: "number",
    description: "Total cost of sales, an expense on the income statement.",
  },
  sharesIssued: {
    checked: false,
    label: "Shares Issued (Not Split-Adjusted)",
    value: 0,
    type: "number",
    description: "Shares issued (not split-adjusted).",
  },
  sharesOutstandingPeDateBs: {
    checked: false,
    label: "Shares Outstanding on the PE Date (Not Split-Adjusted)",
    value: 0,
    type: "number",
    description:
      "Shares outstanding on the period end date (not split-adjusted).",
  },
  sharesTreasury: {
    checked: false,
    label: "Treasury Shares (not split-adjusted)",
    value: 0,
    type: "number",
    description: "Treasury shares (not split-adjusted).",
  },
  stockCommon: {
    checked: false,
    label: "Common Stock",
    value: 0,
    type: "number",
    description:
      "Common stock, from the shareholders’ equity section of the balance sheet.",
  },
  stockPreferred: {
    checked: false,
    label: "Preferred Capital",
    value: 0,
    type: "number",
    description:
      "Total preferred stock from the Shareholder’s Equity section of the balance sheet and the Mezzanine section of the balance sheet.",
  },
  stockPreferredEquity: {
    checked: false,
    label: "Preferred Stock",
    value: 0,
    type: "number",
    description:
      "Preferred stock, from the shareholders’ equity section of the balance sheet.",
  },
  stockPreferredMezzanine: {
    checked: false,
    label: "Preferred Stock - Mezzanine",
    value: 0,
    type: "number",
    description:
      "Preferred stock - mezzanine, from the mezzanine section of the balance sheet.",
  },
  stockTreasury: {
    checked: false,
    label: "Treasury Stock",
    value: 0,
    type: "number",
    description:
      "Treasury stock, from the shareholders’ equity section of the balance sheet.",
  },

  wabso: {
    checked: false,
    label: "Basic Weighted Avg. Shares (Not Split-Adjusted)",
    value: 0,
    type: "number",
    description: "Basic weighted average shares (not split-adjusted).",
  },
  wabsoSplitAdjusted: {
    checked: false,
    label: "Basic Weighted Avg. Shares",
    value: 0,
    type: "number",
    description:
      "Weighted average basic shares oustanding as reported on the income statment, adjusted for stock splits.",
  },
  wadso: {
    checked: false,
    label: "Diluted Weighted Avg. Shares (Not Split-Adjusted)",
    value: 0,
    type: "number",
    description: "Diluted weighted average shares (not split-adjusted).",
  },
  wadsoSplitAdjusted: {
    checked: false,
    label: "Weighted Average Diluted Shares Outstanding (Split Adjusted)",
    value: 0,
    type: "number",
    description:
      "Weighted average diluted shares oustanding as reported on the income statment, adjusted for stock splits.",
  },
};

export default advancedFundamentalsState;
