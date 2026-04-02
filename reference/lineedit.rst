.. _api_LineEdit:

LineEdit
========

Inherited: None

.. _api_LineEdit_description:

Description
-----------

The LineEdit class provides a user interface for text input, supporting text editing, cursor positioning, and input handling. It inherits functionality from the Widget class and extends it to handle text-related features and animations.



.. _api_LineEdit_public:

Public Methods
--------------

+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`setText<api_LineEdit_08a3746b>` (const TString & text)       |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`setTextColor<api_LineEdit_7dc2f604>` (const Vector4 & color) |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`setTextComponent<api_LineEdit_6ca79835>` (Label * label)     |
+------------------------------+--------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`text<api_LineEdit_8d92af45>` () const                        |
+------------------------------+--------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`textColor<api_LineEdit_ea807c19>` () const                   |
+------------------------------+--------------------------------------------------------------------+
|    :ref:`Label<api_Label>` * | :ref:`textComponent<api_LineEdit_bd9c764f>` () const               |
+------------------------------+--------------------------------------------------------------------+



.. _api_LineEdit_static:

Static Methods
--------------

None

.. _api_LineEdit_methods:

Methods Description
-------------------

.. _api_LineEdit_08a3746b:

 void **LineEdit::setText** (:ref:`TString<api_TString>` & *text*)

Sets the *text* in the TextInput.

**See also** *text*().

----

.. _api_LineEdit_7dc2f604:

 void **LineEdit::setTextColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the *color* of the text.

**See also** textColor().

----

.. _api_LineEdit_6ca79835:

 void **LineEdit::setTextComponent** (:ref:`Label<api_Label>` * *label*)

Sets the text *label* component.

**See also** textComponent().

----

.. _api_LineEdit_8d92af45:

 :ref:`TString<api_TString>`  **LineEdit::text** () const

Returns the current text entered into the TextInput.

**See also** setText().

----

.. _api_LineEdit_ea807c19:

 :ref:`Vector4<api_Vector4>`  **LineEdit::textColor** () const

Returns the color of the text.

**See also** setTextColor().

----

.. _api_LineEdit_bd9c764f:

 :ref:`Label<api_Label>` * **LineEdit::textComponent** () const

Returns the text label component.

**See also** setTextComponent().


