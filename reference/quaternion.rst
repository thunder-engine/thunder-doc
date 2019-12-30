.. _api_Quaternion:
Quaternion Class
================

Inherited: None

.. _api_Quaternion_description:
Description
-----------

Quaternions consist of a 3D rotation axis specified by the x, y, and z coordinates, and a w representing the rotation angle.



.. _api_Quaternion_public:
Public Methods
--------------

+-----------------------------------+-----------------------------------------------------------------------------------------+
|                                   | :ref:`Quaternion<api_Quaternion_Quaternion>` (const Matrix3 & matrix)                   |
+-----------------------------------+-----------------------------------------------------------------------------------------+
|                                   | :ref:`Quaternion<api_Quaternion_Quaternion>` (const Vector3 & euler)                    |
+-----------------------------------+-----------------------------------------------------------------------------------------+
|                                   | :ref:`Quaternion<api_Quaternion_Quaternion>` (const Vector3 & dir, areal  angle)        |
+-----------------------------------+-----------------------------------------------------------------------------------------+
|                                   | :ref:`Quaternion<api_Quaternion_Quaternion>` ()                                         |
+-----------------------------------+-----------------------------------------------------------------------------------------+
|       :ref:`Vector3<api_Vector3>` | :ref:`euler<api_Quaternion_euler>` () const                                             |
+-----------------------------------+-----------------------------------------------------------------------------------------+
| :ref:`Quaternion<api_Quaternion>` | :ref:`inverse<api_Quaternion_inverse>` () const                                         |
+-----------------------------------+-----------------------------------------------------------------------------------------+
|             :ref:`void<api_void>` | :ref:`mix<api_Quaternion_mix>` (const Quaternion & q0, const Quaternion & q1, areal  t) |
+-----------------------------------+-----------------------------------------------------------------------------------------+
|       :ref:`Matrix3<api_Matrix3>` | :ref:`toMatrix<api_Quaternion_toMatrix>` () const                                       |
+-----------------------------------+-----------------------------------------------------------------------------------------+
|             :ref:`bool<api_bool>` | :ref:`operator!=<api_Quaternion_operator!=>` (const Quaternion & quaternion) const      |
+-----------------------------------+-----------------------------------------------------------------------------------------+
| :ref:`Quaternion<api_Quaternion>` | :ref:`operator*<api_Quaternion_operator*>` (const Quaternion & quaternion) const        |
+-----------------------------------+-----------------------------------------------------------------------------------------+
|       :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Quaternion_operator*>` (const Vector3 & vector) const               |
+-----------------------------------+-----------------------------------------------------------------------------------------+
|             :ref:`bool<api_bool>` | :ref:`operator==<api_Quaternion_operator==>` (const Quaternion & quaternion) const      |
+-----------------------------------+-----------------------------------------------------------------------------------------+
|         :ref:`areal<api_areal>` & | :ref:`operator[]<api_Quaternion_operator[]>` (int  i)                                   |
+-----------------------------------+-----------------------------------------------------------------------------------------+
|           :ref:`areal<api_areal>` | :ref:`operator[]<api_Quaternion_operator[]>` (int  i) const                             |
+-----------------------------------+-----------------------------------------------------------------------------------------+

.. _api_Quaternion_static:
Static Methods
--------------

None

.. _api_Quaternion_methods:
Methods Description
-------------------

.. _api_Quaternion_Quaternion:

**Quaternion::Quaternion** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Constructs a quaternion by rotation *matrix* represented by Matrix3 *matrix*.

----

.. _api_Quaternion_Quaternion:

**Quaternion::Quaternion** (:ref:`Vector3<api_Vector3>` & *euler*)

Constructs a quaternion by Euler angles represented by Vector3(pitch, yaw, roll) *euler* in rotation degrees.

----

.. _api_Quaternion_Quaternion:

**Quaternion::Quaternion** (:ref:`Vector3<api_Vector3>` & *dir*, :ref:`areal<api_areal>`  *angle*)

Constructs a quaternion with rotation axis *dir* and *angle* in rotation degrees.

----

.. _api_Quaternion_Quaternion:

**Quaternion::Quaternion** ()

Constructs an identity quaternion.

----

.. _api_Quaternion_euler:

:ref:`Vector3<api_Vector3>`  **Quaternion::euler** () const

Returns the Euler angles represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Quaternion_inverse:

:ref:`Quaternion<api_Quaternion>`  **Quaternion::inverse** () const

Returns the inverse of this quaternion.

----

.. _api_Quaternion_mix:

:ref:`void<api_void>`  **Quaternion::mix** (:ref:`Quaternion<api_Quaternion>` & *q0*, :ref:`Quaternion<api_Quaternion>` & *q1*, :ref:`areal<api_areal>`  *t*)

Linear inerpolation between *q0* and *q1* with *t* factor.

----

.. _api_Quaternion_toMatrix:

:ref:`Matrix3<api_Matrix3>`  **Quaternion::toMatrix** () const

Returns the rotation matrix for this quaternion.

----

.. _api_Quaternion_operator!=:

:ref:`bool<api_bool>`  **Quaternion::operator!=** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns true if this *quaternion* is NOT equal to given *quaternion*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Quaternion_operator*:

:ref:`Quaternion<api_Quaternion>`  **Quaternion::operator*** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Multiplies this *quaternion* and *quaternion* using *quaternion* multiplication. The result corresponds to applying both of the rotations specified by this *quaternion* and *quaternion*.

----

.. _api_Quaternion_operator*:

:ref:`Vector3<api_Vector3>`  **Quaternion::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Rotates a *vector* vec with this quaternion to produce a new *vector* in 3D space.

----

.. _api_Quaternion_operator==:

:ref:`bool<api_bool>`  **Quaternion::operator==** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns true if this *quaternion* is equal to given *quaternion*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Quaternion_operator[]:

:ref:`areal<api_areal>` & **Quaternion::operator[]** (:ref:`int<api_int>`  *i*)

Returns the component of the quaternion at *i*ndex position *i* as a modifiable reference. *i* must be a valid *i*ndex position *i*n the quaternion (i.e., 0 <= *i* < 4).

----

.. _api_Quaternion_operator[]:

:ref:`areal<api_areal>`  **Quaternion::operator[]** (:ref:`int<api_int>`  *i*) const

Returns the component of the quaternion at *i*ndex position. *i* must be a valid *i*ndex position *i*n the quaternion (i.e., 0 <= *i* < 4).

----


