.. _api_RigidBody:

RigidBody
=========

Inherited: None

.. _api_RigidBody_description:

Description
-----------

The RigidBody class provides a flexible interface for managing dynamic rigid bodies in a physics simulation. It supports mass, kinematic properties, locking of positions and rotations, and synchronization with custom collider components.



.. _api_RigidBody_public:

Public Methods
--------------

+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`applyForce<api_RigidBody_2fe51783>` (const Vector3 & force, const Vector3 & point)     |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`applyImpulse<api_RigidBody_38d5c6f1>` (const Vector3 & impulse, const Vector3 & point) |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`createCollider<api_RigidBody_f1860c39>` ()                                             |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         bool | :ref:`kinematic<api_RigidBody_834d195e>` () const                                            |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                          int | :ref:`lockPosition<api_RigidBody_a3dbe021>` () const                                         |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                          int | :ref:`lockRotation<api_RigidBody_df8e6a02>` () const                                         |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                        float | :ref:`mass<api_RigidBody_b5326481>` () const                                                 |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|  :ref:`PhysicMaterial<api_PhysicMaterial>` * | :ref:`material<api_RigidBody_d1c42708>` () const                                             |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`setEnabled<api_RigidBody_fa28d914>` (bool  enable)                                     |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`setKinematic<api_RigidBody_9fc1da0e>` (bool  kinematic)                                |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`setLockPosition<api_RigidBody_abd3587c>` (int  flags)                                  |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`setLockRotation<api_RigidBody_8f6d3927>` (int  flags)                                  |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`setMass<api_RigidBody_2ac46e05>` (float  mass)                                         |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`updateCollider<api_RigidBody_ea10b367>` (bool  updated)                                |
+----------------------------------------------+----------------------------------------------------------------------------------------------+



.. _api_RigidBody_static:

Static Methods
--------------

None

.. _api_RigidBody_methods:

Methods Description
-------------------

.. _api_RigidBody_2fe51783:

 void **RigidBody::applyForce** (:ref:`Vector3<api_Vector3>` & *force*, :ref:`Vector3<api_Vector3>` & *point*)

Applies a *force* to the rigid body at a specific point.

----

.. _api_RigidBody_38d5c6f1:

 void **RigidBody::applyImpulse** (:ref:`Vector3<api_Vector3>` & *impulse*, :ref:`Vector3<api_Vector3>` & *point*)

Applies an *impulse* to the rigid body at a specific point.

----

.. _api_RigidBody_f1860c39:

 void **RigidBody::createCollider** ()

Reimplements: Collider::createCollider().

Creates the rigid body's collider in the physics world.

----

.. _api_RigidBody_834d195e:

 bool **RigidBody::kinematic** () const

Returns true if the rigid body is kinematic, false otherwise.

**See also** setKinematic().

----

.. _api_RigidBody_a3dbe021:

 int **RigidBody::lockPosition** () const

Returns the lock flags for the rigid body's linear position.

**See also** setLockPosition().

----

.. _api_RigidBody_df8e6a02:

 int **RigidBody::lockRotation** () const

Returns the lock flags for the rigid body's rotation.

**See also** setLockRotation().

----

.. _api_RigidBody_b5326481:

 float **RigidBody::mass** () const

Returns the mass of the rigid body.

**See also** setMass().

----

.. _api_RigidBody_d1c42708:

 :ref:`PhysicMaterial<api_PhysicMaterial>` * **RigidBody::material** () const

Returns the physical material associated with the rigid body.

----

.. _api_RigidBody_fa28d914:

 void **RigidBody::setEnabled** (bool  *enable*)

Reimplements: Component::setEnabled(bool enabled).

Set *enable* or disable the rigid body in the physics world.

----

.. _api_RigidBody_9fc1da0e:

 void **RigidBody::setKinematic** (bool  *kinematic*)

Sets whether the rigid body is *kinematic* or not.

**See also** kinematic().

----

.. _api_RigidBody_abd3587c:

 void **RigidBody::setLockPosition** (int  *flags*)

Sets the lock *flags* for the rigid body's linear position.

**See also** lockPosition().

----

.. _api_RigidBody_8f6d3927:

 void **RigidBody::setLockRotation** (int  *flags*)

Sets the lock *flags* for the rigid body's rotation.

**See also** lockRotation().

----

.. _api_RigidBody_2ac46e05:

 void **RigidBody::setMass** (float  *mass*)

Sets the *mass* of the rigid body and updates its properties in the physics simulation.

**See also** mass().

----

.. _api_RigidBody_ea10b367:

 void **RigidBody::updateCollider** (bool  *updated*)

Updates the rigid body's collider based on the associated collider components. Parameter *updated* can be used to forcibly update.


