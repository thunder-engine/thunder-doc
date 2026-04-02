.. _api_Mesh:

Mesh
====

Inherited: None

.. _api_Mesh_description:

Description
-----------



.. _api_Mesh_public:

Public Methods
--------------

+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`batchMesh<api_Mesh_0e2437d5>` (Mesh & mesh, const Matrix4 * transform = nullptr) |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector4Vector | :ref:`bones<api_Mesh_517ec302>` ()                                                     |
+----------------------------------+----------------------------------------------------------------------------------------+
|        :ref:`AABBox<api_AABBox>` | :ref:`bound<api_Mesh_95a630b7>` () const                                               |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`clear<api_Mesh_01b47ce5>` ()                                                     |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector4Vector | :ref:`colors<api_Mesh_870934f5>` ()                                                    |
+----------------------------------+----------------------------------------------------------------------------------------+
|  :ref:`Material<api_Material>` * | :ref:`defaultMaterial<api_Mesh_f81ac026>` (int  sub = 0) const                         |
+----------------------------------+----------------------------------------------------------------------------------------+
|                              int | :ref:`indexCount<api_Mesh_7d4923ba>` (int  sub) const                                  |
+----------------------------------+----------------------------------------------------------------------------------------+
|                              int | :ref:`indexStart<api_Mesh_ead5241f>` (int  sub) const                                  |
+----------------------------------+----------------------------------------------------------------------------------------+
|                      IndexVector | :ref:`indices<api_Mesh_859fca70>` ()                                                   |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             bool | :ref:`isDynamic<api_Mesh_98c1e3fd>` () const                                           |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             bool | :ref:`isEmpty<api_Mesh_f5ac9134>` () const                                             |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`makeDynamic<api_Mesh_0e56b19d>` ()                                               |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector3Vector | :ref:`normals<api_Mesh_f61742eb>` ()                                                   |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`recalcBounds<api_Mesh_bafe803c>` ()                                              |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`recalcNormals<api_Mesh_50139fd4>` ()                                             |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`recalcTangents<api_Mesh_2a8140bf>` ()                                            |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setBones<api_Mesh_87650c4b>` (const Vector4Vector & bones)                       |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setBound<api_Mesh_78b31c62>` (const AABBox & box)                                |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setColors<api_Mesh_9ad2368f>` (const Vector4Vector & colors)                     |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setDefaultMaterial<api_Mesh_89b7fc5d>` (Material * material, int  sub = 0)       |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setIndices<api_Mesh_ab7610fc>` (const IndexVector & indices)                     |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setNormals<api_Mesh_38471f50>` (const Vector3Vector & normals)                   |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setSubMesh<api_Mesh_59f03816>` (int  offset, int  sub)                           |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setTangents<api_Mesh_6ed0c7f3>` (const Vector3Vector & tangents)                 |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setUv0<api_Mesh_840526e3>` (const Vector2Vector & uv0)                           |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setUv1<api_Mesh_0b17826f>` (const Vector2Vector & uv1)                           |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setVertices<api_Mesh_3d24feb6>` (const Vector3Vector & vertices)                 |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setWeights<api_Mesh_1cb7a308>` (const Vector4Vector & weights)                   |
+----------------------------------+----------------------------------------------------------------------------------------+
|                              int | :ref:`subMeshCount<api_Mesh_0f4d32a9>` () const                                        |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector3Vector | :ref:`tangents<api_Mesh_a67b3f5d>` ()                                                  |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector2Vector | :ref:`uv0<api_Mesh_2e436057>` ()                                                       |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector2Vector | :ref:`uv1<api_Mesh_65b41f2c>` ()                                                       |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector3Vector | :ref:`vertices<api_Mesh_0c8adeb2>` ()                                                  |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector4Vector | :ref:`weights<api_Mesh_8eca2456>` ()                                                   |
+----------------------------------+----------------------------------------------------------------------------------------+



.. _api_Mesh_static:

Static Methods
--------------

None

.. _api_Mesh_methods:

Methods Description
-------------------

.. _api_Mesh_0e2437d5:

 void **Mesh::batchMesh** (:ref:`Mesh<api_Mesh>` & *mesh*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Merges current with provided mesh. In the case of the transform, the matrix is not nullptr it will be applied to *mesh* before merging.

----

.. _api_Mesh_517ec302:

 Vector4Vector **Mesh::bones** ()

Returns an array of bones for vertices for the particular Lod.

**See also** setBones().

----

.. _api_Mesh_95a630b7:

 :ref:`AABBox<api_AABBox>`  **Mesh::bound** () const

Returns bounding box for the Mesh.

**See also** setBound().

----

.. _api_Mesh_01b47ce5:

 void **Mesh::clear** ()

Removes all mesh data.

----

.. _api_Mesh_870934f5:

 Vector4Vector **Mesh::colors** ()

Returns an array of colors for vertices for the particular Mesh.

**See also** setColors().

----

.. _api_Mesh_f81ac026:

 :ref:`Material<api_Material>` * **Mesh::defaultMaterial** (int  *sub* = 0) const

Returns a default material for the *sub* mesh.

**See also** setDefaultMaterial().

----

.. _api_Mesh_7d4923ba:

 int **Mesh::indexCount** (int  *sub*) const

Returns index count for the *sub* mesh.

----

.. _api_Mesh_ead5241f:

 int **Mesh::indexStart** (int  *sub*) const

Returns starting point index for the *sub* mesh.

----

.. _api_Mesh_859fca70:

 IndexVector **Mesh::indices** ()

Returns an array of mesh indices for the particular Mesh.

**See also** setIndices().

----

.. _api_Mesh_98c1e3fd:

 bool **Mesh::isDynamic** () const

Returns true in case of mesh can by changed at the runtime; otherwise returns false.

----

.. _api_Mesh_f5ac9134:

 bool **Mesh::isEmpty** () const

Returns false if mesh structure is empty; otherwise returns true.

----

.. _api_Mesh_0e56b19d:

 void **Mesh::makeDynamic** ()

Marks mesh as dynamic that means it's can be changed at the runtime.

----

.. _api_Mesh_f61742eb:

 Vector3Vector **Mesh::normals** ()

Returns an array of mesh normals for the particular Lod.

**See also** setNormals().

----

.. _api_Mesh_bafe803c:

 void **Mesh::recalcBounds** ()

Generates bound box according new geometry.

----

.. _api_Mesh_50139fd4:

 void **Mesh::recalcNormals** ()

Recalculates normals of the Mesh from the triangles and vertices.

----

.. _api_Mesh_2a8140bf:

 void **Mesh::recalcTangents** ()

Recalculates tangents of the Mesh from the triangles and UV's.

----

.. _api_Mesh_87650c4b:

 void **Mesh::setBones** (Vector4Vector & *bones*)

Sets an array of *bones* for vertices for the particular Lod.

**See also** bones().

----

.. _api_Mesh_78b31c62:

 void **Mesh::setBound** (:ref:`AABBox<api_AABBox>` & *box*)

Sets new bounding *box* for the Mesh.

**See also** bound().

----

.. _api_Mesh_9ad2368f:

 void **Mesh::setColors** (Vector4Vector & *colors*)

Sets an array of *colors* for vertices for the particular Mesh.

**See also** colors().

----

.. _api_Mesh_89b7fc5d:

 void **Mesh::setDefaultMaterial** (:ref:`Material<api_Material>` * *material*, int  *sub* = 0)

Sets a default *material* for the *sub* mesh.

**See also** defaultMaterial().

----

.. _api_Mesh_ab7610fc:

 void **Mesh::setIndices** (IndexVector & *indices*)

Sets an array of mesh *indices* for the particular Mesh.

**See also** indices().

----

.. _api_Mesh_38471f50:

 void **Mesh::setNormals** (Vector3Vector & *normals*)

Sets an array of mesh *normals* for the particular Lod.

**See also** normals().

----

.. _api_Mesh_59f03816:

 void **Mesh::setSubMesh** (int  *offset*, int  *sub*)

Sets a base vertex *offset* for the *sub* mesh.

----

.. _api_Mesh_6ed0c7f3:

 void **Mesh::setTangents** (Vector3Vector & *tangents*)

Sets an array of mesh *tangents* for the particular Lod.

**See also** tangents().

----

.. _api_Mesh_840526e3:

 void **Mesh::setUv0** (Vector2Vector & *uv0*)

Sets an array of mesh *uv0* (base) texture coordinates for the particular Lod.

**See also** uv0().

----

.. _api_Mesh_0b17826f:

 void **Mesh::setUv1** (Vector2Vector & *uv1*)

Sets an array of mesh *uv1* texture coordinates for the particular Lod.

**See also** uv1().

----

.. _api_Mesh_3d24feb6:

 void **Mesh::setVertices** (Vector3Vector & *vertices*)

Sets an array of mesh *vertices* for the particular Lod.

**See also** vertices().

----

.. _api_Mesh_1cb7a308:

 void **Mesh::setWeights** (Vector4Vector & *weights*)

Sets an array of bone *weights* for the particular Lod.

**See also** weights().

----

.. _api_Mesh_0f4d32a9:

 int **Mesh::subMeshCount** () const

Returns the number of sub-meshes inside the Mesh.

----

.. _api_Mesh_a67b3f5d:

 Vector3Vector **Mesh::tangents** ()

Returns an array of mesh tangents for the particular Lod.

**See also** setTangents().

----

.. _api_Mesh_2e436057:

 Vector2Vector **Mesh::uv0** ()

Returns an array of mesh uv0 (base) texture coordinates for the particular Lod.

**See also** setUv0().

----

.. _api_Mesh_65b41f2c:

 Vector2Vector **Mesh::uv1** ()

Returns an array of mesh uv1 texture coordinates for the particular Lod.

**See also** setUv1().

----

.. _api_Mesh_0c8adeb2:

 Vector3Vector **Mesh::vertices** ()

Returns an array of mesh vertices for the particular Lod.

**See also** setVertices().

----

.. _api_Mesh_8eca2456:

 Vector4Vector **Mesh::weights** ()

Returns an array of bone weights for the particular Mesh.

**See also** setWeights().


