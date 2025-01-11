export const SAMPLE_PL_DETAIL_DATA = {
  "Header": {
   "Time": "2025-01-11T10:12:01-08:00",
   "ReportName": "ProfitAndLossDetail",
   "ReportBasis": "Accrual",
   "StartPeriod": "2024-12-01",
   "EndPeriod": "2024-12-31",
   "Currency": "USD",
   "Option": [
    {
     "Name": "NoReportData",
     "Value": "false"
    }
   ]
  },
  "Columns": {
   "Column": [
    {
     "ColTitle": "Date",
     "ColType": "Date",
     "MetaData": [
      {
       "Name": "ColKey",
       "Value": "tx_date"
      }
     ]
    },
    {
     "ColTitle": "Transaction Type",
     "ColType": "String",
     "MetaData": [
      {
       "Name": "ColKey",
       "Value": "txn_type"
      }
     ]
    },
    {
     "ColTitle": "Num",
     "ColType": "String",
     "MetaData": [
      {
       "Name": "ColKey",
       "Value": "doc_num"
      }
     ]
    },
    {
     "ColTitle": "Name",
     "ColType": "String",
     "MetaData": [
      {
       "Name": "ColKey",
       "Value": "name"
      }
     ]
    },
    {
     "ColTitle": "Memo/Description",
     "ColType": "String",
     "MetaData": [
      {
       "Name": "ColKey",
       "Value": "memo"
      }
     ]
    },
    {
     "ColTitle": "Split",
     "ColType": "String",
     "MetaData": [
      {
       "Name": "ColKey",
       "Value": "split_acc"
      }
     ]
    },
    {
     "ColTitle": "Amount",
     "ColType": "Money",
     "MetaData": [
      {
       "Name": "ColKey",
       "Value": "subt_nat_amount"
      }
     ]
    },
    {
     "ColTitle": "Balance",
     "ColType": "Money",
     "MetaData": [
      {
       "Name": "ColKey",
       "Value": "rbal_nat_amount"
      }
     ]
    }
   ]
  },
  "Rows": {
   "Row": [
    {
     "Header": {
      "ColData": [
       {
        "value": "Ordinary Income/Expenses"
       },
       {
        "value": ""
       },
       {
        "value": ""
       },
       {
        "value": ""
       },
       {
        "value": ""
       },
       {
        "value": ""
       },
       {
        "value": ""
       },
       {
        "value": ""
       }
      ]
     },
     "Rows": {
      "Row": [
       {
        "Rows": {},
        "Summary": {
         "ColData": [
          {
           "value": "Gross Profit"
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": "2327.25"
          },
          {
           "value": ""
          }
         ]
        },
        "type": "Section"
       },
       {
        "Header": {
         "ColData": [
          {
           "value": "Income"
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          }
         ]
        },
        "Rows": {
         "Row": [
          {
           "Header": {
            "ColData": [
             {
              "value": "Design income",
              "id": "82"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             }
            ]
           },
           "Rows": {
            "Row": [
             {
              "ColData": [
               {
                "value": "2024-12-01"
               },
               {
                "value": "Invoice",
                "id": "34"
               },
               {
                "value": "1010"
               },
               {
                "value": "Weiskopf Consulting",
                "id": "29"
               },
               {
                "value": "Custom Design"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "375.00"
               },
               {
                "value": "375.00"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-01"
               },
               {
                "value": "Invoice",
                "id": "49"
               },
               {
                "value": "1015"
               },
               {
                "value": "Paulsen Medical Supplies",
                "id": "18"
               },
               {
                "value": "Custom Design"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "300.00"
               },
               {
                "value": "675.00"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-02"
               },
               {
                "value": "Invoice",
                "id": "103"
               },
               {
                "value": "1033"
               },
               {
                "value": "Geeta Kalapatapu",
                "id": "10"
               },
               {
                "value": "Custom Design"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "262.50"
               },
               {
                "value": "937.50"
               }
              ],
              "type": "Data"
             }
            ]
           },
           "Summary": {
            "ColData": [
             {
              "value": "Total for Design income"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": "937.50"
             },
             {
              "value": ""
             }
            ]
           },
           "type": "Section"
          },
          {
           "Header": {
            "ColData": [
             {
              "value": "Discounts given",
              "id": "86"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             }
            ]
           },
           "Rows": {
            "Row": [
             {
              "ColData": [
               {
                "value": "2024-12-01"
               },
               {
                "value": "Invoice",
                "id": "49"
               },
               {
                "value": "1015"
               },
               {
                "value": "Paulsen Medical Supplies",
                "id": "18"
               },
               {
                "value": "Discount"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "-50.25"
               },
               {
                "value": "-50.25"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-01"
               },
               {
                "value": "Sales Receipt",
                "id": "38"
               },
               {
                "value": "1011"
               },
               {
                "value": "Pye's Cakes",
                "id": "15"
               },
               {
                "value": "Discount"
               },
               {
                "value": "Undeposited Funds",
                "id": "4"
               },
               {
                "value": "-8.75"
               },
               {
                "value": "-59.00"
               }
              ],
              "type": "Data"
             }
            ]
           },
           "Summary": {
            "ColData": [
             {
              "value": "Total for Discounts given"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": "-59.00"
             },
             {
              "value": ""
             }
            ]
           },
           "type": "Section"
          },
          {
           "Header": {
            "ColData": [
             {
              "value": "Landscaping Services",
              "id": "45"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             }
            ]
           },
           "Rows": {
            "Row": [
             {
              "Rows": {
               "Row": [
                {
                 "ColData": [
                  {
                   "value": "2024-12-01"
                  },
                  {
                   "value": "Invoice",
                   "id": "65"
                  },
                  {
                   "value": "1019"
                  },
                  {
                   "value": "Sushi by Katsuyuki",
                   "id": "25"
                  },
                  {
                   "value": "Weekly Gardening Service"
                  },
                  {
                   "value": "Accounts Receivable (A/R)",
                   "id": "84"
                  },
                  {
                   "value": "80.00"
                  },
                  {
                   "value": "80.00"
                  }
                 ],
                 "type": "Data"
                },
                {
                 "ColData": [
                  {
                   "value": "2024-12-02"
                  },
                  {
                   "value": "Invoice",
                   "id": "106"
                  },
                  {
                   "value": "1034"
                  },
                  {
                   "value": "Rondonuwu Fruit and Vegi",
                   "id": "21"
                  },
                  {
                   "value": "Tree and Shrub Trimming"
                  },
                  {
                   "value": "Accounts Receivable (A/R)",
                   "id": "84"
                  },
                  {
                   "value": "30.00"
                  },
                  {
                   "value": "110.00"
                  }
                 ],
                 "type": "Data"
                },
                {
                 "ColData": [
                  {
                   "value": "2024-12-03"
                  },
                  {
                   "value": "Invoice",
                   "id": "129"
                  },
                  {
                   "value": "1036"
                  },
                  {
                   "value": "Freeman Sporting Goods:0969 Ocean View Road",
                   "id": "8"
                  },
                  {
                   "value": "Weekly Gardening Service"
                  },
                  {
                   "value": "Accounts Receivable (A/R)",
                   "id": "84"
                  },
                  {
                   "value": "87.50"
                  },
                  {
                   "value": "197.50"
                  }
                 ],
                 "type": "Data"
                }
               ]
              },
              "Summary": {
               "ColData": [
                {
                 "value": "Total for Landscaping Services"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": "197.50"
                },
                {
                 "value": ""
                }
               ]
              },
              "type": "Section"
             },
             {
              "Header": {
               "ColData": [
                {
                 "value": "Job Materials"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                }
               ]
              },
              "Rows": {
               "Row": [
                {
                 "Header": {
                  "ColData": [
                   {
                    "value": "Fountains and Garden Lighting",
                    "id": "48"
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   }
                  ]
                 },
                 "Rows": {
                  "Row": [
                   {
                    "ColData": [
                     {
                      "value": "2024-12-01"
                     },
                     {
                      "value": "Invoice",
                      "id": "49"
                     },
                     {
                      "value": "1015"
                     },
                     {
                      "value": "Paulsen Medical Supplies",
                      "id": "18"
                     },
                     {
                      "value": "Rock Fountain"
                     },
                     {
                      "value": "Accounts Receivable (A/R)",
                      "id": "84"
                     },
                     {
                      "value": "275.00"
                     },
                     {
                      "value": "275.00"
                     }
                    ],
                    "type": "Data"
                   },
                   {
                    "ColData": [
                     {
                      "value": "2024-12-01"
                     },
                     {
                      "value": "Invoice",
                      "id": "49"
                     },
                     {
                      "value": "1015"
                     },
                     {
                      "value": "Paulsen Medical Supplies",
                      "id": "18"
                     },
                     {
                      "value": "Garden Rocks"
                     },
                     {
                      "value": "Accounts Receivable (A/R)",
                      "id": "84"
                     },
                     {
                      "value": "180.00"
                     },
                     {
                      "value": "455.00"
                     }
                    ],
                    "type": "Data"
                   },
                   {
                    "ColData": [
                     {
                      "value": "2024-12-02"
                     },
                     {
                      "value": "Invoice",
                      "id": "103"
                     },
                     {
                      "value": "1033"
                     },
                     {
                      "value": "Geeta Kalapatapu",
                      "id": "10"
                     },
                     {
                      "value": "Fountain Pump"
                     },
                     {
                      "value": "Accounts Receivable (A/R)",
                      "id": "84"
                     },
                     {
                      "value": "45.00"
                     },
                     {
                      "value": "500.00"
                     }
                    ],
                    "type": "Data"
                   },
                   {
                    "ColData": [
                     {
                      "value": "2024-12-02"
                     },
                     {
                      "value": "Invoice",
                      "id": "106"
                     },
                     {
                      "value": "1034"
                     },
                     {
                      "value": "Rondonuwu Fruit and Vegi",
                      "id": "21"
                     },
                     {
                      "value": "Garden Lighting"
                     },
                     {
                      "value": "Accounts Receivable (A/R)",
                      "id": "84"
                     },
                     {
                      "value": "45.00"
                     },
                     {
                      "value": "545.00"
                     }
                    ],
                    "type": "Data"
                   },
                   {
                    "ColData": [
                     {
                      "value": "2024-12-02"
                     },
                     {
                      "value": "Invoice",
                      "id": "103"
                     },
                     {
                      "value": "1033"
                     },
                     {
                      "value": "Geeta Kalapatapu",
                      "id": "10"
                     },
                     {
                      "value": "Rock Fountain"
                     },
                     {
                      "value": "Accounts Receivable (A/R)",
                      "id": "84"
                     },
                     {
                      "value": "275.00"
                     },
                     {
                      "value": "820.00"
                     }
                    ],
                    "type": "Data"
                   },
                   {
                    "ColData": [
                     {
                      "value": "2024-12-03"
                     },
                     {
                      "value": "Invoice",
                      "id": "130"
                     },
                     {
                      "value": "1037"
                     },
                     {
                      "value": "Sonnenschein Family Store",
                      "id": "24"
                     },
                     {
                      "value": "Concrete for fountain installation"
                     },
                     {
                      "value": "Accounts Receivable (A/R)",
                      "id": "84"
                     },
                     {
                      "value": "47.50"
                     },
                     {
                      "value": "867.50"
                     }
                    ],
                    "type": "Data"
                   }
                  ]
                 },
                 "Summary": {
                  "ColData": [
                   {
                    "value": "Total for Fountains and Garden Lighting"
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": "867.50"
                   },
                   {
                    "value": ""
                   }
                  ]
                 },
                 "type": "Section"
                },
                {
                 "Header": {
                  "ColData": [
                   {
                    "value": "Plants and Soil",
                    "id": "49"
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   }
                  ]
                 },
                 "Rows": {
                  "Row": [
                   {
                    "ColData": [
                     {
                      "value": "2024-12-03"
                     },
                     {
                      "value": "Invoice",
                      "id": "129"
                     },
                     {
                      "value": "1036"
                     },
                     {
                      "value": "Freeman Sporting Goods:0969 Ocean View Road",
                      "id": "8"
                     },
                     {
                      "value": "Sod"
                     },
                     {
                      "value": "Accounts Receivable (A/R)",
                      "id": "84"
                     },
                     {
                      "value": "50.00"
                     },
                     {
                      "value": "50.00"
                     }
                    ],
                    "type": "Data"
                   },
                   {
                    "ColData": [
                     {
                      "value": "2024-12-03"
                     },
                     {
                      "value": "Invoice",
                      "id": "129"
                     },
                     {
                      "value": "1036"
                     },
                     {
                      "value": "Freeman Sporting Goods:0969 Ocean View Road",
                      "id": "8"
                     },
                     {
                      "value": "2 cubic ft. bag"
                     },
                     {
                      "value": "Accounts Receivable (A/R)",
                      "id": "84"
                     },
                     {
                      "value": "50.00"
                     },
                     {
                      "value": "100.00"
                     }
                    ],
                    "type": "Data"
                   }
                  ]
                 },
                 "Summary": {
                  "ColData": [
                   {
                    "value": "Total for Plants and Soil"
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": "100.00"
                   },
                   {
                    "value": ""
                   }
                  ]
                 },
                 "type": "Section"
                }
               ]
              },
              "Summary": {
               "ColData": [
                {
                 "value": "Total for Job Materials"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": "967.50"
                },
                {
                 "value": ""
                }
               ]
              },
              "type": "Section"
             },
             {
              "Header": {
               "ColData": [
                {
                 "value": "Labor"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                }
               ]
              },
              "Rows": {
               "Row": [
                {
                 "Header": {
                  "ColData": [
                   {
                    "value": "Installation",
                    "id": "52"
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   }
                  ]
                 },
                 "Rows": {
                  "Row": [
                   {
                    "ColData": [
                     {
                      "value": "2024-12-01"
                     },
                     {
                      "value": "Invoice",
                      "id": "49"
                     },
                     {
                      "value": "1015"
                     },
                     {
                      "value": "Paulsen Medical Supplies",
                      "id": "18"
                     },
                     {
                      "value": "Installation of landscape design"
                     },
                     {
                      "value": "Accounts Receivable (A/R)",
                      "id": "84"
                     },
                     {
                      "value": "250.00"
                     },
                     {
                      "value": "250.00"
                     }
                    ],
                    "type": "Data"
                   }
                  ]
                 },
                 "Summary": {
                  "ColData": [
                   {
                    "value": "Total for Installation"
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": "250.00"
                   },
                   {
                    "value": ""
                   }
                  ]
                 },
                 "type": "Section"
                }
               ]
              },
              "Summary": {
               "ColData": [
                {
                 "value": "Total for Labor"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": "250.00"
                },
                {
                 "value": ""
                }
               ]
              },
              "type": "Section"
             }
            ]
           },
           "Summary": {
            "ColData": [
             {
              "value": "Total for Landscaping Services with sub-accounts"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": "1415.00"
             },
             {
              "value": ""
             }
            ]
           },
           "type": "Section"
          },
          {
           "Header": {
            "ColData": [
             {
              "value": "Pest Control Services",
              "id": "54"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             }
            ]
           },
           "Rows": {
            "Row": [
             {
              "ColData": [
               {
                "value": "2024-12-01"
               },
               {
                "value": "Refund",
                "id": "66"
               },
               {
                "value": "1020"
               },
               {
                "value": "Pye's Cakes",
                "id": "15"
               },
               {
                "value": "Refund - Pest control was ineffective"
               },
               {
                "value": "Checking",
                "id": "35"
               },
               {
                "value": "-87.50"
               },
               {
                "value": "-87.50"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-01"
               },
               {
                "value": "Sales Receipt",
                "id": "38"
               },
               {
                "value": "1011"
               },
               {
                "value": "Pye's Cakes",
                "id": "15"
               },
               {
                "value": "Pest Control Services"
               },
               {
                "value": "Undeposited Funds",
                "id": "4"
               },
               {
                "value": "87.50"
               },
               {
                "value": ".00"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-01"
               },
               {
                "value": "Invoice",
                "id": "69"
               },
               {
                "value": "1023"
               },
               {
                "value": "Red Rock Diner",
                "id": "20"
               },
               {
                "value": "Pest Control Services"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "70.00"
               },
               {
                "value": "70.00"
               }
              ],
              "type": "Data"
             }
            ]
           },
           "Summary": {
            "ColData": [
             {
              "value": "Total for Pest Control Services"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": "70.00"
             },
             {
              "value": ""
             }
            ]
           },
           "type": "Section"
          },
          {
           "Header": {
            "ColData": [
             {
              "value": "Sales of Product Income",
              "id": "79"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             }
            ]
           },
           "Rows": {
            "Row": [
             {
              "ColData": [
               {
                "value": "2024-12-03"
               },
               {
                "value": "Invoice",
                "id": "119"
               },
               {
                "value": "1035"
               },
               {
                "value": "Mark Cho",
                "id": "17"
               },
               {
                "value": "Sprinkler Pipes"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "16.00"
               },
               {
                "value": "16.00"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-03"
               },
               {
                "value": "Invoice",
                "id": "130"
               },
               {
                "value": "1037"
               },
               {
                "value": "Sonnenschein Family Store",
                "id": "24"
               },
               {
                "value": "Fountain Pump"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "12.75"
               },
               {
                "value": "28.75"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-03"
               },
               {
                "value": "Invoice",
                "id": "129"
               },
               {
                "value": "1036"
               },
               {
                "value": "Freeman Sporting Goods:0969 Ocean View Road",
                "id": "8"
               },
               {
                "value": "Fountain Pump"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "15.00"
               },
               {
                "value": "43.75"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-03"
               },
               {
                "value": "Invoice",
                "id": "129"
               },
               {
                "value": "1036"
               },
               {
                "value": "Freeman Sporting Goods:0969 Ocean View Road",
                "id": "8"
               },
               {
                "value": "Rock Fountain"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "275.00"
               },
               {
                "value": "318.75"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-03"
               },
               {
                "value": "Invoice",
                "id": "119"
               },
               {
                "value": "1035"
               },
               {
                "value": "Mark Cho",
                "id": "17"
               },
               {
                "value": "Rock Fountain"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "275.00"
               },
               {
                "value": "593.75"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-03"
               },
               {
                "value": "Invoice",
                "id": "130"
               },
               {
                "value": "1037"
               },
               {
                "value": "Sonnenschein Family Store",
                "id": "24"
               },
               {
                "value": "Rock Fountain"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "275.00"
               },
               {
                "value": "868.75"
               }
              ],
              "type": "Data"
             }
            ]
           },
           "Summary": {
            "ColData": [
             {
              "value": "Total for Sales of Product Income"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": "868.75"
             },
             {
              "value": ""
             }
            ]
           },
           "type": "Section"
          }
         ]
        },
        "Summary": {
         "ColData": [
          {
           "value": "Total for Income"
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": "3232.25"
          },
          {
           "value": ""
          }
         ]
        },
        "type": "Section"
       },
       {
        "Header": {
         "ColData": [
          {
           "value": "Cost of Goods Sold"
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          }
         ]
        },
        "Rows": {
         "Row": [
          {
           "Header": {
            "ColData": [
             {
              "value": "Cost of Goods Sold",
              "id": "80"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             }
            ]
           },
           "Rows": {
            "Row": [
             {
              "ColData": [
               {
                "value": "2024-12-03"
               },
               {
                "value": "Invoice",
                "id": "129"
               },
               {
                "value": "1036"
               },
               {
                "value": "Freeman Sporting Goods:0969 Ocean View Road",
                "id": "8"
               },
               {
                "value": "Rock Fountain"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "125.00"
               },
               {
                "value": "125.00"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-03"
               },
               {
                "value": "Invoice",
                "id": "119"
               },
               {
                "value": "1035"
               },
               {
                "value": "Mark Cho",
                "id": "17"
               },
               {
                "value": "Rock Fountain"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "125.00"
               },
               {
                "value": "250.00"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-03"
               },
               {
                "value": "Invoice",
                "id": "119"
               },
               {
                "value": "1035"
               },
               {
                "value": "Mark Cho",
                "id": "17"
               },
               {
                "value": "Sprinkler Pipes"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "10.00"
               },
               {
                "value": "260.00"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-03"
               },
               {
                "value": "Invoice",
                "id": "130"
               },
               {
                "value": "1037"
               },
               {
                "value": "Sonnenschein Family Store",
                "id": "24"
               },
               {
                "value": "Rock Fountain"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "125.00"
               },
               {
                "value": "385.00"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-03"
               },
               {
                "value": "Invoice",
                "id": "130"
               },
               {
                "value": "1037"
               },
               {
                "value": "Sonnenschein Family Store",
                "id": "24"
               },
               {
                "value": "Fountain Pump"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "10.00"
               },
               {
                "value": "395.00"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-03"
               },
               {
                "value": "Invoice",
                "id": "129"
               },
               {
                "value": "1036"
               },
               {
                "value": "Freeman Sporting Goods:0969 Ocean View Road",
                "id": "8"
               },
               {
                "value": "Fountain Pump"
               },
               {
                "value": "Accounts Receivable (A/R)",
                "id": "84"
               },
               {
                "value": "10.00"
               },
               {
                "value": "405.00"
               }
              ],
              "type": "Data"
             },
             {
              "ColData": [
               {
                "value": "2024-12-29"
               },
               {
                "value": "Journal Entry",
                "id": "145"
               },
               {
                "value": "1"
               },
               {
                "value": "",
                "id": ""
               },
               {
                "value": ""
               },
               {
                "value": "-Split-",
                "id": ""
               },
               {
                "value": "500.00"
               },
               {
                "value": "905.00"
               }
              ],
              "type": "Data"
             }
            ]
           },
           "Summary": {
            "ColData": [
             {
              "value": "Total for Cost of Goods Sold"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": "905.00"
             },
             {
              "value": ""
             }
            ]
           },
           "type": "Section"
          }
         ]
        },
        "Summary": {
         "ColData": [
          {
           "value": "Total for Cost of Goods Sold"
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": "905.00"
          },
          {
           "value": ""
          }
         ]
        },
        "type": "Section"
       },
       {
        "Header": {
         "ColData": [
          {
           "value": "Expenses"
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          }
         ]
        },
        "Rows": {
         "Row": [
          {
           "Header": {
            "ColData": [
             {
              "value": "Advertising",
              "id": "7"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             }
            ]
           },
           "Rows": {
            "Row": [
             {
              "ColData": [
               {
                "value": "2024-12-01"
               },
               {
                "value": "Expense",
                "id": "55"
               },
               {
                "value": ""
               },
               {
                "value": "Lee Advertising",
                "id": "42"
               },
               {
                "value": ""
               },
               {
                "value": "Mastercard",
                "id": "41"
               },
               {
                "value": "74.86"
               },
               {
                "value": "74.86"
               }
              ],
              "type": "Data"
             }
            ]
           },
           "Summary": {
            "ColData": [
             {
              "value": "Total for Advertising"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": "74.86"
             },
             {
              "value": ""
             }
            ]
           },
           "type": "Section"
          },
          {
           "Header": {
            "ColData": [
             {
              "value": "Automobile",
              "id": "55"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             }
            ]
           },
           "Rows": {
            "Row": [
             {
              "Rows": {
               "Row": [
                {
                 "ColData": [
                  {
                   "value": "2024-12-01"
                  },
                  {
                   "value": "Check",
                   "id": "138"
                  },
                  {
                   "value": "Debit"
                  },
                  {
                   "value": "Squeaky Kleen Car Wash",
                   "id": "57"
                  },
                  {
                   "value": ""
                  },
                  {
                   "value": "Checking",
                   "id": "35"
                  },
                  {
                   "value": "19.99"
                  },
                  {
                   "value": "19.99"
                  }
                 ],
                 "type": "Data"
                },
                {
                 "ColData": [
                  {
                   "value": "2024-12-08"
                  },
                  {
                   "value": "Credit Card Expense",
                   "id": "141"
                  },
                  {
                   "value": ""
                  },
                  {
                   "value": "Squeaky Kleen Car Wash",
                   "id": "57"
                  },
                  {
                   "value": ""
                  },
                  {
                   "value": "Mastercard",
                   "id": "41"
                  },
                  {
                   "value": "19.99"
                  },
                  {
                   "value": "39.98"
                  }
                 ],
                 "type": "Data"
                },
                {
                 "ColData": [
                  {
                   "value": "2024-12-15"
                  },
                  {
                   "value": "Credit Card Expense",
                   "id": "142"
                  },
                  {
                   "value": ""
                  },
                  {
                   "value": "Squeaky Kleen Car Wash",
                   "id": "57"
                  },
                  {
                   "value": ""
                  },
                  {
                   "value": "Mastercard",
                   "id": "41"
                  },
                  {
                   "value": "19.99"
                  },
                  {
                   "value": "59.97"
                  }
                 ],
                 "type": "Data"
                },
                {
                 "ColData": [
                  {
                   "value": "2024-12-28"
                  },
                  {
                   "value": "Credit Card Expense",
                   "id": "144"
                  },
                  {
                   "value": ""
                  },
                  {
                   "value": "",
                   "id": ""
                  },
                  {
                   "value": ""
                  },
                  {
                   "value": "Mastercard",
                   "id": "41"
                  },
                  {
                   "value": "34.00"
                  },
                  {
                   "value": "93.97"
                  }
                 ],
                 "type": "Data"
                }
               ]
              },
              "Summary": {
               "ColData": [
                {
                 "value": "Total for Automobile"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": "93.97"
                },
                {
                 "value": ""
                }
               ]
              },
              "type": "Section"
             },
             {
              "Header": {
               "ColData": [
                {
                 "value": "Fuel",
                 "id": "56"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                }
               ]
              },
              "Rows": {
               "Row": [
                {
                 "ColData": [
                  {
                   "value": "2024-12-02"
                  },
                  {
                   "value": "Cash Expense",
                   "id": "131"
                  },
                  {
                   "value": ""
                  },
                  {
                   "value": "Chin's Gas and Oil",
                   "id": "33"
                  },
                  {
                   "value": ""
                  },
                  {
                   "value": "Checking",
                   "id": "35"
                  },
                  {
                   "value": "63.15"
                  },
                  {
                   "value": "63.15"
                  }
                 ],
                 "type": "Data"
                },
                {
                 "ColData": [
                  {
                   "value": "2024-12-03"
                  },
                  {
                   "value": "Expense",
                   "id": "122"
                  },
                  {
                   "value": "1"
                  },
                  {
                   "value": "Chin's Gas and Oil",
                   "id": "33"
                  },
                  {
                   "value": ""
                  },
                  {
                   "value": "Mastercard",
                   "id": "41"
                  },
                  {
                   "value": "52.56"
                  },
                  {
                   "value": "115.71"
                  }
                 ],
                 "type": "Data"
                }
               ]
              },
              "Summary": {
               "ColData": [
                {
                 "value": "Total for Fuel"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": "115.71"
                },
                {
                 "value": ""
                }
               ]
              },
              "type": "Section"
             }
            ]
           },
           "Summary": {
            "ColData": [
             {
              "value": "Total for Automobile with sub-accounts"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": "209.68"
             },
             {
              "value": ""
             }
            ]
           },
           "type": "Section"
          },
          {
           "Header": {
            "ColData": [
             {
              "value": "Equipment Rental",
              "id": "29"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             }
            ]
           },
           "Rows": {
            "Row": [
             {
              "ColData": [
               {
                "value": "2024-12-01"
               },
               {
                "value": "Expense",
                "id": "51"
               },
               {
                "value": "1"
               },
               {
                "value": "Ellis Equipment Rental",
                "id": "38"
               },
               {
                "value": "Equipment rental for 5 days"
               },
               {
                "value": "Mastercard",
                "id": "41"
               },
               {
                "value": "112.00"
               },
               {
                "value": "112.00"
               }
              ],
              "type": "Data"
             }
            ]
           },
           "Summary": {
            "ColData": [
             {
              "value": "Total for Equipment Rental"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": "112.00"
             },
             {
              "value": ""
             }
            ]
           },
           "type": "Section"
          },
          {
           "Header": {
            "ColData": [
             {
              "value": "Job Expenses",
              "id": "58"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             }
            ]
           },
           "Rows": {
            "Row": [
             {
              "Rows": {
               "Row": [
                {
                 "ColData": [
                  {
                   "value": "2024-12-02"
                  },
                  {
                   "value": "Expense",
                   "id": "89"
                  },
                  {
                   "value": "108"
                  },
                  {
                   "value": "Tania's Nursery",
                   "id": "50"
                  },
                  {
                   "value": ""
                  },
                  {
                   "value": "Checking",
                   "id": "35"
                  },
                  {
                   "value": "46.98"
                  },
                  {
                   "value": "46.98"
                  }
                 ],
                 "type": "Data"
                }
               ]
              },
              "Summary": {
               "ColData": [
                {
                 "value": "Total for Job Expenses"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": "46.98"
                },
                {
                 "value": ""
                }
               ]
              },
              "type": "Section"
             },
             {
              "Header": {
               "ColData": [
                {
                 "value": "Job Materials"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                }
               ]
              },
              "Rows": {
               "Row": [
                {
                 "Header": {
                  "ColData": [
                   {
                    "value": "Decks and Patios",
                    "id": "64"
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   }
                  ]
                 },
                 "Rows": {
                  "Row": [
                   {
                    "ColData": [
                     {
                      "value": "2024-12-09"
                     },
                     {
                      "value": "Credit Card Expense",
                      "id": "143"
                     },
                     {
                      "value": ""
                     },
                     {
                      "value": "Hicks Hardware",
                      "id": "41"
                     },
                     {
                      "value": ""
                     },
                     {
                      "value": "Mastercard",
                      "id": "41"
                     },
                     {
                      "value": "42.40"
                     },
                     {
                      "value": "42.40"
                     }
                    ],
                    "type": "Data"
                   }
                  ]
                 },
                 "Summary": {
                  "ColData": [
                   {
                    "value": "Total for Decks and Patios"
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": "42.40"
                   },
                   {
                    "value": ""
                   }
                  ]
                 },
                 "type": "Section"
                },
                {
                 "Header": {
                  "ColData": [
                   {
                    "value": "Plants and Soil",
                    "id": "66"
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   }
                  ]
                 },
                 "Rows": {
                  "Row": [
                   {
                    "ColData": [
                     {
                      "value": "2024-12-06"
                     },
                     {
                      "value": "Cash Expense",
                      "id": "134"
                     },
                     {
                      "value": ""
                     },
                     {
                      "value": "Tania's Nursery",
                      "id": "50"
                     },
                     {
                      "value": ""
                     },
                     {
                      "value": "Checking",
                      "id": "35"
                     },
                     {
                      "value": "23.50"
                     },
                     {
                      "value": "23.50"
                     }
                    ],
                    "type": "Data"
                   }
                  ]
                 },
                 "Summary": {
                  "ColData": [
                   {
                    "value": "Total for Plants and Soil"
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": ""
                   },
                   {
                    "value": "23.50"
                   },
                   {
                    "value": ""
                   }
                  ]
                 },
                 "type": "Section"
                }
               ]
              },
              "Summary": {
               "ColData": [
                {
                 "value": "Total for Job Materials"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": "65.90"
                },
                {
                 "value": ""
                }
               ]
              },
              "type": "Section"
             }
            ]
           },
           "Summary": {
            "ColData": [
             {
              "value": "Total for Job Expenses with sub-accounts"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": "112.88"
             },
             {
              "value": ""
             }
            ]
           },
           "type": "Section"
          },
          {
           "Header": {
            "ColData": [
             {
              "value": "Legal & Professional Fees",
              "id": "12"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             }
            ]
           },
           "Rows": {
            "Row": [
             {
              "Rows": {
               "Row": [
                {
                 "ColData": [
                  {
                   "value": "2024-12-03"
                  },
                  {
                   "value": "Expense",
                   "id": "127"
                  },
                  {
                   "value": "76"
                  },
                  {
                   "value": "Pam Seitz",
                   "id": "47"
                  },
                  {
                   "value": "Counsel"
                  },
                  {
                   "value": "Checking",
                   "id": "35"
                  },
                  {
                   "value": "75.00"
                  },
                  {
                   "value": "75.00"
                  }
                 ],
                 "type": "Data"
                }
               ]
              },
              "Summary": {
               "ColData": [
                {
                 "value": "Total for Legal & Professional Fees"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": "75.00"
                },
                {
                 "value": ""
                }
               ]
              },
              "type": "Section"
             },
             {
              "Header": {
               "ColData": [
                {
                 "value": "Accounting",
                 "id": "69"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                }
               ]
              },
              "Rows": {
               "Row": [
                {
                 "ColData": [
                  {
                   "value": "2024-12-03"
                  },
                  {
                   "value": "Bill",
                   "id": "108"
                  },
                  {
                   "value": ""
                  },
                  {
                   "value": "Robertson & Associates",
                   "id": "49"
                  },
                  {
                   "value": ""
                  },
                  {
                   "value": "Accounts Payable (A/P)",
                   "id": "33"
                  },
                  {
                   "value": "315.00"
                  },
                  {
                   "value": "315.00"
                  }
                 ],
                 "type": "Data"
                }
               ]
              },
              "Summary": {
               "ColData": [
                {
                 "value": "Total for Accounting"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": "315.00"
                },
                {
                 "value": ""
                }
               ]
              },
              "type": "Section"
             }
            ]
           },
           "Summary": {
            "ColData": [
             {
              "value": "Total for Legal & Professional Fees with sub-accounts"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": "390.00"
             },
             {
              "value": ""
             }
            ]
           },
           "type": "Section"
          },
          {
           "Header": {
            "ColData": [
             {
              "value": "Maintenance and Repair"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             }
            ]
           },
           "Rows": {
            "Row": [
             {
              "Header": {
               "ColData": [
                {
                 "value": "Equipment Repairs",
                 "id": "75"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                }
               ]
              },
              "Rows": {
               "Row": [
                {
                 "ColData": [
                  {
                   "value": "2024-12-01"
                  },
                  {
                   "value": "Bill",
                   "id": "44"
                  },
                  {
                   "value": ""
                  },
                  {
                   "value": "Diego's Road Warrior Bodyshop",
                   "id": "36"
                  },
                  {
                   "value": "Repairs on the truck"
                  },
                  {
                   "value": "Accounts Payable (A/P)",
                   "id": "33"
                  },
                  {
                   "value": "755.00"
                  },
                  {
                   "value": "755.00"
                  }
                 ],
                 "type": "Data"
                }
               ]
              },
              "Summary": {
               "ColData": [
                {
                 "value": "Total for Equipment Repairs"
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": ""
                },
                {
                 "value": "755.00"
                },
                {
                 "value": ""
                }
               ]
              },
              "type": "Section"
             }
            ]
           },
           "Summary": {
            "ColData": [
             {
              "value": "Total for Maintenance and Repair"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": "755.00"
             },
             {
              "value": ""
             }
            ]
           },
           "type": "Section"
          },
          {
           "Header": {
            "ColData": [
             {
              "value": "Meals and Entertainment",
              "id": "13"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             }
            ]
           },
           "Rows": {
            "Row": [
             {
              "ColData": [
               {
                "value": "2024-12-08"
               },
               {
                "value": "Credit Card Expense",
                "id": "140"
               },
               {
                "value": ""
               },
               {
                "value": "Bob's Burger Joint",
                "id": "56"
               },
               {
                "value": ""
               },
               {
                "value": "Mastercard",
                "id": "41"
               },
               {
                "value": "18.97"
               },
               {
                "value": "18.97"
               }
              ],
              "type": "Data"
             }
            ]
           },
           "Summary": {
            "ColData": [
             {
              "value": "Total for Meals and Entertainment"
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": ""
             },
             {
              "value": "18.97"
             },
             {
              "value": ""
             }
            ]
           },
           "type": "Section"
          }
         ]
        },
        "Summary": {
         "ColData": [
          {
           "value": "Total for Expenses"
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": ""
          },
          {
           "value": "1673.39"
          },
          {
           "value": ""
          }
         ]
        },
        "type": "Section"
       }
      ]
     },
     "Summary": {
      "ColData": [
       {
        "value": "Net Income"
       },
       {
        "value": ""
       },
       {
        "value": ""
       },
       {
        "value": ""
       },
       {
        "value": ""
       },
       {
        "value": ""
       },
       {
        "value": "653.86"
       },
       {
        "value": ""
       }
      ]
     },
     "type": "Section"
    }
   ]
  }
 }