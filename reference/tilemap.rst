.. _api_TileMap:

TileMap Class
=============

Inherited: :doc:`Resource<api_Resource>`

.. _api_TileMap_description:

Description
-----------

TileMap is a fundamental resource class used to define a grid of tiles for creating the layout of a game or application. It represents a grid-based map where each cell can be assigned a specific tile ID.



.. _api_TileMap_public:

Public Methods
--------------

+--------------------------------+----------------------------------------------------------------------+
|                            int | :ref:`cellHeight<api_TileMap_cellHeight>` () const                   |
+--------------------------------+----------------------------------------------------------------------+
|                            int | :ref:`cellWidth<api_TileMap_cellWidth>` () const                     |
+--------------------------------+----------------------------------------------------------------------+
|                            int | :ref:`height<api_TileMap_height>` () const                           |
+--------------------------------+----------------------------------------------------------------------+
|                           bool | :ref:`hexOdd<api_TileMap_hexOdd>` () const                           |
+--------------------------------+----------------------------------------------------------------------+
|                            int | :ref:`hexSideLength<api_TileMap_hexSideLength>` () const             |
+--------------------------------+----------------------------------------------------------------------+
|                            int | :ref:`orientation<api_TileMap_orientation>` () const                 |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`refreshAllTiles<api_TileMap_refreshAllTiles>` () const         |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setCellHeight<api_TileMap_setCellHeight>` (int  height)        |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setCellWidth<api_TileMap_setCellWidth>` (int  width)           |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setHeight<api_TileMap_setHeight>` (int  height)                |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setHexOdd<api_TileMap_setHexOdd>` (bool  odd)                  |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setHexSideLength<api_TileMap_setHexSideLength>` (int  length)  |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setOrientation<api_TileMap_setOrientation>` (int  orientation) |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setTile<api_TileMap_setTile>` (int  x, int  y, int  id)        |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setTileSet<api_TileMap_setTileSet>` (TileSet * set)            |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setWidth<api_TileMap_setWidth>` (int  width)                   |
+--------------------------------+----------------------------------------------------------------------+
|                            int | :ref:`tile<api_TileMap_tile>` (int  x, int  y) const                 |
+--------------------------------+----------------------------------------------------------------------+
|        :ref:`Mesh<api_Mesh>` * | :ref:`tileMesh<api_TileMap_tileMesh>` () const                       |
+--------------------------------+----------------------------------------------------------------------+
|  :ref:`TileSet<api_TileSet>` * | :ref:`tileSet<api_TileMap_tileSet>` () const                         |
+--------------------------------+----------------------------------------------------------------------+
|                            int | :ref:`width<api_TileMap_width>` () const                             |
+--------------------------------+----------------------------------------------------------------------+



.. _api_TileMap_static:

Static Methods
--------------

None

.. _api_TileMap_methods:

Methods Description
-------------------

.. _api_TileMap_cellHeight:

 int **TileMap::cellHeight** () const

Returns the height of a single grid cell in pixels.

**See also** setCellHeight().

----

.. _api_TileMap_cellWidth:

 int **TileMap::cellWidth** () const

Returns the width of a single grid cell in pixels.

**See also** setCellWidth().

----

.. _api_TileMap_height:

 int **TileMap::height** () const

Returns the height of the tile map in terms of grid cells.

**See also** setHeight().

----

.. _api_TileMap_hexOdd:

 bool **TileMap::hexOdd** () const

Returns true if the stagger index for hexagonal tiles is set to odd, false otherwise.

**See also** setHexOdd().

----

.. _api_TileMap_hexSideLength:

 int **TileMap::hexSideLength** () const

Returns the side length of hexagonal tiles in pixels.

**See also** setHexSideLength().

----

.. _api_TileMap_orientation:

 int **TileMap::orientation** () const

Returns the orientation of the tile map. This can be one of the constants defined in the TileSet class, such as TileSet::Orthogonal, TileSet::Isometric, or TileSet::Hexagonal.

**See also** setOrientation().

----

.. _api_TileMap_refreshAllTiles:

 void **TileMap::refreshAllTiles** () const

Refreshes all the tiles in the tile map, updating the tile mesh with the latest tile information based on the tile set and map data.

----

.. _api_TileMap_setCellHeight:

 void **TileMap::setCellHeight** (int  *height*)

Sets the *height* of a single grid cell in pixels.

**See also** cellHeight().

----

.. _api_TileMap_setCellWidth:

 void **TileMap::setCellWidth** (int  *width*)

Sets the *width* of a single grid cell in pixels.

**See also** cellWidth().

----

.. _api_TileMap_setHeight:

 void **TileMap::setHeight** (int  *height*)

Sets the *height* of the tile map in grid cells. It resizes the map data accordingly.

**See also** *height*().

----

.. _api_TileMap_setHexOdd:

 void **TileMap::setHexOdd** (bool  *odd*)

Sets the stagger index for hexagonal tiles. If *odd* is true, it sets the stagger index to 1; otherwise, it sets it to 0.

**See also** hexOdd().

----

.. _api_TileMap_setHexSideLength:

 void **TileMap::setHexSideLength** (int  *length*)

Sets the side *length* of hexagonal tiles in pixels.

**See also** hexSideLength().

----

.. _api_TileMap_setOrientation:

 void **TileMap::setOrientation** (int  *orientation*)

Sets the *orientation* of the tile map. This affects how the tiles are positioned within the map.

**See also** *orientation*().

----

.. _api_TileMap_setTile:

 void **TileMap::setTile** (int  *x*, int  *y*, int  *id*)

Sets the tile *id* at the specified grid cell coordinates (x, *y*).

**See also** tile().

----

.. _api_TileMap_setTileSet:

 void **TileMap::setTileSet** (:ref:`TileSet<api_TileSet>` * *set*)

Sets the associated tile *set* for this tile map.

**See also** tileSet().

----

.. _api_TileMap_setWidth:

 void **TileMap::setWidth** (int  *width*)

Sets the *width* of the tile map in grid cells. It resizes the map data accordingly.

**See also** *width*().

----

.. _api_TileMap_tile:

 int **TileMap::tile** (int  *x*, int  *y*) const

Returns the tile ID at the specified grid cell coordinates (x, *y*).

**See also** setTile().

----

.. _api_TileMap_tileMesh:

 :ref:`Mesh<api_Mesh>`* **TileMap::tileMesh** () const

Returns a pointer to a mesh representing the tile map's geometry. This mesh is updated and regenerated as needed.

----

.. _api_TileMap_tileSet:

 :ref:`TileSet<api_TileSet>`* **TileMap::tileSet** () const

Returns a pointer to the associated TileSet that defines the available tiles for this tile map.

**See also** setTileSet().

----

.. _api_TileMap_width:

 int **TileMap::width** () const

Returns the width of the tile map in terms of grid cells.

**See also** setWidth().


