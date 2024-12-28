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
|                                | :ref:`Matrix3<api_Matrix3_Matrix3>` ()                                   |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`determinant<api_Matrix3_determinant>` () const                     |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`euler<api_Matrix3_euler>` ()                                       |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`identity<api_Matrix3_identity>` ()                                 |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`inverse<api_Matrix3_inverse>` () const                             |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`orthonormalize<api_Matrix3_orthonormalize>` ()                     |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix3_rotate>` (const Vector3 & angles)               |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix3_rotate>` (const Vector3 & axis, areal  angle)   |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`scale<api_Matrix3_scale>` (const Vector3 & vector)                 |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`transpose<api_Matrix3_transpose>` () const                         |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`zero<api_Matrix3_zero>` ()                                         |
+--------------------------------+--------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_Matrix3_operator!=>` (const Matrix3 & matrix) const |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator*<api_Matrix3_operator*>` (areal  factor) const            |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator*<api_Matrix3_operator*>` (const Matrix3 & matrix) const   |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Matrix3_operator*>` (const Vector3 & vector) const   |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`operator*<api_Matrix3_operator*>` (const Vector4 & vector) const   |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator*=<api_Matrix3_operator*=>` (areal  factor)                |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator*=<api_Matrix3_operator*=>` (const Matrix3 & matrix)       |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator+<api_Matrix3_operator+>` (const Matrix3 & matrix) const   |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator+=<api_Matrix3_operator+=>` (const Matrix3 & matrix)       |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator-<api_Matrix3_operator->` (const Matrix3 & matrix) const   |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator-=<api_Matrix3_operator-=>` (const Matrix3 & matrix)       |
+--------------------------------+--------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_Matrix3_operator==>` (const Matrix3 & matrix) const |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix3_operator[]>` (int  i)                       |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix3_operator[]>` (int  i) const                 |
+--------------------------------+--------------------------------------------------------------------------+



.. _api_Matrix3_static:

Static Methods
--------------

None

.. _api_Matrix3_methods:

Methods Description
-------------------

.. _api_Matrix3_Matrix3:

**Matrix3::Matrix3** ()

Constructs a identity matrix.

----

.. _api_Matrix3_determinant:

 areal **Matrix3::determinant** () const

Returns the matrix determinant.

----

.. _api_Matrix3_euler:

 :ref:`Vector3<api_Vector3>`  **Matrix3::euler** ()

Returns an Euler angles represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Matrix3_identity:

 void **Matrix3::identity** ()

Resets this matrix to an identity matrix.

----

.. _api_Matrix3_inverse:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::inverse** () const

Returns an inverted copy of this matrix.

----

.. _api_Matrix3_orthonormalize:

 void **Matrix3::orthonormalize** ()

Orthonormalize this matrix.

----

.. _api_Matrix3_rotate:

 void **Matrix3::rotate** (:ref:`Vector3<api_Vector3>` & *angles*)

Rotate this matrix with Euler *angles* represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Matrix3_rotate:

 void **Matrix3::rotate** (:ref:`Vector3<api_Vector3>` & *axis*, areal  *angle*)

Rotate this matrix around *axis* to *angle* in rotation degrees.

----

.. _api_Matrix3_scale:

 void **Matrix3::scale** (:ref:`Vector3<api_Vector3>` & *vector*)

Scales the coordinate system by *vector*.

----

.. _api_Matrix3_transpose:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::transpose** () const

Returns this matrix, transposed about its diagonal.

----

.. _api_Matrix3_zero:

 void **Matrix3::zero** ()

Clear this matrix, with 0.0 value for all components.

----

.. _api_Matrix3_operator!=:

 bool **Matrix3::operator!=** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns true if this *matrix* is NOT equal to given *matrix*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix3_operator*:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator*** (areal  *factor*) const

Returns the result of multiplying this matrix and the given *factor*.

----

.. _api_Matrix3_operator*:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator*** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the result of multiplying this *matrix* by the given *matrix*.

Note that *matrix* multiplication is not commutative, i.e. a*b != b*a.

----

.. _api_Matrix3_operator*:

 :ref:`Vector3<api_Vector3>`  **Matrix3::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns the result of multiplying this matrix and the given 3D *vector*.

----

.. _api_Matrix3_operator*:

 :ref:`Vector4<api_Vector4>`  **Matrix3::operator*** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns the result of multiplying this matrix and the given 4D *vector*.

----

.. _api_Matrix3_operator*=:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator*=** (areal  *factor*)

Multiplies all elements of this matrix by *factor*.

----

.. _api_Matrix3_operator*=:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator*=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Returns the result of multiplying this *matrix* by the given *matrix*.

----

.. _api_Matrix3_operator+:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator+** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the sum of this *matrix* and the given *matrix*.

----

.. _api_Matrix3_operator+=:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator+=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Adds the contents of *matrix* to this *matrix*.

----

.. _api_Matrix3_operator-:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator-** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the difference of this *matrix* and the given *matrix*.

----

.. _api_Matrix3_operator-=:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator-=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Subtracts the contents of *matrix* from this *matrix*.

----

.. _api_Matrix3_operator==:

 bool **Matrix3::operator==** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns true if this *matrix* is equal to given *matrix*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix3_operator[]:

 areal **Matrix3::operator[]** (int  *i*)

Returns the component of the matrix at *i*ndex position *i* as a modifiable reference. *i* must be a valid *i*ndex position *i*n the matrix (i.e., 0 <= *i* < 9). Data *i*s stored as column-major format so this function retrieving data from rows *i*n colmns.

.. _api_Matrix3_operator[]:

 areal **Matrix3::operator[]** (int  *i*) const

Returns the component of the matrix at *i*ndex position. *i* must be a valid *i*ndex position *i*n the matrix (i.e., 0 <= *i* < 9). Data *i*s stored as column-major format so this function retrieving data from rows *i*n colmns.


