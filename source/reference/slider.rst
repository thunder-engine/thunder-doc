.. _api_Slider:

Slider
======

Inherited: :ref:`AbstractSlider<api_AbstractSlider>`

.. _api_Slider_description:

Description
-----------

Slider provides a typical slider control with a draggable knob and a progress bar background that fills to show the current value. Supports both horizontal and vertical orientations.



.. _api_Slider_public:

Public Methods
--------------

+----------------------------------------+----------------------------------------------------------------------+
|  :ref:`ProgressBar<api_ProgressBar>` * | :ref:`background<api_Slider_1728493f>` () const                      |
+----------------------------------------+----------------------------------------------------------------------+
|                                   void | :ref:`setBackground<api_Slider_59c8e1a4>` (ProgressBar * background) |
+----------------------------------------+----------------------------------------------------------------------+
|                                   void | :ref:`setMaximum<api_Slider_46b5a7d2>` (int  value)                  |
+----------------------------------------+----------------------------------------------------------------------+
|                                   void | :ref:`setMinimum<api_Slider_065b3127>` (int  value)                  |
+----------------------------------------+----------------------------------------------------------------------+
|                                   void | :ref:`setOrientation<api_Slider_61e7ad90>` (int  orientation)        |
+----------------------------------------+----------------------------------------------------------------------+
|                                   void | :ref:`setValue<api_Slider_5f8201e9>` (int  value)                    |
+----------------------------------------+----------------------------------------------------------------------+



.. _api_Slider_static:

Static Methods
--------------

None

.. _api_Slider_methods:

Methods Description
-------------------

.. _api_Slider_1728493f:

 :ref:`ProgressBar<api_ProgressBar>` * **Slider::background** () const

Returns the background progress bar widget.

**See also** setBackground().

----

.. _api_Slider_59c8e1a4:

 void **Slider::setBackground** (:ref:`ProgressBar<api_ProgressBar>` * *background*)

Sets the *background* progress bar widget.

**See also** background().

----

.. _api_Slider_46b5a7d2:

 void **Slider::setMaximum** (int  *value*)

Reimplements: AbstractSlider::setMaximum(int maximum).

Sets the maximum *value* of the slider.

----

.. _api_Slider_065b3127:

 void **Slider::setMinimum** (int  *value*)

Reimplements: AbstractSlider::setMinimum(int minimum).

Sets the minimum *value* of the slider.

----

.. _api_Slider_61e7ad90:

 void **Slider::setOrientation** (int  *orientation*)

Reimplements: AbstractSlider::setOrientation(int orientation).

Sets the *orientation* of the slider.

----

.. _api_Slider_5f8201e9:

 void **Slider::setValue** (int  *value*)

Reimplements: AbstractSlider::setValue(int value).

Sets the current *value* of the slider.


