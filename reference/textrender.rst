.. _api_TextRender:

TextRender Class
================

Inherited: :doc:`Renderable<api_Renderable>`

.. _api_TextRender_description:

Description
-----------

The TextRender component allows you to display a text in both 2D and 3D scenes.



.. _api_TextRender_public:

Public Methods
--------------

+------------------------------+----------------------------------------------------------------------+
|                          int | :ref:`align<api_TextRender_align>` () const                          |
+------------------------------+----------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_TextRender_color>` () const                          |
+------------------------------+----------------------------------------------------------------------+
|      :ref:`Font<api_Font>` * | :ref:`font<api_TextRender_font>` () const                            |
+------------------------------+----------------------------------------------------------------------+
|                          int | :ref:`fontSize<api_TextRender_fontSize>` () const                    |
+------------------------------+----------------------------------------------------------------------+
|                         bool | :ref:`kerning<api_TextRender_kerning>` () const                      |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setAlign<api_TextRender_setAlign>` (int  alignment)            |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setColor<api_TextRender_setColor>` (const Vector4  color)      |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setFont<api_TextRender_setFont>` (Font * font)                 |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setFontSize<api_TextRender_setFontSize>` (int  size)           |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setKerning<api_TextRender_setKerning>` (const bool  kerning)   |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setMaterial<api_TextRender_setMaterial>` (Material * material) |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setSize<api_TextRender_setSize>` (const Vector2  boundaries)   |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setText<api_TextRender_setText>` (const std::string  text)     |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setWordWrap<api_TextRender_setWordWrap>` (bool  wrap)          |
+------------------------------+----------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`size<api_TextRender_size>` () const                            |
+------------------------------+----------------------------------------------------------------------+
|                  std::string | :ref:`text<api_TextRender_text>` () const                            |
+------------------------------+----------------------------------------------------------------------+
|                         bool | :ref:`wordWrap<api_TextRender_wordWrap>` () const                    |
+------------------------------+----------------------------------------------------------------------+



.. _api_TextRender_static:

Static Methods
--------------

+------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`cursorPosition<api_TextRender_cursorPosition>` (Font * font, int  size, const std::string & text, bool  kerning, const Vector2 & boundaries) |
+------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_TextRender_methods:

Methods Description
-------------------

.. _api_TextRender_align:

 int **TextRender::align** () const

Returns text alignment policy.

**See also** setAlign().

----

.. _api_TextRender_color:

 :ref:`Vector4<api_Vector4>` **TextRender::color** () const

Returns the color of the text to be drawn.

**See also** setColor().

----

.. _api_TextRender_cursorPosition:

 :ref:`Vector2<api_Vector2>` **TextRender::cursorPosition** (:ref:`Font<api_Font>` * *font*, int  *size*, std::string & *text*, bool  *kerning*, :ref:`Vector2<api_Vector2>` & *boundaries*)

Returns the cursor position for rendering *text* with specified *font* and *size*. Developer can also enable *kerning* and specify a *boundaries* for the *text*.

----

.. _api_TextRender_font:

 :ref:`Font<api_Font>`* **TextRender::font** () const

Returns the font which will be used to draw a text.

**See also** setFont().

----

.. _api_TextRender_fontSize:

 int **TextRender::fontSize** () const

Returns the size of the font.

**See also** setFontSize().

----

.. _api_TextRender_kerning:

 bool **TextRender::kerning** () const

Returns true if glyph kerning enabled; otherwise returns false.

**See also** setKerning().

----

.. _api_TextRender_setAlign:

 void **TextRender::setAlign** (int  *alignment*)

Sets text *alignment* policy.

**See also** align().

----

.. _api_TextRender_setColor:

 void **TextRender::setColor** (:ref:`Vector4<api_Vector4>`  *color*)

Changes the *color* of the text to be drawn.

**See also** *color*().

----

.. _api_TextRender_setFont:

 void **TextRender::setFont** (:ref:`Font<api_Font>` * *font*)

Changes the *font* which will be used to draw a text.

**See also** *font*().

----

.. _api_TextRender_setFontSize:

 void **TextRender::setFontSize** (int  *size*)

Changes the *size* of the font.

**See also** fontSize().

----

.. _api_TextRender_setKerning:

 void **TextRender::setKerning** (bool  *kerning*)

Set true to enable glyph *kerning* and false to disable.

**Note:** Glyph *kerning* functionality depends on fonts which you are using. In case of font doesn't support *kerning*, you will not see the difference.

**See also** *kerning*().

----

.. _api_TextRender_setMaterial:

 void **TextRender::setMaterial** (:ref:`Material<api_Material>` * *material*)

Reimplements: Renderable::setMaterial(Material *material).

Creates a new instance of *material* and assigns it.

----

.. _api_TextRender_setSize:

 void **TextRender::setSize** (:ref:`Vector2<api_Vector2>`  *boundaries*)

Changes the size of *boundaries* of the text area. This parameter is involved in Word Wrap calculations.

**See also** size().

----

.. _api_TextRender_setText:

 void **TextRender::setText** (std::string  *text*)

Changes the *text* which will be drawn.

**See also** *text*().

----

.. _api_TextRender_setWordWrap:

 void **TextRender::setWordWrap** (bool  *wrap*)

Sets the word *wrap* policy. Set true to enable word *wrap* and false to disable.

**See also** wordWrap().

----

.. _api_TextRender_size:

 :ref:`Vector2<api_Vector2>` **TextRender::size** () const

Returns the boundaries of the text area. This parameter is involved in Word Wrap calculations.

**See also** setSize().

----

.. _api_TextRender_text:

 std::string **TextRender::text** () const

Returns the text which will be drawn.

**See also** setText().

----

.. _api_TextRender_wordWrap:

 bool **TextRender::wordWrap** () const

Returns true if word wrap enabled; otherwise returns false.

**See also** setWordWrap().


