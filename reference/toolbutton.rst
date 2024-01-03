.. _api_ToolButton:

ToolButton
==========

Inherited: :doc:`AbstractButton<api_AbstractButton>`

.. _api_ToolButton_description:

Description
-----------

The ToolButton class provides a UI component with a button-like appearance and an associated popup menu. It extends the functionality of AbstractButton to handle menu-related features. Users can show and hide the menu associated with the ToolButton, and the class also provides functionality to update the button text based on menu selections.



.. _api_ToolButton_public:

Public Methods
--------------

+--------------------------+------------------------------------------------------+
|                     void | :ref:`hideMenu<api_ToolButton_hideMenu>` ()          |
+--------------------------+------------------------------------------------------+
|  :ref:`Menu<api_Menu>` * | :ref:`menu<api_ToolButton_menu>` () const            |
+--------------------------+------------------------------------------------------+
|                     void | :ref:`setMenu<api_ToolButton_setMenu>` (Menu * menu) |
+--------------------------+------------------------------------------------------+
|                     void | :ref:`showMenu<api_ToolButton_showMenu>` ()          |
+--------------------------+------------------------------------------------------+



.. _api_ToolButton_static:

Static Methods
--------------

None

.. _api_ToolButton_methods:

Methods Description
-------------------

.. _api_ToolButton_hideMenu:

 void **ToolButton::hideMenu** ()

Hides the associated popup menu.

----

.. _api_ToolButton_menu:

 :ref:`Menu<api_Menu>`* **ToolButton::menu** () const

Returns the associated menu, or nullptr if no menu has been defined.

**See also** setMenu().

----

.. _api_ToolButton_setMenu:

 void **ToolButton::setMenu** (:ref:`Menu<api_Menu>` * *menu*)

Associates the given *menu* with this tool button. Ownership of the *menu* is not transferred to the tool button.

**See also** *menu*().

----

.. _api_ToolButton_showMenu:

 void **ToolButton::showMenu** ()

Shows the associated popup menu. Does nothing if no menu is associated.


