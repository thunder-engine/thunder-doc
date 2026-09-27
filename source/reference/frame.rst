.. _api_Frame:

Frame
=====

Inherited: :ref:`Widget<api_Widget>`

.. _api_Frame_description:

Description
-----------

The Frame class represents a graphical frame or border used in user interfaces. It is designed to visually group or contain other UI elements, providing a clear separation or visual boundary. The frame can have customizable corners, border width, and border color, making it a versatile element for organizing and structuring content within an application.



.. _api_Frame_public:

Public Methods
--------------

+------------------------------+-----------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`backgroundColor<api_Frame_0b6acd57>` () const                   |
+------------------------------+-----------------------------------------------------------------------+
|  :ref:`Sprite<api_Sprite>` * | :ref:`backgroundImage<api_Frame_95b67c43>` () const                   |
+------------------------------+-----------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`borderColor<api_Frame_1c30a4be>` () const                       |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`boundChanged<api_Frame_71c35b2e>` (const Vector2 & size)        |
+------------------------------+-----------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`corners<api_Frame_15f62e3b>` () const                           |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setBackgroundColor<api_Frame_3ed2b8cf>` (const Vector4 & color) |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setBackgroundImage<api_Frame_4df6c185>` (Sprite * image)        |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setBorderColor<api_Frame_ad1568e7>` (const Vector4 & color)     |
+------------------------------+-----------------------------------------------------------------------+
|                         void | :ref:`setCorners<api_Frame_cbe238f5>` (const Vector4 & corners)       |
+------------------------------+-----------------------------------------------------------------------+



.. _api_Frame_static:

Static Methods
--------------

None

.. _api_Frame_methods:

Methods Description
-------------------

.. _api_Frame_0b6acd57:

 :ref:`Vector4<api_Vector4>`  **Frame::backgroundColor** () const

Returns the color of the frame to be drawn.

**See also** setBackgroundColor().

----

.. _api_Frame_95b67c43:

 :ref:`Sprite<api_Sprite>` * **Frame::backgroundImage** () const

Returns background image.

**See also** setBackgroundImage().

----

.. _api_Frame_1c30a4be:

 :ref:`Vector4<api_Vector4>`  **Frame::borderColor** () const

Returns border color of the frame.

**See also** setBorderColor().

----

.. _api_Frame_71c35b2e:

 void **Frame::boundChanged** (:ref:`Vector2<api_Vector2>` & *size*)

Reimplements: Widget::boundChanged(const Vector2 &size).

Callback method called when the *size* of the frame changed. Updates material properties based on corner radius and border width.

----

.. _api_Frame_15f62e3b:

 :ref:`Vector4<api_Vector4>`  **Frame::corners** () const

Returns the corners radiuses of the frame.

**See also** setCorners().

----

.. _api_Frame_3ed2b8cf:

 void **Frame::setBackgroundColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the frame to be drawn.

**See also** backgroundColor().

----

.. _api_Frame_4df6c185:

 void **Frame::setBackgroundImage** (:ref:`Sprite<api_Sprite>` * *image*)

Sets background image.

**See also** backgroundImage().

----

.. _api_Frame_ad1568e7:

 void **Frame::setBorderColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the border *color* of the frame.

**See also** borderColor().

----

.. _api_Frame_cbe238f5:

 void **Frame::setCorners** (:ref:`Vector4<api_Vector4>` & *corners*)

Sets the *corners* radiuses of the frame.

**See also** corners().


