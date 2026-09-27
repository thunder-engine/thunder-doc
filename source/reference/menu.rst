.. _api_Menu:

Menu
====

Inherited: :ref:`Frame<api_Frame>`

.. _api_Menu_description:

Description
-----------

The Menu class represents a graphical user interface (GUI) menu that contains a list of options or actions that users can select. It provides a way to organize and display commands or choices in a structured manner, typically within a dropdown or context menu format. Menus are essential in GUI design for providing users with accessible options and actions within an application.



.. _api_Menu_public:

Public Methods
--------------

+------------------------------+------------------------------------------------------------------------------------------------------+
|                         void | :ref:`aboutToHide<api_Menu_0ed2cf7a>` ()                                                             |
+------------------------------+------------------------------------------------------------------------------------------------------+
|                         void | :ref:`aboutToShow<api_Menu_ecd9af50>` ()                                                             |
+------------------------------+------------------------------------------------------------------------------------------------------+
|                         void | :ref:`addAction<api_Menu_c5d87362>` (const TString & text, Sprite * icon = nullptr)                  |
+------------------------------+------------------------------------------------------------------------------------------------------+
|                         void | :ref:`addSeparator<api_Menu_320ae98c>` ()                                                            |
+------------------------------+------------------------------------------------------------------------------------------------------+
|                         void | :ref:`addSubmenu<api_Menu_e59b604c>` (const TString & text, Menu * submenu, Sprite * icon = nullptr) |
+------------------------------+------------------------------------------------------------------------------------------------------+
|      :ref:`Font<api_Font>` * | :ref:`font<api_Menu_4fe017c6>` () const                                                              |
+------------------------------+------------------------------------------------------------------------------------------------------+
|                         void | :ref:`hide<api_Menu_54ab13f0>` ()                                                                    |
+------------------------------+------------------------------------------------------------------------------------------------------+
|  :ref:`Sprite<api_Sprite>` * | :ref:`itemIcon<api_Menu_a80ef7c4>` (int  index)                                                      |
+------------------------------+------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`itemText<api_Menu_a3b8967f>` (int  index)                                                      |
+------------------------------+------------------------------------------------------------------------------------------------------+
|                         void | :ref:`setFont<api_Menu_f9e538a2>` (Font * font)                                                      |
+------------------------------+------------------------------------------------------------------------------------------------------+
|                         void | :ref:`setItemIcon<api_Menu_65294cbd>` (int  index, Sprite * icon)                                    |
+------------------------------+------------------------------------------------------------------------------------------------------+
|                         void | :ref:`setItemText<api_Menu_4e3fdab2>` (int  index, const TString & text)                             |
+------------------------------+------------------------------------------------------------------------------------------------------+
|                         void | :ref:`show<api_Menu_097baedc>` (const Vector2 & position)                                            |
+------------------------------+------------------------------------------------------------------------------------------------------+
|                         void | :ref:`triggered<api_Menu_c45df920>` (int  index)                                                     |
+------------------------------+------------------------------------------------------------------------------------------------------+



.. _api_Menu_static:

Static Methods
--------------

None

.. _api_Menu_methods:

Methods Description
-------------------

.. _api_Menu_0ed2cf7a:

 void **Menu::aboutToHide** ()

Signal emitted when the menu is about to be hidden.

----

.. _api_Menu_ecd9af50:

 void **Menu::aboutToShow** ()

Signal emitted when the menu is about to be shown.

----

.. _api_Menu_c5d87362:

 void **Menu::addAction** (:ref:`TString<api_TString>` & *text*, :ref:`Sprite<api_Sprite>` * *icon* = nullptr)

Adds a section to the menu with the specified *text* and optional icon. Creates a clickable menu item that triggers an action when selected.

----

.. _api_Menu_320ae98c:

 void **Menu::addSeparator** ()

Adds a separator line to the menu. Creates a visual separator to group related menu items.

----

.. _api_Menu_e59b604c:

 void **Menu::addSubmenu** (:ref:`TString<api_TString>` & *text*, :ref:`Menu<api_Menu>` * *submenu*, :ref:`Sprite<api_Sprite>` * *icon* = nullptr)

Adds a *submenu* item with specified *text* and optional icon. Creates a menu item that opens a *submenu* when hovered or clicked.

----

.. _api_Menu_4fe017c6:

 :ref:`Font<api_Font>` * **Menu::font** () const

Returns the font which will be used to draw a text.

**See also** setFont().

----

.. _api_Menu_54ab13f0:

 void **Menu::hide** ()

Hides the menu.

----

.. _api_Menu_a80ef7c4:

 :ref:`Sprite<api_Sprite>` * **Menu::itemIcon** (int  *index*)

Returns the icon of the item at the specified index.

**See also** setItemIcon().

----

.. _api_Menu_a3b8967f:

 :ref:`TString<api_TString>`  **Menu::itemText** (int  *index*)

Returns the text of the item at the specified index.

**See also** setItemText().

----

.. _api_Menu_f9e538a2:

 void **Menu::setFont** (:ref:`Font<api_Font>` * *font*)

Changes the *font* which will be used to draw a text.

**See also** font().

----

.. _api_Menu_65294cbd:

 void **Menu::setItemIcon** (int  *index*, :ref:`Sprite<api_Sprite>` * *icon*)

Updates the *icon* of an existing menu item at *index* of menu position.

**See also** itemIcon().

----

.. _api_Menu_4e3fdab2:

 void **Menu::setItemText** (int  *index*, :ref:`TString<api_TString>` & *text*)

Updates the *text* of an existing menu item at *index* of menu position.

**See also** itemText().

----

.. _api_Menu_097baedc:

 void **Menu::show** (:ref:`Vector2<api_Vector2>` & *position*)

Displays the menu at the specified position.

----

.. _api_Menu_c45df920:

 void **Menu::triggered** (int  *index*)

Signal emitted when a menu with *index* item is triggered.


