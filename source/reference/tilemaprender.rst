.. _api_TileMapRender:

TileMapRender
=============

Inherited: :ref:`Renderable<api_Renderable>`

.. _api_TileMapRender_description:

Description
-----------

TileMapRender is a class designed for rendering tile maps within Thunder Engine. It manages the rendering of a tile map, including handling materials, layers, and transformations.



.. _api_TileMapRender_public:

Public Methods
--------------

+--------------------------------+----------------------------------------------------------------------+
|                            int | :ref:`layer<api_TileMapRender_27193540>` () const                    |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setLayer<api_TileMapRender_8b4df6e1>` (int  layer)             |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setMaterial<api_TileMapRender_b018da9f>` (Material * material) |
+--------------------------------+----------------------------------------------------------------------+
|                           void | :ref:`setTileMap<api_TileMapRender_c5708f6e>` (TileMap * map)        |
+--------------------------------+----------------------------------------------------------------------+
|  :ref:`TileMap<api_TileMap>` * | :ref:`tileMap<api_TileMapRender_ab8591fd>` () const                  |
+--------------------------------+----------------------------------------------------------------------+



.. _api_TileMapRender_static:

Static Methods
--------------

None

.. _api_TileMapRender_methods:

Methods Description
-------------------

.. _api_TileMapRender_27193540:

 int **TileMapRender::layer** () const

Returns the redering priority for the tile map.

**See also** setLayer().

----

.. _api_TileMapRender_8b4df6e1:

 void **TileMapRender::setLayer** (int  *layer*)

Sets the redering *layer* for the tile map.

**See also** layer().

----

.. _api_TileMapRender_b018da9f:

 void **TileMapRender::setMaterial** (:ref:`Material<api_Material>` * *material*)

Reimplements: Renderable::setMaterial(Material *material).

Creates a new instance of *material* and assigns it.

----

.. _api_TileMapRender_c5708f6e:

 void **TileMapRender::setTileMap** (:ref:`TileMap<api_TileMap>` * *map*)

Sets the tile *map* associated with this TileMapRender.

**See also** tileMap().

----

.. _api_TileMapRender_ab8591fd:

 :ref:`TileMap<api_TileMap>` * **TileMapRender::tileMap** () const

Returns a pointer to the tile map associated with this TileMapRender.

**See also** setTileMap().


