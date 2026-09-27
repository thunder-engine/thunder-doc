.. _api_Mesh:

Mesh
====

Inherited: :ref:`Resource<api_Resource>`

.. _api_Mesh_description:

Description
-----------



.. _api_Mesh_public:

Public Methods
--------------

+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`batchMesh<api_Mesh_35c6a82f>` (Mesh & mesh, const Matrix4 * transform = nullptr) |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|  :ref:`std::vector<Mesh::BlendShape><api_std_vector<Mesh_BlendShape>>` & | :ref:`blendShapes<api_Mesh_76bdc0ef>` ()                                               |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                            Vector4Vector | :ref:`bones<api_Mesh_c5af4938>` ()                                                     |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                :ref:`AABBox<api_AABBox>` | :ref:`bound<api_Mesh_c0a1f698>` () const                                               |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`clear<api_Mesh_b10f4cde>` ()                                                     |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`clearBlendShapes<api_Mesh_58a1246f>` ()                                          |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                            Vector4Vector | :ref:`colors<api_Mesh_1c6b7ae9>` ()                                                    |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                          :ref:`Material<api_Material>` * | :ref:`defaultMaterial<api_Mesh_4908d531>` (int  sub = 0) const                         |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                      int | :ref:`indexCount<api_Mesh_c9d176f5>` (int  sub) const                                  |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                      int | :ref:`indexStart<api_Mesh_a2f90ebc>` (int  sub) const                                  |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                              IndexVector | :ref:`indices<api_Mesh_9d0afe1c>` ()                                                   |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     bool | :ref:`isDynamic<api_Mesh_5e36b218>` () const                                           |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     bool | :ref:`isEmpty<api_Mesh_273df8ab>` () const                                             |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`makeDynamic<api_Mesh_d3a04269>` ()                                               |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                            Vector3Vector | :ref:`normals<api_Mesh_febd43c9>` ()                                                   |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`recalcBounds<api_Mesh_b03a1d67>` ()                                              |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`recalcNormals<api_Mesh_6f93458d>` ()                                             |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`recalcTangents<api_Mesh_e45893c0>` ()                                            |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`setBones<api_Mesh_45d62a78>` (const Vector4Vector & bones)                       |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`setBound<api_Mesh_ac983567>` (const AABBox & box)                                |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`setColors<api_Mesh_7d96ab54>` (const Vector4Vector & colors)                     |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`setDefaultMaterial<api_Mesh_a9ed48b2>` (Material * material, int  sub = 0)       |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`setIndices<api_Mesh_db9e267f>` (const IndexVector & indices)                     |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`setNormals<api_Mesh_e36a218d>` (const Vector3Vector & normals)                   |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`setSubMesh<api_Mesh_4a2901c7>` (int  offset, int  sub)                           |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`setTangents<api_Mesh_b28e5416>` (const Vector3Vector & tangents)                 |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`setTopology<api_Mesh_f328a051>` (int  topology)                                  |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`setUv0<api_Mesh_db79e683>` (const Vector2Vector & uv0)                           |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`setUv1<api_Mesh_0d18a79f>` (const Vector2Vector & uv1)                           |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`setVertices<api_Mesh_ba86e324>` (const Vector3Vector & vertices)                 |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                     void | :ref:`setWeights<api_Mesh_254c981a>` (const Vector4Vector & weights)                   |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                      int | :ref:`subMeshCount<api_Mesh_15d389a0>` () const                                        |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                            Vector3Vector | :ref:`tangents<api_Mesh_9dc0147e>` ()                                                  |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                                      int | :ref:`topology<api_Mesh_35a6db1e>` () const                                            |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                            Vector2Vector | :ref:`uv0<api_Mesh_d624f91b>` ()                                                       |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                            Vector2Vector | :ref:`uv1<api_Mesh_04968cfa>` ()                                                       |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                            Vector3Vector | :ref:`vertices<api_Mesh_d4fc8169>` ()                                                  |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                            Vector4Vector | :ref:`weights<api_Mesh_abc15329>` ()                                                   |
+--------------------------------------------------------------------------+----------------------------------------------------------------------------------------+



.. _api_Mesh_static:

Static Methods
--------------

None

.. _api_Mesh_methods:

Methods Description
-------------------

.. _api_Mesh_35c6a82f:

 void **Mesh::batchMesh** (:ref:`Mesh<api_Mesh>` & *mesh*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Merges current with provided mesh. In the case of the transform, the matrix is not nullptr it will be applied to *mesh* before merging.

----

.. _api_Mesh_76bdc0ef:

 :ref:`std::vector<Mesh::BlendShape><api_std::vector<Mesh::BlendShape>>` & **Mesh::blendShapes** ()

Returns the list of blend shapes for the Mesh.

----

.. _api_Mesh_c5af4938:

 Vector4Vector **Mesh::bones** ()

Returns an array of bones for vertices for the particular Lod.

**See also** setBones().

----

.. _api_Mesh_c0a1f698:

 :ref:`AABBox<api_AABBox>`  **Mesh::bound** () const

Returns bounding box for the Mesh.

**See also** setBound().

----

.. _api_Mesh_b10f4cde:

 void **Mesh::clear** ()

Removes all mesh data.

----

.. _api_Mesh_58a1246f:

 void **Mesh::clearBlendShapes** ()

Clears all blend shapes from the Mesh.

----

.. _api_Mesh_1c6b7ae9:

 Vector4Vector **Mesh::colors** ()

Returns an array of colors for vertices for the particular Mesh.

**See also** setColors().

----

.. _api_Mesh_4908d531:

 :ref:`Material<api_Material>` * **Mesh::defaultMaterial** (int  *sub* = 0) const

Returns a default material for the *sub* mesh.

**See also** setDefaultMaterial().

----

.. _api_Mesh_c9d176f5:

 int **Mesh::indexCount** (int  *sub*) const

Returns index count for the *sub* mesh.

----

.. _api_Mesh_a2f90ebc:

 int **Mesh::indexStart** (int  *sub*) const

Returns starting point index for the *sub* mesh.

----

.. _api_Mesh_9d0afe1c:

 IndexVector **Mesh::indices** ()

Returns an array of mesh indices for the particular Mesh.

**See also** setIndices().

----

.. _api_Mesh_5e36b218:

 bool **Mesh::isDynamic** () const

Returns true in case of mesh can by changed at the runtime; otherwise returns false.

----

.. _api_Mesh_273df8ab:

 bool **Mesh::isEmpty** () const

Returns false if mesh structure is empty; otherwise returns true.

----

.. _api_Mesh_d3a04269:

 void **Mesh::makeDynamic** ()

Marks mesh as dynamic that means it's can be changed at the runtime.

----

.. _api_Mesh_febd43c9:

 Vector3Vector **Mesh::normals** ()

Returns an array of mesh normals for the particular Lod.

**See also** setNormals().

----

.. _api_Mesh_b03a1d67:

 void **Mesh::recalcBounds** ()

Generates bound box according new geometry.

----

.. _api_Mesh_6f93458d:

 void **Mesh::recalcNormals** ()

Recalculates normals of the Mesh from the triangles and vertices.

----

.. _api_Mesh_e45893c0:

 void **Mesh::recalcTangents** ()

Recalculates tangents of the Mesh from the triangles and UV's.

----

.. _api_Mesh_45d62a78:

 void **Mesh::setBones** (Vector4Vector & *bones*)

Sets an array of *bones* for vertices for the particular Lod.

**See also** bones().

----

.. _api_Mesh_ac983567:

 void **Mesh::setBound** (:ref:`AABBox<api_AABBox>` & *box*)

Sets new bounding *box* for the Mesh.

**See also** bound().

----

.. _api_Mesh_7d96ab54:

 void **Mesh::setColors** (Vector4Vector & *colors*)

Sets an array of *colors* for vertices for the particular Mesh.

**See also** colors().

----

.. _api_Mesh_a9ed48b2:

 void **Mesh::setDefaultMaterial** (:ref:`Material<api_Material>` * *material*, int  *sub* = 0)

Sets a default *material* for the *sub* mesh.

**See also** defaultMaterial().

----

.. _api_Mesh_db9e267f:

 void **Mesh::setIndices** (IndexVector & *indices*)

Sets an array of mesh *indices* for the particular Mesh.

**See also** indices().

----

.. _api_Mesh_e36a218d:

 void **Mesh::setNormals** (Vector3Vector & *normals*)

Sets an array of mesh *normals* for the particular Lod.

**See also** normals().

----

.. _api_Mesh_4a2901c7:

 void **Mesh::setSubMesh** (int  *offset*, int  *sub*)

Sets a base vertex *offset* for the *sub* mesh.

----

.. _api_Mesh_b28e5416:

 void **Mesh::setTangents** (Vector3Vector & *tangents*)

Sets an array of mesh *tangents* for the particular Lod.

**See also** tangents().

----

.. _api_Mesh_f328a051:

 void **Mesh::setTopology** (int  *topology*)

Sets the *topology* type of the specified mesh, as defined in the Topology enum.

**See also** topology().

----

.. _api_Mesh_db79e683:

 void **Mesh::setUv0** (Vector2Vector & *uv0*)

Sets an array of mesh *uv0* (base) texture coordinates for the particular Lod.

**See also** uv0().

----

.. _api_Mesh_0d18a79f:

 void **Mesh::setUv1** (Vector2Vector & *uv1*)

Sets an array of mesh *uv1* texture coordinates for the particular Lod.

**See also** uv1().

----

.. _api_Mesh_ba86e324:

 void **Mesh::setVertices** (Vector3Vector & *vertices*)

Sets an array of mesh *vertices* for the particular Lod.

**See also** vertices().

----

.. _api_Mesh_254c981a:

 void **Mesh::setWeights** (Vector4Vector & *weights*)

Sets an array of bone *weights* for the particular Lod.

**See also** weights().

----

.. _api_Mesh_15d389a0:

 int **Mesh::subMeshCount** () const

Returns the number of sub-meshes inside the Mesh.

----

.. _api_Mesh_9dc0147e:

 Vector3Vector **Mesh::tangents** ()

Returns an array of mesh tangents for the particular Lod.

**See also** setTangents().

----

.. _api_Mesh_35a6db1e:

 int **Mesh::topology** () const

Returns the topology type of the specified mesh, as defined in the Topology enum. This value indicates how the mesh's vertices are connected.

**See also** setTopology().

----

.. _api_Mesh_d624f91b:

 Vector2Vector **Mesh::uv0** ()

Returns an array of mesh uv0 (base) texture coordinates for the particular Lod.

**See also** setUv0().

----

.. _api_Mesh_04968cfa:

 Vector2Vector **Mesh::uv1** ()

Returns an array of mesh uv1 texture coordinates for the particular Lod.

**See also** setUv1().

----

.. _api_Mesh_d4fc8169:

 Vector3Vector **Mesh::vertices** ()

Returns an array of mesh vertices for the particular Lod.

**See also** setVertices().

----

.. _api_Mesh_abc15329:

 Vector4Vector **Mesh::weights** ()

Returns an array of bone weights for the particular Mesh.

**See also** setWeights().


