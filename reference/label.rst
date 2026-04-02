.. _api_Label:

Label
=====

Inherited: None

.. _api_Label_description:

Description
-----------

The Label class is a graphical user interface (GUI) element that is used to display text within the application window. It is a fundamental component in UI design, providing a way to present information, instructions, or labels for other interactive elements like buttons or text fields.



.. _api_Label_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------+
|                          int | :ref:`align<api_Label_93d406c1>` () const                   |
+------------------------------+-------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_Label_f907a2cb>` () const                   |
+------------------------------+-------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`cursorAt<api_Label_ec8b4397>` (int  position)         |
+------------------------------+-------------------------------------------------------------+
|      :ref:`Font<api_Font>` * | :ref:`font<api_Label_5c7ed618>` () const                    |
+------------------------------+-------------------------------------------------------------+
|                          int | :ref:`fontSize<api_Label_23c17e85>` () const                |
+------------------------------+-------------------------------------------------------------+
|                         bool | :ref:`kerning<api_Label_4d2b0613>` () const                 |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setAlign<api_Label_cdb0ef2a>` (int  alignment)        |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setColor<api_Label_ea2d145f>` (const Vector4 & color) |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setFont<api_Label_03df67bc>` (Font * font)            |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setFontSize<api_Label_2735810c>` (int  size)          |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setKerning<api_Label_d6c9e41f>` (const bool  enable)  |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setText<api_Label_dc521e48>` (const TString & text)   |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setTranslated<api_Label_e8c6f027>` (bool  enable)     |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setWordWrap<api_Label_fb5ed6c1>` (bool  wrap)         |
+------------------------------+-------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`text<api_Label_5aecdf73>` () const                    |
+------------------------------+-------------------------------------------------------------+
|                         bool | :ref:`translated<api_Label_13b7df48>` () const              |
+------------------------------+-------------------------------------------------------------+
|                         bool | :ref:`wordWrap<api_Label_37c5e0fd>` () const                |
+------------------------------+-------------------------------------------------------------+



.. _api_Label_static:

Static Methods
--------------

None

.. _api_Label_methods:

Methods Description
-------------------

.. _api_Label_93d406c1:

 int **Label::align** () const

Returns text alignment policy.

**See also** setAlign().

----

.. _api_Label_f907a2cb:

 :ref:`Vector4<api_Vector4>`  **Label::color** () const

Returns the color of the text to be drawn.

**See also** setColor().

----

.. _api_Label_ec8b4397:

 :ref:`Vector2<api_Vector2>`  **Label::cursorAt** (int  *position*)

Returns a *position* for virtual cursor.

----

.. _api_Label_5c7ed618:

 :ref:`Font<api_Font>` * **Label::font** () const

Returns the font which will be used to draw a text.

**See also** setFont().

----

.. _api_Label_23c17e85:

 int **Label::fontSize** () const

Returns the size of the font.

**See also** setFontSize().

----

.. _api_Label_4d2b0613:

 bool **Label::kerning** () const

Returns true if glyph kerning enabled; otherwise returns false.

**See also** setKerning().

----

.. _api_Label_cdb0ef2a:

 void **Label::setAlign** (int  *alignment*)

Sets text *alignment* policy.

**See also** align().

----

.. _api_Label_ea2d145f:

 void **Label::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the text to be drawn.

**See also** color().

----

.. _api_Label_03df67bc:

 void **Label::setFont** (:ref:`Font<api_Font>` * *font*)

Changes the *font* which will be used to draw a text.

**See also** font().

----

.. _api_Label_2735810c:

 void **Label::setFontSize** (int  *size*)

Changes the *size* of the font.

**See also** fontSize().

----

.. _api_Label_d6c9e41f:

 void **Label::setKerning** (bool  *enable*)

Set true to *enable* glyph kerning and false to disable.


**Note:** Glyph kerning functionality depends on fonts which you are using. In case of font doesn't support kerning, you will not see the difference.


**See also** kerning().

----

.. _api_Label_dc521e48:

 void **Label::setText** (:ref:`TString<api_TString>` & *text*)

Changes the *text* which will be drawn.

**See also** text().

----

.. _api_Label_e8c6f027:

 void **Label::setTranslated** (bool  *enable*)

Sets *enable* or disable translation from dictionary for current label.

**See also** translated().

----

.. _api_Label_fb5ed6c1:

 void **Label::setWordWrap** (bool  *wrap*)

Sets the word *wrap* policy. Set true to enable word *wrap* and false to disable.

**See also** wordWrap().

----

.. _api_Label_5aecdf73:

 :ref:`TString<api_TString>`  **Label::text** () const

Returns the text which will be drawn.

**See also** setText().

----

.. _api_Label_13b7df48:

 bool **Label::translated** () const

Returns true if text in label must be translated; othewise returns false.

**See also** setTranslated().

----

.. _api_Label_37c5e0fd:

 bool **Label::wordWrap** () const

Returns true if word wrap enabled; otherwise returns false.

**See also** setWordWrap().


