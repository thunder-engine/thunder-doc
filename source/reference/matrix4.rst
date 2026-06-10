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
|                                | :ref:`Matrix4<api_Matrix4_78d029b4>` ()                                                                             |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`Matrix4<api_Matrix4_24fa6b53>` (const Matrix3 & matrix)                                                       |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`Matrix4<api_Matrix4_3a18057d>` (const Vector3 & position, const Quaternion & rotation, const Vector3 & scale) |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                          areal | :ref:`determinant<api_Matrix4_39d02f61>` () const                                                                   |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`direction<api_Matrix4_8b4a93e6>` (const Vector3 & direction, const Vector3 & up)                              |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`euler<api_Matrix4_418706cb>` ()                                                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`identity<api_Matrix4_4ced2865>` ()                                                                            |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`inverse<api_Matrix4_dc871fb9>` () const                                                                       |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`position<api_Matrix4_98b1d02a>` () const                                                                      |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`reflect<api_Matrix4_60389dc7>` (const Vector4 & plane)                                                        |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix4_4c25a0b9>` (const Vector3 & angles)                                                        |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`rotate<api_Matrix4_0a2793c4>` (const Vector3 & axis, areal  angle)                                            |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix3<api_Matrix3>` | :ref:`rotation<api_Matrix4_19c78306>` () const                                                                      |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`scale<api_Matrix4_de1493b6>` (const Vector3 & vector)                                                         |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`translate<api_Matrix4_269f407d>` (const Vector3 & vector)                                                     |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`transpose<api_Matrix4_14f3b758>` () const                                                                     |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`zero<api_Matrix4_732cba5d>` ()                                                                                |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_Matrix4_f10e97d2>` (const Matrix4 & matrix) const                                              |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`operator*<api_Matrix4_1724fc35>` (areal  factor) const                                                        |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`operator*<api_Matrix4_62edcb89>` (const Matrix4 & matrix) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Vector3<api_Vector3>` | :ref:`operator*<api_Matrix4_27e3cb45>` (const Vector3 & vector) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`operator*<api_Matrix4_075af4d6>` (const Vector4 & vector) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator*=<api_Matrix4_f4ed0765>` (areal  factor)                                                             |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator*=<api_Matrix4_8c35d249>` (const Matrix4 & matrix)                                                    |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`operator+<api_Matrix4_45718ba3>` (const Matrix4 & matrix) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator+=<api_Matrix4_2c608435>` (const Matrix4 & matrix)                                                    |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|    :ref:`Matrix4<api_Matrix4>` | :ref:`operator-<api_Matrix4_6829dc4e>` (const Matrix4 & matrix) const                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator-=<api_Matrix4_5f18b27d>` (const Matrix4 & matrix)                                                    |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` & | :ref:`operator=<api_Matrix4_f6ca3d24>` (const Matrix4 & value)                                                      |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_Matrix4_a486e091>` (const Matrix4 & matrix) const                                              |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix4_bef6230c>` (int  i)                                                                    |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+
|                          areal | :ref:`operator[]<api_Matrix4_a8950cd1>` (int  i) const                                                              |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------+



.. _api_Matrix4_static:

Static Methods
--------------

+------------------------------+----------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`lookAt<api_Matrix4_fb4815da>` (const Vector3 & eye, const Vector3 & target, const Vector3 & up)                |
+------------------------------+----------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`ortho<api_Matrix4_b05738ca>` (areal  left, areal  right, areal  bottom, areal  top, areal  znear, areal  zfar) |
+------------------------------+----------------------------------------------------------------------------------------------------------------------+
|  :ref:`Matrix4<api_Matrix4>` | :ref:`perspective<api_Matrix4_0946d32e>` (areal  fov, areal  aspect, areal  znear, areal  zfar)                      |
+------------------------------+----------------------------------------------------------------------------------------------------------------------+

.. _api_Matrix4_methods:

Methods Description
-------------------

.. _api_Matrix4_78d029b4:

**Matrix4::Matrix4** ()

Constructs an identity matrix.

----

.. _api_Matrix4_24fa6b53:

**Matrix4::Matrix4** (:ref:`Matrix3<api_Matrix3>` & *matrix*)

Constructs a transform *matrix* with rotation matrix.

----

.. _api_Matrix4_3a18057d:

**Matrix4::Matrix4** (:ref:`Vector3<api_Vector3>` & *position*, :ref:`Quaternion<api_Quaternion>` & *rotation*, :ref:`Vector3<api_Vector3>` & *scale*)

Constructs matrix by given position, *rotation* and scale.

----

.. _api_Matrix4_39d02f61:

 areal **Matrix4::determinant** () const

Returns the matrix determinant.

----

.. _api_Matrix4_8b4a93e6:

 void **Matrix4::direction** (:ref:`Vector3<api_Vector3>` & *direction*, :ref:`Vector3<api_Vector3>` & *up*)

Creates a rotation matrix based on *direction* and *up* vectors.

----

.. _api_Matrix4_418706cb:

 :ref:`Vector3<api_Vector3>`  **Matrix4::euler** ()

Returns an Euler angles represented by Vector3(pitch, yaw, roll) in rotation degrees.

----

.. _api_Matrix4_4ced2865:

 void **Matrix4::identity** ()

Resets this matrix to an identity matrix.

----

.. _api_Matrix4_dc871fb9:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::inverse** () const

Returns an inverted copy of this matrix.

----

.. _api_Matrix4_fb4815da:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::lookAt** (:ref:`Vector3<api_Vector3>` & *eye*, :ref:`Vector3<api_Vector3>` & *target*, :ref:`Vector3<api_Vector3>` & *up*)

Creates a transformation matrix that corresponds to a camera viewing the *target* from the source. Receiving *eye* point, a *target* point, and an *up* vector.

----

.. _api_Matrix4_b05738ca:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::ortho** (areal  *left*, areal  *right*, areal  *bottom*, areal  *top*, areal  *znear*, areal  *zfar*)

Creates an orthogonal projection matrix. Creates a view showing the area between left, right, *top* and bottom, with *znear* and *zfar* set up the depth clipping planes.

----

.. _api_Matrix4_0946d32e:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::perspective** (areal  *fov*, areal  *aspect*, areal  *znear*, areal  *zfar*)

Creates a perspective projection matrix. *fov* is the vertical field-of-view in degrees of the perspective matrix, *aspect* is the *aspect* ratio (width divided by height). *znear* and *zfar* set up the depth clipping planes.

----

.. _api_Matrix4_98b1d02a:

 :ref:`Vector3<api_Vector3>`  **Matrix4::position** () const

Returns position component of the matrix.

----

.. _api_Matrix4_60389dc7:

 void **Matrix4::reflect** (:ref:`Vector4<api_Vector4>` & *plane*)

Constructs a matrix that reflects the coordinate system about the plane.

----

.. _api_Matrix4_4c25a0b9:

 void **Matrix4::rotate** (:ref:`Vector3<api_Vector3>` & *angles*)

Rotate this matrix with Euler *angles* represented by Vector3(pitch, yaw, roll) in degrees.

----

.. _api_Matrix4_0a2793c4:

 void **Matrix4::rotate** (:ref:`Vector3<api_Vector3>` & *axis*, areal  *angle*)

Rotate this matrix around *axis* to *angle* in degrees.

----

.. _api_Matrix4_19c78306:

 :ref:`Matrix3<api_Matrix3>`  **Matrix4::rotation** () const

Returns rotation matrix from this matrix.

----

.. _api_Matrix4_de1493b6:

 void **Matrix4::scale** (:ref:`Vector3<api_Vector3>` & *vector*)

Scales the coordinate system by vector.

----

.. _api_Matrix4_269f407d:

 void **Matrix4::translate** (:ref:`Vector3<api_Vector3>` & *vector*)

Move the coordinate system to vector.

----

.. _api_Matrix4_14f3b758:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::transpose** () const

Returns this matrix, transposed about its diagonal.

----

.. _api_Matrix4_732cba5d:

 void **Matrix4::zero** ()

Clear this matrix, with 0.0 value for all components.

----

.. _api_Matrix4_f10e97d2:

 bool **Matrix4::operator!=** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns true if this *matrix* is NOT equal to given matrix; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix4_1724fc35:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::operator*** (areal  *factor*) const

Returns the result of multiplying this matrix and the given factor.

----

.. _api_Matrix4_62edcb89:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::operator*** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns the result of multiplying this *matrix* by the given matrix.

Note that *matrix* multiplication is not commutative, i.e. a*b != b*a.

----

.. _api_Matrix4_27e3cb45:

 :ref:`Vector3<api_Vector3>`  **Matrix4::operator*** (:ref:`Vector3<api_Vector3>` & *vector*) const

Returns the result of multiplying this matrix and the given 3D vector.

----

.. _api_Matrix4_075af4d6:

 :ref:`Vector4<api_Vector4>`  **Matrix4::operator*** (:ref:`Vector4<api_Vector4>` & *vector*) const

Returns the result of multiplying this matrix and the given 4D vector.

----

.. _api_Matrix4_f4ed0765:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator*=** (areal  *factor*)

Multiplies all elements of this matrix by factor.

----

.. _api_Matrix4_8c35d249:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator*=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Returns the result of multiplying this *matrix* by the given matrix.

----

.. _api_Matrix4_45718ba3:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::operator+** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns the sum of this *matrix* and the given matrix.

----

.. _api_Matrix4_2c608435:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator+=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Adds the contents of *matrix* to this matrix.

----

.. _api_Matrix4_6829dc4e:

 :ref:`Matrix4<api_Matrix4>`  **Matrix4::operator-** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns the difference of this *matrix* and the given matrix.

----

.. _api_Matrix4_5f18b27d:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator-=** (:ref:`Matrix4<api_Matrix4>` & *matrix*)

Subtracts the contents of *matrix* from this matrix.

----

.. _api_Matrix4_f6ca3d24:

 :ref:`Matrix4<api_Matrix4>` & **Matrix4::operator=** (:ref:`Matrix4<api_Matrix4>` & *value*)

Assignment operator. The *value* will be assigned to this object.

----

.. _api_Matrix4_a486e091:

 bool **Matrix4::operator==** (:ref:`Matrix4<api_Matrix4>` & *matrix*) const

Returns true if this *matrix* is equal to given matrix; otherwise returns false. This operator uses an exact floating-point comparison.

----

.. _api_Matrix4_bef6230c:

 areal **Matrix4::operator[]** (int  *i*)

Returns the component of the matrix at index position *i* as a modifiable reference. *i* must be a valid index position in the matrix (i.e., 0 <= *i* < 16). Data is stored as column-major format so this function retrieving data from rows in colmns.

.. _api_Matrix4_a8950cd1:

 areal **Matrix4::operator[]** (int  *i*) const

Returns the component of the matrix at index position. *i* must be a valid index position in the matrix (i.e., 0 <= *i* < 16). Data is stored as column-major format so this function retrieving data from rows in colmns.


