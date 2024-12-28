.. _api_PlayerInput:

PlayerInput
===========

Inherited: None

.. _api_PlayerInput_description:

Description
-----------


Note: A PlayerInput controller simplifies the management of the player control scheme. It can be used to get the current state of actions from the assigned ControlScheme.




.. _api_PlayerInput_public:

Public Methods
--------------

+--------+------------------------------------------------------------------+
|  float | :ref:`axis<api_PlayerInput_axis>` (const std::string & name)     |
+--------+------------------------------------------------------------------+
|   bool | :ref:`button<api_PlayerInput_button>` (const std::string & name) |
+--------+------------------------------------------------------------------+
|    int | :ref:`controlScheme<api_PlayerInput_controlScheme>` () const     |
+--------+------------------------------------------------------------------+



.. _api_PlayerInput_static:

Static Methods
--------------

None

.. _api_PlayerInput_methods:

Methods Description
-------------------

.. _api_PlayerInput_axis:

 float **PlayerInput::axis** (std::string & *name*)

Returns the value of the virtual axis identified by *name*. The value will be in the range -1...1 for keyboard and joystick input devices.

----

.. _api_PlayerInput_button:

 bool **PlayerInput::button** (std::string & *name*)

Returns true in case of virtual button identified by *name* is pressed; otherwise returns false.

----

.. _api_PlayerInput_controlScheme:

 int **PlayerInput::controlScheme** () const

Returns the current assigned control scheme.


