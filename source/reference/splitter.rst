.. _api_Splitter:

Splitter
========

Inherited: :ref:`Frame<api_Frame>`

.. _api_Splitter_description:

Description
-----------

Splitter provides a container that divides its area into resizable panes. Users can drag the splitter handles to adjust the size of adjacent child widgets. Supports both horizontal and vertical orientations.



.. _api_Splitter_public:

Public Methods
--------------

+------------------------------+---------------------------------------------------------------------------+
|                         void | :ref:`addWidget<api_Splitter_bf5d673e>` (Widget * widget)                 |
+------------------------------+---------------------------------------------------------------------------+
|                          int | :ref:`count<api_Splitter_29b0134c>` ()                                    |
+------------------------------+---------------------------------------------------------------------------+
|                          int | :ref:`handleWidth<api_Splitter_cd29b536>` () const                        |
+------------------------------+---------------------------------------------------------------------------+
|                          int | :ref:`indexOf<api_Splitter_6d71842e>` (Widget * widget)                   |
+------------------------------+---------------------------------------------------------------------------+
|                         void | :ref:`insertWidget<api_Splitter_61523489>` (int  index, Widget * widget)  |
+------------------------------+---------------------------------------------------------------------------+
|                          int | :ref:`orentation<api_Splitter_b59a1738>` () const                         |
+------------------------------+---------------------------------------------------------------------------+
|  :ref:`Widget<api_Widget>` * | :ref:`replaceWidget<api_Splitter_2583e1b9>` (int  index, Widget * widget) |
+------------------------------+---------------------------------------------------------------------------+
|                         void | :ref:`setHandleWidth<api_Splitter_3e1c406d>` (int  width)                 |
+------------------------------+---------------------------------------------------------------------------+
|                         void | :ref:`setOrientation<api_Splitter_12d7e9af>` (int  orientation)           |
+------------------------------+---------------------------------------------------------------------------+
|  :ref:`Widget<api_Widget>` * | :ref:`widget<api_Splitter_28ab74c1>` (int  index)                         |
+------------------------------+---------------------------------------------------------------------------+



.. _api_Splitter_static:

Static Methods
--------------

None

.. _api_Splitter_methods:

Methods Description
-------------------

.. _api_Splitter_bf5d673e:

 void **Splitter::addWidget** (:ref:`Widget<api_Widget>` * *widget*)

Adds a *widget* to the splitter at the end.

----

.. _api_Splitter_29b0134c:

 int **Splitter::count** ()

Returns the number of child widgets in the splitter.

----

.. _api_Splitter_cd29b536:

 int **Splitter::handleWidth** () const

Returns the width (or thickness) of the splitter handle.

**See also** setHandleWidth().

----

.. _api_Splitter_6d71842e:

 int **Splitter::indexOf** (:ref:`Widget<api_Widget>` * *widget*)

Returns the index of a child widget.

----

.. _api_Splitter_61523489:

 void **Splitter::insertWidget** (int  *index*, :ref:`Widget<api_Widget>` * *widget*)

Inserts a *widget* at the specified index.

----

.. _api_Splitter_b59a1738:

 int **Splitter::orentation** () const

Returns the current orientation of the splitter.

----

.. _api_Splitter_2583e1b9:

 :ref:`Widget<api_Widget>` * **Splitter::replaceWidget** (int  *index*, :ref:`Widget<api_Widget>` * *widget*)

Replaces a *widget* at the specified index.

----

.. _api_Splitter_3e1c406d:

 void **Splitter::setHandleWidth** (int  *width*)

Sets the *width* (or thickness) of the splitter handle.

**See also** handleWidth().

----

.. _api_Splitter_12d7e9af:

 void **Splitter::setOrientation** (int  *orientation*)

Sets the *orientation* of the splitter.

----

.. _api_Splitter_28ab74c1:

 :ref:`Widget<api_Widget>` * **Splitter::widget** (int  *index*)

Returns the widget at the specified index.


