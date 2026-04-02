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
|                                | :ref:`Matrix3<api_Matrix3_be394c85>` ()                                  |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`determinant<api_Matrix3_f10369ce>` () const                        |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`euler<api_Matrix3_b2431d95>` ()                                    |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`identity<api_Matrix3_be604a8d>` ()                                 |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`inverse<api_Matrix3_c14ad6b9>` () const                            |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`orthonormalize<api_Matrix3_a9c4268e>` ()                           |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix3_3429efb6>` (const Vector3 & angles)             |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix3_398c7ab1>` (const Vector3 & axis, areal  angle) |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`scale<api_Matrix3_1c235fb6>` (const Vector3 & vector)              |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`transpose<api_Matrix3_2d47180a>` () const                          |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`zero<api_Matrix3_b3e2674a>` ()                                     |
+--------------------------------+--------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_Matrix3_3047c9e2>` (const Matrix3 & matrix) const   |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator*<api_Matrix3_18a04326>` (areal  factor) const             |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator*<api_Matrix3_e9b2134d>` (const Matrix3 & matrix) const    |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Matrix3_83bd6c14>` (const Vector3 & vector) const    |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`operator*<api_Matrix3_ea3bcd65>` (const Vector4 & vector) const    |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator*=<api_Matrix3_70b49f15>` (areal  factor)                  |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator*=<api_Matrix3_2793e051>` (const Matrix3 & matrix)         |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator+<api_Matrix3_70f4269a>` (const Matrix3 & matrix) const    |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator+=<api_Matrix3_afe97328>` (const Matrix3 & matrix)         |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator-<api_Matrix3_47a1e3d9>` (const Matrix3 & matrix) const    |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator-=<api_Matrix3_b6e37c01>` (const Matrix3 & matrix)         |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator=<api_Matrix3_d59f34b2>` (const Matrix3 & value)           |
+--------------------------------+--------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_Matrix3_48a7c509>` (const Matrix3 & matrix) const   |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix3_6f1b83e4>` (int  i)                         |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix3_3a01d8b2>` (int  i) const                   |
+--------------------------------+--------------------------------------------------------------------------+



.. _api_Matrix3_static:

Static Methods
--------------

None

.. _api_Matrix3_methods:

Methods Description
-------------------

.. _api_Matrix3_be394c85:

**Matrix3::Matrix3** ()

Constructs a identity matrix.

----

.. _api_Matrix3_f10369ce:

 areal **Matrix3::determinant** () const

Returns the matrix determinant.

----

.. _api_Matrix3_b2431d95:

 :ref:`Vector3<api_Vector3>`  **Matrix3::euler** ()

Returns an Euler angles represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Matrix3_be604a8d:

 void **Matrix3::identity** ()

Resets this matrix to an identity matrix.

----

.. _api_Matrix3_c14ad6b9:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::inverse** () const

Returns an inverted copy of this matrix.

----

.. _api_Matrix3_a9c4268e:

 void **Matrix3::orthonormalize** ()

Orthonormalize this matrix.

----

.. _api_Matrix3_3429efb6:

 void **Matrix3::rotate** (:ref:`Vector3<api_Vector3>` & *angles*)

Rotate this matrix with Euler *angles* represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Matrix3_398c7ab1:

 void **Matrix3::rotate** (:ref:`Vector3<api_Vector3>` & *axis*, areal  *angle*)

Rotate this matrix around *axis* to *angle* in rotation degrees.

----

.. _api_Matrix3_1c235fb6:

 void **Matrix3::scale** (:ref:`Vector3<api_Vector3>` & *vector*)

Scales the coordinate system by *vector*.

----

.. _api_Matrix3_2d47180a:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::transpose** () const

Returns this matrix, transposed about its diagonal.

----

.. _api_Matrix3_b3e2674a:

 void **Matrix3::zero** ()

Clear this matrix, with 0.0 value for all components.

----

.. _api_Matrix3_3047c9e2:

 bool **Matrix3::operator!=** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns true if this *matrix* is NOT equal to given *matrix*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix3_18a04326:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator*** (areal  *factor*) const

Returns the result of multiplying this matrix and the given *factor*.

----

.. _api_Matrix3_e9b2134d:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator*** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the result of multiplying this *matrix* by the given *matrix*.

Note that *matrix* multiplication is not commutative, i.e. a*b != b*a.

----

.. _api_Matrix3_83bd6c14:

 :ref:`Vector3<api_Vector3>`  **Matrix3::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns the result of multiplying this matrix and the given 3D *vector*.

----

.. _api_Matrix3_ea3bcd65:

 :ref:`Vector4<api_Vector4>`  **Matrix3::operator*** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns the result of multiplying this matrix and the given 4D *vector*.

----

.. _api_Matrix3_70b49f15:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator*=** (areal  *factor*)

Multiplies all elements of this matrix by *factor*.

----

.. _api_Matrix3_2793e051:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator*=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Returns the result of multiplying this *matrix* by the given *matrix*.

----

.. _api_Matrix3_70f4269a:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator+** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the sum of this *matrix* and the given *matrix*.

----

.. _api_Matrix3_afe97328:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator+=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Adds the contents of *matrix* to this *matrix*.

----

.. _api_Matrix3_47a1e3d9:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator-** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the difference of this *matrix* and the given *matrix*.

----

.. _api_Matrix3_b6e37c01:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator-=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Subtracts the contents of *matrix* from this *matrix*.

----

.. _api_Matrix3_d59f34b2:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator=** (:ref:`Matrix3<api_Matrix3>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Matrix3_48a7c509:

 bool **Matrix3::operator==** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns true if this *matrix* is equal to given *matrix*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix3_6f1b83e4:

 areal **Matrix3::operator[]** (int  *i*)

Returns the component of the matrix at *i*ndex position *i* as a modifiable reference. *i* must be a valid *i*ndex position *i*n the matrix (i.e., 0 <= *i* < 9). Data *i*s stored as column-major format so this function retrieving data from rows *i*n colmns.

.. _api_Matrix3_3a01d8b2:

 areal **Matrix3::operator[]** (int  *i*) const

Returns the component of the matrix at *i*ndex position. *i* must be a valid *i*ndex position *i*n the matrix (i.e., 0 <= *i* < 9). Data *i*s stored as column-major format so this function retrieving data from rows *i*n colmns.


