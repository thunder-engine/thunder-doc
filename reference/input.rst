.. _api_Input:

Input
=====

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

+------------------------------+-----------------------------------------------------------------------+
|                     uint32_t | :ref:`getCode<api_Input_273d5096>` (const TString & name)             |
+------------------------------+-----------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`inputString<api_Input_c201579d>` ()                             |
+------------------------------+-----------------------------------------------------------------------+
|                         bool | :ref:`isKey<api_Input_5fb4096c>` (Input::KeyCode  code)               |
+------------------------------+-----------------------------------------------------------------------+
|                         bool | :ref:`isKeyDown<api_Input_8645da71>` (Input::KeyCode  code)           |
+------------------------------+-----------------------------------------------------------------------+
|                         bool | :ref:`isKeyUp<api_Input_b275f89a>` (Input::KeyCode  code)             |
+------------------------------+-----------------------------------------------------------------------+
|                         bool | :ref:`isMouseButton<api_Input_28dbcf31>` (int  button)                |
+------------------------------+-----------------------------------------------------------------------+
|                         bool | :ref:`isMouseButtonDown<api_Input_e2017fd5>` (int  button)            |
+------------------------------+-----------------------------------------------------------------------+
|                         bool | :ref:`isMouseButtonUp<api_Input_4db0f9a7>` (int  button)              |
+------------------------------+-----------------------------------------------------------------------+
|                     uint32_t | :ref:`joystickButtons<api_Input_d795e068>` (uint32_t  index)          |
+------------------------------+-----------------------------------------------------------------------+
|                     uint32_t | :ref:`joystickCount<api_Input_a90be15f>` ()                           |
+------------------------------+-----------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`joystickThumbs<api_Input_230ea1b6>` (uint32_t  index)           |
+------------------------------+-----------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`joystickTriggers<api_Input_13927b04>` (uint32_t  index)         |
+------------------------------+-----------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`mouseDelta<api_Input_28fe406c>` ()                              |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`mouseLockCursor<api_Input_5d43097e>` (bool  lock)               |
+------------------------------+-----------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`mousePosition<api_Input_cfeab462>` ()                           |
+------------------------------+-----------------------------------------------------------------------+
|                        float | :ref:`mouseScrollDelta<api_Input_31d8b749>` ()                        |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`mouseSetCursor<api_Input_fb602193>` (Input::CursorShape  shape) |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setKeyboardVisible<api_Input_31b78469>` (bool  visible)         |
+------------------------------+-----------------------------------------------------------------------+
|                     uint32_t | :ref:`touchCount<api_Input_01bf75a4>` ()                              |
+------------------------------+-----------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`touchPosition<api_Input_b1f82743>` (uint32_t  index)            |
+------------------------------+-----------------------------------------------------------------------+
|                     uint32_t | :ref:`touchState<api_Input_da102675>` (uint32_t  index)               |
+------------------------------+-----------------------------------------------------------------------+

.. _api_Input_methods:

Methods Description
-------------------

.. _api_Input_273d5096:

 uint32_t **Input::getCode** (:ref:`TString<api_TString>` & *name*)

Converts a key *name* to code.

----

.. _api_Input_c201579d:

 :ref:`TString<api_TString>`  **Input::inputString** ()

Returns characters entered since the last frame.

----

.. _api_Input_5fb4096c:

 bool **Input::isKey** (:ref:`Input::KeyCode<api_Input_KeyCode>`  *code*)

Returns true in case of a key with *code* is pressed; otherwise returns false. Please refer to Input::KeyCode to see possible key codes.

----

.. _api_Input_8645da71:

 bool **Input::isKeyDown** (:ref:`Input::KeyCode<api_Input_KeyCode>`  *code*)

Returns true during the frame in case of a key with *code* is pressed; otherwise returns false. Please refer to Input::KeyCode to see possible key codes.

----

.. _api_Input_b275f89a:

 bool **Input::isKeyUp** (:ref:`Input::KeyCode<api_Input_KeyCode>`  *code*)

Returns true during the frame in case of a key with *code* is released; otherwise returns false. Please refer to Input::KeyCode to see possible key codes.

----

.. _api_Input_28dbcf31:

 bool **Input::isMouseButton** (int  *button*)

Returns the state of mouse button. Example code:

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

.. _api_Input_e2017fd5:

 bool **Input::isMouseButtonDown** (int  *button*)

Returns true in case of the *button* is pressed; otherwise returns false.

----

.. _api_Input_4db0f9a7:

 bool **Input::isMouseButtonUp** (int  *button*)

Returns true in case of the *button* is released; otherwise returns false.

----

.. _api_Input_d795e068:

 uint32_t **Input::joystickButtons** (uint32_t  *index*)

Returns the states of buttons for joystick with index. Please refer to Input::KeyCode to see possible buttons.


**Note:** This method returns a bit masked value. To retrieve the state of the required button please make bit comparison.


Example code:

::

    if(Input::joystickButtons(0) & Input::JOYSTICK_) {
        ...
    }

----

.. _api_Input_a90be15f:

 uint32_t **Input::joystickCount** ()

Returns the number of connected joysticks.

----

.. _api_Input_230ea1b6:

 :ref:`Vector4<api_Vector4>`  **Input::joystickThumbs** (uint32_t  *index*)

Returns the thumbs position of joystick with index. The components x and y will contain a value for the left thumbs. The components z and w will contain a value for the right thumbs.

----

.. _api_Input_13927b04:

 :ref:`Vector2<api_Vector2>`  **Input::joystickTriggers** (uint32_t  *index*)

Returns the value of pressure for the joystick triggers with index. The component x will contain a value for the left trigger and component y will contain value for the right trigger.

----

.. _api_Input_28fe406c:

 :ref:`Vector4<api_Vector4>`  **Input::mouseDelta** ()

Returns the mouse position delta. The absolute position will be stored in x and y components. The normalized position will be stored in z and w components.


**Note:** Delta value recalculated once per frame, calling this method multiple times in one frame will return the same result.



**Note:** The value will be Vector4(0.0f) if a mouse is not moved.


----

.. _api_Input_5d43097e:

 void **Input::mouseLockCursor** (bool  *lock*)

Tries to *lock* mouse cursor.

----

.. _api_Input_cfeab462:

 :ref:`Vector4<api_Vector4>`  **Input::mousePosition** ()

Returns the mouse position. The absolute position will be stored in x and y components. The normalized position will be stored in z and w components.

----

.. _api_Input_31d8b749:

 float **Input::mouseScrollDelta** ()

Returns the mouse wheel scrolling delta.


**Note:** Delta value recalculated once per frame, calling this method multiple times in one frame will return the same result.



**Note:** The value will be 0.0f if a mouse wheel is not rotated.


----

.. _api_Input_fb602193:

 void **Input::mouseSetCursor** (:ref:`Input::CursorShape<api_Input_CursorShape>`  *shape*)

Sets the cursor shape.

----

.. _api_Input_31b78469:

 void **Input::setKeyboardVisible** (bool  *visible*)

Sets virtual keyboard visible.


**Note:** Does nothing for the desktop platforms.


----

.. _api_Input_01bf75a4:

 uint32_t **Input::touchCount** ()

Returns the number of touches.

----

.. _api_Input_b1f82743:

 :ref:`Vector4<api_Vector4>`  **Input::touchPosition** (uint32_t  *index*)

Returns the position of touch with index. The absolute position will be stored in x and y components. The normalized position will be stored in z and w components.

----

.. _api_Input_da102675:

 uint32_t **Input::touchState** (uint32_t  *index*)

Returns the state of touch with index. Please refer to Input::TouchState to see possible states.


