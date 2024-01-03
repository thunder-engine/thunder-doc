.. _api_TileMapRender:

TileMapRender Class
===================

Inherited: :doc:`Renderable<api_Renderable>`

.. _api_TileMapRender_description:

Description
-----------

TileMapRender is a class designed for rendering tile maps within Thunder Engine. It manages the rendering of a tile map, including handling materials, layers, and transformations.



.. _api_TileMapRender_public:

Public Methods
--------------

+--------------------------------+-------------------------------------------------------------------------+
|                            int | :ref:`layer<api_TileMapRender_layer>` () const                          |
+--------------------------------+-------------------------------------------------------------------------+
|                           void | :ref:`setLayer<api_TileMapRender_setLayer>` (int  layer)                |
+--------------------------------+-------------------------------------------------------------------------+
|                           void | :ref:`setMaterial<api_TileMapRender_setMaterial>` (Material * material) |
+--------------------------------+-------------------------------------------------------------------------+
|                           void | :ref:`setTileMap<api_TileMapRender_setTileMap>` (TileMap * map)         |
+--------------------------------+-------------------------------------------------------------------------+
|  :ref:`TileMap<api_TileMap>` * | :ref:`tileMap<api_TileMapRender_tileMap>` () const                      |
+--------------------------------+-------------------------------------------------------------------------+



.. _api_TileMapRender_static:

Static Methods
--------------

None

.. _api_TileMapRender_methods:

Methods Description
-------------------

.. _api_TileMapRender_layer:

 int **TileMapRender::layer** () const

Returns the order layer for the tile map.

**See also** setLayer().

----

.. _api_TileMapRender_setLayer:

 void **TileMapRender::setLayer** (int  *layer*)

Sets the order *layer* for the tile map.

**See also** *layer*().

----

.. _api_TileMapRender_setMaterial:

 void **TileMapRender::setMaterial** (:ref:`Material<api_Material>` * *material*)

Reimplements: Renderable::setMaterial(Material *material).

Creates a new instance of *material* and assigns it.

----

.. _api_TileMapRender_setTileMap:

 void **TileMapRender::setTileMap** (:ref:`TileMap<api_TileMap>` * *map*)

Sets the tile *map* associated with this TileMapRender.

**See also** tileMap().

----

.. _api_TileMapRender_tileMap:

 :ref:`TileMap<api_TileMap>`* **TileMapRender::tileMap** () const

Returns a pointer to the tile map associated with this TileMapRender.

**See also** setTileMap().


