.. _api_Matrix3:

Matrix3
=======

Inherited: None

.. _api_Matrix3_description:

Description
-----------

Internally the data is stored as column-major format, so as to be optimal for passing to OpenGL functions, which expect column-major data.



.. _api_Matrix3_public:

Public Methods
--------------

+--------------------------------+--------------------------------------------------------------------------+
|                                | :ref:`Matrix3<api_Matrix3_b805ed14>` ()                                  |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`determinant<api_Matrix3_b60d9f34>` () const                        |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`euler<api_Matrix3_df0e8712>` ()                                    |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`identity<api_Matrix3_72e98a45>` ()                                 |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`inverse<api_Matrix3_57bac901>` () const                            |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`orthonormalize<api_Matrix3_ef321a6d>` ()                           |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix3_9281fb45>` (const Vector3 & axis, areal  angle) |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix3_c6a04b9e>` (const Vector3 & angles)             |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`scale<api_Matrix3_b0f718ed>` (const Vector3 & vector)              |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`transpose<api_Matrix3_d69a5c42>` () const                          |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`zero<api_Matrix3_672df34e>` ()                                     |
+--------------------------------+--------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_Matrix3_e14daf5b>` (const Matrix3 & matrix) const   |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Matrix3_0f412e39>` (const Vector3 & vector) const    |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`operator*<api_Matrix3_be51c9d4>` (const Vector4 & vector) const    |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator*<api_Matrix3_b1273e5c>` (areal  factor) const             |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator*<api_Matrix3_095b1fa6>` (const Matrix3 & matrix) const    |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator*=<api_Matrix3_d897b420>` (areal  factor)                  |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator*=<api_Matrix3_3b2edf98>` (const Matrix3 & matrix)         |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator+<api_Matrix3_ca489eb7>` (const Matrix3 & matrix) const    |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator+=<api_Matrix3_2b04e9c1>` (const Matrix3 & matrix)         |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator-<api_Matrix3_9f42a80b>` (const Matrix3 & matrix) const    |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator-=<api_Matrix3_b2e48017>` (const Matrix3 & matrix)         |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator=<api_Matrix3_5fe9314b>` (const Matrix3 & value)           |
+--------------------------------+--------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_Matrix3_416dfa25>` (const Matrix3 & matrix) const   |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix3_75f263a0>` (int  i)                         |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix3_865a2370>` (int  i) const                   |
+--------------------------------+--------------------------------------------------------------------------+



.. _api_Matrix3_static:

Static Methods
--------------

None

.. _api_Matrix3_methods:

Methods Description
-------------------

.. _api_Matrix3_b805ed14:

**Matrix3::Matrix3** ()

Constructs a identity matrix.

----

.. _api_Matrix3_b60d9f34:

 areal **Matrix3::determinant** () const

Returns the matrix determinant.

----

.. _api_Matrix3_df0e8712:

 :ref:`Vector3<api_Vector3>`  **Matrix3::euler** ()

Returns an Euler angles represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Matrix3_72e98a45:

 void **Matrix3::identity** ()

Resets this matrix to an identity matrix.

----

.. _api_Matrix3_57bac901:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::inverse** () const

Returns an inverted copy of this matrix.

----

.. _api_Matrix3_ef321a6d:

 void **Matrix3::orthonormalize** ()

Orthonormalize this matrix.

----

.. _api_Matrix3_9281fb45:

 void **Matrix3::rotate** (:ref:`Vector3<api_Vector3>` & *axis*, areal  *angle*)

Rotate this matrix around *axis* to *angle* in rotation degrees.

----

.. _api_Matrix3_c6a04b9e:

 void **Matrix3::rotate** (:ref:`Vector3<api_Vector3>` & *angles*)

Rotate this matrix with Euler *angles* represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Matrix3_b0f718ed:

 void **Matrix3::scale** (:ref:`Vector3<api_Vector3>` & *vector*)

Scales the coordinate system by vector.

----

.. _api_Matrix3_d69a5c42:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::transpose** () const

Returns this matrix, transposed about its diagonal.

----

.. _api_Matrix3_672df34e:

 void **Matrix3::zero** ()

Clear this matrix, with 0.0 value for all components.

----

.. _api_Matrix3_e14daf5b:

 bool **Matrix3::operator!=** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns true if this *matrix* is NOT equal to given matrix; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix3_0f412e39:

 :ref:`Vector3<api_Vector3>`  **Matrix3::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns the result of multiplying this matrix and the given 3D vector.

----

.. _api_Matrix3_be51c9d4:

 :ref:`Vector4<api_Vector4>`  **Matrix3::operator*** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns the result of multiplying this matrix and the given 4D vector.

----

.. _api_Matrix3_b1273e5c:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator*** (areal  *factor*) const

Returns the result of multiplying this matrix and the given factor.

----

.. _api_Matrix3_095b1fa6:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator*** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the result of multiplying this *matrix* by the given matrix.

Note that *matrix* multiplication is not commutative, i.e. a*b != b*a.

----

.. _api_Matrix3_d897b420:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator*=** (areal  *factor*)

Multiplies all elements of this matrix by factor.

----

.. _api_Matrix3_3b2edf98:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator*=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Returns the result of multiplying this *matrix* by the given matrix.

----

.. _api_Matrix3_ca489eb7:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator+** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the sum of this *matrix* and the given matrix.

----

.. _api_Matrix3_2b04e9c1:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator+=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Adds the contents of *matrix* to this matrix.

----

.. _api_Matrix3_9f42a80b:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator-** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the difference of this *matrix* and the given matrix.

----

.. _api_Matrix3_b2e48017:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator-=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Subtracts the contents of *matrix* from this matrix.

----

.. _api_Matrix3_5fe9314b:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator=** (:ref:`Matrix3<api_Matrix3>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Matrix3_416dfa25:

 bool **Matrix3::operator==** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns true if this *matrix* is equal to given matrix; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix3_75f263a0:

 areal **Matrix3::operator[]** (int  *i*)

Returns the component of the matrix at index position *i* as a modifiable reference. *i* must be a valid index position in the matrix (i.e., 0 <= *i* < 9). Data is stored as column-major format so this function retrieving data from rows in colmns.

.. _api_Matrix3_865a2370:

 areal **Matrix3::operator[]** (int  *i*) const

Returns the component of the matrix at index position. *i* must be a valid index position in the matrix (i.e., 0 <= *i* < 9). Data is stored as column-major format so this function retrieving data from rows in colmns.


