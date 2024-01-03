.. _api_AABBox:

AABBox Class
============

Inherited: None

.. _api_AABBox_description:

Description
-----------

Bounded volume in space in the form of a rectangular parallelepiped, with a period parallel to the coordinate axes in the world system. When the object rotates, the AABB changes its dimensions, but it always remains oriented along the coordinate axes. Axis Aligned Bounding Box represented by center of box and extent.



.. _api_AABBox_public:

Public Methods
--------------

+---------------------------------+---------------------------------------------------------------------------------------------+
|                                 | :ref:`AABBox<api_AABBox_AABBox>` (const Vector3 & center, const Vector3 & extent)           |
+---------------------------------+---------------------------------------------------------------------------------------------+
|                                 | :ref:`AABBox<api_AABBox_AABBox>` ()                                                         |
+---------------------------------+---------------------------------------------------------------------------------------------+
|                            void | :ref:`box<api_AABBox_box>` (Vector3 & min, Vector3 & max) const                             |
+---------------------------------+---------------------------------------------------------------------------------------------+
|                            void | :ref:`encapsulate<api_AABBox_encapsulate>` (const Vector3 & position, areal  radius = 0.0f) |
+---------------------------------+---------------------------------------------------------------------------------------------+
|                            void | :ref:`encapsulate<api_AABBox_encapsulate>` (const AABBox & aabb)                            |
+---------------------------------+---------------------------------------------------------------------------------------------+
|                            bool | :ref:`intersect<api_AABBox_intersect>` (const Vector3 & position, areal  radius) const      |
+---------------------------------+---------------------------------------------------------------------------------------------+
|                            bool | :ref:`intersect<api_AABBox_intersect>` (const Plane * planes, areal  count) const           |
+---------------------------------+---------------------------------------------------------------------------------------------+
|                            bool | :ref:`isValid<api_AABBox_isValid>` () const                                                 |
+---------------------------------+---------------------------------------------------------------------------------------------+
|                            void | :ref:`setBox<api_AABBox_setBox>` (const Vector3 & min, const Vector3 & max)                 |
+---------------------------------+---------------------------------------------------------------------------------------------+
|                            void | :ref:`setBox<api_AABBox_setBox>` (const Vector3 * points, int  number)                      |
+---------------------------------+---------------------------------------------------------------------------------------------+
|                            bool | :ref:`operator!=<api_AABBox_operator!=>` (const AABBox & box) const                         |
+---------------------------------+---------------------------------------------------------------------------------------------+
| const :ref:`AABBox<api_AABBox>` | :ref:`operator*<api_AABBox_operator*>` (areal  factor) const                                |
+---------------------------------+---------------------------------------------------------------------------------------------+
| const :ref:`AABBox<api_AABBox>` | :ref:`operator*<api_AABBox_operator*>` (const Vector3 & vector) const                       |
+---------------------------------+---------------------------------------------------------------------------------------------+
| const :ref:`AABBox<api_AABBox>` | :ref:`operator*<api_AABBox_operator*>` (const Matrix3 & matrix) const                       |
+---------------------------------+---------------------------------------------------------------------------------------------+
| const :ref:`AABBox<api_AABBox>` | :ref:`operator*<api_AABBox_operator*>` (const Matrix4 & matrix) const                       |
+---------------------------------+---------------------------------------------------------------------------------------------+
|     :ref:`AABBox<api_AABBox>` & | :ref:`operator*=<api_AABBox_operator*=>` (const Matrix3 & matrix)                           |
+---------------------------------+---------------------------------------------------------------------------------------------+
|     :ref:`AABBox<api_AABBox>` & | :ref:`operator*=<api_AABBox_operator*=>` (const Matrix4 & matrix)                           |
+---------------------------------+---------------------------------------------------------------------------------------------+
|                            bool | :ref:`operator==<api_AABBox_operator==>` (const AABBox & box) const                         |
+---------------------------------+---------------------------------------------------------------------------------------------+



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

 void **AABBox::box** (:ref:`Vector3<api_Vector3>` & *min*, :ref:`Vector3<api_Vector3>` & *max*) const

Returns *min* and *max* points of bounding box as output arguments.

**See also** setBox().

----

.. _api_AABBox_encapsulate:

 void **AABBox::encapsulate** (:ref:`Vector3<api_Vector3>` & *position*, areal  *radius* = 0.0f)

Grow the AABBox to encapsulate a spehere with *position* and *radius*.

----

.. _api_AABBox_encapsulate:

 void **AABBox::encapsulate** (:ref:`AABBox<api_AABBox>` & *aabb*)

Grow the AABBox to encapsulate the *aabb*.

----

.. _api_AABBox_intersect:

 bool **AABBox::intersect** (:ref:`Vector3<api_Vector3>` & *position*, areal  *radius*) const

Returns true if this bounding box intersects the given sphere at *position* and *radius*; otherwise returns false.

----

.. _api_AABBox_intersect:

 bool **AABBox::intersect** (:ref:`Plane<api_Plane>` * *planes*, areal  *count*) const

Returns true if this bounding box intersects the given *count* of *planes*; otherwise returns false.

----

.. _api_AABBox_isValid:

 bool **AABBox::isValid** () const

Returns true in case of AABBox is valid; otherwise returns false.

----

.. _api_AABBox_setBox:

 void **AABBox::setBox** (:ref:`Vector3<api_Vector3>` & *min*, :ref:`Vector3<api_Vector3>` & *max*)

Set current bounding box by *min* and *max* points.

**See also** box().

----

.. _api_AABBox_setBox:

 void **AABBox::setBox** (:ref:`Vector3<api_Vector3>` * *points*, int  *number*)

Set curent bounding box by provided array of *points* and *number* of them.

----

.. _api_AABBox_operator!=:

 bool **AABBox::operator!=** (:ref:`AABBox<api_AABBox>` & *box*) const

Returns true if this bounding *box* is NOT equal to given bounding *box*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_AABBox_operator*:

const :ref:`AABBox<api_AABBox>` **AABBox::operator*** (areal  *factor*) const

Returns a copy of this box, multiplied by the given *factor*.

----

.. _api_AABBox_operator*:

const :ref:`AABBox<api_AABBox>` **AABBox::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns a copy of this box, multiplied by the given *vector*.

----

.. _api_AABBox_operator*:

const :ref:`AABBox<api_AABBox>` **AABBox::operator*** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns a copy of this box, multiplied by the given rotation *matrix*.

----

.. _api_AABBox_operator*:

const :ref:`AABBox<api_AABBox>` **AABBox::operator*** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns a copy of this box, multiplied by the given transform *matrix*.

----

.. _api_AABBox_operator*=:

 :ref:`AABBox<api_AABBox>`& **AABBox::operator*=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Multiplies this box by the given rotation *matrix*, and returns a reference to this vector.

----

.. _api_AABBox_operator*=:

 :ref:`AABBox<api_AABBox>`& **AABBox::operator*=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Multiplies this box by the given transform *matrix*, and returns a reference to this vector.

----

.. _api_AABBox_operator==:

 bool **AABBox::operator==** (:ref:`AABBox<api_AABBox>` & *box*) const

Returns true if this bounding *box* is equal to given bounding *box*; otherwise returns false. This operator uses an exact floating-point comparison.


