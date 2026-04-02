.. _api_Ray:

Ray
===

Inherited: None

.. _api_Ray_description:

Description
-----------

Ray is an infinity line starting from position pos and going to some direction



.. _api_Ray_public:

Public Methods
--------------

+------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                        | :ref:`Ray<api_Ray_1c928d45>` ()                                                                                                     |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                        | :ref:`Ray<api_Ray_4865e92a>` (const Vector3 & position, const Vector3 & direction)                                                  |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`Ray<api_Ray>` | :ref:`diffuse<api_Ray_d01e7839>` (const Vector3 & normal, const Vector3 & point, areal  min, areal  max)                            |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                   bool | :ref:`intersect<api_Ray_7d18652f>` (const AABBox & box, Ray::Hit * hit)                                                             |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                   bool | :ref:`intersect<api_Ray_18a53e46>` (const Plane & plane, Ray::Hit * hit, bool  back = false)                                        |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                   bool | :ref:`intersect<api_Ray_3db250f4>` (const Vector3 & position, areal  radius, Ray::Hit * hit)                                        |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                   bool | :ref:`intersect<api_Ray_bcd58961>` (const Vector3 & v1, const Vector3 & v2, const Vector3 & v3, Ray::Hit * hit, bool  back = false) |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`Ray<api_Ray>` | :ref:`reflect<api_Ray_c607d9b8>` (const Vector3 & normal, const Vector3 & point)                                                    |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`Ray<api_Ray>` | :ref:`refract<api_Ray_7d9f4bc6>` (const Vector3 & normal, const Vector3 & point, areal  ior)                                        |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                   bool | :ref:`operator!=<api_Ray_ec2134fa>` (const Ray & ray) const                                                                         |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`Ray<api_Ray>` & | :ref:`operator=<api_Ray_40f15239>` (const Ray & value)                                                                              |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------+
|                   bool | :ref:`operator==<api_Ray_5eb91d68>` (const Ray & ray) const                                                                         |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------+



.. _api_Ray_static:

Static Methods
--------------

None

.. _api_Ray_methods:

Methods Description
-------------------

.. _api_Ray_1c928d45:

**Ray::Ray** ()

Constructs an identity ray. pos at [0, 0, 0] and dir to [0, 0, 1]

----

.. _api_Ray_4865e92a:

**Ray::Ray** (:ref:`Vector3<api_Vector3>` & *position*, :ref:`Vector3<api_Vector3>` & *direction*)

Constructs a ray with *position* and direction.

----

.. _api_Ray_d01e7839:

 :ref:`Ray<api_Ray>`  **Ray::diffuse** (:ref:`Vector3<api_Vector3>` & *normal*, :ref:`Vector3<api_Vector3>` & *point*, areal  *min*, areal  *max*)

Returns a new Ray object which result of random directed reflection of current ray. Diffuse reflection calculating by *normal* vector of reflection surface and intersection point. With *min* and *max* constraints.

----

.. _api_Ray_7d18652f:

 bool **Ray::intersect** (:ref:`AABBox<api_AABBox>` & *box*, :ref:`Ray::Hit<api_Ray_Hit>` * *hit*)

Returns true if this ray intersects the given Axis Aligned Bounding box; otherwise returns false. Output argument *hit* contain a *hit* data.

----

.. _api_Ray_18a53e46:

 bool **Ray::intersect** (:ref:`Plane<api_Plane>` & *plane*, :ref:`Ray::Hit<api_Ray_Hit>` * *hit*, bool  *back* = false)

Returns true if this ray intersects the given plane; otherwise returns false. Output argument *hit* contain a *hit* data. Argument *back* is a flag to ignore backface culling.

----

.. _api_Ray_3db250f4:

 bool **Ray::intersect** (:ref:`Vector3<api_Vector3>` & *position*, areal  *radius*, :ref:`Ray::Hit<api_Ray_Hit>` * *hit*)

Returns true if this ray intersects the given sphere at *position* and radius; otherwise returns false. Output argument *hit* contain a *hit* data.

----

.. _api_Ray_bcd58961:

 bool **Ray::intersect** (:ref:`Vector3<api_Vector3>` & *v1*, :ref:`Vector3<api_Vector3>` & *v2*, :ref:`Vector3<api_Vector3>` & *v3*, :ref:`Ray::Hit<api_Ray_Hit>` * *hit*, bool  *back* = false)

Returns true if this ray intersects the given triangle between v1, *v2* and *v3* points; otherwise returns false. Output argument *hit* contain a *hit* data. Argument *back* is a flag to use backface culling.

----

.. _api_Ray_c607d9b8:

 :ref:`Ray<api_Ray>`  **Ray::reflect** (:ref:`Vector3<api_Vector3>` & *normal*, :ref:`Vector3<api_Vector3>` & *point*)

Returns a new Ray object which result of reflection of current ray. Reflection calculating by *normal* vector of reflection surface and intersection point.

----

.. _api_Ray_7d9f4bc6:

 :ref:`Ray<api_Ray>`  **Ray::refract** (:ref:`Vector3<api_Vector3>` & *normal*, :ref:`Vector3<api_Vector3>` & *point*, areal  *ior*)

Returns a new Ray object which result of refraction of current ray. Refraction calculating by *normal* vector of reflection surface and intersection *point* with *ior* (Index of Refraction).

----

.. _api_Ray_ec2134fa:

 bool **Ray::operator!=** (:ref:`Ray<api_Ray>` & *ray*) const

Returns true if this *ray* is NOT equal to given ray; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Ray_40f15239:

 :ref:`Ray<api_Ray>` & **Ray::operator=** (:ref:`Ray<api_Ray>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Ray_5eb91d68:

 bool **Ray::operator==** (:ref:`Ray<api_Ray>` & *ray*) const

Returns true if this *ray* is equal to given ray; otherwise returns false. This operator uses an exact floating-point comparison.


