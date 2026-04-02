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
|  :ref:`Vector4<api_Vector4>` | :ref:`knobColor<api_Switch_28537fde>` () const                  |
+------------------------------+-----------------------------------------------------------------+
|    :ref:`Frame<api_Frame>` * | :ref:`knobGraphic<api_Switch_2803de6f>` () const                |
+------------------------------+-----------------------------------------------------------------+
|                         void | :ref:`setKnobColor<api_Switch_52fdb14e>` (const Vector4  color) |
+------------------------------+-----------------------------------------------------------------+
|                         void | :ref:`setKnobGraphic<api_Switch_da6b9e41>` (Frame * knob)       |
+------------------------------+-----------------------------------------------------------------+
|                         void | :ref:`setSwitchDuration<api_Switch_a45f36ed>` (float  duration) |
+------------------------------+-----------------------------------------------------------------+
|                        float | :ref:`switchDuration<api_Switch_2b8471df>` () const             |
+------------------------------+-----------------------------------------------------------------+



.. _api_Switch_static:

Static Methods
--------------

None

.. _api_Switch_methods:

Methods Description
-------------------

.. _api_Switch_28537fde:

 :ref:`Vector4<api_Vector4>`  **Switch::knobColor** () const

Returns the color of the graphical knob.

**See also** setKnobColor().

----

.. _api_Switch_2803de6f:

 :ref:`Frame<api_Frame>` * **Switch::knobGraphic** () const

Returns the graphical knob component.

**See also** setKnobGraphic().

----

.. _api_Switch_52fdb14e:

 void **Switch::setKnobColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* of the graphical knob.

**See also** knobColor().

----

.. _api_Switch_da6b9e41:

 void **Switch::setKnobGraphic** (:ref:`Frame<api_Frame>` * *knob*)

Sets the graphical *knob* component.

**See also** knobGraphic().

----

.. _api_Switch_a45f36ed:

 void **Switch::setSwitchDuration** (float  *duration*)

Sets the switch animation *duration* in seconds.

**See also** switchDuration().

----

.. _api_Switch_2b8471df:

 float **Switch::switchDuration** () const

Returns the switch animation duration in seconds.

**See also** setSwitchDuration().


