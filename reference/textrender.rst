.. _api_TextRender:
TextRender Class
================

Inherited: :ref:`Renderable<api_Renderable>`

.. _api_TextRender_description:
Description
-----------

The TextRender component allows you to display a text in both 2D and 3D scenes.



.. _api_TextRender_public:
Public Methods
--------------

+-------------------------------------+----------------------------------------------------------------------+
|                 :ref:`int<api_int>` | :ref:`align<api_TextRender_align>` () const                          |
+-------------------------------------+----------------------------------------------------------------------+
|       :ref:`Vector4<api_Vector4>` & | :ref:`color<api_TextRender_color>` () const                          |
+-------------------------------------+----------------------------------------------------------------------+
|             :ref:`Font<api_Font>` * | :ref:`font<api_TextRender_font>` () const                            |
+-------------------------------------+----------------------------------------------------------------------+
|                 :ref:`int<api_int>` | :ref:`fontSize<api_TextRender_fontSize>` () const                    |
+-------------------------------------+----------------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`kerning<api_TextRender_kerning>` () const                      |
+-------------------------------------+----------------------------------------------------------------------+
|     :ref:`Material<api_Material>` * | :ref:`material<api_TextRender_material>` () const                    |
+-------------------------------------+----------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setAlign<api_TextRender_setAlign>` (int  alignment)            |
+-------------------------------------+----------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setColor<api_TextRender_setColor>` (const Vector4 & color)     |
+-------------------------------------+----------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setFont<api_TextRender_setFont>` (Font * font)                 |
+-------------------------------------+----------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setFontSize<api_TextRender_setFontSize>` (int  size)           |
+-------------------------------------+----------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setKerning<api_TextRender_setKerning>` (const bool  kerning)   |
+-------------------------------------+----------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setMaterial<api_TextRender_setMaterial>` (Material * material) |
+-------------------------------------+----------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setSize<api_TextRender_setSize>` (const Vector2 & boundaries)  |
+-------------------------------------+----------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setText<api_TextRender_setText>` (const std::string & text)    |
+-------------------------------------+----------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setWordWrap<api_TextRender_setWordWrap>` (bool  wrap)          |
+-------------------------------------+----------------------------------------------------------------------+
|       :ref:`Vector2<api_Vector2>` & | :ref:`size<api_TextRender_size>` () const                            |
+-------------------------------------+----------------------------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`text<api_TextRender_text>` () const                            |
+-------------------------------------+----------------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`wordWrap<api_TextRender_wordWrap>` () const                    |
+-------------------------------------+----------------------------------------------------------------------+



.. _api_TextRender_static:
Static Methods
--------------

None

.. _api_TextRender_methods:
Methods Description
-------------------

.. _api_TextRender_align:

:ref:`int<api_int>`  **TextRender::align** () const

Returns text alignment policy.

**See also** setAlign().

----

.. _api_TextRender_color:

:ref:`Vector4<api_Vector4>` & **TextRender::color** () const

Returns the color of the text to be drawn.

**See also** setColor().

----

.. _api_TextRender_font:

:ref:`Font<api_Font>` * **TextRender::font** () const

Returns the font which will be used to draw a text.

**See also** setFont().

----

.. _api_TextRender_fontSize:

:ref:`int<api_int>`  **TextRender::fontSize** () const

Returns the size of the font.

**See also** setFontSize().

----

.. _api_TextRender_kerning:

:ref:`bool<api_bool>`  **TextRender::kerning** () const

Returns true if glyph kerning enabled; otherwise returns false.

**See also** setKerning().

----

.. _api_TextRender_material:

:ref:`Material<api_Material>` * **TextRender::material** () const

Returns an instantiated Material assigned to TextRender.

**See also** setMaterial().

----

.. _api_TextRender_setAlign:

:ref:`void<api_void>`  **TextRender::setAlign** (:ref:`int<api_int>`  *alignment*)

Sets text *alignment* policy.

**See also** align().

----

.. _api_TextRender_setColor:

:ref:`void<api_void>`  **TextRender::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the text to be drawn.

**See also** *color*().

----

.. _api_TextRender_setFont:

:ref:`void<api_void>`  **TextRender::setFont** (:ref:`Font<api_Font>` * *font*)

Changes the *font* which will be used to draw a text.

**See also** *font*().

----

.. _api_TextRender_setFontSize:

:ref:`void<api_void>`  **TextRender::setFontSize** (:ref:`int<api_int>`  *size*)

Changes the *size* of the font.

**See also** fontSize().

----

.. _api_TextRender_setKerning:

:ref:`void<api_void>`  **TextRender::setKerning** (:ref:`bool<api_bool>`  *kerning*)

Set true to enable glyph *kerning* and false to disable.

**Note:** Glyph *kerning* functionality depends on fonts which you are using. In case of font doesn't support *kerning*, you will not see the difference.

**See also** *kerning*().

----

.. _api_TextRender_setMaterial:

:ref:`void<api_void>`  **TextRender::setMaterial** (:ref:`Material<api_Material>` * *material*)

Creates a new instance of *material* and assigns it.

**See also** *material*().

----

.. _api_TextRender_setSize:

:ref:`void<api_void>`  **TextRender::setSize** (:ref:`Vector2<api_Vector2>` & *boundaries*)

Changes the size of *boundaries* of the text area. This parameter is involved in Word Wrap calculations.

**See also** size().

----

.. _api_TextRender_setText:

:ref:`void<api_void>`  **TextRender::setText** (:ref:`std::string<api_std::string>` & *text*)

Changes the *text* which will be drawn.

**See also** *text*().

----

.. _api_TextRender_setWordWrap:

:ref:`void<api_void>`  **TextRender::setWordWrap** (:ref:`bool<api_bool>`  *wrap*)

Sets the word *wrap* policy. Set true to enable word *wrap* and false to disable.

**See also** wordWrap().

----

.. _api_TextRender_size:

:ref:`Vector2<api_Vector2>` & **TextRender::size** () const

Returns the boundaries of the text area. This parameter is involved in Word Wrap calculations.

**See also** setSize().

----

.. _api_TextRender_text:

:ref:`std::string<api_std::string>`  **TextRender::text** () const

Returns the text which will be drawn.

**See also** setText().

----

.. _api_TextRender_wordWrap:

:ref:`bool<api_bool>`  **TextRender::wordWrap** () const

Returns true if word wrap enabled; otherwise returns false.

**See also** setWordWrap().

----


