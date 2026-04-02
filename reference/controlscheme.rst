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
|  :ref:`TString<api_TString>` | :ref:`actionName<api_ControlScheme_f6b91253>` (int  action) const              |
+------------------------------+--------------------------------------------------------------------------------+
|                          int | :ref:`actionsCount<api_ControlScheme_f7426c90>` () const                       |
+------------------------------+--------------------------------------------------------------------------------+
|                          int | :ref:`bindingCode<api_ControlScheme_a5426bef>` (int  action, int  binding)     |
+------------------------------+--------------------------------------------------------------------------------+
|                         bool | :ref:`bindingNegative<api_ControlScheme_8d704e32>` (int  action, int  binding) |
+------------------------------+--------------------------------------------------------------------------------+
|                          int | :ref:`bindingsCount<api_ControlScheme_3c6ae1d2>` (int  action) const           |
+------------------------------+--------------------------------------------------------------------------------+



.. _api_ControlScheme_static:

Static Methods
--------------

None

.. _api_ControlScheme_methods:

Methods Description
-------------------

.. _api_ControlScheme_f6b91253:

 :ref:`TString<api_TString>`  **ControlScheme::actionName** (int  *action*) const

Returns The name of the specified *action* or an empty string if the index is out of range.

----

.. _api_ControlScheme_f7426c90:

 int **ControlScheme::actionsCount** () const

Gets the total number of actions in the control scheme.

----

.. _api_ControlScheme_a5426bef:

 int **ControlScheme::bindingCode** (int  *action*, int  *binding*)

Returns the input code for the specified *binding* *action* or Input::KEY_UNKNOWN if the indices are out of range.

----

.. _api_ControlScheme_8d704e32:

 bool **ControlScheme::bindingNegative** (int  *action*, int  *binding*)

Returns true if the *binding* *action* is negative, false otherwise. Returns false if the indices are out of range.

----

.. _api_ControlScheme_3c6ae1d2:

 int **ControlScheme::bindingsCount** (int  *action*) const

Returns The number of bindings for the specified action.


