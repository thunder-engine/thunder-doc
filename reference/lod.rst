.. _api_Lod:
Lod Class
================

Inherited: None

.. _api_Lod_description:
Description
-----------

This class contains all necessary data of Level Of Detail for the Mesh.



.. _api_Lod_public:
Public Methods
--------------

+-------------------------------------------+--------------------------------------------------------------------------+
|                                           | :ref:`Lod<api_Lod_Lod>` ()                                               |
+-------------------------------------------+--------------------------------------------------------------------------+
| :ref:`Vector4Vector<api_Vector4Vector>` & | :ref:`bones<api_Lod_bones>` ()                                           |
+-------------------------------------------+--------------------------------------------------------------------------+
| :ref:`Vector4Vector<api_Vector4Vector>` & | :ref:`colors<api_Lod_colors>` ()                                         |
+-------------------------------------------+--------------------------------------------------------------------------+
|     :ref:`IndexVector<api_IndexVector>` & | :ref:`indices<api_Lod_indices>` ()                                       |
+-------------------------------------------+--------------------------------------------------------------------------+
|           :ref:`Material<api_Material>` * | :ref:`material<api_Lod_material>` () const                               |
+-------------------------------------------+--------------------------------------------------------------------------+
| :ref:`Vector3Vector<api_Vector3Vector>` & | :ref:`normals<api_Lod_normals>` ()                                       |
+-------------------------------------------+--------------------------------------------------------------------------+
|                     :ref:`void<api_void>` | :ref:`setBones<api_Lod_setBones>` (const Vector4Vector & bones)          |
+-------------------------------------------+--------------------------------------------------------------------------+
|                     :ref:`void<api_void>` | :ref:`setColors<api_Lod_setColors>` (const Vector4Vector & colors)       |
+-------------------------------------------+--------------------------------------------------------------------------+
|                     :ref:`void<api_void>` | :ref:`setIndices<api_Lod_setIndices>` (const IndexVector & indices)      |
+-------------------------------------------+--------------------------------------------------------------------------+
|                     :ref:`void<api_void>` | :ref:`setMaterial<api_Lod_setMaterial>` (Material * material)            |
+-------------------------------------------+--------------------------------------------------------------------------+
|                     :ref:`void<api_void>` | :ref:`setNormals<api_Lod_setNormals>` (const Vector3Vector & normals)    |
+-------------------------------------------+--------------------------------------------------------------------------+
|                     :ref:`void<api_void>` | :ref:`setTangents<api_Lod_setTangents>` (const Vector3Vector & tangents) |
+-------------------------------------------+--------------------------------------------------------------------------+
|                     :ref:`void<api_void>` | :ref:`setUv0<api_Lod_setUv0>` (const Vector2Vector & uv0)                |
+-------------------------------------------+--------------------------------------------------------------------------+
|                     :ref:`void<api_void>` | :ref:`setUv1<api_Lod_setUv1>` (const Vector2Vector & uv1)                |
+-------------------------------------------+--------------------------------------------------------------------------+
|                     :ref:`void<api_void>` | :ref:`setVertices<api_Lod_setVertices>` (const Vector3Vector & vertices) |
+-------------------------------------------+--------------------------------------------------------------------------+
|                     :ref:`void<api_void>` | :ref:`setWeights<api_Lod_setWeights>` (const Vector4Vector & weights)    |
+-------------------------------------------+--------------------------------------------------------------------------+
| :ref:`Vector3Vector<api_Vector3Vector>` & | :ref:`tangents<api_Lod_tangents>` ()                                     |
+-------------------------------------------+--------------------------------------------------------------------------+
| :ref:`Vector2Vector<api_Vector2Vector>` & | :ref:`uv0<api_Lod_uv0>` ()                                               |
+-------------------------------------------+--------------------------------------------------------------------------+
| :ref:`Vector2Vector<api_Vector2Vector>` & | :ref:`uv1<api_Lod_uv1>` ()                                               |
+-------------------------------------------+--------------------------------------------------------------------------+
| :ref:`Vector3Vector<api_Vector3Vector>` & | :ref:`vertices<api_Lod_vertices>` ()                                     |
+-------------------------------------------+--------------------------------------------------------------------------+
| :ref:`Vector4Vector<api_Vector4Vector>` & | :ref:`weights<api_Lod_weights>` ()                                       |
+-------------------------------------------+--------------------------------------------------------------------------+
|                     :ref:`bool<api_bool>` | :ref:`operator==<api_Lod_operator==>` (const Lod & right) const          |
+-------------------------------------------+--------------------------------------------------------------------------+



.. _api_Lod_static:
Static Methods
--------------

+-------------------------------------------------------------------+------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_Lod_methods>` ()       |
+-------------------------------------------------------------------+------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_Lod_properties>` () |
+-------------------------------------------------------------------+------------------------------------------+

.. _api_Lod_methods:
Methods Description
-------------------

.. _api_Lod_Lod:

**Lod::Lod** ()

Default constructs an instance of Lod.

----

.. _api_Lod_bones:

:ref:`Vector4Vector<api_Vector4Vector>` & **Lod::bones** ()

Returns an array of bones for vertices for the particular Lod.

**See also** setBones().

----

.. _api_Lod_colors:

:ref:`Vector4Vector<api_Vector4Vector>` & **Lod::colors** ()

Returns an array of colors for vertices for the particular Lod.

**See also** setColors().

----

.. _api_Lod_indices:

:ref:`IndexVector<api_IndexVector>` & **Lod::indices** ()

Returns an array of mesh indices for the particular Lod.

**See also** setIndices().

----

.. _api_Lod_material:

:ref:`Material<api_Material>` * **Lod::material** () const

Returns a material for the particular Lod.

**See also** setMaterial().

----

.. _api_Lod_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **Lod::methods** ()

----

.. _api_Lod_normals:

:ref:`Vector3Vector<api_Vector3Vector>` & **Lod::normals** ()

Returns an array of mesh normals for the particular Lod.

**See also** setNormals().

----

.. _api_Lod_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **Lod::properties** ()

----

.. _api_Lod_setBones:

:ref:`void<api_void>`  **Lod::setBones** (:ref:`Vector4Vector<api_Vector4Vector>` & *bones*)

Sets an array of *bones* for vertices for the particular Lod.

**See also** *bones*().

----

.. _api_Lod_setColors:

:ref:`void<api_void>`  **Lod::setColors** (:ref:`Vector4Vector<api_Vector4Vector>` & *colors*)

Sets an array of *colors* for vertices for the particular Lod.

**See also** *colors*().

----

.. _api_Lod_setIndices:

:ref:`void<api_void>`  **Lod::setIndices** (:ref:`IndexVector<api_IndexVector>` & *indices*)

Sets an array of mesh *indices* for the particular Lod.

**See also** *indices*().

----

.. _api_Lod_setMaterial:

:ref:`void<api_void>`  **Lod::setMaterial** (:ref:`Material<api_Material>` * *material*)

Sets a *material* for the particular Lod.

**See also** *material*().

----

.. _api_Lod_setNormals:

:ref:`void<api_void>`  **Lod::setNormals** (:ref:`Vector3Vector<api_Vector3Vector>` & *normals*)

Sets an array of mesh *normals* for the particular Lod.

**See also** *normals*().

----

.. _api_Lod_setTangents:

:ref:`void<api_void>`  **Lod::setTangents** (:ref:`Vector3Vector<api_Vector3Vector>` & *tangents*)

Sets an array of mesh *tangents* for the particular Lod.

**See also** *tangents*().

----

.. _api_Lod_setUv0:

:ref:`void<api_void>`  **Lod::setUv0** (:ref:`Vector2Vector<api_Vector2Vector>` & *uv0*)

Sets an array of mesh *uv0* (base) texture coordinates for the particular Lod.

**See also** *uv0*().

----

.. _api_Lod_setUv1:

:ref:`void<api_void>`  **Lod::setUv1** (:ref:`Vector2Vector<api_Vector2Vector>` & *uv1*)

Sets an array of mesh *uv1* texture coordinates for the particular Lod.

**See also** *uv1*().

----

.. _api_Lod_setVertices:

:ref:`void<api_void>`  **Lod::setVertices** (:ref:`Vector3Vector<api_Vector3Vector>` & *vertices*)

Sets an array of mesh *vertices* for the particular Lod.

**See also** *vertices*().

----

.. _api_Lod_setWeights:

:ref:`void<api_void>`  **Lod::setWeights** (:ref:`Vector4Vector<api_Vector4Vector>` & *weights*)

Sets an array of bone *weights* for the particular Lod.

**See also** *weights*().

----

.. _api_Lod_tangents:

:ref:`Vector3Vector<api_Vector3Vector>` & **Lod::tangents** ()

Returns an array of mesh tangents for the particular Lod.

**See also** setTangents().

----

.. _api_Lod_uv0:

:ref:`Vector2Vector<api_Vector2Vector>` & **Lod::uv0** ()

Returns an array of mesh uv0 (base) texture coordinates for the particular Lod.

**See also** setUv0().

----

.. _api_Lod_uv1:

:ref:`Vector2Vector<api_Vector2Vector>` & **Lod::uv1** ()

Returns an array of mesh uv1 texture coordinates for the particular Lod.

**See also** setUv1().

----

.. _api_Lod_vertices:

:ref:`Vector3Vector<api_Vector3Vector>` & **Lod::vertices** ()

Returns an array of mesh vertices for the particular Lod.

**See also** setVertices().

----

.. _api_Lod_weights:

:ref:`Vector4Vector<api_Vector4Vector>` & **Lod::weights** ()

Returns an array of bone weights for the particular Lod.

**See also** setWeights().

----

.. _api_Lod_operator==:

:ref:`bool<api_bool>`  **Lod::operator==** (:ref:`Lod<api_Lod>` & *right*) const

----


