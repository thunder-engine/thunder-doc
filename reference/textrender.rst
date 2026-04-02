.. _api_TextRender:

TextRender
==========

Inherited: None

.. _api_TextRender_description:

Description
-----------

The TextRender component allows you to display a text in both 2D and 3D scenes.



.. _api_TextRender_public:

Public Methods
--------------

+------------------------------+----------------------------------------------------------------------+
|                          int | :ref:`align<api_TextRender_a5b6f319>` () const                       |
+------------------------------+----------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_TextRender_5e1fcda7>` () const                       |
+------------------------------+----------------------------------------------------------------------+
|      :ref:`Font<api_Font>` * | :ref:`font<api_TextRender_3f94b6c0>` () const                        |
+------------------------------+----------------------------------------------------------------------+
|                          int | :ref:`fontSize<api_TextRender_89f31ba0>` () const                    |
+------------------------------+----------------------------------------------------------------------+
|                         bool | :ref:`kerning<api_TextRender_51c498e7>` () const                     |
+------------------------------+----------------------------------------------------------------------+
|                          int | :ref:`layer<api_TextRender_ac2e654d>` () const                       |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setAlign<api_TextRender_8239c75d>` (int  alignment)            |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setColor<api_TextRender_ef98054b>` (const Vector4 & color)     |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setFont<api_TextRender_c5ad2034>` (Font * font)                |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setFontSize<api_TextRender_a6d25f1b>` (int  size)              |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setKerning<api_TextRender_fc5e3640>` (const bool  enable)      |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setLayer<api_TextRender_450ce9a7>` (int  layer)                |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setMaterial<api_TextRender_d9fe6715>` (Material * material)    |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setSize<api_TextRender_49f20cd8>` (const Vector2 & boundaries) |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setText<api_TextRender_2a571c38>` (const TString & text)       |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setTranslated<api_TextRender_e9a0538b>` (bool  enable)         |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setWordWrap<api_TextRender_5f7d964e>` (bool  wrap)             |
+------------------------------+----------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`size<api_TextRender_c869bf10>` () const                        |
+------------------------------+----------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`text<api_TextRender_0eb32491>` () const                        |
+------------------------------+----------------------------------------------------------------------+
|                         bool | :ref:`translated<api_TextRender_f6259bce>` () const                  |
+------------------------------+----------------------------------------------------------------------+
|                         bool | :ref:`wordWrap<api_TextRender_c0b1e4fd>` () const                    |
+------------------------------+----------------------------------------------------------------------+



.. _api_TextRender_static:

Static Methods
--------------

None

.. _api_TextRender_methods:

Methods Description
-------------------

.. _api_TextRender_a5b6f319:

 int **TextRender::align** () const

Returns text alignment policy.

**See also** setAlign().

----

.. _api_TextRender_5e1fcda7:

 :ref:`Vector4<api_Vector4>`  **TextRender::color** () const

Returns the color of the text to be drawn.

**See also** setColor().

----

.. _api_TextRender_3f94b6c0:

 :ref:`Font<api_Font>` * **TextRender::font** () const

Returns the font which will be used to draw a text.

**See also** setFont().

----

.. _api_TextRender_89f31ba0:

 int **TextRender::fontSize** () const

Returns the size of the font.

**See also** setFontSize().

----

.. _api_TextRender_51c498e7:

 bool **TextRender::kerning** () const

Returns true if glyph kerning enabled; otherwise returns false.

**See also** setKerning().

----

.. _api_TextRender_ac2e654d:

 int **TextRender::layer** () const

Returns the redering layer.

**See also** setLayer().

----

.. _api_TextRender_8239c75d:

 void **TextRender::setAlign** (int  *alignment*)

Sets text *alignment* policy.

**See also** align().

----

.. _api_TextRender_ef98054b:

 void **TextRender::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the text to be drawn.

**See also** *color*().

----

.. _api_TextRender_c5ad2034:

 void **TextRender::setFont** (:ref:`Font<api_Font>` * *font*)

Sets the new *font* asset used to render a text.

**See also** *font*().

----

.. _api_TextRender_a6d25f1b:

 void **TextRender::setFontSize** (int  *size*)

Changes the *size* of the font.

**See also** fontSize().

----

.. _api_TextRender_fc5e3640:

 void **TextRender::setKerning** (bool  *enable*)

Set true to *enable* glyph kerning and false to disable.


**Note:** Glyph kerning functionality depends on fonts which you are using. In case of font doesn't support kerning, you will not see the difference.


**See also** kerning().

----

.. _api_TextRender_450ce9a7:

 void **TextRender::setLayer** (int  *layer*)

Sets the redering *layer*.

**See also** *layer*().

----

.. _api_TextRender_d9fe6715:

 void **TextRender::setMaterial** (:ref:`Material<api_Material>` * *material*)

Reimplements: Renderable::setMaterial(Material *material).

Creates a new instance of *material* and assigns it.

----

.. _api_TextRender_49f20cd8:

 void **TextRender::setSize** (:ref:`Vector2<api_Vector2>` & *boundaries*)

Changes the size of *boundaries* of the text area. This parameter is involved in Word Wrap calculations.

**See also** size().

----

.. _api_TextRender_2a571c38:

 void **TextRender::setText** (:ref:`TString<api_TString>` & *text*)

Changes the *text* which will be drawn.

**See also** *text*().

----

.. _api_TextRender_e9a0538b:

 void **TextRender::setTranslated** (bool  *enable*)

Sets *enable* or disable translation from dictionary for current text render.

**See also** translated().

----

.. _api_TextRender_5f7d964e:

 void **TextRender::setWordWrap** (bool  *wrap*)

Sets the word *wrap* policy. Set true to enable word *wrap* and false to disable.

**See also** wordWrap().

----

.. _api_TextRender_c869bf10:

 :ref:`Vector2<api_Vector2>`  **TextRender::size** () const

Returns the boundaries of the text area. This parameter is involved in Word Wrap calculations.

**See also** setSize().

----

.. _api_TextRender_0eb32491:

 :ref:`TString<api_TString>`  **TextRender::text** () const

Returns the text which will be drawn.

**See also** setText().

----

.. _api_TextRender_f6259bce:

 bool **TextRender::translated** () const

Returns true if text in text render must be translated; othewise returns false.

**See also** setTranslated().

----

.. _api_TextRender_c0b1e4fd:

 bool **TextRender::wordWrap** () const

Returns true if word wrap enabled; otherwise returns false.

**See also** setWordWrap().


