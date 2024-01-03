.. _api_Gizmos:

Gizmos Class
============

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

+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawArc<api_Gizmos_drawArc>` (const Vector3 & center, float  radius, float  start, float  angle, const Vector4 & color, const Matrix4 & transform = Matrix4())           |
+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawBox<api_Gizmos_drawBox>` (const Vector3 & center, const Vector3 & size, const Vector4 & color, const Matrix4 & transform = Matrix4())                                |
+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawCircle<api_Gizmos_drawCircle>` (const Vector3 & center, float  radius, const Vector4 & color, const Matrix4 & transform = Matrix4())                                 |
+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawIcon<api_Gizmos_drawIcon>` (const Vector3 & center, const Vector2 & size, const std::string & name, const Vector4 & color, const Matrix4 & transform = Matrix4())    |
+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawLines<api_Gizmos_drawLines>` (const Vector3Vector & points, const IndexVector & indices, const Vector4 & color, const Matrix4 & transform = Matrix4())               |
+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawMesh<api_Gizmos_drawMesh>` (Mesh & mesh, const Vector4 & color, const Matrix4 & transform = Matrix4())                                                               |
+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawRectangle<api_Gizmos_drawRectangle>` (const Vector3 & center, const Vector2 & size, const Vector4 & color, const Matrix4 & transform = Matrix4())                    |
+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawSolidArc<api_Gizmos_drawSolidArc>` (const Vector3 & center, float  radius, float  start, float  angle, const Vector4 & color, const Matrix4 & transform = Matrix4()) |
+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawSphere<api_Gizmos_drawSphere>` (const Vector3 & center, float  radius, const Vector4 & color, const Matrix4 & transform = Matrix4())                                 |
+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireBox<api_Gizmos_drawWireBox>` (const Vector3 & center, const Vector3 & size, const Vector4 & color, const Matrix4 & transform = Matrix4())                        |
+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireCapsule<api_Gizmos_drawWireCapsule>` (const Vector3 & center, float  radius, float  height, const Vector4 & color, const Matrix4 & transform = Matrix4())        |
+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireMesh<api_Gizmos_drawWireMesh>` (Mesh & mesh, const Vector4 & color, const Matrix4 & transform = Matrix4())                                                       |
+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`drawWireSphere<api_Gizmos_drawWireSphere>` (const Vector3 & center, float  radius, const Vector4 & color, const Matrix4 & transform = Matrix4())                         |
+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_Gizmos_methods:

Methods Description
-------------------

.. _api_Gizmos_drawArc:

 void **Gizmos::drawArc** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, float  *start*, float  *angle*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a wire arc in the 3D space with the specified *center*, *radius* and *color* in the 3D space. Parameters *start* and *angle* allows to specify *angle*s to draw a sector in degrees. Parameter *transform* can be used to move, rotate and scale this arc.

----

.. _api_Gizmos_drawBox:

 void **Gizmos::drawBox** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector3<api_Vector3>` & *size*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a solid box with specified *center*, *size* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this box.

----

.. _api_Gizmos_drawCircle:

 void **Gizmos::drawCircle** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a wire circle in the 3D space with the specified *center*, *radius* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this circle.

----

.. _api_Gizmos_drawIcon:

 void **Gizmos::drawIcon** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector2<api_Vector2>` & *size*, std::string & *name*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws an billboard icon at the specified *center* with the given *size*, *color*, and *transform*. Parameter *name* will be used to set a texture to render.

----

.. _api_Gizmos_drawLines:

 void **Gizmos::drawLines** (:ref:`Vector3Vector<api_Vector3Vector>` & *points*, :ref:`IndexVector<api_IndexVector>` & *indices*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws lines connecting specified *points* and *color* in 3D space. Parameter *indices* specifies relations between *points*. Parameter *transform* can be used to move, rotate and scale this structure.

----

.. _api_Gizmos_drawMesh:

 void **Gizmos::drawMesh** (:ref:`Mesh<api_Mesh>` & *mesh*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a *mesh* with a specified *color* and *transform*.

----

.. _api_Gizmos_drawRectangle:

 void **Gizmos::drawRectangle** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector2<api_Vector2>` & *size*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a wire rectangle in the 3D space with the specified *center*, *size* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this rectangle.

----

.. _api_Gizmos_drawSolidArc:

 void **Gizmos::drawSolidArc** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, float  *start*, float  *angle*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a solid arc in the 3D space with the specified *center*, *radius* and *color* in the 3D space. Parameters *start* and *angle* allows to specify *angle*s to draw a sector in degrees. Parameter *transform* can be used to move, rotate and scale this arc.

----

.. _api_Gizmos_drawSphere:

 void **Gizmos::drawSphere** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a solid sphere with specified *center*, *radius* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this sphere.

----

.. _api_Gizmos_drawWireBox:

 void **Gizmos::drawWireBox** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector3<api_Vector3>` & *size*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a wire box in the 3D space with the specified *center*, *size* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this box.

----

.. _api_Gizmos_drawWireCapsule:

 void **Gizmos::drawWireCapsule** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, float  *height*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a wire capsule in the 3D space with the specified *center*, *radius*, *height* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this capsule.

----

.. _api_Gizmos_drawWireMesh:

 void **Gizmos::drawWireMesh** (:ref:`Mesh<api_Mesh>` & *mesh*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a wireframe version of the specified *mesh* and *color* in 3D space. Parameter *transform* can be used to move, rotate and scale this *mesh*.

----

.. _api_Gizmos_drawWireSphere:

 void **Gizmos::drawWireSphere** (:ref:`Vector3<api_Vector3>` & *center*, float  *radius*, :ref:`Vector4<api_Vector4>` & *color*, :ref:`Matrix4<api_Matrix4>` & *transform* = Matrix4())

Draws a wire sphere in the 3D space with the specified *center*, *radius* and *color* in the 3D space. Parameter *transform* can be used to move, rotate and scale this sphere.


