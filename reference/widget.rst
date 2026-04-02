.. _api_Widget:

Widget
======

Inherited: None

.. _api_Widget_description:

Description
-----------

The Widget class serves as the base class for all user interface objects, providing basic functionality for handling updates, drawing, and interaction. Internal methods are marked as internal and are intended for use within the framework rather than by external code.



.. _api_Widget_public:

Public Methods
--------------

+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`addClass<api_Widget_9514f608>` (const TString & name)        |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`applyStyle<api_Widget_d4afb150>` ()                          |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`boundChanged<api_Widget_a572f493>` (const Vector2 & size)    |
+--------------------------------------------+--------------------------------------------------------------------+
|       std::list<Widget :ref:`*><api_*>>` & | :ref:`childWidgets<api_Widget_70aef241>` ()                        |
+--------------------------------------------+--------------------------------------------------------------------+
|                           const StringList | :ref:`classes<api_Widget_7b4d59a0>` () const                       |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       bool | :ref:`isSubWidget<api_Widget_67af8e0d>` () const                   |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`lower<api_Widget_db639fe5>` ()                               |
+--------------------------------------------+--------------------------------------------------------------------+
|                :ref:`Widget<api_Widget>` * | :ref:`parentWidget<api_Widget_7a4d8e65>` () const                  |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`raise<api_Widget_c3f9205e>` ()                               |
+--------------------------------------------+--------------------------------------------------------------------+
|  :ref:`RectTransform<api_RectTransform>` * | :ref:`rectTransform<api_Widget_29c40a37>` ()                       |
+--------------------------------------------+--------------------------------------------------------------------+
|                :ref:`TString<api_TString>` | :ref:`style<api_Widget_e5a27d64>` () const                         |
+--------------------------------------------+--------------------------------------------------------------------+
|                :ref:`Widget<api_Widget>` * | :ref:`subWidget<api_Widget_9ba65832>` (const TString & name) const |
+--------------------------------------------+--------------------------------------------------------------------+



.. _api_Widget_static:

Static Methods
--------------

+------------------------------+--------------------------------------------+
|  :ref:`Widget<api_Widget>` * | :ref:`focusWidget<api_Widget_c752dfba>` () |
+------------------------------+--------------------------------------------+

.. _api_Widget_methods:

Methods Description
-------------------

.. _api_Widget_9514f608:

 void **Widget::addClass** (:ref:`TString<api_TString>` & *name*)

Adds a stylesheet class *name* attached to this widget.

----

.. _api_Widget_d4afb150:

 void **Widget::applyStyle** ()

Applies style settings assigned to widget.

----

.. _api_Widget_a572f493:

 void **Widget::boundChanged** (:ref:`Vector2<api_Vector2>` & *size*)

Callback to respond to changes in the widget's size.

----

.. _api_Widget_70aef241:

std::list<Widget :ref:`*><api_*>>` & **Widget::childWidgets** ()

Returns a list of child widgets;

----

.. _api_Widget_7b4d59a0:

const StringList **Widget::classes** () const

Returns a list of stylesheet class names attached to this widget.

----

.. _api_Widget_c752dfba:

 :ref:`Widget<api_Widget>` * **Widget::focusWidget** ()

Returns the application widget that has the keyboard input focus, or nullptr if no widget in this application has the focus.

----

.. _api_Widget_67af8e0d:

 bool **Widget::isSubWidget** () const

Returns true if widget is a part of complex widget; otherwise returns false.

----

.. _api_Widget_db639fe5:

 void **Widget::lower** ()

Lowers the widget to the bottom of the widget's stack.

**See also** raise().

----

.. _api_Widget_7a4d8e65:

 :ref:`Widget<api_Widget>` * **Widget::parentWidget** () const

Returns the parent Widget.

----

.. _api_Widget_c3f9205e:

 void **Widget::raise** ()

Raises this widget to the top of the widget's stack.

**See also** lower().

----

.. _api_Widget_29c40a37:

 :ref:`RectTransform<api_RectTransform>` * **Widget::rectTransform** ()

Returns RectTransform component attached to parent Actor.

----

.. _api_Widget_e5a27d64:

 :ref:`TString<api_TString>`  **Widget::style** () const

Returns a textual description of widget style.

----

.. _api_Widget_9ba65832:

 :ref:`Widget<api_Widget>` * **Widget::subWidget** (:ref:`TString<api_TString>` & *name*) const

Return a sub widget (a part of more complex widget) with specified name.


