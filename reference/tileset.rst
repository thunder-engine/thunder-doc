.. _api_TileSet:

TileSet Class
=============

Inherited: :doc:`Resource<api_Resource>`

.. _api_TileSet_description:

Description
-----------

TileSet is a resource class used to define and manage collections of individual tiles. These tiles are typically used in conjunction with a TileMap to create complex game layouts.



.. _api_TileSet_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------------------+
|                          int | :ref:`columns<api_TileSet_columns>` () const                            |
+------------------------------+-------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`getCorners<api_TileSet_getCorners>` (int  index)                  |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setColumns<api_TileSet_setColumns>` (int  columns)                |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setSpriteSheet<api_TileSet_setSpriteSheet>` (Sprite * sprite)     |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setTileHeight<api_TileSet_setTileHeight>` (int  height)           |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setTileMargin<api_TileSet_setTileMargin>` (int  margin)           |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setTileOffset<api_TileSet_setTileOffset>` (const Vector2  offset) |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setTileSpacing<api_TileSet_setTileSpacing>` (int  spacing)        |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setTileWidth<api_TileSet_setTileWidth>` (int  width)              |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setType<api_TileSet_setType>` (int  type)                         |
+------------------------------+-------------------------------------------------------------------------+
|  :ref:`Sprite<api_Sprite>` * | :ref:`spriteSheet<api_TileSet_spriteSheet>` () const                    |
+------------------------------+-------------------------------------------------------------------------+
|                          int | :ref:`tileHeight<api_TileSet_tileHeight>` () const                      |
+------------------------------+-------------------------------------------------------------------------+
|                          int | :ref:`tileMargin<api_TileSet_tileMargin>` () const                      |
+------------------------------+-------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`tileOffset<api_TileSet_tileOffset>` () const                      |
+------------------------------+-------------------------------------------------------------------------+
|                          int | :ref:`tileSpacing<api_TileSet_tileSpacing>` () const                    |
+------------------------------+-------------------------------------------------------------------------+
|                          int | :ref:`tileWidth<api_TileSet_tileWidth>` () const                        |
+------------------------------+-------------------------------------------------------------------------+
|                          int | :ref:`type<api_TileSet_type>` () const                                  |
+------------------------------+-------------------------------------------------------------------------+



.. _api_TileSet_static:

Static Methods
--------------

None

.. _api_TileSet_methods:

Methods Description
-------------------

.. _api_TileSet_columns:

 int **TileSet::columns** () const

Returns the number of columns in the tileset.

**See also** setColumns().

----

.. _api_TileSet_getCorners:

 :ref:`Vector4<api_Vector4>` **TileSet::getCorners** (int  *index*)

Calculates and returns the texture coordinates (corners) of a specific tile within the tileset based on its *index*. This method considers tile flipping (horizontal and vertical) if applicable.

----

.. _api_TileSet_setColumns:

 void **TileSet::setColumns** (int  *columns*)

Sets the number of *columns* in the tileset.

**See also** *columns*().

----

.. _api_TileSet_setSpriteSheet:

 void **TileSet::setSpriteSheet** (:ref:`Sprite<api_Sprite>` * *sprite*)

Sets the *sprite* sheet containing the individual tiles.

**See also** *sprite*Sheet().

----

.. _api_TileSet_setTileHeight:

 void **TileSet::setTileHeight** (int  *height*)

Sets the *height* of an individual tile in pixels.

**See also** tileHeight().

----

.. _api_TileSet_setTileMargin:

 void **TileSet::setTileMargin** (int  *margin*)

Sets the *margin* (border) around the tiles in pixels.

**See also** tileMargin().

----

.. _api_TileSet_setTileOffset:

 void **TileSet::setTileOffset** (:ref:`Vector2<api_Vector2>`  *offset*)

Sets the *offset* used for tile positioning.

**See also** tileOffset().

----

.. _api_TileSet_setTileSpacing:

 void **TileSet::setTileSpacing** (int  *spacing*)

Sets the *spacing* (gap) between adjacent tiles in pixels.

**See also** tileSpacing().

----

.. _api_TileSet_setTileWidth:

 void **TileSet::setTileWidth** (int  *width*)

Sets the *width* of an individual tile in pixels.

**See also** tileWidth().

----

.. _api_TileSet_setType:

 void **TileSet::setType** (int  *type*)

Sets the *type* of the tileset, specifying the orientation or layout style of the tiles.

**See also** *type*().

----

.. _api_TileSet_spriteSheet:

 :ref:`Sprite<api_Sprite>`* **TileSet::spriteSheet** () const

Returns a pointer to the sprite sheet containing the individual tiles.

**See also** setSpriteSheet().

----

.. _api_TileSet_tileHeight:

 int **TileSet::tileHeight** () const

Returns the height of an individual tile in pixels.

**See also** setTileHeight().

----

.. _api_TileSet_tileMargin:

 int **TileSet::tileMargin** () const

Returns the margin (border) around the tiles in pixels.

**See also** setTileMargin().

----

.. _api_TileSet_tileOffset:

 :ref:`Vector2<api_Vector2>` **TileSet::tileOffset** () const

Returns the offset used for tile positioning.

**See also** setTileOffset().

----

.. _api_TileSet_tileSpacing:

 int **TileSet::tileSpacing** () const

Returns the spacing (gap) between adjacent tiles in pixels.

**See also** setTileSpacing().

----

.. _api_TileSet_tileWidth:

 int **TileSet::tileWidth** () const

Returns the width of an individual tile in pixels.

**See also** setTileWidth().

----

.. _api_TileSet_type:

 int **TileSet::type** () const

Returns the type of the tileset. This can represent the orientation or layout style of the tiles.

**See also** setType().


