.. _api_ControlScheme:

ControlScheme
=============

Inherited: None

.. _api_ControlScheme_description:

Description
-----------

The ControlScheme class provides functionality for managing and customizing control schemes within a game. It allows users to define actions and map them to various input bindings.



.. _api_ControlScheme_public:

Public Methods
--------------

+------------------------------+--------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`actionName<api_ControlScheme_518c26f7>` (int  action) const              |
+------------------------------+--------------------------------------------------------------------------------+
|                          int | :ref:`actionsCount<api_ControlScheme_40d691f2>` () const                       |
+------------------------------+--------------------------------------------------------------------------------+
|                          int | :ref:`bindingCode<api_ControlScheme_14e29b8f>` (int  action, int  binding)     |
+------------------------------+--------------------------------------------------------------------------------+
|                         bool | :ref:`bindingNegative<api_ControlScheme_be2a1534>` (int  action, int  binding) |
+------------------------------+--------------------------------------------------------------------------------+
|                          int | :ref:`bindingsCount<api_ControlScheme_8f02e9b3>` (int  action) const           |
+------------------------------+--------------------------------------------------------------------------------+



.. _api_ControlScheme_static:

Static Methods
--------------

None

.. _api_ControlScheme_methods:

Methods Description
-------------------

.. _api_ControlScheme_518c26f7:

 :ref:`TString<api_TString>`  **ControlScheme::actionName** (int  *action*) const

Returns The name of the specified *action* or an empty string if the index is out of range.

----

.. _api_ControlScheme_40d691f2:

 int **ControlScheme::actionsCount** () const

Gets the total number of actions in the control scheme.

----

.. _api_ControlScheme_14e29b8f:

 int **ControlScheme::bindingCode** (int  *action*, int  *binding*)

Returns the input code for the specified *binding* *action* or Input::KEY_UNKNOWN if the indices are out of range.

----

.. _api_ControlScheme_be2a1534:

 bool **ControlScheme::bindingNegative** (int  *action*, int  *binding*)

Returns true if the *binding* *action* is negative, false otherwise. Returns false if the indices are out of range.

----

.. _api_ControlScheme_8f02e9b3:

 int **ControlScheme::bindingsCount** (int  *action*) const

Returns The number of bindings for the specified *action*.


