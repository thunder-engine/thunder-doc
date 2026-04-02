.. _api_AbstractButton:

AbstractButton
==============

Inherited: None

.. _api_AbstractButton_description:

Description
-----------

The AbstractButton class provides a foundation for creating interactive buttons within a graphical user interface. It allows customization of various visual properties and handles user interaction events. Internal methods are marked as internal and are intended for use within the framework rather than by external code.



.. _api_AbstractButton_public:

Public Methods
--------------

+------------------------------+---------------------------------------------------------------------------------+
|    :ref:`Frame<api_Frame>` * | :ref:`background<api_AbstractButton_9a017b4e>` () const                         |
+------------------------------+---------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_AbstractButton_1362acdb>` () const                              |
+------------------------------+---------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`highlightedColor<api_AbstractButton_eb07d9ca>` () const                   |
+------------------------------+---------------------------------------------------------------------------------+
|    :ref:`Image<api_Image>` * | :ref:`icon<api_AbstractButton_caf6247e>` () const                               |
+------------------------------+---------------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`iconSize<api_AbstractButton_6d1ba984>` () const                           |
+------------------------------+---------------------------------------------------------------------------------+
|                         bool | :ref:`isCheckable<api_AbstractButton_53b728a9>` () const                        |
+------------------------------+---------------------------------------------------------------------------------+
|                         bool | :ref:`isChecked<api_AbstractButton_8d536417>` () const                          |
+------------------------------+---------------------------------------------------------------------------------+
|                         bool | :ref:`isExclusive<api_AbstractButton_7d643b08>` () const                        |
+------------------------------+---------------------------------------------------------------------------------+
|                         bool | :ref:`isMirrored<api_AbstractButton_b7895f01>` () const                         |
+------------------------------+---------------------------------------------------------------------------------+
|    :ref:`Label<api_Label>` * | :ref:`label<api_AbstractButton_bce97fd8>` () const                              |
+------------------------------+---------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`pressedColor<api_AbstractButton_92fc4506>` () const                       |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setBackground<api_AbstractButton_81fed43a>` (Frame * frame)               |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setCheckable<api_AbstractButton_963bc851>` (bool  checkable)              |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setChecked<api_AbstractButton_913c2da7>` (bool  checked)                  |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setColor<api_AbstractButton_8415e0ad>` (const Vector4 & color)            |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setExclusive<api_AbstractButton_4ea1d28b>` (bool  exclusive)              |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setHighlightedColor<api_AbstractButton_a7eb26cd>` (const Vector4 & color) |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setIcon<api_AbstractButton_fe24d78a>` (Image * image)                     |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setIconSize<api_AbstractButton_5d43b629>` (const Vector2 & size)          |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setLabel<api_AbstractButton_1697083e>` (Label * label)                    |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setMirrored<api_AbstractButton_81f0762e>` (bool  mirrored)                |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setPressedColor<api_AbstractButton_0bc832e6>` (const Vector4 & color)     |
+------------------------------+---------------------------------------------------------------------------------+
|                         void | :ref:`setText<api_AbstractButton_1b9ef4a2>` (const TString  text)               |
+------------------------------+---------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`text<api_AbstractButton_f2b9138c>` () const                               |
+------------------------------+---------------------------------------------------------------------------------+



.. _api_AbstractButton_static:

Static Methods
--------------

None

.. _api_AbstractButton_methods:

Methods Description
-------------------

.. _api_AbstractButton_9a017b4e:

 :ref:`Frame<api_Frame>` * **AbstractButton::background** () const

Returns the background frame object associated with the button.

**See also** setBackground().

----

.. _api_AbstractButton_1362acdb:

 :ref:`Vector4<api_Vector4>`  **AbstractButton::color** () const

Returns the normal color of the button.

**See also** setColor().

----

.. _api_AbstractButton_eb07d9ca:

 :ref:`Vector4<api_Vector4>`  **AbstractButton::highlightedColor** () const

Returns the color used when the button is highlighted.

**See also** setHighlightedColor().

----

.. _api_AbstractButton_caf6247e:

 :ref:`Image<api_Image>` * **AbstractButton::icon** () const

Returns the icon associated with the button.

**See also** setIcon().

----

.. _api_AbstractButton_6d1ba984:

 :ref:`Vector2<api_Vector2>`  **AbstractButton::iconSize** () const

Returns the size of the icon.

**See also** setIconSize().

----

.. _api_AbstractButton_53b728a9:

 bool **AbstractButton::isCheckable** () const

Returns true if the button is checkable; otherwise, false.

----

.. _api_AbstractButton_8d536417:

 bool **AbstractButton::isChecked** () const

Returns true if the button is checked; otherwise, false.

----

.. _api_AbstractButton_7d643b08:

 bool **AbstractButton::isExclusive** () const

Returns true if the button is in exclusive mode; otherwise, false.

----

.. _api_AbstractButton_b7895f01:

 bool **AbstractButton::isMirrored** () const

Returns true if the button is mirrored; otherwise, false.

----

.. _api_AbstractButton_bce97fd8:

 :ref:`Label<api_Label>` * **AbstractButton::label** () const

Returns the label object associated with the button.

**See also** setLabel().

----

.. _api_AbstractButton_92fc4506:

 :ref:`Vector4<api_Vector4>`  **AbstractButton::pressedColor** () const

Returns the color used when the button is pressed.

**See also** setPressedColor().

----

.. _api_AbstractButton_81fed43a:

 void **AbstractButton::setBackground** (:ref:`Frame<api_Frame>` * *frame*)

Sets the background *frame* of the button.

**See also** background().

----

.. _api_AbstractButton_963bc851:

 void **AbstractButton::setCheckable** (bool  *checkable*)

Sets whether the button is checkable.

**See also** isCheckable().

----

.. _api_AbstractButton_913c2da7:

 void **AbstractButton::setChecked** (bool  *checked*)

Sets the *checked* state of the button.

**See also** isChecked().

----

.. _api_AbstractButton_8415e0ad:

 void **AbstractButton::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the normal *color* of the button.

**See also** color().

----

.. _api_AbstractButton_4ea1d28b:

 void **AbstractButton::setExclusive** (bool  *exclusive*)

Sets whether the button is in *exclusive* mode.

**See also** isExclusive().

----

.. _api_AbstractButton_a7eb26cd:

 void **AbstractButton::setHighlightedColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the *color* used when the button is highlighted.

**See also** highlightedColor().

----

.. _api_AbstractButton_fe24d78a:

 void **AbstractButton::setIcon** (:ref:`Image<api_Image>` * *image*)

Sets the icon *image* associated with the button.

**See also** icon().

----

.. _api_AbstractButton_5d43b629:

 void **AbstractButton::setIconSize** (:ref:`Vector2<api_Vector2>` & *size*)

Sets the *size* of the icon.

**See also** iconSize().

----

.. _api_AbstractButton_1697083e:

 void **AbstractButton::setLabel** (:ref:`Label<api_Label>` * *label*)

Sets the *label* associated with the button.

**See also** label().

----

.. _api_AbstractButton_81f0762e:

 void **AbstractButton::setMirrored** (bool  *mirrored*)

Sets whether the button should be mirrored.

**See also** isMirrored().

----

.. _api_AbstractButton_0bc832e6:

 void **AbstractButton::setPressedColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the *color* used when the button is pressed.

**See also** pressedColor().

----

.. _api_AbstractButton_1b9ef4a2:

 void **AbstractButton::setText** (:ref:`TString<api_TString>`  *text*)

Sets the *text* displayed on the button.

**See also** text().

----

.. _api_AbstractButton_f2b9138c:

 :ref:`TString<api_TString>`  **AbstractButton::text** () const

Returns the text displayed on the button.

**See also** setText().


