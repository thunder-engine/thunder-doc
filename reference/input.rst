.. _api_Input:

Input Class
===========

Inherited: None

.. _api_Input_description:

Description
-----------

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

+------------------------------+-------------------------------------------------------------------------+
|                          int | :ref:`getCode<api_Input_getCode>` (const std::string & )                |
+------------------------------+-------------------------------------------------------------------------+
|                  std::string | :ref:`inputString<api_Input_inputString>` ()                            |
+------------------------------+-------------------------------------------------------------------------+
|                         bool | :ref:`isKey<api_Input_isKey>` (Input::KeyCode  code)                    |
+------------------------------+-------------------------------------------------------------------------+
|                         bool | :ref:`isKeyDown<api_Input_isKeyDown>` (Input::KeyCode  code)            |
+------------------------------+-------------------------------------------------------------------------+
|                         bool | :ref:`isKeyUp<api_Input_isKeyUp>` (Input::KeyCode  code)                |
+------------------------------+-------------------------------------------------------------------------+
|                         bool | :ref:`isMouseButton<api_Input_isMouseButton>` (int  button)             |
+------------------------------+-------------------------------------------------------------------------+
|                         bool | :ref:`isMouseButtonDown<api_Input_isMouseButtonDown>` (int  button)     |
+------------------------------+-------------------------------------------------------------------------+
|                         bool | :ref:`isMouseButtonUp<api_Input_isMouseButtonUp>` (int  button)         |
+------------------------------+-------------------------------------------------------------------------+
|                          int | :ref:`joystickButtons<api_Input_joystickButtons>` (in  int)             |
+------------------------------+-------------------------------------------------------------------------+
|                          int | :ref:`joystickCount<api_Input_joystickCount>` ()                        |
+------------------------------+-------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`joystickThumbs<api_Input_joystickThumbs>` (int  index)            |
+------------------------------+-------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`joystickTriggers<api_Input_joystickTriggers>` (int  index)        |
+------------------------------+-------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`mouseDelta<api_Input_mouseDelta>` ()                              |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`mouseLockCursor<api_Input_mouseLockCursor>` (bool  lock)          |
+------------------------------+-------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`mousePosition<api_Input_mousePosition>` ()                        |
+------------------------------+-------------------------------------------------------------------------+
|                        float | :ref:`mouseScrollDelta<api_Input_mouseScrollDelta>` ()                  |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setKeyboardVisible<api_Input_setKeyboardVisible>` (bool  visible) |
+------------------------------+-------------------------------------------------------------------------+
|                          int | :ref:`touchCount<api_Input_touchCount>` ()                              |
+------------------------------+-------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`touchPosition<api_Input_touchPosition>` (int  index)              |
+------------------------------+-------------------------------------------------------------------------+
|                          int | :ref:`touchState<api_Input_touchState>` (in  int)                       |
+------------------------------+-------------------------------------------------------------------------+

.. _api_Input_methods:

Methods Description
-------------------

.. _api_Input_getCode:

 int **Input::getCode** (std::string & **)

Returns a key code, mouse buttons

----

.. _api_Input_inputString:

 std::string **Input::inputString** ()

Returns characters entered since the last frame.

----

.. _api_Input_isKey:

 bool **Input::isKey** (:ref:`Input::KeyCode<api_Input::KeyCode>`  *code*)

Returns true in case of a key with *code* is pressed; otherwise returns false. Please refer to Input::KeyCode to see possible key *code*s.

----

.. _api_Input_isKeyDown:

 bool **Input::isKeyDown** (:ref:`Input::KeyCode<api_Input::KeyCode>`  *code*)

Returns true during the frame in case of a key with *code* is pressed; otherwise returns false. Please refer to Input::KeyCode to see possible key *code*s.

----

.. _api_Input_isKeyUp:

 bool **Input::isKeyUp** (:ref:`Input::KeyCode<api_Input::KeyCode>`  *code*)

Returns true during the frame in case of a key with *code* is released; otherwise returns false. Please refer to Input::KeyCode to see possible key *code*s.

----

.. _api_Input_isMouseButton:

 bool **Input::isMouseButton** (int  *button*)

Returns the state of mouse *button*. Example code:

::

    if(Input::isMouseButton(0)) {
        aInfo() << "Left button pressed";
    }
    if(Input::isMouseButton(1)) {
        aInfo() << "Right button pressed";
    }
    if(Input::isMouseButton(3)) {
        aInfo() << "Middle button pressed";
    }

----

.. _api_Input_isMouseButtonDown:

 bool **Input::isMouseButtonDown** (int  *button*)

Returns true in case of the *button* is pressed; otherwise returns false.

----

.. _api_Input_isMouseButtonUp:

 bool **Input::isMouseButtonUp** (int  *button*)

Returns true in case of the *button* is released; otherwise returns false.

----

.. _api_Input_joystickButtons:

 int **Input::joystickButtons** (:ref:`in<api_in>`  *int*)

Returns the states of buttons for joystick with index. Please refer to Input::KeyCode to see possible buttons.

**Note:** This method returns a bit masked value. To retrieve the state of the required button please make bit comparison.

Example code:

::

    if(Input::joystickButtons(0) & Input::JOYSTICK_) {
        ...
    }

----

.. _api_Input_joystickCount:

 int **Input::joystickCount** ()

Returns the number of connected joysticks.

----

.. _api_Input_joystickThumbs:

 :ref:`Vector4<api_Vector4>` **Input::joystickThumbs** (int  *index*)

Returns the thumbs position of joystick with *index*. The components x and y will contain a value for the left thumbs. The components z and w will contain a value for the right thumbs.

----

.. _api_Input_joystickTriggers:

 :ref:`Vector2<api_Vector2>` **Input::joystickTriggers** (int  *index*)

Returns the value of pressure for the joystick triggers with *index*. The component x will contain a value for the left trigger and component y will contain value for the right trigger.

----

.. _api_Input_mouseDelta:

 :ref:`Vector4<api_Vector4>` **Input::mouseDelta** ()

Returns the mouse position delta. The absolute position will be stored in x and y components. The normalized position will be stored in z and w components.

**Note:** Delta value recalculated once per frame, calling this method multiple times in one frame will return the same result.

**Note:** The value will be Vector4(0.0f) if a mouse is not moved.

----

.. _api_Input_mouseLockCursor:

 void **Input::mouseLockCursor** (bool  *lock*)

Tries to *lock* mouse cursor.

----

.. _api_Input_mousePosition:

 :ref:`Vector4<api_Vector4>` **Input::mousePosition** ()

Returns the mouse position. The absolute position will be stored in x and y components. The normalized position will be stored in z and w components.

----

.. _api_Input_mouseScrollDelta:

 float **Input::mouseScrollDelta** ()

Returns the mouse wheel scrolling delta.

**Note:** Delta value recalculated once per frame, calling this method multiple times in one frame will return the same result.

**Note:** The value will be 0.0f if a mouse wheel is not rotated.

----

.. _api_Input_setKeyboardVisible:

 void **Input::setKeyboardVisible** (bool  *visible*)

Sets virtual keyboard *visible*.

**Note:** Does nothing for the desktop platforms.

----

.. _api_Input_touchCount:

 int **Input::touchCount** ()

Returns the number of touches.

----

.. _api_Input_touchPosition:

 :ref:`Vector4<api_Vector4>` **Input::touchPosition** (int  *index*)

Returns the position of touch with *index*. The absolute position will be stored in x and y components. The normalized position will be stored in z and w components.

----

.. _api_Input_touchState:

 int **Input::touchState** (:ref:`in<api_in>`  *int*)

Returns the state of touch with index. Please refer to Input::TouchState to see possible states.


