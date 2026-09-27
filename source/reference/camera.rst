.. _api_Camera:

Camera
======

Inherited: :ref:`Component<api_Component>`

.. _api_Camera_description:

Description
-----------



.. _api_Camera_public:

Public Methods
--------------

+------------------------------+---------------------------------------------------------------------------+
|          :ref:`Ray<api_Ray>` | :ref:`castRay<api_Camera_b6517ca0>` (float  x, float  y)                  |
+------------------------------+---------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_Camera_60b37981>` () const                                |
+------------------------------+---------------------------------------------------------------------------+
|                        float | :ref:`farPlane<api_Camera_d295ea73>` () const                             |
+------------------------------+---------------------------------------------------------------------------+
|                        float | :ref:`focalDistance<api_Camera_492f6ce1>` () const                        |
+------------------------------+---------------------------------------------------------------------------+
|                        float | :ref:`fov<api_Camera_4f76b15c>` () const                                  |
+------------------------------+---------------------------------------------------------------------------+
|  :ref:`Frustum<api_Frustum>` | :ref:`frustum<api_Camera_eb5c7183>` () const                              |
+------------------------------+---------------------------------------------------------------------------+
|                         bool | :ref:`isScreenSpace<api_Camera_c678ed51>` () const                        |
+------------------------------+---------------------------------------------------------------------------+
|                        float | :ref:`nearPlane<api_Camera_1cf53deb>` () const                            |
+------------------------------+---------------------------------------------------------------------------+
|                        float | :ref:`orthoSize<api_Camera_68cfeba2>` () const                            |
+------------------------------+---------------------------------------------------------------------------+
|                         bool | :ref:`orthographic<api_Camera_9ef6dc52>` () const                         |
+------------------------------+---------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` | :ref:`project<api_Camera_1fe49068>` (const Vector3 & worldSpace) const    |
+------------------------------+---------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`projectionMatrix<api_Camera_3ca5fe86>` () const                     |
+------------------------------+---------------------------------------------------------------------------+
|                        float | :ref:`ratio<api_Camera_e87c9d14>` () const                                |
+------------------------------+---------------------------------------------------------------------------+
|                         void | :ref:`setColor<api_Camera_1bf0a753>` (const Vector4  color)               |
+------------------------------+---------------------------------------------------------------------------+
|                         void | :ref:`setFar<api_Camera_be49560a>` (const float  distance)                |
+------------------------------+---------------------------------------------------------------------------+
|                         void | :ref:`setFocalDistance<api_Camera_ea6095db>` (const float  focal)         |
+------------------------------+---------------------------------------------------------------------------+
|                         void | :ref:`setFov<api_Camera_a17c243e>` (const float  angle)                   |
+------------------------------+---------------------------------------------------------------------------+
|                         void | :ref:`setNear<api_Camera_8a3f67d0>` (const float  distance)               |
+------------------------------+---------------------------------------------------------------------------+
|                         void | :ref:`setOrthoSize<api_Camera_d6753198>` (const float  size)              |
+------------------------------+---------------------------------------------------------------------------+
|                         void | :ref:`setOrthographic<api_Camera_63bf2c9e>` (const bool  mode)            |
+------------------------------+---------------------------------------------------------------------------+
|                         void | :ref:`setRatio<api_Camera_93fcb45a>` (float  ratio)                       |
+------------------------------+---------------------------------------------------------------------------+
|                         void | :ref:`setScreenSpace<api_Camera_9bed6a41>` (bool  mode)                   |
+------------------------------+---------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` | :ref:`unproject<api_Camera_a7542c83>` (const Vector3 & screenSpace) const |
+------------------------------+---------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`viewMatrix<api_Camera_10e56d4b>` () const                           |
+------------------------------+---------------------------------------------------------------------------+



.. _api_Camera_static:

Static Methods
--------------

+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|           :ref:`Camera<api_Camera>` * | :ref:`current<api_Camera_c903dafb>` ()                                                                                                                                         |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| std::array<Vector3, :ref:`8><api_8>>` | :ref:`frustumCorners<api_Camera_257018fc>` (const Camera & camera)                                                                                                             |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| std::array<Vector3, :ref:`8><api_8>>` | :ref:`frustumCorners<api_Camera_b20d93e8>` (bool  ortho, float  sigma, float  ratio, const Vector3 & position, const Quaternion & rotation, float  nearPlane, float  farPlane) |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                  void | :ref:`setCurrent<api_Camera_76fa51b0>` (Camera * current)                                                                                                                      |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_Camera_methods:

Methods Description
-------------------

.. _api_Camera_b6517ca0:

 :ref:`Ray<api_Ray>`  **Camera::castRay** (float  *x*, float  *y*)

Returns ray with origin point in camera position and direction to projection plane with *x* and *y* coordinates.

----

.. _api_Camera_60b37981:

 :ref:`Vector4<api_Vector4>`  **Camera::color** () const

Returns the color with which the screen will be cleared.

**See also** setColor().

----

.. _api_Camera_c903dafb:

 :ref:`Camera<api_Camera>` * **Camera::current** ()

Returns current active camera.

**See also** setCurrent().

----

.. _api_Camera_d295ea73:

 float **Camera::farPlane** () const

Returns a distance to far cut plane.

----

.. _api_Camera_492f6ce1:

 float **Camera::focalDistance** () const

Returns a focal distance for the camera.

**See also** setFocalDistance().

----

.. _api_Camera_4f76b15c:

 float **Camera::fov** () const

Returns field of view angle for the camera in degrees.

**See also** setFov().

----

.. _api_Camera_eb5c7183:

 :ref:`Frustum<api_Frustum>`  **Camera::frustum** () const

Returns a set of frustum planes.

----

.. _api_Camera_257018fc:

std::array<Vector3, :ref:`8><api_8>>`  **Camera::frustumCorners** (:ref:`Camera<api_Camera>` & *camera*)

Returns frustum corners for the camera.

----

.. _api_Camera_b20d93e8:

std::array<Vector3, :ref:`8><api_8>>`  **Camera::frustumCorners** (bool  *ortho*, float  *sigma*, float  *ratio*, :ref:`Vector3<api_Vector3>` & *position*, :ref:`Quaternion<api_Quaternion>` & *rotation*, float  *nearPlane*, float  *farPlane*)

Returns frustum corners with provided parameters. This function accepts a list of parameters: *ortho* is a flag that points orthographic or perspective camera. *sigma* is an angle of frustum or *ortho* size in the case of an orthographic camera. *ratio* is an aspect ratio. *position* of the frustum in world space. *rotation* of frustum in world space. *nearPlane* clipping plane. *farPlane* clipping plane.

----

.. _api_Camera_c678ed51:

 bool **Camera::isScreenSpace** () const

Returns true is this camera in the screen space mode. Typically used for Editor.

----

.. _api_Camera_1cf53deb:

 float **Camera::nearPlane** () const

Returns a distance to near cut plane.

----

.. _api_Camera_68cfeba2:

 float **Camera::orthoSize** () const

Returns camera size for orthographic mode.

**See also** setOrthoSize().

----

.. _api_Camera_9ef6dc52:

 bool **Camera::orthographic** () const

Returns true for the orthographic mode; for the perspective mode, returns false.

**See also** setOrthographic().

----

.. _api_Camera_1fe49068:

 :ref:`Vector3<api_Vector3>`  **Camera::project** (:ref:`Vector3<api_Vector3>` & *worldSpace*) const

Transforms position from *worldSpace* into screen space. Returns result of transformation.

----

.. _api_Camera_3ca5fe86:

 :ref:`Matrix4<api_Matrix4>`  **Camera::projectionMatrix** () const

Returns projection matrix for the camera.

----

.. _api_Camera_e87c9d14:

 float **Camera::ratio** () const

Returns the aspect ratio (width divided by height).

**See also** setRatio().

----

.. _api_Camera_1bf0a753:

 void **Camera::setColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* with which the screen will be cleared.

**See also** color().

----

.. _api_Camera_76fa51b0:

 void **Camera::setCurrent** (:ref:`Camera<api_Camera>` * *current*)

Sets *current* active camera.

**See also** current().

----

.. _api_Camera_be49560a:

 void **Camera::setFar** (float  *distance*)

Sets a *distance* to far cut plane.

----

.. _api_Camera_ea6095db:

 void **Camera::setFocalDistance** (float  *focal*)

Sets a *focal* distance for the camera.

**See also** focalDistance().

----

.. _api_Camera_a17c243e:

 void **Camera::setFov** (float  *angle*)

Sets field of view *angle* for the camera in degrees.


**Note:** Applicable only for the perspective mode.


**See also** fov().

----

.. _api_Camera_8a3f67d0:

 void **Camera::setNear** (float  *distance*)

Sets a *distance* to near cut plane.

----

.. _api_Camera_d6753198:

 void **Camera::setOrthoSize** (float  *size*)

Sets camera *size* for orthographic mode.

**See also** orthoSize().

----

.. _api_Camera_63bf2c9e:

 void **Camera::setOrthographic** (bool  *mode*)

Sets orthographic mode.

**See also** orthographic().

----

.. _api_Camera_93fcb45a:

 void **Camera::setRatio** (float  *ratio*)

Sets the aspect *ratio* (width divided by height).

**See also** ratio().

----

.. _api_Camera_9bed6a41:

 void **Camera::setScreenSpace** (bool  *mode*)

Sets the screen space *mode* for the camera. Typically used for Editor.

**See also** isScreenSpace().

----

.. _api_Camera_a7542c83:

 :ref:`Vector3<api_Vector3>`  **Camera::unproject** (:ref:`Vector3<api_Vector3>` & *screenSpace*) const

Transforms position from *screenSpace* into world space. Returns result of transformation.

----

.. _api_Camera_10e56d4b:

 :ref:`Matrix4<api_Matrix4>`  **Camera::viewMatrix** () const

Returns view matrix for the camera.


