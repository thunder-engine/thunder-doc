.. _api_HingeJoint:

HingeJoint
==========

Inherited: :ref:`Joint<api_Joint>`

.. _api_HingeJoint_description:

Description
-----------

A HingeJoint allows angular movement around its configured axis while constraining the connected bodies at their anchor positions.



.. _api_HingeJoint_public:

Public Methods
--------------

+------------------------------+----------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` | :ref:`axis<api_HingeJoint_d16547bc>` () const                  |
+------------------------------+----------------------------------------------------------------+
|                         void | :ref:`setAxis<api_HingeJoint_01b5e239>` (const Vector3 & axis) |
+------------------------------+----------------------------------------------------------------+



.. _api_HingeJoint_static:

Static Methods
--------------

None

.. _api_HingeJoint_methods:

Methods Description
-------------------

.. _api_HingeJoint_d16547bc:

 :ref:`Vector3<api_Vector3>`  **HingeJoint::axis** () const

Returns the hinge rotation axis.

**See also** setAxis().

----

.. _api_HingeJoint_01b5e239:

 void **HingeJoint::setAxis** (:ref:`Vector3<api_Vector3>` & *axis*)

Sets the hinge rotation axis.

**See also** axis().


