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

+--------------------------------+-----------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`page<api_Font_36a2bd79>` () |
+--------------------------------+-----------------------------------+



.. _api_Font_static:

Static Methods
--------------

None

.. _api_Font_methods:

Methods Description
-------------------

.. _api_Font_36a2bd79:

 :ref:`Texture<api_Texture>` * **Font::page** ()

Returns glyph sheet texture.


