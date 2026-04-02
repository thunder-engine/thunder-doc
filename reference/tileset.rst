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
|                            int | :ref:`columns<api_TileSet_b96e1703>` () const                      |
+--------------------------------+--------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`getCorners<api_TileSet_f85b4372>` (int  index)               |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setColumns<api_TileSet_a48c0bde>` (int  columns)             |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTexture<api_TileSet_0ae51bd3>` (Texture * texture)        |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTileHeight<api_TileSet_1b302f89>` (int  height)           |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTileMargin<api_TileSet_9f2104d3>` (int  margin)           |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTileOffset<api_TileSet_0da1683c>` (const Vector2  offset) |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTileSpacing<api_TileSet_8fca5b74>` (int  spacing)         |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTileWidth<api_TileSet_62fb7a3d>` (int  width)             |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setType<api_TileSet_6a2b3f70>` (int  type)                   |
+--------------------------------+--------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`texture<api_TileSet_3b12e08c>` () const                      |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`tileHeight<api_TileSet_5d73c4ab>` () const                   |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`tileMargin<api_TileSet_0b1568d4>` () const                   |
+--------------------------------+--------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`tileOffset<api_TileSet_2a8df10e>` () const                   |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`tileSpacing<api_TileSet_ac7180d5>` () const                  |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`tileWidth<api_TileSet_0fe42cbd>` () const                    |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`type<api_TileSet_31c7de8a>` () const                         |
+--------------------------------+--------------------------------------------------------------------+



.. _api_TileSet_static:

Static Methods
--------------

None

.. _api_TileSet_methods:

Methods Description
-------------------

.. _api_TileSet_b96e1703:

 int **TileSet::columns** () const

Returns the number of columns in the tileset.

**See also** setColumns().

----

.. _api_TileSet_f85b4372:

 :ref:`Vector4<api_Vector4>`  **TileSet::getCorners** (int  *index*)

Calculates and returns the texture coordinates (corners) of a specific tile within the tileset based on its index. This method considers tile flipping (horizontal and vertical) if applicable.

----

.. _api_TileSet_a48c0bde:

 void **TileSet::setColumns** (int  *columns*)

Sets the number of *columns* in the tileset.

**See also** columns().

----

.. _api_TileSet_0ae51bd3:

 void **TileSet::setTexture** (:ref:`Texture<api_Texture>` * *texture*)

Sets the *texture* containing the individual tiles.

**See also** texture().

----

.. _api_TileSet_1b302f89:

 void **TileSet::setTileHeight** (int  *height*)

Sets the *height* of an individual tile in pixels.

**See also** tileHeight().

----

.. _api_TileSet_9f2104d3:

 void **TileSet::setTileMargin** (int  *margin*)

Sets the *margin* (border) around the tiles in pixels.

**See also** tileMargin().

----

.. _api_TileSet_0da1683c:

 void **TileSet::setTileOffset** (:ref:`Vector2<api_Vector2>`  *offset*)

Sets the *offset* used for tile positioning.

**See also** tileOffset().

----

.. _api_TileSet_8fca5b74:

 void **TileSet::setTileSpacing** (int  *spacing*)

Sets the *spacing* (gap) between adjacent tiles in pixels.

**See also** tileSpacing().

----

.. _api_TileSet_62fb7a3d:

 void **TileSet::setTileWidth** (int  *width*)

Sets the *width* of an individual tile in pixels.

**See also** tileWidth().

----

.. _api_TileSet_6a2b3f70:

 void **TileSet::setType** (int  *type*)

Sets the *type* of the tileset, specifying the orientation or layout style of the tiles.

**See also** type().

----

.. _api_TileSet_3b12e08c:

 :ref:`Texture<api_Texture>` * **TileSet::texture** () const

Returns a pointer to the sprite sheet containing the individual tiles.

**See also** setTexture().

----

.. _api_TileSet_5d73c4ab:

 int **TileSet::tileHeight** () const

Returns the height of an individual tile in pixels.

**See also** setTileHeight().

----

.. _api_TileSet_0b1568d4:

 int **TileSet::tileMargin** () const

Returns the margin (border) around the tiles in pixels.

**See also** setTileMargin().

----

.. _api_TileSet_2a8df10e:

 :ref:`Vector2<api_Vector2>`  **TileSet::tileOffset** () const

Returns the offset used for tile positioning.

**See also** setTileOffset().

----

.. _api_TileSet_ac7180d5:

 int **TileSet::tileSpacing** () const

Returns the spacing (gap) between adjacent tiles in pixels.

**See also** setTileSpacing().

----

.. _api_TileSet_0fe42cbd:

 int **TileSet::tileWidth** () const

Returns the width of an individual tile in pixels.

**See also** setTileWidth().

----

.. _api_TileSet_31c7de8a:

 int **TileSet::type** () const

Returns the type of the tileset. This can represent the orientation or layout style of the tiles.

**See also** setType().


