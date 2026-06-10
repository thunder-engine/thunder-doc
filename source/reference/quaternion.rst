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
|                                      | :ref:`Quaternion<api_Quaternion_bc24d918>` ()                                                |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_675ead82>` (const Matrix3 & matrix)                          |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_8406925c>` (const Vector3 & euler)                           |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_1a63c2e8>` (const Vector3 & axis, areal  angle)              |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_7c8d1e26>` (areal  x, areal  y, areal  z, areal  w)          |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                      | :ref:`Quaternion<api_Quaternion_73ea0425>` (const Quaternion & quaternion)                   |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                 void | :ref:`axisAngle<api_Quaternion_048527e1>` (Vector3 & axis, areal & angle)                    |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                areal | :ref:`dot<api_Quaternion_15084fa2>` (const Quaternion & quaternion) const                    |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                 bool | :ref:`equal<api_Quaternion_cfd352ab>` (const Quaternion & quaternion) const                  |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|          :ref:`Vector3<api_Vector3>` | :ref:`euler<api_Quaternion_19bc4e0d>` () const                                               |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|    :ref:`Quaternion<api_Quaternion>` | :ref:`inverse<api_Quaternion_045fa67d>` () const                                             |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                areal | :ref:`length<api_Quaternion_eaf6b971>` () const                                              |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                 void | :ref:`mix<api_Quaternion_a9fb1d24>` (const Quaternion & q0, const Quaternion & q1, areal  t) |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                areal | :ref:`normalize<api_Quaternion_df2c036e>` ()                                                 |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                areal | :ref:`sqrLength<api_Quaternion_0ebd4ca9>` () const                                           |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|          :ref:`Matrix3<api_Matrix3>` | :ref:`toMatrix<api_Quaternion_639b4a71>` () const                                            |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                 bool | :ref:`operator!=<api_Quaternion_5bd0372a>` (const Quaternion & quaternion) const             |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|    :ref:`Quaternion<api_Quaternion>` | :ref:`operator*<api_Quaternion_208913ea>` (areal  factor) const                              |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|    :ref:`Quaternion<api_Quaternion>` | :ref:`operator*<api_Quaternion_7c2068ba>` (const Quaternion & quaternion) const              |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|          :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Quaternion_6d70ba58>` (const Vector3 & vector) const                     |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|  :ref:`Quaternion<api_Quaternion>` & | :ref:`operator*=<api_Quaternion_4f76e91a>` (areal  factor)                                   |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|    :ref:`Quaternion<api_Quaternion>` | :ref:`operator/<api_Quaternion_2ca81567>` (areal  divisor) const                             |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|  :ref:`Quaternion<api_Quaternion>` & | :ref:`operator/=<api_Quaternion_519dea6f>` (areal  divisor)                                  |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|  :ref:`Quaternion<api_Quaternion>` & | :ref:`operator=<api_Quaternion_1b6924cd>` (const Quaternion & value)                         |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                 bool | :ref:`operator==<api_Quaternion_6c0d8eb5>` (const Quaternion & quaternion) const             |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                areal | :ref:`operator[]<api_Quaternion_8e645327>` (int  i)                                          |
+--------------------------------------+----------------------------------------------------------------------------------------------+
|                                areal | :ref:`operator[]<api_Quaternion_d74658ac>` (int  i) const                                    |
+--------------------------------------+----------------------------------------------------------------------------------------------+



.. _api_Quaternion_static:

Static Methods
--------------

+------------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Quaternion<api_Quaternion>` | :ref:`lookRotation<api_Quaternion_389ef67d>` (const Vector3 & forward, const Vector3 & up) |
+------------------------------------+--------------------------------------------------------------------------------------------+

.. _api_Quaternion_methods:

Methods Description
-------------------

.. _api_Quaternion_bc24d918:

**Quaternion::Quaternion** ()

Constructs an identity quaternion.

----

.. _api_Quaternion_675ead82:

**Quaternion::Quaternion** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Constructs a quaternion by rotation *matrix* represented by Matrix3 matrix.

----

.. _api_Quaternion_8406925c:

**Quaternion::Quaternion** (:ref:`Vector3<api_Vector3>` & *euler*)

Constructs a quaternion by Euler angles represented by Vector3(pitch, yaw, roll) *euler* in rotation degrees.

----

.. _api_Quaternion_1a63c2e8:

**Quaternion::Quaternion** (:ref:`Vector3<api_Vector3>` & *axis*, areal  *angle*)

Constructs a quaternion with rotation *axis* and *angle* in rotation degrees.

----

.. _api_Quaternion_7c8d1e26:

**Quaternion::Quaternion** (areal  *x*, areal  *y*, areal  *z*, areal  *w*)

Constructs a quaternion with values (x, y, z, w).

----

.. _api_Quaternion_73ea0425:

**Quaternion::Quaternion** (:ref:`Quaternion<api_Quaternion>` & *quaternion*)

Copy constructor.

----

.. _api_Quaternion_048527e1:

 void **Quaternion::axisAngle** (:ref:`Vector3<api_Vector3>` & *axis*, areal & *angle*)

Retrives a quaternion as rotation *axis* and *angle* in rotation degrees.

----

.. _api_Quaternion_15084fa2:

 areal **Quaternion::dot** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns the dot-product of this *quaternion* and given quaternion.

----

.. _api_Quaternion_cfd352ab:

 bool **Quaternion::equal** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns true if *quaternion* approximately equal.

----

.. _api_Quaternion_19bc4e0d:

 :ref:`Vector3<api_Vector3>`  **Quaternion::euler** () const

Returns the Euler angles represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Quaternion_045fa67d:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::inverse** () const

Returns the inverse of this quaternion.

----

.. _api_Quaternion_eaf6b971:

 areal **Quaternion::length** () const

Returns the length of this quaternion.

**See also** sqrLength().

----

.. _api_Quaternion_389ef67d:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::lookRotation** (:ref:`Vector3<api_Vector3>` & *forward*, :ref:`Vector3<api_Vector3>` & *up*)

Creates a rotation with the specified *forward* and *up* directions.

----

.. _api_Quaternion_a9fb1d24:

 void **Quaternion::mix** (:ref:`Quaternion<api_Quaternion>` & *q0*, :ref:`Quaternion<api_Quaternion>` & *q1*, areal  *t*)

Linear inerpolation between *q0* and *q1* with *t* factor.

----

.. _api_Quaternion_df2c036e:

 areal **Quaternion::normalize** ()

Normalizes the currect quaternion in place. Returns length of prenormalized quaternion.

**See also** length().

----

.. _api_Quaternion_0ebd4ca9:

 areal **Quaternion::sqrLength** () const

Returns the squared length of this quaternion.

**See also** length().

----

.. _api_Quaternion_639b4a71:

 :ref:`Matrix3<api_Matrix3>`  **Quaternion::toMatrix** () const

Returns the rotation matrix for this quaternion.

----

.. _api_Quaternion_5bd0372a:

 bool **Quaternion::operator!=** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns true if this *quaternion* is NOT equal to given quaternion; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Quaternion_208913ea:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::operator*** (areal  *factor*) const

Returns a copy of this quaternion, multiplied by the given factor.

**See also** operator*=().

----

.. _api_Quaternion_7c2068ba:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::operator*** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Multiplies this *quaternion* and *quaternion* using *quaternion* multiplication. The result corresponds to applying both of the rotations specified by this *quaternion* and quaternion.

----

.. _api_Quaternion_6d70ba58:

 :ref:`Vector3<api_Vector3>`  **Quaternion::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Rotates a *vector* vec with this quaternion to produce a new *vector* in 3D space.

----

.. _api_Quaternion_4f76e91a:

 :ref:`Quaternion<api_Quaternion>` & **Quaternion::operator*=** (areal  *factor*)

Multiplies this quaternion's coordinates by the given factor, and returns a reference to this quaternion.

**See also** operator/=().

----

.. _api_Quaternion_2ca81567:

 :ref:`Quaternion<api_Quaternion>`  **Quaternion::operator/** (areal  *divisor*) const

Returns a copy of this quaternion, divided by the given divisor.

**See also** operator/=().

----

.. _api_Quaternion_519dea6f:

 :ref:`Quaternion<api_Quaternion>` & **Quaternion::operator/=** (areal  *divisor*)

Divides this quaternion's coordinates by the given divisor, and returns a reference to this quaternion.

**See also** operator*=().

----

.. _api_Quaternion_1b6924cd:

 :ref:`Quaternion<api_Quaternion>` & **Quaternion::operator=** (:ref:`Quaternion<api_Quaternion>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Quaternion_6c0d8eb5:

 bool **Quaternion::operator==** (:ref:`Quaternion<api_Quaternion>` & *quaternion*) const

Returns true if this *quaternion* is equal to given quaternion; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Quaternion_8e645327:

 areal **Quaternion::operator[]** (int  *i*)

Returns the component of the quaternion at index position *i* as a modifiable reference. *i* must be a valid index position in the quaternion (i.e., 0 <= *i* < 4).

.. _api_Quaternion_d74658ac:

 areal **Quaternion::operator[]** (int  *i*) const

Returns the component of the quaternion at index position. *i* must be a valid index position in the quaternion (i.e., 0 <= *i* < 4).


