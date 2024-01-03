.. _api_AbstractButton:

AbstractButton Class
====================

Inherited: :doc:`Widget<api_Widget>`

.. _api_AbstractButton_description:

Description
-----------

The AbstractButton class provides a foundation for creating interactive buttons within a graphical user interface. It allows customization of various visual properties and handles user interaction events. Internal methods are marked as internal and are intended for use within the framework rather than by external code.



.. _api_AbstractButton_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------------------------------------+
|    :ref:`Frame<api_Frame>` * | :ref:`background<api_AbstractButton_background>` () const                                 |
+------------------------------+-------------------------------------------------------------------------------------------+
|                        float | :ref:`fadeDuration<api_AbstractButton_fadeDuration>` () const                             |
+------------------------------+-------------------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`highlightedColor<api_AbstractButton_highlightedColor>` () const                     |
+------------------------------+-------------------------------------------------------------------------------------------+
|    :ref:`Image<api_Image>` * | :ref:`icon<api_AbstractButton_icon>` () const                                             |
+------------------------------+-------------------------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`iconSize<api_AbstractButton_iconSize>` () const                                     |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         bool | :ref:`isCheckable<api_AbstractButton_isCheckable>` () const                               |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         bool | :ref:`isChecked<api_AbstractButton_isChecked>` () const                                   |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         bool | :ref:`isExclusive<api_AbstractButton_isExclusive>` () const                               |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         bool | :ref:`isMirrored<api_AbstractButton_isMirrored>` () const                                 |
+------------------------------+-------------------------------------------------------------------------------------------+
|    :ref:`Label<api_Label>` * | :ref:`label<api_AbstractButton_label>` () const                                           |
+------------------------------+-------------------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`normalColor<api_AbstractButton_normalColor>` () const                               |
+------------------------------+-------------------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`pressedColor<api_AbstractButton_pressedColor>` () const                             |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setBackground<api_AbstractButton_setBackground>` (Frame * frame)                    |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setCheckable<api_AbstractButton_setCheckable>` (bool  checkable)                    |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setChecked<api_AbstractButton_setChecked>` (bool  checked)                          |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setExclusive<api_AbstractButton_setExclusive>` (bool  exclusive)                    |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setFadeDuration<api_AbstractButton_setFadeDuration>` (float  duration)              |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setHighlightedColor<api_AbstractButton_setHighlightedColor>` (const Vector4  color) |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setIcon<api_AbstractButton_setIcon>` (Image * image)                                |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setIconSize<api_AbstractButton_setIconSize>` (Vector2  size)                        |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setLabel<api_AbstractButton_setLabel>` (Label * label)                              |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setMirrored<api_AbstractButton_setMirrored>` (bool  mirrored)                       |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setNormalColor<api_AbstractButton_setNormalColor>` (const Vector4  color)           |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setPressedColor<api_AbstractButton_setPressedColor>` (const Vector4  color)         |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setText<api_AbstractButton_setText>` (const std::string  text)                      |
+------------------------------+-------------------------------------------------------------------------------------------+
|                  std::string | :ref:`text<api_AbstractButton_text>` () const                                             |
+------------------------------+-------------------------------------------------------------------------------------------+



.. _api_AbstractButton_static:

Static Methods
--------------

None

.. _api_AbstractButton_methods:

Methods Description
-------------------

.. _api_AbstractButton_background:

 :ref:`Frame<api_Frame>`* **AbstractButton::background** () const

Returns the background frame object associated with the button.

**See also** setBackground().

----

.. _api_AbstractButton_fadeDuration:

 float **AbstractButton::fadeDuration** () const

Returns the fade duration used for visual effects.

**See also** setFadeDuration().

----

.. _api_AbstractButton_highlightedColor:

 :ref:`Vector4<api_Vector4>` **AbstractButton::highlightedColor** () const

Returns the color used when the button is highlighted.

**See also** setHighlightedColor().

----

.. _api_AbstractButton_icon:

 :ref:`Image<api_Image>`* **AbstractButton::icon** () const

Returns the icon associated with the button.

**See also** setIcon().

----

.. _api_AbstractButton_iconSize:

 :ref:`Vector2<api_Vector2>` **AbstractButton::iconSize** () const

Returns the size of the icon.

**See also** setIconSize().

----

.. _api_AbstractButton_isCheckable:

 bool **AbstractButton::isCheckable** () const

Returns true if the button is checkable; otherwise, false.

----

.. _api_AbstractButton_isChecked:

 bool **AbstractButton::isChecked** () const

Returns true if the button is checked; otherwise, false.

----

.. _api_AbstractButton_isExclusive:

 bool **AbstractButton::isExclusive** () const

Returns true if the button is in exclusive mode; otherwise, false.

----

.. _api_AbstractButton_isMirrored:

 bool **AbstractButton::isMirrored** () const

Returns true if the button is mirrored; otherwise, false.

----

.. _api_AbstractButton_label:

 :ref:`Label<api_Label>`* **AbstractButton::label** () const

Returns the label object associated with the button.

**See also** setLabel().

----

.. _api_AbstractButton_normalColor:

 :ref:`Vector4<api_Vector4>` **AbstractButton::normalColor** () const

Returns the normal color of the button.

**See also** setNormalColor().

----

.. _api_AbstractButton_pressedColor:

 :ref:`Vector4<api_Vector4>` **AbstractButton::pressedColor** () const

Returns the color used when the button is pressed.

**See also** setPressedColor().

----

.. _api_AbstractButton_setBackground:

 void **AbstractButton::setBackground** (:ref:`Frame<api_Frame>` * *frame*)

Sets the background *frame* of the button.

**See also** background().

----

.. _api_AbstractButton_setCheckable:

 void **AbstractButton::setCheckable** (bool  *checkable*)

Sets whether the button is *checkable*.

**See also** isCheckable().

----

.. _api_AbstractButton_setChecked:

 void **AbstractButton::setChecked** (bool  *checked*)

Sets the *checked* state of the button.

**See also** isChecked().

----

.. _api_AbstractButton_setExclusive:

 void **AbstractButton::setExclusive** (bool  *exclusive*)

Sets whether the button is in *exclusive* mode.

**See also** isExclusive().

----

.. _api_AbstractButton_setFadeDuration:

 void **AbstractButton::setFadeDuration** (float  *duration*)

Sets the fade *duration* used for visual effects.

**See also** fadeDuration().

----

.. _api_AbstractButton_setHighlightedColor:

 void **AbstractButton::setHighlightedColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* used when the button is highlighted.

**See also** highlightedColor().

----

.. _api_AbstractButton_setIcon:

 void **AbstractButton::setIcon** (:ref:`Image<api_Image>` * *image*)

Sets the icon *image* associated with the button.

**See also** icon().

----

.. _api_AbstractButton_setIconSize:

 void **AbstractButton::setIconSize** (:ref:`Vector2<api_Vector2>`  *size*)

Sets the *size* of the icon.

**See also** iconSize().

----

.. _api_AbstractButton_setLabel:

 void **AbstractButton::setLabel** (:ref:`Label<api_Label>` * *label*)

Sets the *label* associated with the button.

**See also** *label*().

----

.. _api_AbstractButton_setMirrored:

 void **AbstractButton::setMirrored** (bool  *mirrored*)

Sets whether the button should be *mirrored*.

**See also** isMirrored().

----

.. _api_AbstractButton_setNormalColor:

 void **AbstractButton::setNormalColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the normal *color* of the button.

**See also** normalColor().

----

.. _api_AbstractButton_setPressedColor:

 void **AbstractButton::setPressedColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* used when the button is pressed.

**See also** pressedColor().

----

.. _api_AbstractButton_setText:

 void **AbstractButton::setText** (std::string  *text*)

Sets the *text* displayed on the button.

**See also** *text*().

----

.. _api_AbstractButton_text:

 std::string **AbstractButton::text** () const

Returns the text displayed on the button.

**See also** setText().


