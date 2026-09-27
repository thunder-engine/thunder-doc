.. _api_Collider:

Collider
========

Inherited: :ref:`Component<api_Component>`

.. _api_Collider_description:

Description
-----------

The Collider class provides a foundation for creating collision shapes within a physics environment. It can be attached to a RigidBody for dynamic interactions or placed directly in the physics world for static collisions. Derived classes should implement specific collision shape creation in the shape() method. The class also includes methods for managing collision contacts, emitting signals, and visualizing the collider in the editor.



.. _api_Collider_public:

Public Methods
--------------

+--------------------------------------------------+-----------------------------------------------------------------------+
|                :ref:`RigidBody<api_RigidBody>` * | :ref:`attachedRigidBody<api_Collider_ef2d5143>` () const              |
+--------------------------------------------------+-----------------------------------------------------------------------+
|                                             void | :ref:`cleanContacts<api_Collider_c519f4be>` ()                        |
+--------------------------------------------------+-----------------------------------------------------------------------+
|                                             void | :ref:`createCollider<api_Collider_f347ecd6>` ()                       |
+--------------------------------------------------+-----------------------------------------------------------------------+
|                                             void | :ref:`dirtyContacts<api_Collider_1824a3be>` ()                        |
+--------------------------------------------------+-----------------------------------------------------------------------+
|                                             void | :ref:`entered<api_Collider_1ae32b9c>` ()                              |
+--------------------------------------------------+-----------------------------------------------------------------------+
|                                             void | :ref:`exited<api_Collider_5e81b42f>` ()                               |
+--------------------------------------------------+-----------------------------------------------------------------------+
|                                             void | :ref:`setAttachedRigidBody<api_Collider_9ab7412f>` (RigidBody * body) |
+--------------------------------------------------+-----------------------------------------------------------------------+
|                                             void | :ref:`setContact<api_Collider_f8eb10ca>` (Collider * collider)        |
+--------------------------------------------------+-----------------------------------------------------------------------+
|  :ref:`btCollisionShape<api_btCollisionShape>` * | :ref:`shape<api_Collider_eb39157d>` ()                                |
+--------------------------------------------------+-----------------------------------------------------------------------+
|                                             void | :ref:`stay<api_Collider_a7634d0c>` ()                                 |
+--------------------------------------------------+-----------------------------------------------------------------------+
|                                             void | :ref:`update<api_Collider_371d94f6>` ()                               |
+--------------------------------------------------+-----------------------------------------------------------------------+



.. _api_Collider_static:

Static Methods
--------------

None

.. _api_Collider_methods:

Methods Description
-------------------

.. _api_Collider_ef2d5143:

 :ref:`RigidBody<api_RigidBody>` * **Collider::attachedRigidBody** () const

Returns a pointer to the attached RigidBody if one is associated with.

**See also** setAttachedRigidBody().

----

.. _api_Collider_c519f4be:

 void **Collider::cleanContacts** ()

Cleans up stale collision contacts and emits signals for collisions that have ended.

----

.. _api_Collider_f347ecd6:

 void **Collider::createCollider** ()

Creates the Bullet Physics collision object associated with the collider and adds it to the physics world.

----

.. _api_Collider_1824a3be:

 void **Collider::dirtyContacts** ()

Marks all current collision contacts as dirty, indicating that they should be checked for updates.

----

.. _api_Collider_1ae32b9c:

 void **Collider::entered** ()

Triggers when collider enters to this volume

----

.. _api_Collider_5e81b42f:

 void **Collider::exited** ()

Triggers when collider exits from this volume

----

.. _api_Collider_9ab7412f:

 void **Collider::setAttachedRigidBody** (:ref:`RigidBody<api_RigidBody>` * *body*)

Attaches the collider to a specific rigid body. If a RigidBody is attached, the collider will be managed by the rigid body.

**See also** attachedRigidBody().

----

.. _api_Collider_f8eb10ca:

 void **Collider::setContact** (:ref:`Collider<api_Collider>` * *collider*)

Sets a new collision contact with another collider. Emits appropriate signals based on whether the contact is new, sustained, or ended.

----

.. _api_Collider_eb39157d:

 :ref:`btCollisionShape<api_btCollisionShape>` * **Collider::shape** ()

Returns a pointer to the Bullet Physics collision shape associated with the collider. Derived classes should implement this method to define specific collision shapes.

----

.. _api_Collider_a7634d0c:

 void **Collider::stay** ()

Triggers while collider stays in this volume

----

.. _api_Collider_371d94f6:

 void **Collider::update** ()

Placeholder method for updating the collider. Override this method in derived classes for specific update behavior.


