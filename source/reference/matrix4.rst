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
|                                | :ref:`Matrix4<api_Matrix4_cb805a34>` ()                                                                             |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`Matrix4<api_Matrix4_cafe1524>` (const Matrix3 & matrix)                                                       |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`Matrix4<api_Matrix4_0a5fced7>` (const Vector3 & position, const Quaternion & rotation, const Vector3 & scale) |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                          areal | :ref:`determinant<api_Matrix4_71e9624c>` () const                                                                   |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`direction<api_Matrix4_c9db2756>` (const Vector3 & direction, const Vector3 & up)                              |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`euler<api_Matrix4_ba4d0c52>` ()                                                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`identity<api_Matrix4_a63408ef>` ()                                                                            |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`inverse<api_Matrix4_b9faec21>` () const                                                                       |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`position<api_Matrix4_cd369148>` () const                                                                      |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`reflect<api_Matrix4_c74e0a15>` (const Vector4 & plane)                                                        |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix4_417cd6e8>` (const Vector3 & axis, areal  angle)                                            |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix4_7942e086>` (const Vector3 & angles)                                                        |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`rotation<api_Matrix4_f62a87b3>` () const                                                                      |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`scale<api_Matrix4_a9c75b30>` (const Vector3 & vector)                                                         |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`translate<api_Matrix4_7189bfcd>` (const Vector3 & vector)                                                     |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`transpose<api_Matrix4_b940852c>` () const                                                                     |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`zero<api_Matrix4_ac7df03e>` ()                                                                                |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_Matrix4_4501cdb8>` (const Matrix4 & matrix) const                                              |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Matrix4_06a9e5c4>` (const Vector3 & vector) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`operator*<api_Matrix4_7f42893b>` (const Vector4 & vector) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`operator*<api_Matrix4_357ac10b>` (areal  factor) const                                                        |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`operator*<api_Matrix4_1256b780>` (const Matrix4 & matrix) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator*=<api_Matrix4_6185c79f>` (areal  factor)                                                             |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator*=<api_Matrix4_e41750d9>` (const Matrix4 & matrix)                                                    |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`operator+<api_Matrix4_1cf24bd7>` (const Matrix4 & matrix) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator+=<api_Matrix4_2c605ad4>` (const Matrix4 & matrix)                                                    |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`operator-<api_Matrix4_f50293e7>` (const Matrix4 & matrix) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator-=<api_Matrix4_f823dec7>` (const Matrix4 & matrix)                                                    |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator=<api_Matrix4_9fd1b407>` (const Matrix4 & value)                                                      |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_Matrix4_9ef06b53>` (const Matrix4 & matrix) const                                              |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix4_acf5d71b>` (int  i)                                                                    |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix4_eb684a09>` (int  i) const                                                              |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+



.. _api_Matrix4_static:

Static Methods
--------------

+------------------------------+----------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`lookAt<api_Matrix4_47cb390f>` (const Vector3 & eye, const Vector3 & target, const Vector3 & up)                |
+------------------------------+----------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`ortho<api_Matrix4_f0731d2c>` (areal  left, areal  right, areal  bottom, areal  top, areal  znear, areal  zfar) |
+------------------------------+----------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`perspective<api_Matrix4_d90efa75>` (areal  fov, areal  aspect, areal  znear, areal  zfar)                      |
+------------------------------+----------------------------------------------------------------------------------------------------------------------+

.. _api_Matrix4_methods:

Methods Description
-------------------

.. _api_Matrix4_cb805a34:

**Matrix4::Matrix4** ()

Constructs an identity matrix.

----

.. _api_Matrix4_cafe1524:

**Matrix4::Matrix4** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Constructs a transform *matrix* with rotation matrix.

----

.. _api_Matrix4_0a5fced7:

**Matrix4::Matrix4** (:ref:`Vector3<api_Vector3>` & *position*, :ref:`Quaternion<api_Quaternion>` & *rotation*, :ref:`Vector3<api_Vector3>` & *scale*)

Constructs matrix by given position, *rotation* and scale.

----

.. _api_Matrix4_71e9624c:

 areal **Matrix4::determinant** () const

Returns the matrix determinant.

----

.. _api_Matrix4_c9db2756:

 void **Matrix4::direction** (:ref:`Vector3<api_Vector3>` & *direction*, :ref:`Vector3<api_Vector3>` & *up*)

Creates a rotation matrix based on *direction* and *up* vectors.

----

.. _api_Matrix4_ba4d0c52:

 :ref:`Vector3<api_Vector3>`  **Matrix4::euler** ()

Returns an Euler angles represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Matrix4_a63408ef:

 void **Matrix4::identity** ()

Resets this matrix to an identity matrix.

----

.. _api_Matrix4_b9faec21:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::inverse** () const

Returns an inverted copy of this matrix.

----

.. _api_Matrix4_47cb390f:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::lookAt** (:ref:`Vector3<api_Vector3>` & *eye*, :ref:`Vector3<api_Vector3>` & *target*, :ref:`Vector3<api_Vector3>` & *up*)

Creates a transformation matrix that corresponds to a camera viewing the *target* from the source. Receiving *eye* point, a *target* point, and an *up* vector.

----

.. _api_Matrix4_f0731d2c:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::ortho** (areal  *left*, areal  *right*, areal  *bottom*, areal  *top*, areal  *znear*, areal  *zfar*)

Creates an orthogonal projection matrix. Creates a view showing the area between left, right, *top* and bottom, with *znear* and *zfar* set up the depth clipping planes.

----

.. _api_Matrix4_d90efa75:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::perspective** (areal  *fov*, areal  *aspect*, areal  *znear*, areal  *zfar*)

Creates a perspective projection matrix. *fov* is the vertical field-of-view in degrees of the perspective matrix, *aspect* is the *aspect* ratio (width divided by height). *znear* and *zfar* set up the depth clipping planes.

----

.. _api_Matrix4_cd369148:

 :ref:`Vector3<api_Vector3>`  **Matrix4::position** () const

Returns position component of the matrix.

----

.. _api_Matrix4_c74e0a15:

 void **Matrix4::reflect** (:ref:`Vector4<api_Vector4>` & *plane*)

Constructs a matrix that reflects the coordinate system about the plane.

----

.. _api_Matrix4_417cd6e8:

 void **Matrix4::rotate** (:ref:`Vector3<api_Vector3>` & *axis*, areal  *angle*)

Rotate this matrix around *axis* to *angle* in degrees.

----

.. _api_Matrix4_7942e086:

 void **Matrix4::rotate** (:ref:`Vector3<api_Vector3>` & *angles*)

Rotate this matrix with Euler *angles* represented by Vector3(pitch, yaw, roll) in degrees.

----

.. _api_Matrix4_f62a87b3:

 :ref:`Matrix3<api_Matrix3>`  **Matrix4::rotation** () const

Returns rotation matrix from this matrix.

----

.. _api_Matrix4_a9c75b30:

 void **Matrix4::scale** (:ref:`Vector3<api_Vector3>` & *vector*)

Scales the coordinate system by vector.

----

.. _api_Matrix4_7189bfcd:

 void **Matrix4::translate** (:ref:`Vector3<api_Vector3>` & *vector*)

Move the coordinate system to vector.

----

.. _api_Matrix4_b940852c:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::transpose** () const

Returns this matrix, transposed about its diagonal.

----

.. _api_Matrix4_ac7df03e:

 void **Matrix4::zero** ()

Clear this matrix, with 0.0 value for all components.

----

.. _api_Matrix4_4501cdb8:

 bool **Matrix4::operator!=** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns true if this *matrix* is NOT equal to given matrix; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix4_06a9e5c4:

 :ref:`Vector3<api_Vector3>`  **Matrix4::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns the result of multiplying this matrix and the given 3D vector.

----

.. _api_Matrix4_7f42893b:

 :ref:`Vector4<api_Vector4>`  **Matrix4::operator*** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns the result of multiplying this matrix and the given 4D vector.

----

.. _api_Matrix4_357ac10b:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::operator*** (areal  *factor*) const

Returns the result of multiplying this matrix and the given factor.

----

.. _api_Matrix4_1256b780:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::operator*** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns the result of multiplying this *matrix* by the given matrix.

Note that *matrix* multiplication is not commutative, i.e. a*b != b*a.

----

.. _api_Matrix4_6185c79f:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator*=** (areal  *factor*)

Multiplies all elements of this matrix by factor.

----

.. _api_Matrix4_e41750d9:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator*=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Returns the result of multiplying this *matrix* by the given matrix.

----

.. _api_Matrix4_1cf24bd7:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::operator+** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns the sum of this *matrix* and the given matrix.

----

.. _api_Matrix4_2c605ad4:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator+=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Adds the contents of *matrix* to this matrix.

----

.. _api_Matrix4_f50293e7:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::operator-** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns the difference of this *matrix* and the given matrix.

----

.. _api_Matrix4_f823dec7:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator-=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Subtracts the contents of *matrix* from this matrix.

----

.. _api_Matrix4_9fd1b407:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator=** (:ref:`Matrix4<api_Matrix4>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Matrix4_9ef06b53:

 bool **Matrix4::operator==** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns true if this *matrix* is equal to given matrix; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix4_acf5d71b:

 areal **Matrix4::operator[]** (int  *i*)

Returns the component of the matrix at index position *i* as a modifiable reference. *i* must be a valid index position in the matrix (i.e., 0 <= *i* < 16). Data is stored as column-major format so this function retrieving data from rows in colmns.

.. _api_Matrix4_eb684a09:

 areal **Matrix4::operator[]** (int  *i*) const

Returns the component of the matrix at index position. *i* must be a valid index position in the matrix (i.e., 0 <= *i* < 16). Data is stored as column-major format so this function retrieving data from rows in colmns.


