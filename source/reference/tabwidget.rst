.. _api_TabWidget:

TabWidget
=========

Inherited: :ref:`Widget<api_Widget>`

.. _api_TabWidget_description:

Description
-----------

The TabWidget class is a container widget that organizes multiple pages into a tabbed interface. Each tab has a label and can contain any widget as its content.



.. _api_TabWidget_public:

Public Methods
--------------

+------------------------------+------------------------------------------------------------------------------------------------+
|                          int | :ref:`addTab<api_TabWidget_8f41a9b5>` (const TString & title, Widget * content)                |
+------------------------------+------------------------------------------------------------------------------------------------+
|                          int | :ref:`count<api_TabWidget_710a3b85>` () const                                                  |
+------------------------------+------------------------------------------------------------------------------------------------+
|                          int | :ref:`currentIndex<api_TabWidget_17d950af>` () const                                           |
+------------------------------+------------------------------------------------------------------------------------------------+
|                          int | :ref:`insertTab<api_TabWidget_a50c4bde>` (int  index, const TString & title, Widget * content) |
+------------------------------+------------------------------------------------------------------------------------------------+
|                         void | :ref:`removeTab<api_TabWidget_9f18eda7>` (int  index)                                          |
+------------------------------+------------------------------------------------------------------------------------------------+
|                         void | :ref:`setContentArea<api_TabWidget_a9df156e>` (Frame * area)                                   |
+------------------------------+------------------------------------------------------------------------------------------------+
|                         void | :ref:`setCurrentIndex<api_TabWidget_a63b782c>` (int  index)                                    |
+------------------------------+------------------------------------------------------------------------------------------------+
|                         void | :ref:`setTabBar<api_TabWidget_1d402c7b>` (TabBar * bar)                                        |
+------------------------------+------------------------------------------------------------------------------------------------+
|                         void | :ref:`setTabTitle<api_TabWidget_3ebd8ca2>` (int  index, const TString & title)                 |
+------------------------------+------------------------------------------------------------------------------------------------+
|                         void | :ref:`setTabsClosable<api_TabWidget_4fe51b87>` (bool  closeable)                               |
+------------------------------+------------------------------------------------------------------------------------------------+
|  :ref:`Widget<api_Widget>` * | :ref:`tabContent<api_TabWidget_091f5ba2>` (int  index) const                                   |
+------------------------------+------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`tabTitle<api_TabWidget_cfb7630e>` (int  index) const                                     |
+------------------------------+------------------------------------------------------------------------------------------------+
|                         bool | :ref:`tabsClosable<api_TabWidget_b95263f8>` () const                                           |
+------------------------------+------------------------------------------------------------------------------------------------+



.. _api_TabWidget_static:

Static Methods
--------------

None

.. _api_TabWidget_methods:

Methods Description
-------------------

.. _api_TabWidget_8f41a9b5:

 int **TabWidget::addTab** (:ref:`TString<api_TString>` & *title*, :ref:`Widget<api_Widget>` * *content*)

Adds a new tab with the specified *title* and returns its index. The *content* widget will be displayed when this tab is selected.

----

.. _api_TabWidget_710a3b85:

 int **TabWidget::count** () const

Returns the number of tabs.

----

.. _api_TabWidget_17d950af:

 int **TabWidget::currentIndex** () const

Returns the index of the currently selected tab, or -1 if no tab is selected.

**See also** setCurrentIndex().

----

.. _api_TabWidget_a50c4bde:

 int **TabWidget::insertTab** (int  *index*, :ref:`TString<api_TString>` & *title*, :ref:`Widget<api_Widget>` * *content*)

Inserts a new tab at the specified *index* with the given *title* and content.

----

.. _api_TabWidget_9f18eda7:

 void **TabWidget::removeTab** (int  *index*)

Removes the tab at the specified index.

----

.. _api_TabWidget_a9df156e:

 void **TabWidget::setContentArea** (:ref:`Frame<api_Frame>` * *area*)

Sets the content *area* associated with TabWidget.

----

.. _api_TabWidget_a63b782c:

 void **TabWidget::setCurrentIndex** (int  *index*)

Sets the currently selected tab by index. Emits currentChanged signal if the selection changes.

**See also** currentIndex().

----

.. _api_TabWidget_1d402c7b:

 void **TabWidget::setTabBar** (:ref:`TabBar<api_TabBar>` * *bar*)

Sets the tab *bar* associated with TabWidget.

----

.. _api_TabWidget_3ebd8ca2:

 void **TabWidget::setTabTitle** (int  *index*, :ref:`TString<api_TString>` & *title*)

Sets the *title* of the tab at the specified index.

**See also** tabTitle().

----

.. _api_TabWidget_4fe51b87:

 void **TabWidget::setTabsClosable** (bool  *closeable*)

Sets whether tabs can be closed by the user. Use parameter *closeable* true if tabs can be closed, false otherwise.

**See also** tabsClosable().

----

.. _api_TabWidget_091f5ba2:

 :ref:`Widget<api_Widget>` * **TabWidget::tabContent** (int  *index*) const

Returns the content widget of the tab at the specified index.

----

.. _api_TabWidget_cfb7630e:

 :ref:`TString<api_TString>`  **TabWidget::tabTitle** (int  *index*) const

Returns the title of the tab at the specified index.

**See also** setTabTitle().

----

.. _api_TabWidget_b95263f8:

 bool **TabWidget::tabsClosable** () const

Returns true if tabs can be closed.

**See also** setTabsClosable().


