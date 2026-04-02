.. _api_OBBox:

OBBox
=====

Inherited: None

.. _api_OBBox_description:

Description
-----------

An arbitrarily oriented bounded volume in space in the form of a rectangular parallelepiped (Bounding Box). Unlike AABB, OBB rotates with the object and does not change its size. Collision testing with OBB is somewhat more complicated and slower than AABB, but more often it is more preferable. Oriented Bounding Box represented by center of box, size and rotation quaternion.



.. _api_OBBox_public:

Public Methods
--------------

+-------------------------------+----------------------------------------------------------------------------------------------------------------+
|                               | :ref:`OBBox<api_OBBox_9bc76e1f>` ()                                                                            |
+-------------------------------+----------------------------------------------------------------------------------------------------------------+
|                               | :ref:`OBBox<api_OBBox_b157c9f8>` (const Vector3 & center, const Vector3 & extent)                              |
+-------------------------------+----------------------------------------------------------------------------------------------------------------+
|                               | :ref:`OBBox<api_OBBox_89bd1f64>` (const Vector3 & center, const Vector3 & extent, const Quaternion & rotation) |
+-------------------------------+----------------------------------------------------------------------------------------------------------------+
|                          void | :ref:`box<api_OBBox_7fd1bea6>` (Vector3 & min, Vector3 & max) const                                            |
+-------------------------------+----------------------------------------------------------------------------------------------------------------+
|                          void | :ref:`setBox<api_OBBox_d4168e7a>` (const Vector3 & min, const Vector3 & max)                                   |
+-------------------------------+----------------------------------------------------------------------------------------------------------------+
| const :ref:`OBBox<api_OBBox>` | :ref:`operator*<api_OBBox_281de4cf>` (areal  factor) const                                                     |
+-------------------------------+----------------------------------------------------------------------------------------------------------------+
| const :ref:`OBBox<api_OBBox>` | :ref:`operator*<api_OBBox_fd563e72>` (const Vector3 & vector) const                                            |
+-------------------------------+----------------------------------------------------------------------------------------------------------------+
|     :ref:`OBBox<api_OBBox>` & | :ref:`operator=<api_OBBox_a6b5827d>` (const OBBox & value)                                                     |
+-------------------------------+----------------------------------------------------------------------------------------------------------------+



.. _api_OBBox_static:

Static Methods
--------------

None

.. _api_OBBox_methods:

Methods Description
-------------------

.. _api_OBBox_9bc76e1f:

**OBBox::OBBox** ()

Constructs an bounding box with center (0, 0, 0), size (1, 1, 1) and identity rotation.

----

.. _api_OBBox_b157c9f8:

**OBBox::OBBox** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector3<api_Vector3>` & *extent*)

Constructs a bounding box with center, *extent* and identity rotation.

----

.. _api_OBBox_89bd1f64:

**OBBox::OBBox** (:ref:`Vector3<api_Vector3>` & *center*, :ref:`Vector3<api_Vector3>` & *extent*, :ref:`Quaternion<api_Quaternion>` & *rotation*)

Constructs a bounding box with center, *extent* and rotation.

----

.. _api_OBBox_7fd1bea6:

 void **OBBox::box** (:ref:`Vector3<api_Vector3>` & *min*, :ref:`Vector3<api_Vector3>` & *max*) const

Returns *min* and *max* points of bounding box as output arguments.

**See also** setBox().

----

.. _api_OBBox_d4168e7a:

 void **OBBox::setBox** (:ref:`Vector3<api_Vector3>` & *min*, :ref:`Vector3<api_Vector3>` & *max*)

Set curent bounding box by *min* and *max* points.

**See also** box().

----

.. _api_OBBox_281de4cf:

const :ref:`OBBox<api_OBBox>`  **OBBox::operator*** (areal  *factor*) const

Returns a copy of this vector, multiplied by the given factor.

----

.. _api_OBBox_fd563e72:

const :ref:`OBBox<api_OBBox>`  **OBBox::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns a copy of this vector, multiplied by the given vector.

----

.. _api_OBBox_a6b5827d:

 :ref:`OBBox<api_OBBox>` & **OBBox::operator=** (:ref:`OBBox<api_OBBox>` & *value*)

Assignment operator. The *value* will be assigned to this object.


