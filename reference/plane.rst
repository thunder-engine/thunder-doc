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
|                            | :ref:`Plane<api_Plane_f5d27a3c>` ()                                                           |
+----------------------------+-----------------------------------------------------------------------------------------------+
|                            | :ref:`Plane<api_Plane_26edb7c9>` (const Vector3 & v1, const Vector3 & v2, const Vector3 & v3) |
+----------------------------+-----------------------------------------------------------------------------------------------+
|  :ref:`Plane<api_Plane>` & | :ref:`operator=<api_Plane_ef16a5b4>` (const Plane & value)                                    |
+----------------------------+-----------------------------------------------------------------------------------------------+



.. _api_Plane_static:

Static Methods
--------------

None

.. _api_Plane_methods:

Methods Description
-------------------

.. _api_Plane_f5d27a3c:

**Plane::Plane** ()

Default constructor.

----

.. _api_Plane_26edb7c9:

**Plane::Plane** (:ref:`Vector3<api_Vector3>` & *v1*, :ref:`Vector3<api_Vector3>` & *v2*, :ref:`Vector3<api_Vector3>` & *v3*)

Cunstructs a Plane by three points v1, *v2* and v3

----

.. _api_Plane_ef16a5b4:

 :ref:`Plane<api_Plane>` & **Plane::operator=** (:ref:`Plane<api_Plane>` & *value*)

Assignment operator. The *value* will be assigned to this object.


