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
|                                | :ref:`Matrix3<api_Matrix3_7f8da2e0>` ()                                  |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`determinant<api_Matrix3_6d7329ca>` () const                        |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`euler<api_Matrix3_edcfb018>` ()                                    |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`identity<api_Matrix3_57c46803>` ()                                 |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`inverse<api_Matrix3_153c97d6>` () const                            |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`orthonormalize<api_Matrix3_b350e487>` ()                           |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix3_e91b7d0a>` (const Vector3 & angles)             |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix3_b0e14d68>` (const Vector3 & axis, areal  angle) |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`scale<api_Matrix3_d29746be>` (const Vector3 & vector)              |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`transpose<api_Matrix3_8c964320>` () const                          |
+--------------------------------+--------------------------------------------------------------------------+
|                           void | :ref:`zero<api_Matrix3_f8bc3092>` ()                                     |
+--------------------------------+--------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_Matrix3_d0614729>` (const Matrix3 & matrix) const   |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator*<api_Matrix3_6a154b2f>` (areal  factor) const             |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator*<api_Matrix3_350a87b2>` (const Matrix3 & matrix) const    |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Matrix3_51f06439>` (const Vector3 & vector) const    |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`operator*<api_Matrix3_8f659c7d>` (const Vector4 & vector) const    |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator*=<api_Matrix3_7b3459e2>` (areal  factor)                  |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator*=<api_Matrix3_81d56e94>` (const Matrix3 & matrix)         |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator+<api_Matrix3_ef1529dc>` (const Matrix3 & matrix) const    |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator+=<api_Matrix3_a4b50916>` (const Matrix3 & matrix)         |
+--------------------------------+--------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`operator-<api_Matrix3_36249f1c>` (const Matrix3 & matrix) const    |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator-=<api_Matrix3_38f7d905>` (const Matrix3 & matrix)         |
+--------------------------------+--------------------------------------------------------------------------+
|  :ref:`Matrix3<api_Matrix3>` & | :ref:`operator=<api_Matrix3_9bad432e>` (const Matrix3 & value)           |
+--------------------------------+--------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_Matrix3_4db26ac7>` (const Matrix3 & matrix) const   |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix3_508c7f41>` (int  i)                         |
+--------------------------------+--------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix3_a0b369c5>` (int  i) const                   |
+--------------------------------+--------------------------------------------------------------------------+



.. _api_Matrix3_static:

Static Methods
--------------

None

.. _api_Matrix3_methods:

Methods Description
-------------------

.. _api_Matrix3_7f8da2e0:

**Matrix3::Matrix3** ()

Constructs a identity matrix.

----

.. _api_Matrix3_6d7329ca:

 areal **Matrix3::determinant** () const

Returns the matrix determinant.

----

.. _api_Matrix3_edcfb018:

 :ref:`Vector3<api_Vector3>`  **Matrix3::euler** ()

Returns an Euler angles represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Matrix3_57c46803:

 void **Matrix3::identity** ()

Resets this matrix to an identity matrix.

----

.. _api_Matrix3_153c97d6:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::inverse** () const

Returns an inverted copy of this matrix.

----

.. _api_Matrix3_b350e487:

 void **Matrix3::orthonormalize** ()

Orthonormalize this matrix.

----

.. _api_Matrix3_e91b7d0a:

 void **Matrix3::rotate** (:ref:`Vector3<api_Vector3>` & *angles*)

Rotate this matrix with Euler *angles* represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Matrix3_b0e14d68:

 void **Matrix3::rotate** (:ref:`Vector3<api_Vector3>` & *axis*, areal  *angle*)

Rotate this matrix around *axis* to *angle* in rotation degrees.

----

.. _api_Matrix3_d29746be:

 void **Matrix3::scale** (:ref:`Vector3<api_Vector3>` & *vector*)

Scales the coordinate system by vector.

----

.. _api_Matrix3_8c964320:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::transpose** () const

Returns this matrix, transposed about its diagonal.

----

.. _api_Matrix3_f8bc3092:

 void **Matrix3::zero** ()

Clear this matrix, with 0.0 value for all components.

----

.. _api_Matrix3_d0614729:

 bool **Matrix3::operator!=** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns true if this *matrix* is NOT equal to given matrix; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix3_6a154b2f:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator*** (areal  *factor*) const

Returns the result of multiplying this matrix and the given factor.

----

.. _api_Matrix3_350a87b2:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator*** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the result of multiplying this *matrix* by the given matrix.

Note that *matrix* multiplication is not commutative, i.e. a*b != b*a.

----

.. _api_Matrix3_51f06439:

 :ref:`Vector3<api_Vector3>`  **Matrix3::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns the result of multiplying this matrix and the given 3D vector.

----

.. _api_Matrix3_8f659c7d:

 :ref:`Vector4<api_Vector4>`  **Matrix3::operator*** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns the result of multiplying this matrix and the given 4D vector.

----

.. _api_Matrix3_7b3459e2:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator*=** (areal  *factor*)

Multiplies all elements of this matrix by factor.

----

.. _api_Matrix3_81d56e94:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator*=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Returns the result of multiplying this *matrix* by the given matrix.

----

.. _api_Matrix3_ef1529dc:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator+** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the sum of this *matrix* and the given matrix.

----

.. _api_Matrix3_a4b50916:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator+=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Adds the contents of *matrix* to this matrix.

----

.. _api_Matrix3_36249f1c:

 :ref:`Matrix3<api_Matrix3>`  **Matrix3::operator-** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns the difference of this *matrix* and the given matrix.

----

.. _api_Matrix3_38f7d905:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator-=** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Subtracts the contents of *matrix* from this matrix.

----

.. _api_Matrix3_9bad432e:

 :ref:`Matrix3<api_Matrix3>` & **Matrix3::operator=** (:ref:`Matrix3<api_Matrix3>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Matrix3_4db26ac7:

 bool **Matrix3::operator==** (:ref:`Matrix3<api_Matrix3>` & *matrix*) const

Returns true if this *matrix* is equal to given matrix; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix3_508c7f41:

 areal **Matrix3::operator[]** (int  *i*)

Returns the component of the matrix at index position *i* as a modifiable reference. *i* must be a valid index position in the matrix (i.e., 0 <= *i* < 9). Data is stored as column-major format so this function retrieving data from rows in colmns.

.. _api_Matrix3_a0b369c5:

 areal **Matrix3::operator[]** (int  *i*) const

Returns the component of the matrix at index position. *i* must be a valid index position in the matrix (i.e., 0 <= *i* < 9). Data is stored as column-major format so this function retrieving data from rows in colmns.


