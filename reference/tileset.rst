.. _api_TileSet:

TileSet
=======

Inherited: None

.. _api_TileSet_description:

Description
-----------

TileSet is a resource class used to define and manage collections of individual tiles. These tiles are typically used in conjunction with a TileMap to create complex game layouts.



.. _api_TileSet_public:

Public Methods
--------------

+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`columns<api_TileSet_5c86ad2e>` () const                      |
+--------------------------------+--------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`getCorners<api_TileSet_9c720be4>` (int  index)               |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setColumns<api_TileSet_ef4b93c0>` (int  columns)             |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTexture<api_TileSet_ef9bc5d3>` (Texture * texture)        |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTileHeight<api_TileSet_34ac0956>` (int  height)           |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTileMargin<api_TileSet_8f7ea914>` (int  margin)           |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTileOffset<api_TileSet_c1f5b2d6>` (const Vector2  offset) |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTileSpacing<api_TileSet_e832b409>` (int  spacing)         |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTileWidth<api_TileSet_1b9cdae2>` (int  width)             |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setType<api_TileSet_3641b8d0>` (int  type)                   |
+--------------------------------+--------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`texture<api_TileSet_0e2fa786>` () const                      |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`tileHeight<api_TileSet_65493bc1>` () const                   |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`tileMargin<api_TileSet_86fcb9a2>` () const                   |
+--------------------------------+--------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`tileOffset<api_TileSet_c8a4953e>` () const                   |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`tileSpacing<api_TileSet_760a8f42>` () const                  |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`tileWidth<api_TileSet_9fda3c7b>` () const                    |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`type<api_TileSet_128c6e4f>` () const                         |
+--------------------------------+--------------------------------------------------------------------+



.. _api_TileSet_static:

Static Methods
--------------

None

.. _api_TileSet_methods:

Methods Description
-------------------

.. _api_TileSet_5c86ad2e:

 int **TileSet::columns** () const

Returns the number of columns in the tileset.

**See also** setColumns().

----

.. _api_TileSet_9c720be4:

 :ref:`Vector4<api_Vector4>`  **TileSet::getCorners** (int  *index*)

Calculates and returns the texture coordinates (corners) of a specific tile within the tileset based on its *index*. This method considers tile flipping (horizontal and vertical) if applicable.

----

.. _api_TileSet_ef4b93c0:

 void **TileSet::setColumns** (int  *columns*)

Sets the number of *columns* in the tileset.

**See also** *columns*().

----

.. _api_TileSet_ef9bc5d3:

 void **TileSet::setTexture** (:ref:`Texture<api_Texture>` * *texture*)

Sets the *texture* containing the individual tiles.

**See also** *texture*().

----

.. _api_TileSet_34ac0956:

 void **TileSet::setTileHeight** (int  *height*)

Sets the *height* of an individual tile in pixels.

**See also** tileHeight().

----

.. _api_TileSet_8f7ea914:

 void **TileSet::setTileMargin** (int  *margin*)

Sets the *margin* (border) around the tiles in pixels.

**See also** tileMargin().

----

.. _api_TileSet_c1f5b2d6:

 void **TileSet::setTileOffset** (:ref:`Vector2<api_Vector2>`  *offset*)

Sets the *offset* used for tile positioning.

**See also** tileOffset().

----

.. _api_TileSet_e832b409:

 void **TileSet::setTileSpacing** (int  *spacing*)

Sets the *spacing* (gap) between adjacent tiles in pixels.

**See also** tileSpacing().

----

.. _api_TileSet_1b9cdae2:

 void **TileSet::setTileWidth** (int  *width*)

Sets the *width* of an individual tile in pixels.

**See also** tileWidth().

----

.. _api_TileSet_3641b8d0:

 void **TileSet::setType** (int  *type*)

Sets the *type* of the tileset, specifying the orientation or layout style of the tiles.

**See also** *type*().

----

.. _api_TileSet_0e2fa786:

 :ref:`Texture<api_Texture>` * **TileSet::texture** () const

Returns a pointer to the sprite sheet containing the individual tiles.

**See also** setTexture().

----

.. _api_TileSet_65493bc1:

 int **TileSet::tileHeight** () const

Returns the height of an individual tile in pixels.

**See also** setTileHeight().

----

.. _api_TileSet_86fcb9a2:

 int **TileSet::tileMargin** () const

Returns the margin (border) around the tiles in pixels.

**See also** setTileMargin().

----

.. _api_TileSet_c8a4953e:

 :ref:`Vector2<api_Vector2>`  **TileSet::tileOffset** () const

Returns the offset used for tile positioning.

**See also** setTileOffset().

----

.. _api_TileSet_760a8f42:

 int **TileSet::tileSpacing** () const

Returns the spacing (gap) between adjacent tiles in pixels.

**See also** setTileSpacing().

----

.. _api_TileSet_9fda3c7b:

 int **TileSet::tileWidth** () const

Returns the width of an individual tile in pixels.

**See also** setTileWidth().

----

.. _api_TileSet_128c6e4f:

 int **TileSet::type** () const

Returns the type of the tileset. This can represent the orientation or layout style of the tiles.

**See also** setType().


