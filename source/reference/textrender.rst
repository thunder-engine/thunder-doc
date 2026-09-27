.. _api_TextRender:

TextRender
==========

Inherited: :ref:`Renderable<api_Renderable>`

.. _api_TextRender_description:

Description
-----------

The TextRender component allows you to display a text in both 2D and 3D scenes.



.. _api_TextRender_public:

Public Methods
--------------

+------------------------------+----------------------------------------------------------------------+
|                          int | :ref:`align<api_TextRender_d17e6f54>` () const                       |
+------------------------------+----------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_TextRender_c09fe72d>` () const                       |
+------------------------------+----------------------------------------------------------------------+
|      :ref:`Font<api_Font>` * | :ref:`font<api_TextRender_230cf69b>` () const                        |
+------------------------------+----------------------------------------------------------------------+
|                          int | :ref:`fontSize<api_TextRender_0afc2b14>` () const                    |
+------------------------------+----------------------------------------------------------------------+
|                         bool | :ref:`kerning<api_TextRender_92ca8b51>` () const                     |
+------------------------------+----------------------------------------------------------------------+
|                          int | :ref:`layer<api_TextRender_2c7403d5>` () const                       |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setAlign<api_TextRender_2d8016ea>` (int  alignment)            |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setColor<api_TextRender_b64d97ce>` (const Vector4 & color)     |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setFont<api_TextRender_9d2e817f>` (Font * font)                |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setFontSize<api_TextRender_6a19f5bd>` (int  size)              |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setKerning<api_TextRender_cfae085d>` (const bool  enable)      |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setLayer<api_TextRender_a40bc563>` (int  layer)                |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setMaterial<api_TextRender_5dc9a2b8>` (Material * material)    |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setSize<api_TextRender_ca138be0>` (const Vector2 & boundaries) |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setText<api_TextRender_fce31850>` (const TString & text)       |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setTranslated<api_TextRender_1e3795cd>` (bool  enable)         |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setWordWrap<api_TextRender_4b8e3260>` (bool  wrap)             |
+------------------------------+----------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`size<api_TextRender_a8d3f26e>` () const                        |
+------------------------------+----------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`text<api_TextRender_7b2948d1>` () const                        |
+------------------------------+----------------------------------------------------------------------+
|                         bool | :ref:`translated<api_TextRender_14b29de5>` () const                  |
+------------------------------+----------------------------------------------------------------------+
|                         bool | :ref:`wordWrap<api_TextRender_216bef5a>` () const                    |
+------------------------------+----------------------------------------------------------------------+



.. _api_TextRender_static:

Static Methods
--------------

None

.. _api_TextRender_methods:

Methods Description
-------------------

.. _api_TextRender_d17e6f54:

 int **TextRender::align** () const

Returns text alignment policy.

**See also** setAlign().

----

.. _api_TextRender_c09fe72d:

 :ref:`Vector4<api_Vector4>`  **TextRender::color** () const

Returns the color of the text to be drawn.

**See also** setColor().

----

.. _api_TextRender_230cf69b:

 :ref:`Font<api_Font>` * **TextRender::font** () const

Returns the font which will be used to draw a text.

**See also** setFont().

----

.. _api_TextRender_0afc2b14:

 int **TextRender::fontSize** () const

Returns the size of the font.

**See also** setFontSize().

----

.. _api_TextRender_92ca8b51:

 bool **TextRender::kerning** () const

Returns true if glyph kerning enabled; otherwise returns false.

**See also** setKerning().

----

.. _api_TextRender_2c7403d5:

 int **TextRender::layer** () const

Returns the redering layer.

**See also** setLayer().

----

.. _api_TextRender_2d8016ea:

 void **TextRender::setAlign** (int  *alignment*)

Sets text *alignment* policy.

**See also** align().

----

.. _api_TextRender_b64d97ce:

 void **TextRender::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the text to be drawn.

**See also** color().

----

.. _api_TextRender_9d2e817f:

 void **TextRender::setFont** (:ref:`Font<api_Font>` * *font*)

Sets the new *font* asset used to render a text.

**See also** font().

----

.. _api_TextRender_6a19f5bd:

 void **TextRender::setFontSize** (int  *size*)

Changes the *size* of the font.

**See also** fontSize().

----

.. _api_TextRender_cfae085d:

 void **TextRender::setKerning** (bool  *enable*)

Set true to *enable* glyph kerning and false to disable.


**Note:** Glyph kerning functionality depends on fonts which you are using. In case of font doesn't support kerning, you will not see the difference.


**See also** kerning().

----

.. _api_TextRender_a40bc563:

 void **TextRender::setLayer** (int  *layer*)

Sets the redering layer.

**See also** layer().

----

.. _api_TextRender_5dc9a2b8:

 void **TextRender::setMaterial** (:ref:`Material<api_Material>` * *material*)

Reimplements: Renderable::setMaterial(Material *material).

Creates a new instance of *material* and assigns it.

----

.. _api_TextRender_ca138be0:

 void **TextRender::setSize** (:ref:`Vector2<api_Vector2>` & *boundaries*)

Changes the size of *boundaries* of the text area. This parameter is involved in Word Wrap calculations.

**See also** size().

----

.. _api_TextRender_fce31850:

 void **TextRender::setText** (:ref:`TString<api_TString>` & *text*)

Changes the *text* which will be drawn.

**See also** text().

----

.. _api_TextRender_1e3795cd:

 void **TextRender::setTranslated** (bool  *enable*)

Sets *enable* or disable translation from dictionary for current text render.

**See also** translated().

----

.. _api_TextRender_4b8e3260:

 void **TextRender::setWordWrap** (bool  *wrap*)

Sets the word *wrap* policy. Set true to enable word *wrap* and false to disable.

**See also** wordWrap().

----

.. _api_TextRender_a8d3f26e:

 :ref:`Vector2<api_Vector2>`  **TextRender::size** () const

Returns the boundaries of the text area. This parameter is involved in Word Wrap calculations.

**See also** setSize().

----

.. _api_TextRender_7b2948d1:

 :ref:`TString<api_TString>`  **TextRender::text** () const

Returns the text which will be drawn.

**See also** setText().

----

.. _api_TextRender_14b29de5:

 bool **TextRender::translated** () const

Returns true if text in text render must be translated; othewise returns false.

**See also** setTranslated().

----

.. _api_TextRender_216bef5a:

 bool **TextRender::wordWrap** () const

Returns true if word wrap enabled; otherwise returns false.

**See also** setWordWrap().


