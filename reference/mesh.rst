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

+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`batchMesh<api_Mesh_f2cabd39>` (Mesh & mesh, const Matrix4 * transform = nullptr) |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|  :ref:`Vector4Vector<api_Vector4Vector>` & | :ref:`bones<api_Mesh_309f58e6>` ()                                                     |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                  :ref:`AABBox<api_AABBox>` | :ref:`bound<api_Mesh_9047e658>` () const                                               |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`clear<api_Mesh_d2b7946a>` ()                                                     |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|  :ref:`Vector4Vector<api_Vector4Vector>` & | :ref:`colors<api_Mesh_183c9abd>` ()                                                    |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|            :ref:`Material<api_Material>` * | :ref:`defaultMaterial<api_Mesh_b6482f59>` (int  sub = 0) const                         |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                        int | :ref:`indexCount<api_Mesh_16fb4e5d>` (int  sub) const                                  |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                        int | :ref:`indexStart<api_Mesh_47f0ea85>` (int  sub) const                                  |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|      :ref:`IndexVector<api_IndexVector>` & | :ref:`indices<api_Mesh_fbd9138e>` ()                                                   |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       bool | :ref:`isDynamic<api_Mesh_d9320fb8>` () const                                           |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       bool | :ref:`isEmpty<api_Mesh_cd310b62>` () const                                             |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`makeDynamic<api_Mesh_4b7195e0>` ()                                               |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|  :ref:`Vector3Vector<api_Vector3Vector>` & | :ref:`normals<api_Mesh_dc7a129b>` ()                                                   |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`recalcBounds<api_Mesh_287cbd41>` ()                                              |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`recalcNormals<api_Mesh_a0431fb9>` ()                                             |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`recalcTangents<api_Mesh_d135b069>` ()                                            |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`setBones<api_Mesh_4f67ca1b>` (const Vector4Vector & bones)                       |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`setBound<api_Mesh_d9fc54b7>` (const AABBox & box)                                |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`setColors<api_Mesh_a8ec2f36>` (const Vector4Vector & colors)                     |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`setDefaultMaterial<api_Mesh_db89af34>` (Material * material, int  sub = 0)       |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`setIndices<api_Mesh_7196c4ea>` (const IndexVector & indices)                     |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`setNormals<api_Mesh_731ec065>` (const Vector3Vector & normals)                   |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`setSubMesh<api_Mesh_85aeb46d>` (int  offset, int  sub)                           |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`setTangents<api_Mesh_437ec0bf>` (const Vector3Vector & tangents)                 |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`setUv0<api_Mesh_9af0c684>` (const Vector2Vector & uv0)                           |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`setUv1<api_Mesh_a02cd5f7>` (const Vector2Vector & uv1)                           |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`setVertices<api_Mesh_3a6ec2b7>` (const Vector3Vector & vertices)                 |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                       void | :ref:`setWeights<api_Mesh_6be2f079>` (const Vector4Vector & weights)                   |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|                                        int | :ref:`subMeshCount<api_Mesh_3e0284af>` () const                                        |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|  :ref:`Vector3Vector<api_Vector3Vector>` & | :ref:`tangents<api_Mesh_9583f76a>` ()                                                  |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|  :ref:`Vector2Vector<api_Vector2Vector>` & | :ref:`uv0<api_Mesh_2746cf8d>` ()                                                       |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|  :ref:`Vector2Vector<api_Vector2Vector>` & | :ref:`uv1<api_Mesh_631c248a>` ()                                                       |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|  :ref:`Vector3Vector<api_Vector3Vector>` & | :ref:`vertices<api_Mesh_28591cef>` ()                                                  |
+--------------------------------------------+----------------------------------------------------------------------------------------+
|  :ref:`Vector4Vector<api_Vector4Vector>` & | :ref:`weights<api_Mesh_bcf652ed>` ()                                                   |
+--------------------------------------------+----------------------------------------------------------------------------------------+



.. _api_Mesh_static:

Static Methods
--------------

None

.. _api_Mesh_methods:

Methods Description
-------------------

.. _api_Mesh_f2cabd39:

 void **Mesh::batchMesh** (:ref:`Mesh<api_Mesh>` & *mesh*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Merges current with provided *mesh*. In the case of the *transform*, the matrix is not nullptr it will be applied to *mesh* before merging.

----

.. _api_Mesh_309f58e6:

 :ref:`Vector4Vector<api_Vector4Vector>` & **Mesh::bones** ()

Returns an array of bones for vertices for the particular Lod.

**See also** setBones().

----

.. _api_Mesh_9047e658:

 :ref:`AABBox<api_AABBox>`  **Mesh::bound** () const

Returns bounding box for the Mesh.

**See also** setBound().

----

.. _api_Mesh_d2b7946a:

 void **Mesh::clear** ()

Removes all mesh data.

----

.. _api_Mesh_183c9abd:

 :ref:`Vector4Vector<api_Vector4Vector>` & **Mesh::colors** ()

Returns an array of colors for vertices for the particular Mesh.

**See also** setColors().

----

.. _api_Mesh_b6482f59:

 :ref:`Material<api_Material>` * **Mesh::defaultMaterial** (int  *sub* = 0) const

Returns a default material for the *sub* mesh.

**See also** setDefaultMaterial().

----

.. _api_Mesh_16fb4e5d:

 int **Mesh::indexCount** (int  *sub*) const

Returns index count for the *sub* mesh.

----

.. _api_Mesh_47f0ea85:

 int **Mesh::indexStart** (int  *sub*) const

Returns starting point index for the *sub* mesh.

----

.. _api_Mesh_fbd9138e:

 :ref:`IndexVector<api_IndexVector>` & **Mesh::indices** ()

Returns an array of mesh indices for the particular Mesh.

**See also** setIndices().

----

.. _api_Mesh_d9320fb8:

 bool **Mesh::isDynamic** () const

Returns true in case of mesh can by changed at the runtime; otherwise returns false.

----

.. _api_Mesh_cd310b62:

 bool **Mesh::isEmpty** () const

Returns false if mesh structure is empty; otherwise returns true.

----

.. _api_Mesh_4b7195e0:

 void **Mesh::makeDynamic** ()

Marks mesh as dynamic that means it's can be changed at the runtime.

----

.. _api_Mesh_dc7a129b:

 :ref:`Vector3Vector<api_Vector3Vector>` & **Mesh::normals** ()

Returns an array of mesh normals for the particular Lod.

**See also** setNormals().

----

.. _api_Mesh_287cbd41:

 void **Mesh::recalcBounds** ()

Generates bound box according new geometry.

----

.. _api_Mesh_a0431fb9:

 void **Mesh::recalcNormals** ()

Recalculates normals of the Mesh from the triangles and vertices.

----

.. _api_Mesh_d135b069:

 void **Mesh::recalcTangents** ()

Recalculates tangents of the Mesh from the triangles and UV's.

----

.. _api_Mesh_4f67ca1b:

 void **Mesh::setBones** (:ref:`Vector4Vector<api_Vector4Vector>` & *bones*)

Sets an array of *bones* for vertices for the particular Lod.

**See also** *bones*().

----

.. _api_Mesh_d9fc54b7:

 void **Mesh::setBound** (:ref:`AABBox<api_AABBox>` & *box*)

Sets new bounding *box* for the Mesh.

**See also** bound().

----

.. _api_Mesh_a8ec2f36:

 void **Mesh::setColors** (:ref:`Vector4Vector<api_Vector4Vector>` & *colors*)

Sets an array of *colors* for vertices for the particular Mesh.

**See also** *colors*().

----

.. _api_Mesh_db89af34:

 void **Mesh::setDefaultMaterial** (:ref:`Material<api_Material>` * *material*, int  *sub* = 0)

Sets a default *material* for the *sub* mesh.

**See also** defaultMaterial().

----

.. _api_Mesh_7196c4ea:

 void **Mesh::setIndices** (:ref:`IndexVector<api_IndexVector>` & *indices*)

Sets an array of mesh *indices* for the particular Mesh.

**See also** *indices*().

----

.. _api_Mesh_731ec065:

 void **Mesh::setNormals** (:ref:`Vector3Vector<api_Vector3Vector>` & *normals*)

Sets an array of mesh *normals* for the particular Lod.

**See also** *normals*().

----

.. _api_Mesh_85aeb46d:

 void **Mesh::setSubMesh** (int  *offset*, int  *sub*)

Sets a base vertex *offset* for the *sub* mesh.

----

.. _api_Mesh_437ec0bf:

 void **Mesh::setTangents** (:ref:`Vector3Vector<api_Vector3Vector>` & *tangents*)

Sets an array of mesh *tangents* for the particular Lod.

**See also** *tangents*().

----

.. _api_Mesh_9af0c684:

 void **Mesh::setUv0** (:ref:`Vector2Vector<api_Vector2Vector>` & *uv0*)

Sets an array of mesh *uv0* (base) texture coordinates for the particular Lod.

**See also** *uv0*().

----

.. _api_Mesh_a02cd5f7:

 void **Mesh::setUv1** (:ref:`Vector2Vector<api_Vector2Vector>` & *uv1*)

Sets an array of mesh *uv1* texture coordinates for the particular Lod.

**See also** *uv1*().

----

.. _api_Mesh_3a6ec2b7:

 void **Mesh::setVertices** (:ref:`Vector3Vector<api_Vector3Vector>` & *vertices*)

Sets an array of mesh *vertices* for the particular Lod.

**See also** *vertices*().

----

.. _api_Mesh_6be2f079:

 void **Mesh::setWeights** (:ref:`Vector4Vector<api_Vector4Vector>` & *weights*)

Sets an array of bone *weights* for the particular Lod.

**See also** *weights*().

----

.. _api_Mesh_3e0284af:

 int **Mesh::subMeshCount** () const

Returns the number of sub-meshes inside the Mesh.

----

.. _api_Mesh_9583f76a:

 :ref:`Vector3Vector<api_Vector3Vector>` & **Mesh::tangents** ()

Returns an array of mesh tangents for the particular Lod.

**See also** setTangents().

----

.. _api_Mesh_2746cf8d:

 :ref:`Vector2Vector<api_Vector2Vector>` & **Mesh::uv0** ()

Returns an array of mesh uv0 (base) texture coordinates for the particular Lod.

**See also** setUv0().

----

.. _api_Mesh_631c248a:

 :ref:`Vector2Vector<api_Vector2Vector>` & **Mesh::uv1** ()

Returns an array of mesh uv1 texture coordinates for the particular Lod.

**See also** setUv1().

----

.. _api_Mesh_28591cef:

 :ref:`Vector3Vector<api_Vector3Vector>` & **Mesh::vertices** ()

Returns an array of mesh vertices for the particular Lod.

**See also** setVertices().

----

.. _api_Mesh_bcf652ed:

 :ref:`Vector4Vector<api_Vector4Vector>` & **Mesh::weights** ()

Returns an array of bone weights for the particular Mesh.

**See also** setWeights().


