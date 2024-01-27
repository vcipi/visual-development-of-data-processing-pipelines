var NFBlock = {
  type: "NF",
  category: "File and Directory Operations",
  unix_description: [
    {
      FieldNumber: "NF"
    }
  ],
  message0: "%{BKY_FIELD_NUMBER} %1\n",
  args0: [
    {
      type: 'input_dummy',
      name: 'FieldNumber'
    },
  ],
  colour: 130,
  output: null,
  // nextStatement: "Action",
  tooltip: "%{BKY_FIELD_NUMBER_TOOLTIP}",
  helpUrl: "%{BKY_FIELD_NUMBER_HELPURL}" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([NFBlock]);
