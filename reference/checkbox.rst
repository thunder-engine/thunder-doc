.. _api_CheckBox:

CheckBox
========

Inherited: None

.. _api_CheckBox_description:

Description
-----------

The CheckBox class represents an option button that can be toggled between two states: "on" or "off." It is commonly used in graphical user interfaces (GUIs) to allow users to select or deselect specific options or features, often in forms or settings.



.. _api_CheckBox_public:

Public Methods
--------------

+------------------------------+-----------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`knobColor<api_CheckBox_knobColor>` () const                     |
+------------------------------+-----------------------------------------------------------------------+
|    :ref:`Image<api_Image>` * | :ref:`knobGraphic<api_CheckBox_knobGraphic>` () const                 |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setKnobColor<api_CheckBox_setKnobColor>` (const Vector4  color) |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setKnobGraphic<api_CheckBox_setKnobGraphic>` (Image * knob)     |
+------------------------------+-----------------------------------------------------------------------+



.. _api_CheckBox_static:

Static Methods
--------------

None

.. _api_CheckBox_methods:

Methods Description
-------------------

.. _api_CheckBox_knobColor:

 :ref:`Vector4<api_Vector4>`  **CheckBox::knobColor** () const

Returns the color of the graphical knob.

**See also** setKnobColor().

----

.. _api_CheckBox_knobGraphic:

 :ref:`Image<api_Image>` * **CheckBox::knobGraphic** () const

Returns the graphical knob component.

**See also** setKnobGraphic().

----

.. _api_CheckBox_setKnobColor:

 void **CheckBox::setKnobColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* of the graphical knob.

**See also** knobColor().

----

.. _api_CheckBox_setKnobGraphic:

 void **CheckBox::setKnobGraphic** (:ref:`Image<api_Image>` * *knob*)

Sets the graphical *knob* component.

**See also** *knob*Graphic().


