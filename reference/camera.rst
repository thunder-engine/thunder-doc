.. _api_Camera:

Camera
======

Inherited: :doc:`Component<api_Component>`

.. _api_Camera_description:

Description
-----------



.. _api_Camera_public:

Public Methods
--------------

+------------------------------+-----------------------------------------------------------------------+
|          :ref:`Ray<api_Ray>` | :ref:`castRay<api_Camera_castRay>` (float  x, float  y)               |
+------------------------------+-----------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_Camera_color>` () const                               |
+------------------------------+-----------------------------------------------------------------------+
|                        float | :ref:`farPlane<api_Camera_farPlane>` () const                         |
+------------------------------+-----------------------------------------------------------------------+
|                        float | :ref:`focal<api_Camera_focal>` () const                               |
+------------------------------+-----------------------------------------------------------------------+
|                        float | :ref:`fov<api_Camera_fov>` () const                                   |
+------------------------------+-----------------------------------------------------------------------+
|                        float | :ref:`nearPlane<api_Camera_nearPlane>` () const                       |
+------------------------------+-----------------------------------------------------------------------+
|                        float | :ref:`orthoSize<api_Camera_orthoSize>` () const                       |
+------------------------------+-----------------------------------------------------------------------+
|                         bool | :ref:`orthographic<api_Camera_orthographic>` () const                 |
+------------------------------+-----------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`projectionMatrix<api_Camera_projectionMatrix>` () const         |
+------------------------------+-----------------------------------------------------------------------+
|                        float | :ref:`ratio<api_Camera_ratio>` () const                               |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setColor<api_Camera_setColor>` (const Vector4  color)           |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setFar<api_Camera_setFar>` (const float  distance)              |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setFocal<api_Camera_setFocal>` (const float  focal)             |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setFov<api_Camera_setFov>` (const float  angle)                 |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setNear<api_Camera_setNear>` (const float  distance)            |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setOrthoSize<api_Camera_setOrthoSize>` (const float  size)      |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setOrthographic<api_Camera_setOrthographic>` (const bool  mode) |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setRatio<api_Camera_setRatio>` (float  ratio)                   |
+------------------------------+-----------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`viewMatrix<api_Camera_viewMatrix>` () const                     |
+------------------------------+-----------------------------------------------------------------------+



.. _api_Camera_static:

Static Methods
--------------

+----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|      :ref:`Camera<api_Camera>` * | :ref:`current<api_Camera_current>` ()                                                                                                                                                |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| array<Vector3, :ref:`8><api_8>>` | :ref:`frustumCorners<api_Camera_frustumCorners>` (const Camera & camera)                                                                                                             |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| array<Vector3, :ref:`8><api_8>>` | :ref:`frustumCorners<api_Camera_frustumCorners>` (bool  ortho, float  sigma, float  ratio, const Vector3 & position, const Quaternion & rotation, float  nearPlane, float  farPlane) |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|      :ref:`Vector3<api_Vector3>` | :ref:`project<api_Camera_project>` (const Vector3 & worldSpace, const Matrix4 & modelView, const Matrix4 & projection)                                                               |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                             void | :ref:`setCurrent<api_Camera_setCurrent>` (Camera * current)                                                                                                                          |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|      :ref:`Vector3<api_Vector3>` | :ref:`unproject<api_Camera_unproject>` (const Vector3 & screenSpace, const Matrix4 & modelView, const Matrix4 & projection)                                                          |
+----------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_Camera_methods:

Methods Description
-------------------

.. _api_Camera_castRay:

 :ref:`Ray<api_Ray>` **Camera::castRay** (float  *x*, float  *y*)

Returns ray with origin point in camera position and direction to projection plane with *x* and *y* coordinates.

----

.. _api_Camera_color:

 :ref:`Vector4<api_Vector4>` **Camera::color** () const

Returns the color with which the screen will be cleared.

**See also** setColor().

----

.. _api_Camera_current:

 :ref:`Camera<api_Camera>`* **Camera::current** ()

Returns current active camera.

**See also** setCurrent().

----

.. _api_Camera_farPlane:

 float **Camera::farPlane** () const

Returns a distance to far cut plane.

----

.. _api_Camera_focal:

 float **Camera::focal** () const

Returns a focal distance for the camera.

**See also** setFocal().

----

.. _api_Camera_fov:

 float **Camera::fov** () const

Returns field of view angle for the camera in degrees.

**See also** setFov().

----

.. _api_Camera_frustumCorners:

array<Vector3, :ref:`8><api_8>>` **Camera::frustumCorners** (:ref:`Camera<api_Camera>` & *camera*)

Returns frustum corners for the *camera*.

----

.. _api_Camera_frustumCorners:

array<Vector3, :ref:`8><api_8>>` **Camera::frustumCorners** (bool  *ortho*, float  *sigma*, float  *ratio*, :ref:`Vector3<api_Vector3>` & *position*, :ref:`Quaternion<api_Quaternion>` & *rotation*, float  *nearPlane*, float  *farPlane*)

Returns frustum corners with provided parameters. This function accepts a list of parameters: *ortho* is a flag that points *ortho*graphic or perspective camera. *sigma* is an angle of frustum or *ortho* size in the case of an *ortho*graphic camera. *ratio* is an aspect *ratio*. *position* of the frustum in world space. *rotation* of frustum in world space. *nearPlane* clipping plane. *farPlane* clipping plane.

----

.. _api_Camera_nearPlane:

 float **Camera::nearPlane** () const

Returns a distance to near cut plane.

----

.. _api_Camera_orthoSize:

 float **Camera::orthoSize** () const

Returns camera size for orthographic mode.

**See also** setOrthoSize().

----

.. _api_Camera_orthographic:

 bool **Camera::orthographic** () const

Returns true for the orthographic mode; for the perspective mode, returns false.

**See also** setOrthographic().

----

.. _api_Camera_project:

 :ref:`Vector3<api_Vector3>` **Camera::project** (:ref:`Vector3<api_Vector3>` & *worldSpace*, :ref:`Matrix4<api_Matrix4>` & *modelView*, :ref:`Matrix4<api_Matrix4>` & *projection*)

Transforms position from *worldSpace* into screen space using *modelView* and *projection* matrices. Returns result of transformation.

----

.. _api_Camera_projectionMatrix:

 :ref:`Matrix4<api_Matrix4>` **Camera::projectionMatrix** () const

Returns projection matrix for the camera.

----

.. _api_Camera_ratio:

 float **Camera::ratio** () const

Returns the aspect ratio (width divided by height).

**See also** setRatio().

----

.. _api_Camera_setColor:

 void **Camera::setColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* with which the screen will be cleared.

**See also** *color*().

----

.. _api_Camera_setCurrent:

 void **Camera::setCurrent** (:ref:`Camera<api_Camera>` * *current*)

Sets *current* active camera.

**See also** *current*().

----

.. _api_Camera_setFar:

 void **Camera::setFar** (float  *distance*)

Sets a *distance* to far cut plane.

----

.. _api_Camera_setFocal:

 void **Camera::setFocal** (float  *focal*)

Sets a *focal* distance for the camera.

**See also** *focal*().

----

.. _api_Camera_setFov:

 void **Camera::setFov** (float  *angle*)

Sets field of view *angle* for the camera in degrees.

**Note:** Applicable only for the perspective mode.

**See also** fov().

----

.. _api_Camera_setNear:

 void **Camera::setNear** (float  *distance*)

Sets a *distance* to near cut plane.

----

.. _api_Camera_setOrthoSize:

 void **Camera::setOrthoSize** (float  *size*)

Sets camera *size* for orthographic mode.

**See also** orthoSize().

----

.. _api_Camera_setOrthographic:

 void **Camera::setOrthographic** (bool  *mode*)

Sets orthographic *mode*.

**See also** orthographic().

----

.. _api_Camera_setRatio:

 void **Camera::setRatio** (float  *ratio*)

Sets the aspect *ratio* (width divided by height).

**See also** *ratio*().

----

.. _api_Camera_unproject:

 :ref:`Vector3<api_Vector3>` **Camera::unproject** (:ref:`Vector3<api_Vector3>` & *screenSpace*, :ref:`Matrix4<api_Matrix4>` & *modelView*, :ref:`Matrix4<api_Matrix4>` & *projection*)

Transforms position from *screenSpace* into world space using *modelView* and *projection* matrices. Returns result of transformation.

----

.. _api_Camera_viewMatrix:

 :ref:`Matrix4<api_Matrix4>` **Camera::viewMatrix** () const

Returns view matrix for the camera.


