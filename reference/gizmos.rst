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
|  void | :ref:`drawArc<api_Gizmos_8237b6ed>` (const Vector3 & center, float  radius, float  start, float  angle, const Vector4 & color, const Matrix4 & transform = Matrix4())       |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawBox<api_Gizmos_ac18e75f>` (const Vector3 & center, const Vector3 & size, const Vector4 & color, const Matrix4 & transform = Matrix4())                            |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawCircle<api_Gizmos_3d6e8b02>` (const Vector3 & center, float  radius, const Vector4 & color, const Matrix4 & transform = Matrix4())                                |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawIcon<api_Gizmos_cb74e18a>` (const Vector3 & center, const Vector2 & size, const std::string & name, const Vector4 & color, const Matrix4 & transform = Matrix4()) |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawLines<api_Gizmos_ae8072f1>` (const Vector3Vector & points, const IndexVector & indices, const Vector4 & color, const Matrix4 & transform = Matrix4())             |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawMesh<api_Gizmos_f5210b7d>` (Mesh & mesh, const Vector4 & color, const Matrix4 & transform = Matrix4())                                                            |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawRectangle<api_Gizmos_94b3a1df>` (const Vector3 & center, const Vector2 & size, const Vector4 & color, const Matrix4 & transform = Matrix4())                      |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawSolidArc<api_Gizmos_b7d0f936>` (const Vector3 & center, float  radius, float  start, float  angle, const Vector4 & color, const Matrix4 & transform = Matrix4())  |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawSphere<api_Gizmos_689e7f4d>` (const Vector3 & center, float  radius, const Vector4 & color, const Matrix4 & transform = Matrix4())                                |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireBox<api_Gizmos_e2fbc97a>` (const Vector3 & center, const Vector3 & size, const Vector4 & color, const Matrix4 & transform = Matrix4())                        |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireCapsule<api_Gizmos_954763ac>` (const Vector3 & center, float  radius, float  height, const Vector4 & color, const Matrix4 & transform = Matrix4())            |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireMesh<api_Gizmos_5968ba0f>` (Mesh & mesh, const Vector4 & color, const Matrix4 & transform = Matrix4())                                                        |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireSphere<api_Gizmos_6c279a81>` (const Vector3 & center, float  radius, const Vector4 & color, const Matrix4 & transform = Matrix4())                            |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_Gizmos_methods:

Methods Description
-------------------

.. _api_Gizmos_8237b6ed:

 void **Gizmos::drawArc** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, float  *start*, float  *angle*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a wire arc in the 3D space with the specified *center*, *radius* and *color* in the 3D space. Parameters *start* and *angle* allows to specify *angle*s to draw a sector in degrees. Parameter *transform* can be used to move, rotate and scale this arc.

----

.. _api_Gizmos_ac18e75f:

 void **Gizmos::drawBox** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector3<api_Vector3>` & *size*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a solid box with specified *center*, *size* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this box.

----

.. _api_Gizmos_3d6e8b02:

 void **Gizmos::drawCircle** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a wire circle in the 3D space with the specified *center*, *radius* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this circle.

----

.. _api_Gizmos_cb74e18a:

 void **Gizmos::drawIcon** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector2<api_Vector2>` & *size*, std::string & *name*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws an billboard icon at the specified *center* with the given *size*, *color*, and *transform*. Parameter *name* will be used to set a texture to render.

----

.. _api_Gizmos_ae8072f1:

 void **Gizmos::drawLines** (:ref:`Vector3Vector<api_Vector3Vector>` & *points*, :ref:`IndexVector<api_IndexVector>` & *indices*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws lines connecting specified *points* and *color* in 3D space. Parameter *indices* specifies relations between *points*. Parameter *transform* can be used to move, rotate and scale this structure.

----

.. _api_Gizmos_f5210b7d:

 void **Gizmos::drawMesh** (:ref:`Mesh<api_Mesh>` & *mesh*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a *mesh* with a specified *color* and *transform*.

----

.. _api_Gizmos_94b3a1df:

 void **Gizmos::drawRectangle** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector2<api_Vector2>` & *size*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a wire rectangle in the 3D space with the specified *center*, *size* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this rectangle.

----

.. _api_Gizmos_b7d0f936:

 void **Gizmos::drawSolidArc** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, float  *start*, float  *angle*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a solid arc in the 3D space with the specified *center*, *radius* and *color* in the 3D space. Parameters *start* and *angle* allows to specify *angle*s to draw a sector in degrees. Parameter *transform* can be used to move, rotate and scale this arc.

----

.. _api_Gizmos_689e7f4d:

 void **Gizmos::drawSphere** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a solid sphere with specified *center*, *radius* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this sphere.

----

.. _api_Gizmos_e2fbc97a:

 void **Gizmos::drawWireBox** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector3<api_Vector3>` & *size*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a wire box in the 3D space with the specified *center*, *size* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this box.

----

.. _api_Gizmos_954763ac:

 void **Gizmos::drawWireCapsule** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, float  *height*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a wire capsule in the 3D space with the specified *center*, *radius*, *height* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this capsule.

----

.. _api_Gizmos_5968ba0f:

 void **Gizmos::drawWireMesh** (:ref:`Mesh<api_Mesh>` & *mesh*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a wireframe version of the specified *mesh* and *color* in 3D space. Parameter *transform* can be used to move, rotate and scale this *mesh*.

----

.. _api_Gizmos_6c279a81:

 void **Gizmos::drawWireSphere** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a wire sphere in the 3D space with the specified *center*, *radius* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this sphere.


