.. _api_SpringJoint:

SpringJoint
===========

Inherited: :ref:`Joint<api_Joint>`

.. _api_SpringJoint_description:

Description
-----------

A SpringJoint uses spring and damper parameters to control the relative movement of the connected rigid bodies.



.. _api_SpringJoint_public:

Public Methods
--------------

+--------+------------------------------------------------------------+
|  float | :ref:`damper<api_SpringJoint_1a8b7e26>` () const           |
+--------+------------------------------------------------------------+
|   void | :ref:`setDamper<api_SpringJoint_0a2915e3>` (float  damper) |
+--------+------------------------------------------------------------+
|   void | :ref:`setSpring<api_SpringJoint_c92ebf84>` (float  spring) |
+--------+------------------------------------------------------------+
|  float | :ref:`spring<api_SpringJoint_0ab1e7d4>` () const           |
+--------+------------------------------------------------------------+



.. _api_SpringJoint_static:

Static Methods
--------------

None

.. _api_SpringJoint_methods:

Methods Description
-------------------

.. _api_SpringJoint_1a8b7e26:

 float **SpringJoint::damper** () const

Returns the damping coefficient of the spring joint.

**See also** setDamper().

----

.. _api_SpringJoint_0a2915e3:

 void **SpringJoint::setDamper** (float  *damper*)

Sets the *damper* coefficient of the spring joint.

**See also** damper().

----

.. _api_SpringJoint_c92ebf84:

 void **SpringJoint::setSpring** (float  *spring*)

Sets the *spring* stiffness of the joint.

**See also** spring().

----

.. _api_SpringJoint_0ab1e7d4:

 float **SpringJoint::spring** () const

Returns the spring stiffness of the joint.

**See also** setSpring().


