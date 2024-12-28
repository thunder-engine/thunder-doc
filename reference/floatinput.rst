.. _api_FloatInput:

FloatInput
==========

Inherited: None

.. _api_FloatInput_description:

Description
-----------

The FloatInput class represents a user interface element designed for entering and displaying floating-point values. This class is used in graphical user interface (GUI) applications where users need to input decimal numbers, such as 3.14, 0.001, or -42.56.



.. _api_FloatInput_public:

Public Methods
--------------

+------------------------------+------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`corners<api_FloatInput_corners>` () const                  |
+------------------------------+------------------------------------------------------------------+
|                        float | :ref:`maximum<api_FloatInput_maximum>` () const                  |
+------------------------------+------------------------------------------------------------------+
|                        float | :ref:`minimum<api_FloatInput_minimum>` () const                  |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`onDecrease<api_FloatInput_onDecrease>` ()                  |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`onEditingFinished<api_FloatInput_onEditingFinished>` ()    |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`onIncrease<api_FloatInput_onIncrease>` ()                  |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setCorners<api_FloatInput_setCorners>` (Vector4  corners)  |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setMaximum<api_FloatInput_setMaximum>` (float  maximum)    |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setMinimum<api_FloatInput_setMinimum>` (float  minimum)    |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setSingleStep<api_FloatInput_setSingleStep>` (float  step) |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setValue<api_FloatInput_setValue>` (float  value)          |
+------------------------------+------------------------------------------------------------------+
|                        float | :ref:`singleStep<api_FloatInput_singleStep>` () const            |
+------------------------------+------------------------------------------------------------------+
|                        float | :ref:`value<api_FloatInput_value>` () const                      |
+------------------------------+------------------------------------------------------------------+



.. _api_FloatInput_static:

Static Methods
--------------

None

.. _api_FloatInput_methods:

Methods Description
-------------------

.. _api_FloatInput_corners:

 :ref:`Vector4<api_Vector4>`  **FloatInput::corners** () const

Returns the corners radiuses.

**See also** setCorners().

----

.. _api_FloatInput_maximum:

 float **FloatInput::maximum** () const

Returns the maximum allowed value.

**See also** setMaximum().

----

.. _api_FloatInput_minimum:

 float **FloatInput::minimum** () const

Returns the minimum allowed value.

**See also** setMinimum().

----

.. _api_FloatInput_onDecrease:

 void **FloatInput::onDecrease** ()

Slot method called when the decrease button is clicked. Decrements the FloatInput value.

----

.. _api_FloatInput_onEditingFinished:

 void **FloatInput::onEditingFinished** ()

Slot method called when editing of the input text is finished. Updates the FloatInput value based on the entered text.

----

.. _api_FloatInput_onIncrease:

 void **FloatInput::onIncrease** ()

Slot method called when the increase button is clicked. Increments the FloatInput value.

----

.. _api_FloatInput_setCorners:

 void **FloatInput::setCorners** (:ref:`Vector4<api_Vector4>`  *corners*)

Sets the *corners* radiuses.

**See also** *corners*().

----

.. _api_FloatInput_setMaximum:

 void **FloatInput::setMaximum** (float  *maximum*)

Sets the *maximum* allowed value.

**See also** *maximum*().

----

.. _api_FloatInput_setMinimum:

 void **FloatInput::setMinimum** (float  *minimum*)

Sets the *minimum* allowed value.

**See also** *minimum*().

----

.. _api_FloatInput_setSingleStep:

 void **FloatInput::setSingleStep** (float  *step*)

Sets the single *step* value for incrementing or decrementing the FloatInput value.

**See also** singleStep().

----

.. _api_FloatInput_setValue:

 void **FloatInput::setValue** (float  *value*)

Sets the *value* of the FloatInput within the specified minimum and maximum limits.

**See also** *value*().

----

.. _api_FloatInput_singleStep:

 float **FloatInput::singleStep** () const

Returns the single step value for incrementing or decrementing the FloatInput value.

**See also** setSingleStep().

----

.. _api_FloatInput_value:

 float **FloatInput::value** () const

Returns the current value of the FloatInput.

**See also** setValue().


