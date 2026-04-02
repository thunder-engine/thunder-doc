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
|  :ref:`Vector4<api_Vector4>` | :ref:`bottomColor<api_Frame_e5a40bc9>` () const                   |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`boundChanged<api_Frame_9b2fd3a8>` (const Vector2 & size)    |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_Frame_f7ae62d3>` () const                         |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`corners<api_Frame_d360c15b>` () const                       |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`leftColor<api_Frame_f54b278a>` () const                     |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`rightColor<api_Frame_c960afeb>` () const                    |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setBorderColor<api_Frame_d65a2703>` (const Vector4 & color) |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setBottomColor<api_Frame_f20d1567>` (const Vector4 & color) |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setColor<api_Frame_508c3d1f>` (const Vector4 & color)       |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setCorners<api_Frame_c1764fd8>` (const Vector4 & corners)   |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setLeftColor<api_Frame_96e4a3b1>` (const Vector4 & color)   |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setRightColor<api_Frame_c1873edb>` (const Vector4 & color)  |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setTopColor<api_Frame_c86e01a7>` (const Vector4 & color)    |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`topColor<api_Frame_7bead163>` () const                      |
+------------------------------+-------------------------------------------------------------------+



.. _api_Frame_static:

Static Methods
--------------

None

.. _api_Frame_methods:

Methods Description
-------------------

.. _api_Frame_e5a40bc9:

 :ref:`Vector4<api_Vector4>`  **Frame::bottomColor** () const

Returns the bottom border color of the frame.

**See also** setBottomColor().

----

.. _api_Frame_9b2fd3a8:

 void **Frame::boundChanged** (:ref:`Vector2<api_Vector2>` & *size*)

Reimplements: Widget::boundChanged(const Vector2 &size).

Callback method called when the *size* of the frame changed. Updates material properties based on corner radius and border width.

----

.. _api_Frame_f7ae62d3:

 :ref:`Vector4<api_Vector4>`  **Frame::color** () const

Returns the color of the frame to be drawn.

**See also** setColor().

----

.. _api_Frame_d360c15b:

 :ref:`Vector4<api_Vector4>`  **Frame::corners** () const

Returns the corners radiuses of the frame.

**See also** setCorners().

----

.. _api_Frame_f54b278a:

 :ref:`Vector4<api_Vector4>`  **Frame::leftColor** () const

Returns the left border color of the frame.

**See also** setLeftColor().

----

.. _api_Frame_c960afeb:

 :ref:`Vector4<api_Vector4>`  **Frame::rightColor** () const

Returns the right border color of the frame.

**See also** setRightColor().

----

.. _api_Frame_d65a2703:

 void **Frame::setBorderColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the border *color* of the frame.

----

.. _api_Frame_f20d1567:

 void **Frame::setBottomColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the bottom border *color* of the frame.

**See also** bottomColor().

----

.. _api_Frame_508c3d1f:

 void **Frame::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the frame to be drawn.

**See also** *color*().

----

.. _api_Frame_c1764fd8:

 void **Frame::setCorners** (:ref:`Vector4<api_Vector4>` & *corners*)

Sets the *corners* radiuses of the frame.

**See also** *corners*().

----

.. _api_Frame_96e4a3b1:

 void **Frame::setLeftColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the left border *color* of the frame.

**See also** leftColor().

----

.. _api_Frame_c1873edb:

 void **Frame::setRightColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the right border *color* of the frame.

**See also** rightColor().

----

.. _api_Frame_c86e01a7:

 void **Frame::setTopColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the top border *color* of the frame.

**See also** topColor().

----

.. _api_Frame_7bead163:

 :ref:`Vector4<api_Vector4>`  **Frame::topColor** () const

Returns the top border color of the frame.

**See also** setTopColor().


