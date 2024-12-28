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

+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`batchMesh<api_Mesh_batchMesh>` (Mesh & mesh, const Matrix4 * transform = nullptr)    |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Vector4Vector<api_Vector4Vector>` & | :ref:`bones<api_Mesh_bones>` ()                                                            |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                  :ref:`AABBox<api_AABBox>` | :ref:`bound<api_Mesh_bound>` () const                                                      |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`clear<api_Mesh_clear>` ()                                                            |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Vector4Vector<api_Vector4Vector>` & | :ref:`colors<api_Mesh_colors>` ()                                                          |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|            :ref:`Material<api_Material>` * | :ref:`defaultMaterial<api_Mesh_defaultMaterial>` (int  sub = 0) const                      |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                        int | :ref:`indexCount<api_Mesh_indexCount>` (int  sub) const                                    |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                        int | :ref:`indexStart<api_Mesh_indexStart>` (int  sub) const                                    |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|      :ref:`IndexVector<api_IndexVector>` & | :ref:`indices<api_Mesh_indices>` ()                                                        |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       bool | :ref:`isDynamic<api_Mesh_isDynamic>` () const                                              |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       bool | :ref:`isEmpty<api_Mesh_isEmpty>` () const                                                  |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`makeDynamic<api_Mesh_makeDynamic>` ()                                                |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Vector3Vector<api_Vector3Vector>` & | :ref:`normals<api_Mesh_normals>` ()                                                        |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`recalcBounds<api_Mesh_recalcBounds>` ()                                              |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`recalcNormals<api_Mesh_recalcNormals>` ()                                            |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`setBones<api_Mesh_setBones>` (const Vector4Vector & bones)                           |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`setBound<api_Mesh_setBound>` (const AABBox & box)                                    |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`setColors<api_Mesh_setColors>` (const Vector4Vector & colors)                        |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`setDefaultMaterial<api_Mesh_setDefaultMaterial>` (Material * material, int  sub = 0) |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`setIndices<api_Mesh_setIndices>` (const IndexVector & indices)                       |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`setNormals<api_Mesh_setNormals>` (const Vector3Vector & normals)                     |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`setSubMesh<api_Mesh_setSubMesh>` (int  offset, int  sub)                             |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`setTangents<api_Mesh_setTangents>` (const Vector3Vector & tangents)                  |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`setUv0<api_Mesh_setUv0>` (const Vector2Vector & uv0)                                 |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`setUv1<api_Mesh_setUv1>` (const Vector2Vector & uv1)                                 |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`setVertices<api_Mesh_setVertices>` (const Vector3Vector & vertices)                  |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`setWeights<api_Mesh_setWeights>` (const Vector4Vector & weights)                     |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                        int | :ref:`subMeshCount<api_Mesh_subMeshCount>` () const                                        |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Vector3Vector<api_Vector3Vector>` & | :ref:`tangents<api_Mesh_tangents>` ()                                                      |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Vector2Vector<api_Vector2Vector>` & | :ref:`uv0<api_Mesh_uv0>` ()                                                                |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Vector2Vector<api_Vector2Vector>` & | :ref:`uv1<api_Mesh_uv1>` ()                                                                |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Vector3Vector<api_Vector3Vector>` & | :ref:`vertices<api_Mesh_vertices>` ()                                                      |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Vector4Vector<api_Vector4Vector>` & | :ref:`weights<api_Mesh_weights>` ()                                                        |
+--------------------------------------------+--------------------------------------------------------------------------------------------+



.. _api_Mesh_static:

Static Methods
--------------

None

.. _api_Mesh_methods:

Methods Description
-------------------

.. _api_Mesh_batchMesh:

 void **Mesh::batchMesh** (:ref:`Mesh<api_Mesh>` & *mesh*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Merges current with provided *mesh*. In the case of the *transform*, the matrix is not nullptr it will be applied to *mesh* before merging.

----

.. _api_Mesh_bones:

 :ref:`Vector4Vector<api_Vector4Vector>` & **Mesh::bones** ()

Returns an array of bones for vertices for the particular Lod.

**See also** setBones().

----

.. _api_Mesh_bound:

 :ref:`AABBox<api_AABBox>`  **Mesh::bound** () const

Returns bounding box for the Mesh.

**See also** setBound().

----

.. _api_Mesh_clear:

 void **Mesh::clear** ()

Removes all mesh data.

----

.. _api_Mesh_colors:

 :ref:`Vector4Vector<api_Vector4Vector>` & **Mesh::colors** ()

Returns an array of colors for vertices for the particular Mesh.

**See also** setColors().

----

.. _api_Mesh_defaultMaterial:

 :ref:`Material<api_Material>` * **Mesh::defaultMaterial** (int  *sub* = 0) const

Returns a default material for the *sub* mesh.

**See also** setDefaultMaterial().

----

.. _api_Mesh_indexCount:

 int **Mesh::indexCount** (int  *sub*) const

Returns index count for the *sub* mesh.

----

.. _api_Mesh_indexStart:

 int **Mesh::indexStart** (int  *sub*) const

Returns starting point index for the *sub* mesh.

----

.. _api_Mesh_indices:

 :ref:`IndexVector<api_IndexVector>` & **Mesh::indices** ()

Returns an array of mesh indices for the particular Mesh.

**See also** setIndices().

----

.. _api_Mesh_isDynamic:

 bool **Mesh::isDynamic** () const

Returns true in case of mesh can by changed at the runtime; otherwise returns false.

----

.. _api_Mesh_isEmpty:

 bool **Mesh::isEmpty** () const

Returns false if mesh structure is empty; otherwise returns true.

----

.. _api_Mesh_makeDynamic:

 void **Mesh::makeDynamic** ()

Marks mesh as dynamic that means it's can be changed at the runtime.

----

.. _api_Mesh_normals:

 :ref:`Vector3Vector<api_Vector3Vector>` & **Mesh::normals** ()

Returns an array of mesh normals for the particular Lod.

**See also** setNormals().

----

.. _api_Mesh_recalcBounds:

 void **Mesh::recalcBounds** ()

Generates bound box according new geometry.

----

.. _api_Mesh_recalcNormals:

 void **Mesh::recalcNormals** ()

Recalculates the normals of the Mesh from the triangles and vertices.

----

.. _api_Mesh_setBones:

 void **Mesh::setBones** (:ref:`Vector4Vector<api_Vector4Vector>` & *bones*)

Sets an array of *bones* for vertices for the particular Lod.

**See also** *bones*().

----

.. _api_Mesh_setBound:

 void **Mesh::setBound** (:ref:`AABBox<api_AABBox>` & *box*)

Sets new bounding *box* for the Mesh.

**See also** bound().

----

.. _api_Mesh_setColors:

 void **Mesh::setColors** (:ref:`Vector4Vector<api_Vector4Vector>` & *colors*)

Sets an array of *colors* for vertices for the particular Mesh.

**See also** *colors*().

----

.. _api_Mesh_setDefaultMaterial:

 void **Mesh::setDefaultMaterial** (:ref:`Material<api_Material>` * *material*, int  *sub* = 0)

Sets a default *material* for the *sub* mesh.

**See also** defaultMaterial().

----

.. _api_Mesh_setIndices:

 void **Mesh::setIndices** (:ref:`IndexVector<api_IndexVector>` & *indices*)

Sets an array of mesh *indices* for the particular Mesh.

**See also** *indices*().

----

.. _api_Mesh_setNormals:

 void **Mesh::setNormals** (:ref:`Vector3Vector<api_Vector3Vector>` & *normals*)

Sets an array of mesh *normals* for the particular Lod.

**See also** *normals*().

----

.. _api_Mesh_setSubMesh:

 void **Mesh::setSubMesh** (int  *offset*, int  *sub*)

Sets a base vertex *offset* for the *sub* mesh.

----

.. _api_Mesh_setTangents:

 void **Mesh::setTangents** (:ref:`Vector3Vector<api_Vector3Vector>` & *tangents*)

Sets an array of mesh *tangents* for the particular Lod.

**See also** *tangents*().

----

.. _api_Mesh_setUv0:

 void **Mesh::setUv0** (:ref:`Vector2Vector<api_Vector2Vector>` & *uv0*)

Sets an array of mesh *uv0* (base) texture coordinates for the particular Lod.

**See also** *uv0*().

----

.. _api_Mesh_setUv1:

 void **Mesh::setUv1** (:ref:`Vector2Vector<api_Vector2Vector>` & *uv1*)

Sets an array of mesh *uv1* texture coordinates for the particular Lod.

**See also** *uv1*().

----

.. _api_Mesh_setVertices:

 void **Mesh::setVertices** (:ref:`Vector3Vector<api_Vector3Vector>` & *vertices*)

Sets an array of mesh *vertices* for the particular Lod.

**See also** *vertices*().

----

.. _api_Mesh_setWeights:

 void **Mesh::setWeights** (:ref:`Vector4Vector<api_Vector4Vector>` & *weights*)

Sets an array of bone *weights* for the particular Lod.

**See also** *weights*().

----

.. _api_Mesh_subMeshCount:

 int **Mesh::subMeshCount** () const

Returns the number of sub-meshes inside the Mesh.

----

.. _api_Mesh_tangents:

 :ref:`Vector3Vector<api_Vector3Vector>` & **Mesh::tangents** ()

Returns an array of mesh tangents for the particular Lod.

**See also** setTangents().

----

.. _api_Mesh_uv0:

 :ref:`Vector2Vector<api_Vector2Vector>` & **Mesh::uv0** ()

Returns an array of mesh uv0 (base) texture coordinates for the particular Lod.

**See also** setUv0().

----

.. _api_Mesh_uv1:

 :ref:`Vector2Vector<api_Vector2Vector>` & **Mesh::uv1** ()

Returns an array of mesh uv1 texture coordinates for the particular Lod.

**See also** setUv1().

----

.. _api_Mesh_vertices:

 :ref:`Vector3Vector<api_Vector3Vector>` & **Mesh::vertices** ()

Returns an array of mesh vertices for the particular Lod.

**See also** setVertices().

----

.. _api_Mesh_weights:

 :ref:`Vector4Vector<api_Vector4Vector>` & **Mesh::weights** ()

Returns an array of bone weights for the particular Mesh.

**See also** setWeights().


