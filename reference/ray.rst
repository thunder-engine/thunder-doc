.. _api_Ray:
Ray Class
================

Inherited: None

.. _api_Ray_description:
Description
-----------

The Ray class represents a ray in 3D space.

Ray is an infinity line starting from position pos and going to some direction



.. _api_Ray_public:
Public Methods
--------------

+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+
|                       | :ref:`Ray<api_Ray_Ray>` ()                                                                                                         |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+
|                       | :ref:`Ray<api_Ray_Ray>` (const Vector3 & position, const Vector3 & direction)                                                      |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+
|   :ref:`Ray<api_Ray>` | :ref:`diffuse<api_Ray_diffuse>` (const Vector3 & normal, const Vector3 & point, areal  min, areal  max)                            |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+
| :ref:`bool<api_bool>` | :ref:`intersect<api_Ray_intersect>` (const Vector3 & position, areal  radius, Vector3 * pt)                                        |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+
| :ref:`bool<api_bool>` | :ref:`intersect<api_Ray_intersect>` (const Plane & plane, Vector3 * pt, bool  back = false)                                        |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+
| :ref:`bool<api_bool>` | :ref:`intersect<api_Ray_intersect>` (const AABBox & box, Vector3 * pt)                                                             |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+
| :ref:`bool<api_bool>` | :ref:`intersect<api_Ray_intersect>` (const Vector3 & v1, const Vector3 & v2, const Vector3 & v3, Vector3 * pt, bool  back = false) |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+
|   :ref:`Ray<api_Ray>` | :ref:`reflect<api_Ray_reflect>` (const Vector3 & normal, const Vector3 & point)                                                    |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+
|   :ref:`Ray<api_Ray>` | :ref:`refract<api_Ray_refract>` (const Vector3 & normal, const Vector3 & point, areal  ior)                                        |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+
| :ref:`bool<api_bool>` | :ref:`operator!=<api_Ray_operator!=>` (const Ray & ray) const                                                                      |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+
| :ref:`bool<api_bool>` | :ref:`operator==<api_Ray_operator==>` (const Ray & ray) const                                                                      |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------+



.. _api_Ray_static:
Static Methods
--------------

None

.. _api_Ray_methods:
Methods Description
-------------------

.. _api_Ray_Ray:

**Ray::Ray** ()

Constructs an identity ray. pos at [0, 0, 0] and dir to [0, 0, 1]

----

.. _api_Ray_Ray:

**Ray::Ray** (:ref:`Vector3<api_Vector3>` & *position*, :ref:`Vector3<api_Vector3>` & *direction*)

Constructs a ray with *position* and *direction*.

----

.. _api_Ray_diffuse:

:ref:`Ray<api_Ray>`  **Ray::diffuse** (:ref:`Vector3<api_Vector3>` & *normal*, :ref:`Vector3<api_Vector3>` & *point*, :ref:`areal<api_areal>`  *min*, :ref:`areal<api_areal>`  *max*)

Returns a new Ray object which result of random directed reflection of current ray. Diffuse reflection calculating by *normal* vector of reflection surface and intersection *point*. With *min* and *max* constraints.

----

.. _api_Ray_intersect:

:ref:`bool<api_bool>`  **Ray::intersect** (:ref:`Vector3<api_Vector3>` & *position*, :ref:`areal<api_areal>`  *radius*, :ref:`Vector3<api_Vector3>` * *pt*)

Returns true if this ray intersects the given sphere at *position* and *radius*; otherwise returns false. Output argument *pt* contain a closest point of intersection.

----

.. _api_Ray_intersect:

:ref:`bool<api_bool>`  **Ray::intersect** (:ref:`Plane<api_Plane>` & *plane*, :ref:`Vector3<api_Vector3>` * *pt*, :ref:`bool<api_bool>`  *back* = false)

Returns true if this ray intersects the given *plane*; otherwise returns false. Output argument *pt* contain a point of intersection. Argument *back* is a flag to ignore *back*face culling.

----

.. _api_Ray_intersect:

:ref:`bool<api_bool>`  **Ray::intersect** (:ref:`AABBox<api_AABBox>` & *box*, :ref:`Vector3<api_Vector3>` * *pt*)

Returns true if this ray intersects the given Axis Aligned Bounding *box*; otherwise returns false. Output argument *pt* contain a point of intersection.

----

.. _api_Ray_intersect:

:ref:`bool<api_bool>`  **Ray::intersect** (:ref:`Vector3<api_Vector3>` & *v1*, :ref:`Vector3<api_Vector3>` & *v2*, :ref:`Vector3<api_Vector3>` & *v3*, :ref:`Vector3<api_Vector3>` * *pt*, :ref:`bool<api_bool>`  *back* = false)

Returns true if this ray intersects the given triangle between *v1*, *v2* and *v3* points; otherwise returns false. Output argument *pt* contain a point of intersection. Argument *back* is a flag to use *back*face culling.

----

.. _api_Ray_reflect:

:ref:`Ray<api_Ray>`  **Ray::reflect** (:ref:`Vector3<api_Vector3>` & *normal*, :ref:`Vector3<api_Vector3>` & *point*)

Returns a new Ray object which result of reflection of current ray. Reflection calculating by *normal* vector of reflection surface and intersection *point*.

----

.. _api_Ray_refract:

:ref:`Ray<api_Ray>`  **Ray::refract** (:ref:`Vector3<api_Vector3>` & *normal*, :ref:`Vector3<api_Vector3>` & *point*, :ref:`areal<api_areal>`  *ior*)

Returns a new Ray object which result of refraction of current ray. Refraction calculating by *normal* vector of reflection surface and intersection *point* with *ior* (Index of Refraction).

----

.. _api_Ray_operator!=:

:ref:`bool<api_bool>`  **Ray::operator!=** (:ref:`Ray<api_Ray>` & *ray*) const

Returns true if this *ray* is NOT equal to given *ray*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Ray_operator==:

:ref:`bool<api_bool>`  **Ray::operator==** (:ref:`Ray<api_Ray>` & *ray*) const

Returns true if this *ray* is equal to given *ray*; otherwise returns false. This operator uses an exact floating-point comparison.

----


