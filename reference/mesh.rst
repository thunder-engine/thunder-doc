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
|                             void | :ref:`batchMesh<api_Mesh_0b2a9ed6>` (Mesh & mesh, const Matrix4 * transform = nullptr) |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector4Vector | :ref:`bones<api_Mesh_cb3a940d>` ()                                                     |
+----------------------------------+----------------------------------------------------------------------------------------+
|        :ref:`AABBox<api_AABBox>` | :ref:`bound<api_Mesh_915d3820>` () const                                               |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`clear<api_Mesh_20731849>` ()                                                     |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector4Vector | :ref:`colors<api_Mesh_5243db98>` ()                                                    |
+----------------------------------+----------------------------------------------------------------------------------------+
|  :ref:`Material<api_Material>` * | :ref:`defaultMaterial<api_Mesh_53d924f1>` (int  sub = 0) const                         |
+----------------------------------+----------------------------------------------------------------------------------------+
|                              int | :ref:`indexCount<api_Mesh_a34ef907>` (int  sub) const                                  |
+----------------------------------+----------------------------------------------------------------------------------------+
|                              int | :ref:`indexStart<api_Mesh_013a5f8e>` (int  sub) const                                  |
+----------------------------------+----------------------------------------------------------------------------------------+
|                      IndexVector | :ref:`indices<api_Mesh_48a9e12d>` ()                                                   |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             bool | :ref:`isDynamic<api_Mesh_c283547d>` () const                                           |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             bool | :ref:`isEmpty<api_Mesh_219c853e>` () const                                             |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`makeDynamic<api_Mesh_fbe20418>` ()                                               |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector3Vector | :ref:`normals<api_Mesh_0efd13c5>` ()                                                   |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`recalcBounds<api_Mesh_c6b0315a>` ()                                              |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`recalcNormals<api_Mesh_5e470a9b>` ()                                             |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`recalcTangents<api_Mesh_f3d69758>` ()                                            |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setBones<api_Mesh_ad19b542>` (const Vector4Vector & bones)                       |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setBound<api_Mesh_b617c853>` (const AABBox & box)                                |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setColors<api_Mesh_e21d3a56>` (const Vector4Vector & colors)                     |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setDefaultMaterial<api_Mesh_17eb3c82>` (Material * material, int  sub = 0)       |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setIndices<api_Mesh_2071ac83>` (const IndexVector & indices)                     |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setNormals<api_Mesh_02c5e6d7>` (const Vector3Vector & normals)                   |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setSubMesh<api_Mesh_50897462>` (int  offset, int  sub)                           |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setTangents<api_Mesh_6d9b8402>` (const Vector3Vector & tangents)                 |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setUv0<api_Mesh_b9e723a4>` (const Vector2Vector & uv0)                           |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setUv1<api_Mesh_2b70ec49>` (const Vector2Vector & uv1)                           |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setVertices<api_Mesh_284edf95>` (const Vector3Vector & vertices)                 |
+----------------------------------+----------------------------------------------------------------------------------------+
|                             void | :ref:`setWeights<api_Mesh_854a2b01>` (const Vector4Vector & weights)                   |
+----------------------------------+----------------------------------------------------------------------------------------+
|                              int | :ref:`subMeshCount<api_Mesh_1735a2d8>` () const                                        |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector3Vector | :ref:`tangents<api_Mesh_08a356d1>` ()                                                  |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector2Vector | :ref:`uv0<api_Mesh_035c4719>` ()                                                       |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector2Vector | :ref:`uv1<api_Mesh_6a03b875>` ()                                                       |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector3Vector | :ref:`vertices<api_Mesh_8645e10f>` ()                                                  |
+----------------------------------+----------------------------------------------------------------------------------------+
|                    Vector4Vector | :ref:`weights<api_Mesh_e10fb548>` ()                                                   |
+----------------------------------+----------------------------------------------------------------------------------------+



.. _api_Mesh_static:

Static Methods
--------------

None

.. _api_Mesh_methods:

Methods Description
-------------------

.. _api_Mesh_0b2a9ed6:

 void **Mesh::batchMesh** (:ref:`Mesh<api_Mesh>` & *mesh*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Merges current with provided mesh. In the case of the transform, the matrix is not nullptr it will be applied to *mesh* before merging.

----

.. _api_Mesh_cb3a940d:

 Vector4Vector **Mesh::bones** ()

Returns an array of bones for vertices for the particular Lod.

**See also** setBones().

----

.. _api_Mesh_915d3820:

 :ref:`AABBox<api_AABBox>`  **Mesh::bound** () const

Returns bounding box for the Mesh.

**See also** setBound().

----

.. _api_Mesh_20731849:

 void **Mesh::clear** ()

Removes all mesh data.

----

.. _api_Mesh_5243db98:

 Vector4Vector **Mesh::colors** ()

Returns an array of colors for vertices for the particular Mesh.

**See also** setColors().

----

.. _api_Mesh_53d924f1:

 :ref:`Material<api_Material>` * **Mesh::defaultMaterial** (int  *sub* = 0) const

Returns a default material for the *sub* mesh.

**See also** setDefaultMaterial().

----

.. _api_Mesh_a34ef907:

 int **Mesh::indexCount** (int  *sub*) const

Returns index count for the *sub* mesh.

----

.. _api_Mesh_013a5f8e:

 int **Mesh::indexStart** (int  *sub*) const

Returns starting point index for the *sub* mesh.

----

.. _api_Mesh_48a9e12d:

 IndexVector **Mesh::indices** ()

Returns an array of mesh indices for the particular Mesh.

**See also** setIndices().

----

.. _api_Mesh_c283547d:

 bool **Mesh::isDynamic** () const

Returns true in case of mesh can by changed at the runtime; otherwise returns false.

----

.. _api_Mesh_219c853e:

 bool **Mesh::isEmpty** () const

Returns false if mesh structure is empty; otherwise returns true.

----

.. _api_Mesh_fbe20418:

 void **Mesh::makeDynamic** ()

Marks mesh as dynamic that means it's can be changed at the runtime.

----

.. _api_Mesh_0efd13c5:

 Vector3Vector **Mesh::normals** ()

Returns an array of mesh normals for the particular Lod.

**See also** setNormals().

----

.. _api_Mesh_c6b0315a:

 void **Mesh::recalcBounds** ()

Generates bound box according new geometry.

----

.. _api_Mesh_5e470a9b:

 void **Mesh::recalcNormals** ()

Recalculates normals of the Mesh from the triangles and vertices.

----

.. _api_Mesh_f3d69758:

 void **Mesh::recalcTangents** ()

Recalculates tangents of the Mesh from the triangles and UV's.

----

.. _api_Mesh_ad19b542:

 void **Mesh::setBones** (Vector4Vector & *bones*)

Sets an array of *bones* for vertices for the particular Lod.

**See also** bones().

----

.. _api_Mesh_b617c853:

 void **Mesh::setBound** (:ref:`AABBox<api_AABBox>` & *box*)

Sets new bounding *box* for the Mesh.

**See also** bound().

----

.. _api_Mesh_e21d3a56:

 void **Mesh::setColors** (Vector4Vector & *colors*)

Sets an array of *colors* for vertices for the particular Mesh.

**See also** colors().

----

.. _api_Mesh_17eb3c82:

 void **Mesh::setDefaultMaterial** (:ref:`Material<api_Material>` * *material*, int  *sub* = 0)

Sets a default *material* for the *sub* mesh.

**See also** defaultMaterial().

----

.. _api_Mesh_2071ac83:

 void **Mesh::setIndices** (IndexVector & *indices*)

Sets an array of mesh *indices* for the particular Mesh.

**See also** indices().

----

.. _api_Mesh_02c5e6d7:

 void **Mesh::setNormals** (Vector3Vector & *normals*)

Sets an array of mesh *normals* for the particular Lod.

**See also** normals().

----

.. _api_Mesh_50897462:

 void **Mesh::setSubMesh** (int  *offset*, int  *sub*)

Sets a base vertex *offset* for the *sub* mesh.

----

.. _api_Mesh_6d9b8402:

 void **Mesh::setTangents** (Vector3Vector & *tangents*)

Sets an array of mesh *tangents* for the particular Lod.

**See also** tangents().

----

.. _api_Mesh_b9e723a4:

 void **Mesh::setUv0** (Vector2Vector & *uv0*)

Sets an array of mesh *uv0* (base) texture coordinates for the particular Lod.

**See also** uv0().

----

.. _api_Mesh_2b70ec49:

 void **Mesh::setUv1** (Vector2Vector & *uv1*)

Sets an array of mesh *uv1* texture coordinates for the particular Lod.

**See also** uv1().

----

.. _api_Mesh_284edf95:

 void **Mesh::setVertices** (Vector3Vector & *vertices*)

Sets an array of mesh *vertices* for the particular Lod.

**See also** vertices().

----

.. _api_Mesh_854a2b01:

 void **Mesh::setWeights** (Vector4Vector & *weights*)

Sets an array of bone *weights* for the particular Lod.

**See also** weights().

----

.. _api_Mesh_1735a2d8:

 int **Mesh::subMeshCount** () const

Returns the number of sub-meshes inside the Mesh.

----

.. _api_Mesh_08a356d1:

 Vector3Vector **Mesh::tangents** ()

Returns an array of mesh tangents for the particular Lod.

**See also** setTangents().

----

.. _api_Mesh_035c4719:

 Vector2Vector **Mesh::uv0** ()

Returns an array of mesh uv0 (base) texture coordinates for the particular Lod.

**See also** setUv0().

----

.. _api_Mesh_6a03b875:

 Vector2Vector **Mesh::uv1** ()

Returns an array of mesh uv1 texture coordinates for the particular Lod.

**See also** setUv1().

----

.. _api_Mesh_8645e10f:

 Vector3Vector **Mesh::vertices** ()

Returns an array of mesh vertices for the particular Lod.

**See also** setVertices().

----

.. _api_Mesh_e10fb548:

 Vector4Vector **Mesh::weights** ()

Returns an array of bone weights for the particular Mesh.

**See also** setWeights().


