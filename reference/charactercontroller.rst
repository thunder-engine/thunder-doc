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
|  :ref:`Vector3<api_Vector3>` | :ref:`center<api_CharacterController_f324c5d1>` () const                     |
+------------------------------+------------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` | :ref:`gravity<api_CharacterController_61057ad4>` () const                    |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`height<api_CharacterController_2c638b5d>` () const                     |
+------------------------------+------------------------------------------------------------------------------+
|                         bool | :ref:`isGrounded<api_CharacterController_87159a2e>` () const                 |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`move<api_CharacterController_53fae97b>` (const Vector3 & direction)    |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`radius<api_CharacterController_6b01d29c>` () const                     |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setCenter<api_CharacterController_fe98243b>` (const Vector3  center)   |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setGravity<api_CharacterController_d8c6b0f2>` (const Vector3  gravity) |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setHeight<api_CharacterController_fe372c60>` (float  height)           |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setRadius<api_CharacterController_a012bef5>` (float  radius)           |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setSkinWidth<api_CharacterController_df6e0c8b>` (float  width)         |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setSlopeLimit<api_CharacterController_e3648bc7>` (float  limit)        |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setStepOffset<api_CharacterController_d58f9ba6>` (float  height)       |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`skinWidth<api_CharacterController_81e62d5f>` () const                  |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`slopeLimit<api_CharacterController_7aef82d3>` () const                 |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`stepOffset<api_CharacterController_40f362bd>` () const                 |
+------------------------------+------------------------------------------------------------------------------+



.. _api_CharacterController_static:

Static Methods
--------------

None

.. _api_CharacterController_methods:

Methods Description
-------------------

.. _api_CharacterController_f324c5d1:

 :ref:`Vector3<api_Vector3>`  **CharacterController::center** () const

Returns the local center of the character controller.

**See also** setCenter().

----

.. _api_CharacterController_61057ad4:

 :ref:`Vector3<api_Vector3>`  **CharacterController::gravity** () const

Returns the gravity vector applied to the character controller.

**See also** setGravity().

----

.. _api_CharacterController_2c638b5d:

 float **CharacterController::height** () const

Returns the height of the character controller's capsule shape.

**See also** setHeight().

----

.. _api_CharacterController_87159a2e:

 bool **CharacterController::isGrounded** () const

Returns true if the character controller is currently grounded (on the floor); otherwise, returns false.

----

.. _api_CharacterController_53fae97b:

 void **CharacterController::move** (:ref:`Vector3<api_Vector3>` & *direction*)

Moves the character controller in the specified direction.

----

.. _api_CharacterController_6b01d29c:

 float **CharacterController::radius** () const

Returns the radius of the character controller's capsule shape.

**See also** setRadius().

----

.. _api_CharacterController_fe98243b:

 void **CharacterController::setCenter** (:ref:`Vector3<api_Vector3>`  *center*)

Sets the local *center* of the character controller.

**See also** center().

----

.. _api_CharacterController_d8c6b0f2:

 void **CharacterController::setGravity** (:ref:`Vector3<api_Vector3>`  *gravity*)

Sets the *gravity* vector applied to the character controller.

**See also** gravity().

----

.. _api_CharacterController_fe372c60:

 void **CharacterController::setHeight** (float  *height*)

Sets the *height* of the character controller's capsule shape.

**See also** height().

----

.. _api_CharacterController_a012bef5:

 void **CharacterController::setRadius** (float  *radius*)

Sets the *radius* of the character controller's capsule shape.

**See also** radius().

----

.. _api_CharacterController_df6e0c8b:

 void **CharacterController::setSkinWidth** (float  *width*)

Sets the skin *width* of the character controller.

**See also** skinWidth().

----

.. _api_CharacterController_e3648bc7:

 void **CharacterController::setSlopeLimit** (float  *limit*)

Sets the slope *limit* angle for the character controller.

**See also** slopeLimit().

----

.. _api_CharacterController_d58f9ba6:

 void **CharacterController::setStepOffset** (float  *height*)

Sets the maximum *height* of steps that the character controller can climb.

**See also** stepOffset().

----

.. _api_CharacterController_81e62d5f:

 float **CharacterController::skinWidth** () const

Returns the skin width of the character controller.

**See also** setSkinWidth().

----

.. _api_CharacterController_7aef82d3:

 float **CharacterController::slopeLimit** () const

Returns the slope limit angle for the character controller.

**See also** setSlopeLimit().

----

.. _api_CharacterController_40f362bd:

 float **CharacterController::stepOffset** () const

Returns the maximum height of steps that the character controller can climb.

**See also** setStepOffset().


