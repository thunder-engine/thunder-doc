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
|                            | :ref:`Plane<api_Plane_65af9c28>` ()                                                           |
+----------------------------+-----------------------------------------------------------------------------------------------+
|                            | :ref:`Plane<api_Plane_40d61b83>` (const Vector3 & v1, const Vector3 & v2, const Vector3 & v3) |
+----------------------------+-----------------------------------------------------------------------------------------------+
|  :ref:`Plane<api_Plane>` & | :ref:`operator=<api_Plane_d79a3c2e>` (const Plane & value)                                    |
+----------------------------+-----------------------------------------------------------------------------------------------+



.. _api_Plane_static:

Static Methods
--------------

None

.. _api_Plane_methods:

Methods Description
-------------------

.. _api_Plane_65af9c28:

**Plane::Plane** ()

Default constructor.

----

.. _api_Plane_40d61b83:

**Plane::Plane** (:ref:`Vector3<api_Vector3>` & *v1*, :ref:`Vector3<api_Vector3>` & *v2*, :ref:`Vector3<api_Vector3>` & *v3*)

Cunstructs a Plane by three points v1, *v2* and v3

----

.. _api_Plane_d79a3c2e:

 :ref:`Plane<api_Plane>` & **Plane::operator=** (:ref:`Plane<api_Plane>` & *value*)

Assignment operator. The *value* will be assigned to this object.


