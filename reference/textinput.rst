.. _api_TextInput:

TextInput Class
===============

Inherited: :doc:`Frame<api_Frame>`

.. _api_TextInput_description:

Description
-----------

The TextInput class provides a user interface for text input, supporting text editing, cursor positioning, and input handling. It inherits functionality from the Widget class and extends it to handle text-related features and animations.



.. _api_TextInput_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setText<api_TextInput_setText>` (const std::string  text)         |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setTextColor<api_TextInput_setTextColor>` (Vector4  color)        |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setTextComponent<api_TextInput_setTextComponent>` (Label * label) |
+------------------------------+-------------------------------------------------------------------------+
|                  std::string | :ref:`text<api_TextInput_text>` () const                                |
+------------------------------+-------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`textColor<api_TextInput_textColor>` () const                      |
+------------------------------+-------------------------------------------------------------------------+
|    :ref:`Label<api_Label>` * | :ref:`textComponent<api_TextInput_textComponent>` () const              |
+------------------------------+-------------------------------------------------------------------------+



.. _api_TextInput_static:

Static Methods
--------------

None

.. _api_TextInput_methods:

Methods Description
-------------------

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

 :ref:`Vector4<api_Vector4>` **TextInput::textColor** () const

Returns the color of the text.

**See also** setTextColor().

----

.. _api_TextInput_textComponent:

 :ref:`Label<api_Label>`* **TextInput::textComponent** () const

Returns the text label component.

**See also** setTextComponent().


