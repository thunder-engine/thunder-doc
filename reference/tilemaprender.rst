.. _api_TileMapRender:

TileMapRender
=============

Inherited: None

.. _api_TileMapRender_description:

Description
-----------

TileMapRender is a class designed for rendering tile maps within Thunder Engine. It manages the rendering of a tile map, including handling materials, layers, and transformations.



.. _api_TileMapRender_public:

Public Methods
--------------

+--------------------------------+----------------------------------------------------------------------+
|                            int | :ref:`layer<api_TileMapRender_42dfe6c5>` () const                    |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setLayer<api_TileMapRender_a240be95>` (int  layer)             |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setMaterial<api_TileMapRender_3f4acb95>` (Material * material) |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setTileMap<api_TileMapRender_c76583eb>` (TileMap * map)        |
+--------------------------------+----------------------------------------------------------------------+
|  :ref:`TileMap<api_TileMap>` * | :ref:`tileMap<api_TileMapRender_61eda820>` () const                  |
+--------------------------------+----------------------------------------------------------------------+



.. _api_TileMapRender_static:

Static Methods
--------------

None

.. _api_TileMapRender_methods:

Methods Description
-------------------

.. _api_TileMapRender_42dfe6c5:

 int **TileMapRender::layer** () const

Returns the redering priority for the tile map.

**See also** setLayer().

----

.. _api_TileMapRender_a240be95:

 void **TileMapRender::setLayer** (int  *layer*)

Sets the redering *layer* for the tile map.

**See also** *layer*().

----

.. _api_TileMapRender_3f4acb95:

 void **TileMapRender::setMaterial** (:ref:`Material<api_Material>` * *material*)

Reimplements: Renderable::setMaterial(Material *material).

Creates a new instance of *material* and assigns it.

----

.. _api_TileMapRender_c76583eb:

 void **TileMapRender::setTileMap** (:ref:`TileMap<api_TileMap>` * *map*)

Sets the tile *map* associated with this TileMapRender.

**See also** tileMap().

----

.. _api_TileMapRender_61eda820:

 :ref:`TileMap<api_TileMap>` * **TileMapRender::tileMap** () const

Returns a pointer to the tile map associated with this TileMapRender.

**See also** setTileMap().


