.. _api_Plane:
Plane Class
================

Inherited: None

.. _api_Plane_description:
Description
-----------

The Plane class represents a plane in 3D space.

A Plane is a flat, 2D surface that extends infinitely far in 3D space.



.. _api_Plane_public:
Public Methods
--------------

+-------------------------+--------------------------------------------------------------------------------------------+
|                         | :ref:`Plane<api_Plane_Plane>` ()                                                           |
+-------------------------+--------------------------------------------------------------------------------------------+
|                         | :ref:`Plane<api_Plane_Plane>` (const Vector3 & v1, const Vector3 & v2, const Vector3 & v3) |
+-------------------------+--------------------------------------------------------------------------------------------+
| :ref:`areal<api_areal>` | :ref:`sqrDistance<api_Plane_sqrDistance>` (const Vector3 & point) const                    |
+-------------------------+--------------------------------------------------------------------------------------------+

.. _api_Plane_static:
Static Methods
--------------

None

.. _api_Plane_methods:
Methods Description
-------------------

.. _api_Plane_Plane:

**Plane::Plane** ()

Default constructor.

----

.. _api_Plane_Plane:

**Plane::Plane** (:ref:`Vector3<api_Vector3>` & *v1*, :ref:`Vector3<api_Vector3>` & *v2*, :ref:`Vector3<api_Vector3>` & *v3*)

Cunstructs a Plane by three points *v1*, *v2* and *v3*

----

.. _api_Plane_sqrDistance:

:ref:`areal<api_areal>`  **Plane::sqrDistance** (:ref:`Vector3<api_Vector3>` & *point*) const

Calculate a squared distance between *point* and this Plane

----


