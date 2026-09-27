.. _api_Label:

Label
=====

Inherited: :ref:`Widget<api_Widget>`

.. _api_Label_description:

Description
-----------

The Label class is a graphical user interface (GUI) element that is used to display text within the application window. It is a fundamental component in UI design, providing a way to present information, instructions, or labels for other interactive elements like buttons or text fields.



.. _api_Label_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------+
|                          int | :ref:`align<api_Label_84dae9fb>` () const                   |
+------------------------------+-------------------------------------------------------------+
|                         bool | :ref:`clip<api_Label_15069fba>` () const                    |
+------------------------------+-------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_Label_07456f13>` () const                   |
+------------------------------+-------------------------------------------------------------+
|      :ref:`Font<api_Font>` * | :ref:`font<api_Label_fa1279c4>` () const                    |
+------------------------------+-------------------------------------------------------------+
|                          int | :ref:`fontSize<api_Label_b6a137d2>` () const                |
+------------------------------+-------------------------------------------------------------+
|                         bool | :ref:`kerning<api_Label_b3d406ce>` () const                 |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setAlign<api_Label_0deb1a73>` (int  alignment)        |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setClip<api_Label_d08953fc>` (bool  enable)           |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setColor<api_Label_3ac540d2>` (const Vector4 & color) |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setFont<api_Label_21b6e9c8>` (Font * font)            |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setFontSize<api_Label_e6fcba39>` (int  size)          |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setKerning<api_Label_4ae319bc>` (const bool  enable)  |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setText<api_Label_826c4b3a>` (const TString & text)   |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setTranslated<api_Label_adf082ec>` (bool  enable)     |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setWordWrap<api_Label_fe8ba625>` (bool  wrap)         |
+------------------------------+-------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`text<api_Label_f9150ac2>` () const                    |
+------------------------------+-------------------------------------------------------------+
|                        float | :ref:`textWidth<api_Label_cf7e65a4>` () const               |
+------------------------------+-------------------------------------------------------------+
|                         bool | :ref:`translated<api_Label_192dba47>` () const              |
+------------------------------+-------------------------------------------------------------+
|                         bool | :ref:`wordWrap<api_Label_538fe7cd>` () const                |
+------------------------------+-------------------------------------------------------------+



.. _api_Label_static:

Static Methods
--------------

None

.. _api_Label_methods:

Methods Description
-------------------

.. _api_Label_84dae9fb:

 int **Label::align** () const

Returns text alignment policy.

**See also** setAlign().

----

.. _api_Label_15069fba:

 bool **Label::clip** () const

Returns true if clip mode is enabled; otherwise returns false.

**See also** setClip().

----

.. _api_Label_07456f13:

 :ref:`Vector4<api_Vector4>`  **Label::color** () const

Returns the color of the text to be drawn.

**See also** setColor().

----

.. _api_Label_fa1279c4:

 :ref:`Font<api_Font>` * **Label::font** () const

Returns the font which will be used to draw a text.

**See also** setFont().

----

.. _api_Label_b6a137d2:

 int **Label::fontSize** () const

Returns the size of the font.

**See also** setFontSize().

----

.. _api_Label_b3d406ce:

 bool **Label::kerning** () const

Returns true if glyph kerning enabled; otherwise returns false.

**See also** setKerning().

----

.. _api_Label_0deb1a73:

 void **Label::setAlign** (int  *alignment*)

Sets text *alignment* policy.

**See also** align().

----

.. _api_Label_d08953fc:

 void **Label::setClip** (bool  *enable*)

Sets *enable* or disable clipping of contents to the label bounds.

**See also** clip().

----

.. _api_Label_3ac540d2:

 void **Label::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the text to be drawn.

**See also** color().

----

.. _api_Label_21b6e9c8:

 void **Label::setFont** (:ref:`Font<api_Font>` * *font*)

Changes the *font* which will be used to draw a text.

**See also** font().

----

.. _api_Label_e6fcba39:

 void **Label::setFontSize** (int  *size*)

Changes the *size* of the font.

**See also** fontSize().

----

.. _api_Label_4ae319bc:

 void **Label::setKerning** (bool  *enable*)

Set true to *enable* glyph kerning and false to disable.


**Note:** Glyph kerning functionality depends on fonts which you are using. In case of font doesn't support kerning, you will not see the difference.


**See also** kerning().

----

.. _api_Label_826c4b3a:

 void **Label::setText** (:ref:`TString<api_TString>` & *text*)

Changes the *text* which will be drawn.

**See also** text().

----

.. _api_Label_adf082ec:

 void **Label::setTranslated** (bool  *enable*)

Sets *enable* or disable translation from dictionary for current label.

**See also** translated().

----

.. _api_Label_fe8ba625:

 void **Label::setWordWrap** (bool  *wrap*)

Sets the word *wrap* policy. Set true to enable word *wrap* and false to disable.

**See also** wordWrap().

----

.. _api_Label_f9150ac2:

 :ref:`TString<api_TString>`  **Label::text** () const

Returns the text which will be drawn.

**See also** setText().

----

.. _api_Label_cf7e65a4:

 float **Label::textWidth** () const

Returns a space that text requires to render.

----

.. _api_Label_192dba47:

 bool **Label::translated** () const

Returns true if text in label must be translated; othewise returns false.

**See also** setTranslated().

----

.. _api_Label_538fe7cd:

 bool **Label::wordWrap** () const

Returns true if word wrap enabled; otherwise returns false.

**See also** setWordWrap().


