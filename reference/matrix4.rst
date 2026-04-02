.. _api_Matrix4:

Matrix4
=======

Inherited: None

.. _api_Matrix4_description:

Description
-----------

Internally the data is stored as column-major format, so as to be optimal for passing to OpenGL functions, which expect column-major data.



.. _api_Matrix4_public:

Public Methods
--------------

+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`Matrix4<api_Matrix4_e834792d>` ()                                                                             |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`Matrix4<api_Matrix4_48051ba9>` (const Matrix3 & matrix)                                                       |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`Matrix4<api_Matrix4_607ae9fb>` (const Vector3 & position, const Quaternion & rotation, const Vector3 & scale) |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                          areal | :ref:`determinant<api_Matrix4_e932ca61>` () const                                                                   |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`direction<api_Matrix4_7c9206f4>` (const Vector3 & direction, const Vector3 & up)                              |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`euler<api_Matrix4_b1cda809>` ()                                                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`identity<api_Matrix4_a13c05b8>` ()                                                                            |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`inverse<api_Matrix4_cfde92a0>` () const                                                                       |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`position<api_Matrix4_439e07f6>` () const                                                                      |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`reflect<api_Matrix4_e3f982c5>` (const Vector4 & plane)                                                        |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix4_9a637fd1>` (const Vector3 & angles)                                                        |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix4_394af168>` (const Vector3 & axis, areal  angle)                                            |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`rotation<api_Matrix4_b0e186f9>` () const                                                                      |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`scale<api_Matrix4_fac91802>` (const Vector3 & vector)                                                         |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`translate<api_Matrix4_da12e9b3>` (const Vector3 & vector)                                                     |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`transpose<api_Matrix4_986c0d5a>` () const                                                                     |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`zero<api_Matrix4_8bf24e3a>` ()                                                                                |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_Matrix4_e64c85b1>` (const Matrix4 & matrix) const                                              |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`operator*<api_Matrix4_e746c5a8>` (areal  factor) const                                                        |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`operator*<api_Matrix4_ab51037c>` (const Matrix4 & matrix) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Matrix4_195a7d04>` (const Vector3 & vector) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`operator*<api_Matrix4_6740c953>` (const Vector4 & vector) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator*=<api_Matrix4_d7aeb91c>` (areal  factor)                                                             |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator*=<api_Matrix4_e147396c>` (const Matrix4 & matrix)                                                    |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`operator+<api_Matrix4_7bd91c63>` (const Matrix4 & matrix) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator+=<api_Matrix4_183be75f>` (const Matrix4 & matrix)                                                    |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`operator-<api_Matrix4_7c3d2f01>` (const Matrix4 & matrix) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator-=<api_Matrix4_c8109fe2>` (const Matrix4 & matrix)                                                    |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator=<api_Matrix4_ec8f65d3>` (const Matrix4 & value)                                                      |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_Matrix4_6b845e09>` (const Matrix4 & matrix) const                                              |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix4_7c8fbd90>` (int  i)                                                                    |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix4_70239af5>` (int  i) const                                                              |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+



.. _api_Matrix4_static:

Static Methods
--------------

+------------------------------+----------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`lookAt<api_Matrix4_a76e9513>` (const Vector3 & eye, const Vector3 & target, const Vector3 & up)                |
+------------------------------+----------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`ortho<api_Matrix4_39a5ed16>` (areal  left, areal  right, areal  bottom, areal  top, areal  znear, areal  zfar) |
+------------------------------+----------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`perspective<api_Matrix4_1f5b9cd8>` (areal  fov, areal  aspect, areal  znear, areal  zfar)                      |
+------------------------------+----------------------------------------------------------------------------------------------------------------------+

.. _api_Matrix4_methods:

Methods Description
-------------------

.. _api_Matrix4_e834792d:

**Matrix4::Matrix4** ()

Constructs an identity matrix.

----

.. _api_Matrix4_48051ba9:

**Matrix4::Matrix4** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Constructs a transform *matrix* with rotation *matrix*.

----

.. _api_Matrix4_607ae9fb:

**Matrix4::Matrix4** (:ref:`Vector3<api_Vector3>` & *position*, :ref:`Quaternion<api_Quaternion>` & *rotation*, :ref:`Vector3<api_Vector3>` & *scale*)

Constructs matrix by given *position*, *rotation* and *scale*.

----

.. _api_Matrix4_e932ca61:

 areal **Matrix4::determinant** () const

Returns the matrix determinant.

----

.. _api_Matrix4_7c9206f4:

 void **Matrix4::direction** (:ref:`Vector3<api_Vector3>` & *direction*, :ref:`Vector3<api_Vector3>` & *up*)

Creates a rotation matrix based on *direction* and *up* vectors.

----

.. _api_Matrix4_b1cda809:

 :ref:`Vector3<api_Vector3>`  **Matrix4::euler** ()

Returns an Euler angles represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Matrix4_a13c05b8:

 void **Matrix4::identity** ()

Resets this matrix to an identity matrix.

----

.. _api_Matrix4_cfde92a0:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::inverse** () const

Returns an inverted copy of this matrix.

----

.. _api_Matrix4_a76e9513:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::lookAt** (:ref:`Vector3<api_Vector3>` & *eye*, :ref:`Vector3<api_Vector3>` & *target*, :ref:`Vector3<api_Vector3>` & *up*)

Creates a transformation matrix that corresponds to a camera viewing the *target* from the source. Receiving *eye* point, a *target* point, and an *up* vector.

----

.. _api_Matrix4_39a5ed16:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::ortho** (areal  *left*, areal  *right*, areal  *bottom*, areal  *top*, areal  *znear*, areal  *zfar*)

Creates an orthogonal projection matrix. Creates a view showing the area between *left*, *right*, *top* and *bottom*, with *znear* and *zfar* set up the depth clipping planes.

----

.. _api_Matrix4_1f5b9cd8:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::perspective** (areal  *fov*, areal  *aspect*, areal  *znear*, areal  *zfar*)

Creates a perspective projection matrix. *fov* is the vertical field-of-view in degrees of the perspective matrix, *aspect* is the *aspect* ratio (width divided by height). *znear* and *zfar* set up the depth clipping planes.

----

.. _api_Matrix4_439e07f6:

 :ref:`Vector3<api_Vector3>`  **Matrix4::position** () const

Returns position component of the matrix.

----

.. _api_Matrix4_e3f982c5:

 void **Matrix4::reflect** (:ref:`Vector4<api_Vector4>` & *plane*)

Constructs a matrix that reflects the coordinate system about the *plane*.

----

.. _api_Matrix4_9a637fd1:

 void **Matrix4::rotate** (:ref:`Vector3<api_Vector3>` & *angles*)

Rotate this matrix with Euler *angles* represented by Vector3(pitch, yaw, roll) in degrees.

----

.. _api_Matrix4_394af168:

 void **Matrix4::rotate** (:ref:`Vector3<api_Vector3>` & *axis*, areal  *angle*)

Rotate this matrix around *axis* to *angle* in degrees.

----

.. _api_Matrix4_b0e186f9:

 :ref:`Matrix3<api_Matrix3>`  **Matrix4::rotation** () const

Returns rotation matrix from this matrix.

----

.. _api_Matrix4_fac91802:

 void **Matrix4::scale** (:ref:`Vector3<api_Vector3>` & *vector*)

Scales the coordinate system by *vector*.

----

.. _api_Matrix4_da12e9b3:

 void **Matrix4::translate** (:ref:`Vector3<api_Vector3>` & *vector*)

Move the coordinate system to *vector*.

----

.. _api_Matrix4_986c0d5a:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::transpose** () const

Returns this matrix, transposed about its diagonal.

----

.. _api_Matrix4_8bf24e3a:

 void **Matrix4::zero** ()

Clear this matrix, with 0.0 value for all components.

----

.. _api_Matrix4_e64c85b1:

 bool **Matrix4::operator!=** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns true if this *matrix* is NOT equal to given *matrix*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix4_e746c5a8:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::operator*** (areal  *factor*) const

Returns the result of multiplying this matrix and the given *factor*.

----

.. _api_Matrix4_ab51037c:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::operator*** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns the result of multiplying this *matrix* by the given *matrix*.

Note that *matrix* multiplication is not commutative, i.e. a*b != b*a.

----

.. _api_Matrix4_195a7d04:

 :ref:`Vector3<api_Vector3>`  **Matrix4::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns the result of multiplying this matrix and the given 3D *vector*.

----

.. _api_Matrix4_6740c953:

 :ref:`Vector4<api_Vector4>`  **Matrix4::operator*** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns the result of multiplying this matrix and the given 4D *vector*.

----

.. _api_Matrix4_d7aeb91c:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator*=** (areal  *factor*)

Multiplies all elements of this matrix by *factor*.

----

.. _api_Matrix4_e147396c:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator*=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Returns the result of multiplying this *matrix* by the given *matrix*.

----

.. _api_Matrix4_7bd91c63:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::operator+** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns the sum of this *matrix* and the given *matrix*.

----

.. _api_Matrix4_183be75f:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator+=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Adds the contents of *matrix* to this *matrix*.

----

.. _api_Matrix4_7c3d2f01:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::operator-** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns the difference of this *matrix* and the given *matrix*.

----

.. _api_Matrix4_c8109fe2:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator-=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Subtracts the contents of *matrix* from this *matrix*.

----

.. _api_Matrix4_ec8f65d3:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator=** (:ref:`Matrix4<api_Matrix4>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Matrix4_6b845e09:

 bool **Matrix4::operator==** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns true if this *matrix* is equal to given *matrix*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix4_7c8fbd90:

 areal **Matrix4::operator[]** (int  *i*)

Returns the component of the matrix at *i*ndex position *i* as a modifiable reference. *i* must be a valid *i*ndex position *i*n the matrix (i.e., 0 <= *i* < 16). Data *i*s stored as column-major format so this function retrieving data from rows *i*n colmns.

.. _api_Matrix4_70239af5:

 areal **Matrix4::operator[]** (int  *i*) const

Returns the component of the matrix at *i*ndex position. *i* must be a valid *i*ndex position *i*n the matrix (i.e., 0 <= *i* < 16). Data *i*s stored as column-major format so this function retrieving data from rows *i*n colmns.


