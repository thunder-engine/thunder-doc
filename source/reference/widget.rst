.. _api_Widget:

Widget
======

Inherited: :ref:`Component<api_Component>`

.. _api_Widget_description:

Description
-----------

The Widget class serves as the base class for all user interface objects, providing basic functionality for handling updates, drawing, and interaction. Internal methods are marked as internal and are intended for use within the framework rather than by external code.



.. _api_Widget_public:

Public Methods
--------------

+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`addClass<api_Widget_fe19cd82>` (const TString & name)        |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`applyStyle<api_Widget_9e73c625>` ()                          |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`boundChanged<api_Widget_83c957b6>` (const Vector2 & size)    |
+--------------------------------------------+--------------------------------------------------------------------+
|                :ref:`Canvas<api_Canvas>` * | :ref:`canvas<api_Widget_3856afc9>` ()                              |
+--------------------------------------------+--------------------------------------------------------------------+
|       std::list<Widget :ref:`*><api_*>>` & | :ref:`childWidgets<api_Widget_6a31fd75>` ()                        |
+--------------------------------------------+--------------------------------------------------------------------+
|                           const StringList | :ref:`classes<api_Widget_862ca930>` () const                       |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       bool | :ref:`isSubWidget<api_Widget_3b8172ce>` () const                   |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`lower<api_Widget_f4e51a60>` ()                               |
+--------------------------------------------+--------------------------------------------------------------------+
|                :ref:`Widget<api_Widget>` * | :ref:`parentWidget<api_Widget_8792b163>` () const                  |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`raise<api_Widget_58194e60>` ()                               |
+--------------------------------------------+--------------------------------------------------------------------+
|  :ref:`RectTransform<api_RectTransform>` * | :ref:`rectTransform<api_Widget_0f4127ca>` ()                       |
+--------------------------------------------+--------------------------------------------------------------------+
|                                       void | :ref:`setEnabled<api_Widget_7fb924a6>` (bool  enabled)             |
+--------------------------------------------+--------------------------------------------------------------------+
|                :ref:`TString<api_TString>` | :ref:`style<api_Widget_c5e37694>` () const                         |
+--------------------------------------------+--------------------------------------------------------------------+
|                :ref:`Widget<api_Widget>` * | :ref:`subWidget<api_Widget_c30b7a52>` (const TString & name) const |
+--------------------------------------------+--------------------------------------------------------------------+



.. _api_Widget_static:

Static Methods
--------------

+------------------------------+--------------------------------------------+
|  :ref:`Widget<api_Widget>` * | :ref:`focusWidget<api_Widget_549f32bd>` () |
+------------------------------+--------------------------------------------+

.. _api_Widget_methods:

Methods Description
-------------------

.. _api_Widget_fe19cd82:

 void **Widget::addClass** (:ref:`TString<api_TString>` & *name*)

Adds a stylesheet class *name* attached to this widget.

----

.. _api_Widget_9e73c625:

 void **Widget::applyStyle** ()

Applies style settings assigned to widget.

----

.. _api_Widget_83c957b6:

 void **Widget::boundChanged** (:ref:`Vector2<api_Vector2>` & *size*)

Callback to respond to changes in the widget's size.

----

.. _api_Widget_3856afc9:

 :ref:`Canvas<api_Canvas>` * **Widget::canvas** ()

Returns the Canvas that is the root node in the given Widget hierarchy.

----

.. _api_Widget_6a31fd75:

std::list<Widget :ref:`*><api_*>>` & **Widget::childWidgets** ()

Returns a list of child widgets;

----

.. _api_Widget_862ca930:

const StringList **Widget::classes** () const

Returns a list of stylesheet class names attached to this widget.

----

.. _api_Widget_549f32bd:

 :ref:`Widget<api_Widget>` * **Widget::focusWidget** ()

Returns the application widget that has the keyboard input focus, or nullptr if no widget in this application has the focus.

----

.. _api_Widget_3b8172ce:

 bool **Widget::isSubWidget** () const

Returns true if widget is a part of complex widget; otherwise returns false.

----

.. _api_Widget_f4e51a60:

 void **Widget::lower** ()

Lowers the widget to the bottom of the widget's stack.

**See also** raise().

----

.. _api_Widget_8792b163:

 :ref:`Widget<api_Widget>` * **Widget::parentWidget** () const

Returns the parent Widget.

----

.. _api_Widget_58194e60:

 void **Widget::raise** ()

Raises this widget to the top of the widget's stack.

**See also** lower().

----

.. _api_Widget_0f4127ca:

 :ref:`RectTransform<api_RectTransform>` * **Widget::rectTransform** ()

Returns RectTransform component attached to parent Actor.

----

.. _api_Widget_7fb924a6:

 void **Widget::setEnabled** (bool  *enabled*)

Reimplements: Component::setEnabled(bool enabled).

Sets current state of widget to *enabled* or disabled.

----

.. _api_Widget_c5e37694:

 :ref:`TString<api_TString>`  **Widget::style** () const

Returns a textual description of widget style.

----

.. _api_Widget_c30b7a52:

 :ref:`Widget<api_Widget>` * **Widget::subWidget** (:ref:`TString<api_TString>` & *name*) const

Return a sub widget (a part of more complex widget) with specified name.


