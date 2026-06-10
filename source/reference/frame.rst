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
|  :ref:`Vector4<api_Vector4>` | :ref:`bottomColor<api_Frame_079153c8>` () const                   |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`boundChanged<api_Frame_2475ab3c>` (const Vector2 & size)    |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_Frame_61fe9b82>` () const                         |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`corners<api_Frame_d2349a7e>` () const                       |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`leftColor<api_Frame_21e90845>` () const                     |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`rightColor<api_Frame_e5426bdc>` () const                    |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setBorderColor<api_Frame_10f5ed8a>` (const Vector4 & color) |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setBottomColor<api_Frame_5e4823b0>` (const Vector4 & color) |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setColor<api_Frame_1f8ea629>` (const Vector4 & color)       |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setCorners<api_Frame_549cab70>` (const Vector4 & corners)   |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setLeftColor<api_Frame_16ce324b>` (const Vector4 & color)   |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setRightColor<api_Frame_1e23bc9a>` (const Vector4 & color)  |
+------------------------------+-------------------------------------------------------------------+
|                         void | :ref:`setTopColor<api_Frame_b41c7e59>` (const Vector4 & color)    |
+------------------------------+-------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`topColor<api_Frame_9a516df8>` () const                      |
+------------------------------+-------------------------------------------------------------------+



.. _api_Frame_static:

Static Methods
--------------

None

.. _api_Frame_methods:

Methods Description
-------------------

.. _api_Frame_079153c8:

 :ref:`Vector4<api_Vector4>`  **Frame::bottomColor** () const

Returns the bottom border color of the frame.

**See also** setBottomColor().

----

.. _api_Frame_2475ab3c:

 void **Frame::boundChanged** (:ref:`Vector2<api_Vector2>` & *size*)

Reimplements: Widget::boundChanged(const Vector2 &size).

Callback method called when the *size* of the frame changed. Updates material properties based on corner radius and border width.

----

.. _api_Frame_61fe9b82:

 :ref:`Vector4<api_Vector4>`  **Frame::color** () const

Returns the color of the frame to be drawn.

**See also** setColor().

----

.. _api_Frame_d2349a7e:

 :ref:`Vector4<api_Vector4>`  **Frame::corners** () const

Returns the corners radiuses of the frame.

**See also** setCorners().

----

.. _api_Frame_21e90845:

 :ref:`Vector4<api_Vector4>`  **Frame::leftColor** () const

Returns the left border color of the frame.

**See also** setLeftColor().

----

.. _api_Frame_e5426bdc:

 :ref:`Vector4<api_Vector4>`  **Frame::rightColor** () const

Returns the right border color of the frame.

**See also** setRightColor().

----

.. _api_Frame_10f5ed8a:

 void **Frame::setBorderColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the border *color* of the frame.

----

.. _api_Frame_5e4823b0:

 void **Frame::setBottomColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the bottom border *color* of the frame.

**See also** bottomColor().

----

.. _api_Frame_1f8ea629:

 void **Frame::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the frame to be drawn.

**See also** color().

----

.. _api_Frame_549cab70:

 void **Frame::setCorners** (:ref:`Vector4<api_Vector4>` & *corners*)

Sets the *corners* radiuses of the frame.

**See also** corners().

----

.. _api_Frame_16ce324b:

 void **Frame::setLeftColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the left border *color* of the frame.

**See also** leftColor().

----

.. _api_Frame_1e23bc9a:

 void **Frame::setRightColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the right border *color* of the frame.

**See also** rightColor().

----

.. _api_Frame_b41c7e59:

 void **Frame::setTopColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the top border *color* of the frame.

**See also** topColor().

----

.. _api_Frame_9a516df8:

 :ref:`Vector4<api_Vector4>`  **Frame::topColor** () const

Returns the top border color of the frame.

**See also** setTopColor().


