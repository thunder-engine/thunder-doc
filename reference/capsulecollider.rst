.. _api_CapsuleCollider:

CapsuleCollider
===============

Inherited: :doc:`SphereCollider<api_SphereCollider>`

.. _api_CapsuleCollider_description:

Description
-----------

The CapsuleCollider class provides methods to manipulate the height of the capsule collider and obtain its associated collision shape. This class is designed for use in 3D physics simulations and game development.



.. _api_CapsuleCollider_public:

Public Methods
--------------

+--------+-----------------------------------------------------------------+
|  float | :ref:`height<api_CapsuleCollider_height>` () const              |
+--------+-----------------------------------------------------------------+
|   void | :ref:`setHeight<api_CapsuleCollider_setHeight>` (float  height) |
+--------+-----------------------------------------------------------------+



.. _api_CapsuleCollider_static:

Static Methods
--------------

None

.. _api_CapsuleCollider_methods:

Methods Description
-------------------

.. _api_CapsuleCollider_height:

 float **CapsuleCollider::height** () const

Returns the height of the capsule collider.

**See also** setHeight().

----

.. _api_CapsuleCollider_setHeight:

 void **CapsuleCollider::setHeight** (float  *height*)

Sets the *height* of the capsule collider.

**See also** *height*().


