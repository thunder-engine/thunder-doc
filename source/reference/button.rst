.. _api_Button:

Button
======

Inherited: :ref:`AbstractButton<api_AbstractButton>`

.. _api_Button_description:

Description
-----------

The Button class represents a push button element in a graphical user interface (GUI). It is a fundamental UI component that allows users to trigger actions or commands through a simple click or press.



.. _api_Button_public:

Public Methods
--------------

+------------------------------+------------------------------------------------------------------+
|      :ref:`Font<api_Font>` * | :ref:`font<api_Button_b4e79d16>` () const                        |
+------------------------------+------------------------------------------------------------------+
|                          int | :ref:`fontSize<api_Button_d123f849>` () const                    |
+------------------------------+------------------------------------------------------------------+
|  :ref:`Sprite<api_Sprite>` * | :ref:`icon<api_Button_2c37ed91>` () const                        |
+------------------------------+------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` | :ref:`iconSize<api_Button_48ec5f31>` () const                    |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setFont<api_Button_e30f5b97>` (Font * font)                |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setFontSize<api_Button_8b04c3df>` (int  size)              |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setIcon<api_Button_e3912cb6>` (Sprite * icon)              |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setIconRotation<api_Button_8af30b75>` (float  angle)       |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setIconSize<api_Button_63957c24>` (const Vector2 & size)   |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setText<api_Button_18c5047f>` (const TString & text)       |
+------------------------------+------------------------------------------------------------------+
|                         void | :ref:`setTextColor<api_Button_9fbd1250>` (const Vector4 & color) |
+------------------------------+------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`text<api_Button_af2bc639>` () const                        |
+------------------------------+------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`textColor<api_Button_bea3568f>` () const                   |
+------------------------------+------------------------------------------------------------------+



.. _api_Button_static:

Static Methods
--------------

None

.. _api_Button_methods:

Methods Description
-------------------

.. _api_Button_b4e79d16:

 :ref:`Font<api_Font>` * **Button::font** () const

Returns the font which will be used to draw a text.

**See also** setFont().

----

.. _api_Button_d123f849:

 int **Button::fontSize** () const

Returns the size of the font.

**See also** setFontSize().

----

.. _api_Button_2c37ed91:

 :ref:`Sprite<api_Sprite>` * **Button::icon** () const

Returns the icon shown on the button.

**See also** setIcon().

----

.. _api_Button_48ec5f31:

 :ref:`Vector2<api_Vector2>`  **Button::iconSize** () const

Returns the size of the icon.

**See also** setIconSize().

----

.. _api_Button_e30f5b97:

 void **Button::setFont** (:ref:`Font<api_Font>` * *font*)

Changes the *font* which will be used to draw a text.

**See also** font().

----

.. _api_Button_8b04c3df:

 void **Button::setFontSize** (int  *size*)

Changes the *size* of the font.

**See also** fontSize().

----

.. _api_Button_e3912cb6:

 void **Button::setIcon** (:ref:`Sprite<api_Sprite>` * *icon*)

Sets the *icon* shown on the button.

**See also** icon().

----

.. _api_Button_8af30b75:

 void **Button::setIconRotation** (float  *angle*)

Sets icon rotation angle.

----

.. _api_Button_63957c24:

 void **Button::setIconSize** (:ref:`Vector2<api_Vector2>` & *size*)

Sets the *size* of the icon.

**See also** iconSize().

----

.. _api_Button_18c5047f:

 void **Button::setText** (:ref:`TString<api_TString>` & *text*)

Sets the *text* displayed on the button.

**See also** text().

----

.. _api_Button_9fbd1250:

 void **Button::setTextColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the normal *color* of the button.

**See also** textColor().

----

.. _api_Button_af2bc639:

 :ref:`TString<api_TString>`  **Button::text** () const

Returns the text displayed on the button.

**See also** setText().

----

.. _api_Button_bea3568f:

 :ref:`Vector4<api_Vector4>`  **Button::textColor** () const

Returns the normal color of the button.

**See also** setTextColor().


