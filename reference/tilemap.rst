.. _api_TileMap:

TileMap
=======

Inherited: None

.. _api_TileMap_description:

Description
-----------

TileMap is a fundamental resource class used to define a grid of tiles for creating the layout of a game or application. It represents a grid-based map where each cell can be assigned a specific tile ID.



.. _api_TileMap_public:

Public Methods
--------------

+--------------------------------+----------------------------------------------------------------+
|                            int | :ref:`cellHeight<api_TileMap_a27e406f>` () const               |
+--------------------------------+----------------------------------------------------------------+
|                            int | :ref:`cellWidth<api_TileMap_6c4b9eda>` () const                |
+--------------------------------+----------------------------------------------------------------+
|                            int | :ref:`height<api_TileMap_8b39d1fc>` () const                   |
+--------------------------------+----------------------------------------------------------------+
|                           bool | :ref:`hexOdd<api_TileMap_c014fd78>` () const                   |
+--------------------------------+----------------------------------------------------------------+
|                            int | :ref:`hexSideLength<api_TileMap_ed3fca2b>` () const            |
+--------------------------------+----------------------------------------------------------------+
|                            int | :ref:`orientation<api_TileMap_b6a49230>` () const              |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`refreshAllTiles<api_TileMap_ead593c7>` () const          |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setCellHeight<api_TileMap_d364e751>` (int  height)       |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setCellWidth<api_TileMap_2fe7d534>` (int  width)         |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setHeight<api_TileMap_f06729ec>` (int  height)           |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setHexOdd<api_TileMap_7c5b612a>` (bool  odd)             |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setHexSideLength<api_TileMap_a16850ef>` (int  length)    |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setOrientation<api_TileMap_6219abc7>` (int  orientation) |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setTile<api_TileMap_b589a3fd>` (int  x, int  y, int  id) |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setTileSet<api_TileMap_a94732e8>` (TileSet * set)        |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setWidth<api_TileMap_7f3d068a>` (int  width)             |
+--------------------------------+----------------------------------------------------------------+
|                            int | :ref:`tile<api_TileMap_bdc3f105>` (int  x, int  y) const       |
+--------------------------------+----------------------------------------------------------------+
|        :ref:`Mesh<api_Mesh>` * | :ref:`tileMesh<api_TileMap_fa524710>` () const                 |
+--------------------------------+----------------------------------------------------------------+
|  :ref:`TileSet<api_TileSet>` * | :ref:`tileSet<api_TileMap_695ab721>` () const                  |
+--------------------------------+----------------------------------------------------------------+
|                            int | :ref:`width<api_TileMap_9856a72c>` () const                    |
+--------------------------------+----------------------------------------------------------------+



.. _api_TileMap_static:

Static Methods
--------------

None

.. _api_TileMap_methods:

Methods Description
-------------------

.. _api_TileMap_a27e406f:

 int **TileMap::cellHeight** () const

Returns the height of a single grid cell in pixels.

**See also** setCellHeight().

----

.. _api_TileMap_6c4b9eda:

 int **TileMap::cellWidth** () const

Returns the width of a single grid cell in pixels.

**See also** setCellWidth().

----

.. _api_TileMap_8b39d1fc:

 int **TileMap::height** () const

Returns the height of the tile map in terms of grid cells.

**See also** setHeight().

----

.. _api_TileMap_c014fd78:

 bool **TileMap::hexOdd** () const

Returns true if the stagger index for hexagonal tiles is set to odd, false otherwise.

**See also** setHexOdd().

----

.. _api_TileMap_ed3fca2b:

 int **TileMap::hexSideLength** () const

Returns the side length of hexagonal tiles in pixels.

**See also** setHexSideLength().

----

.. _api_TileMap_b6a49230:

 int **TileMap::orientation** () const

Returns the orientation of the tile map. This can be one of the constants defined in the TileSet class, such as TileSet::Orthogonal, TileSet::Isometric, or TileSet::Hexagonal.

**See also** setOrientation().

----

.. _api_TileMap_ead593c7:

 void **TileMap::refreshAllTiles** () const

Refreshes all the tiles in the tile map, updating the tile mesh with the latest tile information based on the tile set and map data.

----

.. _api_TileMap_d364e751:

 void **TileMap::setCellHeight** (int  *height*)

Sets the *height* of a single grid cell in pixels.

**See also** cellHeight().

----

.. _api_TileMap_2fe7d534:

 void **TileMap::setCellWidth** (int  *width*)

Sets the *width* of a single grid cell in pixels.

**See also** cellWidth().

----

.. _api_TileMap_f06729ec:

 void **TileMap::setHeight** (int  *height*)

Sets the *height* of the tile map in grid cells. It resizes the map data accordingly.

**See also** height().

----

.. _api_TileMap_7c5b612a:

 void **TileMap::setHexOdd** (bool  *odd*)

Sets the stagger index for hexagonal tiles. If *odd* is true, it sets the stagger index to 1; otherwise, it sets it to 0.

**See also** hexOdd().

----

.. _api_TileMap_a16850ef:

 void **TileMap::setHexSideLength** (int  *length*)

Sets the side *length* of hexagonal tiles in pixels.

**See also** hexSideLength().

----

.. _api_TileMap_6219abc7:

 void **TileMap::setOrientation** (int  *orientation*)

Sets the *orientation* of the tile map. This affects how the tiles are positioned within the map.

**See also** orientation().

----

.. _api_TileMap_b589a3fd:

 void **TileMap::setTile** (int  *x*, int  *y*, int  *id*)

Sets the tile *id* at the specified grid cell coordinates (x, y).

**See also** tile().

----

.. _api_TileMap_a94732e8:

 void **TileMap::setTileSet** (:ref:`TileSet<api_TileSet>` * *set*)

Sets the associated tile *set* for this tile map.

**See also** tileSet().

----

.. _api_TileMap_7f3d068a:

 void **TileMap::setWidth** (int  *width*)

Sets the *width* of the tile map in grid cells. It resizes the map data accordingly.

**See also** width().

----

.. _api_TileMap_bdc3f105:

 int **TileMap::tile** (int  *x*, int  *y*) const

Returns the tile ID at the specified grid cell coordinates (x, y).

**See also** setTile().

----

.. _api_TileMap_fa524710:

 :ref:`Mesh<api_Mesh>` * **TileMap::tileMesh** () const

Returns a pointer to a mesh representing the tile map's geometry. This mesh is updated and regenerated as needed.

----

.. _api_TileMap_695ab721:

 :ref:`TileSet<api_TileSet>` * **TileMap::tileSet** () const

Returns a pointer to the associated TileSet that defines the available tiles for this tile map.

**See also** setTileSet().

----

.. _api_TileMap_9856a72c:

 int **TileMap::width** () const

Returns the width of the tile map in terms of grid cells.

**See also** setWidth().


