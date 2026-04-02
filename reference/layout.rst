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

+--------------------------------------------+-------------------------------------------------------------------------------------+
|                                       void | :ref:`addTransform<api_Layout_026efd7a>` (RectTransform * transform)                |
+--------------------------------------------+-------------------------------------------------------------------------------------+
|                                        int | :ref:`count<api_Layout_69a13e47>` () const                                          |
+--------------------------------------------+-------------------------------------------------------------------------------------+
|                                        int | :ref:`indexOf<api_Layout_da8c2309>` (const RectTransform * transform) const         |
+--------------------------------------------+-------------------------------------------------------------------------------------+
|                                       void | :ref:`insertTransform<api_Layout_9cfe3d6b>` (int  index, RectTransform * transform) |
+--------------------------------------------+-------------------------------------------------------------------------------------+
|                                       void | :ref:`invalidate<api_Layout_9cbd05f6>` ()                                           |
+--------------------------------------------+-------------------------------------------------------------------------------------+
|                                        int | :ref:`orientation<api_Layout_1af5460b>` () const                                    |
+--------------------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`RectTransform<api_RectTransform>` * | :ref:`rectTransform<api_Layout_bd2f7a30>` ()                                        |
+--------------------------------------------+-------------------------------------------------------------------------------------+
|                                       void | :ref:`removeTransform<api_Layout_5ae01d69>` (RectTransform * transform)             |
+--------------------------------------------+-------------------------------------------------------------------------------------+
|                                       void | :ref:`setOrientation<api_Layout_9513af0b>` (int  orientation)                       |
+--------------------------------------------+-------------------------------------------------------------------------------------+
|                                       void | :ref:`setSpacing<api_Layout_39f2db15>` (int  spacing)                               |
+--------------------------------------------+-------------------------------------------------------------------------------------+
|                :ref:`Vector2<api_Vector2>` | :ref:`sizeHint<api_Layout_e9265f0a>` ()                                             |
+--------------------------------------------+-------------------------------------------------------------------------------------+
|                                        int | :ref:`spacing<api_Layout_802f4d5e>` () const                                        |
+--------------------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`RectTransform<api_RectTransform>` * | :ref:`transformAt<api_Layout_9b5843ac>` (int  index)                                |
+--------------------------------------------+-------------------------------------------------------------------------------------+



.. _api_Layout_static:

Static Methods
--------------

None

.. _api_Layout_methods:

Methods Description
-------------------

.. _api_Layout_026efd7a:

 void **Layout::addTransform** (:ref:`RectTransform<api_RectTransform>` * *transform*)

Adds a *transform* to the current layout.

----

.. _api_Layout_69a13e47:

 int **Layout::count** () const

Returns number of items in the layout.

----

.. _api_Layout_da8c2309:

 int **Layout::indexOf** (:ref:`RectTransform<api_RectTransform>` * *transform*) const

Returns the index of the specified *transform*.

----

.. _api_Layout_9cfe3d6b:

 void **Layout::insertTransform** (int  *index*, :ref:`RectTransform<api_RectTransform>` * *transform*)

Inserts a *transform* at the specified *index*. If -1, the layout is appended to the end.

----

.. _api_Layout_9cbd05f6:

 void **Layout::invalidate** ()

Marks the layout as dirty, indicating that it needs to be recomputed.

----

.. _api_Layout_1af5460b:

 int **Layout::orientation** () const

Returns the layout orientation (Vertical or Horizontal).

**See also** setOrientation().

----

.. _api_Layout_bd2f7a30:

 :ref:`RectTransform<api_RectTransform>` * **Layout::rectTransform** ()

Returns the parent rect transform of this layout, or nullptr if this layout is not installed on any rect transform. If the layout is a sub-layout, this function returns the parent rect transform of the parent layout.

----

.. _api_Layout_5ae01d69:

 void **Layout::removeTransform** (:ref:`RectTransform<api_RectTransform>` * *transform*)

Removes a *transform* from the current layout.

----

.. _api_Layout_9513af0b:

 void **Layout::setOrientation** (int  *orientation*)

Sets the layout *orientation*.

**See also** *orientation*().

----

.. _api_Layout_39f2db15:

 void **Layout::setSpacing** (int  *spacing*)

Sets the *spacing* between items in the layout.

**See also** *spacing*().

----

.. _api_Layout_e9265f0a:

 :ref:`Vector2<api_Vector2>`  **Layout::sizeHint** ()

Returns the size hint for the layout.

----

.. _api_Layout_802f4d5e:

 int **Layout::spacing** () const

Returns the spacing between items in the layout.

**See also** setSpacing().

----

.. _api_Layout_9b5843ac:

 :ref:`RectTransform<api_RectTransform>` * **Layout::transformAt** (int  *index*)

Returns transform located at *index*.


