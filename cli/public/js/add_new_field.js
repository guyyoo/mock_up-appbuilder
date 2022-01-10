// structure
const appbuilder_designer_object = webix.ui({
  view: "button",
  id: "appbuilder_designer_object-add_new_field-field",
  label: "<span style=\"margin: 0px; font-size: 15px;\">New column</span>",
  width: 100,
});

const window_chooseFieldType = webix.ui({
  view: "window",
  position: "center",
  width: 750,
  height: 650,
  head: {
    view: "toolbar",
    css: "webix_dark",
    paddingX: 2,
    elements: [
      {
        view: "label",
        align: "center",
        label: "<span>Choose field type</span>"
      },
      {
        view: "button",
        id: "add_new_field-choose_field_type-button-close",
        label: "<span>Close</span>",
        width: 100
      }
    ]
  },
  body: {
    view: "scrollview",
    height: 450,
    scroll:"y",
    body: {
      rows: [
        // {
        //   view: "search",
        //   id: "add_new_field-choose_field_type-search",
        //   placeholder:"Search by title...",
        //   align: "center",
        // },
        {
          id: "add_new_field-choose_field_type-button-unique",
          cols: [
            {
              paddingX: 1,
              rows: [
                {
                  view: "button",
                  id: `add_new_field-choose_field_type-button-unique-single_line_text`,
                  type: "imageTop",
                  image:"/src/choose_field_type-button-single_line_text.svg",
                  label: "<span>Single line text</span>",
                  css: "webix_transparent",
                  height: 150,
                },
                {
                  view: "button",
                  id: `add_new_field-choose_field_type-button-unique-date_&_time`,
                  type: "imageTop",
                  image:"/src/choose_field_type-button-date_&_time.svg",
                  label: "Date & Time",
                  css: "webix_transparent",
                  height: 150,
                }
              ]
            },
            {
              paddingX: 1,
              rows: [
                {
                  view: "button",
                  id: `add_new_field-choose_field_type-button-unique-long_text`,
                  type: "imageTop",
                  image:"/src/choose_field_type-button-long_text.svg",
                  label: "<span>Long text</span>",
                  css: "webix_transparent",
                  height: 150
                }
              ]
            },
            {
              paddingX: 1,
              rows: [
                {
                  view: "button",
                  id: `add_new_field-choose_field_type-button-unique-number`,
                  type: "imageTop",
                  image:"/src/choose_field_type-button-number.svg",
                  label: "<span>Number</span>",
                  css: "webix_transparent",
                  height: 150
                }
              ]
            },
            {
              paddingX: 1,
              rows: [
                {
                  view: "button",
                  id: `add_new_field-choose_field_type-button-unique-date`,
                  type: "imageTop",
                  image:"/src/choose_field_type-button-date.svg",
                  label: "<span>Date</span>",
                  css: "webix_transparent",
                  height: 150
                }
              ]
            }
          ]
        }
      ]
    }
  }
});

const windows_fieldSetting = webix.ui({
  view: "window",
  position: "center",
  width: 750,
  height: 650,
  head: {
    view: "toolbar",
    css: "webix_dark",
    paddingX: 2,
    elements: [
      {
        view: "label",
        align: "center",
        label: "<span>Field setting</span>"
      },
      {
        view: "button",
        id: "add_new_field-field_setting-button-close",
        label: "<span>Close</span>",
        width: 100
      }
    ]
  },
  body: {
    height: 450,
    rows: [
      {
        view: "form",
        css: {
          "background-color": "#ccc !important"
        },
        elements: [
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
                    id: "add_new_field-field_setting-field-label",
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
                    id: "add_new_field-field_setting-field-field_name",
                    label: "<div class=\"webix_el_box\" style=\"background-color: #aaa; padding: 0px 12px; text-align:left;\"></div>"
                  },
                  {
                    view: "button",
                    id: "add_new_field-field_setting-button-edit_field_name",
                    css: "webix_transparent",
                    label: "<span class=\"webix_icon_btn wxi-pencil\" style=\"margin: 0px;\"></span>",
                    width: 40,
                  },
                ]
              },
            ]
          },
          {
            id: "add_new_field-field_setting-container-unique",
            view: "scrollview",
            height: 325,
            scroll:"y",
            css: {
              "background-color": "#eee !important"
            },
            body: {
              rows: [
                {
                  id: `add_new_field-field_setting-container-unique-single_line_text`,
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
                          id: `add_new_field-field_setting-container-unique-single_line_text-checkbox-default_value`,
                          name: "default_value-checkbox",
                          width: 30,
                          value: 0,
                        },
                        {
                          view: "text",
                          id: `add_new_field-field_setting-container-unique-single_line_text-text-default_value`,
                          placeholder: "Single line text",
                          disabled: true
                        },
                        {width: 30}
                      ]
                    },
                    {}
                  ]
                },
                {
                  id: `add_new_field-field_setting-container-unique-long_text`,
                  hidden: true,
                  rows: [
                    {height: 30},
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
                          id: `add_new_field-field_setting-container-unique-long_text-checkbox-default_value`,
                          name: "default_value-checkbox",
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
                          id: `add_new_field-field_setting-container-unique-long_text-text-default_value`,
                          height: 225,
                          placeholder: "Long text",
                          disabled: true
                        },
                        {width: 50}
                      ]
                    },
                    {}
                  ]
                },
                {
                  id: `add_new_field-field_setting-container-unique-number`,
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
                          id: `add_new_field-field_setting-container-unique-number-checkbox-default_value`,
                          name: "default_value-checkbox",
                          width: 30,
                          value: 0
                        },
                        {
                          view: "text",
                          id: `add_new_field-field_setting-container-unique-number-text-default_value`,
                          placeholder: "Number",
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
                          id: "add_new_field-field_setting-container-unique-number-format",
                          value: 1,
                          options:[
                            { "id": "add_new_field-field_setting-container-unique-number-format-1", "value": "None" }, 
                            { "id": "add_new_field-field_setting-container-unique-number-format-2", "value": "$" }, 
                            { "id": "add_new_field-field_setting-container-unique-number-format-3", "value": "฿" },
                            { "id": "add_new_field-field_setting-container-unique-number-format-4", "value": "¥" }
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
                          id: "add_new_field-field_setting-container-unique-number-decimal",
                          value: 1,
                          options:[
                            { "id": "add_new_field-field_setting-container-unique-number-decima-1", "value": "None" }, 
                            { "id": "add_new_field-field_setting-container-unique-number-decima-2", "value": "Comma" }, 
                            { "id": "add_new_field-field_setting-container-unique-number-decima-3", "value": "Period" },
                            { "id": "add_new_field-field_setting-container-unique-number-decima-4", "value": "Space" }
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
                          id: "add_new_field-field_setting-container-unique-number-thousands",
                          value: 1,
                          options:[
                            { "id": "add_new_field-field_setting-container-unique-number-thousands-1", "value": "None" }, 
                            { "id": "add_new_field-field_setting-container-unique-number-thousands-2", "value": "Comma" }, 
                            { "id": "add_new_field-field_setting-container-unique-number-thousands-3", "value": "Period" },
                            { "id": "add_new_field-field_setting-container-unique-number-thousands-4", "value": "Space" }
                          ]
                        },
                        {width: 30}
                      ]
                    },
                    {},
                  ]
                },
                {
                  id: `add_new_field-field_setting-container-unique-date`,
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
                          id: `add_new_field-field_setting-container-unique-date-checkbox-default_value`,
                          name: "default_value-checkbox",
                          width: 30,
                          value: 0
                        },
                        {
                          view: "datepicker",
                          id: `add_new_field-field_setting-container-unique-date-datepicker-default_value`,
                          timepicker: false,
                          width: 300,
                          placeholder: "Date",
                          disabled: true
                        },
                        {width: 100}
                      ]
                    },
                    {}
                  ]
                },
                {
                  id: `add_new_field-field_setting-container-unique-date_&_time`,
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
                          id: `add_new_field-field_setting-container-unique-date_&_time-checkbox-default_value`,
                          name: "default_value-checkbox",
                          width: 30,
                          value: 0
                        },
                        {
                          view: "datepicker",
                          id: `add_new_field-field_setting-container-unique-date_&_time-datepicker-default_value`,
                          timepicker: true,
                          width: 300,
                          placeholder: "Date & Time",
                          disabled: true
                        },
                        {width: 100}
                      ]
                    },
                    {}
                  ]
                }
              ]
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
                id: "add_new_field-field_setting-required",
                value: 0,
                labelWidth:100
              },
              {},
              {},
              {},
              {
                view: "button",
                id: "add_new_field-field_setting-button-cancel",
                css: "webix_danger",
                value: "Cancel"
              },
              {
                view: "button",
                id: "add_new_field-field_setting-button-submit",
                css: "webix_primary",
                value: "Submit"
              },
            ]
          }
        ],
      },
    ]
  }
});

const windows_fieldSetting_editFildName = webix.ui({
  view:"window",
  position:"center",
  width: 450,
  height: 200,
  head: {
    view: "toolbar",
    css: "webix_dark",
    paddingX: 2,
    elements: [
      {
        view: "label",
        align: "center",
        label: "<span>Edit field name</span>"
      }
    ]
  },
  body: {
    padding: 10,
    rows: [
      {
        cols: [
          {
            view:"label",
            label:"<span>Field Name: </span>",
            align: "right",
            width: 100
          },
          {
            name: "label",
            id: "add_new_field-field_setting-edit_field_name-field_name",
            view: "text",
          },
        ]
      },
      {
        cols: [
          {},
          {
            view: "button",
            id: "add_new_field-field_setting-edit_field_name-button-cancel",
            css: "webix_danger",
            value: "Cancel",
            width: 100
          },
          {
            view: "button",
            id: "add_new_field-field_setting-edit_field_name-button-submit",
            css: "webix_primary",
            value: "Submit",
            width: 100
          }
        ]
      }
    ]
  }
});

// event handler
// Main
// Button: New column
$$("appbuilder_designer_object-add_new_field-field")
  .attachEvent("onItemClick", () => {
    window_chooseFieldType.show();
    appbuilder_designer_object.disable();
  });

// // Search: Button Unigue
// $$("add_new_field-choose_field_type-search")
//   .attachEvent("onTimedKeyPress", () => {
//     const value = $$("add_new_field-choose_field_type-search").getValue().toLowerCase();
//   });

// Button: Unigue
// Single line text
$$("add_new_field-choose_field_type-button-unique-single_line_text")
  .attachEvent("onItemClick", () => {
    $$("add_new_field-field_setting-container-unique-single_line_text").show();
    window_chooseFieldType.hide();
    windows_fieldSetting.show();
  });

$$(`add_new_field-field_setting-container-unique-single_line_text-checkbox-default_value`)
  .attachEvent("onChange", (newv, oldv, config) => {
    if(newv == 0)
      $$(`add_new_field-field_setting-container-unique-single_line_text-text-default_value`).disable();
    else
      $$(`add_new_field-field_setting-container-unique-single_line_text-text-default_value`).enable();
  });

// Long text
$$("add_new_field-choose_field_type-button-unique-long_text")
  .attachEvent("onItemClick", () => {
    $$("add_new_field-field_setting-container-unique-long_text").show();
    window_chooseFieldType.hide();
    windows_fieldSetting.show();
  });

$$(`add_new_field-field_setting-container-unique-long_text-checkbox-default_value`)
  .attachEvent("onChange", (newv, oldv, config) => {
    if(newv == 0)
      $$(`add_new_field-field_setting-container-unique-long_text-text-default_value`).disable();
    else
      $$(`add_new_field-field_setting-container-unique-long_text-text-default_value`).enable();
  });

// Number
$$("add_new_field-choose_field_type-button-unique-number")
  .attachEvent("onItemClick", () => {
    $$("add_new_field-field_setting-container-unique-number").show();
    window_chooseFieldType.hide();
    windows_fieldSetting.show();
  });

$$(`add_new_field-field_setting-container-unique-number-checkbox-default_value`)
  .attachEvent("onChange", (newv, oldv, config) => {
    if(newv == 0)
      $$(`add_new_field-field_setting-container-unique-number-text-default_value`).disable();
    else
      $$(`add_new_field-field_setting-container-unique-number-text-default_value`).enable();
  });

// Date
$$("add_new_field-choose_field_type-button-unique-date")
  .attachEvent("onItemClick", () => {
    $$("add_new_field-field_setting-container-unique-date").show();
    window_chooseFieldType.hide();
    windows_fieldSetting.show();
  });

$$(`add_new_field-field_setting-container-unique-date-checkbox-default_value`)
  .attachEvent("onChange", (newv, oldv, config) => {
    if(newv == 0)
      $$(`add_new_field-field_setting-container-unique-date-text-default_value`).disable();
    else
      $$(`add_new_field-field_setting-container-unique-date-text-default_value`).enable();
  });

// Date & Time
$$("add_new_field-choose_field_type-button-unique-date_&_time")
  .attachEvent("onItemClick", () => {
    $$("add_new_field-field_setting-container-unique-date_&_time").show();
    window_chooseFieldType.hide();
    windows_fieldSetting.show();
  });

$$(`add_new_field-field_setting-container-unique-date_&_time-checkbox-default_value`)
  .attachEvent("onChange", (newv, oldv, config) => {
    if(newv == 0)
      $$(`add_new_field-field_setting-container-unique-date_&_time-text-default_value`).disable();
    else
      $$(`add_new_field-field_setting-container-unique-date_&_time-text-default_value`).enable();
  });

// Button: Close
$$("add_new_field-choose_field_type-button-close")
  .attachEvent("onItemClick", () => {
    window_chooseFieldType.hide();
    appbuilder_designer_object.enable();
});

// Field setting
// Button: Close
$$("add_new_field-field_setting-button-close")
  .attachEvent("onItemClick", () => {
    $$("add_new_field-field_setting-container-unique-single_line_text").hide();
    $$("add_new_field-field_setting-container-unique-long_text").hide();
    $$("add_new_field-field_setting-container-unique-number").hide();
    $$("add_new_field-field_setting-container-unique-date").hide();
    $$("add_new_field-field_setting-container-unique-date_&_time").hide();
    windows_fieldSetting.hide();
    window_chooseFieldType.hide();
    appbuilder_designer_object.enable();
  });

// Field: Label
$$("add_new_field-field_setting-field-label")
  .attachEvent("onChange", (newv, oldv, config) => {
    $$("add_new_field-field_setting-field-field_name")
      .setValue(`<div class=\"webix_el_box\" style=\"background-color: #aaa; padding: 0px 12px; text-align:left;\"><span style="color:#AC1818"><b>${newv}</b></span></div>`);
  });

// Field: Field Name
$$("add_new_field-field_setting-button-edit_field_name")
  .attachEvent("onItemClick", () => {
    windows_fieldSetting.disable();
    windows_fieldSetting_editFildName.show();
  });

$$("add_new_field-field_setting-edit_field_name-button-cancel")
  .attachEvent("onItemClick", () => {
    windows_fieldSetting.enable();
    windows_fieldSetting_editFildName.hide();

    $$("add_new_field-field_setting-edit_field_name-field_name").setValue();
  });

$$("add_new_field-field_setting-edit_field_name-button-submit")
  .attachEvent("onItemClick", () => {
    windows_fieldSetting.enable();
    windows_fieldSetting_editFildName.hide();

    const fieldNameValue = $$("add_new_field-field_setting-edit_field_name-field_name").getValue();

    $$("add_new_field-field_setting-edit_field_name-field_name").setValue();
    $$("add_new_field-field_setting-field-field_name").setValue(`<div class=\"webix_el_box\" style=\"background-color: #aaa; padding: 0px 12px; text-align:left;\"><span style="color:#AC1818"><b>${fieldNameValue}</b></span></div>`);
  });

// Button:Cancel
$$("add_new_field-field_setting-button-cancel")
  .attachEvent("onItemClick", () => {
    $$("add_new_field-field_setting-container-unique-single_line_text").hide();
    $$("add_new_field-field_setting-container-unique-long_text").hide();
    $$("add_new_field-field_setting-container-unique-number").hide();
    $$("add_new_field-field_setting-container-unique-date").hide();
    $$("add_new_field-field_setting-container-unique-date_&_time").hide();
    windows_fieldSetting.hide();
    window_chooseFieldType.show();
  });

// init
const init = () => {
  appbuilder_designer_object.show();
}

init();