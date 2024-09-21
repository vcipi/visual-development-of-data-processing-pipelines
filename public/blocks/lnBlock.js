var lnBlock = {
  type: 'ln',
  category: 'File Operations',
  message0: '%{BKY_LN_MESSAGE}',
  unix_description: [
    {
      command: 'ln',
      symbolic: '-s',
      force: '-f',
      interactive: '-i',
      follow_symlink: '-L',
      no_symlink_follow: '-P'
    }
  ],
  message1: '%{BKY_LN_SYMBOLIC_LINK}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'symbolic',
      checked: false // by default it's disabled
    }
  ],
  message2: '%{BKY_LN_FORCE}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'force',
      checked: false // by default it's disabled
    }
  ],
  message3: '%{BKY_LN_INTERACTIVE}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'interactive',
      checked: false // by default it's disabled
    }
  ],
  message4: '%{BKY_LN_SOURCE}: %1 %{BKY_LN_TARGET}: %2',
  args4: [
    {
      type: 'field_input',
      name: 'SOURCE',
      text: 'source' // default source
    },
    {
      type: 'field_input',
      name: 'TARGET',
      text: 'target' // default target
    }
  ],
  style: 'File Operations',
  nextStatement: 'Action',
  tooltip: '%{BKY_LN_TOOLTIP}',
  helpUrl: 'https://linux.die.net/man/1/ln'
};

Blockly.defineBlocksWithJsonArray([lnBlock]);
