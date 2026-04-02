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
|                                 | :ref:`AABBox<api_AABBox_689ef312>` ()                                                    |
+---------------------------------+------------------------------------------------------------------------------------------+
|                                 | :ref:`AABBox<api_AABBox_e3a59718>` (const Vector3 & center, const Vector3 & extent)      |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            void | :ref:`box<api_AABBox_e9f537c2>` (Vector3 & min, Vector3 & max) const                     |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            void | :ref:`encapsulate<api_AABBox_7e319fb8>` (const AABBox & aabb)                            |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            void | :ref:`encapsulate<api_AABBox_207f84ae>` (const Vector3 & position, areal  radius = 0.0f) |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            bool | :ref:`intersect<api_AABBox_ac68312e>` (const Plane & plane) const                        |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            bool | :ref:`intersect<api_AABBox_9510cd26>` (const Vector3 & position, areal  radius) const    |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            bool | :ref:`isValid<api_AABBox_a7b95e6d>` () const                                             |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            void | :ref:`setBox<api_AABBox_efb8a146>` (const Vector3 & min, const Vector3 & max)            |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            void | :ref:`setBox<api_AABBox_d8a4bf5c>` (const Vector3 * points, uint32_t  number)            |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            bool | :ref:`operator!=<api_AABBox_6e8fa391>` (const AABBox & box) const                        |
+---------------------------------+------------------------------------------------------------------------------------------+
| const :ref:`AABBox<api_AABBox>` | :ref:`operator*<api_AABBox_2304cba9>` (areal  factor) const                              |
+---------------------------------+------------------------------------------------------------------------------------------+
| const :ref:`AABBox<api_AABBox>` | :ref:`operator*<api_AABBox_a86702d5>` (const Matrix3 & matrix) const                     |
+---------------------------------+------------------------------------------------------------------------------------------+
| const :ref:`AABBox<api_AABBox>` | :ref:`operator*<api_AABBox_892ac7ef>` (const Matrix4 & matrix) const                     |
+---------------------------------+------------------------------------------------------------------------------------------+
| const :ref:`AABBox<api_AABBox>` | :ref:`operator*<api_AABBox_0b671c43>` (const Quaternion & quaternion) const              |
+---------------------------------+------------------------------------------------------------------------------------------+
| const :ref:`AABBox<api_AABBox>` | :ref:`operator*<api_AABBox_d48abf97>` (const Vector3 & vector) const                     |
+---------------------------------+------------------------------------------------------------------------------------------+
|     :ref:`AABBox<api_AABBox>` & | :ref:`operator*=<api_AABBox_a9cb3f72>` (const Matrix3 & matrix)                          |
+---------------------------------+------------------------------------------------------------------------------------------+
|     :ref:`AABBox<api_AABBox>` & | :ref:`operator*=<api_AABBox_e4f7dc1b>` (const Matrix4 & matrix)                          |
+---------------------------------+------------------------------------------------------------------------------------------+
|     :ref:`AABBox<api_AABBox>` & | :ref:`operator*=<api_AABBox_de60a8cb>` (const Quaternion & quaternion)                   |
+---------------------------------+------------------------------------------------------------------------------------------+
|     :ref:`AABBox<api_AABBox>` & | :ref:`operator=<api_AABBox_537a9f0b>` (const AABBox & value)                             |
+---------------------------------+------------------------------------------------------------------------------------------+
|                            bool | :ref:`operator==<api_AABBox_68fae1c4>` (const AABBox & box) const                        |
+---------------------------------+------------------------------------------------------------------------------------------+



.. _api_AABBox_static:

Static Methods
--------------

None

.. _api_AABBox_methods:

Methods Description
-------------------

.. _api_AABBox_689ef312:

**AABBox::AABBox** ()

Constructs an bounding box with center (0, 0, 0) and extent (0.5, 0.5, 0.5).

----

.. _api_AABBox_e3a59718:

**AABBox::AABBox** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector3<api_Vector3>` & *extent*)

Constructs a bounding box with *center* and *extent*.

----

.. _api_AABBox_e9f537c2:

 void **AABBox::box** (:ref:`Vector3<api_Vector3>` & *min*, :ref:`Vector3<api_Vector3>` & *max*) const

Returns *min* and *max* points of bounding box as output arguments.

**See also** setBox().

----

.. _api_AABBox_7e319fb8:

 void **AABBox::encapsulate** (:ref:`AABBox<api_AABBox>` & *aabb*)

Grow the AABBox to encapsulate the *aabb*.

----

.. _api_AABBox_207f84ae:

 void **AABBox::encapsulate** (:ref:`Vector3<api_Vector3>` & *position*, areal  *radius* = 0.0f)

Grow the AABBox to encapsulate a spehere with *position* and *radius*.

----

.. _api_AABBox_ac68312e:

 bool **AABBox::intersect** (:ref:`Plane<api_Plane>` & *plane*) const

Returns true if this bounding box intersects the given *plane*; otherwise returns false.

----

.. _api_AABBox_9510cd26:

 bool **AABBox::intersect** (:ref:`Vector3<api_Vector3>` & *position*, areal  *radius*) const

Returns true if this bounding box intersects the given sphere at *position* and *radius*; otherwise returns false.

----

.. _api_AABBox_a7b95e6d:

 bool **AABBox::isValid** () const

Returns true in case of AABBox is valid; otherwise returns false.

----

.. _api_AABBox_efb8a146:

 void **AABBox::setBox** (:ref:`Vector3<api_Vector3>` & *min*, :ref:`Vector3<api_Vector3>` & *max*)

Set current bounding box by *min* and *max* points.

**See also** box().

----

.. _api_AABBox_d8a4bf5c:

 void **AABBox::setBox** (:ref:`Vector3<api_Vector3>` * *points*, uint32_t  *number*)

Set curent bounding box by provided array of *points* and *number* of them.

----

.. _api_AABBox_6e8fa391:

 bool **AABBox::operator!=** (:ref:`AABBox<api_AABBox>` & *box*) const

Returns true if this bounding *box* is NOT equal to given bounding *box*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_AABBox_2304cba9:

const :ref:`AABBox<api_AABBox>`  **AABBox::operator*** (areal  *factor*) const

Returns a copy of this box, multiplied by the given *factor*.

----

.. _api_AABBox_a86702d5:

const :ref:`AABBox<api_AABBox>`  **AABBox::operator*** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns a copy of this box, multiplied by the given rotation *matrix*.

----

.. _api_AABBox_892ac7ef:

const :ref:`AABBox<api_AABBox>`  **AABBox::operator*** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns a copy of this box, multiplied by the given transform *matrix*.

----

.. _api_AABBox_0b671c43:

const :ref:`AABBox<api_AABBox>`  **AABBox::operator*** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns a copy of this box, multiplied by the given *quaternion*.

----

.. _api_AABBox_d48abf97:

const :ref:`AABBox<api_AABBox>`  **AABBox::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns a copy of this box, multiplied by the given *vector*.

----

.. _api_AABBox_a9cb3f72:

 :ref:`AABBox<api_AABBox>` & **AABBox::operator*=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Multiplies this box by the given rotation *matrix*, and returns a reference to this AABB.

----

.. _api_AABBox_e4f7dc1b:

 :ref:`AABBox<api_AABBox>` & **AABBox::operator*=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Multiplies this box by the given transform *matrix*, and returns a reference to this AABB.

----

.. _api_AABBox_de60a8cb:

 :ref:`AABBox<api_AABBox>` & **AABBox::operator*=** (:ref:`Quaternion<api_Quaternion>` & *quaternion*)

Multiplies this box by the given *quaternion*, and returns a reference to this AABB.

----

.. _api_AABBox_537a9f0b:

 :ref:`AABBox<api_AABBox>` & **AABBox::operator=** (:ref:`AABBox<api_AABBox>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_AABBox_68fae1c4:

 bool **AABBox::operator==** (:ref:`AABBox<api_AABBox>` & *box*) const

Returns true if this bounding *box* is equal to given bounding *box*; otherwise returns false. This operator uses an exact floating-point comparison.


