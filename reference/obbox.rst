.. _api_OBBox:
OBBox Class
================

Inherited: None

.. _api_OBBox_description:
Description
-----------

An arbitrarily oriented bounded volume in space in the form of a rectangular parallelepiped (Bounding Box). Unlike AABB, OBB rotates with the object and does not change its size. Collision testing with OBB is somewhat more complicated and slower than AABB, but more often it is more preferable. Oriented Bounding Box represented by center of box, size and rotation quaternion.



.. _api_OBBox_public:
Public Methods
--------------

+-------------------------------------+-----------------------------------------------------------------------------------------------------------+
|                                     | :ref:`OBBox<api_OBBox_OBBox>` (const Vector3 & center, const Vector3 & size, const Quaternion & rotation) |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------+
|                                     | :ref:`OBBox<api_OBBox_OBBox>` (const Vector3 & center, const Vector3 & size)                              |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------+
|                                     | :ref:`OBBox<api_OBBox_OBBox>` ()                                                                          |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`box<api_OBBox_box>` (Vector3 & min, Vector3 & max) const                                            |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setBox<api_OBBox_setBox>` (const Vector3 & min, const Vector3 & max)                                |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------+
| :ref:`const OBBox<api_const OBBox>` | :ref:`operator*<api_OBBox_operator*>` (areal  factor) const                                               |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------+
| :ref:`const OBBox<api_const OBBox>` | :ref:`operator*<api_OBBox_operator*>` (const Vector3 & vector) const                                      |
+-------------------------------------+-----------------------------------------------------------------------------------------------------------+



.. _api_OBBox_static:
Static Methods
--------------

None

.. _api_OBBox_methods:
Methods Description
-------------------

.. _api_OBBox_OBBox:

**OBBox::OBBox** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector3<api_Vector3>` & *size*, :ref:`Quaternion<api_Quaternion>` & *rotation*)

Constructs a bounding box with *center*, *size* and *rotation*.

----

.. _api_OBBox_OBBox:

**OBBox::OBBox** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector3<api_Vector3>` & *size*)

Constructs a bounding box with *center*, *size* and identity rotation.

----

.. _api_OBBox_OBBox:

**OBBox::OBBox** ()

Constructs an bounding box with center (0, 0, 0), size (1, 1, 1) and identity rotation.

----

.. _api_OBBox_box:

:ref:`void<api_void>`  **OBBox::box** (:ref:`Vector3<api_Vector3>` & *min*, :ref:`Vector3<api_Vector3>` & *max*) const

Returns *min* and *max* points of bounding box as output arguments.

**See also** setBox().

----

.. _api_OBBox_setBox:

:ref:`void<api_void>`  **OBBox::setBox** (:ref:`Vector3<api_Vector3>` & *min*, :ref:`Vector3<api_Vector3>` & *max*)

Set curent bounding box by *min* and *max* points.

**See also** box().

----

.. _api_OBBox_operator*:

:ref:`const OBBox<api_const OBBox>`  **OBBox::operator*** (:ref:`areal<api_areal>`  *factor*) const

Returns a copy of this vector, multiplied by the given *factor*.

----

.. _api_OBBox_operator*:

:ref:`const OBBox<api_const OBBox>`  **OBBox::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns a copy of this *vector*, multiplied by the given *vector*.

----


