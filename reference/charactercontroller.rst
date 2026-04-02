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
|  :ref:`Vector3<api_Vector3>` | :ref:`center<api_CharacterController_134259b8>` () const                     |
+------------------------------+------------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` | :ref:`gravity<api_CharacterController_b53124cf>` () const                    |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`height<api_CharacterController_9f476538>` () const                     |
+------------------------------+------------------------------------------------------------------------------+
|                         bool | :ref:`isGrounded<api_CharacterController_86bd254f>` () const                 |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`move<api_CharacterController_e94bf528>` (const Vector3 & direction)    |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`radius<api_CharacterController_563290e7>` () const                     |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setCenter<api_CharacterController_3a54dcf9>` (const Vector3  center)   |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setGravity<api_CharacterController_b820d3ac>` (const Vector3  gravity) |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setHeight<api_CharacterController_851734f0>` (float  height)           |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setRadius<api_CharacterController_c094f3a2>` (float  radius)           |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setSkinWidth<api_CharacterController_7c19f5b8>` (float  width)         |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setSlopeLimit<api_CharacterController_5afd8140>` (float  limit)        |
+------------------------------+------------------------------------------------------------------------------+
|                         void | :ref:`setStepOffset<api_CharacterController_324e70c9>` (float  height)       |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`skinWidth<api_CharacterController_4fd5cbe2>` () const                  |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`slopeLimit<api_CharacterController_e1967d42>` () const                 |
+------------------------------+------------------------------------------------------------------------------+
|                        float | :ref:`stepOffset<api_CharacterController_29dc4530>` () const                 |
+------------------------------+------------------------------------------------------------------------------+



.. _api_CharacterController_static:

Static Methods
--------------

None

.. _api_CharacterController_methods:

Methods Description
-------------------

.. _api_CharacterController_134259b8:

 :ref:`Vector3<api_Vector3>`  **CharacterController::center** () const

Returns the local center of the character controller.

**See also** setCenter().

----

.. _api_CharacterController_b53124cf:

 :ref:`Vector3<api_Vector3>`  **CharacterController::gravity** () const

Returns the gravity vector applied to the character controller.

**See also** setGravity().

----

.. _api_CharacterController_9f476538:

 float **CharacterController::height** () const

Returns the height of the character controller's capsule shape.

**See also** setHeight().

----

.. _api_CharacterController_86bd254f:

 bool **CharacterController::isGrounded** () const

Returns true if the character controller is currently grounded (on the floor); otherwise, returns false.

----

.. _api_CharacterController_e94bf528:

 void **CharacterController::move** (:ref:`Vector3<api_Vector3>` & *direction*)

Moves the character controller in the specified *direction*.

----

.. _api_CharacterController_563290e7:

 float **CharacterController::radius** () const

Returns the radius of the character controller's capsule shape.

**See also** setRadius().

----

.. _api_CharacterController_3a54dcf9:

 void **CharacterController::setCenter** (:ref:`Vector3<api_Vector3>`  *center*)

Sets the local *center* of the character controller.

**See also** *center*().

----

.. _api_CharacterController_b820d3ac:

 void **CharacterController::setGravity** (:ref:`Vector3<api_Vector3>`  *gravity*)

Sets the *gravity* vector applied to the character controller.

**See also** *gravity*().

----

.. _api_CharacterController_851734f0:

 void **CharacterController::setHeight** (float  *height*)

Sets the *height* of the character controller's capsule shape.

**See also** *height*().

----

.. _api_CharacterController_c094f3a2:

 void **CharacterController::setRadius** (float  *radius*)

Sets the *radius* of the character controller's capsule shape.

**See also** *radius*().

----

.. _api_CharacterController_7c19f5b8:

 void **CharacterController::setSkinWidth** (float  *width*)

Sets the skin *width* of the character controller.

**See also** skinWidth().

----

.. _api_CharacterController_5afd8140:

 void **CharacterController::setSlopeLimit** (float  *limit*)

Sets the slope *limit* angle for the character controller.

**See also** slopeLimit().

----

.. _api_CharacterController_324e70c9:

 void **CharacterController::setStepOffset** (float  *height*)

Sets the maximum *height* of steps that the character controller can climb.

**See also** stepOffset().

----

.. _api_CharacterController_4fd5cbe2:

 float **CharacterController::skinWidth** () const

Returns the skin width of the character controller.

**See also** setSkinWidth().

----

.. _api_CharacterController_e1967d42:

 float **CharacterController::slopeLimit** () const

Returns the slope limit angle for the character controller.

**See also** setSlopeLimit().

----

.. _api_CharacterController_29dc4530:

 float **CharacterController::stepOffset** () const

Returns the maximum height of steps that the character controller can climb.

**See also** setStepOffset().


