.. _api_Layout:

Layout Class
============

Inherited: None

.. _api_Layout_description:

Description
-----------

The Layout class provides a flexible mechanism for managing the arrangement of widgets and child layouts within a graphical user interface. Child items can be widgets or nested layouts, and the layout can be configured with spacing, margins, and direction.



.. _api_Layout_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------------------------------------------+
|                         void | :ref:`addLayout<api_Layout_addLayout>` (Layout * layout)                                        |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                         void | :ref:`addWidget<api_Layout_addWidget>` (Widget * widget)                                        |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                          int | :ref:`count<api_Layout_count>` () const                                                         |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                          int | :ref:`direction<api_Layout_direction>` () const                                                 |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                          int | :ref:`indexOf<api_Layout_indexOf>` (const Layout * layout) const                                |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                          int | :ref:`indexOf<api_Layout_indexOf>` (const Widget * widget) const                                |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                         void | :ref:`insertLayout<api_Layout_insertLayout>` (int  index, Layout * layout)                      |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                         void | :ref:`insertWidget<api_Layout_insertWidget>` (int  index, Widget * widget)                      |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                         void | :ref:`invalidate<api_Layout_invalidate>` ()                                                     |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                         void | :ref:`removeLayout<api_Layout_removeLayout>` (Layout * layout)                                  |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                         void | :ref:`removeWidget<api_Layout_removeWidget>` (Widget * widget)                                  |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                         void | :ref:`setDirection<api_Layout_setDirection>` (int  direction)                                   |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                         void | :ref:`setMargins<api_Layout_setMargins>` (float  left, float  top, float  right, float  bottom) |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                         void | :ref:`setSpacing<api_Layout_setSpacing>` (float  spacing)                                       |
+------------------------------+-------------------------------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`sizeHint<api_Layout_sizeHint>` () const                                                   |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                        float | :ref:`spacing<api_Layout_spacing>` () const                                                     |
+------------------------------+-------------------------------------------------------------------------------------------------+



.. _api_Layout_static:

Static Methods
--------------

None

.. _api_Layout_methods:

Methods Description
-------------------

.. _api_Layout_addLayout:

 void **Layout::addLayout** (:ref:`Layout<api_Layout>` * *layout*)

Adds a child *layout* to the current *layout*.

----

.. _api_Layout_addWidget:

 void **Layout::addWidget** (:ref:`Widget<api_Widget>` * *widget*)

Adds a *widget* to the current layout.

----

.. _api_Layout_count:

 int **Layout::count** () const

Returns number of items in the layout.

----

.. _api_Layout_direction:

 int **Layout::direction** () const

Returns the layout direction (Vertical or Horizontal).

**See also** setDirection().

----

.. _api_Layout_indexOf:

 int **Layout::indexOf** (:ref:`Layout<api_Layout>` * *layout*) const

Returns the index of the specified child *layout*.

----

.. _api_Layout_indexOf:

 int **Layout::indexOf** (:ref:`Widget<api_Widget>` * *widget*) const

Returns the index of the specified *widget*.

----

.. _api_Layout_insertLayout:

 void **Layout::insertLayout** (int  *index*, :ref:`Layout<api_Layout>` * *layout*)

Inserts a child *layout* at the specified *index*. If -1, the *layout* is appended to the end.

----

.. _api_Layout_insertWidget:

 void **Layout::insertWidget** (int  *index*, :ref:`Widget<api_Widget>` * *widget*)

Inserts a *widget* at the specified *index*. If -1, the layout is appended to the end.

----

.. _api_Layout_invalidate:

 void **Layout::invalidate** ()

Marks the layout as dirty, indicating that it needs to be recomputed.

----

.. _api_Layout_removeLayout:

 void **Layout::removeLayout** (:ref:`Layout<api_Layout>` * *layout*)

Removes a child *layout* from the current *layout*.

----

.. _api_Layout_removeWidget:

 void **Layout::removeWidget** (:ref:`Widget<api_Widget>` * *widget*)

Removes a *widget* from the current layout.

----

.. _api_Layout_setDirection:

 void **Layout::setDirection** (int  *direction*)

Sets the layout *direction*.

**See also** *direction*().

----

.. _api_Layout_setMargins:

 void **Layout::setMargins** (float  *left*, float  *top*, float  *right*, float  *bottom*)

Sets the *left*, *top*, *right* and *bottom* margins for the layout.

----

.. _api_Layout_setSpacing:

 void **Layout::setSpacing** (float  *spacing*)

Sets the *spacing* between items in the layout.

**See also** *spacing*().

----

.. _api_Layout_sizeHint:

 :ref:`Vector2<api_Vector2>` **Layout::sizeHint** () const

Returns the size hint for the layout.

----

.. _api_Layout_spacing:

 float **Layout::spacing** () const

Returns the spacing between items in the layout.

**See also** setSpacing().


