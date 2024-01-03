.. _api_Widget:

Widget Class
============

Inherited: :doc:`NativeBehaviour<api_NativeBehaviour>`

.. _api_Widget_description:

Description
-----------

The Widget class serves as the base class for all user interface objects, providing basic functionality for handling updates, drawing, and interaction. Internal methods are marked as internal and are intended for use within the framework rather than by external code.



.. _api_Widget_public:

Public Methods
--------------

+--------------------------------------------+---------------------------------------------------------------------+
|                                       void | :ref:`boundChanged<api_Widget_boundChanged>` (const Vector2 & size) |
+--------------------------------------------+---------------------------------------------------------------------+
|                                       bool | :ref:`isVisible<api_Widget_isVisible>` () const                     |
+--------------------------------------------+---------------------------------------------------------------------+
|                                       void | :ref:`lower<api_Widget_lower>` ()                                   |
+--------------------------------------------+---------------------------------------------------------------------+
|                :ref:`Widget<api_Widget>` * | :ref:`parentWidget<api_Widget_parentWidget>` ()                     |
+--------------------------------------------+---------------------------------------------------------------------+
|                                       void | :ref:`raise<api_Widget_raise>` ()                                   |
+--------------------------------------------+---------------------------------------------------------------------+
|  :ref:`RectTransform<api_RectTransform>` * | :ref:`rectTransform<api_Widget_rectTransform>` () const             |
+--------------------------------------------+---------------------------------------------------------------------+



.. _api_Widget_static:

Static Methods
--------------

+------------------------------+-----------------------------------------------+
|  :ref:`Widget<api_Widget>` * | :ref:`focusWidget<api_Widget_focusWidget>` () |
+------------------------------+-----------------------------------------------+

.. _api_Widget_methods:

Methods Description
-------------------

.. _api_Widget_boundChanged:

 void **Widget::boundChanged** (:ref:`Vector2<api_Vector2>` & *size*)

Callback to respond to changes in the widget's *size*.

----

.. _api_Widget_focusWidget:

 :ref:`Widget<api_Widget>`* **Widget::focusWidget** ()

Returns the application widget that has the keyboard input focus, or nullptr if no widget in this application has the focus.

----

.. _api_Widget_isVisible:

 bool **Widget::isVisible** () const

Returns true if widget is visible on the screen; otherwise, false.

----

.. _api_Widget_lower:

 void **Widget::lower** ()

Lowers the widget to the bottom of the widget's stack.

**See also** raise().

----

.. _api_Widget_parentWidget:

 :ref:`Widget<api_Widget>`* **Widget::parentWidget** ()

Returns the parent Widget.

----

.. _api_Widget_raise:

 void **Widget::raise** ()

Raises this widget to the top of the widget's stack.

**See also** lower().

----

.. _api_Widget_rectTransform:

 :ref:`RectTransform<api_RectTransform>`* **Widget::rectTransform** () const

Returns RectTransform component attached to parent Actor.


