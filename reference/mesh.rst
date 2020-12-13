.. _api_Mesh:
Mesh Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_Mesh_description:
Description
-----------



.. _api_Mesh_public:
Public Methods
--------------

+---------------------------+-----------------------------------------------------------------------------------+
|       :ref:`int<api_int>` | :ref:`addLod<api_Mesh_addLod>` (Lod * lod)                                        |
+---------------------------+-----------------------------------------------------------------------------------+
|     :ref:`void<api_void>` | :ref:`batchMesh<api_Mesh_batchMesh>` (Mesh * mesh, Matrix4 * transform = nullptr) |
+---------------------------+-----------------------------------------------------------------------------------+
| :ref:`AABBox<api_AABBox>` | :ref:`bound<api_Mesh_bound>` () const                                             |
+---------------------------+-----------------------------------------------------------------------------------+
|     :ref:`void<api_void>` | :ref:`clear<api_Mesh_clear>` ()                                                   |
+---------------------------+-----------------------------------------------------------------------------------+
|       :ref:`int<api_int>` | :ref:`flags<api_Mesh_flags>` () const                                             |
+---------------------------+-----------------------------------------------------------------------------------+
|     :ref:`bool<api_bool>` | :ref:`isDynamic<api_Mesh_isDynamic>` () const                                     |
+---------------------------+-----------------------------------------------------------------------------------+
|     :ref:`Lod<api_Lod>` * | :ref:`lod<api_Mesh_lod>` (int  lod) const                                         |
+---------------------------+-----------------------------------------------------------------------------------+
|       :ref:`int<api_int>` | :ref:`lodsCount<api_Mesh_lodsCount>` () const                                     |
+---------------------------+-----------------------------------------------------------------------------------+
|     :ref:`void<api_void>` | :ref:`makeDynamic<api_Mesh_makeDynamic>` ()                                       |
+---------------------------+-----------------------------------------------------------------------------------+
|       :ref:`int<api_int>` | :ref:`mode<api_Mesh_mode>` () const                                               |
+---------------------------+-----------------------------------------------------------------------------------+
|     :ref:`void<api_void>` | :ref:`recalcBounds<api_Mesh_recalcBounds>` ()                                     |
+---------------------------+-----------------------------------------------------------------------------------+
|     :ref:`void<api_void>` | :ref:`setBound<api_Mesh_setBound>` (const AABBox & box)                           |
+---------------------------+-----------------------------------------------------------------------------------+
|     :ref:`void<api_void>` | :ref:`setFlags<api_Mesh_setFlags>` (int  flags)                                   |
+---------------------------+-----------------------------------------------------------------------------------+
|     :ref:`void<api_void>` | :ref:`setLod<api_Mesh_setLod>` (int  lod, Lod * data)                             |
+---------------------------+-----------------------------------------------------------------------------------+
|     :ref:`void<api_void>` | :ref:`setMode<api_Mesh_setMode>` (int  mode)                                      |
+---------------------------+-----------------------------------------------------------------------------------+

.. _api_Mesh_enums:
Public Enums
--------------

.. _api_Mesh_MeshAttributes:
**enum Mesh::MeshAttributes**

+----------------+--------+-------------------------------------------------------------------------------------------------------------------+
|       Constant | Value  | Description                                                                                                       |
+----------------+--------+-------------------------------------------------------------------------------------------------------------------+
|    Mesh::Color | (1<<0) | The Lod structure contains color information for the vertices.                                                    |
+----------------+--------+-------------------------------------------------------------------------------------------------------------------+
|      Mesh::Uv0 | (1<<1) | The Lod structure contains base texture coordinates for the vertices.                                             |
+----------------+--------+-------------------------------------------------------------------------------------------------------------------+
|      Mesh::Uv1 | (1<<2) | The Lod structure contains secondary texture coordinates for the vertices.                                        |
+----------------+--------+-------------------------------------------------------------------------------------------------------------------+
|  Mesh::Normals | (1<<3) | The Lod structure contains normal vectors for the vertices.                                                       |
+----------------+--------+-------------------------------------------------------------------------------------------------------------------+
| Mesh::Tangents | (1<<4) | The Lod structure contains tangent vectors for the vertices.                                                      |
+----------------+--------+-------------------------------------------------------------------------------------------------------------------+
|  Mesh::Skinned | (1<<5) | The Mesh was marked as skinned which means Lod structure contains bones and weights information for the vertices. |
+----------------+--------+-------------------------------------------------------------------------------------------------------------------+

.. _api_Mesh_TriangleModes:
**enum Mesh::TriangleModes**

+---------------------+-------+------------------------------------------------------------------------------------------------------------------------------+
|            Constant | Value | Description                                                                                                                  |
+---------------------+-------+------------------------------------------------------------------------------------------------------------------------------+
|     Mesh::Triangles | 0     | This mode means the indices array will be used to stitch vertices into triangles.                                            |
+---------------------+-------+------------------------------------------------------------------------------------------------------------------------------+
|         Mesh::Lines | 1     | The The mesh will be rendered as set of lines. Indices array will be used.                                                   |
+---------------------+-------+------------------------------------------------------------------------------------------------------------------------------+
| Mesh::TriangleStrip | 2     | A triangle strip is a series of connected triangles from the triangle mesh, sharing vertices. Indices array is not required. |
+---------------------+-------+------------------------------------------------------------------------------------------------------------------------------+
|     Mesh::LineStrip | 3     | The same as TriangleStrip but will be rendered as Lines.                                                                     |
+---------------------+-------+------------------------------------------------------------------------------------------------------------------------------+
|   Mesh::TriangleFan | 4     | A set of connected triangles that share one central vertex. Indices array is not required.                                   |
+---------------------+-------+------------------------------------------------------------------------------------------------------------------------------+



.. _api_Mesh_static:
Static Methods
--------------

None

.. _api_Mesh_methods:
Methods Description
-------------------

.. _api_Mesh_addLod:

:ref:`int<api_int>`  **Mesh::addLod** (:ref:`Lod<api_Lod>` * *lod*)

Adds the new *lod* data for the Mesh. Retuns index of new *lod*.

----

.. _api_Mesh_batchMesh:

:ref:`void<api_void>`  **Mesh::batchMesh** (:ref:`Mesh<api_Mesh>` * *mesh*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Merges current with provided *mesh*. In the case of the *transform*, the matrix is not nullptr it will be applied to *mesh* before merging.

----

.. _api_Mesh_bound:

:ref:`AABBox<api_AABBox>`  **Mesh::bound** () const

Returns bounding box for the Mesh.

**See also** setBound().

----

.. _api_Mesh_clear:

:ref:`void<api_void>`  **Mesh::clear** ()

Removes all attached Levels Of Detal

----

.. _api_Mesh_flags:

:ref:`int<api_int>`  **Mesh::flags** () const

Returns vertex attributes flags. For more details please see the Mesh::Attributes enum.

**See also** setFlags().

----

.. _api_Mesh_isDynamic:

:ref:`bool<api_bool>`  **Mesh::isDynamic** () const

Returns true in case of mesh can by changed at the runtime; otherwise returns false.

----

.. _api_Mesh_lod:

:ref:`Lod<api_Lod>` * **Mesh::lod** (:ref:`int<api_int>`  *lod*) const

Returns Lod data for the *lod* index if exists; othewise returns nullptr.

**See also** setLod().

----

.. _api_Mesh_lodsCount:

:ref:`int<api_int>`  **Mesh::lodsCount** () const

Returns the number of Levels Of Details

----

.. _api_Mesh_makeDynamic:

:ref:`void<api_void>`  **Mesh::makeDynamic** ()

Marks mesh as dynamic that means it's can be changed at the runtime.

----

.. _api_Mesh_mode:

:ref:`int<api_int>`  **Mesh::mode** () const

Returns poligon mode for the mesh. For more details please see the Mesh::Modes enum.

**See also** setMode().

----

.. _api_Mesh_recalcBounds:

:ref:`void<api_void>`  **Mesh::recalcBounds** ()

Generates bound box according new geometry.

----

.. _api_Mesh_setBound:

:ref:`void<api_void>`  **Mesh::setBound** (:ref:`AABBox<api_AABBox>` & *box*)

Sets new bounding *box* for the Mesh.

**See also** bound().

----

.. _api_Mesh_setFlags:

:ref:`void<api_void>`  **Mesh::setFlags** (:ref:`int<api_int>`  *flags*)

Sets vertex attributes *flags*. For more details please see the Mesh::Attributes enum.

**See also** *flags*().

----

.. _api_Mesh_setLod:

:ref:`void<api_void>`  **Mesh::setLod** (:ref:`int<api_int>`  *lod*, :ref:`Lod<api_Lod>` * *data*)

Sets the new *data* for the particular *lod*. This method can replace the existing *data*.

**See also** *lod*().

----

.. _api_Mesh_setMode:

:ref:`void<api_void>`  **Mesh::setMode** (:ref:`int<api_int>`  *mode*)

Sets poligon *mode* for the mesh. For more details please see the Mesh::Modes enum.

**See also** *mode*().

----


