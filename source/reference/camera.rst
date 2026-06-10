.. _api_Camera:

Camera
======

Inherited: None

.. _api_Camera_description:

Description
-----------



.. _api_Camera_public:

Public Methods
--------------

+------------------------------+---------------------------------------------------------------------+
|          :ref:`Ray<api_Ray>` | :ref:`castRay<api_Camera_26cdef80>` (float  x, float  y)            |
+------------------------------+---------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_Camera_20914a8d>` () const                          |
+------------------------------+---------------------------------------------------------------------+
|                        float | :ref:`farPlane<api_Camera_7acb01d6>` () const                       |
+------------------------------+---------------------------------------------------------------------+
|                        float | :ref:`focalDistance<api_Camera_69a0b4cd>` () const                  |
+------------------------------+---------------------------------------------------------------------+
|                        float | :ref:`fov<api_Camera_c90e86fd>` () const                            |
+------------------------------+---------------------------------------------------------------------+
|                         bool | :ref:`isScreenSpace<api_Camera_50a8def2>` () const                  |
+------------------------------+---------------------------------------------------------------------+
|                        float | :ref:`nearPlane<api_Camera_a7159bf6>` () const                      |
+------------------------------+---------------------------------------------------------------------+
|                        float | :ref:`orthoSize<api_Camera_d5f76924>` () const                      |
+------------------------------+---------------------------------------------------------------------+
|                         bool | :ref:`orthographic<api_Camera_6f2e8b34>` () const                   |
+------------------------------+---------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` | :ref:`project<api_Camera_e6238c5a>` (const Vector3 & worldSpace)    |
+------------------------------+---------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`projectionMatrix<api_Camera_f389b517>` () const               |
+------------------------------+---------------------------------------------------------------------+
|                        float | :ref:`ratio<api_Camera_362cd071>` () const                          |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`setColor<api_Camera_8af71540>` (const Vector4  color)         |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`setFar<api_Camera_0b8f356e>` (const float  distance)          |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`setFocalDistance<api_Camera_753f8db6>` (const float  focal)   |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`setFov<api_Camera_a835e640>` (const float  angle)             |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`setNear<api_Camera_9e061d7f>` (const float  distance)         |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`setOrthoSize<api_Camera_6e234afd>` (const float  size)        |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`setOrthographic<api_Camera_93c0f78d>` (const bool  mode)      |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`setRatio<api_Camera_3562978d>` (float  ratio)                 |
+------------------------------+---------------------------------------------------------------------+
|                         void | :ref:`setScreenSpace<api_Camera_61d3a459>` (bool  mode)             |
+------------------------------+---------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` | :ref:`unproject<api_Camera_db1af865>` (const Vector3 & screenSpace) |
+------------------------------+---------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`viewMatrix<api_Camera_e7a53d41>` () const                     |
+------------------------------+---------------------------------------------------------------------+



.. _api_Camera_static:

Static Methods
--------------

+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|           :ref:`Camera<api_Camera>` * | :ref:`current<api_Camera_5c0e28a4>` ()                                                                                                                                         |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| std::array<Vector3, :ref:`8><api_8>>` | :ref:`frustumCorners<api_Camera_48c7316b>` (const Camera & camera)                                                                                                             |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| std::array<Vector3, :ref:`8><api_8>>` | :ref:`frustumCorners<api_Camera_e15cab38>` (bool  ortho, float  sigma, float  ratio, const Vector3 & position, const Quaternion & rotation, float  nearPlane, float  farPlane) |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                  void | :ref:`setCurrent<api_Camera_03cf82a4>` (Camera * current)                                                                                                                      |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_Camera_methods:

Methods Description
-------------------

.. _api_Camera_26cdef80:

 :ref:`Ray<api_Ray>`  **Camera::castRay** (float  *x*, float  *y*)

Returns ray with origin point in camera position and direction to projection plane with *x* and *y* coordinates.

----

.. _api_Camera_20914a8d:

 :ref:`Vector4<api_Vector4>`  **Camera::color** () const

Returns the color with which the screen will be cleared.

**See also** setColor().

----

.. _api_Camera_5c0e28a4:

 :ref:`Camera<api_Camera>` * **Camera::current** ()

Returns current active camera.

**See also** setCurrent().

----

.. _api_Camera_7acb01d6:

 float **Camera::farPlane** () const

Returns a distance to far cut plane.

----

.. _api_Camera_69a0b4cd:

 float **Camera::focalDistance** () const

Returns a focal distance for the camera.

**See also** setFocalDistance().

----

.. _api_Camera_c90e86fd:

 float **Camera::fov** () const

Returns field of view angle for the camera in degrees.

**See also** setFov().

----

.. _api_Camera_48c7316b:

std::array<Vector3, :ref:`8><api_8>>`  **Camera::frustumCorners** (:ref:`Camera<api_Camera>` & *camera*)

Returns frustum corners for the camera.

----

.. _api_Camera_e15cab38:

std::array<Vector3, :ref:`8><api_8>>`  **Camera::frustumCorners** (bool  *ortho*, float  *sigma*, float  *ratio*, :ref:`Vector3<api_Vector3>` & *position*, :ref:`Quaternion<api_Quaternion>` & *rotation*, float  *nearPlane*, float  *farPlane*)

Returns frustum corners with provided parameters. This function accepts a list of parameters: *ortho* is a flag that points orthographic or perspective camera. *sigma* is an angle of frustum or *ortho* size in the case of an orthographic camera. *ratio* is an aspect ratio. *position* of the frustum in world space. *rotation* of frustum in world space. *nearPlane* clipping plane. *farPlane* clipping plane.

----

.. _api_Camera_50a8def2:

 bool **Camera::isScreenSpace** () const

Returns true is this camera in the screen space mode. Typically used for Editor.

----

.. _api_Camera_a7159bf6:

 float **Camera::nearPlane** () const

Returns a distance to near cut plane.

----

.. _api_Camera_d5f76924:

 float **Camera::orthoSize** () const

Returns camera size for orthographic mode.

**See also** setOrthoSize().

----

.. _api_Camera_6f2e8b34:

 bool **Camera::orthographic** () const

Returns true for the orthographic mode; for the perspective mode, returns false.

**See also** setOrthographic().

----

.. _api_Camera_e6238c5a:

 :ref:`Vector3<api_Vector3>`  **Camera::project** (:ref:`Vector3<api_Vector3>` & *worldSpace*)

Transforms position from *worldSpace* into screen space. Returns result of transformation.

----

.. _api_Camera_f389b517:

 :ref:`Matrix4<api_Matrix4>`  **Camera::projectionMatrix** () const

Returns projection matrix for the camera.

----

.. _api_Camera_362cd071:

 float **Camera::ratio** () const

Returns the aspect ratio (width divided by height).

**See also** setRatio().

----

.. _api_Camera_8af71540:

 void **Camera::setColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* with which the screen will be cleared.

**See also** color().

----

.. _api_Camera_03cf82a4:

 void **Camera::setCurrent** (:ref:`Camera<api_Camera>` * *current*)

Sets *current* active camera.

**See also** current().

----

.. _api_Camera_0b8f356e:

 void **Camera::setFar** (float  *distance*)

Sets a *distance* to far cut plane.

----

.. _api_Camera_753f8db6:

 void **Camera::setFocalDistance** (float  *focal*)

Sets a *focal* distance for the camera.

**See also** focalDistance().

----

.. _api_Camera_a835e640:

 void **Camera::setFov** (float  *angle*)

Sets field of view *angle* for the camera in degrees.


**Note:** Applicable only for the perspective mode.


**See also** fov().

----

.. _api_Camera_9e061d7f:

 void **Camera::setNear** (float  *distance*)

Sets a *distance* to near cut plane.

----

.. _api_Camera_6e234afd:

 void **Camera::setOrthoSize** (float  *size*)

Sets camera *size* for orthographic mode.

**See also** orthoSize().

----

.. _api_Camera_93c0f78d:

 void **Camera::setOrthographic** (bool  *mode*)

Sets orthographic mode.

**See also** orthographic().

----

.. _api_Camera_3562978d:

 void **Camera::setRatio** (float  *ratio*)

Sets the aspect *ratio* (width divided by height).

**See also** ratio().

----

.. _api_Camera_61d3a459:

 void **Camera::setScreenSpace** (bool  *mode*)

Sets the screen space *mode* for the camera. Typically used for Editor.

**See also** isScreenSpace().

----

.. _api_Camera_db1af865:

 :ref:`Vector3<api_Vector3>`  **Camera::unproject** (:ref:`Vector3<api_Vector3>` & *screenSpace*)

Transforms position from *screenSpace* into world space. Returns result of transformation.

----

.. _api_Camera_e7a53d41:

 :ref:`Matrix4<api_Matrix4>`  **Camera::viewMatrix** () const

Returns view matrix for the camera.


