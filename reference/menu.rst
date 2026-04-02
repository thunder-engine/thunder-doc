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

+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`addSection<api_Menu_230c6adf>` (const TString & text) |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`addWidget<api_Menu_9824e7f0>` (Widget * widget)       |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`hide<api_Menu_f0e9b264>` ()                           |
+------------------------------+-------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`itemText<api_Menu_9ec7680b>` (int  index)             |
+------------------------------+-------------------------------------------------------------+
|    :ref:`Frame<api_Frame>` * | :ref:`selected<api_Menu_0628c5f9>` () const                 |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setSelected<api_Menu_7f5ad29e>` (Frame * frame)       |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`setTitle<api_Menu_738f0be1>` (const TString & title)  |
+------------------------------+-------------------------------------------------------------+
|                         void | :ref:`show<api_Menu_b19d8250>` (const Vector2 & position)   |
+------------------------------+-------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`title<api_Menu_916307ea>` () const                    |
+------------------------------+-------------------------------------------------------------+



.. _api_Menu_static:

Static Methods
--------------

None

.. _api_Menu_methods:

Methods Description
-------------------

.. _api_Menu_230c6adf:

 void **Menu::addSection** (:ref:`TString<api_TString>` & *text*)

Adds a section to the menu with the specified *text*.

----

.. _api_Menu_9824e7f0:

 void **Menu::addWidget** (:ref:`Widget<api_Widget>` * *widget*)

Adds a *widget* to the menu.

----

.. _api_Menu_f0e9b264:

 void **Menu::hide** ()

Hides the menu.

----

.. _api_Menu_9ec7680b:

 :ref:`TString<api_TString>`  **Menu::itemText** (int  *index*)

Returns the text of the item at the specified *index*.

----

.. _api_Menu_0628c5f9:

 :ref:`Frame<api_Frame>` * **Menu::selected** () const

Returns the selection frame for the menu;

**See also** setSelected().

----

.. _api_Menu_7f5ad29e:

 void **Menu::setSelected** (:ref:`Frame<api_Frame>` * *frame*)

Sets the selection *frame* for the menu;

**See also** selected().

----

.. _api_Menu_738f0be1:

 void **Menu::setTitle** (:ref:`TString<api_TString>` & *title*)

Sets the *title* of the menu.

**See also** *title*().

----

.. _api_Menu_b19d8250:

 void **Menu::show** (:ref:`Vector2<api_Vector2>` & *position*)

Displays the menu at the specified *position*.

----

.. _api_Menu_916307ea:

 :ref:`TString<api_TString>`  **Menu::title** () const

Returns the title of the menu.

**See also** setTitle().


