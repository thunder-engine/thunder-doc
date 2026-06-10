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
|  :ref:`Vector4<api_Vector4>` | :ref:`knobColor<api_Switch_c7d9520f>` () const                  |
+------------------------------+-----------------------------------------------------------------+
|    :ref:`Frame<api_Frame>` * | :ref:`knobGraphic<api_Switch_64fea275>` () const                |
+------------------------------+-----------------------------------------------------------------+
|                         void | :ref:`setKnobColor<api_Switch_24c5e3f9>` (const Vector4  color) |
+------------------------------+-----------------------------------------------------------------+
|                         void | :ref:`setKnobGraphic<api_Switch_af3bd947>` (Frame * knob)       |
+------------------------------+-----------------------------------------------------------------+
|                         void | :ref:`setSwitchDuration<api_Switch_f465d21c>` (float  duration) |
+------------------------------+-----------------------------------------------------------------+
|                        float | :ref:`switchDuration<api_Switch_0923afbd>` () const             |
+------------------------------+-----------------------------------------------------------------+



.. _api_Switch_static:

Static Methods
--------------

None

.. _api_Switch_methods:

Methods Description
-------------------

.. _api_Switch_c7d9520f:

 :ref:`Vector4<api_Vector4>`  **Switch::knobColor** () const

Returns the color of the graphical knob.

**See also** setKnobColor().

----

.. _api_Switch_64fea275:

 :ref:`Frame<api_Frame>` * **Switch::knobGraphic** () const

Returns the graphical knob component.

**See also** setKnobGraphic().

----

.. _api_Switch_24c5e3f9:

 void **Switch::setKnobColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* of the graphical knob.

**See also** knobColor().

----

.. _api_Switch_af3bd947:

 void **Switch::setKnobGraphic** (:ref:`Frame<api_Frame>` * *knob*)

Sets the graphical *knob* component.

**See also** knobGraphic().

----

.. _api_Switch_f465d21c:

 void **Switch::setSwitchDuration** (float  *duration*)

Sets the switch animation *duration* in seconds.

**See also** switchDuration().

----

.. _api_Switch_0923afbd:

 float **Switch::switchDuration** () const

Returns the switch animation duration in seconds.

**See also** setSwitchDuration().


