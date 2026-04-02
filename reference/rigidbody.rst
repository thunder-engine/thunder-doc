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
|                                         void | :ref:`applyForce<api_RigidBody_97ced182>` (const Vector3 & force, const Vector3 & point)     |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`applyImpulse<api_RigidBody_3d9e5f61>` (const Vector3 & impulse, const Vector3 & point) |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`createCollider<api_RigidBody_06e593bf>` ()                                             |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         bool | :ref:`kinematic<api_RigidBody_0d3c5e7f>` () const                                            |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                          int | :ref:`lockPosition<api_RigidBody_2a97d816>` () const                                         |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                          int | :ref:`lockRotation<api_RigidBody_83a5201f>` () const                                         |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                        float | :ref:`mass<api_RigidBody_93f07d6c>` () const                                                 |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|  :ref:`PhysicMaterial<api_PhysicMaterial>` * | :ref:`material<api_RigidBody_918f2ba6>` () const                                             |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`setEnabled<api_RigidBody_e49afd32>` (bool  enable)                                     |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`setKinematic<api_RigidBody_78136bae>` (bool  kinematic)                                |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`setLockPosition<api_RigidBody_9523fb06>` (int  flags)                                  |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`setLockRotation<api_RigidBody_26534bc8>` (int  flags)                                  |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`setMass<api_RigidBody_6f94c7a0>` (float  mass)                                         |
+----------------------------------------------+----------------------------------------------------------------------------------------------+
|                                         void | :ref:`updateCollider<api_RigidBody_cd1b523e>` (bool  updated)                                |
+----------------------------------------------+----------------------------------------------------------------------------------------------+



.. _api_RigidBody_static:

Static Methods
--------------

None

.. _api_RigidBody_methods:

Methods Description
-------------------

.. _api_RigidBody_97ced182:

 void **RigidBody::applyForce** (:ref:`Vector3<api_Vector3>` & *force*, :ref:`Vector3<api_Vector3>` & *point*)

Applies a *force* to the rigid body at a specific point.

----

.. _api_RigidBody_3d9e5f61:

 void **RigidBody::applyImpulse** (:ref:`Vector3<api_Vector3>` & *impulse*, :ref:`Vector3<api_Vector3>` & *point*)

Applies an *impulse* to the rigid body at a specific point.

----

.. _api_RigidBody_06e593bf:

 void **RigidBody::createCollider** ()

Reimplements: Collider::createCollider().

Creates the rigid body's collider in the physics world.

----

.. _api_RigidBody_0d3c5e7f:

 bool **RigidBody::kinematic** () const

Returns true if the rigid body is kinematic, false otherwise.

**See also** setKinematic().

----

.. _api_RigidBody_2a97d816:

 int **RigidBody::lockPosition** () const

Returns the lock flags for the rigid body's linear position.

**See also** setLockPosition().

----

.. _api_RigidBody_83a5201f:

 int **RigidBody::lockRotation** () const

Returns the lock flags for the rigid body's rotation.

**See also** setLockRotation().

----

.. _api_RigidBody_93f07d6c:

 float **RigidBody::mass** () const

Returns the mass of the rigid body.

**See also** setMass().

----

.. _api_RigidBody_918f2ba6:

 :ref:`PhysicMaterial<api_PhysicMaterial>` * **RigidBody::material** () const

Returns the physical material associated with the rigid body.

----

.. _api_RigidBody_e49afd32:

 void **RigidBody::setEnabled** (bool  *enable*)

Reimplements: Component::setEnabled(bool enabled).

Set *enable* or disable the rigid body in the physics world.

----

.. _api_RigidBody_78136bae:

 void **RigidBody::setKinematic** (bool  *kinematic*)

Sets whether the rigid body is *kinematic* or not.

**See also** kinematic().

----

.. _api_RigidBody_9523fb06:

 void **RigidBody::setLockPosition** (int  *flags*)

Sets the lock *flags* for the rigid body's linear position.

**See also** lockPosition().

----

.. _api_RigidBody_26534bc8:

 void **RigidBody::setLockRotation** (int  *flags*)

Sets the lock *flags* for the rigid body's rotation.

**See also** lockRotation().

----

.. _api_RigidBody_6f94c7a0:

 void **RigidBody::setMass** (float  *mass*)

Sets the *mass* of the rigid body and updates its properties in the physics simulation.

**See also** mass().

----

.. _api_RigidBody_cd1b523e:

 void **RigidBody::updateCollider** (bool  *updated*)

Updates the rigid body's collider based on the associated collider components. Parameter *updated* can be used to forcibly update.


