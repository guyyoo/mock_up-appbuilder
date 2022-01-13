// data
const field_type = [
  {
    id: "new_column-body-choose_field_type-dataview-unique-single_line_text",
    image:"/src/choose_field_type-dataview-single_line_text.svg",
    label: "Single line text",
    unigue: {
      id: `new_column-body-field_setting-container-unique-single_line_text`,
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
              id: `new_column-body-field_setting-container-unique-single_line_text-checkbox-default_value`,
              name: "default_value-checkbox",
              width: 30,
              value: 0,
            },
            {
              view: "text",
              id: `new_column-body-field_setting-container-unique-single_line_text-value-default_value`,
              placeholder: "Single line text",
              disabled: true
            }
          ]
        },
      ]
    },
  },
  {
    id: "new_column-body-choose_field_type-dataview-unique-long_text",
    image:"/src/choose_field_type-dataview-long_text.svg",
    label: "Long text",
    unigue: {
      id: `new_column-body-field_setting-container-unique-long_text`,
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
              id: `new_column-body-field_setting-container-unique-long_text-checkbox-default_value`,
              name: "default_value-checkbox",
              width: 30,
              value: 0
            }
          ]
        },
        {
          cols: [
            {width: 30},
            {
              view: "textarea",
              id: `new_column-body-field_setting-container-unique-long_text-value-default_value`,
              placeholder: "Long text",
              disabled: true
            },
            {width: 30}
          ]
        },
        {height: 38}
      ]
    },
  },
  {
    id: `new_column-body-choose_field_type-dataview-unique-number`,
    image:"/src/choose_field_type-dataview-number.svg",
    label: "Number",
    unigue: {
      id: `new_column-body-field_setting-container-unique-number`,
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
              id: `new_column-body-field_setting-container-unique-number-checkbox-default_value`,
              name: "default_value-checkbox",
              width: 30,
              value: 0
            },
            {
              view: "text",
              id: `new_column-body-field_setting-container-unique-number-value-default_value`,
              placeholder: "Number",
              disabled: true
            }
          ]
        },
        {
          cols: [
            {
              view:"label",
              label: "<span>Format: </span>",
              align: "right",
              width: 100
            },
            {
              view: "richselect",
              id: "new_column-body-field_setting-container-unique-number-format",
              value: "new_column-body-field_setting-container-unique-number-format-1",
              options:[
                { "id": "new_column-body-field_setting-container-unique-number-format-1", "value": "None" }, 
                { "id": "new_column-body-field_setting-container-unique-number-format-2", "value": "$" }, 
                { "id": "new_column-body-field_setting-container-unique-number-format-3", "value": "฿" },
                { "id": "new_column-body-field_setting-container-unique-number-format-4", "value": "¥" }
              ]
            }
          ]
        },
        {
          cols: [
            {
              view:"label",
              label: "<span>decimal: </span>",
              align: "right",
              width: 100
            },
            {
              view: "segmented",
              id: "new_column-body-field_setting-container-unique-number-decimal",
              value: "new_column-body-field_setting-container-unique-number-decimal-1",
              options:[
                { "id": "new_column-body-field_setting-container-unique-number-decimal-1", "value": "None" }, 
                { "id": "new_column-body-field_setting-container-unique-number-decimal-2", "value": "Comma" }, 
                { "id": "new_column-body-field_setting-container-unique-number-decimal-3", "value": "Period" },
                { "id": "new_column-body-field_setting-container-unique-number-decimal-4", "value": "Space" }
              ]
            }
          ]
        },
        {
          cols: [
            {
              view:"label",
              label: "<span>Thousands: </span>",
              align: "right",
              width: 100
            },
            {
              view: "segmented",
              id: "new_column-body-field_setting-container-unique-number-thousands",
              value: "new_column-body-field_setting-container-unique-number-thousands-1",
              options:[
                { "id": "new_column-body-field_setting-container-unique-number-thousands-1", "value": "None" }, 
                { "id": "new_column-body-field_setting-container-unique-number-thousands-2", "value": "Comma" }, 
                { "id": "new_column-body-field_setting-container-unique-number-thousands-3", "value": "Period" },
                { "id": "new_column-body-field_setting-container-unique-number-thousands-4", "value": "Space" }
              ]
            }
          ]
        },
      ]
    },
  },
  {
    id: `new_column-body-choose_field_type-dataview-unique-date`,
    image:"/src/choose_field_type-dataview-date.svg",
    label: "Date",
    unigue: {
      id: `new_column-body-field_setting-container-unique-date`,
      hidden: true,
      rows: [
        {
          cols: [
            {
              view: "label",
              label: "<span>Default Value: </span>",
              align: "right",
              width: 100
            },
            {
              view: "checkbox",
              id: `new_column-body-field_setting-container-unique-date-checkbox-default_value`,
              name: "default_value-checkbox",
              width: 30,
              value: 0
            },
            {
              view: "datepicker",
              id: `new_column-body-field_setting-container-unique-date-value-default_value`,
              timepicker: false,
              placeholder: "Date",
              disabled: true
            },
          ]
        }
      ]
    },
  },
  {
    id: `new_column-body-choose_field_type-dataview-unique-datetime`,
    image:"/src/choose_field_type-dataview-datetime.svg",
    label: "Datetime",
    unigue: {
      id: `new_column-body-field_setting-container-unique-datetime`,
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
              id: `new_column-body-field_setting-container-unique-datetime-checkbox-default_value`,
              name: "default_value-checkbox",
              width: 30,
              value: 0
            },
            {
              view: "datepicker",
              id: `new_column-body-field_setting-container-unique-datetime-value-default_value`,
              timepicker: true,
              placeholder: "Datetime",
              disabled: true
            }
          ]
        }
      ]
    }
  }
];

// structure
const main = webix.ui({
  view:"scrollview",
  id:"main",
  scroll:"y",
  maxWidth: 9999, 
  maxHeight: 9999,
  body:{
    rows: [
      {
        rows: [
          {
            view: "button",
            id: "main-button-new_column",
            label: "<span style=\"margin: 0px; font-size: 15px;\">New column</span>",
            width: 100,
          },
          {
            view: "label",
            id: "main-view-new_column"
          }
        ]
      }
    ]   
  }
});

const window_newColumn = webix.ui({
  view: "window",
  id: "new_column",
  modal: true,
  resize: true,
  hidden: true,
  position: "center",
  width: 768,
  height: 488,
  head: {
    view: "toolbar",
    css: "webix_dark",
    paddingX: 2,
    elements: [
      {
        view: "label",
        id: "new_column-head-label",
        align: "center",
        label: "<span>Choose Field-Type</span>"
      },
      {
        cols: [
          {
            view: "button",
            id: "new_column-head-button-maximize",
            label: "<span class=\"webix_icon\"><i class=\"fas fa-expand\"></i></span>",
            css: "webix_transparent",
            width: 50
          },
          {
            view: "button",
            id: "new_column-head-button-minimize",
            label: "<span class=\"webix_icon\"><i class=\"fas fa-compress\"></i></span>",
            hidden: true,
            css: "webix_transparent",
            width: 50
          },
          {
            view: "button",
            id: "new_column-head-button-close",
            label: "<span class=\"webix_icon\"><i class=\"fas fa-times\"></i></span>",
            css: "webix_transparent",
            width: 50
          }
        ]
      }
    ]
  },
  body: {
    rows: [
      {
        id: "new_column-body-choose_field_type",
        hidden: true,
        rows: [
          {
            view: "search",
            id: "new_column-body-choose_field_type-search",
            placeholder: "Search by title...",
            align: "center",
          },
          {
            view:"dataview",
            id:"new_column-body-choose_field_type-dataview-unique",
            template: "<p style=\"text-align: center; margin: 0px; font-size: 20px; font-family: Roboto, sans-serif; font-weight: 500; color: #475466; letter-spacing: 0px; line-height: 30px;\"><img class=\"webix_image\" style=\"max-width:160.5px; max-height:106px;\" src=\"#image#\"><br><span>#label#</span></p>",
            type: {
              width: 187.5,
              height: 150
            },
            data: field_type,
            datatype: "json",
            select: 1,
            css: "webix_transparent"
          },
        ]
      },
      {
        view: "form",
        id: "new_column-body-field_setting",
        css: {
          "background-color": "#ccc !important"
        },
        hidden: true,
        maxWidth: 9999,
        elements: [
          {
            rows: [
              {
                cols: [
                  {
                    view:"label",
                    label:"<span>Field Name: </span>",
                    align: "left",
                    width: 86.88
                  },
                  {
                    name: "label",
                    id: "new_column-body-field_setting-field-field_name",
                    view: "text",
                  },
                  {
                    view: "button",
                    id: "new_column-body-field_setting-button-edit_field_name",
                    css: "webix_transparent",
                    label: "<span class=\"webix_icon_btn wxi-pencil\" style=\"margin: 0px;\"></span>",
                    width: 40,
                  }
                ]
              },
              {
                cols: [
                  {
                    view:"label",
                    label: "<span>Required: </span>",
                    align: "left",
                    width: 66.28
                  },
                  {
                    view: "switch",
                    id: "new_column-body-field_setting-required",
                    value: 0,
                    width: 55
                  },
                  {width: 6},
                  {
                    view:"label",
                    label: "<span>Show icon: </span>",
                    align: "left",
                    width: 75.47
                  },
                  {
                    view: "switch",
                    id: "new_column-body-field_setting-show_icon",
                    value: 0,
                    width: 55
                  }
                ]
              }
            ]
          },
          {
            id: "new_column-body-field_setting-container-unique",
            view: "scrollview",
            scroll:"y",
            css: {
              "background-color": "#eee !important"
            },
            body: {
              rows: field_type.map((e) => e.unigue)
            }
          },
          {
            cols: [
              {},
              {
                view: "button",
                id: "new_column-body-field_setting-button-back",
                label: "<span class=\"webix_icon\"><i class=\"fas fa-arrow-left\"></i></span><span class\"text\">Back</span>",
                css: "webix_transparent icon_back_btn",
                width: 100,
              },
              {
                view: "button",
                id: "new_column-body-field_setting-button-create",
                label: "<span class=\"text\">Create</span>",
                css: "webix_primary",
                width: 100,
              },
            ]
          }
        ],
      },
    ]
  }
});

const window_EditFieldName = webix.ui({
  view: "window",
  id: "new_column-body-field_setting-window-edit_field_name",
  modal: true,
  hidden: true,
  position: "center",
  width: 450,
  height: 250,
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
    view: "form",
    elements: [
      {
        cols: [
          {
            view: "label",
            label: "<span>Field Name: </span>",
            align: "right",
            width: 100
          },
          {
            view:"text",
            id: "new_column-body-field_setting-window-edit_field_name-body-field-field_name",
          },
          {width: 30}
        ]
      },
      {
        cols: [
          {
            view: "label",
            label: "<span>Label: </span>",
            align: "right",
            width: 100
          },
          {
            view:"text",
            id: "new_column-body-field_setting-window-edit_field_name-body-field-label",
          },
          {width: 30}
        ]
      },
      {
        cols:[
          {},
          {
            view: "button",
            id: "new_column-body-field_setting-window-edit_field_name-body-button-cancel",
            value: "Cancel",
            css: "webix_danger",
            width: 100
          },
          {
            view: "button",
            id: "new_column-body-field_setting-window-edit_field_name-body-button-submit",
            value: "Submit",
            css: "webix_primary",
            width: 100
          },
          {width: 30}
        ]
      }
    ]
  }
});

// Data Manager
const data = {
  field_type: '',
  field_name: '',
  label: '',
  required: 0,
  show_icon: 0,
  unigue: {}
}

const setDataDefault = () => {
  data.field_type = '';
  data.field_name = '';
  data.label = '';
  data.required = 0;
  data.show_icon = 0;
  data.unigue.default_value = '';
  $$("new_column-head-label").setValue("<span>Choose Field-Type</span>");
  $$("new_column-body-choose_field_type-search").setValue('');
  $$("new_column-body-field_setting-field-field_name").setValue('');
  $$("new_column-body-field_setting-required").setValue(0);
  $$("new_column-body-field_setting-show_icon").setValue(0);

  // Unique
  field_type.forEach(e => {
    const id = e.label.toLowerCase().replace(/ /g, "_");
    $$(`new_column-body-field_setting-container-unique-${id}-checkbox-default_value`)?.setValue(0);
  });

  // Number
  $$("new_column-body-field_setting-container-unique-number-format").setValue("new_column-body-field_setting-container-unique-number-format-1")
  $$("new_column-body-field_setting-container-unique-number-decimal").setValue("new_column-body-field_setting-container-unique-number-decimal-1")
  $$("new_column-body-field_setting-container-unique-number-thousands").setValue("new_column-body-field_setting-container-unique-number-thousands-1")
};

// event handler
// Main
// Button: New column
$$("main-button-new_column")
  .attachEvent("onItemClick", () => {
    $$("new_column-body-choose_field_type").show();
    $$("new_column").show();
  });

// Window: New column
// Button: Maximize
$$("new_column-head-button-maximize")
  .attachEvent("onItemClick", () => {
    $$("new_column-head-button-maximize").hide();
    $$("new_column-head-button-minimize").show();
    webix.fullscreen.set("new_column");
  });

// Button: Minimize
$$("new_column-head-button-minimize")
  .attachEvent("onItemClick", () => {
    $$("new_column-head-button-maximize").show();
    $$("new_column-head-button-minimize").hide();
    webix.fullscreen.exit();
  });

// Button: Close
$$("new_column-head-button-close")
  .attachEvent("onItemClick", () => {
    setDataDefault();
    field_type.forEach(e => {
      const id = e.label.toLowerCase().replace(/ /g, "_");
      $$(`new_column-body-field_setting-container-unique-${id}`).hide();
    });
    $$("new_column-body-field_setting").hide();
    $$("new_column-body-choose_field_type").hide();
    $$("new_column").hide();
});

// Search: Button Unigue
$$("new_column-body-choose_field_type-search")
  .attachEvent("onTimedKeyPress", (e) => {
    const value = $$("new_column-body-choose_field_type-search").getValue().toLowerCase();
    $$("new_column-body-choose_field_type-dataview-unique").filter(obj => obj.label.toLowerCase().indexOf(value)!=-1)
  });

// Dataview: Unigue
$$("new_column-body-choose_field_type-dataview-unique")
  .attachEvent("onItemClick", (id, event, node) => {
    const field_type_index = field_type.findIndex(e => e.id === id);

    data.field_type = field_type[field_type_index].label
    $$("new_column-head-label").setValue(`<span>Field Setting - ${field_type[field_type_index].label}</span>`);
    $$(id.replace("choose_field_type-dataview", "field_setting-container")).show();
    $$("new_column-body-choose_field_type").hide();
    $$("new_column-body-field_setting").show();
  });

// Window: Field Setting
// Field: Field Name
$$("new_column-body-field_setting-field-field_name")
  .attachEvent("onChange", (e) => {
    const value = $$("new_column-body-field_setting-field-field_name").getValue();

    data.field_name = value;
    data.label = value;
    $$("new_column-body-field_setting-window-edit_field_name-body-field-field_name").setValue(data.field_name);
    $$("new_column-body-field_setting-window-edit_field_name-body-field-label").setValue(data.label);
  });

// Button: Edit field name
$$("new_column-body-field_setting-button-edit_field_name")
  .attachEvent("onItemClick", () => {
    $$("new_column-body-field_setting-window-edit_field_name").show();
});

// Button: Edit field name - Cancel
$$("new_column-body-field_setting-window-edit_field_name-body-button-cancel")
  .attachEvent("onItemClick", () => {
    $$("new_column-body-field_setting-window-edit_field_name-body-field-field_name").setValue(data.field_name);
    $$("new_column-body-field_setting-window-edit_field_name-body-field-label").setValue(data.label);
    $$("new_column-body-field_setting-field-field_name").setValue(data.field_name);
    $$("new_column-body-field_setting-window-edit_field_name").hide();
  });

// Button: Edit field name - Submit
$$("new_column-body-field_setting-window-edit_field_name-body-button-submit")
  .attachEvent("onItemClick", () => {
    data.field_name = $$("new_column-body-field_setting-window-edit_field_name-body-field-field_name").getValue();
    data.label = $$("new_column-body-field_setting-window-edit_field_name-body-field-label").getValue();
    $$("new_column-body-field_setting-window-edit_field_name-body-field-field_name").setValue(data.field_name);
    $$("new_column-body-field_setting-window-edit_field_name-body-field-label").setValue(data.label);
    $$("new_column-body-field_setting-field-field_name").setValue(data.field_name);
    $$("new_column-body-field_setting-window-edit_field_name").hide();
  });

// Checkbox: Unique - Default Value
field_type.forEach(e => {
  const id = e.label.toLowerCase().replace(/ /g, "_");
  $$(`new_column-body-field_setting-container-unique-${id}-checkbox-default_value`)
    ?.attachEvent("onChange", (newv, oldv, config) => {
      if(newv == 0) {
        $$(`new_column-body-field_setting-container-unique-${id}-value-default_value`).disable();
        $$(`new_column-body-field_setting-container-unique-${id}-value-default_value`).setValue('');
      }
      else {
        $$(`new_column-body-field_setting-container-unique-${id}-value-default_value`).enable();
      }
    });
  $$(`new_column-body-field_setting-container-unique-${id}-value-default_value`)
    ?.attachEvent("onChange", (newv, oldv, config) => {
       data.unigue.default_value = newv
    });
});

// Button: Back
$$("new_column-body-field_setting-button-back")
  .attachEvent("onItemClick", () => {
    setDataDefault();
    field_type.forEach(e => {
      const id = e.label.toLowerCase().replace(/ /g, "_");
      $$(`new_column-body-field_setting-container-unique-${id}`).hide();
    });
    $$("new_column-body-field_setting").hide();
    $$("new_column-body-choose_field_type").show();
  });

// Button: Create
$$("new_column-body-field_setting-button-create")
  .attachEvent("onItemClick", () => {
    $$("main-view-new_column").setValue(JSON.stringify(data));
    setDataDefault();
    field_type.forEach(e => {
      const id = e.label.toLowerCase().replace(/ /g, "_");
      $$(`new_column-body-field_setting-container-unique-${id}`).hide();
    });
    $$("new_column-body-field_setting").hide();
    $$("new_column-body-choose_field_type").hide();
    $$("new_column").hide();
  });

// init
const init = () => {
  main.show();
}

init();