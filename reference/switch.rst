.. _api_Switch:

Switch
======

Inherited: None

.. _api_Switch_description:

Description
-----------

The Switch class provides a customizable switch button with an animated graphical knob. It inherits functionality from the AbstractButton class and extends it to handle knob-related features and animations.



.. _api_Switch_public:

Public Methods
--------------

+------------------------------+-----------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`knobColor<api_Switch_cb54612a>` () const                  |
+------------------------------+-----------------------------------------------------------------+
|    :ref:`Frame<api_Frame>` * | :ref:`knobGraphic<api_Switch_57ec12bd>` () const                |
+------------------------------+-----------------------------------------------------------------+
|                         void | :ref:`setKnobColor<api_Switch_14c68feb>` (const Vector4  color) |
+------------------------------+-----------------------------------------------------------------+
|                         void | :ref:`setKnobGraphic<api_Switch_12a9efd0>` (Frame * knob)       |
+------------------------------+-----------------------------------------------------------------+
|                         void | :ref:`setSwitchDuration<api_Switch_29df6b14>` (float  duration) |
+------------------------------+-----------------------------------------------------------------+
|                        float | :ref:`switchDuration<api_Switch_69a0253b>` () const             |
+------------------------------+-----------------------------------------------------------------+



.. _api_Switch_static:

Static Methods
--------------

None

.. _api_Switch_methods:

Methods Description
-------------------

.. _api_Switch_cb54612a:

 :ref:`Vector4<api_Vector4>`  **Switch::knobColor** () const

Returns the color of the graphical knob.

**See also** setKnobColor().

----

.. _api_Switch_57ec12bd:

 :ref:`Frame<api_Frame>` * **Switch::knobGraphic** () const

Returns the graphical knob component.

**See also** setKnobGraphic().

----

.. _api_Switch_14c68feb:

 void **Switch::setKnobColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* of the graphical knob.

**See also** knobColor().

----

.. _api_Switch_12a9efd0:

 void **Switch::setKnobGraphic** (:ref:`Frame<api_Frame>` * *knob*)

Sets the graphical *knob* component.

**See also** *knob*Graphic().

----

.. _api_Switch_29df6b14:

 void **Switch::setSwitchDuration** (float  *duration*)

Sets the switch animation *duration* in seconds.

**See also** switchDuration().

----

.. _api_Switch_69a0253b:

 float **Switch::switchDuration** () const

Returns the switch animation duration in seconds.

**See also** setSwitchDuration().


