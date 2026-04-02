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
|                                       void | :ref:`addClass<api_Widget_a6e25f9d>` (const TString & name)        |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`applyStyle<api_Widget_497820c5>` ()                          |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`boundChanged<api_Widget_19605dfa>` (const Vector2 & size)    |
+--------------------------------------------+--------------------------------------------------------------------+
|       std::list<Widget :ref:`*><api_*>>` & | :ref:`childWidgets<api_Widget_249d13b0>` ()                        |
+--------------------------------------------+--------------------------------------------------------------------+
|  const :ref:`StringList<api_StringList>` & | :ref:`classes<api_Widget_a0b8761e>` () const                       |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       bool | :ref:`isSubWidget<api_Widget_3ed675c4>` () const                   |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`lower<api_Widget_504d681c>` ()                               |
+--------------------------------------------+--------------------------------------------------------------------+
|                :ref:`Widget<api_Widget>` * | :ref:`parentWidget<api_Widget_3b9c072e>` () const                  |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`raise<api_Widget_420c3b95>` ()                               |
+--------------------------------------------+--------------------------------------------------------------------+
|  :ref:`RectTransform<api_RectTransform>` * | :ref:`rectTransform<api_Widget_2618d70a>` ()                       |
+--------------------------------------------+--------------------------------------------------------------------+
|                :ref:`TString<api_TString>` | :ref:`style<api_Widget_6bd2a490>` () const                         |
+--------------------------------------------+--------------------------------------------------------------------+
|                :ref:`Widget<api_Widget>` * | :ref:`subWidget<api_Widget_2ec1307f>` (const TString & name) const |
+--------------------------------------------+--------------------------------------------------------------------+



.. _api_Widget_static:

Static Methods
--------------

+------------------------------+--------------------------------------------+
|  :ref:`Widget<api_Widget>` * | :ref:`focusWidget<api_Widget_ebf31da9>` () |
+------------------------------+--------------------------------------------+

.. _api_Widget_methods:

Methods Description
-------------------

.. _api_Widget_a6e25f9d:

 void **Widget::addClass** (:ref:`TString<api_TString>` & *name*)

Adds a stylesheet class *name* attached to this widget.

----

.. _api_Widget_497820c5:

 void **Widget::applyStyle** ()

Applies style settings assigned to widget.

----

.. _api_Widget_19605dfa:

 void **Widget::boundChanged** (:ref:`Vector2<api_Vector2>` & *size*)

Callback to respond to changes in the widget's *size*.

----

.. _api_Widget_249d13b0:

std::list<Widget :ref:`*><api_*>>` & **Widget::childWidgets** ()

Returns a list of child widgets;

----

.. _api_Widget_a0b8761e:

const :ref:`StringList<api_StringList>` & **Widget::classes** () const

Returns a list of stylesheet class names attached to this widget.

----

.. _api_Widget_ebf31da9:

 :ref:`Widget<api_Widget>` * **Widget::focusWidget** ()

Returns the application widget that has the keyboard input focus, or nullptr if no widget in this application has the focus.

----

.. _api_Widget_3ed675c4:

 bool **Widget::isSubWidget** () const

Returns true if widget is a part of complex widget; otherwise returns false.

----

.. _api_Widget_504d681c:

 void **Widget::lower** ()

Lowers the widget to the bottom of the widget's stack.

**See also** raise().

----

.. _api_Widget_3b9c072e:

 :ref:`Widget<api_Widget>` * **Widget::parentWidget** () const

Returns the parent Widget.

----

.. _api_Widget_420c3b95:

 void **Widget::raise** ()

Raises this widget to the top of the widget's stack.

**See also** lower().

----

.. _api_Widget_2618d70a:

 :ref:`RectTransform<api_RectTransform>` * **Widget::rectTransform** ()

Returns RectTransform component attached to parent Actor.

----

.. _api_Widget_6bd2a490:

 :ref:`TString<api_TString>`  **Widget::style** () const

Returns a textual description of widget style.

----

.. _api_Widget_2ec1307f:

 :ref:`Widget<api_Widget>` * **Widget::subWidget** (:ref:`TString<api_TString>` & *name*) const

Return a sub widget (a part of more complex widget) with specified *name*.


