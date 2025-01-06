// src/components/Projects/BetterBooks/SampleData.js
export const SAMPLE_DATA = {
    "2024-01": [
      {
        "accounts": {
          "name": "Income",
          "amount": "50000",
          "type": "section_header",
          "children": [
            {
              "name": "Sales Revenue",
              "amount": "30000",
              "type": "data"
            },
            {
              "name": "Service Revenue",
              "amount": "20000",
              "type": "data"
            }
          ],
          "summary": {
            "name": "Total Income",
            "amount": "50000"
          }
        }
      },
      {
        "accounts": {
          "name": "Expenses",
          "amount": "30000",
          "type": "section_header",
          "children": [
            {
              "name": "Salaries",
              "amount": "20000",
              "type": "data"
            },
            {
              "name": "Rent",
              "amount": "10000",
              "type": "data"
            }
          ],
          "summary": {
            "name": "Total Expenses",
            "amount": "30000"
          }
        }
      }
    ]
  };