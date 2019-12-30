.. _api_Matrix4:
Matrix4 Class
================

Inherited: None

.. _api_Matrix4_description:
Description
-----------

Internally the data is stored as column-major format, so as to be optimal for passing to OpenGL functions, which expect column-major data.



.. _api_Matrix4_public:
Public Methods
--------------

+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                               | :ref:`Matrix4<api_Matrix4_Matrix4>` (const Vector3 & position, const Quaternion & rotation, const Vector3 & scale) |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                               | :ref:`Matrix4<api_Matrix4_Matrix4>` (const Matrix3 & matrix)                                                       |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|                               | :ref:`Matrix4<api_Matrix4_Matrix4>` ()                                                                             |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|       :ref:`areal<api_areal>` | :ref:`determinant<api_Matrix4_determinant>` () const                                                               |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|         :ref:`void<api_void>` | :ref:`direction<api_Matrix4_direction>` (const Vector3 & direction, const Vector3 & up)                            |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|   :ref:`Vector3<api_Vector3>` | :ref:`euler<api_Matrix4_euler>` ()                                                                                 |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|         :ref:`void<api_void>` | :ref:`identity<api_Matrix4_identity>` ()                                                                           |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|   :ref:`Matrix4<api_Matrix4>` | :ref:`inverse<api_Matrix4_inverse>` () const                                                                       |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|         :ref:`void<api_void>` | :ref:`reflect<api_Matrix4_reflect>` (const Vector4 & plane)                                                        |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|         :ref:`void<api_void>` | :ref:`rotate<api_Matrix4_rotate>` (const Vector3 & axis, areal  angle)                                             |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|         :ref:`void<api_void>` | :ref:`rotate<api_Matrix4_rotate>` (const Vector3 & angles)                                                         |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|   :ref:`Matrix3<api_Matrix3>` | :ref:`rotation<api_Matrix4_rotation>` () const                                                                     |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|         :ref:`void<api_void>` | :ref:`scale<api_Matrix4_scale>` (const Vector3 & vector)                                                           |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|         :ref:`void<api_void>` | :ref:`translate<api_Matrix4_translate>` (const Vector3 & vector)                                                   |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|   :ref:`Matrix4<api_Matrix4>` | :ref:`transpose<api_Matrix4_transpose>` () const                                                                   |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|         :ref:`void<api_void>` | :ref:`zero<api_Matrix4_zero>` ()                                                                                   |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|         :ref:`bool<api_bool>` | :ref:`operator!=<api_Matrix4_operator!=>` (const Matrix4 & matrix) const                                           |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|   :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Matrix4_operator*>` (const Vector3 & vector) const                                             |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|   :ref:`Vector4<api_Vector4>` | :ref:`operator*<api_Matrix4_operator*>` (const Vector4 & vector) const                                             |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|   :ref:`Matrix4<api_Matrix4>` | :ref:`operator*<api_Matrix4_operator*>` (areal  factor) const                                                      |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|   :ref:`Matrix4<api_Matrix4>` | :ref:`operator*<api_Matrix4_operator*>` (const Matrix4 & matrix) const                                             |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
| :ref:`Matrix4<api_Matrix4>` & | :ref:`operator*=<api_Matrix4_operator*=>` (areal  factor)                                                          |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
| :ref:`Matrix4<api_Matrix4>` & | :ref:`operator*=<api_Matrix4_operator*=>` (const Matrix4 & matrix)                                                 |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|   :ref:`Matrix4<api_Matrix4>` | :ref:`operator+<api_Matrix4_operator+>` (const Matrix4 & matrix) const                                             |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
| :ref:`Matrix4<api_Matrix4>` & | :ref:`operator+=<api_Matrix4_operator+=>` (const Matrix4 & matrix)                                                 |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|   :ref:`Matrix4<api_Matrix4>` | :ref:`operator-<api_Matrix4_operator->` (const Matrix4 & matrix) const                                             |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
| :ref:`Matrix4<api_Matrix4>` & | :ref:`operator-=<api_Matrix4_operator-=>` (const Matrix4 & matrix)                                                 |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|         :ref:`bool<api_bool>` | :ref:`operator==<api_Matrix4_operator==>` (const Matrix4 & matrix) const                                           |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|     :ref:`areal<api_areal>` & | :ref:`operator[]<api_Matrix4_operator[]>` (int  i)                                                                 |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+
|       :ref:`areal<api_areal>` | :ref:`operator[]<api_Matrix4_operator[]>` (int  i) const                                                           |
+-------------------------------+--------------------------------------------------------------------------------------------------------------------+

.. _api_Matrix4_static:
Static Methods
--------------

+-----------------------------+-------------------------------------------------------------------------------------------------------------------+
| :ref:`Matrix4<api_Matrix4>` | :ref:`lookAt<api_Matrix4_lookAt>` (Vector3 & eye, Vector3 & target, Vector3 & up)                                 |
+-----------------------------+-------------------------------------------------------------------------------------------------------------------+
| :ref:`Matrix4<api_Matrix4>` | :ref:`ortho<api_Matrix4_ortho>` (areal  left, areal  right, areal  bottom, areal  top, areal  znear, areal  zfar) |
+-----------------------------+-------------------------------------------------------------------------------------------------------------------+
| :ref:`Matrix4<api_Matrix4>` | :ref:`perspective<api_Matrix4_perspective>` (areal  fov, areal  aspect, areal  znear, areal  zfar)                |
+-----------------------------+-------------------------------------------------------------------------------------------------------------------+

.. _api_Matrix4_methods:
Methods Description
-------------------

.. _api_Matrix4_Matrix4:

**Matrix4::Matrix4** (:ref:`Vector3<api_Vector3>` & *position*, :ref:`Quaternion<api_Quaternion>` & *rotation*, :ref:`Vector3<api_Vector3>` & *scale*)

Constructs matrix by given *position*, *rotation* and *scale*.

----

.. _api_Matrix4_Matrix4:

**Matrix4::Matrix4** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Constructs a transform *matrix* with rotation *matrix*.

----

.. _api_Matrix4_Matrix4:

**Matrix4::Matrix4** ()

Constructs an identity matrix.

----

.. _api_Matrix4_determinant:

:ref:`areal<api_areal>`  **Matrix4::determinant** () const

Returns the matrix determinant.

----

.. _api_Matrix4_direction:

:ref:`void<api_void>`  **Matrix4::direction** (:ref:`Vector3<api_Vector3>` & *direction*, :ref:`Vector3<api_Vector3>` & *up*)

Creates a rotation matrix based on *direction* and *up* vectors.

----

.. _api_Matrix4_euler:

:ref:`Vector3<api_Vector3>`  **Matrix4::euler** ()

Returns an Euler angles represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Matrix4_identity:

:ref:`void<api_void>`  **Matrix4::identity** ()

Resets this matrix to an identity matrix.

----

.. _api_Matrix4_inverse:

:ref:`Matrix4<api_Matrix4>`  **Matrix4::inverse** () const

Returns an inverted copy of this matrix.

----

.. _api_Matrix4_lookAt:

:ref:`Matrix4<api_Matrix4>`  **Matrix4::lookAt** (:ref:`Vector3<api_Vector3>` & *eye*, :ref:`Vector3<api_Vector3>` & *target*, :ref:`Vector3<api_Vector3>` & *up*)

Creates a transformation matrix that corresponds to a camera viewing the *target* from the source. Receiving *eye* point, a *target* point, and an *up* vector.

----

.. _api_Matrix4_ortho:

:ref:`Matrix4<api_Matrix4>`  **Matrix4::ortho** (:ref:`areal<api_areal>`  *left*, :ref:`areal<api_areal>`  *right*, :ref:`areal<api_areal>`  *bottom*, :ref:`areal<api_areal>`  *top*, :ref:`areal<api_areal>`  *znear*, :ref:`areal<api_areal>`  *zfar*)

Creates an orthogonal projection matrix. Creates a view showing the area between *left*, *right*, *top* and *bottom*, with *znear* and *zfar* set up the depth clipping planes.

----

.. _api_Matrix4_perspective:

:ref:`Matrix4<api_Matrix4>`  **Matrix4::perspective** (:ref:`areal<api_areal>`  *fov*, :ref:`areal<api_areal>`  *aspect*, :ref:`areal<api_areal>`  *znear*, :ref:`areal<api_areal>`  *zfar*)

Creates a perspective projection matrix. *fov* is the vertical field-of-view in degrees of the perspective matrix, *aspect* is the *aspect* ratio (width divided by height). *znear* and *zfar* set up the depth clipping planes.

----

.. _api_Matrix4_reflect:

:ref:`void<api_void>`  **Matrix4::reflect** (:ref:`Vector4<api_Vector4>` & *plane*)

Constructs a matrix that reflects the coordinate system about the *plane*.

----

.. _api_Matrix4_rotate:

:ref:`void<api_void>`  **Matrix4::rotate** (:ref:`Vector3<api_Vector3>` & *axis*, :ref:`areal<api_areal>`  *angle*)

Rotate this matrix around *axis* to *angle* in degrees.

----

.. _api_Matrix4_rotate:

:ref:`void<api_void>`  **Matrix4::rotate** (:ref:`Vector3<api_Vector3>` & *angles*)

Rotate this matrix with Euler *angles* represented by Vector3(pitch, yaw, roll) in degrees.

----

.. _api_Matrix4_rotation:

:ref:`Matrix3<api_Matrix3>`  **Matrix4::rotation** () const

Returns rotation matrix from this matrix.

----

.. _api_Matrix4_scale:

:ref:`void<api_void>`  **Matrix4::scale** (:ref:`Vector3<api_Vector3>` & *vector*)

Scales the coordinate system by *vector*.

----

.. _api_Matrix4_translate:

:ref:`void<api_void>`  **Matrix4::translate** (:ref:`Vector3<api_Vector3>` & *vector*)

Move the coordinate system to *vector*.

----

.. _api_Matrix4_transpose:

:ref:`Matrix4<api_Matrix4>`  **Matrix4::transpose** () const

Returns this matrix, transposed about its diagonal.

----

.. _api_Matrix4_zero:

:ref:`void<api_void>`  **Matrix4::zero** ()

Clear this matrix, with 0.0 value for all components.

----

.. _api_Matrix4_operator!=:

:ref:`bool<api_bool>`  **Matrix4::operator!=** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns true if this *matrix* is NOT equal to given *matrix*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix4_operator*:

:ref:`Vector3<api_Vector3>`  **Matrix4::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns the result of multiplying this matrix and the given 3D *vector*.

----

.. _api_Matrix4_operator*:

:ref:`Vector4<api_Vector4>`  **Matrix4::operator*** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns the result of multiplying this matrix and the given 4D *vector*.

----

.. _api_Matrix4_operator*:

:ref:`Matrix4<api_Matrix4>`  **Matrix4::operator*** (:ref:`areal<api_areal>`  *factor*) const

Returns the result of multiplying this matrix and the given *factor*.

----

.. _api_Matrix4_operator*:

:ref:`Matrix4<api_Matrix4>`  **Matrix4::operator*** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns the result of multiplying this *matrix* by the given *matrix*.

Note that *matrix* multiplication is not commutative, i.e. a*b != b*a.

----

.. _api_Matrix4_operator*=:

:ref:`Matrix4<api_Matrix4>` & **Matrix4::operator*=** (:ref:`areal<api_areal>`  *factor*)

Multiplies all elements of this matrix by *factor*.

----

.. _api_Matrix4_operator*=:

:ref:`Matrix4<api_Matrix4>` & **Matrix4::operator*=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Returns the result of multiplying this *matrix* by the given *matrix*.

----

.. _api_Matrix4_operator+:

:ref:`Matrix4<api_Matrix4>`  **Matrix4::operator+** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns the sum of this *matrix* and the given *matrix*.

----

.. _api_Matrix4_operator+=:

:ref:`Matrix4<api_Matrix4>` & **Matrix4::operator+=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Adds the contents of *matrix* to this *matrix*.

----

.. _api_Matrix4_operator-:

:ref:`Matrix4<api_Matrix4>`  **Matrix4::operator-** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns the difference of this *matrix* and the given *matrix*.

----

.. _api_Matrix4_operator-=:

:ref:`Matrix4<api_Matrix4>` & **Matrix4::operator-=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Subtracts the contents of *matrix* from this *matrix*.

----

.. _api_Matrix4_operator==:

:ref:`bool<api_bool>`  **Matrix4::operator==** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns true if this *matrix* is equal to given *matrix*; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix4_operator[]:

:ref:`areal<api_areal>` & **Matrix4::operator[]** (:ref:`int<api_int>`  *i*)

Returns the component of the matrix at *i*ndex position *i* as a modifiable reference. *i* must be a valid *i*ndex position *i*n the matrix (i.e., 0 <= *i* < 16). Data *i*s stored as column-major format so this function retrieving data from rows *i*n colmns.

----

.. _api_Matrix4_operator[]:

:ref:`areal<api_areal>`  **Matrix4::operator[]** (:ref:`int<api_int>`  *i*) const

Returns the component of the matrix at *i*ndex position. *i* must be a valid *i*ndex position *i*n the matrix (i.e., 0 <= *i* < 16). Data *i*s stored as column-major format so this function retrieving data from rows *i*n colmns.

----


