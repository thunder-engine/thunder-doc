.. _api_Plane:

Plane
=====

Inherited: None

.. _api_Plane_description:

Description
-----------

A Plane is a flat, 2D surface that extends infinitely far in 3D space.



.. _api_Plane_public:

Public Methods
--------------

+----------------------------+-----------------------------------------------------------------------------------------------+
|                            | :ref:`Plane<api_Plane_b4dec165>` ()                                                           |
+----------------------------+-----------------------------------------------------------------------------------------------+
|                            | :ref:`Plane<api_Plane_5a0e167d>` (const Vector3 & v1, const Vector3 & v2, const Vector3 & v3) |
+----------------------------+-----------------------------------------------------------------------------------------------+
|  :ref:`Plane<api_Plane>` & | :ref:`operator=<api_Plane_cab456fe>` (const Plane & value)                                    |
+----------------------------+-----------------------------------------------------------------------------------------------+



.. _api_Plane_static:

Static Methods
--------------

None

.. _api_Plane_methods:

Methods Description
-------------------

.. _api_Plane_b4dec165:

**Plane::Plane** ()

Default constructor.

----

.. _api_Plane_5a0e167d:

**Plane::Plane** (:ref:`Vector3<api_Vector3>` & *v1*, :ref:`Vector3<api_Vector3>` & *v2*, :ref:`Vector3<api_Vector3>` & *v3*)

Cunstructs a Plane by three points v1, *v2* and v3

----

.. _api_Plane_cab456fe:

 :ref:`Plane<api_Plane>` & **Plane::operator=** (:ref:`Plane<api_Plane>` & *value*)

Assignment operator. The *value* will be assigned to this object.


