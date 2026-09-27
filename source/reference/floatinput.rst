.. _api_FloatInput:

FloatInput
==========

Inherited: :ref:`Widget<api_Widget>`

.. _api_FloatInput_description:

Description
-----------

The FloatInput class represents a user interface element designed for entering and displaying floating-point values. This class is used in graphical user interface (GUI) applications where users need to input decimal numbers, such as 3.14, 0.001, or -42.56.



.. _api_FloatInput_public:

Public Methods
--------------

+----------------------------------+---------------------------------------------------------------------+
|      :ref:`Vector4<api_Vector4>` | :ref:`corners<api_FloatInput_a5783bde>` () const                    |
+----------------------------------+---------------------------------------------------------------------+
|      :ref:`Button<api_Button>` * | :ref:`decreaseButton<api_FloatInput_c480a5e6>` () const             |
+----------------------------------+---------------------------------------------------------------------+
|      :ref:`Button<api_Button>` * | :ref:`increaseButton<api_FloatInput_98f4d20e>` () const             |
+----------------------------------+---------------------------------------------------------------------+
|  :ref:`LineEdit<api_LineEdit>` * | :ref:`input<api_FloatInput_a3d925fe>` () const                      |
+----------------------------------+---------------------------------------------------------------------+
|                            float | :ref:`maximum<api_FloatInput_84ad7bf5>` () const                    |
+----------------------------------+---------------------------------------------------------------------+
|                            float | :ref:`minimum<api_FloatInput_3ad589f1>` () const                    |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`onDecrease<api_FloatInput_3079d462>` ()                       |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`onEditingFinished<api_FloatInput_5973a06c>` ()                |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`onIncrease<api_FloatInput_e0d18649>` ()                       |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setCorners<api_FloatInput_8d935e24>` (Vector4  corners)       |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setDecreaseButton<api_FloatInput_4b6e1f5a>` (Button * button) |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setIncreaseButton<api_FloatInput_2bd3ca61>` (Button * button) |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setInput<api_FloatInput_d715c362>` (LineEdit * input)         |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setMaximum<api_FloatInput_95cb21ad>` (float  maximum)         |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setMinimum<api_FloatInput_19f6d84a>` (float  minimum)         |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setSingleStep<api_FloatInput_d2c640b8>` (float  step)         |
+----------------------------------+---------------------------------------------------------------------+
|                             void | :ref:`setValue<api_FloatInput_eb892cd6>` (float  value)             |
+----------------------------------+---------------------------------------------------------------------+
|                            float | :ref:`singleStep<api_FloatInput_24fc9e7b>` () const                 |
+----------------------------------+---------------------------------------------------------------------+
|                            float | :ref:`value<api_FloatInput_fa2c60e7>` () const                      |
+----------------------------------+---------------------------------------------------------------------+



.. _api_FloatInput_static:

Static Methods
--------------

None

.. _api_FloatInput_methods:

Methods Description
-------------------

.. _api_FloatInput_a5783bde:

 :ref:`Vector4<api_Vector4>`  **FloatInput::corners** () const

Returns the corners radiuses.

**See also** setCorners().

----

.. _api_FloatInput_c480a5e6:

 :ref:`Button<api_Button>` * **FloatInput::decreaseButton** () const

Returns the decrease value button.

**See also** setDecreaseButton().

----

.. _api_FloatInput_98f4d20e:

 :ref:`Button<api_Button>` * **FloatInput::increaseButton** () const

Returns the increase value button.

**See also** setIncreaseButton().

----

.. _api_FloatInput_a3d925fe:

 :ref:`LineEdit<api_LineEdit>` * **FloatInput::input** () const

Returns the input field component.

**See also** setInput().

----

.. _api_FloatInput_84ad7bf5:

 float **FloatInput::maximum** () const

Returns the maximum allowed value.

**See also** setMaximum().

----

.. _api_FloatInput_3ad589f1:

 float **FloatInput::minimum** () const

Returns the minimum allowed value.

**See also** setMinimum().

----

.. _api_FloatInput_3079d462:

 void **FloatInput::onDecrease** ()

Slot method called when the decrease button is clicked. Decrements the FloatInput value.

----

.. _api_FloatInput_5973a06c:

 void **FloatInput::onEditingFinished** ()

Slot method called when editing of the input text is finished. Updates the FloatInput value based on the entered text.

----

.. _api_FloatInput_e0d18649:

 void **FloatInput::onIncrease** ()

Slot method called when the increase button is clicked. Increments the FloatInput value.

----

.. _api_FloatInput_8d935e24:

 void **FloatInput::setCorners** (:ref:`Vector4<api_Vector4>`  *corners*)

Sets the *corners* radiuses.

**See also** corners().

----

.. _api_FloatInput_4b6e1f5a:

 void **FloatInput::setDecreaseButton** (:ref:`Button<api_Button>` * *button*)

Sets the decrease value button.

**See also** decreaseButton().

----

.. _api_FloatInput_2bd3ca61:

 void **FloatInput::setIncreaseButton** (:ref:`Button<api_Button>` * *button*)

Sets the increase value button.

**See also** increaseButton().

----

.. _api_FloatInput_d715c362:

 void **FloatInput::setInput** (:ref:`LineEdit<api_LineEdit>` * *input*)

Sets the *input* field component.

**See also** input().

----

.. _api_FloatInput_95cb21ad:

 void **FloatInput::setMaximum** (float  *maximum*)

Sets the *maximum* allowed value.

**See also** maximum().

----

.. _api_FloatInput_19f6d84a:

 void **FloatInput::setMinimum** (float  *minimum*)

Sets the *minimum* allowed value.

**See also** minimum().

----

.. _api_FloatInput_d2c640b8:

 void **FloatInput::setSingleStep** (float  *step*)

Sets the single *step* value for incrementing or decrementing the FloatInput value.

**See also** singleStep().

----

.. _api_FloatInput_eb892cd6:

 void **FloatInput::setValue** (float  *value*)

Sets the *value* of the FloatInput within the specified minimum and maximum limits.

**See also** value().

----

.. _api_FloatInput_24fc9e7b:

 float **FloatInput::singleStep** () const

Returns the single step value for incrementing or decrementing the FloatInput value.

**See also** setSingleStep().

----

.. _api_FloatInput_fa2c60e7:

 float **FloatInput::value** () const

Returns the current value of the FloatInput.

**See also** setValue().


