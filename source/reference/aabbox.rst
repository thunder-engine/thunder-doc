.. _api_AABBox:

AABBox
======

Inherited: None

.. _api_AABBox_description:

Description
-----------

Bounded volume in space in the form of a rectangular parallelepiped, with a period parallel to the coordinate axes in the world system. When the object rotates, the AABB changes its dimensions, but it always remains oriented along the coordinate axes. Axis Aligned Bounding Box represented by center of box and extent.



.. _api_AABBox_public:

Public Methods
--------------

+---------------------------------+------------------------------------------------------------------------------------------+
|                                 | :ref:`AABBox<api_AABBox_48215e3a>` ()                                                    |
+---------------------------------+------------------------------------------------------------------------------------------+
|                                 | :ref:`AABBox<api_AABBox_49cd5f1b>` (const Vector3 & center, const Vector3 & extent)      |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            void | :ref:`box<api_AABBox_f8ced3b6>` (Vector3 & min, Vector3 & max) const                     |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            void | :ref:`encapsulate<api_AABBox_83cba5f2>` (const Vector3 & position, areal  radius = 0.0f) |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            void | :ref:`encapsulate<api_AABBox_19ed5f30>` (const AABBox & aabb)                            |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            bool | :ref:`intersect<api_AABBox_45ebcf97>` (const Vector3 & position, areal  radius) const    |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            bool | :ref:`intersect<api_AABBox_2d54a7e1>` (const Plane & plane) const                        |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            bool | :ref:`isValid<api_AABBox_3ae4b0df>` () const                                             |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            void | :ref:`setBox<api_AABBox_36f82ce9>` (const Vector3 & min, const Vector3 & max)            |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            void | :ref:`setBox<api_AABBox_7ce91835>` (const Vector3 * points, uint32_t  number)            |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            bool | :ref:`operator!=<api_AABBox_20c18e7b>` (const AABBox & box) const                        |
+---------------------------------+------------------------------------------------------------------------------------------+
| const :ref:`AABBox<api_AABBox>` | :ref:`operator*<api_AABBox_59417c6b>` (areal  factor) const                              |
+---------------------------------+------------------------------------------------------------------------------------------+
| const :ref:`AABBox<api_AABBox>` | :ref:`operator*<api_AABBox_d8c4a7bf>` (const Vector3 & vector) const                     |
+---------------------------------+------------------------------------------------------------------------------------------+
| const :ref:`AABBox<api_AABBox>` | :ref:`operator*<api_AABBox_0324dec6>` (const Matrix3 & matrix) const                     |
+---------------------------------+------------------------------------------------------------------------------------------+
| const :ref:`AABBox<api_AABBox>` | :ref:`operator*<api_AABBox_01f4eb2a>` (const Matrix4 & matrix) const                     |
+---------------------------------+------------------------------------------------------------------------------------------+
| const :ref:`AABBox<api_AABBox>` | :ref:`operator*<api_AABBox_9643a01b>` (const Quaternion & quaternion) const              |
+---------------------------------+------------------------------------------------------------------------------------------+
|     :ref:`AABBox<api_AABBox>` & | :ref:`operator*=<api_AABBox_6741b3f5>` (const Matrix3 & matrix)                          |
+---------------------------------+------------------------------------------------------------------------------------------+
|     :ref:`AABBox<api_AABBox>` & | :ref:`operator*=<api_AABBox_b927c450>` (const Matrix4 & matrix)                          |
+---------------------------------+------------------------------------------------------------------------------------------+
|     :ref:`AABBox<api_AABBox>` & | :ref:`operator*=<api_AABBox_e6d3b78c>` (const Quaternion & quaternion)                   |
+---------------------------------+------------------------------------------------------------------------------------------+
|     :ref:`AABBox<api_AABBox>` & | :ref:`operator=<api_AABBox_5ad17e0f>` (const AABBox & value)                             |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            bool | :ref:`operator==<api_AABBox_38f0abd9>` (const AABBox & box) const                        |
+---------------------------------+------------------------------------------------------------------------------------------+



.. _api_AABBox_static:

Static Methods
--------------

None

.. _api_AABBox_methods:

Methods Description
-------------------

.. _api_AABBox_48215e3a:

**AABBox::AABBox** ()

Constructs an bounding box with center (0, 0, 0) and extent (0.5, 0.5, 0.5).

----

.. _api_AABBox_49cd5f1b:

**AABBox::AABBox** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector3<api_Vector3>` & *extent*)

Constructs a bounding box with *center* and extent.

----

.. _api_AABBox_f8ced3b6:

 void **AABBox::box** (:ref:`Vector3<api_Vector3>` & *min*, :ref:`Vector3<api_Vector3>` & *max*) const

Returns *min* and *max* points of bounding box as output arguments.

**See also** setBox().

----

.. _api_AABBox_83cba5f2:

 void **AABBox::encapsulate** (:ref:`Vector3<api_Vector3>` & *position*, areal  *radius* = 0.0f)

Grow the AABBox to encapsulate a spehere with *position* and radius.

----

.. _api_AABBox_19ed5f30:

 void **AABBox::encapsulate** (:ref:`AABBox<api_AABBox>` & *aabb*)

Grow the AABBox to encapsulate the aabb.

----

.. _api_AABBox_45ebcf97:

 bool **AABBox::intersect** (:ref:`Vector3<api_Vector3>` & *position*, areal  *radius*) const

Returns true if this bounding box intersects the given sphere at *position* and radius; otherwise returns false.

----

.. _api_AABBox_2d54a7e1:

 bool **AABBox::intersect** (:ref:`Plane<api_Plane>` & *plane*) const

Returns true if this bounding box intersects the given plane; otherwise returns false.

----

.. _api_AABBox_3ae4b0df:

 bool **AABBox::isValid** () const

Returns true in case of AABBox is valid; otherwise returns false.

----

.. _api_AABBox_36f82ce9:

 void **AABBox::setBox** (:ref:`Vector3<api_Vector3>` & *min*, :ref:`Vector3<api_Vector3>` & *max*)

Set current bounding box by *min* and *max* points.

**See also** box().

----

.. _api_AABBox_7ce91835:

 void **AABBox::setBox** (:ref:`Vector3<api_Vector3>` * *points*, uint32_t  *number*)

Set curent bounding box by provided array of *points* and *number* of them.

----

.. _api_AABBox_20c18e7b:

 bool **AABBox::operator!=** (:ref:`AABBox<api_AABBox>` & *box*) const

Returns true if this bounding *box* is NOT equal to given bounding box; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_AABBox_59417c6b:

const :ref:`AABBox<api_AABBox>`  **AABBox::operator*** (areal  *factor*) const

Returns a copy of this box, multiplied by the given factor.

----

.. _api_AABBox_d8c4a7bf:

const :ref:`AABBox<api_AABBox>`  **AABBox::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns a copy of this box, multiplied by the given vector.

----

.. _api_AABBox_0324dec6:

const :ref:`AABBox<api_AABBox>`  **AABBox::operator*** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns a copy of this box, multiplied by the given rotation matrix.

----

.. _api_AABBox_01f4eb2a:

const :ref:`AABBox<api_AABBox>`  **AABBox::operator*** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns a copy of this box, multiplied by the given transform matrix.

----

.. _api_AABBox_9643a01b:

const :ref:`AABBox<api_AABBox>`  **AABBox::operator*** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns a copy of this box, multiplied by the given quaternion.

----

.. _api_AABBox_6741b3f5:

 :ref:`AABBox<api_AABBox>` & **AABBox::operator*=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Multiplies this box by the given rotation matrix, and returns a reference to this AABB.

----

.. _api_AABBox_b927c450:

 :ref:`AABBox<api_AABBox>` & **AABBox::operator*=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Multiplies this box by the given transform matrix, and returns a reference to this AABB.

----

.. _api_AABBox_e6d3b78c:

 :ref:`AABBox<api_AABBox>` & **AABBox::operator*=** (:ref:`Quaternion<api_Quaternion>` & *quaternion*)

Multiplies this box by the given quaternion, and returns a reference to this AABB.

----

.. _api_AABBox_5ad17e0f:

 :ref:`AABBox<api_AABBox>` & **AABBox::operator=** (:ref:`AABBox<api_AABBox>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_AABBox_38f0abd9:

 bool **AABBox::operator==** (:ref:`AABBox<api_AABBox>` & *box*) const

Returns true if this bounding *box* is equal to given bounding box; otherwise returns false. This operator uses an exact floating-point comparison.


