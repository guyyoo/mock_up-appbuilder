// data
const fieldType = [
  {
    id: 0,
    name: "Single line Text",
    textColor: "#1B9DAC"
  },
  {
    id: 1,
    name: "Long Text",
    textColor: "#853A27"
  },
  {
    id: 2,
    name: "Number",
    textColor: "#1C5DC1"
  },
  {
    id: 3,
    name: "Date",
    textColor: "#AC1818"
  },
  {
    id: 4,
    name: "Date & Time",
    textColor: "#000000",
  }
];

// structure
const head = {
  view: "toolbar",
  css: "webix_dark",
  paddingX: 2,
  elements: [
    {
      view: "label",
      id: "add_new_field-head-label",
      align: "center",
      label: "<span>Add new field</span>"
    },
    {
      view: "button",
      id: "add_new_field-head-button_close",
      css: "webix_dark",
      value: "Close",
      width: 75
    }
  ]
};

const body = {
  rows: [
    {
      view: "form",
      id: "add_new_field-body-fieldtype-form",
      css: {
        "background": "#ccc !important"
      },
      elements: [
        {
          view: "toolbar",
          rows : [
            {
              cols: [
                {
                  view: "label",
                  align: "right",
                  label: "<span>*Select Field Type: </span>"
                },
                {
                  view: "label",
                  id: "add_new_field-body-fieldtype-select-label",
                  align: "left",
                }
              ]
            },
            {
              view: "scrollview",
              height: 150,
              scroll:"y",
              body: {
                cols: [
                  {
                    rows: []
                  },
                  {
                    rows: []
                  },
                  {
                    rows: []
                  },
                  {
                    rows: []
                  }
                ]
              }
            }
          ]
        },
        {
          rows: [
            {
              cols: [
                {
                  view:"label",
                  label:"<span>Label: </span>",
                  align: "right",
                  width: 100
                },
                {
                  name: "label",
                  id: "add_new_field-body-fieldtype-form-field-label-input",
                  view: "text",
                },
                {
                  view:"label",
                  label: "<span>Field Name: </span>",
                  align: "right",
                  width: 100
                },
                {
                  view:"label",
                  id: "add_new_field-body-fieldtype-form-field-label-output",
                },
              ]
            },
          ]
        },
        {
          id: "add_new_field-body-fieldtype-form-field-unique",
          view: "scrollview",
          height: 250,
          scroll:"y",
          css: {
            "background": "#eee !important"
          },
          body: {
            rows:[]
          }
        },
        {
          cols: [
            {
              view:"label",
              label: "<span>Required: </span>",
              align: "right",
              width: 100
            },
            {
              view: "switch", 
              value: 0,
              labelWidth:100
            },
            {},
            {},
            {},
            {
              view: "button",
              id: "add_new_field-body-fieldtype-form-button-cancel",
              css: "webix_danger",
              value: "Cancel"
            },
            {
              view: "button",
              id: "add_new_field-body-fieldtype-form-button-submit",
              css: "webix_primary",
              value: "Submit"
            },
          ]
        }
      ],
    },
  ]
};

// field type unique UI
for(let i = 0; i < fieldType.length; i++) {
  let uniqueUI;
  switch(fieldType[i].name) {
    case "Single line Text":
      uniqueUI = {
        id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}`,
        hidden: true,
        rows: [
          {},
          {
            cols: [
              {width: 30},
              {
                view:"label",
                label: "<span>Default Value: </span>",
                align: "right",
                width: 100
              },
              {
                view:"checkbox",
                id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}-check_box-default_value`,
                name: "default_value-check_box",
                width: 30,
                value: 0
              },
              {
                view: "text",
                id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}-text-default_value`,
                placeholder: fieldType[i].name,
                disabled: true
              },
              {width: 30}
            ]
          },
          {}
        ]
      }
      break;

    case "Long Text":
      uniqueUI = {
        id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}`,
        hidden: true,
        rows: [
          {
            cols: [
              {
                view:"label",
                label: "<span>Default Value: </span>",
                align: "right",
                width: 100
              },
              {
                view:"checkbox",
                id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}-check_box-default_value`,
                name: "default_value-check_box",
                width: 30,
                value: 0
              }
            ]
          },
          {
            cols: [
              {width: 50},
              {
                view: "textarea",
                id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}-text-default_value`,
                height: 175,
                placeholder: fieldType[i].name,
                disabled: true
              },
              {width: 50}
            ]
          }
        ]
      }
      break;
    case "Number":
      uniqueUI = {
        id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}`,
        hidden: true,
        rows: [
          {
            cols: [
              {width: 30},
              {
                view:"label",
                label: "<span>Default Value: </span>",
                align: "right",
                width: 100
              },
              {
                view:"checkbox",
                id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}-check_box-default_value`,
                name: "default_value-check_box",
                width: 30,
                value: 0
              },
              {
                view: "text",
                id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}-text-default_value`,
                placeholder: fieldType[i].name,
                disabled: true
              },
              {width: 30}
            ]
          },
          {},
          {
            cols: [
              {width: 30},
              {
                view:"label",
                label: "<span>Format: </span>",
                align: "right",
                width: 100
              },
              {
                view: "richselect",
                value: 1,
                options:[
                  { "id": "1", "value": "None" }, 
                  { "id": "2", "value": "$" }, 
                  { "id": "3", "value": "฿" },
                  { "id": "4", "value": "¥" }
                ]
              },
              {width: 30}
            ]
          },
          {},
          {
            cols: [
              {width: 30},
              {
                view:"label",
                label: "<span>Decimal: </span>",
                align: "right",
                width: 100
              },
              {
                view: "segmented",
                value: 1,
                options:[
                  { "id": "1", "value": "None" }, 
                  { "id": "2", "value": "Comma" }, 
                  { "id": "3", "value": "Period" },
                  { "id": "4", "value": "Space" }
                ]
              },
              {width: 30}
            ]
          },
          {
            cols: [
              {width: 30},
              {
                view:"label",
                label: "<span>Thousands: </span>",
                align: "right",
                width: 100
              },
              {
                view: "segmented",
                value: 1,
                options:[
                  { "id": "1", "value": "None" }, 
                  { "id": "2", "value": "Comma" }, 
                  { "id": "3", "value": "Period" },
                  { "id": "4", "value": "Space" }
                ]
              },
              {width: 30}
            ]
          },
          {},
          {}
        ]
      }
      break;

    case "Date":
      uniqueUI = {
        id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}`,
        hidden: true,
        rows: [
          {},
          {
            cols: [
              {width: 100},
              {
                view: "label",
                label: "<span>Default Value: </span>",
                align: "right",
                width: 100
              },
              {
                view: "checkbox",
                id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}-check_box-default_value`,
                name: "default_value-check_box",
                width: 30,
                value: 0
              },
              {
                view: "datepicker",
                id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}-text-default_value`,
                timepicker: false,
                width: 300,
                placeholder: fieldType[i].name,
                disabled: true
              },
              {width: 100}
            ]
          },
          {}
        ]
      }
      break;

    case "Date & Time":
      uniqueUI = {
        id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}`,
        hidden: true,
        rows: [
          {},
          {
            cols: [
              {width: 100},
              {
                view:"label",
                label: "<span>Default Value: </span>",
                align: "right",
                width: 100
              },
              {
                view:"checkbox",
                id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}-check_box-default_value`,
                name: "default_value-check_box",
                width: 30,
                value: 0
              },
              {
                view: "datepicker",
                id: `add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}-text-default_value`,
                timepicker: true,
                width: 300,
                placeholder: fieldType[i].name,
                disabled: true
              },
              {width: 100}
            ]
          },
          {}
        ]
      }
      break;
  }

  body.rows[0].elements[2].body.rows.push(uniqueUI);

  body.rows[0].elements[0].rows[1].body.cols[i%4].rows.push({
    view: "button",
    id: `add_new_field-body-fieldtype-form-scrollview-button-${fieldType[i].id.toString()}`,
    value: fieldType[i].name,
    click: () => {
      $$("add_new_field-body-fieldtype-select-label").setValue(`<label><b><span style="color:${fieldType[i].textColor}">${fieldType[i].name}</span></b></label>`);
        for(let j = 0; j < fieldType.length; j++) {
          if(fieldType[j].id === fieldType[i].id)
            $$(`add_new_field-body-fieldtype-form-field-unique-${fieldType[j].id.toString()}`).show();
          else
            $$(`add_new_field-body-fieldtype-form-field-unique-${fieldType[j].id.toString()}`).hide();
        }
    }
  });
}

// window
const win = {
  view:"window",
  id:"add_new_field-window",
  position:"center",
  width: 750,
  height: 650,
  head: head,
  body: body
};

// render
webix.ui(win).show();

for(let i = 0; i < fieldType.length; i++) {
  $$(`add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}-text-default_value`).disable()
  $$(`add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}-check_box-default_value`)
    .attachEvent("onChange", (newv, oldv, config) => {
      if(newv == 0)
        $$(`add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}-text-default_value`).disable();
      else
        $$(`add_new_field-body-fieldtype-form-field-unique-${fieldType[i].id.toString()}-text-default_value`).enable();
    });
}

const init = (field) => {
  $$("add_new_field-body-fieldtype-form-field-label-input")
        .attachEvent("onChange", (newv, oldv, config) => {
        $$("add_new_field-body-fieldtype-form-field-label-output").setValue(`<span style="color:#AC1818"><b>${newv}</b></span>`);
      });
}

init(fieldType[2]);
