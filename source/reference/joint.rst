.. _api_Joint:

Joint
=====

Inherited: :ref:`Component<api_Component>`

.. _api_Joint_description:

Description
-----------

The Joint class provides common anchor and connected-body settings for physics joints. The base joint behaves as a point-to-point constraint.



.. _api_Joint_public:

Public Methods
--------------

+------------------------------------+---------------------------------------------------------------------------+
|        :ref:`Vector3<api_Vector3>` | :ref:`anchor<api_Joint_1f80e9d5>` () const                                |
+------------------------------------+---------------------------------------------------------------------------+
|                               bool | :ref:`autoConfigureConnectedAnchor<api_Joint_16082d47>` () const          |
+------------------------------------+---------------------------------------------------------------------------+
|        :ref:`Vector3<api_Vector3>` | :ref:`connectedAnchor<api_Joint_58b1a794>` () const                       |
+------------------------------------+---------------------------------------------------------------------------+
|  :ref:`RigidBody<api_RigidBody>` * | :ref:`connectedBody<api_Joint_0ad926b1>` () const                         |
+------------------------------------+---------------------------------------------------------------------------+
|                               void | :ref:`setAnchor<api_Joint_6fc04e8d>` (const Vector3 & anchor)             |
+------------------------------------+---------------------------------------------------------------------------+
|                               void | :ref:`setAutoConfigureConnectedAnchor<api_Joint_2ed45819>` (bool  anchor) |
+------------------------------------+---------------------------------------------------------------------------+
|                               void | :ref:`setConnectedAnchor<api_Joint_f0374b1e>` (const Vector3 & anchor)    |
+------------------------------------+---------------------------------------------------------------------------+
|                               void | :ref:`setConnectedBody<api_Joint_ac82674b>` (RigidBody * body)            |
+------------------------------------+---------------------------------------------------------------------------+



.. _api_Joint_static:

Static Methods
--------------

None

.. _api_Joint_methods:

Methods Description
-------------------

.. _api_Joint_1f80e9d5:

 :ref:`Vector3<api_Vector3>`  **Joint::anchor** () const

Returns the anchor position of the joint on its own rigid body.

**See also** setAnchor().

----

.. _api_Joint_16082d47:

 bool **Joint::autoConfigureConnectedAnchor** () const

Returns true when the connected anchor is calculated automatically.

**See also** setAutoConfigureConnectedAnchor().

----

.. _api_Joint_58b1a794:

 :ref:`Vector3<api_Vector3>`  **Joint::connectedAnchor** () const

Returns the anchor position of the joint on the connected rigid body.

**See also** setConnectedAnchor().

----

.. _api_Joint_0ad926b1:

 :ref:`RigidBody<api_RigidBody>` * **Joint::connectedBody** () const

Returns the rigid body connected to the joint.

**See also** setConnectedBody().

----

.. _api_Joint_6fc04e8d:

 void **Joint::setAnchor** (:ref:`Vector3<api_Vector3>` & *anchor*)

Sets the *anchor* position of the joint on its own rigid body.

**See also** anchor().

----

.. _api_Joint_2ed45819:

 void **Joint::setAutoConfigureConnectedAnchor** (bool  *anchor*)

Enables or disables automatic configuration of the connected anchor.

**See also** autoConfigureConnectedAnchor().

----

.. _api_Joint_f0374b1e:

 void **Joint::setConnectedAnchor** (:ref:`Vector3<api_Vector3>` & *anchor*)

Sets the *anchor* position of the joint on the connected rigid body.

**See also** connectedAnchor().

----

.. _api_Joint_ac82674b:

 void **Joint::setConnectedBody** (:ref:`RigidBody<api_RigidBody>` * *body*)

Sets the rigid *body* connected to the joint.

**See also** connectedBody().


