.. _api_Vector2:
Vector2 Class
================

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

+-------------------------------+--------------------------------------------------------------------------+
|                               | :ref:`Vector2<api_Vector2_Vector2>` (areal  x, areal  y)                 |
+-------------------------------+--------------------------------------------------------------------------+
|                               | :ref:`Vector2<api_Vector2_Vector2>` (areal  v)                           |
+-------------------------------+--------------------------------------------------------------------------+
|                               | :ref:`Vector2<api_Vector2_Vector2>` ()                                   |
+-------------------------------+--------------------------------------------------------------------------+
|       :ref:`areal<api_areal>` | :ref:`cross<api_Vector2_cross>` (const Vector2 & vector) const           |
+-------------------------------+--------------------------------------------------------------------------+
|       :ref:`areal<api_areal>` | :ref:`dot<api_Vector2_dot>` (const Vector2 & vector) const               |
+-------------------------------+--------------------------------------------------------------------------+
|       :ref:`areal<api_areal>` | :ref:`length<api_Vector2_length>` () const                               |
+-------------------------------+--------------------------------------------------------------------------+
|       :ref:`areal<api_areal>` | :ref:`normalize<api_Vector2_normalize>` ()                               |
+-------------------------------+--------------------------------------------------------------------------+
|       :ref:`areal<api_areal>` | :ref:`sqrLength<api_Vector2_sqrLength>` () const                         |
+-------------------------------+--------------------------------------------------------------------------+
|         :ref:`bool<api_bool>` | :ref:`operator!=<api_Vector2_operator!=>` (const Vector2 & vector) const |
+-------------------------------+--------------------------------------------------------------------------+
|   :ref:`Vector2<api_Vector2>` | :ref:`operator*<api_Vector2_operator*>` (areal  factor) const            |
+-------------------------------+--------------------------------------------------------------------------+
|   :ref:`Vector2<api_Vector2>` | :ref:`operator*<api_Vector2_operator*>` (const Vector2 & vector) const   |
+-------------------------------+--------------------------------------------------------------------------+
| :ref:`Vector2<api_Vector2>` & | :ref:`operator*=<api_Vector2_operator*=>` (areal  factor)                |
+-------------------------------+--------------------------------------------------------------------------+
|   :ref:`Vector2<api_Vector2>` | :ref:`operator+<api_Vector2_operator+>` (const Vector2 & vector) const   |
+-------------------------------+--------------------------------------------------------------------------+
| :ref:`Vector2<api_Vector2>` & | :ref:`operator+=<api_Vector2_operator+=>` (const Vector2 & vector)       |
+-------------------------------+--------------------------------------------------------------------------+
|   :ref:`Vector2<api_Vector2>` | :ref:`operator-<api_Vector2_operator->` () const                         |
+-------------------------------+--------------------------------------------------------------------------+
|   :ref:`Vector2<api_Vector2>` | :ref:`operator-<api_Vector2_operator->` (const Vector2 & vector) const   |
+-------------------------------+--------------------------------------------------------------------------+
| :ref:`Vector2<api_Vector2>` & | :ref:`operator-=<api_Vector2_operator-=>` (const Vector2 & vector)       |
+-------------------------------+--------------------------------------------------------------------------+
|   :ref:`Vector2<api_Vector2>` | :ref:`operator/<api_Vector2_operator/>` (areal  divisor) const           |
+-------------------------------+--------------------------------------------------------------------------+
| :ref:`Vector2<api_Vector2>` & | :ref:`operator/=<api_Vector2_operator/=>` (areal  divisor)               |
+-------------------------------+--------------------------------------------------------------------------+
|         :ref:`bool<api_bool>` | :ref:`operator<<api_Vector2_operator<>` (const Vector2 & vector) const   |
+-------------------------------+--------------------------------------------------------------------------+
|         :ref:`bool<api_bool>` | :ref:`operator==<api_Vector2_operator==>` (const Vector2 & vector) const |
+-------------------------------+--------------------------------------------------------------------------+
|         :ref:`bool<api_bool>` | :ref:`operator><api_Vector2_operator>>` (const Vector2 & vector) const   |
+-------------------------------+--------------------------------------------------------------------------+
|     :ref:`areal<api_areal>` & | :ref:`operator[]<api_Vector2_operator[]>` (int  i)                       |
+-------------------------------+--------------------------------------------------------------------------+
|       :ref:`areal<api_areal>` | :ref:`operator[]<api_Vector2_operator[]>` (int  i) const                 |
+-------------------------------+--------------------------------------------------------------------------+

.. _api_Vector2_static:
Static Methods
--------------

None

.. _api_Vector2_methods:
Methods Description
-------------------

.. _api_Vector2_Vector2:

**Vector2::Vector2** (:ref:`areal<api_areal>`  *x*, :ref:`areal<api_areal>`  *y*)

Constructs a vector with coordinates (x, *y*).

----

.. _api_Vector2_Vector2:

**Vector2::Vector2** (:ref:`areal<api_areal>`  *v*)

Constructs a *v*ector with coordinates (v).

----

.. _api_Vector2_Vector2:

**Vector2::Vector2** ()

Constructs a null vector, i.e. with coordinates (0, 0).

----

.. _api_Vector2_cross:

:ref:`areal<api_areal>`  **Vector2::cross** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns the cross-product of this *vector* and given *vector*.

**See also** dot().

----

.. _api_Vector2_dot:

:ref:`areal<api_areal>`  **Vector2::dot** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns the dot-product of this *vector* and given *vector*.

**See also** cross().

----

.. _api_Vector2_length:

:ref:`areal<api_areal>`  **Vector2::length** () const

Returns the length of this vector.

**See also** sqrLength().

----

.. _api_Vector2_normalize:

:ref:`areal<api_areal>`  **Vector2::normalize** ()

Normalizes the currect vector in place. Returns length of prenormalized vector.

**See also** length().

----

.. _api_Vector2_sqrLength:

:ref:`areal<api_areal>`  **Vector2::sqrLength** () const

Returns the squared length of this vector.

**See also** length().

----

.. _api_Vector2_operator!=:

:ref:`bool<api_bool>`  **Vector2::operator!=** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is NOT equal to given *vector*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_operator*:

:ref:`Vector2<api_Vector2>`  **Vector2::operator*** (:ref:`areal<api_areal>`  *factor*) const

Returns a copy of this vector, multiplied by the given *factor*.

**See also** operator*=().

----

.. _api_Vector2_operator*:

:ref:`Vector2<api_Vector2>`  **Vector2::operator*** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns a copy of this *vector*, multiplied by the given *vector*.

**See also** operator*=().

----

.. _api_Vector2_operator*=:

:ref:`Vector2<api_Vector2>` & **Vector2::operator*=** (:ref:`areal<api_areal>`  *factor*)

Multiplies this vector's coordinates by the given *factor*, and returns a reference to this vector.

**See also** operator/=().

----

.. _api_Vector2_operator+:

:ref:`Vector2<api_Vector2>`  **Vector2::operator+** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns a Vector2 object that is the sum of the this *vector* and *vector*; each component is added separately.

**See also** operator+=().

----

.. _api_Vector2_operator+=:

:ref:`Vector2<api_Vector2>` & **Vector2::operator+=** (:ref:`Vector2<api_Vector2>` & *vector*)

Adds the given *vector* to this *vector* and returns a reference to this *vector*.

**See also** operator-=().

----

.. _api_Vector2_operator-:

:ref:`Vector2<api_Vector2>`  **Vector2::operator-** () const

Returns a Vector2 object that is formed by changing the sign of all three components of the this vector.

Equivalent to Vector2(0,0) - vector.

----

.. _api_Vector2_operator-:

:ref:`Vector2<api_Vector2>`  **Vector2::operator-** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns a Vector2 object that is formed by subtracting *vector* from this *vector*; each component is subtracted separately.

**See also** operator-=().

----

.. _api_Vector2_operator-=:

:ref:`Vector2<api_Vector2>` & **Vector2::operator-=** (:ref:`Vector2<api_Vector2>` & *vector*)

Subtracts the given *vector* from this *vector* and returns a reference to this *vector*.

**See also** operator+=().

----

.. _api_Vector2_operator/:

:ref:`Vector2<api_Vector2>`  **Vector2::operator/** (:ref:`areal<api_areal>`  *divisor*) const

Returns a copy of this vector, divided by the given *divisor*.

**See also** operator/=().

----

.. _api_Vector2_operator/=:

:ref:`Vector2<api_Vector2>` & **Vector2::operator/=** (:ref:`areal<api_areal>`  *divisor*)

Divides this vector's coordinates by the given *divisor*, and returns a reference to this vector.

**See also** operator*=().

----

.. _api_Vector2_operator<:

:ref:`bool<api_bool>`  **Vector2::operator<** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is less than *vector*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_operator==:

:ref:`bool<api_bool>`  **Vector2::operator==** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is equal to given *vector*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_operator>:

:ref:`bool<api_bool>`  **Vector2::operator>** (:ref:`Vector2<api_Vector2>` & *vector*) const

Returns true if this *vector* is bigger than given *vector*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector2_operator[]:

:ref:`areal<api_areal>` & **Vector2::operator[]** (:ref:`int<api_int>`  *i*)

Returns the component of the vector at *i*ndex position *i* as a modifiable reference. *i* must be a valid *i*ndex position *i*n the vector (i.e., 0 <= *i* < 2).

----

.. _api_Vector2_operator[]:

:ref:`areal<api_areal>`  **Vector2::operator[]** (:ref:`int<api_int>`  *i*) const

Returns the component of the vector at *i*ndex position. *i* must be a valid *i*ndex position *i*n the vector (i.e., 0 <= *i* < 2).

----


