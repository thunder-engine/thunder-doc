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

+----------------------------------+---------------------------------------------------------------------+
|      :ref:`Vector4<api_Vector4>` | :ref:`corners<api_FloatInput_5026894e>` () const                    |
+----------------------------------+---------------------------------------------------------------------+
|      :ref:`Button<api_Button>` * | :ref:`decreaseButton<api_FloatInput_31c04a65>` () const             |
+----------------------------------+---------------------------------------------------------------------+
|      :ref:`Button<api_Button>` * | :ref:`increaseButton<api_FloatInput_92cde684>` () const             |
+----------------------------------+---------------------------------------------------------------------+
|  :ref:`LineEdit<api_LineEdit>` * | :ref:`input<api_FloatInput_a485fdb9>` () const                      |
+----------------------------------+---------------------------------------------------------------------+
|                            float | :ref:`maximum<api_FloatInput_2dfa3c8b>` () const                    |
+----------------------------------+---------------------------------------------------------------------+
|                            float | :ref:`minimum<api_FloatInput_c5d3fb12>` () const                    |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`onDecrease<api_FloatInput_b42c6035>` ()                       |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`onEditingFinished<api_FloatInput_f9db1534>` ()                |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`onIncrease<api_FloatInput_149c0e36>` ()                       |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setCorners<api_FloatInput_0281dc57>` (Vector4  corners)       |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setDecreaseButton<api_FloatInput_fe6ba257>` (Button * button) |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setIncreaseButton<api_FloatInput_154908bc>` (Button * button) |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setInput<api_FloatInput_cf6e3742>` (LineEdit * input)         |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setMaximum<api_FloatInput_5179eb64>` (float  maximum)         |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setMinimum<api_FloatInput_f89de7c4>` (float  minimum)         |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setSingleStep<api_FloatInput_3b2f19a4>` (float  step)         |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setValue<api_FloatInput_89b46fe3>` (float  value)             |
+----------------------------------+---------------------------------------------------------------------+
|                            float | :ref:`singleStep<api_FloatInput_46a5d703>` () const                 |
+----------------------------------+---------------------------------------------------------------------+
|                            float | :ref:`value<api_FloatInput_d1458f69>` () const                      |
+----------------------------------+---------------------------------------------------------------------+



.. _api_FloatInput_static:

Static Methods
--------------

None

.. _api_FloatInput_methods:

Methods Description
-------------------

.. _api_FloatInput_5026894e:

 :ref:`Vector4<api_Vector4>`  **FloatInput::corners** () const

Returns the corners radiuses.

**See also** setCorners().

----

.. _api_FloatInput_31c04a65:

 :ref:`Button<api_Button>` * **FloatInput::decreaseButton** () const

Returns the decrease value button.

**See also** setDecreaseButton().

----

.. _api_FloatInput_92cde684:

 :ref:`Button<api_Button>` * **FloatInput::increaseButton** () const

Returns the increase value button.

**See also** setIncreaseButton().

----

.. _api_FloatInput_a485fdb9:

 :ref:`LineEdit<api_LineEdit>` * **FloatInput::input** () const

Returns the input field component.

**See also** setInput().

----

.. _api_FloatInput_2dfa3c8b:

 float **FloatInput::maximum** () const

Returns the maximum allowed value.

**See also** setMaximum().

----

.. _api_FloatInput_c5d3fb12:

 float **FloatInput::minimum** () const

Returns the minimum allowed value.

**See also** setMinimum().

----

.. _api_FloatInput_b42c6035:

 void **FloatInput::onDecrease** ()

Slot method called when the decrease button is clicked. Decrements the FloatInput value.

----

.. _api_FloatInput_f9db1534:

 void **FloatInput::onEditingFinished** ()

Slot method called when editing of the input text is finished. Updates the FloatInput value based on the entered text.

----

.. _api_FloatInput_149c0e36:

 void **FloatInput::onIncrease** ()

Slot method called when the increase button is clicked. Increments the FloatInput value.

----

.. _api_FloatInput_0281dc57:

 void **FloatInput::setCorners** (:ref:`Vector4<api_Vector4>`  *corners*)

Sets the *corners* radiuses.

**See also** *corners*().

----

.. _api_FloatInput_fe6ba257:

 void **FloatInput::setDecreaseButton** (:ref:`Button<api_Button>` * *button*)

Sets the decrease value *button*.

**See also** decreaseButton().

----

.. _api_FloatInput_154908bc:

 void **FloatInput::setIncreaseButton** (:ref:`Button<api_Button>` * *button*)

Sets the increase value *button*.

**See also** increaseButton().

----

.. _api_FloatInput_cf6e3742:

 void **FloatInput::setInput** (:ref:`LineEdit<api_LineEdit>` * *input*)

Sets the *input* field component.

**See also** *input*().

----

.. _api_FloatInput_5179eb64:

 void **FloatInput::setMaximum** (float  *maximum*)

Sets the *maximum* allowed value.

**See also** *maximum*().

----

.. _api_FloatInput_f89de7c4:

 void **FloatInput::setMinimum** (float  *minimum*)

Sets the *minimum* allowed value.

**See also** *minimum*().

----

.. _api_FloatInput_3b2f19a4:

 void **FloatInput::setSingleStep** (float  *step*)

Sets the single *step* value for incrementing or decrementing the FloatInput value.

**See also** singleStep().

----

.. _api_FloatInput_89b46fe3:

 void **FloatInput::setValue** (float  *value*)

Sets the *value* of the FloatInput within the specified minimum and maximum limits.

**See also** *value*().

----

.. _api_FloatInput_46a5d703:

 float **FloatInput::singleStep** () const

Returns the single step value for incrementing or decrementing the FloatInput value.

**See also** setSingleStep().

----

.. _api_FloatInput_d1458f69:

 float **FloatInput::value** () const

Returns the current value of the FloatInput.

**See also** setValue().


