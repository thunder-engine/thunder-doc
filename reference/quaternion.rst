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

+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_c489a5f7>` ()                                                |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_0d267c98>` (const Matrix3 & matrix)                          |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_c1e5f9ad>` (const Vector3 & euler)                           |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_03421c76>` (const Vector3 & axis, areal  angle)              |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_c84f9e61>` (areal  x, areal  y, areal  z, areal  w)          |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_10b397c8>` (const Quaternion & quaternion)                   |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                 void | :ref:`axisAngle<api_Quaternion_5489dfa7>` (Vector3 & axis, areal & angle)                    |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                areal | :ref:`dot<api_Quaternion_5ecb6f30>` (const Quaternion & quaternion) const                    |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                 bool | :ref:`equal<api_Quaternion_84023efb>` (const Quaternion & quaternion) const                  |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|          :ref:`Vector3<api_Vector3>` | :ref:`euler<api_Quaternion_97de5acf>` () const                                               |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|    :ref:`Quaternion<api_Quaternion>` | :ref:`inverse<api_Quaternion_beda6195>` () const                                             |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                areal | :ref:`length<api_Quaternion_0d2c8457>` () const                                              |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                 void | :ref:`mix<api_Quaternion_2059b8df>` (const Quaternion & q0, const Quaternion & q1, areal  t) |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                areal | :ref:`normalize<api_Quaternion_81e4027f>` ()                                                 |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                areal | :ref:`sqrLength<api_Quaternion_2a78ed1c>` () const                                           |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|          :ref:`Matrix3<api_Matrix3>` | :ref:`toMatrix<api_Quaternion_4f6b7c8e>` () const                                            |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                 bool | :ref:`operator!=<api_Quaternion_358eca01>` (const Quaternion & quaternion) const             |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|    :ref:`Quaternion<api_Quaternion>` | :ref:`operator*<api_Quaternion_35bfea02>` (areal  factor) const                              |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|    :ref:`Quaternion<api_Quaternion>` | :ref:`operator*<api_Quaternion_e284ba93>` (const Quaternion & quaternion) const              |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|          :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Quaternion_e509f7bc>` (const Vector3 & vector) const                     |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|  :ref:`Quaternion<api_Quaternion>` & | :ref:`operator*=<api_Quaternion_d241a936>` (areal  factor)                                   |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|    :ref:`Quaternion<api_Quaternion>` | :ref:`operator/<api_Quaternion_5321d094>` (areal  divisor) const                             |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|  :ref:`Quaternion<api_Quaternion>` & | :ref:`operator/=<api_Quaternion_84b1d3a5>` (areal  divisor)                                  |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|  :ref:`Quaternion<api_Quaternion>` & | :ref:`operator=<api_Quaternion_501d9efc>` (const Quaternion & value)                         |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                 bool | :ref:`operator==<api_Quaternion_eac26fd1>` (const Quaternion & quaternion) const             |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                areal | :ref:`operator[]<api_Quaternion_e9705c8a>` (int  i)                                          |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                areal | :ref:`operator[]<api_Quaternion_2d93b0a1>` (int  i) const                                    |
+--------------------------------------+----------------------------------------------------------------------------------------------+



.. _api_Quaternion_static:

Static Methods
--------------

+------------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Quaternion<api_Quaternion>` | :ref:`lookRotation<api_Quaternion_5192648d>` (const Vector3 & forward, const Vector3 & up) |
+------------------------------------+--------------------------------------------------------------------------------------------+

.. _api_Quaternion_methods:

Methods Description
-------------------

.. _api_Quaternion_c489a5f7:

**Quaternion::Quaternion** ()

Constructs an identity quaternion.

----

.. _api_Quaternion_0d267c98:

**Quaternion::Quaternion** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Constructs a quaternion by rotation *matrix* represented by Matrix3 matrix.

----

.. _api_Quaternion_c1e5f9ad:

**Quaternion::Quaternion** (:ref:`Vector3<api_Vector3>` & *euler*)

Constructs a quaternion by Euler angles represented by Vector3(pitch, yaw, roll) *euler* in rotation degrees.

----

.. _api_Quaternion_03421c76:

**Quaternion::Quaternion** (:ref:`Vector3<api_Vector3>` & *axis*, areal  *angle*)

Constructs a quaternion with rotation *axis* and *angle* in rotation degrees.

----

.. _api_Quaternion_c84f9e61:

**Quaternion::Quaternion** (areal  *x*, areal  *y*, areal  *z*, areal  *w*)

Constructs a quaternion with values (x, y, z, w).

----

.. _api_Quaternion_10b397c8:

**Quaternion::Quaternion** (:ref:`Quaternion<api_Quaternion>` & *quaternion*)

Copy constructor.

----

.. _api_Quaternion_5489dfa7:

 void **Quaternion::axisAngle** (:ref:`Vector3<api_Vector3>` & *axis*, areal & *angle*)

Retrives a quaternion as rotation *axis* and *angle* in rotation degrees.

----

.. _api_Quaternion_5ecb6f30:

 areal **Quaternion::dot** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns the dot-product of this *quaternion* and given quaternion.

----

.. _api_Quaternion_84023efb:

 bool **Quaternion::equal** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns true if *quaternion* approximately equal.

----

.. _api_Quaternion_97de5acf:

 :ref:`Vector3<api_Vector3>`  **Quaternion::euler** () const

Returns the Euler angles represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Quaternion_beda6195:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::inverse** () const

Returns the inverse of this quaternion.

----

.. _api_Quaternion_0d2c8457:

 areal **Quaternion::length** () const

Returns the length of this quaternion.

**See also** sqrLength().

----

.. _api_Quaternion_5192648d:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::lookRotation** (:ref:`Vector3<api_Vector3>` & *forward*, :ref:`Vector3<api_Vector3>` & *up*)

Creates a rotation with the specified *forward* and *up* directions.

----

.. _api_Quaternion_2059b8df:

 void **Quaternion::mix** (:ref:`Quaternion<api_Quaternion>` & *q0*, :ref:`Quaternion<api_Quaternion>` & *q1*, areal  *t*)

Linear inerpolation between *q0* and *q1* with *t* factor.

----

.. _api_Quaternion_81e4027f:

 areal **Quaternion::normalize** ()

Normalizes the currect quaternion in place. Returns length of prenormalized quaternion.

**See also** length().

----

.. _api_Quaternion_2a78ed1c:

 areal **Quaternion::sqrLength** () const

Returns the squared length of this quaternion.

**See also** length().

----

.. _api_Quaternion_4f6b7c8e:

 :ref:`Matrix3<api_Matrix3>`  **Quaternion::toMatrix** () const

Returns the rotation matrix for this quaternion.

----

.. _api_Quaternion_358eca01:

 bool **Quaternion::operator!=** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns true if this *quaternion* is NOT equal to given quaternion; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Quaternion_35bfea02:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::operator*** (areal  *factor*) const

Returns a copy of this quaternion, multiplied by the given factor.

**See also** operator*=().

----

.. _api_Quaternion_e284ba93:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::operator*** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Multiplies this *quaternion* and *quaternion* using *quaternion* multiplication. The result corresponds to applying both of the rotations specified by this *quaternion* and quaternion.

----

.. _api_Quaternion_e509f7bc:

 :ref:`Vector3<api_Vector3>`  **Quaternion::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Rotates a *vector* vec with this quaternion to produce a new *vector* in 3D space.

----

.. _api_Quaternion_d241a936:

 :ref:`Quaternion<api_Quaternion>` & **Quaternion::operator*=** (areal  *factor*)

Multiplies this quaternion's coordinates by the given factor, and returns a reference to this quaternion.

**See also** operator/=().

----

.. _api_Quaternion_5321d094:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::operator/** (areal  *divisor*) const

Returns a copy of this quaternion, divided by the given divisor.

**See also** operator/=().

----

.. _api_Quaternion_84b1d3a5:

 :ref:`Quaternion<api_Quaternion>` & **Quaternion::operator/=** (areal  *divisor*)

Divides this quaternion's coordinates by the given divisor, and returns a reference to this quaternion.

**See also** operator*=().

----

.. _api_Quaternion_501d9efc:

 :ref:`Quaternion<api_Quaternion>` & **Quaternion::operator=** (:ref:`Quaternion<api_Quaternion>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Quaternion_eac26fd1:

 bool **Quaternion::operator==** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns true if this *quaternion* is equal to given quaternion; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Quaternion_e9705c8a:

 areal **Quaternion::operator[]** (int  *i*)

Returns the component of the quaternion at index position *i* as a modifiable reference. *i* must be a valid index position in the quaternion (i.e., 0 <= *i* < 4).

.. _api_Quaternion_2d93b0a1:

 areal **Quaternion::operator[]** (int  *i*) const

Returns the component of the quaternion at index position. *i* must be a valid index position in the quaternion (i.e., 0 <= *i* < 4).


