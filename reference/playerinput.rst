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

+--------------------------------------------+----------------------------------------------------------------------------+
|                                      float | :ref:`axis<api_PlayerInput_9d5c34a8>` (const TString & name)               |
+--------------------------------------------+----------------------------------------------------------------------------+
|                                       bool | :ref:`button<api_PlayerInput_cf93eb21>` (const TString & name)             |
+--------------------------------------------+----------------------------------------------------------------------------+
|  :ref:`ControlScheme<api_ControlScheme>` * | :ref:`controlScheme<api_PlayerInput_d91c8f5b>` () const                    |
+--------------------------------------------+----------------------------------------------------------------------------+
|                                       void | :ref:`setControlScheme<api_PlayerInput_970a458c>` (ControlScheme * scheme) |
+--------------------------------------------+----------------------------------------------------------------------------+



.. _api_PlayerInput_static:

Static Methods
--------------

None

.. _api_PlayerInput_methods:

Methods Description
-------------------

.. _api_PlayerInput_9d5c34a8:

 float **PlayerInput::axis** (:ref:`TString<api_TString>` & *name*)

Returns the value of the virtual axis identified by name. The value will be in the range -1...1 for keyboard and joystick input devices.

----

.. _api_PlayerInput_cf93eb21:

 bool **PlayerInput::button** (:ref:`TString<api_TString>` & *name*)

Returns true in case of virtual button identified by *name* is pressed; otherwise returns false.

----

.. _api_PlayerInput_d91c8f5b:

 :ref:`ControlScheme<api_ControlScheme>` * **PlayerInput::controlScheme** () const

Returns the current assigned control scheme.

**See also** setControlScheme().

----

.. _api_PlayerInput_970a458c:

 void **PlayerInput::setControlScheme** (:ref:`ControlScheme<api_ControlScheme>` * *scheme*)

Assigns a new control scheme. All previous bindings and key states will be cleaned.

**See also** controlScheme().


