.. _api_AbstractSlider:

AbstractSlider
==============

Inherited: :ref:`Widget<api_Widget>`

.. _api_AbstractSlider_description:

Description
-----------

AbstractSlider provides common functionality for widgets that allow selecting a value from a range using a draggable knob. This class is intended to be inherited by concrete slider implementations.



.. _api_AbstractSlider_public:

Public Methods
--------------

+------------------------------+-----------------------------------------------------------------------+
|  :ref:`Widget<api_Widget>` * | :ref:`knob<api_AbstractSlider_2b9374a5>` () const                     |
+------------------------------+-----------------------------------------------------------------------+
|                          int | :ref:`maximum<api_AbstractSlider_3e6d5b18>` () const                  |
+------------------------------+-----------------------------------------------------------------------+
|                          int | :ref:`minimum<api_AbstractSlider_37cbfd60>` () const                  |
+------------------------------+-----------------------------------------------------------------------+
|                          int | :ref:`orientation<api_AbstractSlider_dc70f1e3>` () const              |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`pressed<api_AbstractSlider_36d581b9>` ()                        |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setKnob<api_AbstractSlider_62d1ac08>` (Widget * knob)           |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setMaximum<api_AbstractSlider_97ef120c>` (int  maximum)         |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setMinimum<api_AbstractSlider_9708c4eb>` (int  minimum)         |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setOrientation<api_AbstractSlider_456c2a89>` (int  orientation) |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setValue<api_AbstractSlider_f59c6d7b>` (int  value)             |
+------------------------------+-----------------------------------------------------------------------+
|                          int | :ref:`value<api_AbstractSlider_e4d8f5b0>` () const                    |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`valueChanged<api_AbstractSlider_6c783e5d>` (int  value)         |
+------------------------------+-----------------------------------------------------------------------+



.. _api_AbstractSlider_static:

Static Methods
--------------

None

.. _api_AbstractSlider_methods:

Methods Description
-------------------

.. _api_AbstractSlider_2b9374a5:

 :ref:`Widget<api_Widget>` * **AbstractSlider::knob** () const

Returns the knob widget.

**See also** setKnob().

----

.. _api_AbstractSlider_3e6d5b18:

 int **AbstractSlider::maximum** () const

Returns the maximum value of the slider.

**See also** setMaximum().

----

.. _api_AbstractSlider_37cbfd60:

 int **AbstractSlider::minimum** () const

Returns the minimum value of the slider.

**See also** setMinimum().

----

.. _api_AbstractSlider_dc70f1e3:

 int **AbstractSlider::orientation** () const

Returns the current orientation of the slider (Horizontal or Vertical).

**See also** setOrientation().

----

.. _api_AbstractSlider_36d581b9:

 void **AbstractSlider::pressed** ()

Emits the pressed() signal.

Called when the slider is pressed (mouse down or touch begin).

----

.. _api_AbstractSlider_62d1ac08:

 void **AbstractSlider::setKnob** (:ref:`Widget<api_Widget>` * *knob*)

Sets the *knob* widget.

**See also** knob().

----

.. _api_AbstractSlider_97ef120c:

 void **AbstractSlider::setMaximum** (int  *maximum*)

Sets the *maximum* value of the slider.

**See also** maximum().

----

.. _api_AbstractSlider_9708c4eb:

 void **AbstractSlider::setMinimum** (int  *minimum*)

Sets the *minimum* value of the slider.

**See also** minimum().

----

.. _api_AbstractSlider_456c2a89:

 void **AbstractSlider::setOrientation** (int  *orientation*)

Sets the *orientation* of the slider.

**See also** orientation().

----

.. _api_AbstractSlider_f59c6d7b:

 void **AbstractSlider::setValue** (int  *value*)

Sets the current *value* of the slider.

**See also** value().

----

.. _api_AbstractSlider_e4d8f5b0:

 int **AbstractSlider::value** () const

Returns the current value of the slider.

**See also** setValue().

----

.. _api_AbstractSlider_6c783e5d:

 void **AbstractSlider::valueChanged** (int  *value*)

Emits the valueChanged() signal.

Called when the slider's *value* changes.


