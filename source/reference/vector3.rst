.. _api_Vector3:

Vector3
=======

Inherited: None

.. _api_Vector3_description:

Description
-----------

Vectors are one of the main building blocks of 3D representation and drawing. They consist of three coordinates, traditionally called x, y, and z.

The Vector3 class can also be used to represent vertices in 3D space. We therefore do not need to provide a separate vertex class.


Note: By design values in the Vector3 instance are stored as float. This means that on platforms where the areal arguments to Vector3 functions are represented by double values, it is possible to lose precision.




.. _api_Vector3_public:

Public Methods
--------------

+--------------------------------+--------------------------------------------------------------------------------------------+
|                                | :ref:`Vector3<api_Vector3_2b83fe61>` ()                                                    |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                                | :ref:`Vector3<api_Vector3_9685da70>` (areal  v)                                            |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                                | :ref:`Vector3<api_Vector3_3fcead21>` (areal  x, areal  y, areal  z)                        |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                                | :ref:`Vector3<api_Vector3_83f2056c>` (const Vector2 & vector, areal  z)                    |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                                | :ref:`Vector3<api_Vector3_e86d43bc>` (const areal * v)                                     |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                                | :ref:`Vector3<api_Vector3_3cdfe654>` (const Vector3 & vector)                              |
+--------------------------------+--------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`abs<api_Vector3_d89ce72a>` () const                                                  |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                          areal | :ref:`angle<api_Vector3_c5d2b084>` (const Vector3 & vector) const                          |
+--------------------------------+--------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`cross<api_Vector3_e6f1a432>` (const Vector3 & vector) const                          |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                          areal | :ref:`dot<api_Vector3_5789e2bc>` (const Vector3 & vector) const                            |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                          areal | :ref:`length<api_Vector3_71fcdb85>` () const                                               |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                          areal | :ref:`normalize<api_Vector3_8593b4c6>` ()                                                  |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                          areal | :ref:`signedAngle<api_Vector3_bfd9c853>` (const Vector3 & vector, const Vector3  up) const |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                          areal | :ref:`sqrLength<api_Vector3_6e3579f8>` () const                                            |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_Vector3_1f79d0e8>` (const Vector3 & vector) const                     |
+--------------------------------+--------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Vector3_95d6b024>` (areal  factor) const                               |
+--------------------------------+--------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Vector3_bf43e829>` (const Vector3 & vector) const                      |
+--------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` & | :ref:`operator*=<api_Vector3_ab2f91c4>` (areal  factor)                                    |
+--------------------------------+--------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`operator+<api_Vector3_bf7d52e1>` (const Vector3 & vector) const                      |
+--------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` & | :ref:`operator+=<api_Vector3_0ec5193b>` (const Vector3 & vector)                           |
+--------------------------------+--------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`operator-<api_Vector3_d9204bcf>` () const                                            |
+--------------------------------+--------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`operator-<api_Vector3_4a1d0825>` (const Vector3 & vector) const                      |
+--------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` & | :ref:`operator-=<api_Vector3_b367905c>` (const Vector3 & vector)                           |
+--------------------------------+--------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`operator/<api_Vector3_ae37b402>` (areal  divisor) const                              |
+--------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` & | :ref:`operator/=<api_Vector3_92f8143d>` (areal  divisor)                                   |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator\<<api_Vector3_a3172d6c>` (const Vector3 & vector) const                     |
+--------------------------------+--------------------------------------------------------------------------------------------+
|  :ref:`Vector3<api_Vector3>` & | :ref:`operator=<api_Vector3_942b8f31>` (const Vector3 & value)                             |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_Vector3_f03e6db4>` (const Vector3 & vector) const                     |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator><api_Vector3_a6b1572e>` (const Vector3 & vector) const                      |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Vector3_73c81d5a>` (int  i)                                           |
+--------------------------------+--------------------------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Vector3_7510d8a2>` (int  i) const                                     |
+--------------------------------+--------------------------------------------------------------------------------------------+



.. _api_Vector3_static:

Static Methods
--------------

None

.. _api_Vector3_methods:

Methods Description
-------------------

.. _api_Vector3_2b83fe61:

**Vector3::Vector3** ()

Constructs a null vector, i.e. with coordinates (0, 0, 0).

----

.. _api_Vector3_9685da70:

**Vector3::Vector3** (areal  *v*)

Constructs a vector with coordinates (v).

----

.. _api_Vector3_3fcead21:

**Vector3::Vector3** (areal  *x*, areal  *y*, areal  *z*)

Constructs a vector with coordinates (x, y, z).

----

.. _api_Vector3_83f2056c:

**Vector3::Vector3** (:ref:`Vector2<api_Vector2>` & *vector*, areal  *z*)

Constructs a 3D *vector* from the specified 2D vector. The *z* coordinate is set to z.

----

.. _api_Vector3_e86d43bc:

**Vector3::Vector3** (areal * *v*)

Constructs a 3D vector from *v* (areal[3] array).

----

.. _api_Vector3_3cdfe654:

**Vector3::Vector3** (:ref:`Vector3<api_Vector3>` & *vector*)

Copy constructor.

----

.. _api_Vector3_d89ce72a:

 :ref:`Vector3<api_Vector3>`  **Vector3::abs** () const

Returns the absplute value of this vector.

----

.. _api_Vector3_c5d2b084:

 areal **Vector3::angle** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns an absolute angle between current and provided vector.

**See also** signedAngle().

----

.. _api_Vector3_e6f1a432:

 :ref:`Vector3<api_Vector3>`  **Vector3::cross** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns the cross-product of this *vector* and given vector.

**See also** dot().

----

.. _api_Vector3_5789e2bc:

 areal **Vector3::dot** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns the dot-product of this *vector* and given vector.

**See also** cross().

----

.. _api_Vector3_71fcdb85:

 areal **Vector3::length** () const

Returns the length of this vector.

**See also** sqrLength().

----

.. _api_Vector3_8593b4c6:

 areal **Vector3::normalize** ()

Normalizes the currect vector in place. Returns length of prenormalized vector.

**See also** length().

----

.. _api_Vector3_bfd9c853:

 areal **Vector3::signedAngle** (:ref:`Vector3<api_Vector3>` & *vector*, :ref:`Vector3<api_Vector3>`  *up*) const

Returns an signed angle between current and provided vector. The *up* *vector* around which the current and provided vectors are rotated.

**See also** angle().

----

.. _api_Vector3_6e3579f8:

 areal **Vector3::sqrLength** () const

Returns the squared length of this vector.

**See also** length().

----

.. _api_Vector3_1f79d0e8:

 bool **Vector3::operator!=** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns true if this *vector* is NOT equal to given vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector3_95d6b024:

 :ref:`Vector3<api_Vector3>`  **Vector3::operator*** (areal  *factor*) const

Returns a copy of this vector, multiplied by the given factor.

**See also** operator*=().

----

.. _api_Vector3_bf43e829:

 :ref:`Vector3<api_Vector3>`  **Vector3::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns a copy of this vector, multiplied by the given vector.

**See also** operator*=().

----

.. _api_Vector3_ab2f91c4:

 :ref:`Vector3<api_Vector3>` & **Vector3::operator*=** (areal  *factor*)

Multiplies this vector's coordinates by the given factor, and returns a reference to this vector.

**See also** operator/=().

----

.. _api_Vector3_bf7d52e1:

 :ref:`Vector3<api_Vector3>`  **Vector3::operator+** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns a Vector3 object that is the sum of the this *vector* and vector; each component is added separately.

**See also** operator+=().

----

.. _api_Vector3_0ec5193b:

 :ref:`Vector3<api_Vector3>` & **Vector3::operator+=** (:ref:`Vector3<api_Vector3>` & *vector*)

Adds the given *vector* to this *vector* and returns a reference to this vector.

**See also** operator-=().

----

.. _api_Vector3_d9204bcf:

 :ref:`Vector3<api_Vector3>`  **Vector3::operator-** () const

Returns a Vector3 object that is formed by changing the sign of all three components of the this vector.

Equivalent to Vector3(0,0,0) - vector.

----

.. _api_Vector3_4a1d0825:

 :ref:`Vector3<api_Vector3>`  **Vector3::operator-** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns a Vector3 object that is formed by subtracting *vector* from this vector; each component is subtracted separately.

**See also** operator-=().

----

.. _api_Vector3_b367905c:

 :ref:`Vector3<api_Vector3>` & **Vector3::operator-=** (:ref:`Vector3<api_Vector3>` & *vector*)

Subtracts the given *vector* from this *vector* and returns a reference to this vector.

**See also** operator+=().

----

.. _api_Vector3_ae37b402:

 :ref:`Vector3<api_Vector3>`  **Vector3::operator/** (areal  *divisor*) const

Returns a copy of this vector, divided by the given divisor.

**See also** operator/=().

----

.. _api_Vector3_92f8143d:

 :ref:`Vector3<api_Vector3>` & **Vector3::operator/=** (areal  *divisor*)

Divides this vector's coordinates by the given divisor, and returns a reference to this vector.

**See also** operator*=().

----

.. _api_Vector3_a3172d6c:

 bool **Vector3::operator<** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns true if this *vector* is less than vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector3_942b8f31:

 :ref:`Vector3<api_Vector3>` & **Vector3::operator=** (:ref:`Vector3<api_Vector3>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Vector3_f03e6db4:

 bool **Vector3::operator==** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns true if this *vector* is equal to given vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector3_a6b1572e:

 bool **Vector3::operator>** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns true if this *vector* is bigger than given vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector3_73c81d5a:

 areal **Vector3::operator[]** (int  *i*)

Returns the component of the vector at index position *i* as a modifiable reference. *i* must be a valid index position in the vector (i.e., 0 <= *i* < 3).

.. _api_Vector3_7510d8a2:

 areal **Vector3::operator[]** (int  *i*) const

Returns the component of the vector at index position. *i* must be a valid index position in the vector (i.e., 0 <= *i* < 3).


