.. _api_Gizmos:

Gizmos
======

Inherited: None

.. _api_Gizmos_description:

Description
-----------


Note: Gizmos can be drawn only in Editor.


The Gizmos class provides a collection of static methods to draw various shapes and primitives for debugging in a 3D space. Users can use these methods to visualize different elements during development and debugging.



.. _api_Gizmos_public:

Public Methods
--------------

None



.. _api_Gizmos_static:

Static Methods
--------------

+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawIcon<api_Gizmos_9b3a85cf>` (const Vector3 & center, const Vector2 & size, const TString & name, const Vector4 & color)                                            |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawLines<api_Gizmos_fb1ca4e3>` (const Vector3Vector & points, const IndexVector & indices, const Vector4 & color, const Matrix4 * transform = nullptr)               |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawSolidBox<api_Gizmos_db8faec7>` (const Vector3 & center, const Vector3 & size, const Vector4 & color, const Matrix4 * transform = nullptr)                         |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawSolidMesh<api_Gizmos_40ab9e6f>` (Mesh & mesh, const Vector4 & color, const Matrix4 * transform = nullptr)                                                         |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawSolidSector<api_Gizmos_8519e4b2>` (const Vector3 & center, float  radius, float  start, float  angle, const Vector4 & color, const Matrix4 * transform = nullptr) |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawSolidSphere<api_Gizmos_b6a1ce84>` (const Vector3 & center, float  radius, const Vector4 & color, const Matrix4 * transform = nullptr)                             |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawSolidTriangles<api_Gizmos_79ef24bd>` (const Vector3Vector & points, const IndexVector & indices, const Vector4 & color, const Matrix4 * transform = nullptr)      |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireArc<api_Gizmos_f732d6ce>` (const Vector3 & center, float  radius, float  start, float  angle, const Vector4 & color, const Matrix4 * transform = nullptr)     |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireBox<api_Gizmos_a3589bf2>` (const Vector3 & center, const Vector3 & size, const Vector4 & color, const Matrix4 * transform = nullptr)                          |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireCapsule<api_Gizmos_2f6d749e>` (const Vector3 & center, float  radius, float  height, const Vector4 & color, const Matrix4 * transform = nullptr)              |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireCircle<api_Gizmos_cd4e16a9>` (const Vector3 & center, float  radius, const Vector4 & color, const Matrix4 * transform = nullptr)                              |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireCylinder<api_Gizmos_19db7fc3>` (const Vector3 & center, float  radius, float  height, const Vector4 & color, const Matrix4 * transform = nullptr)             |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireMesh<api_Gizmos_9ad5480f>` (Mesh & mesh, const Vector4 & color, const Matrix4 * transform = nullptr)                                                          |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireRectangle<api_Gizmos_179e8ad5>` (const Vector3 & center, const Vector2 & size, const Vector4 & color, const Matrix4 * transform = nullptr)                    |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireSphere<api_Gizmos_942fbcae>` (const Vector3 & center, float  radius, const Vector4 & color, const Matrix4 * transform = nullptr)                              |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_Gizmos_methods:

Methods Description
-------------------

.. _api_Gizmos_9b3a85cf:

 void **Gizmos::drawIcon** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector2<api_Vector2>` & *size*, :ref:`TString<api_TString>` & *name*, :ref:`Vector4<api_Vector4>` & *color*)

Draws an billboard icon at the specified *center* with the given size, color. Parameter *name* will be used to set a texture to render.

----

.. _api_Gizmos_fb1ca4e3:

 void **Gizmos::drawLines** (Vector3Vector & *points*, IndexVector & *indices*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Draws lines connecting specified *points* and *color* in 3D space. Parameter *indices* specifies relations between points. Parameter *transform* can be used to move, rotate and scale this structure.

----

.. _api_Gizmos_db8faec7:

 void **Gizmos::drawSolidBox** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector3<api_Vector3>` & *size*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Draws a solid box with specified center, *size* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this box.

----

.. _api_Gizmos_40ab9e6f:

 void **Gizmos::drawSolidMesh** (:ref:`Mesh<api_Mesh>` & *mesh*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Draws a *mesh* with a specified *color* and transform.

----

.. _api_Gizmos_8519e4b2:

 void **Gizmos::drawSolidSector** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, float  *start*, float  *angle*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Draws a solid sector in the 3D space with the specified center, *radius* and *color* in the 3D space. Parameters *start* and *angle* allows to specify angles to draw a sector in degrees. Parameter *transform* can be used to move, rotate and scale this arc.

----

.. _api_Gizmos_b6a1ce84:

 void **Gizmos::drawSolidSphere** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Draws a solid sphere with specified center, *radius* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this sphere.

----

.. _api_Gizmos_79ef24bd:

 void **Gizmos::drawSolidTriangles** (Vector3Vector & *points*, IndexVector & *indices*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Draws solid triangles connecting specified *points* and *color* in 3D space. Parameter *indices* specifies relations between points. Parameter *transform* can be used to move, rotate and scale this structure.

----

.. _api_Gizmos_f732d6ce:

 void **Gizmos::drawWireArc** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, float  *start*, float  *angle*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Draws a wire arc in the 3D space with the specified center, *radius* and *color* in the 3D space. Parameters *start* and *angle* allows to specify angles to draw a sector in degrees. Parameter *transform* can be used to move, rotate and scale this arc.

----

.. _api_Gizmos_a3589bf2:

 void **Gizmos::drawWireBox** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector3<api_Vector3>` & *size*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Draws a wire box in the 3D space with the specified center, *size* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this box.

----

.. _api_Gizmos_2f6d749e:

 void **Gizmos::drawWireCapsule** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, float  *height*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Draws a wire capsule in the 3D space with the specified center, radius, *height* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this capsule.

----

.. _api_Gizmos_cd4e16a9:

 void **Gizmos::drawWireCircle** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Draws a wire circle in the 3D space with the specified center, *radius* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this circle.

----

.. _api_Gizmos_19db7fc3:

 void **Gizmos::drawWireCylinder** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, float  *height*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Draws a wire cylinder in the 3D space with the specified center, radius, *height* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this cylinder.

----

.. _api_Gizmos_9ad5480f:

 void **Gizmos::drawWireMesh** (:ref:`Mesh<api_Mesh>` & *mesh*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Draws a wireframe version of the specified *mesh* and *color* in 3D space. Parameter *transform* can be used to move, rotate and scale this mesh.

----

.. _api_Gizmos_179e8ad5:

 void **Gizmos::drawWireRectangle** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector2<api_Vector2>` & *size*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Draws a wire rectangle in the 3D space with the specified center, *size* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this rectangle.

----

.. _api_Gizmos_942fbcae:

 void **Gizmos::drawWireSphere** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` * *transform* = nullptr)

Draws a wire sphere in the 3D space with the specified center, *radius* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this sphere.


