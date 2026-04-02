.. _api_Frame:

Frame
=====

Inherited: None

.. _api_Frame_description:

Description
-----------

The Frame class represents a graphical frame or border used in user interfaces. It is designed to visually group or contain other UI elements, providing a clear separation or visual boundary. The frame can have customizable corners, border width, and border color, making it a versatile element for organizing and structuring content within an application.



.. _api_Frame_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`bottomColor<api_Frame_fe637c9b>` () const                   |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`boundChanged<api_Frame_8c691fa4>` (const Vector2 & size)    |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_Frame_640f59b1>` () const                         |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`corners<api_Frame_8ad2659e>` () const                       |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`leftColor<api_Frame_31e2ab58>` () const                     |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`rightColor<api_Frame_f8c5e307>` () const                    |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setBorderColor<api_Frame_c14b3f9a>` (const Vector4 & color) |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setBottomColor<api_Frame_9f386271>` (const Vector4 & color) |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setColor<api_Frame_0cd71963>` (const Vector4 & color)       |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setCorners<api_Frame_7289403a>` (const Vector4 & corners)   |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setLeftColor<api_Frame_7cd18b90>` (const Vector4 & color)   |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setRightColor<api_Frame_2a1f4859>` (const Vector4 & color)  |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setTopColor<api_Frame_b9e17653>` (const Vector4 & color)    |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`topColor<api_Frame_321fd4a5>` () const                      |
+------------------------------+-------------------------------------------------------------------+



.. _api_Frame_static:

Static Methods
--------------

None

.. _api_Frame_methods:

Methods Description
-------------------

.. _api_Frame_fe637c9b:

 :ref:`Vector4<api_Vector4>`  **Frame::bottomColor** () const

Returns the bottom border color of the frame.

**See also** setBottomColor().

----

.. _api_Frame_8c691fa4:

 void **Frame::boundChanged** (:ref:`Vector2<api_Vector2>` & *size*)

Reimplements: Widget::boundChanged(const Vector2 &size).

Callback method called when the *size* of the frame changed. Updates material properties based on corner radius and border width.

----

.. _api_Frame_640f59b1:

 :ref:`Vector4<api_Vector4>`  **Frame::color** () const

Returns the color of the frame to be drawn.

**See also** setColor().

----

.. _api_Frame_8ad2659e:

 :ref:`Vector4<api_Vector4>`  **Frame::corners** () const

Returns the corners radiuses of the frame.

**See also** setCorners().

----

.. _api_Frame_31e2ab58:

 :ref:`Vector4<api_Vector4>`  **Frame::leftColor** () const

Returns the left border color of the frame.

**See also** setLeftColor().

----

.. _api_Frame_f8c5e307:

 :ref:`Vector4<api_Vector4>`  **Frame::rightColor** () const

Returns the right border color of the frame.

**See also** setRightColor().

----

.. _api_Frame_c14b3f9a:

 void **Frame::setBorderColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the border *color* of the frame.

----

.. _api_Frame_9f386271:

 void **Frame::setBottomColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the bottom border *color* of the frame.

**See also** bottomColor().

----

.. _api_Frame_0cd71963:

 void **Frame::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the frame to be drawn.

**See also** color().

----

.. _api_Frame_7289403a:

 void **Frame::setCorners** (:ref:`Vector4<api_Vector4>` & *corners*)

Sets the *corners* radiuses of the frame.

**See also** corners().

----

.. _api_Frame_7cd18b90:

 void **Frame::setLeftColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the left border *color* of the frame.

**See also** leftColor().

----

.. _api_Frame_2a1f4859:

 void **Frame::setRightColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the right border *color* of the frame.

**See also** rightColor().

----

.. _api_Frame_b9e17653:

 void **Frame::setTopColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the top border *color* of the frame.

**See also** topColor().

----

.. _api_Frame_321fd4a5:

 :ref:`Vector4<api_Vector4>`  **Frame::topColor** () const

Returns the top border color of the frame.

**See also** setTopColor().


