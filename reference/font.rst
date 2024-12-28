.. _api_Font:

Font
====

Inherited: None

.. _api_Font_description:

Description
-----------

The basic element of a font is a glyph. All required glyphs are contained in a special texture - Atlas. If at the moment of accessing the font the glyph is not present in the atlas, the glyph will be loaded there dynamically.



.. _api_Font_public:

Public Methods
--------------

+--------+---------------------------------------------------------------------------------------+
|    int | :ref:`atlasIndex<api_Font_atlasIndex>` (int  glyph) const                             |
+--------+---------------------------------------------------------------------------------------+
|  float | :ref:`cursorWidth<api_Font_cursorWidth>` () const                                     |
+--------+---------------------------------------------------------------------------------------+
|    int | :ref:`length<api_Font_length>` (const std::string & characters) const                 |
+--------+---------------------------------------------------------------------------------------+
|  float | :ref:`lineHeight<api_Font_lineHeight>` () const                                       |
+--------+---------------------------------------------------------------------------------------+
|   void | :ref:`requestCharacters<api_Font_requestCharacters>` (const std::string & characters) |
+--------+---------------------------------------------------------------------------------------+
|    int | :ref:`requestKerning<api_Font_requestKerning>` (int  glyph, int  previous) const      |
+--------+---------------------------------------------------------------------------------------+
|  float | :ref:`spaceWidth<api_Font_spaceWidth>` () const                                       |
+--------+---------------------------------------------------------------------------------------+



.. _api_Font_static:

Static Methods
--------------

None

.. _api_Font_methods:

Methods Description
-------------------

.. _api_Font_atlasIndex:

 int **Font::atlasIndex** (int  *glyph*) const

Returns the index of the *glyph* in the atlas.

----

.. _api_Font_cursorWidth:

 float **Font::cursorWidth** () const

Returns visual width of the cursor for the font in world units.

----

.. _api_Font_length:

 int **Font::length** (std::string & *characters*) const

Returns the number of *characters* in the string.

----

.. _api_Font_lineHeight:

 float **Font::lineHeight** () const

Returns visual height for the font in world units.

----

.. _api_Font_requestCharacters:

 void **Font::requestCharacters** (std::string & *characters*)

Requests *characters* to be added to the font atlas.

----

.. _api_Font_requestKerning:

 int **Font::requestKerning** (int  *glyph*, int  *previous*) const

Returns the kerning offset between a *glyph* and *previous* *glyph*.


**Note:** In case of font doesn't support kerning this method will return 0.


----

.. _api_Font_spaceWidth:

 float **Font::spaceWidth** () const

Returns visual width of space character for the font in world units.


