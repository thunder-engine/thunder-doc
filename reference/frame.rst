.. _api_Frame:

Frame Class
===========

Inherited: :doc:`Image<api_Image>`

.. _api_Frame_description:

Description
-----------



.. _api_Frame_public:

Public Methods
--------------

+------------------------------+----------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`borderColor<api_Frame_borderColor>` () const                   |
+------------------------------+----------------------------------------------------------------------+
|                        float | :ref:`borderWidth<api_Frame_borderWidth>` () const                   |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`boundChanged<api_Frame_boundChanged>` (const Vector2 & bounds) |
+------------------------------+----------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`corners<api_Frame_corners>` () const                           |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setBorderColor<api_Frame_setBorderColor>` (Vector4  color)     |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setBorderWidth<api_Frame_setBorderWidth>` (float  width)       |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setCorners<api_Frame_setCorners>` (Vector4  corners)           |
+------------------------------+----------------------------------------------------------------------+
|                         void | :ref:`setMaterial<api_Frame_setMaterial>` (Material * material)      |
+------------------------------+----------------------------------------------------------------------+



.. _api_Frame_static:

Static Methods
--------------

None

.. _api_Frame_methods:

Methods Description
-------------------

.. _api_Frame_borderColor:

 :ref:`Vector4<api_Vector4>` **Frame::borderColor** () const

Returns the border color of the frame.

**See also** setBorderColor().

----

.. _api_Frame_borderWidth:

 float **Frame::borderWidth** () const

Returns the border width of the frame.

**See also** setBorderWidth().

----

.. _api_Frame_boundChanged:

 void **Frame::boundChanged** (:ref:`Vector2<api_Vector2>` & *bounds*)

Reimplements: Widget::boundChanged(const Vector2 &size).

Callback method called when the *bounds* of the frame change. Updates material properties based on corner radius and border width.

----

.. _api_Frame_corners:

 :ref:`Vector4<api_Vector4>` **Frame::corners** () const

Returns the corners radiuses of the frame.

**See also** setCorners().

----

.. _api_Frame_setBorderColor:

 void **Frame::setBorderColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the border *color* of the frame.

**See also** borderColor().

----

.. _api_Frame_setBorderWidth:

 void **Frame::setBorderWidth** (float  *width*)

Sets the border *width* of the frame.

**See also** borderWidth().

----

.. _api_Frame_setCorners:

 void **Frame::setCorners** (:ref:`Vector4<api_Vector4>`  *corners*)

Sets the *corners* radiuses of the frame.

**See also** *corners*().

----

.. _api_Frame_setMaterial:

 void **Frame::setMaterial** (:ref:`Material<api_Material>` * *material*)

Reimplements: Image::setMaterial(Material *material).

Sets the *material* for the frame and updates *material* properties based on corner radius, border width, and border color.


