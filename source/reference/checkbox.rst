.. _api_CheckBox:

CheckBox
========

Inherited: :ref:`AbstractButton<api_AbstractButton>`

.. _api_CheckBox_description:

Description
-----------

The CheckBox class represents an option button that can be toggled between two states: "on" or "off." It is commonly used in graphical user interfaces (GUIs) to allow users to select or deselect specific options or features, often in forms or settings.



.. _api_CheckBox_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------------------+
|  :ref:`Sprite<api_Sprite>` * | :ref:`indicator<api_CheckBox_d59be32f>` () const                        |
+------------------------------+-------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`indicatorColor<api_CheckBox_592bc8d0>` () const                   |
+------------------------------+-------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`indicatorSize<api_CheckBox_763cf24d>` () const                    |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setIndicator<api_CheckBox_0e17adc3>` (Sprite * icon)              |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setIndicatorColor<api_CheckBox_f70d8613>` (const Vector4 & color) |
+------------------------------+-------------------------------------------------------------------------+
|                         void | :ref:`setIndicatorSize<api_CheckBox_623eb0fa>` (const Vector2 & size)   |
+------------------------------+-------------------------------------------------------------------------+



.. _api_CheckBox_static:

Static Methods
--------------

None

.. _api_CheckBox_methods:

Methods Description
-------------------

.. _api_CheckBox_d59be32f:

 :ref:`Sprite<api_Sprite>` * **CheckBox::indicator** () const

Returns indicator icon.

**See also** setIndicator().

----

.. _api_CheckBox_592bc8d0:

 :ref:`Vector4<api_Vector4>`  **CheckBox::indicatorColor** () const

Returns the color of the graphical knob.

**See also** setIndicatorColor().

----

.. _api_CheckBox_763cf24d:

 :ref:`Vector2<api_Vector2>`  **CheckBox::indicatorSize** () const

Returns the size of indicator.

**See also** setIndicatorSize().

----

.. _api_CheckBox_0e17adc3:

 void **CheckBox::setIndicator** (:ref:`Sprite<api_Sprite>` * *icon*)

Sets indicator icon.

**See also** indicator().

----

.. _api_CheckBox_f70d8613:

 void **CheckBox::setIndicatorColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the *color* of the graphical knob.

**See also** indicatorColor().

----

.. _api_CheckBox_623eb0fa:

 void **CheckBox::setIndicatorSize** (:ref:`Vector2<api_Vector2>` & *size*)

Sets the *size* of indicator.

**See also** indicatorSize().


