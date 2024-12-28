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

+------------------------------+--------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`bottomColor<api_Frame_bottomColor>` () const                 |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`boundChanged<api_Frame_boundChanged>` (const Vector2 & size) |
+------------------------------+--------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_Frame_color>` () const                             |
+------------------------------+--------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`corners<api_Frame_corners>` () const                         |
+------------------------------+--------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`leftColor<api_Frame_leftColor>` () const                     |
+------------------------------+--------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`rightColor<api_Frame_rightColor>` () const                   |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`setBorderColor<api_Frame_setBorderColor>` (Vector4  color)   |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`setBottomColor<api_Frame_setBottomColor>` (Vector4  color)   |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`setColor<api_Frame_setColor>` (const Vector4  color)         |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`setCorners<api_Frame_setCorners>` (Vector4  corners)         |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`setLeftColor<api_Frame_setLeftColor>` (Vector4  color)       |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`setRightColor<api_Frame_setRightColor>` (Vector4  color)     |
+------------------------------+--------------------------------------------------------------------+
|                         void | :ref:`setTopColor<api_Frame_setTopColor>` (Vector4  color)         |
+------------------------------+--------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`topColor<api_Frame_topColor>` () const                       |
+------------------------------+--------------------------------------------------------------------+



.. _api_Frame_static:

Static Methods
--------------

None

.. _api_Frame_methods:

Methods Description
-------------------

.. _api_Frame_bottomColor:

 :ref:`Vector4<api_Vector4>`  **Frame::bottomColor** () const

Returns the bottom border color of the frame.

**See also** setBottomColor().

----

.. _api_Frame_boundChanged:

 void **Frame::boundChanged** (:ref:`Vector2<api_Vector2>` & *size*)

Reimplements: Widget::boundChanged(const Vector2 &size).

Callback method called when the *size* of the frame changed. Updates material properties based on corner radius and border width.

----

.. _api_Frame_color:

 :ref:`Vector4<api_Vector4>`  **Frame::color** () const

Returns the color of the frame to be drawn.

**See also** setColor().

----

.. _api_Frame_corners:

 :ref:`Vector4<api_Vector4>`  **Frame::corners** () const

Returns the corners radiuses of the frame.

**See also** setCorners().

----

.. _api_Frame_leftColor:

 :ref:`Vector4<api_Vector4>`  **Frame::leftColor** () const

Returns the left border color of the frame.

**See also** setLeftColor().

----

.. _api_Frame_rightColor:

 :ref:`Vector4<api_Vector4>`  **Frame::rightColor** () const

Returns the right border color of the frame.

**See also** setRightColor().

----

.. _api_Frame_setBorderColor:

 void **Frame::setBorderColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the border *color* of the frame.

----

.. _api_Frame_setBottomColor:

 void **Frame::setBottomColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the bottom border *color* of the frame.

**See also** bottomColor().

----

.. _api_Frame_setColor:

 void **Frame::setColor** (:ref:`Vector4<api_Vector4>`  *color*)

Changes the *color* of the frame to be drawn.

**See also** *color*().

----

.. _api_Frame_setCorners:

 void **Frame::setCorners** (:ref:`Vector4<api_Vector4>`  *corners*)

Sets the *corners* radiuses of the frame.

**See also** *corners*().

----

.. _api_Frame_setLeftColor:

 void **Frame::setLeftColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the left border *color* of the frame.

**See also** leftColor().

----

.. _api_Frame_setRightColor:

 void **Frame::setRightColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the right border *color* of the frame.

**See also** rightColor().

----

.. _api_Frame_setTopColor:

 void **Frame::setTopColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the top border *color* of the frame.

**See also** topColor().

----

.. _api_Frame_topColor:

 :ref:`Vector4<api_Vector4>`  **Frame::topColor** () const

Returns the top border color of the frame.

**See also** setTopColor().


