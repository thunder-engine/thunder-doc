.. _api_Input:
Input Class
================

Inherited: None

.. _api_Input_description:
Description
-----------

The interface to inpust system of Thunder Engine.

Use this class to get information from the inpute devices, like mouse, keyboard, joystick and etc.

Note: All input data updates once per frame during Engine::update() method.

Note: Many mobile devices are capable of tracking multiple fingers touching the screen simultaneously.



.. _api_Input_public:
Public Methods
--------------

None

.. _api_Input_static:
Static Methods
--------------

+-----------------------------+------------------------------------------------------------------------------------+
|       :ref:`bool<api_bool>` | :ref:`isKey<api_Input_isKey>` (Input::KeyCode  code)                               |
+-----------------------------+------------------------------------------------------------------------------------+
|       :ref:`bool<api_bool>` | :ref:`isKeyDown<api_Input_isKeyDown>` (Input::KeyCode  code)                       |
+-----------------------------+------------------------------------------------------------------------------------+
|       :ref:`bool<api_bool>` | :ref:`isKeyUp<api_Input_isKeyUp>` (Input::KeyCode  code)                           |
+-----------------------------+------------------------------------------------------------------------------------+
|       :ref:`bool<api_bool>` | :ref:`isMouseButton<api_Input_isMouseButton>` (Input::MouseButton  button)         |
+-----------------------------+------------------------------------------------------------------------------------+
|       :ref:`bool<api_bool>` | :ref:`isMouseButtonDown<api_Input_isMouseButtonDown>` (Input::MouseButton  button) |
+-----------------------------+------------------------------------------------------------------------------------+
|       :ref:`bool<api_bool>` | :ref:`isMouseButtonUp<api_Input_isMouseButtonUp>` (Input::MouseButton  button)     |
+-----------------------------+------------------------------------------------------------------------------------+
|         :ref:`int<api_int>` | :ref:`joystickButtons<api_Input_joystickButtons>` (in  int)                        |
+-----------------------------+------------------------------------------------------------------------------------+
|         :ref:`int<api_int>` | :ref:`joystickCount<api_Input_joystickCount>` ()                                   |
+-----------------------------+------------------------------------------------------------------------------------+
| :ref:`Vector4<api_Vector4>` | :ref:`joystickThumbs<api_Input_joystickThumbs>` (int  index)                       |
+-----------------------------+------------------------------------------------------------------------------------+
| :ref:`Vector2<api_Vector2>` | :ref:`joystickTriggers<api_Input_joystickTriggers>` (int  index)                   |
+-----------------------------+------------------------------------------------------------------------------------+
| :ref:`Vector4<api_Vector4>` | :ref:`mouseDelta<api_Input_mouseDelta>` ()                                         |
+-----------------------------+------------------------------------------------------------------------------------+
| :ref:`Vector4<api_Vector4>` | :ref:`mousePosition<api_Input_mousePosition>` ()                                   |
+-----------------------------+------------------------------------------------------------------------------------+
|       :ref:`void<api_void>` | :ref:`setMousePosition<api_Input_setMousePosition>` (int  x, int  y)               |
+-----------------------------+------------------------------------------------------------------------------------+
|         :ref:`int<api_int>` | :ref:`touchCount<api_Input_touchCount>` ()                                         |
+-----------------------------+------------------------------------------------------------------------------------+
| :ref:`Vector4<api_Vector4>` | :ref:`touchPosition<api_Input_touchPosition>` (int  index)                         |
+-----------------------------+------------------------------------------------------------------------------------+
|         :ref:`int<api_int>` | :ref:`touchState<api_Input_touchState>` (in  int)                                  |
+-----------------------------+------------------------------------------------------------------------------------+

.. _api_Input_methods:
Methods Description
-------------------

.. _api_Input_isKey:

:ref:`bool<api_bool>`  **Input::isKey** (:ref:`Input::KeyCode<api_Input::KeyCode>`  *code*)

Returns true in case of a key with *code* is pressed; otherwise returns false. Please refer to Input::KeyCode to see possible key *code*s.

----

.. _api_Input_isKeyDown:

:ref:`bool<api_bool>`  **Input::isKeyDown** (:ref:`Input::KeyCode<api_Input::KeyCode>`  *code*)

Returns true during the frame in case of a key with *code* is pressed; otherwise returns false. Please refer to Input::KeyCode to see possible key *code*s.

----

.. _api_Input_isKeyUp:

:ref:`bool<api_bool>`  **Input::isKeyUp** (:ref:`Input::KeyCode<api_Input::KeyCode>`  *code*)

Returns true during the frame in case of a key with *code* is released; otherwise returns false. Please refer to Input::KeyCode to see possible key *code*s.

----

.. _api_Input_isMouseButton:

:ref:`bool<api_bool>`  **Input::isMouseButton** (:ref:`Input::MouseButton<api_Input::MouseButton>`  *button*)

Returns the states of mouse *button*s. Please refer to Input::MouseButton to see possible *button*s. Example code:

::

    if(Input::isMouseButton(Input::LEFT)) {
        ...
    }

----

.. _api_Input_isMouseButtonDown:

:ref:`bool<api_bool>`  **Input::isMouseButtonDown** (:ref:`Input::MouseButton<api_Input::MouseButton>`  *button*)

Returns true in case of the *button* is pressed; otherwise returns false. Please refer to Input::MouseButton to see possible *button*s.

----

.. _api_Input_isMouseButtonUp:

:ref:`bool<api_bool>`  **Input::isMouseButtonUp** (:ref:`Input::MouseButton<api_Input::MouseButton>`  *button*)

Returns true in case of the *button* is released; otherwise returns false. Please refer to Input::MouseButton to see possible *button*s.

----

.. _api_Input_joystickButtons:

:ref:`int<api_int>`  **Input::joystickButtons** (:ref:`in<api_in>`  *int*)

Returns the states of buttons for joystick with index. Please refer to Input::JoystickButton to see possible buttons.

**Note:** This method returns a bit masked value. To retrieve the state of the required button please make bit comparison.

Example code:

::

    if(Input::joystickButtons(0) & Input::START) {
        ...
    }

----

.. _api_Input_joystickCount:

:ref:`int<api_int>`  **Input::joystickCount** ()

Returns the number of connected joysticks.

----

.. _api_Input_joystickThumbs:

:ref:`Vector4<api_Vector4>`  **Input::joystickThumbs** (:ref:`int<api_int>`  *index*)

Returns the thumbs position of joystick with *index*. The components x and y will contain a value for the left thumbs. The components z and w will contain a value for the right thumbs.

----

.. _api_Input_joystickTriggers:

:ref:`Vector2<api_Vector2>`  **Input::joystickTriggers** (:ref:`int<api_int>`  *index*)

Returns the value of pressure for the joystick triggers with *index*. The component x will contain a value for the left trigger and component y will contain value for the right trigger.

----

.. _api_Input_mouseDelta:

:ref:`Vector4<api_Vector4>`  **Input::mouseDelta** ()

Returns the mouse position delta. The absolute position will be stored in x and y components. The normalized position will be stored in z and w components.

**Note:** Delta value recalculated once per frame, calling this method multiple times in one frame will return the same result.

**Note:** The value will be Vector4(0.0f) if a mouse is not moved.

----

.. _api_Input_mousePosition:

:ref:`Vector4<api_Vector4>`  **Input::mousePosition** ()

Returns the mouse position. The absolute position will be stored in x and y components. The normalized position will be stored in z and w components.

**See also** setMousePosition().

----

.. _api_Input_setMousePosition:

:ref:`void<api_void>`  **Input::setMousePosition** (:ref:`int<api_int>`  *x*, :ref:`int<api_int>`  *y*)

Moves the mouse cursor to the global screen position (x, *y*).

**See also** mousePosition().

----

.. _api_Input_touchCount:

:ref:`int<api_int>`  **Input::touchCount** ()

Returns the number of touches.

----

.. _api_Input_touchPosition:

:ref:`Vector4<api_Vector4>`  **Input::touchPosition** (:ref:`int<api_int>`  *index*)

Returns the position of touch with *index*. The absolute position will be stored in x and y components. The normalized position will be stored in z and w components.

----

.. _api_Input_touchState:

:ref:`int<api_int>`  **Input::touchState** (:ref:`in<api_in>`  *int*)

Returns the state of touch with index. Please refer to Input::TouchState to see possible states.

----


