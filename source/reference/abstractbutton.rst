.. _api_AbstractButton:

AbstractButton
==============

Inherited: :ref:`Frame<api_Frame>`

.. _api_AbstractButton_description:

Description
-----------

The AbstractButton class provides a foundation for creating interactive buttons within a graphical user interface. It allows customization of various visual properties and handles user interaction events. Internal methods are marked as internal and are intended for use within the framework rather than by external code.



.. _api_AbstractButton_public:

Public Methods
--------------

+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`clicked<api_AbstractButton_bd271608>` ()                                  |
+------------------------------+---------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`highlightedColor<api_AbstractButton_081263c4>` () const                   |
+------------------------------+---------------------------------------------------------------------------------+
|                         bool | :ref:`isCheckable<api_AbstractButton_a67f519c>` () const                        |
+------------------------------+---------------------------------------------------------------------------------+
|                         bool | :ref:`isChecked<api_AbstractButton_52496f83>` () const                          |
+------------------------------+---------------------------------------------------------------------------------+
|                         bool | :ref:`isExclusive<api_AbstractButton_230d91ae>` () const                        |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`pressed<api_AbstractButton_d1f94e35>` ()                                  |
+------------------------------+---------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`pressedColor<api_AbstractButton_bcd20648>` () const                       |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setCheckable<api_AbstractButton_9d41bf8e>` (bool  checkable)              |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setChecked<api_AbstractButton_b5e20638>` (bool  checked)                  |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setExclusive<api_AbstractButton_3a85e714>` (bool  exclusive)              |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setHighlightedColor<api_AbstractButton_0ec479f2>` (const Vector4 & color) |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setPressedColor<api_AbstractButton_f5926b30>` (const Vector4 & color)     |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`toggled<api_AbstractButton_b8fe62c7>` (bool  checked)                     |
+------------------------------+---------------------------------------------------------------------------------+



.. _api_AbstractButton_static:

Static Methods
--------------

None

.. _api_AbstractButton_methods:

Methods Description
-------------------

.. _api_AbstractButton_bd271608:

 void **AbstractButton::clicked** ()

This signal is emitted when the button is activated (i.e., pressed down then released while the mouse cursor is inside the button).

----

.. _api_AbstractButton_081263c4:

 :ref:`Vector4<api_Vector4>`  **AbstractButton::highlightedColor** () const

Returns the color used when the button is highlighted.

**See also** setHighlightedColor().

----

.. _api_AbstractButton_a67f519c:

 bool **AbstractButton::isCheckable** () const

Returns true if the button is checkable; otherwise, false.

----

.. _api_AbstractButton_52496f83:

 bool **AbstractButton::isChecked** () const

Returns true if the button is checked; otherwise, false.

----

.. _api_AbstractButton_230d91ae:

 bool **AbstractButton::isExclusive** () const

Returns true if the button is in exclusive mode; otherwise, false.

----

.. _api_AbstractButton_d1f94e35:

 void **AbstractButton::pressed** ()

This signal is emitted when the button is pressed down.

----

.. _api_AbstractButton_bcd20648:

 :ref:`Vector4<api_Vector4>`  **AbstractButton::pressedColor** () const

Returns the color used when the button is pressed.

**See also** setPressedColor().

----

.. _api_AbstractButton_9d41bf8e:

 void **AbstractButton::setCheckable** (bool  *checkable*)

Sets whether the button is checkable.

**See also** isCheckable().

----

.. _api_AbstractButton_b5e20638:

 void **AbstractButton::setChecked** (bool  *checked*)

Sets the *checked* state of the button.

**See also** isChecked().

----

.. _api_AbstractButton_3a85e714:

 void **AbstractButton::setExclusive** (bool  *exclusive*)

Sets whether the button is in *exclusive* mode.

**See also** isExclusive().

----

.. _api_AbstractButton_0ec479f2:

 void **AbstractButton::setHighlightedColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the *color* used when the button is highlighted.

**See also** highlightedColor().

----

.. _api_AbstractButton_f5926b30:

 void **AbstractButton::setPressedColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the *color* used when the button is pressed.

**See also** pressedColor().

----

.. _api_AbstractButton_b8fe62c7:

 void **AbstractButton::toggled** (bool  *checked*)

This signal is emitted whenever a checkable button changes its state. *checked* is true if the button is checked, or false if the button is unchecked.


