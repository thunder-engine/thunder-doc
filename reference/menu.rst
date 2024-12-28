.. _api_Menu:

Menu
====

Inherited: None

.. _api_Menu_description:

Description
-----------

The Menu class represents a graphical user interface (GUI) menu that contains a list of options or actions that users can select. It provides a way to organize and display commands or choices in a structured manner, typically within a dropdown or context menu format. Menus are essential in GUI design for providing users with accessible options and actions within an application.



.. _api_Menu_public:

Public Methods
--------------

+--------------+-------------------------------------------------------------------+
|         void | :ref:`addSection<api_Menu_addSection>` (const std::string & text) |
+--------------+-------------------------------------------------------------------+
|         void | :ref:`addWidget<api_Menu_addWidget>` (Widget * widget)            |
+--------------+-------------------------------------------------------------------+
|         void | :ref:`hide<api_Menu_hide>` ()                                     |
+--------------+-------------------------------------------------------------------+
|  std::string | :ref:`itemText<api_Menu_itemText>` (int  index)                   |
+--------------+-------------------------------------------------------------------+
|         void | :ref:`setTitle<api_Menu_setTitle>` (const std::string & title)    |
+--------------+-------------------------------------------------------------------+
|         void | :ref:`show<api_Menu_show>` (const Vector2 & position)             |
+--------------+-------------------------------------------------------------------+
|  std::string | :ref:`title<api_Menu_title>` () const                             |
+--------------+-------------------------------------------------------------------+



.. _api_Menu_static:

Static Methods
--------------

None

.. _api_Menu_methods:

Methods Description
-------------------

.. _api_Menu_addSection:

 void **Menu::addSection** (std::string & *text*)

Adds a section to the menu with the specified *text*.

----

.. _api_Menu_addWidget:

 void **Menu::addWidget** (:ref:`Widget<api_Widget>` * *widget*)

Adds a *widget* to the menu.

----

.. _api_Menu_hide:

 void **Menu::hide** ()

Hides the menu.

----

.. _api_Menu_itemText:

 std::string **Menu::itemText** (int  *index*)

Returns the text of the item at the specified *index*.

----

.. _api_Menu_setTitle:

 void **Menu::setTitle** (std::string & *title*)

Sets the *title* of the menu.

**See also** *title*().

----

.. _api_Menu_show:

 void **Menu::show** (:ref:`Vector2<api_Vector2>` & *position*)

Displays the menu at the specified *position*.

----

.. _api_Menu_title:

 std::string **Menu::title** () const

Returns the title of the menu.

**See also** setTitle().


