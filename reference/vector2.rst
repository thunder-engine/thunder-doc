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
|                                | :ref:`Vector2<api_Vector2_4ba6021c>` ()                                |
+--------------------------------+------------------------------------------------------------------------+
|                                | :ref:`Vector2<api_Vector2_31b6d2ae>` (areal  v)                        |
+--------------------------------+------------------------------------------------------------------------+
|                                | :ref:`Vector2<api_Vector2_ac716f52>` (areal  x, areal  y)              |
+--------------------------------+------------------------------------------------------------------------+
|                                | :ref:`Vector2<api_Vector2_23a0769b>` (const Vector2 & vector)          |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`cross<api_Vector2_6a941fb8>` (const Vector2 & vector) const      |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`dot<api_Vector2_31be4d5f>` (const Vector2 & vector) const        |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`length<api_Vector2_bd4a2038>` () const                           |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`normalize<api_Vector2_3d16b2fe>` ()                              |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`sqrLength<api_Vector2_09a65c47>` () const                        |
+--------------------------------+------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_Vector2_bde71af2>` (const Vector2 & vector) const |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator*<api_Vector2_b56f37ea>` (areal  factor) const           |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator*<api_Vector2_e0a3f468>` (const Vector2 & vector) const  |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator*=<api_Vector2_2bf91da8>` (areal  factor)                |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator+<api_Vector2_5f96d8ec>` (const Vector2 & vector) const  |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator+=<api_Vector2_12ca063f>` (const Vector2 & vector)       |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator-<api_Vector2_fd516238>` () const                        |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator-<api_Vector2_2dca0563>` (const Vector2 & vector) const  |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator-=<api_Vector2_2316dac9>` (const Vector2 & vector)       |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator/<api_Vector2_8a5204fe>` (areal  divisor) const          |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator/=<api_Vector2_0b8f2dc7>` (areal  divisor)               |
+--------------------------------+------------------------------------------------------------------------+
|                           bool | :ref:`operator<<api_Vector2_85d09ac2>` (const Vector2 & vector) const  |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator=<api_Vector2_4968a315>` (const Vector2 & value)         |
+--------------------------------+------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_Vector2_a4817e56>` (const Vector2 & vector) const |
+--------------------------------+------------------------------------------------------------------------+
|                           bool | :ref:`operator><api_Vector2_061be842>` (const Vector2 & vector) const  |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Vector2_8fc7a314>` (int  i)                       |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Vector2_14d28067>` (int  i) const                 |
+--------------------------------+------------------------------------------------------------------------+



.. _api_Vector2_static:

Static Methods
--------------

None

.. _api_Vector2_methods:

Methods Description
-------------------

.. _api_Vector2_4ba6021c:

**Vector2::Vector2** ()

Constructs a null vector, i.e. with coordinates (0, 0).

----

.. _api_Vector2_31b6d2ae:

**Vector2::Vector2** (areal  *v*)

Constructs a *v*ector with coordinates (v).

----

.. _api_Vector2_ac716f52:

**Vector2::Vector2** (areal  *x*, areal  *y*)

Constructs a vector with coordinates (x, *y*).

----

.. _api_Vector2_23a0769b:

**Vector2::Vector2** (:ref:`Vector2<api_Vector2>` & *vector*)

Copy constructor.

----

.. _api_Vector2_6a941fb8:

 areal **Vector2::cross** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns the cross-product of this *vector* and given *vector*.

**See also** dot().

----

.. _api_Vector2_31be4d5f:

 areal **Vector2::dot** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns the dot-product of this *vector* and given *vector*.

**See also** cross().

----

.. _api_Vector2_bd4a2038:

 areal **Vector2::length** () const

Returns the length of this vector.

**See also** sqrLength().

----

.. _api_Vector2_3d16b2fe:

 areal **Vector2::normalize** ()

Normalizes the currect vector in place. Returns length of prenormalized vector.

**See also** length().

----

.. _api_Vector2_09a65c47:

 areal **Vector2::sqrLength** () const

Returns the squared length of this vector.

**See also** length().

----

.. _api_Vector2_bde71af2:

 bool **Vector2::operator!=** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is NOT equal to given *vector*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_b56f37ea:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator*** (areal  *factor*) const

Returns a copy of this vector, multiplied by the given *factor*.

**See also** operator*=().

----

.. _api_Vector2_e0a3f468:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator*** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns a copy of this *vector*, multiplied by the given *vector*.

**See also** operator*=().

----

.. _api_Vector2_2bf91da8:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator*=** (areal  *factor*)

Multiplies this vector's coordinates by the given *factor*, and returns a reference to this vector.

**See also** operator/=().

----

.. _api_Vector2_5f96d8ec:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator+** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns a Vector2 object that is the sum of the this *vector* and *vector*; each component is added separately.

**See also** operator+=().

----

.. _api_Vector2_12ca063f:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator+=** (:ref:`Vector2<api_Vector2>` & *vector*)

Adds the given *vector* to this *vector* and returns a reference to this *vector*.

**See also** operator-=().

----

.. _api_Vector2_fd516238:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator-** () const

Returns a Vector2 object that is formed by changing the sign of all three components of the this vector.

Equivalent to Vector2(0,0) - vector.

----

.. _api_Vector2_2dca0563:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator-** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns a Vector2 object that is formed by subtracting *vector* from this *vector*; each component is subtracted separately.

**See also** operator-=().

----

.. _api_Vector2_2316dac9:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator-=** (:ref:`Vector2<api_Vector2>` & *vector*)

Subtracts the given *vector* from this *vector* and returns a reference to this *vector*.

**See also** operator+=().

----

.. _api_Vector2_8a5204fe:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator/** (areal  *divisor*) const

Returns a copy of this vector, divided by the given *divisor*.

**See also** operator/=().

----

.. _api_Vector2_0b8f2dc7:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator/=** (areal  *divisor*)

Divides this vector's coordinates by the given *divisor*, and returns a reference to this vector.

**See also** operator*=().

----

.. _api_Vector2_85d09ac2:

 bool **Vector2::operator<** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is less than *vector*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_4968a315:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator=** (:ref:`Vector2<api_Vector2>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Vector2_a4817e56:

 bool **Vector2::operator==** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is equal to given *vector*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_061be842:

 bool **Vector2::operator>** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is bigger than given *vector*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_8fc7a314:

 areal **Vector2::operator[]** (int  *i*)

Returns the component of the vector at *i*ndex position *i* as a modifiable reference. *i* must be a valid *i*ndex position *i*n the vector (i.e., 0 <= *i* < 2).

.. _api_Vector2_14d28067:

 areal **Vector2::operator[]** (int  *i*) const

Returns the component of the vector at *i*ndex position. *i* must be a valid *i*ndex position *i*n the vector (i.e., 0 <= *i* < 2).


