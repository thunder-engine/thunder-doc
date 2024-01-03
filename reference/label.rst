.. _api_Label:

Label
=====

Inherited: :doc:`Widget<api_Widget>`

.. _api_Label_description:

Description
-----------

The Label component allows you to display a text in UI.



.. _api_Label_public:

Public Methods
--------------

+------------------------------+---------------------------------------------------------------+
|                          int | :ref:`align<api_Label_align>` () const                        |
+------------------------------+---------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_Label_color>` () const                        |
+------------------------------+---------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`cursorAt<api_Label_cursorAt>` (int  position)           |
+------------------------------+---------------------------------------------------------------+
|      :ref:`Font<api_Font>` * | :ref:`font<api_Label_font>` () const                          |
+------------------------------+---------------------------------------------------------------+
|                          int | :ref:`fontSize<api_Label_fontSize>` () const                  |
+------------------------------+---------------------------------------------------------------+
|                         bool | :ref:`kerning<api_Label_kerning>` () const                    |
+------------------------------+---------------------------------------------------------------+
|                         void | :ref:`setAlign<api_Label_setAlign>` (int  alignment)          |
+------------------------------+---------------------------------------------------------------+
|                         void | :ref:`setColor<api_Label_setColor>` (const Vector4  color)    |
+------------------------------+---------------------------------------------------------------+
|                         void | :ref:`setFont<api_Label_setFont>` (Font * font)               |
+------------------------------+---------------------------------------------------------------+
|                         void | :ref:`setFontSize<api_Label_setFontSize>` (int  size)         |
+------------------------------+---------------------------------------------------------------+
|                         void | :ref:`setKerning<api_Label_setKerning>` (const bool  kerning) |
+------------------------------+---------------------------------------------------------------+
|                         void | :ref:`setText<api_Label_setText>` (const std::string  text)   |
+------------------------------+---------------------------------------------------------------+
|                         void | :ref:`setWordWrap<api_Label_setWordWrap>` (bool  wrap)        |
+------------------------------+---------------------------------------------------------------+
|                  std::string | :ref:`text<api_Label_text>` () const                          |
+------------------------------+---------------------------------------------------------------+
|                         bool | :ref:`wordWrap<api_Label_wordWrap>` () const                  |
+------------------------------+---------------------------------------------------------------+



.. _api_Label_static:

Static Methods
--------------

None

.. _api_Label_methods:

Methods Description
-------------------

.. _api_Label_align:

 int **Label::align** () const

Returns text alignment policy.

**See also** setAlign().

----

.. _api_Label_color:

 :ref:`Vector4<api_Vector4>` **Label::color** () const

Returns the color of the text to be drawn.

**See also** setColor().

----

.. _api_Label_cursorAt:

 :ref:`Vector2<api_Vector2>` **Label::cursorAt** (int  *position*)

Returns a *position* for virtual cursor.

----

.. _api_Label_font:

 :ref:`Font<api_Font>`* **Label::font** () const

Returns the font which will be used to draw a text.

**See also** setFont().

----

.. _api_Label_fontSize:

 int **Label::fontSize** () const

Returns the size of the font.

**See also** setFontSize().

----

.. _api_Label_kerning:

 bool **Label::kerning** () const

Returns true if glyph kerning enabled; otherwise returns false.

**See also** setKerning().

----

.. _api_Label_setAlign:

 void **Label::setAlign** (int  *alignment*)

Sets text *alignment* policy.

**See also** align().

----

.. _api_Label_setColor:

 void **Label::setColor** (:ref:`Vector4<api_Vector4>`  *color*)

Changes the *color* of the text to be drawn.

**See also** *color*().

----

.. _api_Label_setFont:

 void **Label::setFont** (:ref:`Font<api_Font>` * *font*)

Changes the *font* which will be used to draw a text.

**See also** *font*().

----

.. _api_Label_setFontSize:

 void **Label::setFontSize** (int  *size*)

Changes the *size* of the font.

**See also** fontSize().

----

.. _api_Label_setKerning:

 void **Label::setKerning** (bool  *kerning*)

Set true to enable glyph *kerning* and false to disable.

**Note:** Glyph *kerning* functionality depends on fonts which you are using. In case of font doesn't support *kerning*, you will not see the difference.

**See also** *kerning*().

----

.. _api_Label_setText:

 void **Label::setText** (std::string  *text*)

Changes the *text* which will be drawn.

**See also** *text*().

----

.. _api_Label_setWordWrap:

 void **Label::setWordWrap** (bool  *wrap*)

Sets the word *wrap* policy. Set true to enable word *wrap* and false to disable.

**See also** wordWrap().

----

.. _api_Label_text:

 std::string **Label::text** () const

Returns the text which will be drawn.

**See also** setText().

----

.. _api_Label_wordWrap:

 bool **Label::wordWrap** () const

Returns true if word wrap enabled; otherwise returns false.

**See also** setWordWrap().


