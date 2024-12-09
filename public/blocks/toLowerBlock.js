var toLowerBlock = {
  type: 'toLower',
  unix_description: [
    {
      printName: false,
      toLower: (value) => 'tolower(' + value + ')'
    }
  ],
  message0: '%{BKY_TO_LOWER}',
  args0: [
    {
      type: 'input_value',
      name: 'toLower',
      check: 'String'
    }
  ],
  output: 'String',
  style: 'String Functions',
  tooltip: '%{BKY_TO_LOWER_TOOLTIP}',
  helpUrl: '%{BKY_TO_LOWER_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([toLowerBlock]);
window.unixGenerator.forBlock['toLower'] =
  window.unixGenerator.forBlock.generic;
