.. _api_Collider:

Collider
========

Inherited: None

.. _api_Collider_description:

Description
-----------

The Collider class provides a foundation for creating collision shapes within a physics environment. It can be attached to a RigidBody for dynamic interactions or placed directly in the physics world for static collisions. Derived classes should implement specific collision shape creation in the shape() method. The class also includes methods for managing collision contacts, emitting signals, and visualizing the collider in the editor.



.. _api_Collider_public:

Public Methods
--------------

+--------------------------------------------------+-----------------------------------------------------------------------------------+
|                :ref:`RigidBody<api_RigidBody>` * | :ref:`attachedRigidBody<api_Collider_attachedRigidBody>` () const                 |
+--------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             void | :ref:`cleanContacts<api_Collider_cleanContacts>` ()                               |
+--------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             void | :ref:`createCollider<api_Collider_createCollider>` ()                             |
+--------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             void | :ref:`dirtyContacts<api_Collider_dirtyContacts>` ()                               |
+--------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             void | :ref:`setAttachedRigidBody<api_Collider_setAttachedRigidBody>` (RigidBody * body) |
+--------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             void | :ref:`setContact<api_Collider_setContact>` (Collider * collider)                  |
+--------------------------------------------------+-----------------------------------------------------------------------------------+
|  :ref:`btCollisionShape<api_btCollisionShape>` * | :ref:`shape<api_Collider_shape>` ()                                               |
+--------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             void | :ref:`update<api_Collider_update>` ()                                             |
+--------------------------------------------------+-----------------------------------------------------------------------------------+



.. _api_Collider_static:

Static Methods
--------------

None

.. _api_Collider_methods:

Methods Description
-------------------

.. _api_Collider_attachedRigidBody:

 :ref:`RigidBody<api_RigidBody>` * **Collider::attachedRigidBody** () const

Returns a pointer to the attached RigidBody if one is associated with.

**See also** setAttachedRigidBody().

----

.. _api_Collider_cleanContacts:

 void **Collider::cleanContacts** ()

Cleans up stale collision contacts and emits signals for collisions that have ended.

----

.. _api_Collider_createCollider:

 void **Collider::createCollider** ()

Creates the Bullet Physics collision object associated with the collider and adds it to the physics world.

----

.. _api_Collider_dirtyContacts:

 void **Collider::dirtyContacts** ()

Marks all current collision contacts as dirty, indicating that they should be checked for updates.

----

.. _api_Collider_setAttachedRigidBody:

 void **Collider::setAttachedRigidBody** (:ref:`RigidBody<api_RigidBody>` * *body*)

Attaches the collider to a specific rigid *body*. If a RigidBody is attached, the collider will be managed by the rigid *body*.

**See also** attachedRigidBody().

----

.. _api_Collider_setContact:

 void **Collider::setContact** (:ref:`Collider<api_Collider>` * *collider*)

Sets a new collision contact with another *collider*. Emits appropriate signals based on whether the contact is new, sustained, or ended.

----

.. _api_Collider_shape:

 :ref:`btCollisionShape<api_btCollisionShape>` * **Collider::shape** ()

Returns a pointer to the Bullet Physics collision shape associated with the collider. Derived classes should implement this method to define specific collision shapes.

----

.. _api_Collider_update:

 void **Collider::update** ()

Placeholder method for updating the collider. Override this method in derived classes for specific update behavior.


