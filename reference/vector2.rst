.. _api_Vector2:

Vector2
=======

Inherited: None

.. _api_Vector2_description:

Description
-----------

Vectors are one of the main building blocks of 2D representation and drawing. They consist of three coordinates, traditionally called x and y.

The Vector2 class can also be used to represent vertices in 2D space. We therefore do not need to provide a separate vertex class.


Note: By design values in the Vector2 instance are stored as float. This means that on platforms where the areal arguments to Vector2 functions are represented by double values, it is possible to lose precision.




.. _api_Vector2_public:

Public Methods
--------------

+--------------------------------+------------------------------------------------------------------------+
|                                | :ref:`Vector2<api_Vector2_0ad3b5f1>` ()                                |
+--------------------------------+------------------------------------------------------------------------+
|                                | :ref:`Vector2<api_Vector2_a3c9f201>` (areal  v)                        |
+--------------------------------+------------------------------------------------------------------------+
|                                | :ref:`Vector2<api_Vector2_b3a15f47>` (areal  x, areal  y)              |
+--------------------------------+------------------------------------------------------------------------+
|                                | :ref:`Vector2<api_Vector2_948cf756>` (const Vector2 & vector)          |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`cross<api_Vector2_751be46f>` (const Vector2 & vector) const      |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`dot<api_Vector2_472e6b31>` (const Vector2 & vector) const        |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`length<api_Vector2_18ce46b0>` () const                           |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`normalize<api_Vector2_34562d17>` ()                              |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`sqrLength<api_Vector2_7084e1fd>` () const                        |
+--------------------------------+------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_Vector2_cf6a3872>` (const Vector2 & vector) const |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator*<api_Vector2_0eb362a4>` (areal  factor) const           |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator*<api_Vector2_2064fe7a>` (const Vector2 & vector) const  |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator*=<api_Vector2_69703ced>` (areal  factor)                |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator+<api_Vector2_53c074de>` (const Vector2 & vector) const  |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator+=<api_Vector2_5609ed3f>` (const Vector2 & vector)       |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator-<api_Vector2_c6830e9a>` () const                        |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator-<api_Vector2_b1f86e4d>` (const Vector2 & vector) const  |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator-=<api_Vector2_1b8304ca>` (const Vector2 & vector)       |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator/<api_Vector2_18f0c726>` (areal  divisor) const          |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator/=<api_Vector2_ef2370b9>` (areal  divisor)               |
+--------------------------------+------------------------------------------------------------------------+
|                           bool | :ref:`operator<<api_Vector2_4a9501d2>` (const Vector2 & vector) const  |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator=<api_Vector2_f1483b2a>` (const Vector2 & value)         |
+--------------------------------+------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_Vector2_16f2b847>` (const Vector2 & vector) const |
+--------------------------------+------------------------------------------------------------------------+
|                           bool | :ref:`operator><api_Vector2_53821f70>` (const Vector2 & vector) const  |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Vector2_462d5fc0>` (int  i)                       |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Vector2_0bc24f7e>` (int  i) const                 |
+--------------------------------+------------------------------------------------------------------------+



.. _api_Vector2_static:

Static Methods
--------------

None

.. _api_Vector2_methods:

Methods Description
-------------------

.. _api_Vector2_0ad3b5f1:

**Vector2::Vector2** ()

Constructs a null vector, i.e. with coordinates (0, 0).

----

.. _api_Vector2_a3c9f201:

**Vector2::Vector2** (areal  *v*)

Constructs a vector with coordinates (v).

----

.. _api_Vector2_b3a15f47:

**Vector2::Vector2** (areal  *x*, areal  *y*)

Constructs a vector with coordinates (x, y).

----

.. _api_Vector2_948cf756:

**Vector2::Vector2** (:ref:`Vector2<api_Vector2>` & *vector*)

Copy constructor.

----

.. _api_Vector2_751be46f:

 areal **Vector2::cross** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns the cross-product of this *vector* and given vector.

**See also** dot().

----

.. _api_Vector2_472e6b31:

 areal **Vector2::dot** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns the dot-product of this *vector* and given vector.

**See also** cross().

----

.. _api_Vector2_18ce46b0:

 areal **Vector2::length** () const

Returns the length of this vector.

**See also** sqrLength().

----

.. _api_Vector2_34562d17:

 areal **Vector2::normalize** ()

Normalizes the currect vector in place. Returns length of prenormalized vector.

**See also** length().

----

.. _api_Vector2_7084e1fd:

 areal **Vector2::sqrLength** () const

Returns the squared length of this vector.

**See also** length().

----

.. _api_Vector2_cf6a3872:

 bool **Vector2::operator!=** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is NOT equal to given vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_0eb362a4:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator*** (areal  *factor*) const

Returns a copy of this vector, multiplied by the given factor.

**See also** operator*=().

----

.. _api_Vector2_2064fe7a:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator*** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns a copy of this vector, multiplied by the given vector.

**See also** operator*=().

----

.. _api_Vector2_69703ced:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator*=** (areal  *factor*)

Multiplies this vector's coordinates by the given factor, and returns a reference to this vector.

**See also** operator/=().

----

.. _api_Vector2_53c074de:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator+** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns a Vector2 object that is the sum of the this *vector* and vector; each component is added separately.

**See also** operator+=().

----

.. _api_Vector2_5609ed3f:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator+=** (:ref:`Vector2<api_Vector2>` & *vector*)

Adds the given *vector* to this *vector* and returns a reference to this vector.

**See also** operator-=().

----

.. _api_Vector2_c6830e9a:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator-** () const

Returns a Vector2 object that is formed by changing the sign of all three components of the this vector.

Equivalent to Vector2(0,0) - vector.

----

.. _api_Vector2_b1f86e4d:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator-** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns a Vector2 object that is formed by subtracting *vector* from this vector; each component is subtracted separately.

**See also** operator-=().

----

.. _api_Vector2_1b8304ca:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator-=** (:ref:`Vector2<api_Vector2>` & *vector*)

Subtracts the given *vector* from this *vector* and returns a reference to this vector.

**See also** operator+=().

----

.. _api_Vector2_18f0c726:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator/** (areal  *divisor*) const

Returns a copy of this vector, divided by the given divisor.

**See also** operator/=().

----

.. _api_Vector2_ef2370b9:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator/=** (areal  *divisor*)

Divides this vector's coordinates by the given divisor, and returns a reference to this vector.

**See also** operator*=().

----

.. _api_Vector2_4a9501d2:

 bool **Vector2::operator<** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is less than vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_f1483b2a:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator=** (:ref:`Vector2<api_Vector2>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Vector2_16f2b847:

 bool **Vector2::operator==** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is equal to given vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_53821f70:

 bool **Vector2::operator>** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is bigger than given vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_462d5fc0:

 areal **Vector2::operator[]** (int  *i*)

Returns the component of the vector at index position *i* as a modifiable reference. *i* must be a valid index position in the vector (i.e., 0 <= *i* < 2).

.. _api_Vector2_0bc24f7e:

 areal **Vector2::operator[]** (int  *i*) const

Returns the component of the vector at index position. *i* must be a valid index position in the vector (i.e., 0 <= *i* < 2).


