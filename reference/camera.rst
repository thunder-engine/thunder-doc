.. _api_Camera:
Camera Class
================

Inherited: :ref:`Component<api_Component>`

.. _api_Camera_description:
Description
-----------

The Camera represents the player's point of view; how the player sees the world.



.. _api_Camera_public:
Public Methods
--------------

+---------------------------------+-----------------------------------------------------------------------+
|                                 | :ref:`Camera<api_Camera_Camera>` ()                                   |
+---------------------------------+-----------------------------------------------------------------------+
|                                 | :ref:`~Camera<api_Camera_~Camera>` ()                                 |
+---------------------------------+-----------------------------------------------------------------------+
|             :ref:`Ray<api_Ray>` | :ref:`castRay<api_Camera_castRay>` (float  x, float  y)               |
+---------------------------------+-----------------------------------------------------------------------+
|   :ref:`Vector4<api_Vector4>` & | :ref:`color<api_Camera_color>` () const                               |
+---------------------------------+-----------------------------------------------------------------------+
|         :ref:`float<api_float>` | :ref:`farPlane<api_Camera_farPlane>` () const                         |
+---------------------------------+-----------------------------------------------------------------------+
|         :ref:`float<api_float>` | :ref:`focal<api_Camera_focal>` () const                               |
+---------------------------------+-----------------------------------------------------------------------+
|         :ref:`float<api_float>` | :ref:`fov<api_Camera_fov>` () const                                   |
+---------------------------------+-----------------------------------------------------------------------+
|         :ref:`float<api_float>` | :ref:`nearPlane<api_Camera_nearPlane>` () const                       |
+---------------------------------+-----------------------------------------------------------------------+
|         :ref:`float<api_float>` | :ref:`orthoSize<api_Camera_orthoSize>` () const                       |
+---------------------------------+-----------------------------------------------------------------------+
|           :ref:`bool<api_bool>` | :ref:`orthographic<api_Camera_orthographic>` () const                 |
+---------------------------------+-----------------------------------------------------------------------+
| :ref:`Pipeline<api_Pipeline>` * | :ref:`pipeline<api_Camera_pipeline>` ()                               |
+---------------------------------+-----------------------------------------------------------------------+
|     :ref:`Matrix4<api_Matrix4>` | :ref:`projectionMatrix<api_Camera_projectionMatrix>` () const         |
+---------------------------------+-----------------------------------------------------------------------+
|         :ref:`float<api_float>` | :ref:`ratio<api_Camera_ratio>` () const                               |
+---------------------------------+-----------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setColor<api_Camera_setColor>` (const Vector4 & color)          |
+---------------------------------+-----------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setFar<api_Camera_setFar>` (const float  distance)              |
+---------------------------------+-----------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setFocal<api_Camera_setFocal>` (const float  focal)             |
+---------------------------------+-----------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setFov<api_Camera_setFov>` (const float  angle)                 |
+---------------------------------+-----------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setNear<api_Camera_setNear>` (const float  distance)            |
+---------------------------------+-----------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setOrthoSize<api_Camera_setOrthoSize>` (const float  size)      |
+---------------------------------+-----------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setOrthographic<api_Camera_setOrthographic>` (const bool  mode) |
+---------------------------------+-----------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setPipeline<api_Camera_setPipeline>` (Pipeline * pipeline)      |
+---------------------------------+-----------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setRatio<api_Camera_setRatio>` (float  ratio)                   |
+---------------------------------+-----------------------------------------------------------------------+
|     :ref:`Matrix4<api_Matrix4>` | :ref:`viewMatrix<api_Camera_viewMatrix>` () const                     |
+---------------------------------+-----------------------------------------------------------------------+



.. _api_Camera_static:
Static Methods
--------------

+-------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`Camera<api_Camera>` * | :ref:`current<api_Camera_current>` ()                                                                                                                                                |
+-------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                   :ref:`array<Vector3, 8><api_array<Vector3, 8>>` | :ref:`frustumCorners<api_Camera_frustumCorners>` (const Camera & camera)                                                                                                             |
+-------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                   :ref:`array<Vector3, 8><api_array<Vector3, 8>>` | :ref:`frustumCorners<api_Camera_frustumCorners>` (bool  ortho, float  sigma, float  ratio, const Vector3 & position, const Quaternion & rotation, float  nearPlane, float  farPlane) |
+-------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                 :ref:`RenderList<api_RenderList>` | :ref:`frustumCulling<api_Camera_frustumCulling>` (RenderList & list, const  array<Vector3, 8> & frustum = 8)                                                                         |
+-------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_Camera_methods>` ()                                                                                                                                                |
+-------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`Vector3<api_Vector3>` | :ref:`project<api_Camera_project>` (const Vector3 & worldSpace, const Matrix4 & modelView, const Matrix4 & projection)                                                               |
+-------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_Camera_properties>` ()                                                                                                                                          |
+-------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                             :ref:`void<api_void>` | :ref:`setCurrent<api_Camera_setCurrent>` (Camera * current)                                                                                                                          |
+-------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       :ref:`Vector3<api_Vector3>` | :ref:`unproject<api_Camera_unproject>` (const Vector3 & screenSpace, const Matrix4 & modelView, const Matrix4 & projection)                                                          |
+-------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_Camera_methods:
Methods Description
-------------------

.. _api_Camera_Camera:

**Camera::Camera** ()

Default constructs an instance of Camera.

----

.. _api_Camera_~Camera:

**Camera::~Camera** ()

Destroys the instance of Camera. The destructor is virtual.

----

.. _api_Camera_castRay:

:ref:`Ray<api_Ray>`  **Camera::castRay** (:ref:`float<api_float>`  *x*, :ref:`float<api_float>`  *y*)

Returns ray with origin point in camera position and direction to projection plane with *x* and *y* coordinates.

----

.. _api_Camera_color:

:ref:`Vector4<api_Vector4>` & **Camera::color** () const

Returns the color with which the screen will be cleared.

**See also** setColor().

----

.. _api_Camera_current:

:ref:`Camera<api_Camera>` * **Camera::current** ()

Returns current active camera.

**See also** setCurrent().

----

.. _api_Camera_farPlane:

:ref:`float<api_float>`  **Camera::farPlane** () const

Returns a distance to far cut plane.

----

.. _api_Camera_focal:

:ref:`float<api_float>`  **Camera::focal** () const

Returns a focal distance for the camera.

**See also** setFocal().

----

.. _api_Camera_fov:

:ref:`float<api_float>`  **Camera::fov** () const

Returns field of view angle for the camera in degrees.

**See also** setFov().

----

.. _api_Camera_frustumCorners:

:ref:`array<Vector3, 8><api_array<Vector3, 8>>`  **Camera::frustumCorners** (:ref:`Camera<api_Camera>` & *camera*)

Returns frustum corners for the *camera*.

----

.. _api_Camera_frustumCorners:

:ref:`array<Vector3, 8><api_array<Vector3, 8>>`  **Camera::frustumCorners** (:ref:`bool<api_bool>`  *ortho*, :ref:`float<api_float>`  *sigma*, :ref:`float<api_float>`  *ratio*, :ref:`Vector3<api_Vector3>` & *position*, :ref:`Quaternion<api_Quaternion>` & *rotation*, :ref:`float<api_float>`  *nearPlane*, :ref:`float<api_float>`  *farPlane*)

Returns frustum corners with provided parameters.

----

.. _api_Camera_frustumCulling:

:ref:`RenderList<api_RenderList>`  **Camera::frustumCulling** (:ref:`RenderList<api_RenderList>` & *list*, :ref:`const<api_const>`  *array<Vector3*, :ref:`8><api_8>>` & *frustum* = 8)

Filters out an incoming *list* which are not in the *frustum*. Returns filtered *list*.

----

.. _api_Camera_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **Camera::methods** ()

----

.. _api_Camera_nearPlane:

:ref:`float<api_float>`  **Camera::nearPlane** () const

Returns a distance to near cut plane.

----

.. _api_Camera_orthoSize:

:ref:`float<api_float>`  **Camera::orthoSize** () const

Returns camera size for orthographic mode.

**See also** setOrthoSize().

----

.. _api_Camera_orthographic:

:ref:`bool<api_bool>`  **Camera::orthographic** () const

Returns true for the orthographic mode; for the perspective mode, returns false.

**See also** setOrthographic().

----

.. _api_Camera_pipeline:

:ref:`Pipeline<api_Pipeline>` * **Camera::pipeline** ()

Returns render pipline which attached to the camera.

**See also** setPipeline().

----

.. _api_Camera_project:

:ref:`Vector3<api_Vector3>`  **Camera::project** (:ref:`Vector3<api_Vector3>` & *worldSpace*, :ref:`Matrix4<api_Matrix4>` & *modelView*, :ref:`Matrix4<api_Matrix4>` & *projection*)

Transforms position from *worldSpace* into screen space using *modelView* and *projection* matrices. Returns result of transformation.

----

.. _api_Camera_projectionMatrix:

:ref:`Matrix4<api_Matrix4>`  **Camera::projectionMatrix** () const

Returns projection matrix for the camera.

----

.. _api_Camera_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **Camera::properties** ()

----

.. _api_Camera_ratio:

:ref:`float<api_float>`  **Camera::ratio** () const

Returns the aspect ratio (width divided by height).

**See also** setRatio().

----

.. _api_Camera_setColor:

:ref:`void<api_void>`  **Camera::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the *color* with which the screen will be cleared.

**See also** *color*().

----

.. _api_Camera_setCurrent:

:ref:`void<api_void>`  **Camera::setCurrent** (:ref:`Camera<api_Camera>` * *current*)

Sets *current* active camera.

**See also** *current*().

----

.. _api_Camera_setFar:

:ref:`void<api_void>`  **Camera::setFar** (:ref:`float<api_float>`  *distance*)

Sets a *distance* to far cut plane.

----

.. _api_Camera_setFocal:

:ref:`void<api_void>`  **Camera::setFocal** (:ref:`float<api_float>`  *focal*)

Sets a *focal* distance for the camera.

**See also** *focal*().

----

.. _api_Camera_setFov:

:ref:`void<api_void>`  **Camera::setFov** (:ref:`float<api_float>`  *angle*)

Sets field of view *angle* for the camera in degrees.

**Note:** Applicable only for the perspective mode.

**See also** fov().

----

.. _api_Camera_setNear:

:ref:`void<api_void>`  **Camera::setNear** (:ref:`float<api_float>`  *distance*)

Sets a *distance* to near cut plane.

----

.. _api_Camera_setOrthoSize:

:ref:`void<api_void>`  **Camera::setOrthoSize** (:ref:`float<api_float>`  *size*)

Sets camera *size* for orthographic mode.

**See also** orthoSize().

----

.. _api_Camera_setOrthographic:

:ref:`void<api_void>`  **Camera::setOrthographic** (:ref:`bool<api_bool>`  *mode*)

Sets orthographic *mode*.

**See also** orthographic().

----

.. _api_Camera_setPipeline:

:ref:`void<api_void>`  **Camera::setPipeline** (:ref:`Pipeline<api_Pipeline>` * *pipeline*)

Attaches render *pipeline* to the camera.

**See also** *pipeline*().

----

.. _api_Camera_setRatio:

:ref:`void<api_void>`  **Camera::setRatio** (:ref:`float<api_float>`  *ratio*)

Sets the aspect *ratio* (width divided by height).

**See also** *ratio*().

----

.. _api_Camera_unproject:

:ref:`Vector3<api_Vector3>`  **Camera::unproject** (:ref:`Vector3<api_Vector3>` & *screenSpace*, :ref:`Matrix4<api_Matrix4>` & *modelView*, :ref:`Matrix4<api_Matrix4>` & *projection*)

Transforms position from *screenSpace* into world space using *modelView* and *projection* matrices. Returns result of transformation.

----

.. _api_Camera_viewMatrix:

:ref:`Matrix4<api_Matrix4>`  **Camera::viewMatrix** () const

Returns view matrix for the camera.

----


