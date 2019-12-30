.. _api_AABBox:
AABBox Class
================

Inherited: None

.. _api_AABBox_description:
Description
-----------

Bounded volume in space in the form of a rectangular parallelepiped, with a period parallel to the coordinate axes in the world system. When the object rotates, the AABB changes its dimensions, but it always remains oriented along the coordinate axes. Axis Aligned Bounding Box represented by center of box and extent.



.. _api_AABBox_public:
Public Methods
--------------

+---------------------------------------+----------------------------------------------------------------------------------------+
|                                       | :ref:`AABBox<api_AABBox_AABBox>` (const Vector3 & center, const Vector3 & extent)      |
+---------------------------------------+----------------------------------------------------------------------------------------+
|                                       | :ref:`AABBox<api_AABBox_AABBox>` ()                                                    |
+---------------------------------------+----------------------------------------------------------------------------------------+
|                 :ref:`void<api_void>` | :ref:`box<api_AABBox_box>` (Vector3 & min, Vector3 & max) const                        |
+---------------------------------------+----------------------------------------------------------------------------------------+
|                 :ref:`void<api_void>` | :ref:`encapsulate<api_AABBox_encapsulate>` (const Vector3 & point)                     |
+---------------------------------------+----------------------------------------------------------------------------------------+
|                 :ref:`void<api_void>` | :ref:`encapsulate<api_AABBox_encapsulate>` (const AABBox & box)                        |
+---------------------------------------+----------------------------------------------------------------------------------------+
|                 :ref:`bool<api_bool>` | :ref:`intersect<api_AABBox_intersect>` (const Vector3 & position, areal  radius) const |
+---------------------------------------+----------------------------------------------------------------------------------------+
|                 :ref:`bool<api_bool>` | :ref:`intersect<api_AABBox_intersect>` (const Plane * planes, areal  count) const      |
+---------------------------------------+----------------------------------------------------------------------------------------+
|                 :ref:`void<api_void>` | :ref:`setBox<api_AABBox_setBox>` (const Vector3 & min, const Vector3 & max)            |
+---------------------------------------+----------------------------------------------------------------------------------------+
|                 :ref:`void<api_void>` | :ref:`setBox<api_AABBox_setBox>` (const Vector3 * points, uint32_t  number)            |
+---------------------------------------+----------------------------------------------------------------------------------------+
| :ref:`const AABBox<api_const AABBox>` | :ref:`operator*<api_AABBox_operator*>` (areal  factor) const                           |
+---------------------------------------+----------------------------------------------------------------------------------------+
| :ref:`const AABBox<api_const AABBox>` | :ref:`operator*<api_AABBox_operator*>` (const Vector3 & vector) const                  |
+---------------------------------------+----------------------------------------------------------------------------------------+
| :ref:`const AABBox<api_const AABBox>` | :ref:`operator*<api_AABBox_operator*>` (const Matrix4 & matrix) const                  |
+---------------------------------------+----------------------------------------------------------------------------------------+

.. _api_AABBox_static:
Static Methods
--------------

None

.. _api_AABBox_methods:
Methods Description
-------------------

.. _api_AABBox_AABBox:

**AABBox::AABBox** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector3<api_Vector3>` & *extent*)

Constructs a bounding box with *center* and *extent*.

----

.. _api_AABBox_AABBox:

**AABBox::AABBox** ()

Constructs an bounding box with center (0, 0, 0) and extent (0.5, 0.5, 0.5).

----

.. _api_AABBox_box:

:ref:`void<api_void>`  **AABBox::box** (:ref:`Vector3<api_Vector3>` & *min*, :ref:`Vector3<api_Vector3>` & *max*) const

Returns *min* and *max* points of bounding box as output arguments.

**See also** setBox().

----

.. _api_AABBox_encapsulate:

:ref:`void<api_void>`  **AABBox::encapsulate** (:ref:`Vector3<api_Vector3>` & *point*)

Grows the AABBox to include the *point*.

----

.. _api_AABBox_encapsulate:

:ref:`void<api_void>`  **AABBox::encapsulate** (:ref:`AABBox<api_AABBox>` & *box*)

Grow the AABBox to encapsulate the *box*.

----

.. _api_AABBox_intersect:

:ref:`bool<api_bool>`  **AABBox::intersect** (:ref:`Vector3<api_Vector3>` & *position*, :ref:`areal<api_areal>`  *radius*) const

Returns true if this bounding box intersects the given sphere at *position* and *radius*; otherwise returns false.

----

.. _api_AABBox_intersect:

:ref:`bool<api_bool>`  **AABBox::intersect** (:ref:`Plane<api_Plane>` * *planes*, :ref:`areal<api_areal>`  *count*) const

Returns true if this bounding box intersects the given *count* of *planes*; otherwise returns false.

----

.. _api_AABBox_setBox:

:ref:`void<api_void>`  **AABBox::setBox** (:ref:`Vector3<api_Vector3>` & *min*, :ref:`Vector3<api_Vector3>` & *max*)

Set current bounding box by *min* and *max* points.

**See also** box().

----

.. _api_AABBox_setBox:

:ref:`void<api_void>`  **AABBox::setBox** (:ref:`Vector3<api_Vector3>` * *points*, :ref:`uint32_t<api_uint32_t>`  *number*)

Set curent bounding box by provided array of *points* and *number* of them.

----

.. _api_AABBox_operator*:

:ref:`const AABBox<api_const AABBox>`  **AABBox::operator*** (:ref:`areal<api_areal>`  *factor*) const

Returns a copy of this box, multiplied by the given *factor*.

----

.. _api_AABBox_operator*:

:ref:`const AABBox<api_const AABBox>`  **AABBox::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns a copy of this box, multiplied by the given *vector*.

----

.. _api_AABBox_operator*:

:ref:`const AABBox<api_const AABBox>`  **AABBox::operator*** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns a copy of this box, multiplied by the given *matrix*.

----


