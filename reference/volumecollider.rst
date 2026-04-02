.. _api_VolumeCollider:

VolumeCollider
==============

Inherited: None

.. _api_VolumeCollider_description:

Description
-----------

The VolumeCollider class provides functionality for defining a collider with a specific volume. It supports both physical and trigger collider modes, associated physics material, and can be integrated with other components in a game or simulation to enable accurate collision detection and response.



.. _api_VolumeCollider_public:

Public Methods
--------------

+----------------------------------------------+---------------------------------------------------------------------------------------+
|          const :ref:`Vector3<api_Vector3>` & | :ref:`center<api_VolumeCollider_b65d824a>` () const                                   |
+----------------------------------------------+---------------------------------------------------------------------------------------+
|                                         void | :ref:`createCollider<api_VolumeCollider_79eacdf2>` ()                                 |
+----------------------------------------------+---------------------------------------------------------------------------------------+
|                                         bool | :ref:`isDirty<api_VolumeCollider_6de23a98>` () const                                  |
+----------------------------------------------+---------------------------------------------------------------------------------------+
|  :ref:`PhysicMaterial<api_PhysicMaterial>` * | :ref:`material<api_VolumeCollider_162cf5b7>` () const                                 |
+----------------------------------------------+---------------------------------------------------------------------------------------+
|                                         void | :ref:`retrieveContact<api_VolumeCollider_3fc052d7>` (const Collider * collider) const |
+----------------------------------------------+---------------------------------------------------------------------------------------+
|                                         void | :ref:`setCenter<api_VolumeCollider_e2a91645>` (const Vector3  center)                 |
+----------------------------------------------+---------------------------------------------------------------------------------------+
|                                         void | :ref:`setMaterial<api_VolumeCollider_6784d09a>` (PhysicMaterial * material)           |
+----------------------------------------------+---------------------------------------------------------------------------------------+
|                                         void | :ref:`setTrigger<api_VolumeCollider_3c40ed8a>` (bool  trigger)                        |
+----------------------------------------------+---------------------------------------------------------------------------------------+
|                                         bool | :ref:`trigger<api_VolumeCollider_76f03cb4>` () const                                  |
+----------------------------------------------+---------------------------------------------------------------------------------------+



.. _api_VolumeCollider_static:

Static Methods
--------------

None

.. _api_VolumeCollider_methods:

Methods Description
-------------------

.. _api_VolumeCollider_b65d824a:

const :ref:`Vector3<api_Vector3>` & **VolumeCollider::center** () const

Returns the local center of the volume collider.

**See also** setCenter().

----

.. _api_VolumeCollider_79eacdf2:

 void **VolumeCollider::createCollider** ()

Reimplements: Collider::createCollider().

Creates the collision object for the volume collider. If the collider is a trigger, it is added as a ghost object; otherwise, it is created as a physical collider.

----

.. _api_VolumeCollider_6de23a98:

 bool **VolumeCollider::isDirty** () const

Returns true if the collider is dirty, false otherwise.

----

.. _api_VolumeCollider_162cf5b7:

 :ref:`PhysicMaterial<api_PhysicMaterial>` * **VolumeCollider::material** () const

Returns the physics material associated with the volume collider.

**See also** setMaterial().

----

.. _api_VolumeCollider_3fc052d7:

 void **VolumeCollider::retrieveContact** (:ref:`Collider<api_Collider>` * *collider*) const

Retrieves contact information with another collider.

----

.. _api_VolumeCollider_e2a91645:

 void **VolumeCollider::setCenter** (:ref:`Vector3<api_Vector3>`  *center*)

Sets the local *center* of the volume collider.

**See also** center().

----

.. _api_VolumeCollider_6784d09a:

 void **VolumeCollider::setMaterial** (:ref:`PhysicMaterial<api_PhysicMaterial>` * *material*)

Sets the physics *material* for the volume collider.

**See also** material().

----

.. _api_VolumeCollider_3c40ed8a:

 void **VolumeCollider::setTrigger** (bool  *trigger*)

Sets whether the volume collider should function as a trigger.

**See also** trigger().

----

.. _api_VolumeCollider_76f03cb4:

 bool **VolumeCollider::trigger** () const

Returns true if the collider is a trigger, false otherwise.

**See also** setTrigger().


