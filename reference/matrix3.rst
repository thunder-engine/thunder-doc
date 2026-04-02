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
|                                | :ref:`Matrix3<api_Matrix3_69073a4b>` ()                                  |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`determinant<api_Matrix3_69a013bd>` () const                        |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`euler<api_Matrix3_c5af81d6>` ()                                    |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`identity<api_Matrix3_2c40ea15>` ()                                 |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`inverse<api_Matrix3_6f7ea932>` () const                            |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`orthonormalize<api_Matrix3_689baf24>` ()                           |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix3_e98dc3ba>` (const Vector3 & angles)             |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix3_3be25ac6>` (const Vector3 & axis, areal  angle) |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`scale<api_Matrix3_f086ac9b>` (const Vector3 & vector)              |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`transpose<api_Matrix3_6e34f8b9>` () const                          |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`zero<api_Matrix3_6f5a2c4e>` ()                                     |
+--------------------------------+--------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_Matrix3_68d79c34>` (const Matrix3 & matrix) const   |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator*<api_Matrix3_c59ef78b>` (areal  factor) const             |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator*<api_Matrix3_e85fb1d4>` (const Matrix3 & matrix) const    |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Matrix3_4c1d627e>` (const Vector3 & vector) const    |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`operator*<api_Matrix3_7a450b91>` (const Vector4 & vector) const    |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator*=<api_Matrix3_59c4f37b>` (areal  factor)                  |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator*=<api_Matrix3_48c5f907>` (const Matrix3 & matrix)         |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator+<api_Matrix3_105269ba>` (const Matrix3 & matrix) const    |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator+=<api_Matrix3_1e9d685c>` (const Matrix3 & matrix)         |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator-<api_Matrix3_6c42fb70>` (const Matrix3 & matrix) const    |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator-=<api_Matrix3_c59df328>` (const Matrix3 & matrix)         |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator=<api_Matrix3_2d075a4c>` (const Matrix3 & value)           |
+--------------------------------+--------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_Matrix3_9be4adc1>` (const Matrix3 & matrix) const   |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix3_8ac04973>` (int  i)                         |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix3_673bf052>` (int  i) const                   |
+--------------------------------+--------------------------------------------------------------------------+



.. _api_Matrix3_static:

Static Methods
--------------

None

.. _api_Matrix3_methods:

Methods Description
-------------------

.. _api_Matrix3_69073a4b:

**Matrix3::Matrix3** ()

Constructs a identity matrix.

----

.. _api_Matrix3_69a013bd:

 areal **Matrix3::determinant** () const

Returns the matrix determinant.

----

.. _api_Matrix3_c5af81d6:

 :ref:`Vector3<api_Vector3>`  **Matrix3::euler** ()

Returns an Euler angles represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Matrix3_2c40ea15:

 void **Matrix3::identity** ()

Resets this matrix to an identity matrix.

----

.. _api_Matrix3_6f7ea932:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::inverse** () const

Returns an inverted copy of this matrix.

----

.. _api_Matrix3_689baf24:

 void **Matrix3::orthonormalize** ()

Orthonormalize this matrix.

----

.. _api_Matrix3_e98dc3ba:

 void **Matrix3::rotate** (:ref:`Vector3<api_Vector3>` & *angles*)

Rotate this matrix with Euler *angles* represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Matrix3_3be25ac6:

 void **Matrix3::rotate** (:ref:`Vector3<api_Vector3>` & *axis*, areal  *angle*)

Rotate this matrix around *axis* to *angle* in rotation degrees.

----

.. _api_Matrix3_f086ac9b:

 void **Matrix3::scale** (:ref:`Vector3<api_Vector3>` & *vector*)

Scales the coordinate system by vector.

----

.. _api_Matrix3_6e34f8b9:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::transpose** () const

Returns this matrix, transposed about its diagonal.

----

.. _api_Matrix3_6f5a2c4e:

 void **Matrix3::zero** ()

Clear this matrix, with 0.0 value for all components.

----

.. _api_Matrix3_68d79c34:

 bool **Matrix3::operator!=** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns true if this *matrix* is NOT equal to given matrix; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix3_c59ef78b:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator*** (areal  *factor*) const

Returns the result of multiplying this matrix and the given factor.

----

.. _api_Matrix3_e85fb1d4:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator*** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the result of multiplying this *matrix* by the given matrix.

Note that *matrix* multiplication is not commutative, i.e. a*b != b*a.

----

.. _api_Matrix3_4c1d627e:

 :ref:`Vector3<api_Vector3>`  **Matrix3::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns the result of multiplying this matrix and the given 3D vector.

----

.. _api_Matrix3_7a450b91:

 :ref:`Vector4<api_Vector4>`  **Matrix3::operator*** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns the result of multiplying this matrix and the given 4D vector.

----

.. _api_Matrix3_59c4f37b:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator*=** (areal  *factor*)

Multiplies all elements of this matrix by factor.

----

.. _api_Matrix3_48c5f907:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator*=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Returns the result of multiplying this *matrix* by the given matrix.

----

.. _api_Matrix3_105269ba:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator+** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the sum of this *matrix* and the given matrix.

----

.. _api_Matrix3_1e9d685c:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator+=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Adds the contents of *matrix* to this matrix.

----

.. _api_Matrix3_6c42fb70:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator-** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the difference of this *matrix* and the given matrix.

----

.. _api_Matrix3_c59df328:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator-=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Subtracts the contents of *matrix* from this matrix.

----

.. _api_Matrix3_2d075a4c:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator=** (:ref:`Matrix3<api_Matrix3>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Matrix3_9be4adc1:

 bool **Matrix3::operator==** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns true if this *matrix* is equal to given matrix; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix3_8ac04973:

 areal **Matrix3::operator[]** (int  *i*)

Returns the component of the matrix at index position *i* as a modifiable reference. *i* must be a valid index position in the matrix (i.e., 0 <= *i* < 9). Data is stored as column-major format so this function retrieving data from rows in colmns.

.. _api_Matrix3_673bf052:

 areal **Matrix3::operator[]** (int  *i*) const

Returns the component of the matrix at index position. *i* must be a valid index position in the matrix (i.e., 0 <= *i* < 9). Data is stored as column-major format so this function retrieving data from rows in colmns.


