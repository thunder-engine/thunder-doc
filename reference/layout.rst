.. _api_Layout:

Layout
======

Inherited: None

.. _api_Layout_description:

Description
-----------

The Layout class is a base class used for managing the layout and positioning of widgets within a graphical user interface (GUI). It provides a structured way to organize UI elements, ensuring that they are placed efficiently and consistently on the screen. The Layout class is essential for developers who need to arrange multiple components (such as buttons, labels, text fields, etc.) in a clean and organized manner.



.. _api_Layout_public:

Public Methods
--------------

+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`addLayout<api_Layout_addLayout>` (Layout * layout)                                   |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`addTransform<api_Layout_addTransform>` (RectTransform * transform)                   |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                        int | :ref:`count<api_Layout_count>` () const                                                    |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                        int | :ref:`direction<api_Layout_direction>` () const                                            |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                        int | :ref:`indexOf<api_Layout_indexOf>` (const Layout * layout) const                           |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                        int | :ref:`indexOf<api_Layout_indexOf>` (const RectTransform * transform) const                 |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`insertLayout<api_Layout_insertLayout>` (int  index, Layout * layout)                 |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`insertTransform<api_Layout_insertTransform>` (int  index, RectTransform * transform) |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`invalidate<api_Layout_invalidate>` ()                                                |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`RectTransform<api_RectTransform>` * | :ref:`rectTransform<api_Layout_rectTransform>` ()                                          |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`removeLayout<api_Layout_removeLayout>` (Layout * layout)                             |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`removeTransform<api_Layout_removeTransform>` (RectTransform * transform)             |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`setDirection<api_Layout_setDirection>` (int  direction)                              |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                       void | :ref:`setSpacing<api_Layout_setSpacing>` (float  spacing)                                  |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                :ref:`Vector2<api_Vector2>` | :ref:`sizeHint<api_Layout_sizeHint>` ()                                                    |
+--------------------------------------------+--------------------------------------------------------------------------------------------+
|                                      float | :ref:`spacing<api_Layout_spacing>` () const                                                |
+--------------------------------------------+--------------------------------------------------------------------------------------------+



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

.. _api_Layout_addTransform:

 void **Layout::addTransform** (:ref:`RectTransform<api_RectTransform>` * *transform*)

Adds a *transform* to the current layout.

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

 int **Layout::indexOf** (:ref:`RectTransform<api_RectTransform>` * *transform*) const

Returns the index of the specified *transform*.

----

.. _api_Layout_insertLayout:

 void **Layout::insertLayout** (int  *index*, :ref:`Layout<api_Layout>` * *layout*)

Inserts a child *layout* at the specified *index*. If -1, the *layout* is appended to the end.

----

.. _api_Layout_insertTransform:

 void **Layout::insertTransform** (int  *index*, :ref:`RectTransform<api_RectTransform>` * *transform*)

Inserts a *transform* at the specified *index*. If -1, the layout is appended to the end.

----

.. _api_Layout_invalidate:

 void **Layout::invalidate** ()

Marks the layout as dirty, indicating that it needs to be recomputed.

----

.. _api_Layout_rectTransform:

 :ref:`RectTransform<api_RectTransform>` * **Layout::rectTransform** ()

Returns the parent rect transform of this layout, or nullptr if this layout is not installed on any rect transform. If the layout is a sub-layout, this function returns the parent rect transform of the parent layout.

----

.. _api_Layout_removeLayout:

 void **Layout::removeLayout** (:ref:`Layout<api_Layout>` * *layout*)

Removes a child *layout* from the current *layout*.

----

.. _api_Layout_removeTransform:

 void **Layout::removeTransform** (:ref:`RectTransform<api_RectTransform>` * *transform*)

Removes a *transform* from the current layout.

----

.. _api_Layout_setDirection:

 void **Layout::setDirection** (int  *direction*)

Sets the layout *direction*.

**See also** *direction*().

----

.. _api_Layout_setSpacing:

 void **Layout::setSpacing** (float  *spacing*)

Sets the *spacing* between items in the layout.

**See also** *spacing*().

----

.. _api_Layout_sizeHint:

 :ref:`Vector2<api_Vector2>`  **Layout::sizeHint** ()

Returns the size hint for the layout.

----

.. _api_Layout_spacing:

 float **Layout::spacing** () const

Returns the spacing between items in the layout.

**See also** setSpacing().


