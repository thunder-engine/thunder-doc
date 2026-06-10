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
|                                | :ref:`Vector2<api_Vector2_c4f8b913>` ()                                |
+--------------------------------+------------------------------------------------------------------------+
|                                | :ref:`Vector2<api_Vector2_cb654d89>` (areal  v)                        |
+--------------------------------+------------------------------------------------------------------------+
|                                | :ref:`Vector2<api_Vector2_46a3b98f>` (areal  x, areal  y)              |
+--------------------------------+------------------------------------------------------------------------+
|                                | :ref:`Vector2<api_Vector2_168df743>` (const Vector2 & vector)          |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`cross<api_Vector2_72b463ed>` (const Vector2 & vector) const      |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`dot<api_Vector2_c64d32fe>` (const Vector2 & vector) const        |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`length<api_Vector2_cd90ea72>` () const                           |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`normalize<api_Vector2_842c9157>` ()                              |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`sqrLength<api_Vector2_10de4987>` () const                        |
+--------------------------------+------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_Vector2_fc0ade76>` (const Vector2 & vector) const |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator*<api_Vector2_659d28eb>` (areal  factor) const           |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator*<api_Vector2_8694be57>` (const Vector2 & vector) const  |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator*=<api_Vector2_c0d735b2>` (areal  factor)                |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator+<api_Vector2_7cb49ad0>` (const Vector2 & vector) const  |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator+=<api_Vector2_72e15fa6>` (const Vector2 & vector)       |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator-<api_Vector2_7e0a3d5c>` () const                        |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator-<api_Vector2_b4790ef5>` (const Vector2 & vector) const  |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator-=<api_Vector2_5fab92ec>` (const Vector2 & vector)       |
+--------------------------------+------------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`operator/<api_Vector2_52b71e4f>` (areal  divisor) const          |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator/=<api_Vector2_8f9e02a6>` (areal  divisor)               |
+--------------------------------+------------------------------------------------------------------------+
|                           bool | :ref:`operator\<<api_Vector2_5d0f4b9a>` (const Vector2 & vector) const |
+--------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector2<api_Vector2>` & | :ref:`operator=<api_Vector2_3df02691>` (const Vector2 & value)         |
+--------------------------------+------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_Vector2_da849fe0>` (const Vector2 & vector) const |
+--------------------------------+------------------------------------------------------------------------+
|                           bool | :ref:`operator><api_Vector2_f09de573>` (const Vector2 & vector) const  |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Vector2_3056fdb1>` (int  i)                       |
+--------------------------------+------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Vector2_39d45160>` (int  i) const                 |
+--------------------------------+------------------------------------------------------------------------+



.. _api_Vector2_static:

Static Methods
--------------

None

.. _api_Vector2_methods:

Methods Description
-------------------

.. _api_Vector2_c4f8b913:

**Vector2::Vector2** ()

Constructs a null vector, i.e. with coordinates (0, 0).

----

.. _api_Vector2_cb654d89:

**Vector2::Vector2** (areal  *v*)

Constructs a vector with coordinates (v).

----

.. _api_Vector2_46a3b98f:

**Vector2::Vector2** (areal  *x*, areal  *y*)

Constructs a vector with coordinates (x, y).

----

.. _api_Vector2_168df743:

**Vector2::Vector2** (:ref:`Vector2<api_Vector2>` & *vector*)

Copy constructor.

----

.. _api_Vector2_72b463ed:

 areal **Vector2::cross** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns the cross-product of this *vector* and given vector.

**See also** dot().

----

.. _api_Vector2_c64d32fe:

 areal **Vector2::dot** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns the dot-product of this *vector* and given vector.

**See also** cross().

----

.. _api_Vector2_cd90ea72:

 areal **Vector2::length** () const

Returns the length of this vector.

**See also** sqrLength().

----

.. _api_Vector2_842c9157:

 areal **Vector2::normalize** ()

Normalizes the currect vector in place. Returns length of prenormalized vector.

**See also** length().

----

.. _api_Vector2_10de4987:

 areal **Vector2::sqrLength** () const

Returns the squared length of this vector.

**See also** length().

----

.. _api_Vector2_fc0ade76:

 bool **Vector2::operator!=** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is NOT equal to given vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_659d28eb:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator*** (areal  *factor*) const

Returns a copy of this vector, multiplied by the given factor.

**See also** operator*=().

----

.. _api_Vector2_8694be57:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator*** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns a copy of this vector, multiplied by the given vector.

**See also** operator*=().

----

.. _api_Vector2_c0d735b2:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator*=** (areal  *factor*)

Multiplies this vector's coordinates by the given factor, and returns a reference to this vector.

**See also** operator/=().

----

.. _api_Vector2_7cb49ad0:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator+** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns a Vector2 object that is the sum of the this *vector* and vector; each component is added separately.

**See also** operator+=().

----

.. _api_Vector2_72e15fa6:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator+=** (:ref:`Vector2<api_Vector2>` & *vector*)

Adds the given *vector* to this *vector* and returns a reference to this vector.

**See also** operator-=().

----

.. _api_Vector2_7e0a3d5c:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator-** () const

Returns a Vector2 object that is formed by changing the sign of all three components of the this vector.

Equivalent to Vector2(0,0) - vector.

----

.. _api_Vector2_b4790ef5:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator-** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns a Vector2 object that is formed by subtracting *vector* from this vector; each component is subtracted separately.

**See also** operator-=().

----

.. _api_Vector2_5fab92ec:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator-=** (:ref:`Vector2<api_Vector2>` & *vector*)

Subtracts the given *vector* from this *vector* and returns a reference to this vector.

**See also** operator+=().

----

.. _api_Vector2_52b71e4f:

 :ref:`Vector2<api_Vector2>`  **Vector2::operator/** (areal  *divisor*) const

Returns a copy of this vector, divided by the given divisor.

**See also** operator/=().

----

.. _api_Vector2_8f9e02a6:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator/=** (areal  *divisor*)

Divides this vector's coordinates by the given divisor, and returns a reference to this vector.

**See also** operator*=().

----

.. _api_Vector2_5d0f4b9a:

 bool **Vector2::operator<** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is less than vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_3df02691:

 :ref:`Vector2<api_Vector2>` & **Vector2::operator=** (:ref:`Vector2<api_Vector2>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Vector2_da849fe0:

 bool **Vector2::operator==** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is equal to given vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_f09de573:

 bool **Vector2::operator>** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is bigger than given vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_3056fdb1:

 areal **Vector2::operator[]** (int  *i*)

Returns the component of the vector at index position *i* as a modifiable reference. *i* must be a valid index position in the vector (i.e., 0 <= *i* < 2).

.. _api_Vector2_39d45160:

 areal **Vector2::operator[]** (int  *i*) const

Returns the component of the vector at index position. *i* must be a valid index position in the vector (i.e., 0 <= *i* < 2).


