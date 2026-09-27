.. _api_LineEdit:

LineEdit
========

Inherited: :ref:`Frame<api_Frame>`

.. _api_LineEdit_description:

Description
-----------

The LineEdit class provides a user interface for text input, supporting text editing, cursor positioning, and input handling. It inherits functionality from the Widget class and extends it to handle text-related features and animations.



.. _api_LineEdit_public:

Public Methods
--------------

+------------------------------+--------------------------------------------------------------------+
|                        float | :ref:`cursorAt<api_LineEdit_036da8be>` (int  position) const       |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`editingFinished<api_LineEdit_f3e87c04>` ()                   |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`focusIn<api_LineEdit_36f5a4c7>` ()                           |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`focusOut<api_LineEdit_7bf9a580>` ()                          |
+------------------------------+--------------------------------------------------------------------+
|      :ref:`Font<api_Font>` * | :ref:`font<api_LineEdit_9d238b07>` () const                        |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`setFont<api_LineEdit_e21b43f8>` (Font * font)                |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`setText<api_LineEdit_bc369e52>` (const TString & text)       |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`setTextColor<api_LineEdit_20df98a7>` (const Vector4 & color) |
+------------------------------+--------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`text<api_LineEdit_02ad86ec>` () const                        |
+------------------------------+--------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`textColor<api_LineEdit_0da256e4>` () const                   |
+------------------------------+--------------------------------------------------------------------+



.. _api_LineEdit_static:

Static Methods
--------------

None

.. _api_LineEdit_methods:

Methods Description
-------------------

.. _api_LineEdit_036da8be:

 float **LineEdit::cursorAt** (int  *position*) const

Returns a *position* for virtual cursor.

----

.. _api_LineEdit_f3e87c04:

 void **LineEdit::editingFinished** ()

Called when editing is finished (Enter key pressed). Emits a signal indicating editing has completed.

----

.. _api_LineEdit_36f5a4c7:

 void **LineEdit::focusIn** ()

Called when the component receives focus. Emits a signal indicating focus has been gained.

----

.. _api_LineEdit_7bf9a580:

 void **LineEdit::focusOut** ()

Called when the component loses focus. Emits a signal indicating focus has been lost.

----

.. _api_LineEdit_9d238b07:

 :ref:`Font<api_Font>` * **LineEdit::font** () const

Returns the font which will be used to draw a text.

**See also** setFont().

----

.. _api_LineEdit_e21b43f8:

 void **LineEdit::setFont** (:ref:`Font<api_Font>` * *font*)

Changes the *font* which will be used to draw a text.

**See also** font().

----

.. _api_LineEdit_bc369e52:

 void **LineEdit::setText** (:ref:`TString<api_TString>` & *text*)

Sets the *text* in the TextInput.

**See also** text().

----

.. _api_LineEdit_20df98a7:

 void **LineEdit::setTextColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the *color* of the text.

**See also** textColor().

----

.. _api_LineEdit_02ad86ec:

 :ref:`TString<api_TString>`  **LineEdit::text** () const

Returns the current text entered into the TextInput.

**See also** setText().

----

.. _api_LineEdit_0da256e4:

 :ref:`Vector4<api_Vector4>`  **LineEdit::textColor** () const

Returns color of the text.

**See also** setTextColor().


