.. _api_Quaternion:

Quaternion
==========

Inherited: None

.. _api_Quaternion_description:

Description
-----------

Quaternions consist of a 3D rotation axis specified by the x, y, and z coordinates, and a w representing the rotation angle.



.. _api_Quaternion_public:

Public Methods
--------------

+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_Quaternion>` ()                                         |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_Quaternion>` (const Matrix3 & matrix)                   |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_Quaternion>` (const Vector3 & euler)                    |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_Quaternion>` (const Vector3 & axis, areal  angle)       |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_Quaternion>` (areal  x, areal  y, areal  z, areal  w)   |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                 void | :ref:`axisAngle<api_Quaternion_axisAngle>` (Vector3 & axis, areal & angle)              |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                areal | :ref:`dot<api_Quaternion_dot>` (const Quaternion & quaternion) const                    |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                 bool | :ref:`equal<api_Quaternion_equal>` (const Quaternion & quaternion) const                |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|          :ref:`Vector3<api_Vector3>` | :ref:`euler<api_Quaternion_euler>` () const                                             |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|    :ref:`Quaternion<api_Quaternion>` | :ref:`inverse<api_Quaternion_inverse>` () const                                         |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                areal | :ref:`length<api_Quaternion_length>` () const                                           |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                 void | :ref:`mix<api_Quaternion_mix>` (const Quaternion & q0, const Quaternion & q1, areal  t) |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                areal | :ref:`normalize<api_Quaternion_normalize>` ()                                           |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                areal | :ref:`sqrLength<api_Quaternion_sqrLength>` () const                                     |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|          :ref:`Matrix3<api_Matrix3>` | :ref:`toMatrix<api_Quaternion_toMatrix>` () const                                       |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                 bool | :ref:`operator!=<api_Quaternion_operator!=>` (const Quaternion & quaternion) const      |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|    :ref:`Quaternion<api_Quaternion>` | :ref:`operator*<api_Quaternion_operator*>` (areal  factor) const                        |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|    :ref:`Quaternion<api_Quaternion>` | :ref:`operator*<api_Quaternion_operator*>` (const Quaternion & quaternion) const        |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|          :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Quaternion_operator*>` (const Vector3 & vector) const               |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|  :ref:`Quaternion<api_Quaternion>` & | :ref:`operator*=<api_Quaternion_operator*=>` (areal  factor)                            |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|    :ref:`Quaternion<api_Quaternion>` | :ref:`operator/<api_Quaternion_operator/>` (areal  divisor) const                       |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|  :ref:`Quaternion<api_Quaternion>` & | :ref:`operator/=<api_Quaternion_operator/=>` (areal  divisor)                           |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                 bool | :ref:`operator==<api_Quaternion_operator==>` (const Quaternion & quaternion) const      |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                areal | :ref:`operator[]<api_Quaternion_operator[]>` (int  i)                                   |
+--------------------------------------+-----------------------------------------------------------------------------------------+
|                                areal | :ref:`operator[]<api_Quaternion_operator[]>` (int  i) const                             |
+--------------------------------------+-----------------------------------------------------------------------------------------+



.. _api_Quaternion_static:

Static Methods
--------------

+------------------------------------+------------------------------------------------------------------------------------------------+
|  :ref:`Quaternion<api_Quaternion>` | :ref:`lookRotation<api_Quaternion_lookRotation>` (const Vector3 & forward, const Vector3 & up) |
+------------------------------------+------------------------------------------------------------------------------------------------+

.. _api_Quaternion_methods:

Methods Description
-------------------

.. _api_Quaternion_Quaternion:

**Quaternion::Quaternion** ()

Constructs an identity quaternion.

----

.. _api_Quaternion_Quaternion:

**Quaternion::Quaternion** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Constructs a quaternion by rotation *matrix* represented by Matrix3 *matrix*.

----

.. _api_Quaternion_Quaternion:

**Quaternion::Quaternion** (:ref:`Vector3<api_Vector3>` & *euler*)

Constructs a quaternion by Euler angles represented by Vector3(pitch, yaw, roll) *euler* in rotation degrees.

----

.. _api_Quaternion_Quaternion:

**Quaternion::Quaternion** (:ref:`Vector3<api_Vector3>` & *axis*, areal  *angle*)

Constructs a quaternion with rotation *axis* and *angle* in rotation degrees.

----

.. _api_Quaternion_Quaternion:

**Quaternion::Quaternion** (areal  *x*, areal  *y*, areal  *z*, areal  *w*)

Constructs a quaternion *w*ith values (x, *y*, *z*, *w*).

----

.. _api_Quaternion_axisAngle:

 void **Quaternion::axisAngle** (:ref:`Vector3<api_Vector3>` & *axis*, areal & *angle*)

Retrives a quaternion as rotation *axis* and *angle* in rotation degrees.

----

.. _api_Quaternion_dot:

 areal **Quaternion::dot** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns the dot-product of this *quaternion* and given *quaternion*.

----

.. _api_Quaternion_equal:

 bool **Quaternion::equal** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns true if *quaternion* approximately equal.

----

.. _api_Quaternion_euler:

 :ref:`Vector3<api_Vector3>`  **Quaternion::euler** () const

Returns the Euler angles represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Quaternion_inverse:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::inverse** () const

Returns the inverse of this quaternion.

----

.. _api_Quaternion_length:

 areal **Quaternion::length** () const

Returns the length of this quaternion.

**See also** sqrLength().

----

.. _api_Quaternion_lookRotation:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::lookRotation** (:ref:`Vector3<api_Vector3>` & *forward*, :ref:`Vector3<api_Vector3>` & *up*)

Creates a rotation with the specified *forward* and *up* directions.

----

.. _api_Quaternion_mix:

 void **Quaternion::mix** (:ref:`Quaternion<api_Quaternion>` & *q0*, :ref:`Quaternion<api_Quaternion>` & *q1*, areal  *t*)

Linear inerpolation between *q0* and *q1* with *t* factor.

----

.. _api_Quaternion_normalize:

 areal **Quaternion::normalize** ()

Normalizes the currect quaternion in place. Returns length of prenormalized quaternion.

**See also** length().

----

.. _api_Quaternion_sqrLength:

 areal **Quaternion::sqrLength** () const

Returns the squared length of this quaternion.

**See also** length().

----

.. _api_Quaternion_toMatrix:

 :ref:`Matrix3<api_Matrix3>`  **Quaternion::toMatrix** () const

Returns the rotation matrix for this quaternion.

----

.. _api_Quaternion_operator!=:

 bool **Quaternion::operator!=** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns true if this *quaternion* is NOT equal to given *quaternion*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Quaternion_operator*:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::operator*** (areal  *factor*) const

Returns a copy of this quaternion, multiplied by the given *factor*.

**See also** operator*=().

----

.. _api_Quaternion_operator*:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::operator*** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Multiplies this *quaternion* and *quaternion* using *quaternion* multiplication. The result corresponds to applying both of the rotations specified by this *quaternion* and *quaternion*.

----

.. _api_Quaternion_operator*:

 :ref:`Vector3<api_Vector3>`  **Quaternion::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Rotates a *vector* vec with this quaternion to produce a new *vector* in 3D space.

----

.. _api_Quaternion_operator*=:

 :ref:`Quaternion<api_Quaternion>` & **Quaternion::operator*=** (areal  *factor*)

Multiplies this quaternion's coordinates by the given *factor*, and returns a reference to this quaternion.

**See also** operator/=().

----

.. _api_Quaternion_operator/:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::operator/** (areal  *divisor*) const

Returns a copy of this quaternion, divided by the given *divisor*.

**See also** operator/=().

----

.. _api_Quaternion_operator/=:

 :ref:`Quaternion<api_Quaternion>` & **Quaternion::operator/=** (areal  *divisor*)

Divides this quaternion's coordinates by the given *divisor*, and returns a reference to this quaternion.

**See also** operator*=().

----

.. _api_Quaternion_operator==:

 bool **Quaternion::operator==** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns true if this *quaternion* is equal to given *quaternion*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Quaternion_operator[]:

 areal **Quaternion::operator[]** (int  *i*)

Returns the component of the quaternion at *i*ndex position *i* as a modifiable reference. *i* must be a valid *i*ndex position *i*n the quaternion (i.e., 0 <= *i* < 4).

.. _api_Quaternion_operator[]:

 areal **Quaternion::operator[]** (int  *i*) const

Returns the component of the quaternion at *i*ndex position. *i* must be a valid *i*ndex position *i*n the quaternion (i.e., 0 <= *i* < 4).


