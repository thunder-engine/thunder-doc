.. _api_BoxCollider:

BoxCollider
===========

Inherited: :doc:`VolumeCollider<api_VolumeCollider>`

.. _api_BoxCollider_description:

Description
-----------

The BoxCollider class provides methods to manipulate the size of the box collider and obtain its associated collision shape. This class is designed for use in 3D physics simulations and game development.



.. _api_BoxCollider_public:

Public Methods
--------------

+-------------------------------------+---------------------------------------------------------------+
|                                void | :ref:`setSize<api_BoxCollider_setSize>` (const Vector3  size) |
+-------------------------------------+---------------------------------------------------------------+
| const :ref:`Vector3<api_Vector3>` & | :ref:`size<api_BoxCollider_size>` () const                    |
+-------------------------------------+---------------------------------------------------------------+



.. _api_BoxCollider_static:

Static Methods
--------------

None

.. _api_BoxCollider_methods:

Methods Description
-------------------

.. _api_BoxCollider_setSize:

 void **BoxCollider::setSize** (:ref:`Vector3<api_Vector3>`  *size*)

Sets the *size* of the box collider.

**See also** *size*().

----

.. _api_BoxCollider_size:

const :ref:`Vector3<api_Vector3>`& **BoxCollider::size** () const

Returns the size of the box collider.

**See also** setSize().


