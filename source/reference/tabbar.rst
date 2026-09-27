.. _api_TabBar:

TabBar
======

Inherited: :ref:`Widget<api_Widget>`

.. _api_TabBar_description:

Description
-----------

TabBar is a widget that displays a list of tabs, allowing the user to select one. Each tab has a title and can be clicked to activate it. The TabBar automatically manages the layout and positioning of its tabs.



.. _api_TabBar_public:

Public Methods
--------------

+------------------------------+-----------------------------------------------------------------------------+
|                          int | :ref:`addTab<api_TabBar_58a1b9e6>` (const TString & title)                  |
+------------------------------+-----------------------------------------------------------------------------+
|                          int | :ref:`count<api_TabBar_abc73f0e>` () const                                  |
+------------------------------+-----------------------------------------------------------------------------+
|                         void | :ref:`currentChanged<api_TabBar_908c32fe>` (int  index)                     |
+------------------------------+-----------------------------------------------------------------------------+
|                          int | :ref:`currentIndex<api_TabBar_8c36e1af>` () const                           |
+------------------------------+-----------------------------------------------------------------------------+
|                          int | :ref:`indexOf<api_TabBar_475cb26f>` (Button * button) const                 |
+------------------------------+-----------------------------------------------------------------------------+
|                          int | :ref:`insertTab<api_TabBar_ace27143>` (int  index, const TString & title)   |
+------------------------------+-----------------------------------------------------------------------------+
|                         void | :ref:`onCloseButtonClicked<api_TabBar_a41f9edb>` ()                         |
+------------------------------+-----------------------------------------------------------------------------+
|                         void | :ref:`onTabClicked<api_TabBar_9c5643b7>` ()                                 |
+------------------------------+-----------------------------------------------------------------------------+
|                         void | :ref:`removeTab<api_TabBar_c017f48a>` (int  index)                          |
+------------------------------+-----------------------------------------------------------------------------+
|                         void | :ref:`removeTab<api_TabBar_3b5f9da6>` (Button * button)                     |
+------------------------------+-----------------------------------------------------------------------------+
|                         void | :ref:`setCurrentIndex<api_TabBar_c3184095>` (int  index)                    |
+------------------------------+-----------------------------------------------------------------------------+
|                         void | :ref:`setTabCornerRadius<api_TabBar_6754e3ac>` (const Vector4 & radius)     |
+------------------------------+-----------------------------------------------------------------------------+
|                         void | :ref:`setTabTitle<api_TabBar_f2ab63de>` (int  index, const TString & title) |
+------------------------------+-----------------------------------------------------------------------------+
|                         void | :ref:`setTabsClosable<api_TabBar_bc9284e0>` (bool  closable)                |
+------------------------------+-----------------------------------------------------------------------------+
|  :ref:`Button<api_Button>` * | :ref:`tabButton<api_TabBar_bf05d629>` (int  index) const                    |
+------------------------------+-----------------------------------------------------------------------------+
|                         void | :ref:`tabCloseRequested<api_TabBar_72cd3a80>` (int  index)                  |
+------------------------------+-----------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`tabCornerRadius<api_TabBar_4a23efc1>` () const                        |
+------------------------------+-----------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`tabTitle<api_TabBar_1978eb64>` (int  index) const                     |
+------------------------------+-----------------------------------------------------------------------------+
|                         bool | :ref:`tabsClosable<api_TabBar_d120f75a>` () const                           |
+------------------------------+-----------------------------------------------------------------------------+



.. _api_TabBar_static:

Static Methods
--------------

None

.. _api_TabBar_methods:

Methods Description
-------------------

.. _api_TabBar_58a1b9e6:

 int **TabBar::addTab** (:ref:`TString<api_TString>` & *title*)

Adds a new tab with the specified *title* and returns its index.

----

.. _api_TabBar_abc73f0e:

 int **TabBar::count** () const

Returns the number of tabs.

----

.. _api_TabBar_908c32fe:

 void **TabBar::currentChanged** (int  *index*)

This signal is emitted when the tab bar's current tab changes. The new current has the given index, or -1 if there isn't a new one

----

.. _api_TabBar_8c36e1af:

 int **TabBar::currentIndex** () const

Returns the index of the currently selected tab, or -1 if no tab is selected.

**See also** setCurrentIndex().

----

.. _api_TabBar_475cb26f:

 int **TabBar::indexOf** (:ref:`Button<api_Button>` * *button*) const

Returns the index of the tab that contains the specified button, or -1 if not found.

----

.. _api_TabBar_ace27143:

 int **TabBar::insertTab** (int  *index*, :ref:`TString<api_TString>` & *title*)

Inserts a new tab at the specified *index* with the given title.

----

.. _api_TabBar_a41f9edb:

 void **TabBar::onCloseButtonClicked** ()

Called when a tab close button clicked.

----

.. _api_TabBar_9c5643b7:

 void **TabBar::onTabClicked** ()

Called when a tab is clicked.

----

.. _api_TabBar_c017f48a:

 void **TabBar::removeTab** (int  *index*)

Removes the tab at the specified index.

----

.. _api_TabBar_3b5f9da6:

 void **TabBar::removeTab** (:ref:`Button<api_Button>` * *button*)

Removes the tab associated with the given button.

----

.. _api_TabBar_c3184095:

 void **TabBar::setCurrentIndex** (int  *index*)

Sets the currently selected tab by index. Emits currentChanged signal if the selection changes.

**See also** currentIndex().

----

.. _api_TabBar_6754e3ac:

 void **TabBar::setTabCornerRadius** (:ref:`Vector4<api_Vector4>` & *radius*)

Sets the corner *radius* for tabs.

**See also** tabCornerRadius().

----

.. _api_TabBar_f2ab63de:

 void **TabBar::setTabTitle** (int  *index*, :ref:`TString<api_TString>` & *title*)

Sets the *title* of the tab at the specified index.

**See also** tabTitle().

----

.. _api_TabBar_bc9284e0:

 void **TabBar::setTabsClosable** (bool  *closable*)

Sets whether tabs can be closed by the user. Use parameter *closable* true if tabs can be closed, false otherwise.

**See also** tabsClosable().

----

.. _api_TabBar_bf05d629:

 :ref:`Button<api_Button>` * **TabBar::tabButton** (int  *index*) const

Returns the button widget for the tab at the specified index.

----

.. _api_TabBar_72cd3a80:

 void **TabBar::tabCloseRequested** (int  *index*)

This signal is emitted when the close button on a tab is clicked. The *index* is the *index* that should be removed.

----

.. _api_TabBar_4a23efc1:

 :ref:`Vector4<api_Vector4>`  **TabBar::tabCornerRadius** () const

Returns the corner radius for tabs.

**See also** setTabCornerRadius().

----

.. _api_TabBar_1978eb64:

 :ref:`TString<api_TString>`  **TabBar::tabTitle** (int  *index*) const

Returns the title of the tab at the specified index.

**See also** setTabTitle().

----

.. _api_TabBar_d120f75a:

 bool **TabBar::tabsClosable** () const

Returns true if tabs can be closed.

**See also** setTabsClosable().


