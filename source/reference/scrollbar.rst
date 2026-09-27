.. _api_ScrollBar:

ScrollBar
=========

Inherited: :ref:`AbstractSlider<api_AbstractSlider>`

.. _api_ScrollBar_description:

Description
-----------

ScrollBar provides a typical scroll bar with arrow buttons and a draggable knob. Supports both horizontal and vertical orientations.



.. _api_ScrollBar_public:

Public Methods
--------------

+------------------------------+------------------------------------------------------------------+
|  :ref:`Widget<api_Widget>` * | :ref:`backArrow<api_ScrollBar_db17ae64>` () const                |
+------------------------------+------------------------------------------------------------------+
|  :ref:`Widget<api_Widget>` * | :ref:`frontArrow<api_ScrollBar_e516d349>` () const               |
+------------------------------+------------------------------------------------------------------+
|                          int | :ref:`pageStep<api_ScrollBar_62b3af74>` () const                 |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setBackArrow<api_ScrollBar_1523b4d6>` (Widget * arrow)     |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setFrontArrow<api_ScrollBar_52df4e0c>` (Widget * arrow)    |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setMaximum<api_ScrollBar_453be90c>` (int  value)           |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setMinimum<api_ScrollBar_68be7a9f>` (int  value)           |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setOrientation<api_ScrollBar_a3c58104>` (int  orientation) |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setPageStep<api_ScrollBar_dba5f1c0>` (int  page)           |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setSingleStep<api_ScrollBar_a3817e25>` (int  step)         |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setValue<api_ScrollBar_85b921de>` (int  value)             |
+------------------------------+------------------------------------------------------------------+
|                          int | :ref:`singleStep<api_ScrollBar_86e47952>` () const               |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`stepBack<api_ScrollBar_cb8f23a4>` ()                       |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`stepFront<api_ScrollBar_ca165ed7>` ()                      |
+------------------------------+------------------------------------------------------------------+



.. _api_ScrollBar_static:

Static Methods
--------------

None

.. _api_ScrollBar_methods:

Methods Description
-------------------

.. _api_ScrollBar_db17ae64:

 :ref:`Widget<api_Widget>` * **ScrollBar::backArrow** () const

Returns the back arrow widget.

**See also** setBackArrow().

----

.. _api_ScrollBar_e516d349:

 :ref:`Widget<api_Widget>` * **ScrollBar::frontArrow** () const

Returns the front arrow widget.

**See also** setFrontArrow().

----

.. _api_ScrollBar_62b3af74:

 int **ScrollBar::pageStep** () const

Returns the page step size. The page step determines how much the value changes when clicking

**See also** setPageStep().

----

.. _api_ScrollBar_1523b4d6:

 void **ScrollBar::setBackArrow** (:ref:`Widget<api_Widget>` * *arrow*)

Sets the back *arrow* widget.

**See also** backArrow().

----

.. _api_ScrollBar_52df4e0c:

 void **ScrollBar::setFrontArrow** (:ref:`Widget<api_Widget>` * *arrow*)

Sets the front *arrow* widget.

**See also** frontArrow().

----

.. _api_ScrollBar_453be90c:

 void **ScrollBar::setMaximum** (int  *value*)

Reimplements: AbstractSlider::setMaximum(int maximum).

Sets the maximum *value* of the scroll bar.

----

.. _api_ScrollBar_68be7a9f:

 void **ScrollBar::setMinimum** (int  *value*)

Reimplements: AbstractSlider::setMinimum(int minimum).

Sets the minimum *value* of the scroll bar.

----

.. _api_ScrollBar_a3c58104:

 void **ScrollBar::setOrientation** (int  *orientation*)

Reimplements: AbstractSlider::setOrientation(int orientation).

Sets the *orientation* of the scroll bar.

----

.. _api_ScrollBar_dba5f1c0:

 void **ScrollBar::setPageStep** (int  *page*)

Sets the *page* step size. The *page* step determines how much the value changes when clicking on the track area.

**See also** pageStep().

----

.. _api_ScrollBar_a3817e25:

 void **ScrollBar::setSingleStep** (int  *step*)

Sets the single *step* size. The single *step* determines how much the value changes when clicking the arrow buttons.

**See also** singleStep().

----

.. _api_ScrollBar_85b921de:

 void **ScrollBar::setValue** (int  *value*)

Reimplements: AbstractSlider::setValue(int value).

Sets the current *value* of the scroll bar.

----

.. _api_ScrollBar_86e47952:

 int **ScrollBar::singleStep** () const

Returns the single step size.

**See also** setSingleStep().

----

.. _api_ScrollBar_cb8f23a4:

 void **ScrollBar::stepBack** ()

Moves the value backward by one single step.

----

.. _api_ScrollBar_ca165ed7:

 void **ScrollBar::stepFront** ()

Moves the value forward by one single step.


