Blockly.Blocks['print'] = {
    init: function() {
      this.appendValueInput("ptr")
          .setCheck(null)
          .appendField("प्रिंट (Hello From क se Coding)");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['set'] = {
    init: function() {
      this.appendValueInput("set")
          .setCheck(null)
          .appendField("मान लेना")
          .appendField(new Blockly.FieldDropdown([["a","A"], ["b","B"], ["c","C"]]), "NAME")
          .appendField("की");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['for'] = {
    init: function() {
      this.appendValueInput("for_1")
          .setCheck(null)
          .appendField("के लिए अ");
      this.appendValueInput("for_2")
          .setCheck(null)
          .appendField("अ <");
      this.appendDummyInput()
          .appendField("अ++");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['color_change'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("रंग पसंद करो")
          .appendField(new Blockly.FieldDropdown([["लाल","R"], [" हरा","G"], [" नीला","B"]]), "color")
          .appendField(new Blockly.FieldDropdown([["शुरू","ON"], ["बंद","OFF"], ["option","OPTIONNAME"]]), "choice");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(15);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['color_change'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("रंग पसंद करो")
          .appendField(new Blockly.FieldDropdown([["लाल","R"], [" हरा","G"], [" नीला","B"]]), "color")
          .appendField(new Blockly.FieldDropdown([["शुरू","ON"], ["बंद","OFF"], ["option","OPTIONNAME"]]), "choice");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(15);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };




/* Block Function    */
Blockly.JavaScript['print'] = function(block) {
    var value_ptr = Blockly.JavaScript.valueToCode(block, 'ptr', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = alert("Hello From क se Coding");
    return code;
  };

  Blockly.JavaScript['set'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_set = Blockly.JavaScript.valueToCode(block, 'set', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['for'] = function(block) {
    var value_for_1 = Blockly.JavaScript.valueToCode(block, 'for_1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_for_2 = Blockly.JavaScript.valueToCode(block, 'for_2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['color_change'] = function(block) {
    var dropdown_color = block.getFieldValue('color');
    var dropdown_choice = block.getFieldValue('choice');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };