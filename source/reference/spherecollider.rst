.. _api_SphereCollider:

SphereCollider
==============

Inherited: :ref:`VolumeCollider<api_VolumeCollider>`

.. _api_SphereCollider_description:

Description
-----------

The SphereCollider class provides functionality to define a sphere collider with a specific radius. It supports retrieving and setting the radius. The sphere collider can be integrated with other components in a game or simulation to enable accurate collision detection.



.. _api_SphereCollider_public:

Public Methods
--------------

+--------+---------------------------------------------------------------+
|  float | :ref:`radius<api_SphereCollider_42eb18c9>` () const           |
+--------+---------------------------------------------------------------+
|   void | :ref:`setRadius<api_SphereCollider_de1ca037>` (float  radius) |
+--------+---------------------------------------------------------------+



.. _api_SphereCollider_static:

Static Methods
--------------

None

.. _api_SphereCollider_methods:

Methods Description
-------------------

.. _api_SphereCollider_42eb18c9:

 float **SphereCollider::radius** () const

Returns the radius of the sphere collider.

**See also** setRadius().

----

.. _api_SphereCollider_de1ca037:

 void **SphereCollider::setRadius** (float  *radius*)

Sets the *radius* of the sphere collider.

**See also** radius().


