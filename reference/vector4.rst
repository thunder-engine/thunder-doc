.. _api_Vector4:

Vector4
=======

Inherited: None

.. _api_Vector4_description:

Description
-----------

Vectors are one of the main building blocks of 4D representation and drawing. They consist of three coordinates, traditionally called x, y, z and w.

The Vector4 class can also be used to represent vertices in 4D space. We therefore do not need to provide a separate vertex class.


Note: By design values in the Vector4 instance are stored as float. This means that on platforms where the areal arguments to Vector4 functions are represented by double values, it is possible to lose precision.




.. _api_Vector4_public:

Public Methods
--------------

+--------------------------------+-----------------------------------------------------------------------------------+
|                                | :ref:`Vector4<api_Vector4_94c5fa61>` ()                                           |
+--------------------------------+-----------------------------------------------------------------------------------+
|                                | :ref:`Vector4<api_Vector4_95c0631e>` (areal  v)                                   |
+--------------------------------+-----------------------------------------------------------------------------------+
|                                | :ref:`Vector4<api_Vector4_ecb75041>` (const Vector2 & vector)                     |
+--------------------------------+-----------------------------------------------------------------------------------+
|                                | :ref:`Vector4<api_Vector4_6c0ea893>` (const Vector3 & vector)                     |
+--------------------------------+-----------------------------------------------------------------------------------+
|                                | :ref:`Vector4<api_Vector4_bf6045e8>` (const Vector3 & vector, areal  w)           |
+--------------------------------+-----------------------------------------------------------------------------------+
|                                | :ref:`Vector4<api_Vector4_42c6ba39>` (const Vector2 & vector, areal  z, areal  w) |
+--------------------------------+-----------------------------------------------------------------------------------+
|                                | :ref:`Vector4<api_Vector4_80dbe479>` (areal  x, areal  y, areal  z, areal  w)     |
+--------------------------------+-----------------------------------------------------------------------------------+
|                                | :ref:`Vector4<api_Vector4_5729bc3f>` (const Vector4 & vector)                     |
+--------------------------------+-----------------------------------------------------------------------------------+
|                          areal | :ref:`dot<api_Vector4_0e3f9c1d>` (const Vector4 & vector) const                   |
+--------------------------------+-----------------------------------------------------------------------------------+
|                          areal | :ref:`length<api_Vector4_f72548bd>` () const                                      |
+--------------------------------+-----------------------------------------------------------------------------------+
|                          areal | :ref:`normalize<api_Vector4_528a173c>` ()                                         |
+--------------------------------+-----------------------------------------------------------------------------------+
|                          areal | :ref:`sqrLength<api_Vector4_b36da5ec>` () const                                   |
+--------------------------------+-----------------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_Vector4_658e7c9f>` (const Vector4 & vector) const            |
+--------------------------------+-----------------------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`operator*<api_Vector4_1f97c65a>` (areal  factor) const                      |
+--------------------------------+-----------------------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`operator*<api_Vector4_78bed960>` (const Vector4 & vector) const             |
+--------------------------------+-----------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` & | :ref:`operator*=<api_Vector4_3c86741a>` (areal  factor)                           |
+--------------------------------+-----------------------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`operator+<api_Vector4_dbf17694>` (const Vector4 & vector) const             |
+--------------------------------+-----------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` & | :ref:`operator+=<api_Vector4_bd619c07>` (const Vector4 & vector)                  |
+--------------------------------+-----------------------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`operator-<api_Vector4_42cab7e0>` () const                                   |
+--------------------------------+-----------------------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`operator-<api_Vector4_24e1f395>` (const Vector4 & vector) const             |
+--------------------------------+-----------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` & | :ref:`operator-=<api_Vector4_f836ce07>` (const Vector4 & vector)                  |
+--------------------------------+-----------------------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`operator/<api_Vector4_b3a698e7>` (areal  divisor) const                     |
+--------------------------------+-----------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` & | :ref:`operator/=<api_Vector4_71c4b5e0>` (areal  divisor)                          |
+--------------------------------+-----------------------------------------------------------------------------------+
|                           bool | :ref:`operator\<<api_Vector4_b564e08a>` (const Vector4 & vector) const            |
+--------------------------------+-----------------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` & | :ref:`operator=<api_Vector4_e89a3d0c>` (const Vector4 & value)                    |
+--------------------------------+-----------------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_Vector4_791b503f>` (const Vector4 & vector) const            |
+--------------------------------+-----------------------------------------------------------------------------------+
|                           bool | :ref:`operator><api_Vector4_207ef9cd>` (const Vector4 & vector) const             |
+--------------------------------+-----------------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Vector4_6503b8de>` (int  i)                                  |
+--------------------------------+-----------------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Vector4_e296d07c>` (int  i) const                            |
+--------------------------------+-----------------------------------------------------------------------------------+



.. _api_Vector4_static:

Static Methods
--------------

None

.. _api_Vector4_methods:

Methods Description
-------------------

.. _api_Vector4_94c5fa61:

**Vector4::Vector4** ()

Constructs a null vector, i.e. with coordinates (0, 0, 0, 1).

----

.. _api_Vector4_95c0631e:

**Vector4::Vector4** (areal  *v*)

Constructs a vector with coordinates (v).

----

.. _api_Vector4_ecb75041:

**Vector4::Vector4** (:ref:`Vector2<api_Vector2>` & *vector*)

Constructs a 4D *vector* from the specified 2D vector.

----

.. _api_Vector4_6c0ea893:

**Vector4::Vector4** (:ref:`Vector3<api_Vector3>` & *vector*)

Constructs a 4D *vector* from the specified 3D vector.

**See also** Vector3::Vector3().

----

.. _api_Vector4_bf6045e8:

**Vector4::Vector4** (:ref:`Vector3<api_Vector3>` & *vector*, areal  *w*)

Constructs a 4D *vector* from the specified 3D vector. The *w* coordinate is set to w.

**See also** Vector3::Vector3().

----

.. _api_Vector4_42c6ba39:

**Vector4::Vector4** (:ref:`Vector2<api_Vector2>` & *vector*, areal  *z*, areal  *w*)

Constructs a 4D *vector* from the specified 2D vector. The *z* and *w* coordinates is set to *z* and w.

----

.. _api_Vector4_80dbe479:

**Vector4::Vector4** (areal  *x*, areal  *y*, areal  *z*, areal  *w*)

Constructs a vector with coordinates (x, y, z, w).

----

.. _api_Vector4_5729bc3f:

**Vector4::Vector4** (:ref:`Vector4<api_Vector4>` & *vector*)

Copy constructor.

----

.. _api_Vector4_0e3f9c1d:

 areal **Vector4::dot** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns the dot-product of this *vector* and given vector.

----

.. _api_Vector4_f72548bd:

 areal **Vector4::length** () const

Returns the length of this vector.

**See also** sqrLength().

----

.. _api_Vector4_528a173c:

 areal **Vector4::normalize** ()

Normalizes the currect vector in place. Returns length of prenormalized vector.

**See also** length().

----

.. _api_Vector4_b36da5ec:

 areal **Vector4::sqrLength** () const

Returns the squared length of this vector.

**See also** length().

----

.. _api_Vector4_658e7c9f:

 bool **Vector4::operator!=** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns true if this *vector* is NOT equal to given vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector4_1f97c65a:

 :ref:`Vector4<api_Vector4>`  **Vector4::operator*** (areal  *factor*) const

Returns a copy of this vector, multiplied by the given factor.

**See also** operator*=().

----

.. _api_Vector4_78bed960:

 :ref:`Vector4<api_Vector4>`  **Vector4::operator*** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns a copy of this vector, multiplied by the given vector.

**See also** operator*=().

----

.. _api_Vector4_3c86741a:

 :ref:`Vector4<api_Vector4>` & **Vector4::operator*=** (areal  *factor*)

Multiplies this vector's coordinates by the given factor, and returns a reference to this vector.

**See also** operator/=().

----

.. _api_Vector4_dbf17694:

 :ref:`Vector4<api_Vector4>`  **Vector4::operator+** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns a Vector4 object that is the sum of the this *vector* and vector; each component is added separately.

**See also** operator+=().

----

.. _api_Vector4_bd619c07:

 :ref:`Vector4<api_Vector4>` & **Vector4::operator+=** (:ref:`Vector4<api_Vector4>` & *vector*)

Adds the given *vector* to this *vector* and returns a reference to this vector.

**See also** operator-=().

----

.. _api_Vector4_42cab7e0:

 :ref:`Vector4<api_Vector4>`  **Vector4::operator-** () const

Returns a Vector4 object that is formed by changing the sign of all three components of the this vector.

Equivalent to Vector4(0,0,0,1) - vector.

----

.. _api_Vector4_24e1f395:

 :ref:`Vector4<api_Vector4>`  **Vector4::operator-** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns a Vector4 object that is formed by subtracting *vector* from this vector; each component is subtracted separately.

**See also** operator-=().

----

.. _api_Vector4_f836ce07:

 :ref:`Vector4<api_Vector4>` & **Vector4::operator-=** (:ref:`Vector4<api_Vector4>` & *vector*)

Subtracts the given *vector* from this *vector* and returns a reference to this vector.

**See also** operator+=().

----

.. _api_Vector4_b3a698e7:

 :ref:`Vector4<api_Vector4>`  **Vector4::operator/** (areal  *divisor*) const

Returns a copy of this vector, divided by the given divisor.

**See also** operator/=().

----

.. _api_Vector4_71c4b5e0:

 :ref:`Vector4<api_Vector4>` & **Vector4::operator/=** (areal  *divisor*)

Divides this vector's coordinates by the given divisor, and returns a reference to this vector.

**See also** operator*=().

----

.. _api_Vector4_b564e08a:

 bool **Vector4::operator<** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns true if this *vector* is less than vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector4_e89a3d0c:

 :ref:`Vector4<api_Vector4>` & **Vector4::operator=** (:ref:`Vector4<api_Vector4>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Vector4_791b503f:

 bool **Vector4::operator==** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns true if this *vector* is equal to given vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector4_207ef9cd:

 bool **Vector4::operator>** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns true if this *vector* is bigger than given vector; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Vector4_6503b8de:

 areal **Vector4::operator[]** (int  *i*)

Returns the component of the vector at index position *i* as a modifiable reference. *i* must be a valid index position in the vector (i.e., 0 <= *i* < 4).

.. _api_Vector4_e296d07c:

 areal **Vector4::operator[]** (int  *i*) const

Returns the component of the vector at index position. *i* must be a valid index position in the vector (i.e., 0 <= *i* < 4).


