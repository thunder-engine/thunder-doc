.. _api_TextInput:

TextInput
=========

Inherited: None

.. _api_TextInput_description:

Description
-----------

The TextInput class provides a user interface for text input, supporting text editing, cursor positioning, and input handling. It inherits functionality from the Widget class and extends it to handle text-related features and animations.



.. _api_TextInput_public:

Public Methods
--------------

+------------------------------+------------------------------------------------------------------------------+
|    :ref:`Frame<api_Frame>` * | :ref:`background<api_TextInput_background>` () const                         |
+------------------------------+------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`backgroundColor<api_TextInput_backgroundColor>` () const               |
+------------------------------+------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`hoverColor<api_TextInput_hoverColor>` () const                         |
+------------------------------+------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`pressedColor<api_TextInput_pressedColor>` () const                     |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setBackground<api_TextInput_setBackground>` (Frame * frame)            |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setBackgroundColor<api_TextInput_setBackgroundColor>` (Vector4  color) |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setHoverColor<api_TextInput_setHoverColor>` (Vector4  color)           |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setPressedColor<api_TextInput_setPressedColor>` (Vector4  color)       |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setText<api_TextInput_setText>` (const std::string  text)              |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setTextColor<api_TextInput_setTextColor>` (Vector4  color)             |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setTextComponent<api_TextInput_setTextComponent>` (Label * label)      |
+------------------------------+------------------------------------------------------------------------------+
|                  std::string | :ref:`text<api_TextInput_text>` () const                                     |
+------------------------------+------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`textColor<api_TextInput_textColor>` () const                           |
+------------------------------+------------------------------------------------------------------------------+
|    :ref:`Label<api_Label>` * | :ref:`textComponent<api_TextInput_textComponent>` () const                   |
+------------------------------+------------------------------------------------------------------------------+



.. _api_TextInput_static:

Static Methods
--------------

None

.. _api_TextInput_methods:

Methods Description
-------------------

.. _api_TextInput_background:

 :ref:`Frame<api_Frame>` * **TextInput::background** () const

Returns the background frame component.

**See also** setBackground().

----

.. _api_TextInput_backgroundColor:

 :ref:`Vector4<api_Vector4>`  **TextInput::backgroundColor** () const

Returns the color of the background.

**See also** setBackgroundColor().

----

.. _api_TextInput_hoverColor:

 :ref:`Vector4<api_Vector4>`  **TextInput::hoverColor** () const

Returns the color of the background in hover state.

**See also** setHoverColor().

----

.. _api_TextInput_pressedColor:

 :ref:`Vector4<api_Vector4>`  **TextInput::pressedColor** () const

Returns the color of the background in pressed state.

**See also** setPressedColor().

----

.. _api_TextInput_setBackground:

 void **TextInput::setBackground** (:ref:`Frame<api_Frame>` * *frame*)

Sets the background *frame* component.

**See also** background().

----

.. _api_TextInput_setBackgroundColor:

 void **TextInput::setBackgroundColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* of the background.

**See also** backgroundColor().

----

.. _api_TextInput_setHoverColor:

 void **TextInput::setHoverColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* of the background in hover state.

**See also** hoverColor().

----

.. _api_TextInput_setPressedColor:

 void **TextInput::setPressedColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* of the background in pressed state.

**See also** pressedColor().

----

.. _api_TextInput_setText:

 void **TextInput::setText** (std::string  *text*)

Sets the *text* in the TextInput.

**See also** *text*().

----

.. _api_TextInput_setTextColor:

 void **TextInput::setTextColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* of the text.

**See also** textColor().

----

.. _api_TextInput_setTextComponent:

 void **TextInput::setTextComponent** (:ref:`Label<api_Label>` * *label*)

Sets the text *label* component.

**See also** textComponent().

----

.. _api_TextInput_text:

 std::string **TextInput::text** () const

Returns the current text entered into the TextInput.

**See also** setText().

----

.. _api_TextInput_textColor:

 :ref:`Vector4<api_Vector4>`  **TextInput::textColor** () const

Returns the color of the text.

**See also** setTextColor().

----

.. _api_TextInput_textComponent:

 :ref:`Label<api_Label>` * **TextInput::textComponent** () const

Returns the text label component.

**See also** setTextComponent().


