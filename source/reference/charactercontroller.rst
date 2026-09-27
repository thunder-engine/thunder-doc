.. _api_CharacterController:

CharacterController
===================

Inherited: :ref:`Collider<api_Collider>`

.. _api_CharacterController_description:

Description
-----------

The CharacterController class provides methods to control the movement and properties of a character in a 3D physics environment.



.. _api_CharacterController_public:

Public Methods
--------------

+------------------------------+------------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` | :ref:`center<api_CharacterController_ab54306f>` () const                     |
+------------------------------+------------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` | :ref:`gravity<api_CharacterController_ae9d4735>` () const                    |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`height<api_CharacterController_84fba326>` () const                     |
+------------------------------+------------------------------------------------------------------------------+
|                         bool | :ref:`isGrounded<api_CharacterController_54ad37cb>` () const                 |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`move<api_CharacterController_a96efc32>` (const Vector3 & direction)    |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`radius<api_CharacterController_782c96ef>` () const                     |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setCenter<api_CharacterController_024fe569>` (const Vector3  center)   |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setGravity<api_CharacterController_9136807b>` (const Vector3  gravity) |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setHeight<api_CharacterController_b596dafe>` (float  height)           |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setRadius<api_CharacterController_7cb3efa9>` (float  radius)           |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setSkinWidth<api_CharacterController_089ab325>` (float  width)         |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setSlopeLimit<api_CharacterController_9351eb8f>` (float  limit)        |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setStepOffset<api_CharacterController_e07cf349>` (float  height)       |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`skinWidth<api_CharacterController_6741e3dc>` () const                  |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`slopeLimit<api_CharacterController_ed5c2af1>` () const                 |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`stepOffset<api_CharacterController_9a10ce4f>` () const                 |
+------------------------------+------------------------------------------------------------------------------+



.. _api_CharacterController_static:

Static Methods
--------------

None

.. _api_CharacterController_methods:

Methods Description
-------------------

.. _api_CharacterController_ab54306f:

 :ref:`Vector3<api_Vector3>`  **CharacterController::center** () const

Returns the local center of the character controller.

**See also** setCenter().

----

.. _api_CharacterController_ae9d4735:

 :ref:`Vector3<api_Vector3>`  **CharacterController::gravity** () const

Returns the gravity vector applied to the character controller.

**See also** setGravity().

----

.. _api_CharacterController_84fba326:

 float **CharacterController::height** () const

Returns the height of the character controller's capsule shape.

**See also** setHeight().

----

.. _api_CharacterController_54ad37cb:

 bool **CharacterController::isGrounded** () const

Returns true if the character controller is currently grounded (on the floor); otherwise, returns false.

----

.. _api_CharacterController_a96efc32:

 void **CharacterController::move** (:ref:`Vector3<api_Vector3>` & *direction*)

Moves the character controller in the specified direction.

----

.. _api_CharacterController_782c96ef:

 float **CharacterController::radius** () const

Returns the radius of the character controller's capsule shape.

**See also** setRadius().

----

.. _api_CharacterController_024fe569:

 void **CharacterController::setCenter** (:ref:`Vector3<api_Vector3>`  *center*)

Sets the local *center* of the character controller.

**See also** center().

----

.. _api_CharacterController_9136807b:

 void **CharacterController::setGravity** (:ref:`Vector3<api_Vector3>`  *gravity*)

Sets the *gravity* vector applied to the character controller.

**See also** gravity().

----

.. _api_CharacterController_b596dafe:

 void **CharacterController::setHeight** (float  *height*)

Sets the *height* of the character controller's capsule shape.

**See also** height().

----

.. _api_CharacterController_7cb3efa9:

 void **CharacterController::setRadius** (float  *radius*)

Sets the *radius* of the character controller's capsule shape.

**See also** radius().

----

.. _api_CharacterController_089ab325:

 void **CharacterController::setSkinWidth** (float  *width*)

Sets the skin *width* of the character controller.

**See also** skinWidth().

----

.. _api_CharacterController_9351eb8f:

 void **CharacterController::setSlopeLimit** (float  *limit*)

Sets the slope *limit* angle for the character controller.

**See also** slopeLimit().

----

.. _api_CharacterController_e07cf349:

 void **CharacterController::setStepOffset** (float  *height*)

Sets the maximum *height* of steps that the character controller can climb.

**See also** stepOffset().

----

.. _api_CharacterController_6741e3dc:

 float **CharacterController::skinWidth** () const

Returns the skin width of the character controller.

**See also** setSkinWidth().

----

.. _api_CharacterController_ed5c2af1:

 float **CharacterController::slopeLimit** () const

Returns the slope limit angle for the character controller.

**See also** setSlopeLimit().

----

.. _api_CharacterController_9a10ce4f:

 float **CharacterController::stepOffset** () const

Returns the maximum height of steps that the character controller can climb.

**See also** setStepOffset().


