.. _api_CharacterController:

CharacterController
===================

Inherited: None

.. _api_CharacterController_description:

Description
-----------

The CharacterController class provides methods to control the movement and properties of a character in a 3D physics environment.



.. _api_CharacterController_public:

Public Methods
--------------

+------------------------------+------------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` | :ref:`center<api_CharacterController_c7e869d3>` () const                     |
+------------------------------+------------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` | :ref:`gravity<api_CharacterController_346795af>` () const                    |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`height<api_CharacterController_a43207d9>` () const                     |
+------------------------------+------------------------------------------------------------------------------+
|                         bool | :ref:`isGrounded<api_CharacterController_4baf0972>` () const                 |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`move<api_CharacterController_e47328b6>` (const Vector3 & direction)    |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`radius<api_CharacterController_0e6b985f>` () const                     |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setCenter<api_CharacterController_24d0b351>` (const Vector3  center)   |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setGravity<api_CharacterController_ec78f94b>` (const Vector3  gravity) |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setHeight<api_CharacterController_f957b3d1>` (float  height)           |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setRadius<api_CharacterController_20b6d47c>` (float  radius)           |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setSkinWidth<api_CharacterController_b8ea69f4>` (float  width)         |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setSlopeLimit<api_CharacterController_c2d761ae>` (float  limit)        |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setStepOffset<api_CharacterController_c70569a3>` (float  height)       |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`skinWidth<api_CharacterController_2ae194f3>` () const                  |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`slopeLimit<api_CharacterController_62dcfb51>` () const                 |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`stepOffset<api_CharacterController_5e17cdb0>` () const                 |
+------------------------------+------------------------------------------------------------------------------+



.. _api_CharacterController_static:

Static Methods
--------------

None

.. _api_CharacterController_methods:

Methods Description
-------------------

.. _api_CharacterController_c7e869d3:

 :ref:`Vector3<api_Vector3>`  **CharacterController::center** () const

Returns the local center of the character controller.

**See also** setCenter().

----

.. _api_CharacterController_346795af:

 :ref:`Vector3<api_Vector3>`  **CharacterController::gravity** () const

Returns the gravity vector applied to the character controller.

**See also** setGravity().

----

.. _api_CharacterController_a43207d9:

 float **CharacterController::height** () const

Returns the height of the character controller's capsule shape.

**See also** setHeight().

----

.. _api_CharacterController_4baf0972:

 bool **CharacterController::isGrounded** () const

Returns true if the character controller is currently grounded (on the floor); otherwise, returns false.

----

.. _api_CharacterController_e47328b6:

 void **CharacterController::move** (:ref:`Vector3<api_Vector3>` & *direction*)

Moves the character controller in the specified direction.

----

.. _api_CharacterController_0e6b985f:

 float **CharacterController::radius** () const

Returns the radius of the character controller's capsule shape.

**See also** setRadius().

----

.. _api_CharacterController_24d0b351:

 void **CharacterController::setCenter** (:ref:`Vector3<api_Vector3>`  *center*)

Sets the local *center* of the character controller.

**See also** center().

----

.. _api_CharacterController_ec78f94b:

 void **CharacterController::setGravity** (:ref:`Vector3<api_Vector3>`  *gravity*)

Sets the *gravity* vector applied to the character controller.

**See also** gravity().

----

.. _api_CharacterController_f957b3d1:

 void **CharacterController::setHeight** (float  *height*)

Sets the *height* of the character controller's capsule shape.

**See also** height().

----

.. _api_CharacterController_20b6d47c:

 void **CharacterController::setRadius** (float  *radius*)

Sets the *radius* of the character controller's capsule shape.

**See also** radius().

----

.. _api_CharacterController_b8ea69f4:

 void **CharacterController::setSkinWidth** (float  *width*)

Sets the skin *width* of the character controller.

**See also** skinWidth().

----

.. _api_CharacterController_c2d761ae:

 void **CharacterController::setSlopeLimit** (float  *limit*)

Sets the slope *limit* angle for the character controller.

**See also** slopeLimit().

----

.. _api_CharacterController_c70569a3:

 void **CharacterController::setStepOffset** (float  *height*)

Sets the maximum *height* of steps that the character controller can climb.

**See also** stepOffset().

----

.. _api_CharacterController_2ae194f3:

 float **CharacterController::skinWidth** () const

Returns the skin width of the character controller.

**See also** setSkinWidth().

----

.. _api_CharacterController_62dcfb51:

 float **CharacterController::slopeLimit** () const

Returns the slope limit angle for the character controller.

**See also** setSlopeLimit().

----

.. _api_CharacterController_5e17cdb0:

 float **CharacterController::stepOffset** () const

Returns the maximum height of steps that the character controller can climb.

**See also** setStepOffset().


