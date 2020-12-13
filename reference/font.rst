.. _api_Font:
Font Class
================

Inherited: :ref:`Sprite<api_Sprite>`

.. _api_Font_description:
Description
-----------

The basic element of a font is a glyph. All required glyphs are contained in a special texture - Atlas. If at the moment of accessing the font the glyph is not present in the atlas, the glyph will be loaded there dynamically.



.. _api_Font_public:
Public Methods
--------------

+-------------------------+---------------------------------------------------------------------------------------+
|     :ref:`int<api_int>` | :ref:`atlasIndex<api_Font_atlasIndex>` (int  glyph) const                             |
+-------------------------+---------------------------------------------------------------------------------------+
|     :ref:`int<api_int>` | :ref:`length<api_Font_length>` (const std::string & characters) const                 |
+-------------------------+---------------------------------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`lineHeight<api_Font_lineHeight>` () const                                       |
+-------------------------+---------------------------------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`requestCharacters<api_Font_requestCharacters>` (const std::string & characters) |
+-------------------------+---------------------------------------------------------------------------------------+
|     :ref:`int<api_int>` | :ref:`requestKerning<api_Font_requestKerning>` (int  glyph, int  previous) const      |
+-------------------------+---------------------------------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`spaceWidth<api_Font_spaceWidth>` () const                                       |
+-------------------------+---------------------------------------------------------------------------------------+



.. _api_Font_static:
Static Methods
--------------

None

.. _api_Font_methods:
Methods Description
-------------------

.. _api_Font_atlasIndex:

:ref:`int<api_int>`  **Font::atlasIndex** (:ref:`int<api_int>`  *glyph*) const

Returns the index of the *glyph* in the atlas.

----

.. _api_Font_length:

:ref:`int<api_int>`  **Font::length** (:ref:`std::string<api_std::string>` & *characters*) const

Returns the number of *characters* in the string.

----

.. _api_Font_lineHeight:

:ref:`float<api_float>`  **Font::lineHeight** () const

Returns visual height for the font in world units.

----

.. _api_Font_requestCharacters:

:ref:`void<api_void>`  **Font::requestCharacters** (:ref:`std::string<api_std::string>` & *characters*)

Requests *characters* to be added to the font atlas.

----

.. _api_Font_requestKerning:

:ref:`int<api_int>`  **Font::requestKerning** (:ref:`int<api_int>`  *glyph*, :ref:`int<api_int>`  *previous*) const

Returns the kerning offset between a *glyph* and *previous* *glyph*.

**Note:** In case of font doesn't support kerning this method will return 0.

----

.. _api_Font_spaceWidth:

:ref:`float<api_float>`  **Font::spaceWidth** () const

Returns visual width of space character for the font in world units.

----


